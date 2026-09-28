#!/usr/bin/env node
/* ==================================================================
   fetch-cases.js
   ------------------------------------------------------------------
   Reads official court feeds and writes cases-incoming.js.

       node fetch-cases.js              # fetch live, write the file
       node fetch-cases.js --dry-run    # print what it would do
       node fetch-cases.js --fixture d  # parse .xml/.html in dir d

   WHAT THIS IS ALLOWED TO DO
   It lists judgments: case name, citation, date, court, and a link to
   the judgment. Every one of those is copied from the court's own
   feed. It performs no interpretation.

   WHAT THIS MUST NEVER DO
   Write `sum` or `why`. It has not read the judgment. A summary is a
   claim about what a court decided, made to people whose lives have
   gone wrong, and it is only ever written by something that read the
   thing. See UPDATING.md.

   WHY A SEPARATE FILE
   cases-recent.js is curated by hand and is the only place summaries
   live. This script never opens it for writing. The worst a bad run
   can do is put junk in cases-incoming.js, and app.js falls back to
   an empty list if that file is missing or malformed — so the site
   keeps working either way.

   The triage step promotes an entry from incoming to recent, adding a
   stream, an area, and a summary if it earns one. Nothing reaches the
   curated list without a human or a reader in the loop.
   ================================================================== */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const HERE      = __dirname;
const INCOMING  = path.join(HERE, 'cases-incoming.js');
const RECENTF   = path.join(HERE, 'cases-recent.js');

const DRY     = process.argv.includes('--dry-run');
const FIXIDX  = process.argv.indexOf('--fixture');
const FIXTURE = FIXIDX > -1 ? process.argv[FIXIDX + 1] : null;

/* How long an unreviewed listing stays visible, and how many are kept.
   An entry that ages out was never a claim about anything — just a
   pointer — and the section already tells the reader it is not a
   complete record. */
const MAX_AGE_DAYS = 75;
const MAX_TOTAL    = 40;

/* ------------------------------------------------------------------
   SOURCES
   Adding one is a block here plus nothing else. `cap` is the most a
   single run will take from that source, which is what stops a
   high-volume court from burying a low-volume one.
   ------------------------------------------------------------------ */
const SOURCES = [
  { key:'uksc', kind:'atom', cap:10,
    court:'UK Supreme Court', iso:'GBR',
    url:'https://caselaw.nationalarchives.gov.uk/atom.xml?court=uksc&order=-date',
    fixture:'uksc.xml' },

  { key:'ewca-civ', kind:'atom', cap:6,
    court:'Court of Appeal (Civil Division)', iso:'GBR',
    url:'https://caselaw.nationalarchives.gov.uk/atom.xml?court=ewca/civ&order=-date',
    fixture:'ewca-civ.xml' },

  { key:'ewca-crim', kind:'atom', cap:4,
    court:'Court of Appeal (Criminal Division)', iso:'GBR',
    url:'https://caselaw.nationalarchives.gov.uk/atom.xml?court=ewca/crim&order=-date',
    fixture:'ewca-crim.xml' },

  { key:'scotus', kind:'scotus', cap:6,
    court:'US Supreme Court', iso:'USA',
    url:'https://www.supremecourt.gov/opinions/slipopinion/25',
    fixture:'scotus.html' },
];

/* ------------------------------------------------------------------
   helpers
   ------------------------------------------------------------------ */
const log = (...a) => console.log(...a);

function unxml(s){
  return String(s == null ? '' : s)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g,'<').replace(/&gt;/g,'>')
    .replace(/&quot;/g,'"').replace(/&apos;/g,"'")
    .replace(/&#(\d+);/g, (_,d)=>String.fromCodePoint(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_,h)=>String.fromCodePoint(parseInt(h,16)))
    .replace(/&nbsp;/g,' ')
    .replace(/&amp;/g,'&')          // last, so &amp;lt; does not double-decode
    .replace(/\s+/g,' ').trim();
}

/* Emit an ASCII-only single-quoted JS literal. Keeps the file free of
   raw curly characters, which is the house style, and means no
   encoding surprise can change what the file means. */
function jsStr(s){
  let out = "'";
  for (const ch of String(s == null ? '' : s)) {
    const c = ch.codePointAt(0);
    if (ch === '\\') out += '\\\\';
    else if (ch === "'") out += "\\'";
    else if (ch === '\n') out += '\\n';
    else if (c < 32 || c > 126) out += '\\u' + c.toString(16).padStart(4,'0');
    else out += ch;
  }
  return out + "'";
}

function isoDate(s){
  const m = /(\d{4})-(\d{2})-(\d{2})/.exec(String(s||''));
  return m ? m[0] : null;
}

function daysAgo(iso){
  const t = Date.parse(iso + 'T00:00:00Z');
  if (Number.isNaN(t)) return Infinity;
  return (Date.now() - t) / 86400000;
}

function today(){ return new Date().toISOString().slice(0,10); }

/* Read one of the site's data files without letting a broken file take
   the script down. `const` does not become a VM context property, so
   the values come back through an appended probe expression. */
function readData(file, names){
  const probe = ';({' + names.map(n=>`${n}: typeof ${n}!=='undefined'?${n}:undefined`).join(',') + '})';
  try {
    const src = fs.readFileSync(file, 'utf8');
    return vm.runInNewContext(src + probe, {}, {timeout:5000}) || {};
  } catch (e) {
    log(`  note: could not read ${path.basename(file)} (${e.message}) — treating as empty`);
    return {};
  }
}

async function getText(src){
  if (FIXTURE) {
    const p = path.join(FIXTURE, src.fixture);
    log(`  fixture: ${p}`);
    return fs.readFileSync(p, 'utf8');
  }
  const res = await fetch(src.url, {
    headers:{ 'user-agent':'LawOrchard/1.0 (+https://github.com/Aminokings/Lawvector-main)',
              'accept':'application/atom+xml, application/xml, text/html' },
    redirect:'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

/* ------------------------------------------------------------------
   PARSERS
   Each returns [{t, cite, date, src, srcName}] and throws on nothing.
   A parser that finds no entries is reported, not fatal — one court
   changing its markup must not stop the others.
   ------------------------------------------------------------------ */

/* National Archives Atom. Every entry carries the neutral citation in
   a tna:identifier, so the citation is never inferred from the URL. */
function parseAtom(xml, src){
  const out = [];
  for (const m of xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
    const e = m[1];

    const title = unxml((/<title\b[^>]*>([\s\S]*?)<\/title>/.exec(e)||[])[1]);
    const date  = isoDate((/<published\b[^>]*>([\s\S]*?)<\/published>/.exec(e)||[])[1]);

    const cite = unxml(
      (/<tna:identifier\b[^>]*\btype="ukncn"[^>]*>([\s\S]*?)<\/tna:identifier>/.exec(e)||[])[1]
    );

    /* the judgment page, not data.xml and not the asset PDF */
    let link = '';
    for (const l of e.matchAll(/<link\b([^>]*)\/>/g)) {
      const at = l[1];
      if (!/rel="alternate"/.test(at)) continue;
      if (/type="application\//.test(at)) continue;
      const href = unxml((/href="([^"]+)"/.exec(at)||[])[1]);
      if (!href || /\/data\.xml$/.test(href)) continue;
      link = href; break;
    }

    if (!title || !date || !link || !cite) continue;
    out.push({ t:title, cite, date, src:link, srcName:'Judgment (National Archives)' });
  }
  return out;
}

/* supremecourt.gov slip-opinion table. Tolerant by design: the page is
   ASP.NET and its markup has changed before, so anything that does not
   look like a full row is skipped rather than guessed at. */
function parseScotus(html, src){
  const out = [];
  const body = html.replace(/\s+/g,' ');

  for (const row of body.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(c=>c[1]);
    if (cells.length < 4) continue;

    /* date is M/D/YY or MM/DD/YY in its own cell */
    const dm = /(\d{1,2})\/(\d{1,2})\/(\d{2})\b/.exec(cells[1] || '');
    if (!dm) continue;
    const yr = 2000 + Number(dm[3]);
    const date = `${yr}-${String(dm[1]).padStart(2,'0')}-${String(dm[2]).padStart(2,'0')}`;

    const docket = unxml((cells[2]||'').replace(/<[^>]+>/g,''));

    const a = /<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/.exec(cells[3] || '');
    if (!a) continue;
    let href = unxml(a[1]);
    if (href.startsWith('/')) href = 'https://www.supremecourt.gov' + href;
    const name = unxml(a[2].replace(/<[^>]+>/g,''));
    if (!name || !/^https?:/.test(href)) continue;

    out.push({
      t: name,
      cite: docket ? `US Supreme Court, No. ${docket}` : 'US Supreme Court',
      date, src: href, srcName:'Slip opinion (PDF)',
    });
  }
  return out;
}

/* ------------------------------------------------------------------
   id — stable, derived from the source URL so the same judgment always
   gets the same id, and prefixed so it cannot collide with a curated
   entry in cases-recent.js.
   ------------------------------------------------------------------ */
function makeId(item){
  const tail = (item.src.replace(/\/+$/,'').split('/').slice(-3).join('-') || 'x')
    .replace(/[^a-z0-9-]/gi,'').toLowerCase().slice(-28);
  return 'i-' + tail;
}

/* ------------------------------------------------------------------
   main
   ------------------------------------------------------------------ */
async function main(){
  log('\nfetch-cases — listing only, no summaries\n');

  const rec = readData(RECENTF,  ['RECENT']);
  const inc = readData(INCOMING, ['INCOMING']);

  const curated = Array.isArray(rec.RECENT) ? rec.RECENT : [];
  const held    = Array.isArray(inc.INCOMING) ? inc.INCOMING : [];

  /* Dedupe on citation AND on source URL. Citation is the better key
     but SCOTUS has no neutral citation, so the URL carries it there. */
  const seenCite = new Set(curated.concat(held).map(c=>String(c.cite||'').toLowerCase()).filter(Boolean));
  const seenSrc  = new Set(curated.concat(held).map(c=>String(c.src ||'').toLowerCase()).filter(Boolean));

  log(`  curated in cases-recent.js : ${curated.length}`);
  log(`  already held as incoming   : ${held.length}\n`);

  const fresh = [];
  const report = [];

  for (const s of SOURCES) {
    let items = [], err = null;
    try {
      const text = await getText(s);
      items = s.kind === 'atom' ? parseAtom(text, s) : parseScotus(text, s);
    } catch (e) {
      err = e.message;
    }

    if (err) { report.push(`  ${s.key.padEnd(10)} FAILED   ${err}`); continue; }
    if (!items.length) { report.push(`  ${s.key.padEnd(10)} 0 parsed  (markup may have changed)`); continue; }

    let added = 0, dupe = 0, old = 0;
    for (const it of items) {
      if (added >= s.cap) break;
      const ck = String(it.cite).toLowerCase(), sk = String(it.src).toLowerCase();
      if (seenCite.has(ck) || seenSrc.has(sk)) { dupe++; continue; }
      if (daysAgo(it.date) > MAX_AGE_DAYS)     { old++;  continue; }
      seenCite.add(ck); seenSrc.add(sk);
      fresh.push({ ...it, id:makeId(it), court:s.court, iso:s.iso });
      added++;
    }
    report.push(`  ${s.key.padEnd(10)} ${items.length} parsed, ${added} new, ${dupe} known, ${old} too old`);
  }

  log('sources:');
  report.forEach(r=>log(r));

  /* keep: everything still fresh enough, newest first, capped */
  const kept = held
    .filter(h => h && h.date && daysAgo(h.date) <= MAX_AGE_DAYS)
    .concat(fresh)
    .sort((a,b)=>String(b.date).localeCompare(String(a.date)))
    .slice(0, MAX_TOTAL);

  const dropped = held.length + fresh.length - kept.length;

  log(`\n  new this run : ${fresh.length}`);
  log(`  aged out     : ${dropped > 0 ? dropped : 0}`);
  log(`  total held   : ${kept.length}`);

  if (fresh.length) {
    log('\nnew listings:');
    for (const f of fresh) log(`  ${f.date}  ${f.cite}  ${f.t.slice(0,58)}`);
  }

  if (DRY) { log('\n--dry-run: nothing written.\n'); return 0; }

  /* nothing changed → do not touch the file, so the workflow has
     nothing to commit and the repo history stays quiet */
  const sameAsBefore = fresh.length === 0 && dropped <= 0;
  if (sameAsBefore) { log('\nno change — file left alone.\n'); return 0; }

  fs.writeFileSync(INCOMING, render(kept), 'utf8');
  log(`\nwrote cases-incoming.js (${kept.length} listings)\n`);
  return 0;
}

function render(items){
  const head = `/* ==================================================================
   LawOrchard — incoming listings
   ------------------------------------------------------------------
   GENERATED FILE. Do not edit by hand; fetch-cases.js overwrites it.

   These are judgments taken straight from the courts' own feeds. Each
   entry is a case name, a citation, a date, a court and a link - all
   of it copied, none of it interpreted. NOTHING HERE HAS BEEN READ,
   which is why there is no summary field at all: the file has no way
   to make a claim about what any of these decided.

   Triage promotes an entry into cases-recent.js, where it gains a
   stream, an area, and a summary if it earns one. See UPDATING.md.

   Written: ${today()}
   ================================================================== */
const INCOMING_UPDATED = ${jsStr(today())};
const INCOMING = [
`;

  const body = items.map(c => `{id:${jsStr(c.id)}, t:${jsStr(c.t)},
 cite:${jsStr(c.cite)}, date:${jsStr(c.date)}, court:${jsStr(c.court)}, iso:${jsStr(c.iso)},
 src:${jsStr(c.src)}, srcName:${jsStr(c.srcName)}},`).join('\n\n');

  return head + body + '\n];\n';
}

main().then(c=>process.exit(c||0)).catch(e=>{
  console.error('\nfetch-cases failed:', e.message, '\n');
  process.exit(1);
});
