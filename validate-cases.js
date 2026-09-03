#!/usr/bin/env node
/* ==================================================================
   validate-cases.js
   ------------------------------------------------------------------
   Run this before committing any change to cases-recent.js.

       node validate-cases.js

   Exits 0 if the file is safe to publish, 1 if it is not. The
   automatic update is required to run it and to abandon the commit
   on a non-zero exit.

   This is a development tool. No page ever loads it, so it is
   harmless if it ends up on the server.
   ================================================================== */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FILE = path.join(__dirname, 'cases-recent.js');
const problems = [];
const warnings = [];
const fail = m => problems.push(m);
const warn = m => warnings.push(m);

/* ---------- 1. it must exist and it must parse ---------- */
let src;
try { src = fs.readFileSync(FILE, 'utf8'); }
catch { console.error('FAIL  cases-recent.js is missing.'); process.exit(1); }

/* `const` declarations do not become properties of a VM context, so the
   values are collected by an expression appended to the same script —
   that way it shares their lexical scope. */
const PROBE = `
;({ RECENT:         typeof RECENT         !== 'undefined' ? RECENT         : undefined,
    PENDING:        typeof PENDING        !== 'undefined' ? PENDING        : undefined,
    CURRENTS:       typeof CURRENTS       !== 'undefined' ? CURRENTS       : undefined,
    RECENT_UPDATED: typeof RECENT_UPDATED !== 'undefined' ? RECENT_UPDATED : undefined })`;

let RECENT, PENDING, CURRENTS, RECENT_UPDATED;
try {
  const ctx = vm.createContext({});
  ({ RECENT, PENDING, CURRENTS, RECENT_UPDATED } = vm.runInContext(src + PROBE, ctx, { timeout: 4000 }));
} catch (e) {
  console.error('FAIL  cases-recent.js does not parse: ' + e.message);
  process.exit(1);
}

/* ---------- 2. shape ---------- */
if (!Array.isArray(RECENT)) fail('RECENT is not an array.');
if (PENDING !== undefined && !Array.isArray(PENDING)) fail('PENDING is present but is not an array.');
if (typeof RECENT_UPDATED !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(RECENT_UPDATED || ''))
  fail('RECENT_UPDATED must be a YYYY-MM-DD string.');

/* ---------- 3. every entry ---------- */
const REQUIRED = ['id', 't', 'cite', 'date', 'court', 'area', 'stream', 'src'];
const STREAMS = ['people', 'landmark'];
const seen = new Set();
const today = new Date().toISOString().slice(0, 10);

(Array.isArray(RECENT) ? RECENT : []).forEach((c, i) => {
  const at = `RECENT[${i}] ${c && c.id ? '(' + c.id + ')' : ''}`;
  if (!c || typeof c !== 'object') return fail(at + ' is not an object.');

  REQUIRED.forEach(k => {
    if (!c[k] || String(c[k]).trim() === '') fail(`${at} is missing "${k}".`);
  });

  if (c.id) {
    if (seen.has(c.id)) fail(`${at} duplicate id.`);
    seen.add(c.id);
    if (!/^[a-z0-9_-]+$/.test(c.id)) fail(`${at} id must be lowercase ascii letters, digits, - or _.`);
  }

  /* THE RULE THAT MATTERS: no source, no entry. */
  if (c.src && !/^https:\/\//.test(c.src)) fail(`${at} src must be an https URL.`);

  /* A summary is a claim about what a real court decided. It needs a source. */
  if (c.sum && String(c.sum).trim() && !c.src)
    fail(`${at} has a summary but no source. Remove the summary or add the source.`);

  if (c.stream && !STREAMS.includes(c.stream))
    fail(`${at} stream must be one of: ${STREAMS.join(', ')}.`);

  if (c.date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c.date)) fail(`${at} date must be YYYY-MM-DD.`);
    else if (isNaN(new Date(c.date + 'T00:00:00Z'))) fail(`${at} date is not a real date.`);
    else if (c.date > today) fail(`${at} is dated in the future (${c.date}).`);
  }

  /* Style checks — non-fatal, but they catch sloppy writing. */
  if (c.sum && c.sum.length > 1400) warn(`${at} summary is very long (${c.sum.length} chars).`);
  if (c.sum && c.sum.length < 80) warn(`${at} summary is suspiciously short.`);
  if (c.why && !c.sum) warn(`${at} explains why it matters but never says what was decided.`);
  if (/\b(will|shall) (definitely|certainly)\b|\bguarantee/i.test((c.sum || '') + (c.why || '')))
    warn(`${at} reads as a prediction or a promise. Keep it descriptive.`);
});

/* CURRENTS — the wider picture. Not court decisions, so no citation, but the
   same rule applies: a figure without a source does not go in. */
(Array.isArray(CURRENTS) ? CURRENTS : []).forEach((c, i) => {
  const at = `CURRENTS[${i}] ${c && c.id ? '(' + c.id + ')' : ''}`;
  ['id', 't', 'date', 'area', 'sum', 'src'].forEach(k => {
    if (!c[k] || String(c[k]).trim() === '') fail(`${at} is missing "${k}".`);
  });
  if (c.id) {
    if (seen.has(c.id)) fail(`${at} duplicate id (clashes with a case).`);
    seen.add(c.id);
  }
  if (c.src && !/^https:\/\//.test(c.src)) fail(`${at} src must be an https URL.`);
  if (c.date && !/^\d{4}-\d{2}-\d{2}$/.test(c.date)) fail(`${at} date must be YYYY-MM-DD.`);
  if (c.date && c.date > today) fail(`${at} is dated in the future (${c.date}).`);
  /* a trend claim with a number in it and no source is the worst case here */
  if (/\d/.test(c.sum || '') && !c.src) fail(`${at} states figures with no source.`);
});

(Array.isArray(PENDING) ? PENDING : []).forEach((p, i) => {
  const at = `PENDING[${i}] ${p && p.id ? '(' + p.id + ')' : ''}`;
  ['id', 't', 'court', 'what', 'stage', 'src'].forEach(k => {
    if (!p[k] || String(p[k]).trim() === '') fail(`${at} is missing "${k}".`);
  });
  if (p.src && !/^https:\/\//.test(p.src)) fail(`${at} src must be an https URL.`);
  if (p.cite) warn(`${at} has a citation but is listed as undecided. Move it to RECENT if judgment is out.`);
});

/* ---------- 4. report ---------- */
const nEx = (RECENT || []).filter(c => c && c.sum).length;
const nLi = (RECENT || []).length - nEx;

console.log('');
console.log(`  cases-recent.js — ${(RECENT || []).length} decisions (${nEx} explained, ${nLi} listed), ` +
            `${(CURRENTS || []).length} currents, ${(PENDING || []).length} pending, reviewed ${RECENT_UPDATED}`);
console.log('');

warnings.forEach(w => console.log('  warn  ' + w));
if (warnings.length) console.log('');

if (problems.length) {
  problems.forEach(p => console.log('  FAIL  ' + p));
  console.log(`\n  ${problems.length} problem(s). Do not commit.\n`);
  process.exit(1);
}
console.log('  Passed. Safe to commit.\n');
process.exit(0);
