/* ==================================================================
   LawOrchard — recent decisions
   ------------------------------------------------------------------
   This file is SEPARATE from app.js on purpose. It is the only file
   the automatic update writes to, so a bad write can never break the
   rest of the site — app.js falls back to an empty list if this file
   is missing or malformed.

   RULES FOR ANYTHING ADDED HERE
   1. Every entry must have a `src` pointing at the judgment itself or
      at an official court page. No source, no entry. Ever.
   2. `sum` is only filled in when the holding has actually been read.
      If the outcome is not confirmed, leave `sum` empty — the entry
      renders as "listed only" with a link, which is honest.
   3. Never state what a case decided on the strength of a headline.
      Law reporting is full of confident summaries that are wrong.
   4. `stream` is 'people' (changes what someone can do) or
      'landmark' (doctrinally significant).

   Fields: id, t (case name), cite, date (ISO), court, iso, area,
           stream, sum (plain-English, may be ''), why (may be ''),
           src, srcName
   ================================================================== */
const RECENT_UPDATED = '2026-09-03';
const RECENT = [

{id:'ukscdol', t:'A Reference by the Attorney General for Northern Ireland',
 cite:'[2026] UKSC 16', date:'2026-06-02', court:'UK Supreme Court', iso:'GBR',
 area:'Mental capacity', stream:'people',
 sum:'The UK Supreme Court overruled its own 2014 decision in Cheshire West and removed the "acid test" that had governed when someone is deprived of their liberty. Under Cheshire West, a person who was under continuous supervision and not free to leave was deprived of their liberty — full stop — and that triggered a formal authorisation process. The Court held that this was wrong for six separate reasons, the most important being that lacking mental capacity is not the same as being unable to consent. Someone may lack legal capacity to decide where they live and still understand their situation well enough to say they are content with it.',
 why:'This is the biggest change to adult safeguarding law in over a decade, and it cuts both ways. There were 364,900 authorisation requests in England in 2024/25, most of them for people over 65 in care homes, and only 21% were processed within the legal time limit. Far fewer will now be needed. But the flip side is real: some older and disabled people may lose a legal safeguard simply because they do not object to their care. If you have a relative in a care home under one of these authorisations, it may now be reviewed and removed.',
 src:'https://supremecourt.uk/uploads/uksc_2025_0042_judgment_4f54653cf4.pdf', srcName:'Judgment (PDF)'},

{id:'ukscep', t:'Emotional Perception AI Ltd v Comptroller General of Patents',
 cite:'[2026] UKSC 3', date:'2026-02-11', court:'UK Supreme Court', iso:'GBR',
 area:'Patents and AI', stream:'landmark',
 sum:'The Supreme Court ruled on whether an artificial neural network can be patented, and in doing so held that the long-standing approach from Aerotel v Telco Holdings should no longer be followed. Aerotel had supplied the structured test English courts used for two decades to decide whether something was an unpatentable "computer program as such".',
 why:'Software patents in the UK have been decided by the Aerotel framework since 2006. Replacing it changes the ground rules for anyone trying to patent software or a machine-learning system, and it arrives while every major jurisdiction is separately working out how patent law applies to AI. Expect it to be cited well beyond the UK.',
 src:'https://supremecourt.uk/cases/uksc-2024-0131', srcName:'Supreme Court case page'},

/* ---- listed, not yet summarised. Linked so a reader can check for
   themselves rather than take an unverified summary on trust. ---- */

{id:'uksclr', t:'Lewis-Ranwell v G4S Health Services (UK) Ltd',
 cite:'[2026] UKSC 2', date:'2026-01-21', court:'UK Supreme Court', iso:'GBR',
 area:'Illegality and insanity', stream:'landmark', sum:'', why:'',
 src:'https://www.supremecourt.uk/cases/uksc-2024-0039', srcName:'Supreme Court case page'},

{id:'uksccc', t:'CCC v Sheffield Teaching Hospitals NHS Foundation Trust',
 cite:'[2026] UKSC 5', date:'2026-02-11', court:'UK Supreme Court', iso:'GBR',
 area:'Clinical negligence', stream:'people', sum:'', why:'',
 src:'https://supremecourt.uk/cases/uksc-2023-0111', srcName:'Supreme Court case page'},

{id:'ukscthg', t:'THG Plc v Zedra Trust Company (Jersey) Ltd',
 cite:'[2026] UKSC 6', date:'2026-02-25', court:'UK Supreme Court', iso:'GBR',
 area:'Limitation periods', stream:'landmark', sum:'', why:'',
 src:'https://supremecourt.uk/cases/uksc-2024-0047', srcName:'Supreme Court case page'},

{id:'ukscabj', t:'R v ABJ',
 cite:'[2026] UKSC 8', date:'2026-02-26', court:'UK Supreme Court', iso:'GBR',
 area:'Free expression', stream:'landmark', sum:'', why:'',
 src:'https://supremecourt.uk/cases/uksc-2025-0079', srcName:'Supreme Court case page'},

{id:'ukscxy', t:'In the matter of X and Y (Children: Adoption Order: Setting Aside)',
 cite:'[2026] UKSC 13', date:'2026-04-22', court:'UK Supreme Court', iso:'GBR',
 area:'Adoption', stream:'people', sum:'', why:'',
 src:'https://supremecourt.uk/cases/uksc-2025-0039', srcName:'Supreme Court case page'},

{id:'ukscgat', t:'Gatwick Investment Ltd v Liberty Mutual Insurance Europe SE',
 cite:'[2026] UKSC 14', date:'2026-04-23', court:'UK Supreme Court', iso:'GBR',
 area:'Insurance and furlough', stream:'people', sum:'', why:'',
 src:'https://supremecourt.uk/cases/uksc-2025-0067', srcName:'Supreme Court case page'},

{id:'ukscdil', t:'In the matter of an application by Dillon and others for Judicial Review',
 cite:'[2026] UKSC 15', date:'2026-05-07', court:'UK Supreme Court', iso:'GBR',
 area:'Human rights', stream:'landmark', sum:'', why:'',
 src:'https://supremecourt.uk/cases/uksc-2025-0013', srcName:'Supreme Court case page'},

{id:'ukscprov', t:'Providence Building Services Ltd v Hexagon Housing Association Ltd',
 cite:'[2026] UKSC 1', date:'2026-01-15', court:'UK Supreme Court', iso:'GBR',
 area:'Contract', stream:'landmark', sum:'', why:'',
 src:'https://www.supremecourt.uk/cases/uksc-2024-0130', srcName:'Supreme Court case page'},

{id:'ukscoat', t:'Dairy UK Ltd v Oatly AB',
 cite:'[2026] UKSC 4', date:'2026-02-11', court:'UK Supreme Court', iso:'GBR',
 area:'Trade marks', stream:'landmark', sum:'', why:'',
 src:'https://supremecourt.uk/cases/uksc-2025-0004', srcName:'Supreme Court case page'}
];

/* Cases argued but not yet decided. Worth watching, clearly separated
   from anything that has actually been ruled on. */
const PENDING = [
{id:'crowther', t:'Crowther v Board of Regents of the University System of Georgia',
 date:'2026-05-18', court:'US Supreme Court', iso:'USA', area:'Discrimination at work',
 what:'Whether employees of federally funded schools and universities — coaches, professors, administrators — can sue their employer directly under Title IX for sex discrimination, or whether that route belongs to students only. Federal appeal courts have disagreed on this for decades.',
 stage:'Certiorari granted 18 May 2026; not yet decided',
 src:'https://www.ropesgray.com/en/insights/alerts/2026/06/supreme-court-to-resolve-circuit-split-on-title-ix-employment-discrimination-claims',
 srcName:'Case note'}
];
