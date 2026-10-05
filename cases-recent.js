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
const RECENT_UPDATED = '2026-10-05';
const RECENT = [

{id:'ewcahodge', t:'Hodge and others v R',
 cite:'[2026] EWCA Crim 1181', date:'2026-09-16', court:'Court of Appeal (Criminal Division)', iso:'GBR',
 area:'Sentencing', stream:'people',
 sum:'The Court of Appeal set out how judges must apply the new rule that most short prison sentences are to be suspended. Under section 277A of the Sentencing Act 2020, added by the Sentencing Act 2026, when a court decides that an adult deserves a prison term of 12 months or less it must suspend it \u2014 the person stays in the community, usually under conditions, and can be sent to prison if they reoffend or break those conditions \u2014 unless there are \u201cexceptional circumstances\u201d that justify immediate prison. Some cases fall outside the rule altogether, such as where the offence involved breaching a court order. The Court held that exceptional circumstances can be found where the offender\u2019s blame or the harm caused, or both, were exceptionally high, or where there is an exceptional need to deter others, and that this is a limited class of case. In causing death by careless driving, the fact that someone died is relevant but not enough on its own. It therefore suspended the prison terms of two drivers who had caused deaths by careless driving, upheld immediate prison for a driver over the drink and drug limits who seriously injured two people, and replaced a police officer\u2019s suspended sentence for misconduct in public office with 15 months\u2019 immediate imprisonment, which is long enough to fall outside the rule.',
 why:'The Court made clear the rule means what it says: in the words of an earlier ruling it quoted, Parliament has decided that short prison sentences \u201cshould almost always be suspended\u201d. Judges must now identify and explain what makes a case truly exceptional, and the seriousness of the offence on its own will rarely be enough. People facing a short sentence gain the most. Victims and bereaved families are the most likely to feel the loss: the Court acknowledged that, before the change, deaths caused by serious careless driving had often led to immediate prison, and that is now much less likely. Cases judged to deserve more than 12 months are untouched, which is why the police officer\u2019s sentence went up rather than being suspended. This judgment explains how the rule is to be applied; the rule itself was made by Parliament.',
 src:'https://caselaw.nationalarchives.gov.uk/ewca/crim/2026/1181', srcName:'Judgment (National Archives)'},

{id:'ewcatdb', t:'R (TDB) v London Borough of Haringey',
 cite:'[2026] EWCA Civ 1184', date:'2026-09-15', court:'Court of Appeal (Civil Division)', iso:'GBR',
 area:'Social care and capacity', stream:'people',
 sum:'The Court of Appeal allowed the appeal and set aside a council\u2019s assessment of a young disabled man\u2019s care needs. It held that when a council assesses an adult\u2019s needs for care and support under the Care Act 2014, and there is reason to doubt whether the person can make the decisions involved, it must first carry out a mental capacity assessment \u2014 a formal check, under the Mental Capacity Act 2005, of whether the person can make a particular decision for themselves \u2014 done by someone properly qualified, before the needs assessment is completed. T, who is 25, is autistic, has ADHD and other complex needs, had earlier been found to lack capacity to make decisions about using social media, and staff at his placement were concerned about his capacity. The council assessed his needs without assessing his capacity. The Court said capacity does not depend on whether someone is labelled as having a learning disability, and that the legal starting point that adults have capacity is no reason to avoid checking when it is genuinely in doubt. It also held that, given his complex needs, not seeking advice from a psychologist or psychiatrist was irrational. Lord Justice Baker observed that the point appeared never to have been decided in the nineteen years since the Mental Capacity Act came into force.',
 why:'A Care Act assessment decides what help a disabled or older adult gets, and this ruling means it cannot simply assume the person can make every decision it turns on when there is real reason to doubt it. People whose capacity is in question, and the families who support them, gain an assessment built on a proper footing rather than on choices the person may not be able to make. The cost falls on councils: the Court accepted this adds work and some expense to assessments, while saying more accurate assessments should in time mean better use of resources. A capacity assessment can also cut the other way \u2014 where someone is found to lack capacity over a decision, others make it for them, in what is judged to be their best interests. In this case the Court did not order a fresh assessment, because decisions about T\u2019s care are now before the Court of Protection, the court that decides matters for people who lack capacity.',
 src:'https://caselaw.nationalarchives.gov.uk/ewca/civ/2026/1184', srcName:'Judgment (National Archives)'},

{id:'ukscavon', t:'Avon Freeholds Ltd v Cresta Court E RTM Company Ltd',
 cite:'[2026] UKSC 31', date:'2026-08-27', court:'UK Supreme Court', iso:'GBR',
 area:'Leasehold flats', stream:'people',
 sum:'The Supreme Court unanimously allowed the leaseholders\u2019 appeal and held that a landlord cannot defeat a right to manage claim by pointing to a procedural slip. The right to manage lets the leaseholders of a block of flats take over its management from the landlord through a company they form for the purpose, called an RTM company. Before claiming, the company must send a notice inviting every qualifying leaseholder who has not already joined to become a member, and then wait 14 days. At Cresta Court in London one leaseholder was missed out, although she joined the company a few days later and supported the claim. The Court of Appeal had held that this made the claim void. The Supreme Court disagreed. The notice rules exist to protect leaseholders, not landlords, and treating every breach as fatal would let anyone, the landlord included, knock out a claim on a technicality. A landlord can dispute a claim only on the basic conditions for the right to manage, not on these procedural steps; a slip in them is dealt with instead by a court\u2019s power to order the company to put it right.',
 why:'Leaseholders taking over the running of their building gain the most. A claim knocked out on a technicality has to start again from the beginning, and this one reached its final answer more than four years after the claim was made. Landlords and managing agents who oppose a claim lose a tactical lever: a missed invitation or a short waiting period no longer sinks it, though a court can still order the company to comply. The Court also said that remarks in its own 2024 decision in A1 Properties v Tudor Studios, which the landlord relied on, were not part of that decision\u2019s binding reasoning. The ruling is about the notice rules in this case; it does not change who qualifies for the right to manage or which buildings it applies to.',
 src:'https://caselaw.nationalarchives.gov.uk/uksc/2026/31', srcName:'Judgment (National Archives)'},

{id:'ukscaugustine', t:'Augustine v Data Cars Ltd',
 cite:'[2026] UKSC 30', date:'2026-08-12', court:'UK Supreme Court', iso:'GBR',
 area:'Part-time workers', stream:'people',
 sum:'The Supreme Court unanimously allowed the appeal of a part-time private hire driver and settled what a part-time worker has to show to bring a claim. The Part-time Workers Regulations 2000 protect a part-time worker from being treated less favourably than a comparable full-time colleague \u201con the ground that\u201d they work part-time, unless the employer can show objective justification, meaning a legitimate reason pursued in a proportionate way. Mr Augustine paid the same fixed weekly fee as full-time drivers to use his employer\u2019s booking system, so he paid more for each hour he drove. His claim had failed partly because part-time work was not the only reason for the fee, and the appeal courts below felt bound by a 2007 decision of Scotland\u2019s Court of Session that said it had to be. The Supreme Court held that is wrong. It is enough that working part-time was an effective cause of the worse treatment, even if there were other causes too. Those other causes can still matter \u2014 to whether the employer can justify the treatment, or to how much compensation is awarded \u2014 but they do not stop the right arising in the first place.',
 why:'Part-time workers no longer have to prove that working part-time was the only reason they were treated worse, only that it was a real cause. Employers could previously defeat a claim by pointing to a second reason, such as cost or business need, sitting alongside the part-time status; that now goes to whether the treatment is justified, not to whether the protection applies at all. Employers lose that early exit and will more often have to show a legitimate reason applied proportionately, and that falls on small businesses like this one as well as on large employers. The protection itself stays narrow: it still generally needs a real full-time colleague to compare with, and employers can still justify a difference. The ruling settles the test; it does not decide whether any particular fee or rule is lawful.',
 src:'https://caselaw.nationalarchives.gov.uk/uksc/2026/30', srcName:'Judgment (National Archives)'},

{id:'ukscsheikh', t:'R v Sheikh and others',
 cite:'[2026] UKSC 28', date:'2026-07-27', court:'UK Supreme Court', iso:'GBR',
 area:'Failure to protect', stream:'landmark',
 sum:'The Supreme Court unanimously allowed the prosecution\u2019s appeal and restored the convictions of four members of one household. Section 5 of the Domestic Violence, Crime and Victims Act 2004 makes it a crime to cause or allow the death or serious physical harm of a child or vulnerable adult in the same household, where the defendant knew or ought to have known of a significant risk of serious harm, did not take reasonable steps to protect them, and the harm happened \u201cin circumstances of the kind\u201d the defendant foresaw or ought to have foreseen. It exists for cases where the prosecution cannot prove which person in a home caused the harm. Here a young woman living with her husband\u2019s family suffered a brain injury from which she has never regained consciousness; the prosecution said it was most likely caused by a medicine prescribed to someone else, days after an earlier serious injury that they all knew about. The Court of Appeal had overturned the convictions because the two harms were so different. The Supreme Court held that was too narrow: the words focus on the circumstances in which the harm happened, not the exact act or method, and a different method is not necessarily fatal. The phrase has its ordinary meaning, and judges need not define it for juries.',
 why:'This offence is what stops everyone in a household walking free when it is clear one of them harmed a child or vulnerable adult but not which one. Such harm usually happens in private, where exactly what happened cannot be known, and the Court of Appeal\u2019s reading would have let defendants escape whenever the final harm was caused differently from the earlier harm they knew about. The ruling strengthens protection for children and vulnerable adults at home. The cost falls on those who live alongside an abuser: they can be convicted, and face up to life imprisonment where the victim dies, for failing to protect someone from harm they did not inflict and whose exact form they did not foresee. The Court said the requirement still protects defendants: the risk someone knew about may be limited to particular situations, such as when the abuser is drunk or a baby has been distressed for a long time, and there is no offence if the harm happened in circumstances of a kind they could not have foreseen.',
 src:'https://caselaw.nationalarchives.gov.uk/uksc/2026/28', srcName:'Judgment (National Archives)'},

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
