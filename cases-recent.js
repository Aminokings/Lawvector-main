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
const RECENT_UPDATED = '2026-09-23';
const RECENT = [

{id:'ukscquaye', t:'R (Quaye) v Secretary of State for Justice',
 cite:'[2026] UKSC 34', date:'2026-09-22', court:'UK Supreme Court', iso:'GBR',
 area:'Sentencing of children', stream:'people',
 sum:'The Supreme Court unanimously dismissed the appeal and held that the law is compatible with the European Convention on Human Rights. A child convicted of murder is sentenced to detention at His Majesty’s pleasure — detention with no fixed end date, where the judge sets a minimum term that must be served before the Parole Board can consider release. Until 2021, anyone serving that sentence could ask the Justice Secretary halfway through to review and reduce the minimum term as an act of clemency, meaning mercy for exceptional progress in custody. Section 128 of the Police, Crime, Sentencing and Courts Act 2022 limited that right to people who were still under 18 on the day they were sentenced. Mr Quaye committed the offence at 17 years and nine months but was sentenced at 18 years and five months, so he lost it. The Court held his detention was not arbitrary: over the last century Parliament replaced the Justice Secretary’s open-ended discretion with a minimum term set by a judge, so nothing in the sentence itself now requires a rolling review. Nor was the age cut-off unjustified discrimination — Parliament was entitled to draw a firm line to spare victims’ families the distress of being contacted for a fresh statement every time an offender applies.',
 why:'The 2022 change is now settled rather than under challenge, and it falls unevenly. Whether someone keeps the halfway review can turn on how long a police investigation or a court listing took rather than on anything they did, and those sentenced after their eighteenth birthday have lost that route for good. Release itself is untouched — the Parole Board still considers it at the end of the minimum term. Against that, victims’ families no longer face being asked to relive the case each time a review is requested, which the Court accepted as a legitimate reason for the change. The Court also held that taking away a possible reduction is not a “heavier penalty”, because it changes how a sentence is carried out rather than the sentence itself — a distinction likely to be argued about well beyond this case.',
 src:'https://caselaw.nationalarchives.gov.uk/uksc/2026/34', srcName:'Judgment (National Archives)'},

{id:'ukscdm', t:'In the Petition of DM',
 cite:'[2026] UKSC 32', date:'2026-09-09', court:'UK Supreme Court', iso:'GBR',
 area:'Child abduction', stream:'people',
 sum:'The Supreme Court unanimously dismissed the appeal, and a 14-year-old boy will not be returned to the United States. Where one parent takes a child to another country without the other parent’s agreement, the Hague Convention on child abduction normally requires the child to be sent back quickly. There is an exception, known as article 13(b): return can be refused where there is a grave risk it would expose the child to serious harm, or otherwise place the child in a situation they could not reasonably be expected to put up with. The Court decided two things. First, a child’s own views can be taken into account when a court works out whether that exception applies — the Scottish appeal court had been wrong to leave them out. Views are never decisive, though, and a judge must weigh how far they are authentically the child’s own rather than shaped by a parent. Second, where the risk relied on is that the other parent would take their own life if the children were sent back, a court must examine that claim with great care rather than assume it is true; but once a real risk is established, even a small one counts as grave, because of how serious the consequences for a child would be.',
 why:'Hague Convention cases are decided fast and settle which country a child grows up in, so the rules about what a judge may take into account carry real weight. A child old enough to have a view is now clearly entitled to be heard on the question of harm itself, not only on whether they object to going back — and just as clearly, being heard is not the same as being obeyed. The second half cuts the other way. Insisting that a claimed risk be tested rather than assumed makes it harder to resist a return order on an untested assertion, which protects the parent left behind; but once a genuine risk is found, the bar for calling it grave is low. In this case the father lost, having won before the first judge who heard it.',
 src:'https://caselaw.nationalarchives.gov.uk/uksc/2026/32', srcName:'Judgment (National Archives)'},

{id:'ukscforth', t:'Forthwell Ltd v Pontegadea UK Ltd',
 cite:'[2026] UKSC 33', date:'2026-09-17', court:'UK Supreme Court', iso:'GBR',
 area:'Contract damages', stream:'landmark',
 sum:'The Supreme Court unanimously dismissed the appeal and refused to widen the rule on who can sue for whose losses. The tenant of the Rogano, a long-established Glasgow restaurant, held the lease but let a subsidiary company it owned actually run the business. Flooding and a fire left the premises unusable, the repairs were never done, and the restaurant never reopened. The tenant sued the landlord for the trading profits the subsidiary had lost. The general rule is that only a party to a contract can claim damages, and only for losses it suffered itself. The tenant asked the Court to adopt a suggestion made by Lord Clyde in a 2001 case: let the contracting party recover the third party’s loss and then hand it over, so that the loss does not fall into a “black hole” where nobody at all can claim it. The Court held this is not the law of Scotland, and not the law of England and Wales either. It would be too wide, because it would expose someone to liability towards a third party they never knew was involved when they signed, and too vague to apply consistently. The Court did confirm that the narrower, long-standing Albazero exception — which applies where both sides had a third party’s possible loss in mind when they made the contract — is part of Scots law.',
 why:'Where a business puts the lease or contract in one company and trades through another, a breach can leave the trading losses legally unclaimable by anybody: the company that suffered them has no contract, and the company with the contract did not suffer them. This confirms that the gap is real and that courts will not close it by stretching the law of damages. The remedy has to be built into the contract, or come through the third-party rights legislation that exists separately in Scotland and in England and Wales. Groups of companies, landlords and anyone contracting through a subsidiary have a clear answer now, and it is not a generous one. One unusual detail is worth knowing: the parties settled on the morning of the hearing and asked to withdraw the appeal, and the Court refused and heard it anyway, because the legal question mattered beyond the two of them.',
 src:'https://caselaw.nationalarchives.gov.uk/uksc/2026/33', srcName:'Judgment (National Archives)'},

{id:'ukscdol', t:'A Reference by the Attorney General for Northern Ireland',
 cite:'[2026] UKSC 16', date:'2026-06-02', court:'UK Supreme Court', iso:'GBR',
 area:'Mental capacity', stream:'people',
 sum:'The UK Supreme Court overruled its own 2014 decision in Cheshire West and removed the "acid test" that had governed when someone is deprived of their liberty. Under Cheshire West, a person who was under continuous supervision and not free to leave was deprived of their liberty — full stop — and that triggered a formal authorisation process. The Court held that this was wrong for six separate reasons, the most important being that lacking mental capacity is not the same as being unable to consent. Someone may lack legal capacity to decide where they live and still understand their situation well enough to say they are content with it.',
 why:'This is the biggest change to adult safeguarding law in over a decade, and it cuts both ways. There were 364,900 authorisation requests in England in 2024/25, most of them for people over 65 in care homes, and only 21% were processed within the legal time limit. Far fewer will now be needed. But the flip side is real: some older and disabled people may lose a legal safeguard simply because they do not object to their care. If you have a relative in a care home under one of these authorisations, it may now be reviewed and removed.',
 src:'https://supremecourt.uk/uploads/uksc_2025_0042_judgment_4f54653cf4.pdf', srcName:'Judgment (PDF)'},

{id:'icjstrike', t:'Right to Strike under ILO Convention No. 87 (advisory opinion)',
 cite:'ICJ, advisory opinion', date:'2026-05-21', court:'International Court of Justice', iso:'',
 area:'Workers\u2019 rights', stream:'people',
 sum:'By ten votes to four the International Court of Justice held that the right to strike is protected under ILO Convention No. 87, the 1948 treaty on freedom of association. The question had been referred by the International Labour Organization after decades of deadlock between governments, unions and employers over whether a treaty that never uses the word "strike" nonetheless protects it. The Court said it does. It also went out of its way to say it was not defining the scope of that right \u2014 what counts as a lawful strike, and what limits a state may place on it, are left open.',
 why:'Roughly 160 countries have ratified Convention 87, so this reaches far beyond the courtroom. Advisory opinions are not binding, but national courts and labour tribunals routinely treat them as authoritative, and unions now have a much stronger footing when a government says striking is not a protected activity. The unresolved half matters just as much: because the Court declined to define scope, the fights over essential-services bans, notice requirements and secondary action all continue.',
 src:'https://www.icj-cij.org/case/191', srcName:'ICJ case file'},

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

/* The wider picture: shifts that are not a single ruling. Same rule as
   everything else here \u2014 a figure without a source does not go in. */
const CURRENTS = [
{id:'wjp2025', t:'Rule of law fell in more than two thirds of countries',
 date:'2025-10-28', area:'Rule of law', kind:'Index',
 sum:'The World Justice Project\u2019s 2025 index found 68% of the 143 countries it measures had declined, against 57% the year before \u2014 the sharpest annual drop since the index began in 2009, and the eighth consecutive year in which more countries fell than rose. The asymmetry is the striking part: countries that improved gained an average of 0.52%, while those that declined lost 1.07%, twice as much.',
 why:'Rule of law is not an abstraction. It is whether a court will hear you, whether a decision can be challenged, and whether the answer depends on who you are. A broad decline means those things are getting harder in more places at once than at any point this index has recorded.',
 src:'https://worldjusticeproject.org/news/wjp-rule-law-index-2025-global-press-release', srcName:'World Justice Project'},

{id:'unctaddp', t:'Data protection law now covers most of the world, very unevenly',
 date:'2026-01-01', area:'Data protection', kind:'Coverage',
 sum:'UNCTAD\u2019s cyberlaw tracker puts data protection legislation in place across 71% of the 194 economies it follows, with 9% at draft stage and 15% with nothing at all. The regional spread is enormous: 96% of European countries have such a law, against 69% in the Americas, 57% in Asia and the Pacific, and 50% in Africa.',
 why:'Whether you can find out what a company holds about you, object to it, or complain to anyone who can act, depends almost entirely on which of those groups your country falls into. The gap is not closing evenly, and half of Africa still has no framework at all.',
 src:'https://unctad.org/topic/ecommerce-and-digital-economy/ecommerce-law-reform/summary-adoption-e-commerce-legislation-worldwide', srcName:'UNCTAD Global Cyberlaw Tracker'}
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
