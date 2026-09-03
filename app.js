
/* ==================================================================
   DATA — JURISDICTIONS
   iso|name|tradition|rol,jud,corr,rights,order,civil,criminal|incarc|dp|jury|proc|const|apex|col,row
   Headline rule-of-law figures are calibrated to the WJP Rule of Law
   Index (0-1 scaled to 0-100). Sub-dimensions are a modelled
   decomposition — indicative of profile shape, not published values.
   ================================================================== */
const JRAW=`
DNK|Denmark|CV|90,92,95,88,85,88,84|72|A|L|I|1849|Højesteret|11,2
NOR|Norway|CV|89,91,94,89,88,86,84|54|A|L|I|1814|Høyesterett|11,1
FIN|Finland|CV|87,90,94,88,88,85,83|52|A|L|I|2000|Korkein oikeus|13,1
ISL|Iceland|CV|87,88,91,88,89,84,80|40|A|L|I|1944|Hæstiréttur|8,1
SWE|Sweden|CV|86,89,92,87,84,84,80|82|A|L|I|1974|Högsta domstolen|12,1
CHE|Switzerland|CV|84,87,89,84,86,83,79|71|A|L|M|1999|Bundesgericht|11,4
NLD|Netherlands|CV|83,86,88,85,82,82,78|65|A|N|I|1815|Hoge Raad|10,3
DEU|Germany|CV|83,88,86,84,82,83,78|68|A|L|I|1949|Bundesverfassungsgericht|11,3
NZL|New Zealand|CM|83,87,89,83,81,80,76|155|A|J|A|0|Supreme Court|23,11
EST|Estonia|CV|81,84,85,82,84,79,74|180|A|L|I|1992|Riigikohus|13,2
IRL|Ireland|CM|81,86,83,83,80,79,74|90|A|J|A|1937|Supreme Court|9,2
AUT|Austria|CV|80,84,82,82,82,80,75|100|A|L|I|1920|Verfassungsgerichtshof|12,4
GBR|United Kingdom|CM|79,84,83,80,78,78,72|141|A|J|A|0|UK Supreme Court|10,2
CAN|Canada|MX|79,85,84,81,79,77,73|104|A|J|A|1867|Supreme Court of Canada|4,2
AUS|Australia|CM|79,84,84,79,80,78,73|160|A|J|A|1901|High Court of Australia|21,10
JPN|Japan|CV|78,79,82,79,90,76,66|33|R|L|M|1947|Saikō Saibansho|22,4
SGP|Singapore|CM|78,74,88,62,95,80,79|190|R|N|A|1965|Court of Appeal|19,8
BEL|Belgium|CV|78,81,80,80,76,76,71|105|A|J|I|1831|Cour de cassation|9,3
TWN|Taiwan|CV|77,80,79,79,84,75,71|240|R|L|M|1947|Constitutional Court|20,5
FRA|France|CV|73,76,76,76,74,72,67|106|A|J|I|1958|Cour de cassation|10,4
KOR|South Korea|CV|73,76,73,77,80,73,68|105|P|L|M|1948|Constitutional Court|21,4
ESP|Spain|CV|71,71,71,77,76,70,66|118|A|J|I|1978|Tribunal Supremo|9,5
PRT|Portugal|CV|71,74,72,78,80,66,66|110|A|J|I|1976|Supremo Tribunal|8,5
URY|Uruguay|CV|71,76,76,76,64,68,64|400|A|N|M|1967|Suprema Corte|6,10
USA|United States|CM|70,66,68,72,66,68,60|531|R|J|A|1789|US Supreme Court|4,4
ISR|Israel|MX|68,74,70,66,60,68,62|234|X|N|A|0|Supreme Court|14,5
CRI|Costa Rica|CV|68,74,72,75,64,63,60|230|A|N|M|1949|Sala Constitucional|4,6
CHL|Chile|CV|67,72,70,73,64,64,61|250|A|N|M|1980|Corte Suprema|4,10
ITA|Italy|CV|66,70,64,74,72,58,62|100|A|L|I|1948|Corte di Cassazione|11,5
POL|Poland|CV|66,58,66,70,76,64,62|194|A|L|I|1997|Sąd Najwyższy|12,3
GRC|Greece|CV|64,66,62,72,74,58,60|95|A|L|I|1975|Areios Pagos|13,5
ROU|Romania|CV|63,64,58,69,76,60,60|110|A|N|I|1991|Înalta Curte|14,4
ARE|United Arab Emirates|MX|62,55,72,45,92,64,62|200|R|N|I|1971|Federal Supreme Court|16,6
ZAF|South Africa|MX|58,68,54,64,46,56,50|250|A|N|A|1996|Constitutional Court|12,11
MYS|Malaysia|MX|57,54,54,52,72,56,54|190|R|N|A|1957|Federal Court|19,7
BRA|Brazil|CV|55,62,50,62,50,52,48|390|X|J|M|1988|Supremo Tribunal Federal|6,8
ARG|Argentina|CV|55,58,48,64,56,50,46|220|A|N|M|1853|Corte Suprema|5,10
JAM|Jamaica|CM|55,62,50,58,46,52,48|130|R|J|A|1962|Court of Appeal|5,6
GHA|Ghana|CM|54,58,44,58,50,50,48|50|P|J|A|1992|Supreme Court|9,8
IDN|Indonesia|MX|53,50,44,56,66,52,48|130|R|N|I|1945|Mahkamah Konstitusi|20,8
TUN|Tunisia|MX|51,48,50,54,62,50,48|200|P|N|I|2022|Cour de cassation|11,6
HUN|Hungary|CV|51,42,50,58,74,54,54|180|A|N|I|2011|Kúria|13,4
KAZ|Kazakhstan|CV|51,42,48,44,72,52,50|190|A|L|I|1995|Supreme Court|17,3
MNG|Mongolia|CV|51,52,44,58,64,48,46|200|A|N|I|1992|Supreme Court|19,3
IND|India|CM|50,56,44,54,54,46,44|40|R|N|A|1950|Supreme Court of India|17,6
COL|Colombia|CV|50,54,44,58,42,46,42|210|A|N|M|1991|Corte Constitucional|4,7
UKR|Ukraine|CV|50,46,42,52,44,48,46|100|A|J|M|1996|Supreme Court|14,3
MAR|Morocco|MX|50,46,48,46,70,48,46|260|P|N|I|2011|Cour de cassation|9,6
LKA|Sri Lanka|MX|50,50,44,50,60,46,44|100|P|N|A|1978|Supreme Court|17,7
THA|Thailand|CV|50,44,46,44,66,50,48|380|R|N|I|2017|Constitutional Court|18,7
VNM|Vietnam|SO|49,40,44,38,74,50,46|130|R|L|I|2013|Supreme People's Court|19,6
PER|Peru|CV|49,48,40,58,46,44,42|200|X|N|M|1993|Tribunal Constitucional|4,8
SAU|Saudi Arabia|RL|48,42,58,32,86,50,48|200|R|N|I|1992|Supreme Court|15,6
CHN|China|SO|47,38,50,30,80,48,44|121|R|L|I|1982|Supreme People's Court|19,4
KEN|Kenya|MX|47,52,34,54,42,44,42|60|P|N|A|2010|Supreme Court|14,8
TZA|Tanzania|MX|47,46,38,46,58,44,44|60|P|N|A|1977|Court of Appeal|14,9
PHL|Philippines|MX|46,46,38,48,48,44,40|200|A|N|A|1987|Supreme Court|21,6
ECU|Ecuador|CV|45,44,38,52,38,42,40|200|A|N|M|2008|Corte Constitucional|3,8
DZA|Algeria|MX|44,40,44,40,64,42,42|180|P|N|I|2020|Cour suprême|10,6
NGA|Nigeria|MX|42,46,30,46,32,40,38|35|R|N|A|1999|Supreme Court|10,8
MEX|Mexico|CV|42,44,30,46,34,38,32|170|A|N|M|1917|Suprema Corte|3,5
TUR|Türkiye|CV|42,32,40,38,58,44,40|408|A|N|I|1982|Anayasa Mahkemesi|15,4
RUS|Russia|CV|42,32,38,34,62,44,40|300|P|J|I|1993|Constitutional Court|18,1
GTM|Guatemala|CV|41,40,32,46,40,38,36|130|A|N|M|1985|Corte de Constitucionalidad|3,6
ETH|Ethiopia|MX|41,40,40,38,44,40,40|90|R|N|I|1995|Federal Supreme Court|14,7
AGO|Angola|MX|41,38,34,42,52,38,38|60|A|N|I|2010|Tribunal Constitucional|11,9
CUB|Cuba|SO|40,32,48,28,68,40,38|510|P|L|I|2019|Tribunal Supremo|5,5
BOL|Bolivia|CV|39,36,34,48,44,36,34|130|A|N|M|2009|Tribunal Constitucional|5,9
PAK|Pakistan|MX|39,42,32,42,36,36,36|45|R|N|A|1973|Supreme Court|17,5
BGD|Bangladesh|MX|39,38,30,42,48,36,36|50|R|N|A|1972|Supreme Court|18,6
IRQ|Iraq|MX|39,36,32,38,42,38,38|110|R|N|I|2005|Federal Supreme Court|15,5
EGY|Egypt|MX|35,30,40,26,56,34,32|120|R|N|I|2014|Supreme Constitutional Court|13,6
IRN|Iran|RL|34,30,36,26,54,34,32|228|R|N|I|1979|Supreme Court|16,5
VEN|Venezuela|CV|26,20,22,26,30,24,22|110|A|N|M|1999|Tribunal Supremo|5,7
PRK|North Korea|SO|15,10,18,8,50,14,12|600|R|N|I|1972|Central Court|21,3
PSE|Palestine|MX|41,38,36,44,46,40,38|140|P|N|I|2003|High Judicial Council|14,6
JOR|Jordan|MX|54,50,54,46,72,52,50|110|R|N|I|1952|Court of Cassation|15,7
LBN|Lebanon|MX|39,36,30,46,42,38,36|110|P|N|I|1926|Cour de cassation|16,4
SYR|Syria|MX|28,24,26,24,36,28,26|60|R|N|I|2012|Court of Cassation|17,4
QAT|Qatar|MX|61,54,68,42,90,62,60|55|R|N|I|2004|Court of Cassation|16,7
KWT|Kuwait|MX|56,50,56,44,80,56,54|150|R|N|I|1962|Court of Cassation|16,8
OMN|Oman|MX|58,52,62,42,88,58,56|110|R|N|I|1996|Supreme Court|17,8
LBY|Libya|MX|31,28,26,30,30,30,30|100|R|N|I|2011|Supreme Court|12,6
SDN|Sudan|MX|32,30,28,30,32,32,30|50|R|N|I|2019|Supreme Court|13,7
SEN|Senegal|CV|55,54,50,58,60,50,48|60|A|N|I|2001|Cour suprême|8,7
CIV|Côte d'Ivoire|CV|48,44,42,48,54,46,44|70|A|N|I|2016|Cour de cassation|8,8
CMR|Cameroon|MX|38,34,30,38,42,38,36|60|P|N|M|1996|Supreme Court|11,7
UGA|Uganda|MX|41,42,32,42,46,40,38|70|R|J|A|1995|Supreme Court|13,8
ZMB|Zambia|MX|48,48,40,52,58,44,44|110|P|J|A|1991|Supreme Court|12,9
ZWE|Zimbabwe|MX|38,34,30,38,46,36,36|100|P|N|A|2013|Constitutional Court|12,10
MOZ|Mozambique|CV|42,40,34,44,50,40,38|70|A|L|I|2004|Supreme Court|13,10
BWA|Botswana|MX|59,60,54,58,68,52,52|180|R|N|A|1966|Court of Appeal|11,10
NPL|Nepal|MX|47,46,40,52,54,44,42|30|A|N|A|2015|Supreme Court|18,5
MMR|Myanmar|MX|27,22,26,22,34,28,26|100|R|N|I|2008|Supreme Court|19,5
KHM|Cambodia|CV|31,26,24,30,44,30,28|130|A|N|I|1993|Supreme Court|20,7
LAO|Laos|SO|39,32,36,32,64,40,38|100|R|N|I|1991|People's Supreme Court|20,6
UZB|Uzbekistan|CV|48,40,44,40,70,48,46|150|A|N|I|1992|Supreme Court|18,3
GEO|Georgia|CV|60,56,58,60,66,56,54|240|A|J|M|1995|Supreme Court|16,2
ARM|Armenia|CV|54,48,50,54,62,50,48|130|A|J|M|1995|Court of Cassation|17,2
AZE|Azerbaijan|CV|44,34,36,36,66,44,42|230|A|N|I|1995|Supreme Court|18,2
BLR|Belarus|CV|41,30,44,30,66,44,42|340|R|L|I|1994|Supreme Court|14,2
SVK|Slovakia|CV|61,58,54,66,74,58,58|190|A|L|I|1992|Najvyšší súd|13,3
BGR|Bulgaria|CV|56,50,46,62,72,54,52|85|A|L|I|1991|Supreme Court of Cassation|15,3
HRV|Croatia|CV|61,58,54,66,76,56,56|85|A|L|I|1990|Vrhovni sud|12,2
LTU|Lithuania|CV|70,68,66,72,80,66,64|200|A|L|I|1992|Supreme Court|14,1
LUX|Luxembourg|CV|83,86,86,84,86,80,78|110|A|J|I|1868|Cour de cassation|9,4
PAN|Panama|CV|50,46,40,54,52,46,44|280|A|N|M|1972|Corte Suprema|3,7
DOM|Dominican Republic|CV|47,44,38,52,50,44,42|180|A|N|M|2015|Suprema Corte|6,6
TTO|Trinidad and Tobago|CM|56,58,48,58,44,52,50|280|R|J|A|1976|Court of Appeal|6,7
PRY|Paraguay|CV|45,40,34,50,52,42,40|180|A|N|M|1992|Corte Suprema|6,9
PNG|Papua New Guinea|MX|43,44,34,46,38,40,38|60|R|N|A|1975|Supreme Court|22,9
FJI|Fiji|CM|52,50,44,52,60,48,46|110|A|N|A|2013|Supreme Court|24,10
`.trim();

const TRAD={CM:'Common law',CV:'Civil law',RL:'Religious law',MX:'Mixed system',SO:'Socialist law'};
const TRADC={CM:'#4d9bf5',CV:'#c9a227',RL:'#9b7fe0',MX:'#3fb27f',SO:'#e05c4f'};
const DP={A:'Abolished for all crimes',P:'Abolished in practice',X:'Exceptional crimes only',R:'Retained'};
const DPT={A:'g',P:'a',X:'a',R:'r'};
const JURY={J:'Jury trial',L:'Lay judges / mixed bench',N:'Professional judges only',M:'Limited'};
const PROC={A:'Adversarial',I:'Inquisitorial',M:'Mixed'};
const DIMS=[['rol','Overall rule of law'],['jud','Judicial independence'],['corr','Absence of corruption'],
  ['rights','Fundamental rights'],['order','Order & security'],['civil','Civil justice'],['crim','Criminal justice']];

const J=JRAW.split('\n').map(l=>{
  const p=l.split('|'), d=p[3].split(',').map(Number), xy=p[10].split(',').map(Number);
  return {iso:p[0],name:p[1],trad:p[2],rol:d[0],jud:d[1],corr:d[2],rights:d[3],order:d[4],
    civil:d[5],crim:d[6],inc:+p[4],dp:p[5],jury:p[6],proc:p[7],cons:+p[8],apex:p[9],
    x:xy[0],y:xy[1],hom:null,pop:null,live:false};
});
const byIso=Object.fromEntries(J.map(j=>[j.iso,j]));

/* ---------- APEX & INTERNATIONAL COURTS ---------- */
const COURTS=[
{id:'scotus',n:'Supreme Court of the United States',seat:'Washington, D.C.',f:1789,seats:9,
 term:'Life tenure',app:'Nominated by the President, confirmed by the Senate',
 rev:'Strong — may strike down federal and state legislation',
 out:'~60 signed opinions per term',trad:'CM',iso:'USA',
 hist:[82,78,74,69,72,65,62,58,60,59],
 note:'Life tenure plus a politically negotiated appointment makes each vacancy a generational event. Output has fallen by roughly a third since the 1980s while the significance of each decision has risen.'},
{id:'bverfg',n:'Bundesverfassungsgericht',seat:'Karlsruhe, Germany',f:1951,seats:16,
 term:'12 years, non-renewable, no reappointment',
 app:'Half elected by the Bundestag, half by the Bundesrat, each by two-thirds majority',
 rev:'Very strong — abstract and concrete review, plus individual constitutional complaint',
 out:'~5,000 constitutional complaints per year',trad:'CV',iso:'DEU',
 hist:[5900,5800,5500,5300,5100,5200,5000,4900,5100,5000],
 note:'The single-term limit and supermajority appointment are widely regarded as the best-designed insulation from political capture of any constitutional court in the world.'},
{id:'uksc',n:'United Kingdom Supreme Court',seat:'London',f:2009,seats:12,
 term:'To age 75',app:'Independent selection commission, formally appointed by the monarch',
 rev:'Limited — cannot strike down primary legislation; issues declarations of incompatibility',
 out:'~90 judgments per year',trad:'CM',iso:'GBR',
 hist:[85,88,92,79,74,68,72,80,86,90],
 note:'Parliamentary sovereignty means the court can tell Parliament a statute breaches rights but cannot void it. The political cost of ignoring a declaration does the work that a strike-down power does elsewhere.'},
{id:'ccfr',n:'Conseil constitutionnel',seat:'Paris',f:1958,seats:9,
 term:'9 years, non-renewable',app:'Three each by the President, the National Assembly and the Senate',
 rev:'A priori review before promulgation, plus the QPC referral since 2010',
 out:'~70 decisions per year',trad:'CV',iso:'FRA',
 hist:[22,25,28,60,68,72,75,71,74,70],
 note:'Until 2010 the Conseil could only review a law before it took effect. The QPC reform let ordinary litigants challenge laws already in force — output more than tripled almost overnight.'},
{id:'scin',n:'Supreme Court of India',seat:'New Delhi',f:1950,seats:34,
 term:'To age 65',app:'Collegium of senior judges — the judiciary appoints itself',
 rev:'Very strong — basic structure doctrine limits even constitutional amendment',
 out:'Tens of thousands of matters per year',trad:'CM',iso:'IND',
 hist:[58000,56000,60000,63000,69000,71000,68000,72000,80000,82000],
 note:'The only apex court in the world that effectively appoints its own members. Public interest litigation lets almost anyone raise a constitutional question, which explains a caseload no other supreme court approaches.'},
{id:'ccza',n:'Constitutional Court of South Africa',seat:'Johannesburg',f:1994,seats:11,
 term:'12 years or age 70, whichever comes first',
 app:'President from a Judicial Service Commission shortlist',
 rev:'Very strong — including enforceable socio-economic rights',
 out:'~60 judgments per year',trad:'MX',iso:'ZAF',
 hist:[42,48,52,58,62,66,58,54,60,62],
 note:'One of the few courts anywhere that treats housing, water and healthcare as justiciable rights rather than policy aspirations. Its reasoning is cited by courts on every continent.'},
{id:'stf',n:'Supremo Tribunal Federal',seat:'Brasília',f:1891,seats:11,
 term:'To age 75',app:'President, confirmed by the Senate',
 rev:'Strong — constitutional review plus original criminal jurisdiction over officials',
 out:'Tens of thousands of filings per year',trad:'CV',iso:'BRA',
 hist:[72000,80000,92000,105000,98000,88000,76000,70000,66000,64000],
 note:'Justices sit and vote individually and often publish separate opinions, and hearings are televised live. Individual justices can issue binding injunctions alone — a concentration of power unusual anywhere.'},
{id:'scjp',n:'Supreme Court of Japan',seat:'Tokyo',f:1947,seats:15,
 term:'To age 70, subject to popular retention review',app:'Cabinet appointment',
 rev:'Formally strong, exercised with extreme restraint',
 out:'~5,000 dispositions per year',trad:'CV',iso:'JPN',
 hist:[4900,5100,5000,4800,5200,5000,4900,5100,4950,5000],
 note:'Has struck down statutes as unconstitutional roughly a dozen times in nearly eighty years. A powerful demonstration that formal review powers say little about how a court actually behaves.'},
{id:'echr',n:'European Court of Human Rights',seat:'Strasbourg',f:1959,seats:46,
 term:'9 years, non-renewable',app:'Elected by the Parliamentary Assembly from national shortlists of three',
 rev:'Binding judgments against 46 states; individuals may petition directly',
 out:'~35,000 applications lodged per year',trad:'—',iso:'',
 hist:[52000,49000,44000,41000,38000,42000,45000,39000,36000,35000],
 note:'The most successful supranational rights court in existence: any individual in 46 countries can sue their own government here. Its weakness is enforcement — compliance depends on political will.'},
{id:'cjeu',n:'Court of Justice of the European Union',seat:'Luxembourg',f:1952,seats:27,
 term:'6 years, renewable',app:'One judge per member state, by common accord',
 rev:'EU law prevails over conflicting national law, including national constitutions',
 out:'~800 cases per year',trad:'—',iso:'',
 hist:[690,720,740,760,790,820,800,810,830,840],
 note:'Built the doctrines of direct effect and supremacy out of a trade treaty that mentioned neither. Arguably the most consequential act of judicial creativity of the twentieth century.'},
{id:'icj',n:'International Court of Justice',seat:'The Hague',f:1945,seats:15,
 term:'9 years, renewable',app:'Elected by the UN General Assembly and Security Council concurrently',
 rev:'Disputes between states, by consent; advisory opinions to UN organs',
 out:'~20 pending cases at a time',trad:'—',iso:'',
 hist:[14,16,15,17,19,21,20,22,24,23],
 note:'Jurisdiction rests on state consent, and there is no bailiff. Its authority is entirely reputational — which is either its fatal flaw or the whole point, depending on who you ask.'},
{id:'icc',n:'International Criminal Court',seat:'The Hague',f:2002,seats:18,
 term:'9 years, non-renewable',app:'Elected by the Assembly of States Parties',
 rev:'Individual criminal responsibility for genocide, crimes against humanity, war crimes, aggression',
 out:'~17 situations under investigation',trad:'—',iso:'',
 hist:[8,9,10,11,12,13,14,15,16,17],
 note:'Complementary, not supreme: it acts only where national courts are unwilling or unable. Major powers including the US, China, Russia and India are not parties.'}
];

/* ---------- LANDMARK CASE LAW ---------- */
const CASES=[
{id:'hamm',y:-1754,t:'Code of Hammurabi',c:'Babylon · Royal code',cat:'Foundations',iso:'IRQ',k:[],
 s:'Nearly 300 provisions carved into a basalt stele and set up in public, covering theft, trade, marriage, wages and medical fees, with penalties scaled by the social rank of victim and offender.',
 w:'The first surviving attempt to make law public and fixed in advance rather than announced after the fact by whoever held power. Publication is the oldest safeguard against arbitrary rule.'},
{id:'just',y:534,t:'Corpus Juris Civilis',c:'Byzantine Empire · Imperial compilation',cat:'Foundations',iso:'ITA',k:[],
 s:'Justinian ordered a thousand years of Roman legal writing condensed into a single authoritative compilation — the Digest, Institutes and Code — and declared everything omitted to be void.',
 w:'Rediscovered in eleventh-century Bologna, it became the raw material of European legal education and, through it, of every civil law system in existence today.'},
{id:'magna',y:1215,t:'Magna Carta',c:'England · Charter',cat:'Foundations',iso:'GBR',k:['entick','marbury'],
 s:'Rebel barons forced King John to seal a charter accepting that the Crown was bound by law. Most clauses were narrow feudal bargains and John repudiated the whole thing within months.',
 w:'Clause 39 survived: no free man shall be imprisoned or stripped of rights except by lawful judgment of his peers or by the law of the land. The ancestor of due process everywhere.'},
{id:'somer',y:1772,t:'Somerset v Stewart',c:'England · Court of King\'s Bench',cat:'Rights',iso:'GBR',k:['dred'],
 s:'James Somerset, enslaved in Virginia and brought to England, escaped, was recaptured and held on a ship bound for Jamaica. A habeas corpus writ forced his captor to justify the detention.',
 w:'Lord Mansfield held that slavery was so odious that nothing could support it but positive law — and England had none. The judgment did not end the slave trade, but it made the institution legally homeless in England.'},
{id:'entick',y:1765,t:'Entick v Carrington',c:'England · Court of King\'s Bench',cat:'Rights',iso:'GBR',k:['magna','katz','riley'],
 s:'The King\'s messengers broke into John Entick\'s house and seized his papers under a general warrant issued by a Secretary of State. Entick simply sued them for trespass.',
 w:'Lord Camden held the warrant unlawful because no statute or precedent authorised it — the state may do only what law permits. The direct ancestor of the US Fourth Amendment.'},
{id:'marbury',y:1803,t:'Marbury v. Madison',c:'United States · Supreme Court',cat:'Foundations',iso:'USA',k:['magna','kesav'],
 s:'William Marbury sued for a judicial commission the incoming administration refused to deliver. Marshall held Marbury was entitled to it — but that the statute giving the Court power to order delivery was itself unconstitutional.',
 w:'By refusing a small power Marshall claimed a vastly larger one: judicial review. Now a structural feature of constitutional systems worldwide, though many arrived at it by other routes.'},
{id:'dred',y:1857,t:'Dred Scott v. Sandford',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:['somer','plessy','brown'],
 s:'Dred Scott sued for freedom on the basis that he had lived in free territory. The Court held that people of African descent could not be citizens and had no standing to sue at all.',
 w:'Studied now as the clearest demonstration that a supreme court can be catastrophically, consequentially wrong. It accelerated the Civil War and was overturned by constitutional amendment, not by judges.'},
{id:'dudley',y:1884,t:'R v Dudley and Stephens',c:'England · Queen\'s Bench',cat:'Criminal',iso:'GBR',k:[],
 s:'Shipwrecked and starving in a lifeboat, two sailors killed and ate the cabin boy. Rescued days later, they openly admitted what they had done and were tried for murder.',
 w:'Necessity is no defence to murder — the law will not let one person treat another\'s life as expendable. Still the standard teaching case on where justification ends.'},
{id:'carlill',y:1893,t:'Carlill v Carbolic Smoke Ball Co',c:'England · Court of Appeal',cat:'Contracts',iso:'GBR',k:['donoghue'],
 s:'A company advertised £100 to anyone who used its smoke ball and still caught influenza, adding that it had deposited £1,000 in a bank to show sincerity. Mrs Carlill used it, fell ill, and claimed.',
 w:'A unilateral offer to the world can be accepted by performance. The foundation case on offer, acceptance and intention — and on advertisers being held to what they print.'},
{id:'plessy',y:1896,t:'Plessy v. Ferguson',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:['brown','dred'],
 s:'Homer Plessy, deliberately testing the law, sat in a whites-only railway carriage. The Court upheld segregation on the theory that separate facilities could be equal.',
 w:'"Separate but equal" licensed six decades of legal segregation. Justice Harlan\'s lone dissent — "our Constitution is color-blind" — became the majority position 58 years later.'},
{id:'schenck',y:1919,t:'Schenck v. United States',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:[],
 s:'Charles Schenck distributed leaflets opposing the WWI draft and was convicted under the Espionage Act. Holmes upheld the conviction with the famous line about falsely shouting fire in a theatre.',
 w:'It introduced "clear and present danger" — and is now mainly cited to show how far speech protection has moved since, having been substantially narrowed by later doctrine.'},
{id:'donoghue',y:1932,t:'Donoghue v Stevenson',c:'United Kingdom · House of Lords',cat:'Torts',iso:'GBR',k:['carlill'],
 s:'May Donoghue drank ginger beer from an opaque bottle containing a decomposed snail. A friend had bought it, so she had no contract with anyone and, on the law as it stood, no claim at all.',
 w:'Lord Atkin\'s neighbour principle — a duty of care to those you can reasonably foresee harming — created the modern law of negligence across the whole common law world.'},
{id:'nurem',y:1945,t:'The Nuremberg Trials',c:'International Military Tribunal',cat:'International',iso:'DEU',k:['eich','tadic','akayesu'],
 s:'Twenty-two senior Nazi officials were tried for crimes against peace, war crimes and crimes against humanity. They argued they had followed their own state\'s law and their superiors\' orders.',
 w:'Both defences failed. Individuals bear personal criminal responsibility under international law, and orders are no excuse. Every international criminal court since descends from this.'},
{id:'brown',y:1954,t:'Brown v. Board of Education',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:['plessy','dred','oberge'],
 s:'Black schoolchildren challenged state laws mandating segregated schools, upheld as constitutional since Plessy in 1896.',
 w:'A unanimous Court held separate educational facilities inherently unequal, overruling a 58-year precedent. Proof that an apex court can reverse itself when a prior decision is simply wrong.'},
{id:'eich',y:1961,t:'Attorney-General v. Eichmann',c:'Israel · District Court of Jerusalem',cat:'International',iso:'ISR',k:['nurem','pino'],
 s:'Adolf Eichmann, seized in Argentina, was tried in Jerusalem for his role in organising the transport of Jews to extermination camps. He argued he was a bureaucrat following orders.',
 w:'Established universal jurisdiction over crimes against humanity in practice, and produced Hannah Arendt\'s enduring argument about how ordinary administration enables atrocity.'},
{id:'vangend',y:1963,t:'Van Gend en Loos',c:'European Communities · Court of Justice',cat:'International',iso:'NLD',k:['costa','schrems'],
 s:'A Dutch transport company challenged an import duty by relying directly on the Treaty of Rome — arguing that a treaty between states gave it, a private company, rights enforceable in a national court.',
 w:'The Court invented direct effect. European law became a legal order binding individuals, not just states. The most consequential decision in EU legal history.'},
{id:'gideon',y:1963,t:'Gideon v. Wainwright',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:['miranda'],
 s:'Clarence Gideon, too poor to hire a lawyer, was refused one, defended himself and was convicted. From prison he wrote to the Supreme Court in pencil.',
 w:'Counsel in serious criminal cases is fundamental, not a luxury. Legal aid systems worldwide date their legitimacy to this decision.'},
{id:'costa',y:1964,t:'Costa v ENEL',c:'European Communities · Court of Justice',cat:'International',iso:'ITA',k:['vangend'],
 s:'An Italian lawyer refused to pay a small electricity bill in order to challenge the nationalisation of the power industry as contrary to the Treaty of Rome.',
 w:'Established supremacy: EU law prevails over conflicting national law, including later national statutes. Together with Van Gend en Loos it built a constitutional order out of a trade agreement.'},
{id:'miranda',y:1966,t:'Miranda v. Arizona',c:'United States · Supreme Court',cat:'Criminal',iso:'USA',k:['gideon','riley'],
 s:'Ernesto Miranda confessed after two hours of interrogation, never having been told he could remain silent or have a lawyer present.',
 w:'Custodial interrogation is inherently coercive, so warnings must precede it. The most globally recognised piece of criminal procedure ever drafted.'},
{id:'katz',y:1967,t:'Katz v. United States',c:'United States · Supreme Court',cat:'Technology',iso:'USA',k:['entick','riley'],
 s:'The FBI attached a listening device to the outside of a public phone booth. Since there was no physical trespass, the government argued no search had occurred.',
 w:'"The Fourth Amendment protects people, not places." Privacy turns on a reasonable expectation, not on property boundaries — the doctrinal move that let privacy law survive technology.'},
{id:'kesav',y:1973,t:'Kesavananda Bharati v. State of Kerala',c:'India · Supreme Court',cat:'Foundations',iso:'IND',k:['marbury','puttas'],
 s:'A thirteen-judge bench sat for 68 days on one question: is Parliament\'s power to amend the Constitution unlimited?',
 w:'By 7–6, Parliament may amend but may not destroy the Constitution\'s basic structure. The doctrine has since been adopted in Bangladesh, Pakistan, Kenya and Uganda.'},
{id:'roe',y:1973,t:'Roe v. Wade',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:['dobbs','oberge'],
 s:'A pregnant woman under the pseudonym Jane Roe challenged Texas\'s near-total abortion ban, arguing it violated a constitutional right to privacy.',
 w:'Recognised a qualified constitutional right to abortion under a trimester framework. Overruled in 2022 — making it the central modern case study in how durable precedent actually is.'},
{id:'handy',y:1976,t:'Handyside v United Kingdom',c:'European Court of Human Rights',cat:'Rights',iso:'GBR',k:['schenck'],
 s:'The UK seized a schoolbook containing frank sexual content. The publisher argued the seizure breached his freedom of expression under Article 10.',
 w:'Freedom of expression covers ideas that "offend, shock or disturb" — but the Court also introduced the margin of appreciation, letting states differ on morals. Both halves are still fought over.'},
{id:'nicara',y:1986,t:'Nicaragua v. United States',c:'International Court of Justice',cat:'International',iso:'USA',k:['tadic'],
 s:'Nicaragua sued over the mining of its harbours and support for the Contras. The United States contested jurisdiction, lost, and then withdrew from the proceedings entirely.',
 w:'A landmark on the use of force and non-intervention — and a stark demonstration of international law\'s enforcement problem, since the judgment was never complied with.'},
{id:'mabo',y:1992,t:'Mabo v Queensland (No 2)',c:'Australia · High Court',cat:'Rights',iso:'AUS',k:['maka'],
 s:'Eddie Mabo and other Meriam people sued for recognition of traditional land rights, challenging the doctrine that Australia had been terra nullius — land belonging to no one — at settlement.',
 w:'Terra nullius rejected as a legal fiction; native title survives the Crown\'s acquisition of sovereignty. It reopened indigenous land rights across the common law world.'},
{id:'tadic',y:1995,t:'Prosecutor v. Tadić',c:'ICTY · The Hague',cat:'International',iso:'',k:['nurem','akayesu'],
 s:'The first trial before the International Criminal Tribunal for the former Yugoslavia. Tadić challenged the tribunal\'s very authority to exist.',
 w:'The Appeals Chamber held that serious violations of the laws of war attract individual criminal responsibility in internal conflicts too — not just wars between states. It doubled the reach of humanitarian law.'},
{id:'maka',y:1995,t:'S v Makwanyane',c:'South Africa · Constitutional Court',cat:'Rights',iso:'ZAF',k:['mabo'],
 s:'The first major judgment of the new Constitutional Court asked whether the death penalty survived the post-apartheid Constitution.',
 w:'Unanimously abolished as incompatible with life, dignity and the prohibition on cruel treatment. Widely regarded as among the finest judicial opinions written anywhere on the value of a human life.'},
{id:'vishaka',y:1997,t:'Vishaka v. State of Rajasthan',c:'India · Supreme Court',cat:'Rights',iso:'IND',k:['kesav','navtej'],
 s:'After a social worker was gang-raped for opposing child marriage, petitioners argued that the total absence of any law on workplace sexual harassment was itself a rights violation.',
 w:'The Court wrote binding guidelines itself, drawing on an international convention, and they governed India for sixteen years until Parliament legislated. A striking example of a court filling a legislative vacuum.'},
{id:'pino',y:1998,t:'R v Bow Street Magistrate, ex p Pinochet',c:'United Kingdom · House of Lords',cat:'International',iso:'GBR',k:['eich','tadic'],
 s:'Spain sought the extradition of former Chilean head of state Augusto Pinochet, arrested in London, for torture committed while he was in office.',
 w:'A former head of state has no immunity for torture. In the same year 120 states adopted the Rome Statute — together, the moment the worst crimes began to follow their perpetrators across borders.'},
{id:'akayesu',y:1998,t:'Prosecutor v. Akayesu',c:'ICTR · Arusha',cat:'International',iso:'TZA',k:['tadic','nurem'],
 s:'A Rwandan mayor was tried for his role in the 1994 genocide. Evidence of mass sexual violence emerged partly through questioning by the bench.',
 w:'The first conviction for genocide by an international tribunal, and the first judgment to recognise rape as an act of genocide. It transformed how international law treats sexual violence in conflict.'},
{id:'gspain',y:2014,t:'Google Spain v. AEPD',c:'European Union · Court of Justice',cat:'Technology',iso:'ESP',k:['schrems','riley'],
 s:'A Spanish man asked Google to remove search results linking his name to a resolved 1998 debt notice. The underlying information was true and had been lawfully published.',
 w:'Search engines are data controllers, and individuals can require delisting of results that are inadequate, irrelevant or excessive. The right to be forgotten became enforceable law.'},
{id:'riley',y:2014,t:'Riley v. California',c:'United States · Supreme Court',cat:'Technology',iso:'USA',k:['katz','miranda','entick'],
 s:'Police searched an arrested man\'s smartphone without a warrant, relying on the long-standing rule permitting search of items carried by an arrested person.',
 w:'A unanimous Court held phones are different in kind — they hold "the privacies of life". The clearest instance of a court refusing to apply an analogue rule mechanically to digital reality.'},
{id:'oberge',y:2015,t:'Obergefell v. Hodges',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:['brown','roe','navtej'],
 s:'Same-sex couples challenged state bans on their marriages under the due process and equal protection guarantees.',
 w:'By 5–4, the right to marry is fundamental and extends to same-sex couples nationwide — among the fastest reversals of legal and social consensus in modern history.'},
{id:'puttas',y:2017,t:'Puttaswamy v. Union of India',c:'India · Supreme Court',cat:'Technology',iso:'IND',k:['kesav','navtej','gspain'],
 s:'A challenge to the Aadhaar biometric identity programme forced a nine-judge bench to decide whether privacy was a fundamental right at all under the Indian Constitution.',
 w:'Unanimously yes — overruling decades-old contrary authority. It reshaped Indian data protection, surveillance and personal autonomy law in a single judgment.'},
{id:'navtej',y:2018,t:'Navtej Singh Johar v. Union of India',c:'India · Supreme Court',cat:'Rights',iso:'IND',k:['puttas','oberge'],
 s:'A challenge to Section 377 of the colonial-era Indian Penal Code, which criminalised consensual same-sex relations.',
 w:'Struck down as unconstitutional, with the Court apologising for the law\'s historic harm. A landmark on dignity, privacy and the decolonisation of inherited criminal codes.'},
{id:'urgenda',y:2019,t:'Urgenda Foundation v. Netherlands',c:'Netherlands · Supreme Court',cat:'Environment',iso:'NLD',k:['shell'],
 s:'A Dutch NGO sued its own government, arguing that inadequate emissions targets breached the state\'s duty of care and its human rights obligations.',
 w:'The Supreme Court agreed and ordered deeper cuts. It opened the era of climate litigation — courts in Germany, France, Ireland and Colombia have since followed.'},
{id:'schrems',y:2020,t:'Data Protection Commissioner v. Facebook (Schrems II)',c:'European Union · Court of Justice',cat:'Technology',iso:'IRL',k:['gspain','vangend'],
 s:'An Austrian law student challenged the transfer of his personal data to the United States, arguing US surveillance law offered no equivalent protection.',
 w:'The EU–US Privacy Shield was invalidated, upending transatlantic data flows for thousands of companies. Proof that a single individual can move global commercial infrastructure.'},
{id:'shell',y:2021,t:'Milieudefensie v. Royal Dutch Shell',c:'Netherlands · District Court of The Hague',cat:'Environment',iso:'NLD',k:['urgenda'],
 s:'Environmental groups sued a private oil major directly, arguing an unwritten duty of care required it to cut emissions across its whole value chain.',
 w:'The court ordered a 45% reduction by 2030 — the first time a private company was held to a climate obligation of this kind. Later modified on appeal, but the principle it opened is now litigated worldwide.'},
{id:'dobbs',y:2022,t:'Dobbs v. Jackson Women\'s Health',c:'United States · Supreme Court',cat:'Rights',iso:'USA',k:['roe','brown'],
 s:'Mississippi\'s 15-week abortion ban was used to ask the Court to reconsider Roe (1973) and Casey (1992) head-on.',
 w:'Both overruled: no constitutional right to abortion, question returned to the states. A rare modern instance of an apex court withdrawing a previously recognised right.'},
{id:'birth',y:2026,t:'Trump v. Barbara (birthright citizenship)',c:'United States · Supreme Court',cat:'Recent',iso:'USA',k:['dred','marbury'],
 s:'The Court considered an executive attempt to end automatic citizenship for children born in the US to non-citizen parents, testing the reach of the Fourteenth Amendment\'s Citizenship Clause.',
 w:'The attempt was rejected and birthright citizenship left intact. A modern illustration of constitutional text constraining executive action — check the published opinion before relying on the detail.'},
{id:'removal',y:2026,t:'Presidential removal power',c:'United States · Supreme Court',cat:'Recent',iso:'USA',k:['marbury'],
 s:'Whether a president may remove members of independent agencies at will, revisiting a precedent standing since Humphrey\'s Executor in 1935.',
 w:'The Court sided with broad removal authority, substantially altering agency independence. A live example of one overruled precedent restructuring a branch of government.'},
{id:'ilostrike',y:2026,t:'ILO advisory opinion on the right to strike',c:'International Court of Justice',cat:'Recent',iso:'',k:['nicara'],
 s:'The International Labour Organization asked the ICJ whether the right to strike is protected under Convention No. 87 on freedom of association — a question governments and employers had disputed for decades.',
 w:'A rare instance of the world court settling a labour rights question, showing how advisory opinions can resolve disputes no ordinary litigation could reach.'}
];



/* ---------- Q&A CORPUS ---------- */
const QA=[
{id:'q1',topic:'Police & Rights',level:'Beginner',q:'What actually happens when the police stop me?',
 a:['A stop is not an arrest. Most systems distinguish being <b>detained briefly</b> — an officer has a specific, articulable reason to suspect involvement in something — from being <b>arrested</b>, where a formal legal threshold is met and you are no longer free to leave.',
 'The single most useful question, asked calmly, is: <i>"Am I free to go?"</i> The answer tells you which of the two you are in, and different protections switch on accordingly.'],
 l:['Staying calm with hands visible is practical safety, not a legal duty.','You generally need not answer questions beyond identifying yourself — though some countries require you to carry and produce ID and others do not.','Arguing about lawfulness at the roadside almost never works. That argument belongs in court.'],
 n:'Varies sharply. France, Germany, Spain and Morocco have national ID requirements; the UK and many US states require nothing to be carried at all.'},
{id:'q2',topic:'Police & Rights',level:'Beginner',q:'What is the right to remain silent actually protecting?',
 a:['It protects you from being forced to build the case against yourself. The principle is ancient — <i>nemo tenetur se ipsum accusare</i> — and exists because systems permitting coerced confessions produced enormous numbers of false ones.',
 'In the US it became famous through <i>Miranda v. Arizona</i> (1966), but the underlying right is far older and far more widespread than the American warning that popularised it.'],
 l:['Silence is a right, not an admission — though in England and Wales a court may draw an adverse inference in defined circumstances.','It typically attaches once you are in custody and being questioned.','Asking for a lawyer should stop questioning. That is the point of asking.']},
{id:'q3',topic:'Police & Rights',level:'Intermediate',q:'Can the police search my phone?',
 a:['Usually not without a warrant. In <i>Riley v. California</i> (2014) the US Supreme Court held unanimously that phones differ in kind from wallets or bags — they hold "the privacies of life" in a quantity no physical container ever could.',
 'Canada, the EU and the UK reached broadly similar conclusions by different routes. Borders are the near-universal exception: border search powers are consistently broader than domestic ones.'],
 l:['Consent waives the requirement entirely.','Compelled unlocking is unsettled: many jurisdictions treat a passcode (something you know) differently from a fingerprint or face (something you are).']},
{id:'q4',topic:'Courts & Procedure',level:'Beginner',q:'What does "innocent until proven guilty" actually require?',
 a:['It is a rule about <b>who must prove what</b>. The accused proves nothing. The state must prove every element to a very high standard — beyond reasonable doubt in common law systems, or an equivalent judicial conviction in many civil law ones.',
 'It is not a statement about what people believe. It instructs the court on what happens when evidence falls short: acquittal is not mercy, it is the required outcome.'],
 l:['Article 11 of the Universal Declaration states it directly.','Article 6(2) ECHR makes it binding across the Council of Europe.','Civil cases use a lower standard, which is why the same facts can produce opposite results.']},
{id:'q5',topic:'Courts & Procedure',level:'Beginner',q:'What is the difference between criminal and civil law?',
 a:['Criminal law is the state prosecuting conduct society has defined as an offence. The outcome is punishment. The victim is a witness, not the party bringing the case.',
 'Civil law is one party suing another over a private wrong. The outcome is a remedy — usually money, sometimes an order to do or stop doing something.'],
 l:['The same act can be both: a drunk driver may be prosecuted by the state and sued by the person injured.','Different standards of proof mean the two can reach opposite conclusions on identical facts.','"Civil law" also names an entire legal tradition. Context tells you which sense is meant.']},
{id:'q6',topic:'Courts & Procedure',level:'Intermediate',q:'What is precedent, and why do some systems ignore it?',
 a:['In common law systems a higher court\'s decision binds lower courts on the same question — <i>stare decisis</i>. It makes law predictable: you can read past decisions and know roughly what will happen to you.',
 'Civil law systems do not formally bind courts to prior decisions. The code is the authority. In practice a consistent line from a supreme court carries heavy persuasive weight, so the gap is narrower than the theory suggests.'],
 l:['Overruling is possible but heavy: <i>Brown</i> (1954) overruled <i>Plessy</i> (1896) after 58 years.','Distinguishing a case — arguing your facts differ materially — is the everyday craft of common law advocacy.']},
{id:'q7',topic:'Housing',level:'Beginner',q:'Can my landlord evict me without going to court?',
 a:['In most developed systems, no. Removing a tenant is a judicial act. A landlord who changes locks, removes belongings or cuts utilities to force you out is usually committing an offence.',
 'Lawful eviction almost always requires a valid ground, written notice of a specified length, a court order if you do not leave, and enforcement by an official rather than the landlord personally.'],
 l:['Notice periods range from weeks to many months depending on country and reason.','Arrears do not suspend your rights; they give a ground to start the process.','Documentation is the whole game — lease, payment records, every written exchange.'],
 n:'One of the widest-varying areas of law on earth. Germany and France are strongly tenant-protective; protections in some US states and much of the Gulf are considerably thinner.'},
{id:'q8',topic:'Housing',level:'Beginner',q:'Who is responsible for repairs?',
 a:['Generally: the landlord for the structure and for keeping the property fit to live in; the tenant for damage they cause and ordinary cleanliness.',
 'Many jurisdictions imply this into every tenancy automatically, so a lease clause shifting structural repairs onto the tenant is simply unenforceable. You cannot contract out of a mandatory protection.'],
 l:['Roof, walls, plumbing, heating, electrical safety: landlord, almost universally.','A window you broke: you.','Withholding rent is lawful in some places and grounds for eviction in others. Check first.']},
{id:'q9',topic:'Employment',level:'Beginner',q:'Can I be fired for no reason?',
 a:['One of the sharpest divides in world law. Most countries require a <b>valid reason</b> — misconduct, performance, or genuine redundancy — plus notice and often severance.',
 'The United States is the major outlier: most private employment is at will. Even there you cannot be fired for a <b>prohibited</b> reason — race, sex, religion, disability, age, whistleblowing or union activity.'],
 l:['ILO Convention No. 158 sets the international standard of dismissal only for valid cause.','Probation reduces protection temporarily, not permanently.','A resignation you were pressured into may legally count as a dismissal.']},
{id:'q10',topic:'Employment',level:'Intermediate',q:'Is my non-compete clause enforceable?',
 a:['Often far less than it looks. Courts treat non-competes with suspicion because they restrain a person\'s ability to earn a living by private agreement.',
 'Where enforceable, courts require reasonableness in three dimensions at once — duration, geography, and scope of restricted activity. Failing any one may see the clause cut down or struck out.'],
 l:['Germany, France and Italy require the employer to pay the employee during the restricted period.','California has refused to enforce most employee non-competes for over a century.','A clause protecting genuine trade secrets stands on far firmer ground than one merely suppressing competition.']},
{id:'q11',topic:'Contracts',level:'Beginner',q:'Is a verbal agreement a real contract?',
 a:['Usually yes. Most systems require only agreement, an exchange of value, and intention to be bound. Writing is evidence of a contract, not the contract itself.',
 'The catch is practical: proving the terms of a conversation is hard. And certain categories — land, guarantees, long leases, marriage contracts — must be written and are void otherwise.'],
 l:['A follow-up message confirming what was agreed is unglamorous and extremely effective evidence.','Conduct can form a contract with no words at all.','If one side has performed, courts are reluctant to let the other escape on a technicality.']},
{id:'q12',topic:'Contracts',level:'Intermediate',q:'I signed without reading it. Am I stuck?',
 a:['As a starting point yes — systems could not function if "I didn\'t read it" undid agreements. But the starting point now carries a long list of exceptions.',
 'Consumer protection law across the EU, UK, Morocco, Brazil, India and many others voids terms that are <b>unfair</b>: creating significant imbalance, hidden, or written so obscurely no reasonable person could understand them.'],
 l:['Unusually onerous terms often must be specifically drawn to your attention to bind at all.','Duress, fraud and serious misrepresentation make a contract voidable.','Standard-form contracts you could not negotiate get more scrutiny, not less.']},
{id:'q13',topic:'Consumer',level:'Beginner',q:'The product is faulty. What am I owed?',
 a:['Nearly every developed system gives rights independent of any warranty. Goods must be of satisfactory quality, fit for purpose, and match the description — and the obligation sits on the <b>seller</b>, not the manufacturer.',
 'The usual remedy ladder: repair or replacement first, then price reduction or refund if that fails or takes unreasonably long.'],
 l:['EU law guarantees a minimum two-year conformity period.','A shop policy of "no refunds" cannot remove a right the law grants.','Keep proof of purchase; a card statement usually counts.']},
{id:'q14',topic:'Consumer',level:'Beginner',q:'Can I cancel an online purchase I changed my mind about?',
 a:['For distance and online selling, most consumer regimes give a <b>cooling-off period</b> — withdrawal with no reason and no penalty, because you bought without seeing the item.',
 'This is entirely separate from faulty-goods rights. Nothing needs to be wrong with the product.'],
 l:['EU/EEA: 14 days from delivery. Similar windows exist elsewhere.','Common exclusions: custom-made items, perishables, unsealed hygiene goods, started digital downloads.','In-store purchases usually carry no automatic right of withdrawal.']},
{id:'q15',topic:'Privacy & Tech',level:'Intermediate',q:'What rights do I have over my personal data?',
 a:['Under GDPR and the laws modelled on it — Brazil\'s LGPD, South Africa\'s POPIA, India\'s DPDP Act, Morocco\'s Law 09-08 — personal data is something you retain rights in even once someone else holds it.',
 'Those rights are concrete: to know what is held, get a copy, correct errors, have data erased in defined circumstances, port it elsewhere, and object to certain processing including profiling.'],
 l:['Organisations must generally respond within a set period — one month under GDPR — free of charge.','The right to be forgotten traces to <i>Google Spain</i> (2014).','Consent must be freely given and specific. A pre-ticked box is not consent.']},
{id:'q16',topic:'Privacy & Tech',level:'Intermediate',q:'Can someone record or film me without permission?',
 a:['Two distinct questions get tangled: recording a <b>conversation</b>, and photographing someone in <b>public</b>.',
 'Conversations split into one-party consent and all-party consent regimes. Photography in genuinely public places is usually permitted, but <b>publishing</b> can still infringe personality or image rights — France and Germany are notably protective.'],
 l:['Recording in private spaces or through windows is criminal almost everywhere.','Workplace and CCTV recording is usually lawful but must be disclosed under data protection law.','An unlawful recording may still be admissible — admissibility and legality are separate questions.']},
{id:'q17',topic:'Family',level:'Beginner',q:'How do courts actually decide child custody?',
 a:['By one dominant standard almost everywhere: the <b>best interests of the child</b>, enshrined in Article 3 of the UN Convention on the Rights of the Child.',
 'What it means in practice is deliberately open-ended. Courts weigh stability, each parent\'s capacity and involvement, the child\'s relationships, any history of harm, and — with weight increasing by age — the child\'s own wishes.'],
 l:['Shared custody is now the default presumption in a growing number of systems.','Custody (who decides) and residence (where the child lives) are separate concepts in many countries.','Child support is the child\'s right, not the other parent\'s, and usually cannot be bargained away.']},
{id:'q18',topic:'Family',level:'Intermediate',q:'Is a marriage or divorce from one country valid in another?',
 a:['Usually, through doctrine rather than automatically. Most states recognise a marriage valid where celebrated — <i>lex loci celebrationis</i> — unless recognition would violate a fundamental principle of the recognising state, its <i>ordre public</i>.',
 'Divorce recognition is more variable, and religious or administrative divorces obtained abroad are where it most often breaks down.'],
 l:['The Hague Conventions coordinate recognition among signatory states.','Same-sex, polygamous and child marriages are the classic public-policy exceptions.','Where the divorce happens can determine which property regime applies — sometimes worth more than the divorce itself.']},
{id:'q19',topic:'Human Rights',level:'Beginner',q:'What are human rights, legally speaking?',
 a:['Legally they are obligations states have accepted, mostly by treaty, which individuals can enforce. The Universal Declaration (1948) is not itself binding, but nearly all of it has since been converted into binding instruments.',
 'The practical difference between a moral claim and a legal right is enforcement: a court that will hear you, and an order someone must obey.'],
 l:['Some rights are absolute and can never be suspended — freedom from torture and slavery among them.','Others are qualified: limits must be lawful, pursue a legitimate aim, and be proportionate.','Regional courts let individuals sue their own governments, which is historically extraordinary.']},
{id:'q20',topic:'Human Rights',level:'Intermediate',q:'What does "the rule of law" mean beyond a slogan?',
 a:['That power is exercised through law rather than by will. Concretely: laws must be public, prospective, clear and stable; they must bind the government equally; and independent courts must be able to enforce them against the state itself.',
 'The measurable question is not whether a country has laws — all do — but whether the government loses in its own courts. Where that never happens, the rule of law is decorative.'],
 l:['Judicial independence, especially security of tenure and control of appointments, is the load-bearing element.','Retroactive criminal law is near-universally prohibited: <i>nullum crimen sine lege</i>.','Access to justice is what turns the principle into something real.']},
{id:'q21',topic:'Courts & Procedure',level:'Intermediate',q:'Adversarial or inquisitorial — what is the difference?',
 a:['In <b>adversarial</b> systems two opposing parties investigate and present their own evidence while the judge referees. Truth is expected to emerge from the contest.',
 'In <b>inquisitorial</b> systems an investigating judge leads fact-finding, builds a dossier and actively questions witnesses. The judge participates in the search for truth rather than refereeing it.'],
 l:['Adversarial trials are more theatrical; inquisitorial ones are more document-driven and often faster.','Plea bargaining is central to adversarial systems and historically rare, though increasingly adopted, elsewhere.','Almost no real system is purely one or the other any more.']},
{id:'q22',topic:'Human Rights',level:'Beginner',q:'If I cannot afford a lawyer, must one be provided?',
 a:['In serious criminal cases, yes in most systems — a relatively modern development. <i>Gideon v. Wainwright</i> (1963) established it in the US; Article 6(3)(c) ECHR guarantees it where the interests of justice require and you lack means.',
 'For civil matters the picture is far patchier. Many countries offer legal aid for family, housing or asylum cases, but often means-tested and underfunded.'],
 l:['Legal aid, duty schemes, law school clinics and pro bono programmes are the usual routes.','Some systems permit contingency fees — a share of what you win, or nothing.','Ask early; many schemes have deadlines that pass before people know they exist.']},
{id:'q23',topic:'Contracts',level:'Beginner',q:'What if the other side simply breaks the contract?',
 a:['The default remedy is <b>damages</b>: money putting you where performance would have. Not punishment — that is generally not contract law\'s business.',
 'Where money is genuinely inadequate — unique property, a one-of-a-kind object — courts may order <b>specific performance</b>. Common law treats this as exceptional; many civil law systems treat it as primary.'],
 l:['You must usually take reasonable steps to limit your own losses.','Losses too remote or unforeseeable at contracting are generally irrecoverable.','A force majeure clause may excuse performance made impossible by events outside anyone\'s control.']},
{id:'q24',topic:'Privacy & Tech',level:'Intermediate',q:'Who owns something I created?',
 a:['Copyright arises automatically the moment an original work is fixed in tangible form — no registration, notice or fee. That is the Berne Convention rule, binding over 180 countries.',
 'The critical exception: work created <b>in the course of employment</b> usually belongs to the employer. Freelancers normally retain ownership unless the contract assigns it — which is why the assignment clause is the one worth reading.'],
 l:['Copyright protects expression, never the underlying idea.','Duration is typically life of the author plus 50 to 70 years.','Registration is optional in most countries but strengthens enforcement and damages, notably in the US.']},
{id:'q25',topic:'Comparative',level:'Intermediate',q:'Why does the same crime get wildly different sentences in different countries?',
 a:['Because sentencing encodes a society\'s theory of punishment. Systems weighting rehabilitation produce short custodial terms and heavy community provision; systems weighting deterrence and incapacitation produce long ones.',
 'Structure matters as much as philosophy. Mandatory minimums, sentencing guidelines, parole availability, and whether prosecutors or judges effectively set the outcome all move the number more than the underlying conduct does.'],
 l:['Incarceration rates differ by more than an order of magnitude between comparable wealthy democracies.','Plea bargaining concentrates sentencing power in prosecutors, largely outside judicial review.','Pre-trial detention is a large share of the prison population in many systems — people not yet convicted of anything.']},
{id:'q26',topic:'Comparative',level:'Intermediate',q:'Do constitutional courts actually constrain governments?',
 a:['Sometimes decisively, sometimes not at all — and formal powers predict this poorly. Japan\'s Supreme Court has full review powers and has used them against statutes roughly a dozen times in nearly eighty years. Germany\'s court, with similar formal powers, constrains legislation constantly.',
 'What predicts real constraint is appointment design, tenure security, whether the court controls its own docket, and whether losing governments comply.'],
 l:['Single non-renewable terms reduce the incentive to please whoever might reappoint you.','Supermajority appointment requirements force cross-party candidates.','A court that never rules against the government is not evidence of a lawful government.']},
{id:'q27',topic:'Comparative',level:'Beginner',q:'What is a mixed legal system?',
 a:['One where different traditions govern different subject matter, usually as a residue of history — colonisation, occupation, federation or reform layering one system over another.',
 'It is closer to the global norm than the exception. South Africa combines Roman-Dutch private law, English procedure and recognised customary law. Morocco combines French-derived civil codes with codified Islamic family law.'],
 l:['Private law and family law are the most common dividing line.','Scotland, Quebec and Louisiana are civil law islands inside common law states.','Which system applies can turn on the parties\' religion, not the subject matter.']},
{id:'q28',topic:'International',level:'Intermediate',q:'How is international law enforced if there is no world police?',
 a:['Mostly not by force. Compliance runs on reciprocity, reputation, domestic incorporation, and the fact that most international law is dull, technical and mutually convenient — postal routing, aviation safety, trade rules.',
 'For the contested cases the honest answer is that enforcement is weak. <i>Nicaragua v. United States</i> (1986) produced a clear judgment that was simply never complied with, and there was no mechanism to change that.'],
 l:['Security Council enforcement is available in theory and vetoed in practice.','Individual criminal responsibility via the ICC applies only where states cannot or will not act, and major powers are not parties.','Regional human rights courts have the strongest compliance record, because membership carries ongoing political value.']}
];

/* ---------- GLOSSARY ---------- */
const GLOS=[
['Actus reus','Latin','The physical element of a crime — the prohibited act or omission, as distinct from the mental state accompanying it.'],
['Mens rea','Latin','The mental element: intention, knowledge, recklessness or negligence. Most serious offences require both mens rea and actus reus to coincide.'],
['Affidavit','Procedure','A written statement of facts sworn to be true and used as evidence. Lying in one is perjury.'],
['Amicus curiae','Latin','"Friend of the court" — a non-party permitted to submit argument because it has relevant expertise or interest.'],
['A priori review','Comparative','Constitutional review of a law before it takes effect, as historically in France. Contrasts with review of laws already in force.'],
['Bail','Criminal','Release pending trial, usually conditional, on the principle that detention before conviction should be exceptional.'],
['Basic structure','Comparative','Indian doctrine that constitutional amendments cannot destroy the constitution\'s essential features. Adopted in several other systems.'],
['Burden of proof','Evidence','Which party must prove a fact, and to what standard. In criminal cases it rests on the prosecution throughout.'],
['Certiorari','Latin','Discretionary review — an apex court choosing which appeals to hear. The power to choose is itself enormous power.'],
['Common law','Systems','Both a tradition based on judicial precedent, and within it the body of judge-made law as opposed to statute.'],
['Damages','Remedies','Money awarded to compensate loss. Compensatory damages restore the position; punitive damages punish and are rarely available.'],
['Direct effect','EU law','The doctrine that treaty provisions can create rights individuals may enforce in national courts. Established in Van Gend en Loos.'],
['Due process','Constitutional','The requirement that the state follow fair, established procedures before depriving anyone of life, liberty or property.'],
['Erga omnes','Latin','Obligations owed to the international community as a whole, which any state may invoke — such as the prohibition of genocide.'],
['Estoppel','Civil','A rule preventing someone asserting something inconsistent with a position they previously took and others relied on.'],
['Ex parte','Latin','A proceeding brought by one party without the other present — permitted only in urgent or limited circumstances.'],
['Force majeure','Contracts','A clause excusing performance made impossible by extraordinary events beyond a party\'s control.'],
['Habeas corpus','Latin','"That you have the body" — an order requiring anyone detaining a person to justify that detention before a court.'],
['Injunction','Remedies','A court order to do, or stop doing, something. Breach is contempt of court.'],
['Inquisitorial','Systems','Procedure in which a judge leads investigation and fact-finding, rather than refereeing between opposing parties.'],
['Jus cogens','Latin','Peremptory norms of international law from which no derogation is permitted — the prohibitions on genocide, slavery and torture.'],
['Jurisdiction','Procedure','A court\'s authority to hear a matter, determined by geography, subject matter and the parties involved.'],
['Lay judges','Comparative','Non-professional judges sitting alongside professionals on a mixed bench — common across Germany, the Nordics and Japan.'],
['Liability','General','Legal responsibility. Strict liability arises without proving fault; vicarious liability makes one person answerable for another\'s acts.'],
['Margin of appreciation','ECHR','The latitude the Strasbourg court leaves states on contested moral and social questions. Introduced in Handyside.'],
['Negligence','Torts','Failing to take the care a reasonable person would, causing foreseeable harm. Requires duty, breach, causation and damage.'],
['Nullum crimen sine lege','Latin','No crime without law — conduct cannot be criminalised retroactively. Near-universal.'],
['Obiter dictum','Latin','A remark in a judgment not necessary to the decision. Persuasive but not binding.'],
['Ordre public','Civil law','Fundamental principles a system will not compromise, even to recognise a foreign law or judgment. "Public policy" in common law.'],
['Precedent','Systems','A prior decision that guides or binds later courts on the same legal question.'],
['Prima facie','Latin','"On its face" — sufficient to establish a case unless contradicted by other evidence.'],
['Proportionality','Constitutional','The dominant test for limits on qualified rights: legitimate aim, suitability, necessity, and fair balance.'],
['Ratio decidendi','Latin','The reasoning essential to a decision. This alone binds later courts.'],
['Res judicata','Latin','A matter finally decided cannot be relitigated between the same parties. The principle that disputes must end.'],
['Rule of law','Constitutional','That power is exercised through public, prospective, equally applicable law, enforceable against the state by independent courts.'],
['Standing','Procedure','Whether a person is sufficiently affected by a matter to be entitled to bring it to court. <i>Locus standi</i>.'],
['Stare decisis','Latin','"To stand by things decided" — the doctrine of binding precedent in common law systems.'],
['Statute','Sources','A law enacted by a legislature, as distinct from judge-made or customary law.'],
['Statute of limitations','Procedure','The deadline after which a claim or prosecution can no longer be brought. <i>Prescription</i> in civil law systems.'],
['Subpoena','Procedure','An order compelling attendance to testify or production of documents. Ignoring it is contempt.'],
['Supremacy','EU law','That EU law prevails over conflicting national law, including national constitutions. Established in Costa v ENEL.'],
['Terra nullius','Latin','"Land belonging to no one" — the fiction used to justify colonial acquisition, rejected by the High Court of Australia in Mabo.'],
['Tort / Delict','Civil','A civil wrong other than breach of contract — negligence, defamation, trespass, nuisance.'],
['Ultra vires','Latin','"Beyond the powers" — an act taken outside the legal authority granted to a body, and therefore invalid.'],
['Universal jurisdiction','International','The principle that some crimes are so grave any state may prosecute them, regardless of where they occurred.'],
['Void / Voidable','Contracts','A void agreement never had effect. A voidable one is valid until the wronged party cancels it.'],
['Writ','Procedure','A formal written command from a court — historically the mechanism by which a case could be started at all.']
];

/* ---------- GUIDED WALKTHROUGH GRAPH ---------- */
const FLOW={
start:{q:'What kind of situation would you like to understand?',sub:'This runs entirely in your browser and is never sent anywhere.',
 o:[{l:'I was stopped or questioned by police',n:'p1'},{l:'Something with my housing or landlord',n:'h1'},
    {l:'Something at work',n:'w1'},{l:'A purchase or service went wrong',n:'c1'},
    {l:'An agreement or contract I signed',n:'k1'},{l:'My personal data or privacy online',n:'d1'}]},
p1:{q:'At the moment it happened, were you free to leave?',sub:'If you were not sure, that itself matters legally.',
 o:[{l:'I was told I could go',s:'A consensual encounter, not a detention',n:'pA'},
    {l:'I was told I was not free to leave',s:'You were detained',n:'p2'},
    {l:'I was arrested',n:'p2'},{l:'Nobody told me either way',n:'pA'}]},
p2:{q:'Were you told why?',o:[{l:'Yes, a specific reason',n:'pB'},{l:'No reason at all',n:'pC'},{l:'Something vague',n:'pC'}]},
h1:{q:'What is the core of the housing problem?',
 o:[{l:'I am being told to leave',n:'h2'},{l:'Something is broken and not being fixed',n:'hB'},
    {l:'My deposit has not been returned',n:'hC'},{l:'Rent is being raised',n:'hD'}]},
h2:{q:'How was that communicated?',
 o:[{l:'Verbally only',n:'hA'},{l:'A written notice',n:'hA2'},{l:'A court document',n:'hA3'},
    {l:'Locks changed or belongings removed',n:'hA4'}]},
w1:{q:'What happened at work?',
 o:[{l:'I was dismissed or pushed out',n:'w2'},{l:'I am not being paid correctly',n:'wB'},
    {l:'Harassment or discrimination',n:'wC'},{l:'A clause in my contract worries me',n:'wD'}]},
w2:{q:'Were you given a reason?',
 o:[{l:'Yes, a clear reason',n:'wA'},{l:'No reason at all',n:'wA2'},{l:'A reason I believe is a cover story',n:'wA3'}]},
c1:{q:'What went wrong?',
 o:[{l:'It is faulty or broke quickly',n:'cA'},{l:'It is not what was described',n:'cA2'},
    {l:'I simply changed my mind',n:'cB'},{l:'A service was never delivered',n:'cC'}]},
k1:{q:'What is the concern about the agreement?',
 o:[{l:'I did not read it properly before signing',n:'kA'},{l:'The other side is not performing',n:'kB'},
    {l:'I want out of it',n:'kC'},{l:'It was only verbal',n:'kD'}]},
d1:{q:'What is the privacy issue?',
 o:[{l:'A company holds data about me',n:'dA'},{l:'I want something removed from the internet',n:'dB'},
    {l:'I think I was recorded or filmed',n:'dC'},{l:'My data was breached or leaked',n:'dD'}]},

pA:{r:1,t:'A consensual encounter',lead:'If you were free to leave, detention-specific protections were never triggered — but you were also under no obligation to stay or answer.',
 rights:['You may decline questions beyond identifying yourself, where ID rules apply.','You may ask plainly whether you are being detained or free to go.','You may record in public in most jurisdictions, though the rules vary.'],
 next:['Write down date, time, location and any badge or vehicle numbers while it is fresh.','Most police services have a formal complaints route with a deadline.','Learn the local ID-carrying rules before next time — they differ enormously.'],read:['q1','q2']},
pB:{r:1,t:'Detention with a stated reason',lead:'A reason having been given matters: detention normally requires specific articulable grounds, and stating them is part of the safeguard.',
 rights:['The right to silence and against self-incrimination.','The right to legal assistance, free in serious matters if you cannot pay.','The right to be told the grounds — met here.','The right to have continued detention reviewed by a court.'],
 next:['Record the reason in their exact words as soon as you can.','Do not argue the law at the scene; challenge it where it counts.','If detained beyond a short period, ask specifically for a lawyer and stop answering.'],read:['q1','q2','q3']},
pC:{r:1,t:'Detention without a clear reason',lead:'The situation most worth documenting. Detention without articulable grounds is potentially unlawful in most systems, and evidence flowing from it can sometimes be excluded.',
 rights:['To be informed promptly of the reason for detention.','To silence and to legal assistance.','To challenge the detention before a court — the habeas corpus principle.'],
 next:['Write everything down now: times, locations, officers, exact words, witnesses.','Preserve any footage or messages from the period.','Speak to a lawyer or legal aid clinic — complaint deadlines can be short.'],read:['q1','q2','q20']},
hA:{r:1,t:'A verbal instruction to leave',lead:'In most systems a verbal demand has no legal force. Eviction is a formal process requiring written notice and, if contested, a court.',
 rights:['You generally cannot be removed without proper written notice and a court order.','Self-help eviction — locks, belongings, utilities — is usually an offence.','Notice periods are set by law and cannot be shortened by preference.'],
 next:['Do not leave on a verbal demand. Ask for it in writing.','Keep paying rent if you can; arrears create a separate real ground.','Photograph the property and gather your lease and payment records now.'],read:['q7','q8']},
hA2:{r:1,t:'A written eviction notice',lead:'A written notice starts a clock rather than ending a tenancy. Two things decide everything: whether the ground is valid, and whether the period and form are correct.',
 rights:['The notice must state a lawful ground and give the legally required period.','A defective notice is frequently invalid and the process must restart.','You may usually remain until a court orders otherwise, and may contest it there.'],
 next:['Check the notice period against local rules — errors here are extremely common.','Note the exact date of receipt; deadlines run from it.','Get advice before the response deadline, not after.'],read:['q7','q8','q22']},
hA3:{r:1,t:'Court proceedings have begun',lead:'The stage where deadlines genuinely bind. Failing to respond by the stated date often produces a decision against you with no hearing at all.',
 rights:['To be heard before an eviction order is made.','To raise defences — invalid notice, disrepair, discrimination, procedural error.','In many systems, to ask the court for time to find alternative housing.'],
 next:['Diarise the response deadline immediately. This is the single most important step.','Seek legal aid or a housing service now — most prioritise court-stage cases.','Bring everything: lease, payments, repair requests, all correspondence.'],read:['q7','q22','q4']},
hA4:{r:1,t:'Possible illegal eviction',lead:'Changing locks or removing belongings to force a tenant out is unlawful and often criminal in most systems, regardless of whether rent is owed.',
 rights:['To remain until lawfully evicted through the proper process.','To compensation and often reinstatement.','To protection from harassment intended to make you leave.'],
 next:['Photograph everything with dates and times.','Report it — many places have an emergency tenancy enforcement line.','Contact a tenants\' rights organisation urgently; these move fast.'],read:['q7','q8']},
hB:{r:1,t:'Disrepair and habitability',lead:'The obligation to keep a property fit to live in is usually implied into every tenancy by law and cannot be removed by a lease clause.',
 rights:['A home that is safe and fit — structure, heating, water, electrical safety.','Repairs within a reasonable time of notification.','In many systems, a rent reduction for periods of serious disrepair.'],
 next:['Report in writing, always. Verbal reports are nearly impossible to prove.','Photograph the problem with dates.','Do not withhold rent without checking local rules first.'],read:['q8','q7']},
hC:{r:1,t:'Deposit not returned',lead:'Deposits belong to you and are held conditionally. Many jurisdictions require protection in a scheme and return within a fixed period with itemised reasons for deductions.',
 rights:['Return within the statutory period after the tenancy ends.','An itemised, evidenced explanation for every deduction.','Deductions only for actual damage, not ordinary wear and tear.'],
 next:['Send a written request stating the amount and the deadline in your rules.','Compare move-in and move-out photos and inventory.','Many systems offer free deposit adjudication — faster and cheaper than court.'],read:['q8','q13']},
hD:{r:1,t:'Rent increase',lead:'Lawfulness turns on your tenancy type, the notice given, and whether your area caps increases at all.',
 rights:['Proper written notice of a set length.','Fixed-term tenancies generally cannot be increased mid-term unless the lease allows it.','Where rent control applies, increases above the cap are unenforceable.'],
 next:['Check whether your city or country caps increases — many do and tenants often do not know.','Verify the notice form and period.','If it appears retaliatory after a complaint, note the sequence of dates.'],read:['q7','q12']},
wA:{r:1,t:'Dismissal with a stated reason',lead:'Outside at-will systems the question is whether the reason is a valid ground and whether procedure was followed. Procedure alone often decides these cases.',
 rights:['In most countries, a valid reason plus notice or pay in lieu.','A fair process — notice of the allegation, a chance to respond, a right of appeal.','All outstanding wages, accrued leave and any severance owed.'],
 next:['Get the reason and decision in writing if you do not have them.','Note the challenge deadline — employment limits are often measured in weeks.','Save contract, handbook, appraisals and messages before losing system access.'],read:['q9','q10']},
wA2:{r:1,t:'Dismissal with no reason given',lead:'Significance depends entirely on where you are. In most of the world this is unlawful. In at-will jurisdictions it may be lawful — unless the real reason was a prohibited one.',
 rights:['In most systems, to be told the reason in writing.','Protection from dismissal for a prohibited reason — discrimination, whistleblowing, union activity, protected leave.','Notice or pay in lieu, plus everything already earned.'],
 next:['Request the reason in writing. Refusal is itself often evidence.','Write down the timeline — what happened in the preceding weeks is usually the key.','Check the limitation period urgently.'],read:['q9','q10','q22']},
wA3:{r:1,t:'A reason you believe is pretextual',lead:'Pretext cases are won on timing and consistency: what changed, when, and whether others were treated the same for the same conduct.',
 rights:['Protection from dismissal for a prohibited or retaliatory reason.','In many systems the burden shifts to the employer once you show a prima facie case.','To see relevant records about you under data protection law.'],
 next:['Build a dated timeline: protected act, employer response, dismissal.','Identify comparators treated differently for the same conduct.','Consider a data subject access request for internal records about you.'],read:['q9','q15','q4']},
wB:{r:1,t:'Unpaid or incorrect wages',lead:'Among the most straightforward claims to bring: the arithmetic is objective and most systems provide a fast, low-cost route.',
 rights:['Payment for all hours at no less than any applicable minimum wage.','Overtime and premium rates where law or contract provides.','An itemised payslip in most jurisdictions.','Accrued but untaken leave paid out on termination.'],
 next:['Reconstruct hours from any record — rotas, messages, badge logs.','Raise it in writing first; many claims resolve there.','Look for a labour inspectorate or employment tribunal rather than court.'],read:['q9','q23']},
wC:{r:1,t:'Harassment or discrimination',lead:'Nearly every system prohibits discrimination on defined protected grounds, and most place a duty on employers to prevent and address harassment once on notice.',
 rights:['Freedom from discrimination on protected grounds.','Protection from retaliation for complaining in good faith.','An employer duty to investigate properly once notified.'],
 next:['Keep a contemporaneous log — dates, words, witnesses. These carry real weight.','Report through the internal channel in writing so the employer is formally on notice.','Note the external deadline; it often runs from the incident, not the internal outcome.'],read:['q9','q19','q4']},
wD:{r:1,t:'A worrying contract clause',lead:'Restrictive clauses are frequently drafted far wider than a court would enforce. Employers often rely on deterrence rather than enforceability.',
 rights:['Restraints must generally be reasonable in duration, geography and scope.','Several countries require payment during a non-compete period for it to bind.','Clauses conflicting with mandatory statutory protections are unenforceable regardless of signature.'],
 next:['Identify exactly what is restricted — competing, soliciting clients, or soliciting staff are very different.','Check whether your country requires compensation.','Get it reviewed before you resign, not after signing elsewhere.'],read:['q10','q12','q11']},
cA:{r:1,t:'Faulty goods',lead:'Your rights run against the seller and exist independently of any warranty. A shop policy cannot reduce a right the law grants.',
 rights:['Goods must be of satisfactory quality, fit for purpose and as described.','Repair or replacement, then refund or price reduction if that fails.','The seller is responsible — you need not chase the manufacturer.'],
 next:['Contact the seller in writing, describing the fault and the remedy you want.','Keep proof of purchase; a card statement usually suffices.','If refused, check for a consumer agency or small claims route.'],read:['q13','q14','q23']},
cA2:{r:1,t:'Not as described',lead:'Often a stronger position than a fault, because the listing is documentary evidence of what was promised.',
 rights:['Goods must match description, sample or model.','Misleading commercial practices are prohibited under most consumer regimes.','Remedies typically include rejection and refund where the mismatch is significant.'],
 next:['Screenshot the listing immediately — these get edited.','Photograph what actually arrived alongside the description.','Raise it quickly; short rejection windows apply in some systems.'],read:['q13','q14']},
cB:{r:1,t:'Changed your mind',lead:'A distinct right from faulty goods: distance and online purchases usually carry a cooling-off window with no reason required.',
 rights:['A withdrawal period — 14 days from delivery under EU/EEA rules, similar elsewhere.','No penalty and no obligation to justify.','Refund of the price, usually including basic outbound delivery.'],
 next:['Notify in writing within the window. The notice date matters, not the return date.','Keep the item resaleable and keep packaging.','Check exclusions — custom items, perishables, unsealed hygiene goods, started downloads.'],read:['q14','q13']},
cC:{r:1,t:'Service not delivered',lead:'A straight contract question: they were paid to do something and did not do it.',
 rights:['Services must be performed with reasonable care and skill within a reasonable time.','To have it put right, or a price reduction or refund.','Damages for foreseeable losses caused by the failure.'],
 next:['Set a clear written deadline for performance — this strengthens any later claim.','If paid by card or platform, check chargeback and buyer protection deadlines.','Small claims procedures are designed for this and rarely need a lawyer.'],read:['q23','q13','q11']},
kA:{r:1,t:'Signed without reading',lead:'Signature normally signals agreement, but modern consumer and contract law has built substantial exceptions around unfair, hidden and unintelligible terms.',
 rights:['Unfair terms creating significant imbalance may be void in consumer contracts.','Unusually onerous terms often must have been specifically drawn to your attention.','Duress, fraud or serious misrepresentation make a contract voidable.'],
 next:['Read it now and identify the specific term that worries you.','Check whether you contracted as a consumer — protections are far stronger.','Look for a cancellation or cooling-off window.'],read:['q12','q11','q23']},
kB:{r:1,t:'The other side is in breach',lead:'The standard remedy is damages putting you where performance would have — with a duty to limit your own losses while you pursue it.',
 rights:['Damages for losses foreseeable at the time of contracting.','Termination where the breach goes to the root of the agreement.','Specific performance where money genuinely cannot substitute.'],
 next:['Write setting out the breach and a deadline to remedy it.','Keep records of every additional cost the breach caused.','Mitigate — find an alternative if you reasonably can, and keep receipts.'],read:['q23','q11','q12']},
kC:{r:1,t:'Getting out of an agreement',lead:'Several distinct exits exist with different requirements: a contractual termination right, a statutory cooling-off right, a vitiating factor, or mutual agreement.',
 rights:['Any termination or notice right written into the contract itself.','Statutory withdrawal rights for consumer and distance contracts.','Rescission for misrepresentation, duress or fundamental mistake.'],
 next:['Read the termination clause first — the answer is often already in the document.','Check the signing date against any cooling-off window.','Walking away without a basis is itself a breach; establish the ground first.'],read:['q12','q23','q11']},
kD:{r:1,t:'A verbal agreement',lead:'Verbal contracts are usually fully binding. The difficulty is evidential, not legal — and it is often solvable.',
 rights:['Enforceability without writing for most subject matter in most systems.','Conduct, part performance and payment can all evidence terms.','Land, guarantees and long leases must be written to bind at all.'],
 next:['Send a message summarising what was agreed. Their reply, or silence, becomes evidence.','Gather corroboration: transfers, messages, witnesses, delivery records.','Put future agreements in writing, even one paragraph.'],read:['q11','q23','q12']},
dA:{r:1,t:'A company holds your data',lead:'Under GDPR-style regimes you hold enforceable rights over data about you even while someone else controls it, and exercising them is usually free.',
 rights:['To know what is held and why, and to receive a copy.','To correction and, in defined circumstances, erasure.','To portability and to object to certain processing including profiling.'],
 next:['Send a written access request naming the rights you are exercising.','Note the response deadline — one month under GDPR.','If ignored, complain to the national data protection authority. It costs nothing.'],read:['q15','q24']},
dB:{r:1,t:'Removing information online',lead:'Two separate routes are often confused: delisting from search results, and removal at the source.',
 rights:['In the EU and similar regimes, delisting of results that are inadequate, irrelevant or excessive.','Erasure by the controller where a lawful ground applies.','Separate defamation remedies where content is false and damaging.'],
 next:['Use the search engine\'s formal removal request form — that is the correct channel.','Contact the site host separately; delisting does not delete the page.','If refused, escalate to the data protection regulator.'],read:['q15','q16']},
dC:{r:1,t:'Being recorded or filmed',lead:'Separate two questions: recording a private conversation, and photographing in a public place. Different rules govern each.',
 rights:['Consent rules for conversations vary — one-party or all-party by jurisdiction.','Recording in private spaces without consent is criminal almost everywhere.','Image and personality rights may restrict publication even where taking the image was lawful.'],
 next:['Establish where it happened — public or private is the decisive fact.','If published without consent, ask the platform for removal citing image rights or data protection.','Check your local consent rule; it differs even between neighbouring states.'],read:['q16','q15']},
dD:{r:1,t:'A data breach',lead:'Breach notification duties are standard in most data protection regimes, and the obligations sit on the organisation, not on you.',
 rights:['To be told without undue delay where a breach is likely to result in high risk.','To complain to a supervisory authority.','To compensation for material or non-material damage.'],
 next:['Change reused passwords immediately and enable two-factor authentication.','Ask the organisation in writing exactly what data of yours was affected.','Report to the data protection authority — patterns of complaints drive enforcement.'],read:['q15','q24']}
};

/* ==================================================================
   HELPERS
   ================================================================== */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const fmt=n=>n==null?'—':(n>=1000?n.toLocaleString('en-US',{maximumFractionDigits:0}):(Math.round(n*10)/10));
const mean=a=>a.reduce((s,v)=>s+v,0)/a.length;
const median=a=>{const s=[...a].sort((x,y)=>x-y);const m=s.length>>1;return s.length%2?s[m]:(s[m-1]+s[m])/2};
function pearson(x,y){
  const n=x.length,mx=mean(x),my=mean(y);
  let a=0,b=0,c=0;
  for(let i=0;i<n;i++){const dx=x[i]-mx,dy=y[i]-my;a+=dx*dy;b+=dx*dx;c+=dy*dy}
  return b&&c?a/Math.sqrt(b*c):0;
}
function heat(v){ /* 0..100 -> red..amber..green */
  v=clamp(v,0,100);
  const stops=[[0,224,92,79],[35,214,120,60],[55,224,163,58],[72,140,180,90],[100,63,178,127]];
  for(let i=0;i<stops.length-1;i++){
    const[a,r1,g1,b1]=stops[i],[b,r2,g2,b2]=stops[i+1];
    if(v<=b){const t=(v-a)/(b-a);return `rgb(${Math.round(r1+(r2-r1)*t)},${Math.round(g1+(g2-g1)*t)},${Math.round(b1+(b2-b1)*t)})`}
  }
  return 'rgb(63,178,127)';
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),3200)}
function openModal(html){$('#mbox').innerHTML=html;$('#modal').classList.add('on');document.body.style.overflow='hidden'}
function scrollTo_(id,block){const e=document.getElementById(id);if(e&&e.scrollIntoView)e.scrollIntoView({block:block||'start',behavior:'smooth'})}
function closeModal(){$('#modal').classList.remove('on');document.body.style.overflow=''}
$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});


/* ==================================================================
   PERSISTENCE + LIVE SLIDER REFRESH
   ================================================================== */
/* ------------------------------------------------------------------
   ANALYTICS — off by default, and it stays off unless you turn it on.
   Paste a privacy-friendly script tag (Plausible, Fathom, Cloudflare
   Web Analytics) into each page's <head> and set this to true so the
   site reports its own in-page navigation as well as page loads.
   Nothing here sets a cookie or identifies anyone. See DEPLOY.md.
   ------------------------------------------------------------------ */
const ANALYTICS=false;
function pageview(name){
  if(!ANALYTICS)return;
  try{
    if(window.plausible)window.plausible('pageview',{u:location.origin+location.pathname+'#'+name});
    else if(window.fathom)window.fathom.trackPageview({url:location.pathname+'#'+name});
  }catch(e){}
}

const STORE_KEY='laworchard.v1';
function loadStore(){ try{ return JSON.parse(localStorage.getItem(STORE_KEY)||'{}') }catch(e){ return {} } }
function saveStore(patch){ try{ const s=Object.assign(loadStore(),patch);
  localStorage.setItem(STORE_KEY,JSON.stringify(s)); return s }catch(e){ return {} } }
function storeGet(k,d){ const v=loadStore()[k]; return v===undefined?d:v }
function clearStore(){ try{ localStorage.removeItem(STORE_KEY) }catch(e){} }

/* --- progress: what you have looked at and played ------------------ */
function track(kind,id,extra){
  try{
    const s=loadStore(), p=s.progress||{}, k=kind+':'+id;
    const rec=p[k]||{n:0,first:Date.now()};
    rec.n++; rec.last=Date.now();
    if(extra&&typeof extra.score==='number'){
      rec.best=Math.max(rec.best===undefined?-1:rec.best,extra.score);
      if(extra.of)rec.of=extra.of;
    }
    p[k]=rec; saveStore({progress:p});
  }catch(e){}
}
function progressAll(){ try{ return loadStore().progress||{} }catch(e){ return {} } }
function progGet(kind,id){ return progressAll()[kind+':'+id]||null }
function progCount(kind){ return Object.keys(progressAll()).filter(k=>k.indexOf(kind+':')===0).length }
window.clearStore=clearStore;

/* Re-render only the [data-live] regions so a slider being dragged survives. */
function liveRefresh(renderFn, hostSel){
  const host=$(hostSel||'#b-lab'); if(!host)return;
  const tmp=document.createElement('div'); tmp.innerHTML=renderFn();
  host.querySelectorAll('[data-live]').forEach(el=>{
    const src=tmp.querySelector('[data-live="'+el.dataset.live+'"]');
    if(src&&src.innerHTML!==el.innerHTML)el.innerHTML=src.innerHTML;
  });
  host.querySelectorAll('[data-lbl]').forEach(el=>{
    const src=tmp.querySelector('[data-lbl="'+el.dataset.lbl+'"]');
    if(src&&src.textContent!==el.textContent)el.textContent=src.textContent;
  });
  host.querySelectorAll('[data-livestyle]').forEach(el=>{
    const src=tmp.querySelector('[data-livestyle="'+el.dataset.livestyle+'"]');
    if(src)el.setAttribute('style',src.getAttribute('style')||'');
  });
}

/* ==================================================================
   SECTION SCAFFOLD
   ================================================================== */
/* ==================================================================
   SECTIONS · id · label · title · lede · group · what · who · how
   ================================================================== */
const GROUPS=[
['start','Start here'],['situation','Your situation'],['lab','Law Lab'],['world','World systems'],
['learn','Learn'],['tools','Tools'],['careers','Careers in law'],['about','About']];

/* ==================================================================
   32 · WHAT DOES THIS MEAN — annotated documents
   ================================================================== */
const DOCS=[
{id:'claim',t:'A court claim form',who:'A court, on behalf of someone suing you',urg:3,
 dl:'Usually 14 days to acknowledge; 28 in total if you then file a defence',
 gist:'Someone has started a court case against you over money or property. This is the formal beginning of that case — not a threat, and not a warning shot.',
 calm:'Receiving one does not mean you have lost, or that anyone has decided you owe anything. It means a claim has been filed and you now have a right to answer it.',
 parts:[
  ['Claim number','A reference like 1AB23456, usually top right. Quote it on everything you send. Losing track of it is the most common way people lose track of their own case.'],
  ['Claimant and defendant','The claimant is suing. The defendant is you. If your name or address is wrong, say so — but still respond within the deadline.'],
  ['Particulars of claim','Their side of the story and what they say you owe. It may be attached, or it may follow within a couple of weeks.'],
  ['Amount claimed','The sum, plus court fees and usually interest. This is what they are asking for, not what a court has decided.'],
  ['The response pack','Forms letting you admit, dispute, or ask for more time. Filling one in is how you take part.'],
  ['Date of service','The date you are treated as having received it. Your clock runs from here, not from the day you opened the envelope.']],
 ignore:'A default judgment can be entered against you with no hearing at all. That becomes a court judgment on your credit record and opens the door to enforcement — bailiffs, deductions from wages, or a charge over your home.',
 act:['Write the deadline in a calendar today, before you do anything else.','Respond even if you dispute all of it. Responding is not admitting.','If you need more time, acknowledging the claim usually buys you a further fortnight.','Get advice before the deadline, not after it.'],
 ask:['Is the amount right, and can they prove it?','Am I actually the right defendant?','Is it too old to be enforceable where I live?']},

{id:'evict',t:'A notice to leave your home',who:'Your landlord, or their letting agent',urg:3,
 dl:'The notice period varies enormously — weeks to months — by country and by the reason given',
 gist:'Your landlord wants the property back. In almost every system this is the first step in a process, not an order to go.',
 calm:'A notice is not an eviction. In most countries a landlord cannot lawfully remove you without a court order, however the letter is worded.',
 parts:[
  ['The type of notice','There are usually several kinds — one alleging you did something, one requiring no reason at all. Which one you have determines everything that follows.'],
  ['The ground relied on','If a reason is given it must be a lawful ground. Rent arrears, damage, and the landlord wanting to sell or move in are the common ones.'],
  ['The expiry date','The earliest date they could ask a court for possession. It is not a date you must be out by.'],
  ['How it was served','Notices are invalid surprisingly often — the period miscalculated, the wrong form used, or served in a way the rules do not allow.'],
  ['Preconditions','Many systems require the landlord to have done things first: protected your deposit, given you safety certificates, licensed the property. Failures here can void the notice entirely.']],
 ignore:'The landlord can apply to a court for a possession order. If they get one and you still do not leave, an enforcement officer can remove you. None of that happens without a court.',
 act:['Do not leave on the strength of the notice alone — leaving voluntarily can affect your right to be rehoused.','Check the notice period against the rules where you live. Errors are extremely common.','Keep paying rent if you possibly can.','Contact a housing adviser or tenants union now, not when a court date arrives.'],
 ask:['Is this the right form, correctly filled in?','Has the notice period been calculated properly?','Did my landlord do everything they had to do first?']},

{id:'discip',t:'An invitation to a disciplinary meeting',who:'Your employer',urg:2,
 dl:'Usually a few days notice. The meeting date is the deadline that matters',
 gist:'Your employer is formally investigating something, and this meeting could end in a warning or in dismissal. It is a process with rules — and those rules are where employers most often go wrong.',
 calm:'An invitation is not a decision. The fairness of what happens between now and the outcome is itself something a tribunal can rule on later.',
 parts:[
  ['The allegation','It must be specific enough for you to answer. "Conduct issues" is not specific. You are entitled to know what you are said to have actually done.'],
  ['The evidence','You should normally receive it in advance. Being shown it for the first time in the room is a procedural failure worth noting.'],
  ['The possible outcome','If dismissal is on the table the letter should say so. Being dismissed at a meeting you were told was informal is a textbook unfair dismissal.'],
  ['Right to be accompanied','In many systems you may bring a colleague or union representative. Use it — a second person taking notes changes how a meeting runs.'],
  ['Date, time and place','If you genuinely cannot attend, ask in writing to rearrange rather than simply not appearing.']],
 ignore:'The meeting can usually proceed without you, and a decision be made in your absence.',
 act:['Ask in writing for the evidence and the specific allegation if either is missing.','Arrange to be accompanied.','Write your own account beforehand, while it is fresh.','Take notes. Afterwards, write down what was said the same day.'],
 ask:['Do I know exactly what I am accused of?','Have I seen everything they are relying on?','Was I told dismissal was possible?']},

{id:'debt',t:'A letter from a debt collector',who:'A collection agency — sometimes one that bought the debt',urg:2,
 dl:'Usually 14 or 30 days, and often softer than the tone suggests',
 gist:'Someone says you owe money and wants paying. The letter is designed to feel official and urgent. By itself it carries no legal force at all.',
 calm:'This is not a court document. Nobody can take anything from you on the strength of a letter — that requires a court, and a court requires notice to you.',
 parts:[
  ['Who is actually asking','The original creditor and the collector may be different companies. If the debt was sold, the collector must be able to prove they now own it.'],
  ['The amount','Check it against your own records. Added fees and interest are frequently disputed, and sometimes not properly owed at all.'],
  ['The threatened action','Language about "further action" or "doorstep collection" usually describes what could happen, not what will. Only a court can order enforcement.'],
  ['The reference number','You need it to dispute or query anything.'],
  ['Whether it is a pre-action letter','Some are formal notices immediately before court proceedings. Those are genuinely more serious, and normally say so explicitly.']],
 ignore:'The collector may escalate to court. If the debt is genuinely yours and still enforceable, ignoring it makes a judgment more likely rather than less.',
 act:['Do not pay or acknowledge anything until you know the debt is yours and correctly calculated.','Ask in writing for the original agreement and a full statement.','Check whether it is old enough to be time-barred where you live.','Speak to a free debt advice charity before agreeing any payment plan.'],
 ask:['Can they prove this is mine?','Is the figure right?','Is it too old to enforce?']},

{id:'police',t:'A notice after arrest or police interview',who:'The police, when releasing you',urg:3,
 dl:'Either a date to return, or an open-ended investigation with no date at all',
 gist:'You have been released, but the investigation continues. The form tells you what happens next and what you must do meanwhile.',
 calm:'Being under investigation is not being charged, and being charged is not being convicted. Most investigations end without charge.',
 parts:[
  ['Bail conditions','If you were bailed there may be conditions — where you may go, who you must not contact. Breaching one is itself an offence.'],
  ['Return date','Some systems require you back on a set date. Others release you "under investigation" with no date, which can run for months.'],
  ['The offence being investigated','What they are looking at. It can change as the investigation develops.'],
  ['Your solicitor','If you had a duty solicitor their details should be here. That representation normally continues.'],
  ['Property receipt','A list of anything seized and how to get it back.']],
 ignore:'Failing to answer bail is a separate offence and usually results in arrest.',
 act:['Do not contact any witness or complainant, even to explain yourself. It can become a further offence.','Keep the same solicitor if you can — continuity matters more than people expect.','Write down everything you remember about the incident now, and date it.','If months pass with no news, your solicitor can press for a decision.'],
 ask:['Am I on bail, and if so what are the conditions?','Do I have a return date?','Who is my solicitor?']},

{id:'et',t:'A court or tribunal timetable order',who:'The court or tribunal, once a case is under way',urg:3,
 dl:'Every date in it is a real deadline',
 gist:'This is the court telling both sides what to do and by when: exchange documents, write witness statements, prepare the bundle. It is the timetable of your case.',
 calm:'It reads as intimidating but it is administrative. It says nothing at all about who is going to win.',
 parts:[
  ['Case number','Quote it on everything.'],
  ['Disclosure','The date by which each side must hand over relevant documents — including ones that damage their own case.'],
  ['Witness statements','When written evidence is exchanged. Usually simultaneously, so neither side sees the other first.'],
  ['The bundle','An agreed, paginated file of documents for the hearing. Someone has to compile it, and the order says who.'],
  ['The hearing','Date, length, and whether it is final or preliminary. A preliminary hearing decides how the case runs, not who wins.']],
 ignore:'Missing a timetable deadline can lead to your case being struck out — losing without anyone ever considering the merits.',
 act:['Put every date into a calendar the day you receive it.','Start gathering documents immediately. Disclosure arrives sooner than people expect.','If you cannot meet a date, apply to change it before it passes, not after.','Check whether conciliation or mediation is still open. Most cases settle.'],
 ask:['What is the very next date, and what must I produce?','Who is compiling the bundle?','Is this hearing final, or about procedure?']},

{id:'refuse',t:'A refusal with a right of appeal',who:'A government department or immigration authority',urg:3,
 dl:'Often very short — sometimes 14 days, sometimes fewer',
 gist:'An application has been refused. The crucial question is what kind of challenge the letter gives you, because appeal, administrative review and judicial review are completely different routes with different deadlines.',
 calm:'A refusal is a decision, not the end of the road — but only if you act inside the window, which is usually short.',
 parts:[
  ['The reasons for refusal','Read them as a numbered list, not as prose. Each one has to be answered separately in any challenge.'],
  ['Your right of challenge','Appeal, administrative review, or judicial review. The letter should say which. They are not interchangeable.'],
  ['The deadline','Stated in days, and usually shorter than people expect. It may differ depending on where you are.'],
  ['Consequences','Whether you may remain while challenging, and what happens to any permission you currently hold.']],
 ignore:'Rights of appeal expire and are very rarely revived. Losing status can have consequences that last years.',
 act:['Find the deadline and diarise it before you read anything else.','Use a properly accredited adviser. This is one area where unqualified help causes real damage.','Gather evidence answering each refusal reason individually.'],
 ask:['What exactly can I challenge, and by when?','Can I stay while I do it?','Which specific reason is weakest?']},

{id:'summons',t:'A witness summons',who:'A court, usually at one party’s request',urg:3,
 dl:'The date on the summons is compulsory',
 gist:'A court is ordering you to attend and give evidence. This is not an invitation, and not something you can decline because it is inconvenient.',
 calm:'You are a witness, not a party. Nobody is accusing you of anything — you are there to say what you saw.',
 parts:[
  ['The date and the court','Attendance is compulsory. Tell the court at once if the date is genuinely impossible.'],
  ['What you must bring','Some summonses require documents as well as your attendance.'],
  ['Expenses','You can usually claim travel and lost earnings. Ask the party who called you.'],
  ['Consequences of not attending','Normally stated on the form, and normally serious.']],
 ignore:'Ignoring a witness summons is contempt of court, which can mean a fine or arrest.',
 act:['Attend — or tell the court in advance, in writing, why you cannot.','Refresh your memory from any statement you gave, but do not rehearse answers.','If you are frightened of attending, say so. Special measures exist for exactly this.'],
 ask:['What am I being asked about?','Can I claim my costs?','Do I need protective measures?']},

{id:'breachnote',t:'A data breach notification',who:'A company that lost control of your data',urg:1,
 dl:'No legal deadline for you, but the practical steps are time-sensitive',
 gist:'An organisation is telling you they lost information about you. Most of these letters are vague, because the organisation often does not yet know the full picture itself.',
 calm:'It is worth acting on, but it is not an emergency and you are not in trouble. You are the person this happened to.',
 parts:[
  ['What data was involved','The most important line in the letter. Names and addresses are one problem; passwords or payment details are another entirely.'],
  ['What they are doing','Containment and remediation. Frequently boilerplate.'],
  ['What they suggest','Usually change passwords and watch for fraud. Reasonable, if minimal.'],
  ['Your rights','You can ask what specifically about you was affected, and complain to the data regulator free of charge.']],
 ignore:'Nothing formal happens to you, but the fraud risk is real and rises the longer a reused password stays live.',
 act:['Change any reused password now, and turn on two-factor authentication.','Ask in writing exactly which of your data was affected.','Watch statements and your credit file for a few months.','Complain to the regulator if the answer is unsatisfactory. It costs nothing.'],
 ask:['Was a password or payment detail involved?','Have I used that password anywhere else?','What are they offering to do about it?']}];
const DOCSBY=Object.fromEntries(DOCS.map(d=>[d.id,d]));
/* ==================================================================
   33 · WHAT HAPPENS NEXT — process maps
   ================================================================== */
const PROCS=[
{id:'small',t:'A small money claim',ic:'coin',
 tag:'Suing, or being sued, over a modest sum',
 total:'Typically 4 to 10 months, start to finish',
 gist:'The small claims route exists so that ordinary people can use a court without a lawyer. Procedure is deliberately relaxed, costs are capped, and judges expect to be dealing with people representing themselves.',
 who:'Usually just you, the other side, and a judge in a small room. No wigs, no jury, no public gallery.',
 steps:[
  ['Before you file','Days to weeks','Most systems expect you to have asked properly first — a letter setting out what you want and why, with a deadline. Skipping this can cost you money later even if you win.','Send a letter before action and keep proof of postage.'],
  ['Filing the claim','1 day','You complete a form describing what happened and what you want, and pay a fee. The fee usually scales with the amount claimed.','Be specific about dates and figures. Vagueness here haunts you later.'],
  ['They respond','2 to 4 weeks','They can admit, dispute, or ignore it. If they ignore it you can usually ask for judgment without a hearing.','If they file a defence, read it closely — what they do not deny is often more useful than what they do.'],
  ['Allocation and directions','2 to 6 weeks','The court decides the case belongs on the small claims track and issues a timetable: what to send, and when.','Diarise every date. They are enforced even against people without lawyers.'],
  ['Exchanging evidence','4 to 10 weeks','Both sides send documents and witness statements. Photographs, messages, receipts and notes made at the time carry real weight.','Anything you did not disclose, you usually cannot rely on.'],
  ['The hearing','1 to 3 hours','Informal. You explain what happened, they explain theirs, the judge asks questions and usually decides on the day.','Bring three copies of everything. Speak to the judge, not to the other side.'],
  ['Getting paid','Weeks to months','Winning and being paid are different things. If they do not pay, enforcement is a separate application with its own fee.','Think about whether they can actually pay before you start.']],
 fear:['You will not be cross-examined by a barrister — usually there is no barrister.','Losing does not normally mean paying the other side’s legal costs on this track.','The judge knows you are not a lawyer and will walk you through the procedure.']},

{id:'tribunal',t:'An employment claim',ic:'scale',
 tag:'A claim against an employer or ex-employer',
 total:'Often 9 to 18 months, sometimes longer',
 gist:'Employment claims run on a strict timetable that starts far earlier than people realise — the deadline to begin is frequently a matter of weeks or months from the thing you are complaining about, not years.',
 who:'You, your employer (often with a lawyer), and either a single judge or a judge sitting with two lay members.',
 steps:[
  ['The clock starts','Immediately','The limitation period runs from the dismissal, or from the act complained of. It is short, and missing it usually ends the claim regardless of merit.','Find out your actual deadline in week one. This is the single most important thing on this page.'],
  ['Early conciliation','Up to about 6 weeks','Many systems require an attempt at conciliation through a state body before you may file. It pauses the clock while it runs.','Free, confidential, and it resolves a large share of disputes without any hearing.'],
  ['Filing the claim','1 day','A form setting out what happened and which legal wrongs you say occurred. Getting the legal labels roughly right matters.','You can usually amend later, but it is harder than getting it close now.'],
  ['Their response','28 days','Your employer files a defence. You will see their account of events, often for the first time.','Read it twice. The gap between their story and their own documents is where cases are won.'],
  ['Case management','1 to 3 months in','A short hearing, or a written order, setting the timetable, the issues, and the length of the final hearing.','Every date here is enforced. Missing them can end the claim.'],
  ['Disclosure and statements','3 to 9 months in','Both sides exchange documents, then written witness statements. Statements usually stand as your evidence.','Tell the story in order and stick to what you personally saw or heard.'],
  ['The hearing','1 day to 2 weeks','Evidence, cross-examination, submissions. The panel may decide on the day or send judgment in writing later.','Most claims settle before this. That is a normal outcome, not a failure.'],
  ['Remedy','Weeks afterwards','If you win, a separate stage decides what you get. Usually financial loss, sometimes with an award for injury to feelings.','Keep records of your job search. Failing to mitigate reduces awards.']],
 fear:['The great majority of claims settle without a final hearing.','Conciliation is free and commits you to nothing.','You cannot normally be ordered to pay the employer’s costs simply for losing.']},

{id:'possess',t:'Possession proceedings',ic:'door',
 tag:'A landlord going to court to get a property back',
 total:'Usually 2 to 8 months from notice to any enforcement',
 gist:'The route from a landlord wanting you out to you actually having to leave has several stages. Each takes time, and you can take part in every one of them.',
 who:'You, the landlord or their solicitor, and a judge. Hearings are often short and listed in blocks with other cases.',
 steps:[
  ['The notice','Weeks to months','A written notice with a legally-set minimum period. It gives a date after which the landlord may apply to court. You do not have to leave on that date.','Check the notice for defects. Many are invalid and have to be started again from scratch.'],
  ['The claim is issued','Days','Once the notice expires the landlord can file. The court sends you the papers and usually a form to reply.','Fill in the reply form. It is your chance to raise defences and explain your circumstances.'],
  ['The hearing','4 to 10 weeks later','Often short. The judge checks whether the legal requirements are met and hears anything you want to say.','Turn up. Free duty advisers are frequently available at court on the day.'],
  ['The order','On the day, or reserved','The judge may dismiss the claim, or make an order giving you a date to leave — sometimes suspended on conditions, such as paying off arrears.','A suspended order means you can stay if you keep to the terms. Keep to them.'],
  ['If you do not leave','Further weeks','The landlord must apply separately for enforcement. Only a court-appointed officer may remove you, and only on notice.','There is still time at this stage. Emergency applications are sometimes possible.']],
 fear:['A landlord changing the locks or removing you personally is unlawful almost everywhere.','Free advice is often available at court on the morning of the hearing.','Your circumstances are relevant. Judges have real discretion in many kinds of case.']},

{id:'crim',t:'A criminal case',ic:'gavel',
 tag:'From arrest through to trial',
 total:'Months, often well over a year',
 gist:'Most criminal cases never reach a trial. They end with no charge, a discontinuance, or a guilty plea. The process is long, and much of the waiting happens before anything visible occurs.',
 who:'You, your solicitor, a prosecutor, and a judge or magistrates. A jury only in the more serious cases.',
 steps:[
  ['Arrest or invitation','Hours','You may be arrested, or asked to attend voluntarily. Either way you have a right to legal advice, which is normally free at this stage.','Always take the solicitor. Always. It costs you nothing and it changes the interview.'],
  ['Interview','Hours','Recorded, with your solicitor present. You will have had a chance to speak to them privately first.','Your solicitor will advise on answering, staying silent, or giving a written statement. Follow that advice.'],
  ['Released, or charged','Same day, or months later','Either released under investigation or on bail while enquiries continue, or charged and given a court date.','Investigations can take many months. That delay is normal and is not a signal about the outcome.'],
  ['First hearing','Days to weeks after charge','A short administrative hearing. You enter a plea and the court decides where the case will be heard.','This is not a trial. Nobody gives evidence.'],
  ['Preparation','Months','The prosecution serves its evidence, the defence its case. Arguments about what evidence is admissible happen here.','Most cases resolve at this stage, in one direction or another.'],
  ['Trial','Days to weeks','Evidence is called and tested. In serious cases a jury decides the facts and a judge decides the law.','The prosecution must prove it. You do not have to prove anything at all.'],
  ['Sentence','Same day, or adjourned','Only after conviction or a guilty plea. Reports may be ordered first.','Guilty pleas attract a reduction, and the earlier the plea the larger it usually is.']],
 fear:['Being investigated is not being charged, and being charged is not being convicted.','Legal advice at the police station is free to you, whatever your income.','Most cases never reach a trial at all.']},

{id:'ombud',t:'An ombudsman complaint',ic:'seal',
 tag:'A free route against a company or public body',
 total:'Typically 3 to 12 months, and free',
 gist:'Ombudsman schemes decide disputes about banks, insurers, energy suppliers, telecoms, housing providers and public services — without lawyers, and at no cost to you. They are the most underused route on this list.',
 who:'You, in writing, and a case handler. There is usually no hearing at all.',
 steps:[
  ['Complain to them first','8 weeks or so','Almost every scheme requires you to have complained to the organisation directly and given them a chance to put it right.','Put it in writing. Keep it factual and short. Ask for a specific outcome.'],
  ['Deadlock or timeout','Immediately after','Either they issue a final response you reject, or the period passes with no response. Either one opens the door.','Keep their final response letter. You need it to refer the case.'],
  ['Refer to the scheme','1 day','A form, online or on paper. There is a time limit after the final response — often six months.','Attach your evidence as one clear bundle rather than in pieces.'],
  ['Investigation','1 to 6 months','A case handler gathers both sides and often proposes an informal resolution first.','Respond promptly. Cases stall mostly because people go quiet.'],
  ['The decision','Weeks','If you accept the final decision it usually binds the organisation. If you reject it, you keep your right to go to court.','Accepting is normally final. Read what you are giving up before you sign.']],
 fear:['It costs you nothing, whatever the outcome.','You do not need a lawyer, and using one rarely improves the result.','Rejecting a decision leaves your court rights intact.']},

{id:'family',t:'Separating with children involved',ic:'home',
 tag:'Arrangements for children after a relationship ends',
 total:'Weeks if agreed; 6 to 18 months if contested',
 gist:'Courts in most systems start from the position that arrangements should be agreed between parents, and that a judge should only decide if agreement genuinely is not possible. The child’s welfare, not either parent’s rights, is the test.',
 who:'You, the other parent, sometimes a mediator, and if it reaches court a judge — often with a welfare officer reporting.',
 steps:[
  ['Trying to agree','Weeks','Most systems require or strongly encourage mediation before any application. It is far quicker and cheaper than court.','Agreed arrangements can be recorded formally later if you want them binding.'],
  ['Mediation','4 to 12 weeks','A neutral third party helps you reach an arrangement. It is confidential, and it is not counselling.','Exemptions exist where there has been abuse. Say so — you do not have to attend.'],
  ['Application','1 day','If agreement fails, an application asks the court to decide specific questions: where a child lives, and time spent with each parent.','Applications are about specific issues, not about winning generally.'],
  ['First hearing','6 to 12 weeks','The court identifies what is actually in dispute and tries again to narrow it. Safeguarding checks usually happen first.','Many cases resolve here, once the issues are named precisely.'],
  ['Reports and findings','3 to 9 months','A welfare officer may report. If there are disputed allegations, a separate hearing may decide what happened before anything else proceeds.','Focus on your child, not on the other parent. Judges notice the difference immediately.'],
  ['Final hearing','Months in','Evidence, then a decision. Orders are made about arrangements and can be varied later if circumstances change.','Orders are not permanent. They can be revisited as children grow.']],
 fear:['There is no automatic preference for either parent in most modern systems.','None of this is about punishing anyone. The test is the child’s welfare.','Arrangements you reach yourselves are almost always better than ones imposed on you.']}];
const PROCSBY=Object.fromEntries(PROCS.map(p=>[p.id,p]));

const SEC=[
['start','Welcome','Where would you like to begin?',
 'Three ways in, depending on why you are here. Nothing asks you to register, and your settings are remembered on this device.','start',
 'A front door. It points you at the right part of the site instead of making you guess.',
 'Anyone arriving for the first time.',
 'Pick whichever card describes you. You can always come back here by clicking the logo.'],

['progress','Your progress','Where You Have Got To',
 'What you have already read, played and looked up \u2014 kept on this device, with no account and nothing uploaded.','start',
 'A record of the sections, games, documents and processes you have opened, so you can carry on rather than start again.',
 'Anyone coming back for a second or third visit.',
 'It fills in on its own as you use the site. Clear it whenever you like \u2014 the button is at the bottom.'],
['help','Find help','Find Real Help',
 'Every briefing on this site ends by telling you to speak to someone. This page tells you who that someone is, what they cost, and how to reach them.','situation',
 'A signposting page: emergency routes, which kind of organisation handles which problem, and named bodies in 17 jurisdictions.',
 'Anyone who needs an actual human \u2014 especially if something is urgent.',
 'If it is urgent, read the red panel first. Otherwise match your problem in step one, then find your country in step two.'],

['guide','Walkthrough','Guided Walkthrough',
 'Answer a few questions about a real situation and get a clear briefing back — what the law calls this, what rights are usually in play, and what to do next.','situation',
 'A short branching questionnaire. It asks two or three questions, then hands you a plain-language briefing on your situation.',
 'Someone dealing with something right now — a landlord, an employer, the police, a purchase gone wrong.',
 'Start with whichever category is closest. It takes under a minute, and every ending links to fuller reading.'],
['qa','Questions','Legal Questions Explorer',
 'Plain-language answers to the questions people actually ask, with explicit notes wherever the answer changes depending on which country you are in.','situation',
 'Twenty-eight common legal questions, answered without jargon and searchable by topic.',
 'Anyone who wants to understand a rule rather than act on one immediately.',
 'Search or filter by topic. Answers marked with a jurisdiction note vary significantly by country — read that part carefully.'],
['process','What next','What Happens Next',
 'The six processes people actually find themselves in, stage by stage \u2014 what happens, in what order, over how long, and who is in the room.','situation',
 'Six procedures mapped end to end, with honest timescales and the things people wrongly fear at each stage.',
 'Anyone facing a court, tribunal or formal process for the first time.',
 'Pick the process closest to yours, then tell it which stage you have reached. It shows what is behind you and what is still ahead.'],
['docs','This letter','What Does This Mean?',
 'A letter arrived and it is written to sound serious. Nine common documents, walked through part by part \u2014 including which date actually matters.','situation',
 'Annotated walkthroughs of nine documents people receive: court claims, eviction notices, disciplinary invitations, debt letters and more.',
 'Anyone holding a letter they do not understand.',
 'Pick the document that looks like yours, then click through its parts. The deadline is called out at the top of every one.'],
['letters','Letters','Letter Builder',
 'Twelve letters that people actually need to send \u2014 filled in from a short form, ready to copy or print.','situation',
 'Templates for deposits, repairs, faulty goods, data requests, unpaid wages, grievances and formal legal demands.',
 'Anyone who now knows their rights and needs to put something in writing today.',
 'Pick a letter, fill the blanks, then copy or print. Nothing you type is sent or stored \u2014 the letter builder runs entirely in your browser.'],

['counsel','Ask','Ask the Clerk',
 'A question box answered by the Clerk, which searches this site’s own material and shows you what it holds.','situation',
 'The Clerk searches every jurisdiction, case, practice area and term on this site. Like a judicial clerk it looks things up and briefs you — it does not decide anything, and it never invents a figure the site does not hold.',
 'People who would rather ask a question than click through menus.',
 'Type a jurisdiction, a case name, or a concept. The glossary tab has 47 terms defined without circular definitions.'],

['lab','Law Lab','The Law Lab',
 'Thirteen games across criminal, corporate, family, contract, data protection, negligence, constitutional law and exam technique. Each one is a thing you do, not a thing you read.','lab',
 'Thirteen interactive games, each on its own page. You change something and the legal result changes in front of you.',
 'Students, and anyone who learns by doing rather than reading.',
 'Start with the Jury Room. Weighing the same evidence against the civil and criminal standards is the single clearest thing on this site.'],

['atlas','Atlas','Legal Atlas',
 'Every tracked jurisdiction on one grid, coloured by whichever measure interests you. Click any tile for a full report on that country.','world',
 'A world map where each country is one equal-sized tile, recolourable by six different measures.',
 'Anyone curious how legal systems compare, or looking up one country in particular.',
 'Switch the measure with the buttons above the map. Click a tile to open that jurisdiction\'s full record.'],
['index','Index','Composite Legal Integrity Index',
 'Seven dimensions of how well a legal system actually works, from judicial independence to criminal justice.','world',
 'A single composite score broken into its parts, plus every jurisdiction ranked side by side.',
 'People who want to see the shape behind a headline number.',
 'Read the dimension breakdown before the headline. A high score built on order rather than rights means something very different.'],
['juris','Jurisdictions','Jurisdiction Intelligence',
 'The full dataset — rule of law, judicial independence, procedure, incarceration and capital punishment status, side by side.','world',
 'All 112 jurisdictions as browsable cards or a sortable table.',
 'Anyone comparing several countries, or looking for one specific fact.',
 'Use cards to browse and the table to sort. Click any row or card for the full record.'],
['compare','Compare','Comparative Analysis',
 'Put up to six jurisdictions side by side and see where they actually diverge.','world',
 'A radar chart of profile shape, plus bar rankings and a full comparison table.',
 'Students and anyone weighing two or more systems against each other.',
 'Add or remove jurisdictions with the selector. The radar shows shape; a spiky profile has a specific structural problem.'],
['courts','Courts','Apex &amp; International Courts',
 'Twelve of the courts that matter most — how they are composed, who appoints them, and what they can actually strike down.','world',
 'Detailed records for twelve supreme, constitutional and international courts.',
 'Anyone interested in how judicial power is really constrained.',
 'Click a court card to load its full record. Watch how appointment design tracks reputation for independence.'],

['recent','Recent','Recent Decisions',
 'The rulings from the last year that actually matter \u2014 split into what changed for ordinary people and what changed the law itself. Updated periodically, every entry linked to its source.','learn',
 'Recent significant judgments in two streams, with a plain-English explanation where the judgment has been read and an honest link where it has not.',
 'Anyone keeping half an eye on where the law is moving \u2014 and anyone whose own rights may have just changed.',
 'Switch between the two streams at the top. Entries marked Explained have been read; the rest are listed with a link so you can check them yourself.'],
['caselaw','Case law','Landmark Case Law',
 'Forty-two decisions from Hammurabi to 2026 — what happened, what the court decided, and why it still matters.','learn',
 'A searchable timeline of landmark judgments, plus a network view showing how doctrines connect.',
 'Students, and anyone who enjoys a good story about how a rule came to exist.',
 'Browse the timeline or switch to the network view. Every case links to the decisions it connects with.'],
['brief','Case briefs','Case Brief Trainer',
 'Practise the skill law students are actually graded on: pulling the issue, the holding and the ratio out of a judgment.','learn',
 'Ten landmark cases, each worked through in three steps with the reasoning explained at every stage.',
 'Law students, and anyone who wants to read a judgment properly.',
 'Read the facts, then answer three questions. The third \u2014 ratio versus obiter \u2014 is the one people get wrong.'],

['quiz','Quiz','Test Yourself',
 'Authored questions mixed with items generated live from the dataset, so the set changes every time you play.','learn',
 'A twelve-question quiz with an explanation attached to every answer.',
 'Anyone learning — getting one wrong is the useful part.',
 'There is no time limit and no score kept. Read the explanations; that is where the learning is.'],

['models','Models','Analytical Models',
 'Seven working tools for thinking through a legal problem — case strength, sentencing, damages, limitation deadlines, standards of proof, correlations and proportionality.','tools',
 'Interactive calculators and visualisers. You set the inputs; they show you what follows.',
 'Students, and anyone trying to understand how a legal question is structured.',
 'Move the sliders and watch what changes. These are ways of thinking, not predictions about any real case.'],

['areas','Practice','Practice Areas',
 'Twenty-nine areas of legal work read like a market — what the day actually looks like, and where each one leads.','careers',
 'Every major practice area scored on demand, automation exposure, entry difficulty and pay.',
 'Students choosing a direction, and career changers.',
 'Start with the scatter plot to see the landscape, then open any card for the full read.'],
['ai','AI risk','AI Exposure',
 'Legal work broken into tasks rather than job titles, because that is the level automation actually operates at.','careers',
 'Eighteen legal tasks scored on how much current models can do, and whether that grows or shrinks the work.',
 'Anyone weighing up whether law is a safe bet.',
 'Read the task list before the practice-area chart. The tasks tell you far more than the job titles do.'],
['qualify','Qualifying','Routes to Qualification',
 'How you actually become a lawyer, in twelve jurisdictions. The routes differ enormously in length, cost and what they gate on.','careers',
 'Step-by-step qualification routes with time and cost compared.',
 'Anyone considering law school, or curious how it works elsewhere.',
 'Pick a jurisdiction from the chips. The bar chart at the bottom compares total time to qualify.'],
['fit','Fit','Fit Finder',
 'Eight questions weighted against every practice area here. It tells you where your stated preferences point.','careers',
 'A short preference questionnaire producing a ranked shortlist of practice areas.',
 'Students with no idea which direction to take.',
 'Answer at least three questions. Treat the result as a prompt to investigate, never as an answer.'],

['method','Method','Method &amp; Sources',
 'What every number here means, how much weight it can carry, where it came from, and what this site cannot tell you.','about',
 'The provenance page — every metric labelled by confidence, plus limitations, data vintage and sources.',
 'Anyone about to rely on something they read here.',
 'Check the confidence label before citing any figure. Measured and modelled are very different things.'],
];

const SECBY=Object.fromEntries(SEC.map(x=>[x[0],x]));
const GROUP_PAGE={start:'index.html',situation:'situation.html',lab:'lab.html',world:'world.html',
  learn:'learn.html',tools:'tools.html',careers:'careers.html',about:'about.html'};
const PAGE=document.body.dataset.page||'start';
let curGroup=PAGE;

/* group nav = real links between pages */
$('#gnav').innerHTML=GROUPS.map(([g,l])=>
  `<a href="${GROUP_PAGE[g]}" data-g="${g}" class="${g===PAGE?'on':''}">${l}</a>`).join('');

/* only this page's sections are built */
const GAME=document.body.dataset.game||'';
const MYSEC=GAME?[]:SEC.filter(x=>x[4]===PAGE);
$('#main').innerHTML=MYSEC.map(([id,label,title,lede,grp,what,who,how])=>`
  <section class="view" id="v-${id}">
    <div class="shead reveal">
      <div class="kicker">${GROUPS.find(g=>g[0]===grp)[1]}</div>
      <h2>${title}</h2>
      <p class="lede">${lede}</p>
      <div class="right" id="rt-${id}"></div>
    </div>
    ${id==='start'?'':`<div class="intro reveal">
      <div><u>What this is</u><p>${what}</p></div>
      <div><u>Who it helps</u><p>${who}</p></div>
      <div><u>How to use it</u><p>${how}</p></div>
    </div>`}
    <div id="b-${id}"></div>
  </section>`).join('');

function sectionsIn(g){return SEC.filter(x=>x[4]===g)}
function paintSubnav(){
  $('#nav').innerHTML=MYSEC.map(x=>`<button data-v="${x[0]}">${x[1]}</button>`).join('');
  $('#subnav').classList.toggle('hide',MYSEC.length<2);
}
$('#nav').onclick=e=>{const b=e.target.closest('button');if(b)go(b.dataset.v)};

function go(v,params){
  const sec=SECBY[v]; if(!sec)return;
  if(sec[4]!==PAGE){                       // lives on another page — navigate
    const q=params?('?'+new URLSearchParams(params)):'';
    location.href=GROUP_PAGE[sec[4]]+q+'#'+v; return;
  }
  $$('.view').forEach(s=>s.classList.toggle('on',s.id==='v-'+v));
  $$('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
  if(v!=='progress'&&v!=='start')track('sec',v);   /* the front door is not a destination */
  pageview(v);
  if(v==='progress')renderProgress();
  try{ if(history.replaceState)history.replaceState(null,'','#'+v) }catch(e){}
  const t=$('#v-'+v); if(t)t.classList.remove('is-out');
  window.scrollTo({top:0,behavior:'instant'});
  revealScan();
}
paintSubnav();

/* clock */
setInterval(()=>{const d=new Date();
  $('#clock').innerHTML=d.toISOString().slice(11,19)+' <b>UTC</b> · '+d.toISOString().slice(0,10);},1000);

/* KPIs */
function renderKpis(){
  const rols=J.map(j=>j.rol);
  const abol=J.filter(j=>j.dp==='A'||j.dp==='P').length;
  $('#kpis').innerHTML=`
   <div class="kpi acc"><u>Jurisdictions tracked</u><b>${J.length}</b><span>Across 5 legal traditions</span></div>
   <div class="kpi"><u>Median rule of law</u><b>${fmt(median(rols))}</b><span>0–100 composite scale</span></div>
   <div class="kpi"><u>Spread, top to bottom</u><b>${Math.max(...rols)-Math.min(...rols)}</b><span>${J.find(j=>j.rol===Math.max(...rols)).name} to ${J.find(j=>j.rol===Math.min(...rols)).name}</span></div>
   <div class="kpi"><u>Capital punishment</u><b>${Math.round(abol/J.length*100)}%</b><span>Abolished in law or practice</span></div>
   <div class="kpi"><u>Median incarceration</u><b>${fmt(median(J.map(j=>j.inc)))}</b><span>Per 100,000 population</span></div>`;
  $('#heroMeta').textContent=`Global legal intelligence · ${J.length} jurisdictions · ${CASES.length} decisions · ${AREAS.length} practice areas · ${SEC.length} sections`;
}

/* ==================================================================
   01 · ATLAS
   ================================================================== */
const MAPMETRICS=[['rol','Rule of law'],['jud','Judicial independence'],['corr','Absence of corruption'],
  ['rights','Fundamental rights'],['crim','Criminal justice'],['inc','Incarceration'],['trad','Legal tradition']];
let mapMetric='rol';

function atlasRead(){
  const top=[...J].sort((a,b)=>b.rol-a.rol).slice(0,3).map(j=>j.name).join(', ');
  const bot=[...J].sort((a,b)=>a.rol-b.rol).slice(0,3).map(j=>j.name).join(', ');
  const cm=J.filter(j=>j.trad==='CM').length, cv=J.filter(j=>j.trad==='CV').length;
  const hiInc=[...J].sort((a,b)=>b.inc-a.inc)[0];
  const gap=J.filter(j=>j.rol>=70).length;
  return `<p><b>${gap} of ${J.length}</b> tracked jurisdictions score 70 or above on the composite rule-of-law scale — meaning
   courts that function, governments that lose cases, and rights that can be enforced without extraordinary effort.
   The remaining ${J.length-gap} cover the substantial majority of the world's population.</p>
  <p style="margin-top:10px">The strongest performers cluster tightly in Northern Europe (${esc(top)}); the weakest
   (${esc(bot)}) share a common pattern — courts that exist on paper, appointment processes controlled by the executive,
   and a judiciary that does not rule against the state. Legal tradition explains far less than institutional design:
   ${cv} civil law and ${cm} common law jurisdictions here span nearly the entire range.</p>
  <p style="margin-top:10px">Incarceration correlates only loosely with anything. ${esc(hiInc.name)} tops the table at
   ${fmt(hiInc.inc)} per 100,000 while ${esc([...J].sort((a,b)=>a.inc-b.inc)[0].name)} sits near the bottom — and both
   figures reflect sentencing policy far more than crime rates.</p>`;
}

function tileColor(j){
  if(mapMetric==='trad') return TRADC[j.trad];
  if(mapMetric==='inc'){ return heat(100-clamp(j.inc/6,0,100)); }
  return heat(j[mapMetric]);
}
function tileVal(j){
  if(mapMetric==='trad') return TRAD[j.trad];
  if(mapMetric==='inc') return fmt(j.inc)+' /100k';
  return j[mapMetric];
}

const REGIONS=[
 ['Americas',1,7,'#c88a4a'],['Europe',8,15,'#6d9cb5'],
 ['Africa & Middle East',8,17,'#5f9060'],['Asia & Pacific',16,24,'#a58bc4']];
function regionOf(j){
  if(j.x<=7)return 'Americas';
  if(j.x>=16)return 'Asia & Pacific';
  return j.y<=5?'Europe':'Africa & Middle East';
}
function renderAtlas(){
  const S=34,G=5,cols=24,rows=12,PAD=26;
  const W=cols*(S+G)+PAD*2, H=rows*(S+G)+PAD*2+18;
  const set=JL();
  const tiles=J.map((j,i)=>{
    const x=PAD+(j.x-1)*(S+G), y=PAD+(j.y-1)*(S+G);
    const dim=LENS&&j.trad!==LENS;
    const v=mapMetric==='trad'?TRAD[j.trad]:mapMetric==='inc'?fmt(j.inc)+' per 100k':j[mapMetric]+' / 100';
    return `<g class="tile ${dim?'dim':''}" data-iso="${j.iso}" style="animation-delay:${(i%40)*11}ms">
      <rect x="${x}" y="${y}" width="${S}" height="${S}" rx="9" fill="${tileColor(j)}"></rect>
      <rect class="tile-hl" x="${x}" y="${y}" width="${S}" height="${S}" rx="9"></rect>
      <text class="tilelbl" x="${x+S/2}" y="${y+S/2+3.4}">${j.iso}</text>
      <title>${esc(j.name)} — ${esc(String(v))}</title></g>`;
  }).join('');
  const bands=[['Americas',1,7],['Europe / Africa',8,15],['Asia & Pacific',16,24]].map(([n,a,b])=>{
    const x=PAD+(a-1)*(S+G), w=(b-a+1)*(S+G)-G;
    return `<g class="band"><line x1="${x}" y1="${PAD-11}" x2="${x+w}" y2="${PAD-11}"></line>
      <text x="${x+w/2}" y="${PAD-17}" class="bandlbl">${n}</text></g>`;
  }).join('');
  const legend = mapMetric==='trad'
    ? `<div class="legend">${Object.entries(TRAD).map(([k,v])=>
        `<span><i style="background:${TRADC[k]}"></i>${v} · ${J.filter(x=>x.trad===k).length}</span>`).join('')}</div>`
    : `<div class="scalewrap"><span>${mapMetric==='inc'?'fewest imprisoned':'weakest'}</span>
        <div class="scalebar">${[4,14,26,38,50,62,74,86,96].map(v=>
          `<div style="background:${heat(mapMetric==='inc'?v:v)}"></div>`).join('')}</div>
        <span>${mapMetric==='inc'?'most imprisoned':'strongest'}</span></div>`;
  const rank=[...set].sort((a,b)=>mapMetric==='trad'?a.name.localeCompare(b.name)
    :mapMetric==='inc'?b.inc-a.inc:b[mapMetric]-a[mapMetric]);

  $('#b-atlas').innerHTML=`
    <div class="howto reveal"><b>How to read this map</b>
      <p>Every jurisdiction gets one equal square, arranged roughly by geography. Size of country is deliberately
      ignored — a legal system that governs 300,000 people is drawn exactly as large as one governing a billion,
      because this is a map of legal systems, not of land or population. Colour is whichever measure you pick below.
      Hover a square to see the figure, click it for the full record.</p></div>

    <div class="panel mb2"><div class="panel-h"><h3>The legal world right now</h3>
      <span class="hint">Read straight off the dataset</span></div>
      <div class="panel-b" style="font-size:.94rem;color:var(--dim)">${atlasRead()}</div></div>

    <div class="ctl">
      <div class="seg" id="mapSeg">${MAPMETRICS.map(([k,l])=>
        `<button data-m="${k}" class="${k===mapMetric?'on':''}">${l}</button>`).join('')}</div>
    </div>

    <div class="mapbox mapwrap">
      <svg viewBox="0 0 ${W} ${H}" class="chart worldmap" style="min-width:720px">${bands}${tiles}</svg>
      <div class="maptip" id="maptip"></div>
      ${legend}
    </div>

    <div class="exh"><u>RANKED</u><h3>The same data as a list</h3>
      <span>because a map is bad at telling you the order</span></div>
    <div class="ranklist">${rank.slice(0,18).map((j,i)=>{
      const v=mapMetric==='trad'?TRAD[j.trad]:mapMetric==='inc'?fmt(j.inc):j[mapMetric];
      const w=mapMetric==='trad'?100:mapMetric==='inc'?clamp(j.inc/620*100,3,100):j[mapMetric];
      return `<button class="rankrow" data-iso="${j.iso}">
        <span class="rk">${String(i+1).padStart(2,'0')}</span>
        <span class="rkn">${esc(j.name)}</span>
        <span class="rkbar"><i style="width:${w}%;background:${tileColor(j)}"></i></span>
        <b>${v}</b></button>`}).join('')}</div>
    <p style="font-size:.82rem;color:var(--faint);margin-top:12px">Showing the top 18 of ${set.length}.
      The full sortable table lives under Jurisdictions.</p>`;

  $('#mapSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;mapMetric=b.dataset.m;renderAtlas()};
  const tip=$('#maptip');
  $$('#b-atlas .tile').forEach(g=>{
    g.onclick=()=>jurisReport(g.dataset.iso);
    g.onpointerenter=ev=>{ const j=byIso[g.dataset.iso]; if(!j||!tip)return;
      tip.innerHTML=`<b>${esc(j.name)}</b><span>${TRAD[j.trad]}</span>
        <div class="tiprow"><span>Rule of law</span><b style="color:${heat(j.rol)}">${j.rol}</b></div>
        <div class="tiprow"><span>Independence</span><b>${j.jud}</b></div>
        <div class="tiprow"><span>Imprisoned</span><b>${fmt(j.inc)}/100k</b></div>`;
      tip.classList.add('on'); };
    g.onpointermove=ev=>{ if(!tip)return; const r=$('.mapwrap').getBoundingClientRect();
      tip.style.left=(ev.clientX-r.left+16)+'px'; tip.style.top=(ev.clientY-r.top+14)+'px'; };
    g.onpointerleave=()=>{ if(tip)tip.classList.remove('on') };
  });
  $$('#b-atlas .rankrow').forEach(b=>b.onclick=()=>jurisReport(b.dataset.iso));
  $('#rt-atlas').textContent=MAPMETRICS.find(m=>m[0]===mapMetric)[1];
}

/* ---------- JURISDICTION REPORT MODAL ---------- */
function jurisReport(iso){
  const j=byIso[iso]; if(!j)return;
  const rank=[...J].sort((a,b)=>b.rol-a.rol).findIndex(x=>x.iso===iso)+1;
  const dims=DIMS.slice(1);
  const relCases=CASES.filter(c=>c.iso===iso);
  const court=COURTS.find(c=>c.iso===iso);
  openModal(`
   <div class="mbox-h">
     <div><div style="font-family:var(--mono);font-size:.66rem;color:var(--brass);letter-spacing:.18em">${j.iso} · RANK ${rank} OF ${J.length}</div>
     <h3 style="margin-top:5px">${esc(j.name)}</h3>
     <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
       <span class="tag b">${TRAD[j.trad]}</span>
       <span class="tag ${DPT[j.dp]}">${DP[j.dp]}</span>
       <span class="tag">${PROC[j.proc]}</span></div></div>
     <button class="x" onclick="closeModal()">✕</button>
   </div>
   <div class="mbox-b">
     <div class="spec">
       <div><u>Rule of law</u><b style="color:${heat(j.rol)}">${j.rol}<span style="color:var(--faint);font-size:.7rem">/100</span></b></div>
       <div><u>Incarceration</u><b>${fmt(j.inc)}<span style="color:var(--faint);font-size:.68rem"> /100k</span></b></div>
       <div><u>Trial mode</u><b style="font-size:.8rem">${JURY[j.jury]}</b></div>
       <div><u>Constitution</u><b>${j.cons?j.cons:'Uncodified'}</b></div>
       <div><u>Apex court</u><b style="font-size:.78rem">${esc(j.apex)}</b></div>
       ${j.hom!=null?`<div><u>Homicide rate</u><b>${fmt(j.hom)}<span style="color:var(--faint);font-size:.68rem"> /100k</span></b></div>`:''}
       ${j.pop!=null?`<div><u>Population</u><b>${(j.pop/1e6).toFixed(1)}M</b></div>`:''}
     </div>
     <h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:12px">DIMENSION BREAKDOWN</h4>
     <div class="dims" style="margin-bottom:22px">
       ${dims.map(([k,l])=>`<div class="dim"><u>${l}</u>
         <div class="bar"><i style="width:${j[k]}%;background:${heat(j[k])}"></i></div>
         <b style="color:${heat(j[k])}">${j[k]}</b></div>`).join('')}
     </div>
     ${court?`<div class="note" style="margin-bottom:18px"><b>${esc(court.n)}.</b> ${esc(court.seats)} members ·
       ${esc(court.term)} · ${esc(court.app)}. ${esc(court.note)}</div>`:''}
     ${relCases.length?`<h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:11px">LANDMARK DECISIONS FROM THIS JURISDICTION</h4>
       <div style="display:flex;flex-direction:column;gap:8px">${relCases.map(c=>
       `<div style="background:var(--bg2);border:1px solid var(--line);border-radius:7px;padding:11px 14px">
          <div style="font-family:var(--mono);font-size:.66rem;color:var(--brass)">${c.y<0?Math.abs(c.y)+' BC':c.y}</div>
          <div style="font-family:var(--serif);font-size:1rem;margin:2px 0 4px">${esc(c.t)}</div>
          <div style="font-size:.83rem;color:var(--dim)">${c.w}</div></div>`).join('')}</div>`:''}
     <div class="disclaim" style="margin:22px 0 0"><b>Read carefully.</b> Headline rule-of-law figures are calibrated to
       published indices; the seven-dimension decomposition is modelled to show profile shape and is not a published
       measurement. Nothing here is legal advice about any jurisdiction.</div>
   </div>`);
}
window.jurisReport=jurisReport; window.closeModal=closeModal;

/* ==================================================================
   02 · COMPOSITE INDEX
   ================================================================== */
let skyMetric='rol';
function renderIndex(){
  const g=DIMS.slice(1).map(([k,l])=>[l,Math.round(mean(J.map(j=>j[k])))]);
  const composite=Math.round(mean(g.map(x=>x[1])));
  const band=composite>=70?['Robust','var(--green)']:composite>=55?['Mixed','var(--amber)']
    :composite>=45?['Strained','var(--amber)']:['Fragile','var(--red)'];

  const sorted=[...JL()].sort((a,b)=>(skyMetric==='inc'?b.inc-a.inc:b[skyMetric]-a[skyMetric]));
  const W=1160,H=300,pad=34,bw=(W-pad*2)/Math.max(sorted.length,1);
  const maxV=skyMetric==='inc'?Math.max(...J.map(j=>j.inc)):100;
  const bars=sorted.map((j,i)=>{
    const v=skyMetric==='inc'?j.inc:j[skyMetric];
    const h=(v/maxV)*(H-pad*2);
    return `<g class="skybar" data-iso="${j.iso}"><title>${esc(j.name)}: ${fmt(v)}</title>
      <rect x="${pad+i*bw}" y="${H-pad-h}" width="${Math.max(bw-1.4,1)}" height="${h}"
        fill="${TRADC[j.trad]}" fill-opacity=".82" rx="1"></rect>
      ${sorted.length<=80?`<text x="${pad+i*bw+bw/2}" y="${H-pad+11}" class="axl" text-anchor="middle"
        transform="rotate(-90 ${pad+i*bw+bw/2} ${H-pad+11})" style="font-size:6.2px">${j.iso}</text>`:''}</g>`;
  }).join('');
  const gridlines=[0,25,50,75,100].map(p=>{
    const y=H-pad-(p/100)*(H-pad*2);
    return `<line class="gl" x1="${pad}" y1="${y}" x2="${W-pad}" y2="${y}"></line>
      <text class="axl" x="${pad-6}" y="${y+3}" text-anchor="end">${skyMetric==='inc'?Math.round(maxV*p/100):p}</text>`;
  }).join('');

  const q=[...J].sort((a,b)=>b.rol-a.rol);
  const quart=n=>q[Math.floor(q.length*n)];

  $('#b-index').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Seven separate measures of how well a legal system works, combined into one number and then broken apart again. The breakdown matters more than the headline: a country can score well because its courts are independent, or because it suppresses disorder efficiently. Those are very different things wearing the same number.</p></div>
    
   <div class="panel mb2"><div class="panel-h"><h3>Composite Legal Integrity Index</h3>
     <span class="hint">6 dimensions · unweighted mean across ${J.length} jurisdictions</span></div>
     <div class="panel-b">
       <div class="gauge-wrap">
         <div style="text-align:center;min-width:150px">
           <div class="gnum" style="color:${band[1]}">${composite}</div>
           <div class="tag ${composite>=70?'g':composite>=45?'a':'r'}" style="margin-top:11px">${band[0]}</div>
           <div style="font-family:var(--mono);font-size:.6rem;color:var(--faint);margin-top:9px;letter-spacing:.12em">GLOBAL MEAN</div>
         </div>
         <div class="dims">${g.map(([l,v])=>`<div class="dim"><u>${l}</u>
           <div class="bar"><i style="width:${v}%;background:${heat(v)}"></i></div>
           <b style="color:${heat(v)}">${v}</b></div>`).join('')}</div>
       </div>
       <div class="formula">CLII = mean(judicial independence, absence of corruption, fundamental rights, order &amp; security, civil justice, criminal justice)</div>
       <div class="note">The global mean is doing a lot of concealing. <b>Order and security</b> scores highest of any
         dimension — authoritarian systems often score very well on it, because suppressing disorder is the one thing
         they are organised to do. <b>Criminal justice</b> scores lowest almost everywhere, including in wealthy
         democracies. A high headline figure built on order rather than on rights is a materially different thing
         from the same figure built the other way round.</div>
     </div></div>

   <div class="grid g4 mb2">
     ${[['Upper quartile',quart(0.25),'75th percentile'],['Median',quart(0.5),'50th percentile'],
        ['Lower quartile',quart(0.75),'25th percentile'],['Floor',q[q.length-1],'Lowest tracked']]
       .map(([l,j,s])=>`<div class="panel"><div class="panel-b">
         <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--faint)">${l.toUpperCase()}</div>
         <div style="font-family:var(--serif);font-size:1.7rem;margin:7px 0 2px;color:${heat(j.rol)}">${j.rol}</div>
         <div style="font-size:.84rem;font-weight:600">${esc(j.name)}</div>
         <div style="font-size:.72rem;color:var(--faint);margin-top:3px">${s}</div></div></div>`).join('')}
   </div>

   <div class="panel"><div class="panel-h"><h3>The skyline</h3>
     <div class="seg" id="skySeg" style="margin-left:auto">${
       [['rol','Rule of law'],['jud','Independence'],['corr','Corruption'],['rights','Rights'],['crim','Criminal'],['inc','Incarceration']]
       .map(([k,l])=>`<button data-m="${k}" class="${k===skyMetric?'on':''}">${l}</button>`).join('')}</div></div>
     <div class="panel-b">
       <p style="font-size:.88rem;color:var(--dim);margin-bottom:16px">Every tracked jurisdiction, ranked.
         Bar colour is legal tradition — note how thoroughly the colours interleave. Which family a system belongs to
         tells you how it reasons, not how well it protects anyone.</p>
       <svg viewBox="0 0 ${W} ${H}" class="chart">${gridlines}${bars}</svg>
       <div class="legend">${Object.entries(TRAD).map(([k,v])=>
         `<span><i style="background:${TRADC[k]}"></i>${v}</span>`).join('')}</div>
     </div></div>`;

  $('#skySeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;skyMetric=b.dataset.m;renderIndex()};
  $$('#b-index .skybar').forEach(g=>g.onclick=()=>jurisReport(g.dataset.iso));
  $('#rt-index').textContent=`Composite ${composite}/100`;
}

/* ==================================================================
   03 · JURISDICTIONS
   ================================================================== */
let jFilter='', jSearch='', jSort='rol', jAsc=false, jView='cards';
function renderJuris(){
  let rows=J.filter(j=>(!jFilter||j.trad===jFilter)&&
    (!jSearch||(j.name+j.iso+j.apex+TRAD[j.trad]).toLowerCase().includes(jSearch)));
  rows.sort((a,b)=>{const x=a[jSort],y=b[jSort];
    const c=typeof x==='string'?String(x).localeCompare(String(y)):x-y; return jAsc?c:-c});

  const cards=rows.map(j=>`<div class="jcard" data-iso="${j.iso}" style="border-left:3px solid ${TRADC[j.trad]}">
    <div class="row1"><span class="iso">${j.iso}</span><h4>${esc(j.name)}</h4></div>
    <div class="sc" style="color:${heat(j.rol)}">${j.rol}<span style="font-size:.72rem;color:var(--faint);font-family:var(--mono)"> /100</span></div>
    <div class="bar"><i style="width:${j.rol}%;background:${heat(j.rol)}"></i></div>
    <div class="meta"><span class="tag" style="border-color:${TRADC[j.trad]};color:${TRADC[j.trad]}">${TRAD[j.trad]}</span>
      <span class="tag ${DPT[j.dp]}">${j.dp==='A'?'No death penalty':j.dp==='P'?'De facto abolished':j.dp==='X'?'Exceptional only':'Death penalty'}</span></div>
    <div class="meta"><span>${fmt(j.inc)}/100k incarcerated</span><span>·</span><span>${PROC[j.proc]}</span></div>
  </div>`).join('');

  const cols=[['name','Jurisdiction'],['trad','Tradition'],['rol','Rule of law'],['jud','Independence'],
    ['corr','Corruption'],['rights','Rights'],['crim','Criminal'],['inc','Prison /100k'],['dp','Death penalty'],['proc','Procedure']];
  const table=`<div class="tbl-wrap"><table><thead><tr>${cols.map(([k,l])=>
    `<th data-s="${k}" class="${jSort===k?'srt '+(jAsc?'asc':''):''}">${l}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(j=>`<tr data-iso="${j.iso}">
      <td class="nm">${esc(j.name)}</td>
      <td><span class="tag" style="border-color:${TRADC[j.trad]};color:${TRADC[j.trad]}">${TRAD[j.trad]}</span></td>
      <td class="num" style="color:${heat(j.rol)}">${j.rol}</td>
      <td class="num">${j.jud}</td><td class="num">${j.corr}</td><td class="num">${j.rights}</td>
      <td class="num">${j.crim}</td><td class="num">${fmt(j.inc)}</td>
      <td><span class="tag ${DPT[j.dp]}">${j.dp==='A'?'Abolished':j.dp==='P'?'De facto':j.dp==='X'?'Exceptional':'Retained'}</span></td>
      <td style="color:var(--dim)">${PROC[j.proc]}</td></tr>`).join('')}</tbody></table></div>`;

  $('#b-juris').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Every jurisdiction in the dataset, with the same seven measures. Use the cards to browse and the table to sort by any column. Click anything to open the full record. Nothing here is a judgement about a country — it is a description of how its legal system is built and how well it functions.</p></div>
    
    <div class="ctl">
      <input type="search" id="jq" placeholder="Search jurisdictions, courts, traditions…" value="${esc(jSearch)}">
      <div class="seg" id="jViewSeg">
        <button data-v="cards" class="${jView==='cards'?'on':''}">Cards</button>
        <button data-v="table" class="${jView==='table'?'on':''}">Table</button></div>
    </div>
    <div class="ctl" id="jChips">
      <button class="chip ${!jFilter?'on':''}" data-t="">All ${J.length}</button>
      ${Object.entries(TRAD).map(([k,v])=>`<button class="chip ${jFilter===k?'on':''}" data-t="${k}">${v} · ${J.filter(x=>x.trad===k).length}</button>`).join('')}
    </div>
    ${rows.length?(jView==='cards'?`<div class="grid g3">${cards}</div>`:table):'<div class="empty">NO MATCHES</div>'}`;

  $('#rt-juris').textContent=`${rows.length} shown`;
  const q=$('#jq'); q.oninput=()=>{jSearch=q.value.toLowerCase().trim();renderJuris();
    const n=$('#jq');n.focus();n.setSelectionRange(n.value.length,n.value.length)};
  $('#jChips').onclick=e=>{const c=e.target.closest('.chip');if(!c)return;jFilter=c.dataset.t;renderJuris()};
  $('#jViewSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;jView=b.dataset.v;renderJuris()};
  $$('#b-juris .jcard').forEach(c=>c.onclick=()=>jurisReport(c.dataset.iso));
  $$('#b-juris tbody tr').forEach(r=>r.onclick=()=>jurisReport(r.dataset.iso));
  $$('#b-juris th').forEach(t=>t.onclick=()=>{const k=t.dataset.s;
    if(jSort===k)jAsc=!jAsc; else{jSort=k;jAsc=(k==='name')}
    renderJuris()});
}

/* ==================================================================
   04 · COMPARE
   ================================================================== */
let cmpSel=['DNK','USA','DEU','IND','CHN','ZAF'], cmpMetric='rol';
function renderCompare(){
  const sel=cmpSel.map(i=>byIso[i]).filter(Boolean);
  const axes=DIMS.slice(1);
  const R=124,CX=170,CY=160,n=axes.length;
  const pt=(i,v)=>{const a=(Math.PI*2*i/n)-Math.PI/2;const r=R*(v/100);
    return [CX+Math.cos(a)*r,CY+Math.sin(a)*r]};
  const rings=[25,50,75,100].map(p=>
    `<polygon points="${axes.map((_,i)=>pt(i,p).join(',')).join(' ')}" fill="none" stroke="var(--line)" stroke-width="1"></polygon>`).join('');
  const spokes=axes.map((a,i)=>{const[x,y]=pt(i,100);
    const[lx,ly]=pt(i,124);
    return `<line x1="${CX}" y1="${CY}" x2="${x}" y2="${y}" stroke="var(--line)" stroke-width="1"></line>
      <text class="axl" x="${lx}" y="${ly}" text-anchor="${lx<CX-8?'end':lx>CX+8?'start':'middle'}"
        style="font-size:8px">${a[1].split(' ')[0]}</text>`}).join('');
  const CLR=['#c9a227','#4d9bf5','#3fb27f','#e05c4f','#9b7fe0','#e0a33a'];
  const polys=sel.map((j,k)=>`<polygon points="${axes.map(([m],i)=>pt(i,j[m]).join(',')).join(' ')}"
    fill="${CLR[k]}" fill-opacity=".1" stroke="${CLR[k]}" stroke-width="1.8"></polygon>`).join('');

  const maxV=cmpMetric==='inc'?Math.max(...sel.map(j=>j.inc),1):100;
  const bars=sel.map((j,k)=>{const v=cmpMetric==='inc'?j.inc:j[cmpMetric];
    return `<div class="dim"><u>${esc(j.name)}</u>
      <div class="bar"><i style="width:${(v/maxV*100)}%;background:${CLR[k]}"></i></div>
      <b style="color:${CLR[k]}">${fmt(v)}</b></div>`}).join('');

  const fields=[['rol','Rule of law'],['jud','Judicial independence'],['corr','Absence of corruption'],
    ['rights','Fundamental rights'],['order','Order & security'],['civil','Civil justice'],['crim','Criminal justice'],
    ['inc','Incarceration /100k']];

  $('#b-compare').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Pick up to six jurisdictions. The radar shows the shape of each system — a wide even shape protects across the board, a spiky one has a specific structural weakness. The bars below rank one measure at a time, and the table gives you the raw facts side by side.</p></div>
    
   <div class="panel mb2"><div class="panel-h"><h3>Selected jurisdictions</h3>
     <span class="hint">${sel.length}/6 · click to remove, choose below to add</span></div>
     <div class="panel-b">
       <div class="ctl" style="margin-bottom:14px">${sel.map((j,k)=>
         `<button class="chip on" data-rm="${j.iso}" style="background:${CLR[k]};border-color:${CLR[k]}">${esc(j.name)} ✕</button>`).join('')||'<span style="color:var(--faint);font-size:.85rem">None selected</span>'}</div>
       <select id="cmpAdd" style="width:100%;max-width:340px">
         <option value="">＋ Add a jurisdiction…</option>
         ${[...J].sort((a,b)=>a.name.localeCompare(b.name)).filter(j=>!cmpSel.includes(j.iso))
           .map(j=>`<option value="${j.iso}">${esc(j.name)} · ${j.rol}</option>`).join('')}
       </select>
     </div></div>

   <div class="grid g2 mb2">
     <div class="panel"><div class="panel-h"><h3>Profile radar</h3><span class="hint">Further out = stronger</span></div>
       <div class="panel-b" style="display:flex;justify-content:center">
         <svg viewBox="0 0 340 320" class="chart" style="max-width:340px">${rings}${spokes}${polys}</svg></div>
       <div class="panel-b" style="padding-top:0"><p style="font-size:.85rem;color:var(--dim)">
         A wide, even shape is a system that protects across the board. A spiky one has a specific structural problem —
         and the spike usually points at the dimension a government has found convenient to neglect.</p></div></div>

     <div class="panel"><div class="panel-h"><h3>One dimension at a time</h3>
       <div class="seg" style="margin-left:auto" id="cmpSeg">${fields.slice(0,4).concat([fields[7]]).map(([k,l])=>
         `<button data-m="${k}" class="${k===cmpMetric?'on':''}">${l.split(' ')[0]}</button>`).join('')}</div></div>
       <div class="panel-b"><div class="dims">${bars||'<span style="color:var(--faint)">Select jurisdictions to compare</span>'}</div></div></div>
   </div>

   <div class="tbl-wrap"><table><thead><tr><th>Measure</th>${sel.map(j=>`<th>${esc(j.name)}</th>`).join('')}</tr></thead>
     <tbody>${fields.map(([k,l])=>`<tr><td class="nm">${l}</td>${sel.map(j=>
       `<td class="num" style="color:${k==='inc'?'var(--ink)':heat(j[k])}">${fmt(j[k])}</td>`).join('')}</tr>`).join('')}
     <tr><td class="nm">Legal tradition</td>${sel.map(j=>`<td style="color:${TRADC[j.trad]}">${TRAD[j.trad]}</td>`).join('')}</tr>
     <tr><td class="nm">Trial mode</td>${sel.map(j=>`<td style="color:var(--dim)">${JURY[j.jury]}</td>`).join('')}</tr>
     <tr><td class="nm">Procedure</td>${sel.map(j=>`<td style="color:var(--dim)">${PROC[j.proc]}</td>`).join('')}</tr>
     <tr><td class="nm">Death penalty</td>${sel.map(j=>`<td><span class="tag ${DPT[j.dp]}">${DP[j.dp]}</span></td>`).join('')}</tr>
     <tr><td class="nm">Constitution</td>${sel.map(j=>`<td class="num">${j.cons||'Uncodified'}</td>`).join('')}</tr>
     <tr><td class="nm">Apex court</td>${sel.map(j=>`<td style="color:var(--dim)">${esc(j.apex)}</td>`).join('')}</tr>
     </tbody></table></div>`;

  $('#rt-compare').textContent=`${sel.length} of 6`;
  $$('#b-compare [data-rm]').forEach(b=>b.onclick=()=>{cmpSel=cmpSel.filter(i=>i!==b.dataset.rm);renderCompare()});
  $('#cmpAdd').onchange=e=>{if(e.target.value&&cmpSel.length<6){cmpSel.push(e.target.value);renderCompare()}
    else if(cmpSel.length>=6)toast('Maximum of six jurisdictions')};
  $('#cmpSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;cmpMetric=b.dataset.m;renderCompare()};
}

/* ==================================================================
   05 · ANALYTICAL MODELS
   ================================================================== */
const MTABS=[['strength','Case strength'],['sentence','Sentencing philosophy'],['damages','Damages'],
  ['limit','Limitation clock'],['burden','Burden of proof'],['corr','Correlations'],['prop','Proportionality']];
let mTab='strength';
const M={doc:65,wit:55,proc:70,lim:'ok',asym:0,forum:'GBR',
  retr:50,deter:50,rehab:50,incap:50,sev:5,
  spec:12000,fut:8000,gen:15000,mitig:0,contrib:0,irate:4,iyears:2,
  claim:'pi',edate:new Date(Date.now()-86400000*400).toISOString().slice(0,10),
  conf:50, aim:70,suit:70,nec:50,bal:60};

function slider(key,label,min,max,step,suffix){
  return `<div style="margin-bottom:15px"><div class="slabel"><span>${label}</span><b data-lbl="${key}">${M[key]}${suffix||''}</b></div>
    <input type="range" data-k="${key}" min="${min}" max="${max}" step="${step}" value="${M[key]}"></div>`;
}
function bindSliders(root){
  $$(root+' input[type=range]').forEach(r=>{
    r.oninput=()=>{ M[r.dataset.k]=+r.value;
      liveRefresh(()=>({strength:mStrength,sentence:mSentence,damages:mDamages,limit:mLimit,
        burden:mBurden,corr:mCorr,prop:mProp}[mTab]()), '#b-models'); };
    r.onchange=()=>{ M[r.dataset.k]=+r.value; };
  });
}

/* ---- 1. CASE STRENGTH ---- */
function mStrength(){
  const f=byIso[M.forum];
  const nz=v=>v/100-0.5;
  const limPen={ok:0,border:1.3,expired:4.2}[M.lim];
  const z=0.15 + 3.0*nz(M.doc) + 2.0*nz(M.wit) + 2.2*nz(M.proc) + 1.2*nz(f.civil) - limPen - 1.4*(M.asym/100);
  const p=1/(1+Math.exp(-z));
  const pct=Math.round(p*100);
  const band=pct>=70?['Strong','var(--green)']:pct>=45?['Arguable','var(--amber)']:pct>=25?['Weak','var(--amber)']:['Very weak','var(--red)'];
  const sig=[['Documentary evidence',3.0*nz(M.doc)],['Witness support',2.0*nz(M.wit)],
    ['Procedural compliance',2.2*nz(M.proc)],['Forum civil-justice quality',1.2*nz(f.civil)],
    ['Limitation position',-limPen],['Resource asymmetry',-1.4*(M.asym/100)]];
  const maxAbs=Math.max(...sig.map(s=>Math.abs(s[1])),0.6);
  return `<div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>Inputs</h3></div><div class="panel-b">
      ${slider('doc','Documentary evidence available',0,100,1,'%')}
      ${slider('wit','Witness support',0,100,1,'%')}
      ${slider('proc','Procedural steps correctly taken',0,100,1,'%')}
      ${slider('asym','Resource asymmetry against you',-50,50,1,'')}
      <div style="margin-bottom:15px"><div class="slabel" style="margin-bottom:7px"><span>Limitation position</span></div>
        <div class="seg" id="limSeg">
          <button data-l="ok" class="${M.lim==='ok'?'on':''}">Well within time</button>
          <button data-l="border" class="${M.lim==='border'?'on':''}">Borderline</button>
          <button data-l="expired" class="${M.lim==='expired'?'on':''}">Likely expired</button></div></div>
      <div><div class="slabel" style="margin-bottom:7px"><span>Forum</span></div>
        <select id="forumSel" style="width:100%">${[...J].sort((a,b)=>a.name.localeCompare(b.name))
          .map(j=>`<option value="${j.iso}" ${j.iso===M.forum?'selected':''}>${esc(j.name)} · civil justice ${j.civil}</option>`).join('')}</select></div>
    </div></div>
    <div class="panel" data-live="out"><div class="panel-h"><h3>Structured estimate</h3><span class="hint">Not a prediction</span></div>
      <div class="panel-b">
        <div style="text-align:center;padding:8px 0 18px">
          <div class="gnum" style="color:${band[1]}">${pct}<span style="font-size:1.5rem">%</span></div>
          <div class="tag ${pct>=70?'g':pct>=25?'a':'r'}" style="margin-top:10px">${band[0]}</div>
        </div>
        <div class="dims">${sig.map(([l,v])=>`<div class="dim"><u>${l}</u>
          <div class="bar" style="position:relative;background:var(--bg2)">
            <i style="width:${Math.abs(v)/maxAbs*50}%;background:${v>=0?'var(--green)':'var(--red)'};
              margin-left:${v>=0?'50%':(50-Math.abs(v)/maxAbs*50)+'%'}"></i></div>
          <b style="color:${v>=0?'var(--green)':'var(--red)'}">${v>=0?'+':''}${v.toFixed(1)}</b></div>`).join('')}</div>
        <div class="formula">P = 1 / (1 + e^−z) · z = 0.15 + 3.0·docs + 2.0·witnesses + 2.2·procedure + 1.2·forum − limitation − 1.4·asymmetry</div>
        <div class="note"><b>What this is.</b> A structured way of asking how many things are going your way, not a
          forecast of any actual case. Real outcomes turn on facts, law and advocacy no model sees. Note how heavily
          <b>limitation</b> dominates: a claim out of time collapses regardless of how strong everything else is —
          which is exactly how the doctrine behaves in practice.</div>
      </div></div></div>`;
}

/* ---- 2. SENTENCING PHILOSOPHY ---- */
function mSentence(){
  const w=(M.retr*0.9+M.deter*0.7+M.incap*1.4-M.rehab*0.8)/100;
  const months=clamp(Math.pow(M.sev,1.75)*w*2.6,0,600);
  const implied=clamp(28+months*1.55,15,700);
  const near=[...J].sort((a,b)=>Math.abs(a.inc-implied)-Math.abs(b.inc-implied)).slice(0,4);
  const yrs=Math.floor(months/12), mo=Math.round(months%12);
  const philosophy = M.rehab>Math.max(M.retr,M.deter,M.incap)?'Rehabilitative'
    : M.incap>=Math.max(M.retr,M.deter,M.rehab)?'Incapacitative'
    : M.deter>=Math.max(M.retr,M.rehab)?'Deterrent':'Retributive';
  return `<div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>Sentencing aims</h3><span class="hint">Weight each rationale</span></div>
      <div class="panel-b">
        ${slider('sev','Offence seriousness',1,10,1,'/10')}
        <div style="height:1px;background:var(--line);margin:18px 0"></div>
        ${slider('retr','Retribution — deserved punishment',0,100,1,'')}
        ${slider('deter','Deterrence — discouraging others',0,100,1,'')}
        ${slider('incap','Incapacitation — removing risk',0,100,1,'')}
        ${slider('rehab','Rehabilitation — reducing reoffending',0,100,1,'')}
        <div class="note" style="margin-top:8px">These four rationales are the standard account of why states punish.
          They pull in opposite directions: incapacitation wants long sentences, rehabilitation wants short ones with
          heavy support. Every sentencing system in the world is an unstable compromise between them.</div>
      </div></div>
    <div class="panel" data-live="out"><div class="panel-h"><h3>Modelled outcome</h3></div><div class="panel-b">
      <div style="text-align:center;padding:6px 0 16px">
        <div class="gnum">${yrs?yrs+'y ':''}${mo}m</div>
        <div class="tag b" style="margin-top:10px">${philosophy} profile</div>
        <div style="font-family:var(--mono);font-size:.6rem;color:var(--faint);margin-top:9px;letter-spacing:.12em">INDICATIVE CUSTODIAL TERM</div>
      </div>
      <div class="formula">months = seriousness^1.75 × (0.9·retribution + 0.7·deterrence + 1.4·incapacitation − 0.8·rehabilitation)/100 × 2.6</div>
      <h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin:22px 0 11px">
        SYSTEMS THAT SENTENCE LIKE THIS</h4>
      <p style="font-size:.85rem;color:var(--dim);margin-bottom:14px">Scaling your weights to a national imprisonment
        rate gives roughly <b style="color:var(--brass)">${Math.round(implied)} per 100,000</b>. The closest real systems:</p>
      <div class="dims">${near.map(j=>`<div class="dim"><u>${esc(j.name)}</u>
        <div class="bar"><i style="width:${clamp(j.inc/700*100,2,100)}%;background:${TRADC[j.trad]}"></i></div>
        <b>${fmt(j.inc)}</b></div>`).join('')}</div>
      <div class="note">This is a model of <b>philosophy</b>, not a prediction of any sentence. It shows how a set of
        stated aims translates into a rate of imprisonment — which is how national differences of tenfold and more
        actually arise between countries with near-identical crime rates.</div>
    </div></div></div>`;
}

/* ---- 3. DAMAGES ---- */
function mDamages(){
  const base=M.spec+M.fut+M.gen;
  const afterMit=base*(1-M.mitig/100);
  const afterContrib=afterMit*(1-M.contrib/100);
  const interest=M.spec*(M.irate/100)*M.iyears;
  const total=afterContrib+interest;
  const rows=[['Special damages — quantified past loss',M.spec,'Receipts, wage slips, invoices. Proven to the penny.'],
    ['Future loss',M.fut,'Projected earnings, care, treatment. Requires expert evidence.'],
    ['General damages — pain, suffering, loss of amenity',M.gen,'Assessed by reference to guideline brackets, not receipts.'],
    ['Less: failure to mitigate',-(base-afterMit),'Losses you could reasonably have avoided are not recoverable.'],
    ['Less: contributory negligence',-(afterMit-afterContrib),'Your own share of responsibility, deducted proportionately.'],
    ['Plus: interest on special damages',interest,'Runs from loss to judgment in most systems.']];
  return `<div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>Heads of loss</h3></div><div class="panel-b">
      ${slider('spec','Special damages (past, quantified)',0,200000,500,'')}
      ${slider('fut','Future loss',0,500000,1000,'')}
      ${slider('gen','General damages (pain and suffering)',0,300000,1000,'')}
      <div style="height:1px;background:var(--line);margin:18px 0"></div>
      ${slider('mitig','Failure to mitigate',0,60,1,'%')}
      ${slider('contrib','Contributory negligence',0,90,1,'%')}
      ${slider('irate','Interest rate',0,15,0.5,'%')}
      ${slider('iyears','Years to judgment',0,10,0.5,'y')}
    </div></div>
    <div class="panel" data-live="out"><div class="panel-h"><h3>Assessment</h3><span class="hint">Currency-neutral units</span></div>
      <div class="panel-b">
        <div style="text-align:center;padding:6px 0 18px">
          <div class="gnum" style="color:var(--brass)">${Math.round(total).toLocaleString()}</div>
          <div style="font-family:var(--mono);font-size:.6rem;color:var(--faint);margin-top:10px;letter-spacing:.12em">TOTAL AWARD</div>
        </div>
        <div class="tbl-wrap" style="border:0"><table style="min-width:0">
          <tbody>${rows.map(([l,v,note])=>`<tr style="cursor:default">
            <td style="white-space:normal"><b style="font-size:.85rem">${l}</b>
              <div style="font-size:.75rem;color:var(--faint);margin-top:2px;white-space:normal">${note}</div></td>
            <td class="num" style="color:${v<0?'var(--red)':'var(--ink)'};vertical-align:top">${v<0?'−':''}${Math.abs(Math.round(v)).toLocaleString()}</td>
          </tr>`).join('')}
          <tr style="cursor:default"><td><b>Total</b></td><td class="num" style="color:var(--brass);font-weight:700">${Math.round(total).toLocaleString()}</td></tr>
          </tbody></table></div>
        <div class="note"><b>Why the deductions matter more than the headline.</b> A claimant with a nominally large
          claim who failed to mitigate and bears 40% contributory responsibility can recover less than half of it.
          Both doctrines exist to stop damages becoming a windfall — compensation restores a position, it does not
          improve on one.</div>
      </div></div></div>`;
}

/* ---- 4. LIMITATION CLOCK ---- */
const CLAIMS={
  pi:['Personal injury',[['England & Wales',3,'From injury or date of knowledge'],['France',10,'From consolidation of damage'],
    ['Germany',3,'From end of the year in which the claim arose'],['United States (typical state)',2,'Varies 1–6 years by state'],
    ['Japan',5,'From knowledge of damage and tortfeasor']]],
  contract:['Simple contract',[['England & Wales',6,'From breach, not from discovery'],['France',5,'General civil prescription'],
    ['Germany',3,'From end of the year the claim arose'],['United States (typical state)',4,'Written contracts, varies widely'],
    ['India',3,'From breach']]],
  defam:['Defamation',[['England & Wales',1,'From publication'],['France',0.25,'Three months from publication'],
    ['Germany',3,'General tort period'],['United States (typical state)',1,'Single publication rule'],['Australia',1,'Extendable to 3 in some cases']]],
  employ:['Employment claim',[['England & Wales',0.25,'Three months less one day — one of the shortest anywhere'],
    ['France',1,'Two years for contract performance disputes'],['Germany',0.06,'Three weeks to challenge a dismissal'],
    ['United States (EEOC)',0.75,'180 or 300 days to file a charge'],['South Africa',0.08,'30 days to refer an unfair dismissal']]],
  jr:['Judicial review',[['England & Wales',0.25,'Promptly and in any event within 3 months'],
    ['France',0.17,'Two months from notification'],['Germany',0.08,'One month from notification'],
    ['India',0,'No fixed period, but delay defeats the claim'],['Canada',0.08,'30 days for federal decisions']]],
  land:['Recovery of land',[['England & Wales',12,'Adverse possession rules differ for registered land'],
    ['France',30,'Long prescription for immovables'],['Germany',30,'Ordinary property claims'],
    ['United States (typical state)',10,'Adverse possession, varies 5–20 years'],['Scotland',10,'Positive prescription']]]
};
function mLimit(){
  const [label,rows]=CLAIMS[M.claim];
  const start=new Date(M.edate+'T00:00:00Z');
  const now=new Date();
  const out=rows.map(([j,yrs,note])=>{
    if(!yrs) return [j,'No fixed period',note,'a',null];
    const d=new Date(start); d.setUTCDate(d.getUTCDate()+Math.round(yrs*365.25));
    const daysLeft=Math.round((d-now)/86400000);
    const status=daysLeft<0?'r':daysLeft<60?'a':'g';
    return [j, d.toISOString().slice(0,10), note, status, daysLeft];
  });
  return `<div class="grid g2 mb2">
    <div class="panel"><div class="panel-h"><h3>Parameters</h3></div><div class="panel-b">
      <div style="margin-bottom:16px"><div class="slabel" style="margin-bottom:8px"><span>Type of claim</span></div>
        <select id="claimSel" style="width:100%">${Object.entries(CLAIMS).map(([k,v])=>
          `<option value="${k}" ${k===M.claim?'selected':''}>${v[0]}</option>`).join('')}</select></div>
      <div><div class="slabel" style="margin-bottom:8px"><span>Date the cause of action arose</span></div>
        <input type="text" id="edate" value="${M.edate}" placeholder="YYYY-MM-DD" style="width:100%"></div>
      <div class="note" style="margin-top:18px"><b>The clock is the first thing a defendant checks.</b> Limitation is
        not a technicality — it is a complete defence. It exists because evidence decays, memories fail, and people
        are entitled to eventual certainty that they will not be sued. Miss it and the merits never get heard.</div>
    </div></div>
    <div class="panel" data-live="out"><div class="panel-h"><h3>Deadlines by jurisdiction</h3><span class="hint">${label}</span></div>
      <div class="panel-b"><div class="tbl-wrap" style="border:0"><table style="min-width:0"><tbody>
        ${out.map(([j,d,note,st,dl])=>`<tr style="cursor:default">
          <td style="white-space:normal"><b style="font-size:.85rem">${j}</b>
            <div style="font-size:.74rem;color:var(--faint);white-space:normal;margin-top:2px">${note}</div></td>
          <td style="text-align:right"><span class="tag ${st}">${d}</span>
            ${dl!=null?`<div style="font-size:.7rem;color:var(--faint);margin-top:4px;font-family:var(--mono)">
              ${dl<0?Math.abs(dl)+' days past':dl+' days left'}</div>`:''}</td></tr>`).join('')}
      </tbody></table></div></div></div></div>
    <div class="disclaim"><b>Indicative only.</b> Limitation rules carry extensive exceptions — minority, disability,
      concealment, fraud, continuing breach, and date-of-knowledge provisions can all move the date substantially.
      Never rely on a calculated date without checking the governing statute and the case law on when time started.</div>`;
}

/* ---- 5. BURDEN OF PROOF ---- */
function mBurden(){
  const c=M.conf;
  const stds=[['Reasonable suspicion',20,'Enough to stop and briefly detain. Deliberately low.','Criminal procedure'],
    ['Probable cause',40,'Enough to arrest or obtain a warrant.','Criminal procedure'],
    ['Balance of probabilities',50,'More likely than not. The standard in virtually all civil cases.','Civil'],
    ['Clear and convincing evidence',75,'An intermediate standard used for fraud, some family and some civil-commitment matters.','Civil (heightened)'],
    ['Beyond reasonable doubt',95,'The criminal standard. Not certainty — but no reasonable alternative explanation.','Criminal']];
  const met=stds.filter(s=>c>=s[1]);
  const W=760,H=90;
  return `<div class="panel mb2"><div class="panel-h"><h3>Where your confidence sits</h3>
    <span class="hint">Standards are not probabilities — but this is how they are taught</span></div>
    <div class="panel-b">
      ${slider('conf','Strength of the evidence, as you assess it',0,100,1,'%')}
      <div data-live="out"><svg viewBox="0 0 ${W} ${H}" class="chart" style="margin-top:10px">
        <rect x="0" y="30" width="${W}" height="16" rx="8" fill="var(--bg2)" stroke="var(--line)"></rect>
        <rect x="0" y="30" width="${W*c/100}" height="16" rx="8" fill="${heat(c)}" fill-opacity=".55"></rect>
        ${stds.map(([l,t])=>`<line x1="${W*t/100}" y1="22" x2="${W*t/100}" y2="54"
          stroke="${c>=t?'var(--green)':'var(--faint)'}" stroke-width="1.6"></line>
          <text class="axl" x="${W*t/100}" y="70" text-anchor="middle"
            fill="${c>=t?'var(--green)':'var(--faint)'}" style="font-size:7.5px">${t}%</text>`).join('')}
        <circle cx="${W*c/100}" cy="38" r="7" fill="var(--brass)" stroke="var(--bg)" stroke-width="2"></circle>
      </svg>
      <div style="display:flex;flex-direction:column;gap:9px;margin-top:18px">
        ${stds.map(([l,t,d,cat])=>`<div style="display:flex;gap:13px;align-items:flex-start;padding:11px 14px;
          background:${c>=t?'rgba(63,178,127,.07)':'var(--bg2)'};border:1px solid ${c>=t?'#2c6b52':'var(--line)'};border-radius:8px">
          <span class="tag ${c>=t?'g':''}" style="flex-shrink:0;margin-top:1px">${c>=t?'MET':'NOT MET'}</span>
          <div><b style="font-size:.9rem">${l}</b> <span class="tag" style="margin-left:6px">${cat}</span>
            <div style="font-size:.83rem;color:var(--dim);margin-top:3px">${d}</div></div></div>`).join('')}
      </div>
      <div class="note"><b>An important caveat.</b> Courts consistently refuse to reduce these standards to numbers —
        judges are usually instructed <i>not</i> to quantify reasonable doubt, because doing so invites jurors to
        treat conviction as arithmetic. The percentages here are a teaching device only. What the ordering does show
        correctly is that the same evidence can comfortably win a civil case and fall far short in a criminal one.</div>
      </div>
    </div></div>`;
}

/* ---- 6. CORRELATIONS ---- */
function mCorr(){
  const inds=[['rol','Rule of law'],['jud','Independence'],['corr','Anti-corruption'],['rights','Rights'],
    ['order','Order'],['civil','Civil justice'],['crim','Criminal justice'],['inc','Incarceration']];
  const vals=inds.map(([k])=>J.map(j=>j[k]));
  const cell=45;
  const rows=inds.map(([ka,la],i)=>inds.map(([kb,lb],k)=>{
    const r=pearson(vals[i],vals[k]);
    const col=r>0?`rgba(63,178,127,${Math.abs(r)*0.75})`:`rgba(224,92,79,${Math.abs(r)*0.75})`;
    return `<td style="background:${col};text-align:center;font-family:var(--mono);font-size:.72rem;
      color:${Math.abs(r)>0.55?'#fff':'var(--dim)'};cursor:default;padding:9px 6px" title="${la} vs ${lb}: r = ${r.toFixed(2)}">${r.toFixed(2)}</td>`;
  }).join('')).map((tds,i)=>`<tr style="cursor:default"><td class="nm" style="font-size:.78rem">${inds[i][1]}</td>${tds}</tr>`).join('');

  const rIncRol=pearson(J.map(j=>j.inc),J.map(j=>j.rol));
  const rOrdRights=pearson(J.map(j=>j.order),J.map(j=>j.rights));
  const rJudCorr=pearson(J.map(j=>j.jud),J.map(j=>j.corr));

  return `<div class="panel mb2"><div class="panel-h"><h3>Correlation matrix</h3>
    <span class="hint">Pearson r across all ${J.length} jurisdictions</span></div>
    <div class="panel-b">
      <div class="tbl-wrap" style="border:0"><table style="min-width:640px"><thead><tr><th></th>
        ${inds.map(([k,l])=>`<th style="text-align:center;cursor:default">${l}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody></table></div>
      <div class="formula">r = Σ(x−x̄)(y−ȳ) / √(Σ(x−x̄)² · Σ(y−ȳ)²)</div>
      <div class="grid g3" style="margin-top:20px">
        <div style="background:var(--bg2);border:1px solid var(--line);border-radius:8px;padding:15px">
          <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.12em;color:var(--faint)">INDEPENDENCE ↔ ANTI-CORRUPTION</div>
          <div style="font-family:var(--serif);font-size:1.8rem;color:var(--green);margin:6px 0">${rJudCorr.toFixed(2)}</div>
          <div style="font-size:.82rem;color:var(--dim)">The tightest relationship in the dataset. Courts that cannot be
            leaned on are the mechanism by which corruption gets punished — the two rise and fall together.</div></div>
        <div style="background:var(--bg2);border:1px solid var(--line);border-radius:8px;padding:15px">
          <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.12em;color:var(--faint)">ORDER ↔ RIGHTS</div>
          <div style="font-family:var(--serif);font-size:1.8rem;color:${rOrdRights>0.3?'var(--green)':'var(--amber)'};margin:6px 0">${rOrdRights.toFixed(2)}</div>
          <div style="font-size:.82rem;color:var(--dim)">Weaker than people expect. Several high-order jurisdictions
            score poorly on rights — safety and liberty are not the same variable, and states routinely trade one for the other.</div></div>
        <div style="background:var(--bg2);border:1px solid var(--line);border-radius:8px;padding:15px">
          <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.12em;color:var(--faint)">INCARCERATION ↔ RULE OF LAW</div>
          <div style="font-family:var(--serif);font-size:1.8rem;color:var(--amber);margin:6px 0">${rIncRol.toFixed(2)}</div>
          <div style="font-size:.82rem;color:var(--dim)">Close to nothing. How many people a country locks up tells you
            almost nothing about whether its legal system works — imprisonment is a policy choice, not a diagnostic.</div></div>
      </div>
      <div class="note"><b>Correlation is not causation, and this dataset is small.</b> With ${J.length} observations
        and modelled sub-dimensions, treat these as a way of interrogating the shape of the data rather than as
        findings. The most useful thing here is the near-zero cells — the relationships people assume exist and do not.</div>
    </div></div>`;
}

/* ---- 7. PROPORTIONALITY ---- */
function mProp(){
  const stages=[['aim','Legitimate aim','Does the measure pursue an aim the law recognises as legitimate — public safety, health, the rights of others?'],
    ['suit','Suitability','Is the measure actually capable of achieving that aim? A measure that does not work cannot be justified by it.'],
    ['nec','Necessity','Is there a less restrictive measure that would achieve the aim equally well? If so, this one fails.'],
    ['bal','Fair balance','Even if necessary, is the burden on the individual disproportionate to the benefit gained?']];
  const passes=stages.map(([k])=>M[k]>=50);
  const failIdx=passes.findIndex(p=>!p);
  const verdict=failIdx===-1?['Proportionate','var(--green)','g']:['Fails at stage '+(failIdx+1),'var(--red)','r'];
  return `<div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>The four-stage test</h3>
      <span class="hint">Applied by courts on every continent</span></div><div class="panel-b">
      ${stages.map(([k,l,d],i)=>`
        <div style="margin-bottom:19px;padding-bottom:19px;${i<3?'border-bottom:1px solid var(--line)':''}">
          <div style="display:flex;gap:10px;align-items:center;margin-bottom:6px">
            <span class="tag ${M[k]>=50?'g':'r'}">${i+1}</span><b style="font-size:.9rem">${l}</b>
            ${failIdx!==-1&&i>failIdx?'<span class="tag" style="margin-left:auto">NOT REACHED</span>':''}</div>
          <div style="font-size:.82rem;color:var(--dim);margin-bottom:10px">${d}</div>
          ${slider(k,'Strength of the case at this stage',0,100,1,'%')}
        </div>`).join('')}
    </div></div>
    <div class="panel" data-live="out"><div class="panel-h"><h3>Verdict</h3></div><div class="panel-b">
      <div style="text-align:center;padding:10px 0 20px">
        <div style="font-family:var(--serif);font-size:2.1rem;color:${verdict[1]}">${verdict[0]}</div>
        <div class="tag ${verdict[2]}" style="margin-top:12px">${failIdx===-1?'MEASURE UPHELD':'MEASURE STRUCK DOWN'}</div>
      </div>
      <div class="dims">${stages.map(([k,l],i)=>`<div class="dim"><u>${i+1}. ${l}</u>
        <div class="bar"><i style="width:${M[k]}%;background:${M[k]>=50?'var(--green)':'var(--red)'}"></i></div>
        <b style="color:${M[k]>=50?'var(--green)':'var(--red)'}">${M[k]}</b></div>`).join('')}</div>
      <div class="note" style="margin-top:20px"><b>Why the order matters.</b> The stages are sequential — a measure
        that fails necessity is struck down without the court ever reaching fair balance. In practice
        <b>necessity</b> does most of the work: governments rarely pursue illegitimate aims openly, but they very
        often reach for a heavier instrument than the job requires. This structure is used, with local variations,
        by the German Constitutional Court, the Strasbourg court, the Canadian Supreme Court (as the Oakes test) and
        the South African Constitutional Court.</div>
    </div></div></div>`;
}

function renderModels(){
  const body={strength:mStrength,sentence:mSentence,damages:mDamages,limit:mLimit,
    burden:mBurden,corr:mCorr,prop:mProp}[mTab]();
  $('#b-models').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Seven calculators you drive yourself. None of them predicts anything. They exist so you can change an assumption and watch what it does — which is how you learn that a limitation deadline outweighs the strength of your evidence, or that mitigation quietly halves a damages claim.</p></div>
    <div class="ctl"><div class="seg" id="mSeg">${MTABS.map(([k,l])=>
    `<button data-t="${k}" class="${k===mTab?'on':''}">${l}</button>`).join('')}</div></div>${body}`;
  $('#rt-models').textContent=MTABS.find(t=>t[0]===mTab)[1];
  $('#mSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;mTab=b.dataset.t;renderModels()};
  bindSliders('#b-models');
  const ls=$('#limSeg'); if(ls) ls.onclick=e=>{const b=e.target.closest('button');if(!b)return;M.lim=b.dataset.l;renderModels()};
  const fs=$('#forumSel'); if(fs) fs.onchange=e=>{M.forum=e.target.value;renderModels()};
  const cs=$('#claimSel'); if(cs) cs.onchange=e=>{M.claim=e.target.value;renderModels()};
  const ed=$('#edate'); if(ed) ed.onchange=e=>{if(/^\d{4}-\d{2}-\d{2}$/.test(e.target.value)){M.edate=e.target.value;renderModels()}else toast('Use format YYYY-MM-DD')};
}

/* ==================================================================
   06 · COURTS
   ================================================================== */
let courtSel='scotus';
function renderCourts(){
  const c=COURTS.find(x=>x.id===courtSel);
  const W=880,H=230,pad=40;
  const n=c.hist.length, mx=Math.max(...c.hist), mn=Math.min(...c.hist);
  const px=i=>pad+i*(W-pad*2)/(n-1);
  const py=v=>H-pad-((v-mn)/((mx-mn)||1))*(H-pad*2);
  const path=c.hist.map((v,i)=>`${i?'L':'M'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const area=path+` L${px(n-1)},${H-pad} L${px(0)},${H-pad} Z`;
  const yr=2016;

  $('#b-courts').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Twelve courts that shape law far beyond their own borders. For each one: who sits on it, who chooses them, how long they serve, and crucially what the court can actually strike down. Watch how the courts with the strongest reputations tend to share one design feature — a single non-renewable term.</p></div>
    
   <div class="grid g3 mb2">${COURTS.map(x=>`
     <div class="jcard ${x.id===courtSel?'sel':''}" data-c="${x.id}"
       style="border-left:3px solid ${x.id===courtSel?'var(--brass)':'var(--line2)'}">
       <div class="row1"><span class="iso">${x.f}</span></div>
       <h4 style="font-size:.9rem;line-height:1.3;margin-bottom:6px">${esc(x.n)}</h4>
       <div style="font-size:.76rem;color:var(--faint)">${esc(x.seat)}</div>
       <div class="meta"><span class="tag b">${x.seats} members</span>
         <span class="tag">${x.term.length>22?x.term.slice(0,20)+'…':x.term}</span></div>
     </div>`).join('')}</div>

   <div class="panel mb2"><div class="panel-h"><h3>${esc(c.n)}</h3>
     <span class="hint">Seated ${esc(c.seat)} · established ${c.f}</span></div>
     <div class="panel-b">
       <div class="spec">
         <div><u>Members</u><b>${c.seats}</b></div>
         <div><u>Term</u><b style="font-size:.82rem">${esc(c.term)}</b></div>
         <div><u>Output</u><b style="font-size:.82rem">${esc(c.out)}</b></div>
         <div><u>Founded</u><b>${c.f}</b></div>
       </div>
       <div class="grid g2">
         <div><h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:8px">APPOINTMENT</h4>
           <p style="font-size:.88rem;color:var(--dim)">${esc(c.app)}</p></div>
         <div><h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:8px">REVIEW POWER</h4>
           <p style="font-size:.88rem;color:var(--dim)">${esc(c.rev)}</p></div>
       </div>
       <div class="note">${esc(c.note)}</div>
     </div></div>

   <div class="panel mb2"><div class="panel-h"><h3>Output trend</h3>
     <span class="hint">Indicative annual volume, ${yr}–${yr+n-1}</span></div>
     <div class="panel-b">
       <svg viewBox="0 0 ${W} ${H}" class="chart">
         ${[0,.25,.5,.75,1].map(f=>{const y=pad+f*(H-pad*2);
           return `<line class="gl" x1="${pad}" y1="${y}" x2="${W-pad}" y2="${y}"></line>
             <text class="axl" x="${pad-7}" y="${y+3}" text-anchor="end">${fmt(mx-(mx-mn)*f)}</text>`}).join('')}
         <path d="${area}" fill="var(--brass)" fill-opacity=".1"></path>
         <path d="${path}" fill="none" stroke="var(--brass)" stroke-width="2"></path>
         ${c.hist.map((v,i)=>`<circle cx="${px(i)}" cy="${py(v)}" r="3" fill="var(--brass)"><title>${yr+i}: ${fmt(v)}</title></circle>
           <text class="axl" x="${px(i)}" y="${H-pad+14}" text-anchor="middle">${yr+i}</text>`).join('')}
       </svg>
     </div></div>

   <div class="tbl-wrap"><table><thead><tr><th>Court</th><th>Founded</th><th>Members</th><th>Term</th>
     <th>Review power</th><th>Output</th></tr></thead><tbody>
     ${COURTS.map(x=>`<tr data-c="${x.id}"><td class="nm">${esc(x.n)}</td><td class="num">${x.f}</td>
       <td class="num">${x.seats}</td><td style="color:var(--dim);white-space:normal">${esc(x.term)}</td>
       <td style="color:var(--dim);white-space:normal;max-width:280px">${esc(x.rev)}</td>
       <td style="color:var(--dim)">${esc(x.out)}</td></tr>`).join('')}</tbody></table></div>

   <div class="note">The pattern worth noticing: the courts with the strongest reputation for independence —
     Karlsruhe, Strasbourg, Johannesburg — all use <b>single non-renewable terms</b>. A judge who can never be
     reappointed has nothing to gain from pleasing whoever would do the reappointing. Life tenure achieves something
     similar by a different route, at the cost of making every vacancy a political event.</div>`;

  $('#rt-courts').textContent=`${COURTS.length} courts`;
  $$('#b-courts [data-c]').forEach(e=>e.onclick=()=>{courtSel=e.dataset.c;renderCourts();
    scrollTo_('b-courts')});
}

/* ==================================================================
   07 · CASE LAW
   ================================================================== */
let caseCat='', caseQ='', caseView='timeline';
function renderCases(){
  const cats=[...new Set(CASES.map(c=>c.cat))];
  let hits=CASES.filter(c=>(!caseCat||c.cat===caseCat)&&
    (!caseQ||(c.t+c.c+c.s+c.w+c.cat).toLowerCase().includes(caseQ)));
  hits=[...hits].sort((a,b)=>a.y-b.y);

  const timeline=hits.map(c=>`<div class="tnode">
    <div class="panel"><div class="panel-b">
      <div class="tyear">${c.y<0?Math.abs(c.y)+' BC':c.y}</div>
      <div class="ttitle">${esc(c.t)}</div>
      <div class="tcourt">${esc(c.c)} <span class="tag b">${c.cat}</span>
        ${c.iso&&byIso[c.iso]?`<span class="tag" data-j="${c.iso}" style="cursor:pointer">${byIso[c.iso].name}</span>`:''}</div>
      <div class="tbody">${c.s}</div>
      <div class="twhy"><b>Why it matters.</b> ${c.w}</div>
      ${c.k.length?`<div style="margin-top:11px;display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <span style="font-family:var(--mono);font-size:.6rem;color:var(--faint);letter-spacing:.12em">CONNECTS TO</span>
        ${c.k.map(id=>{const t=CASES.find(x=>x.id===id);return t?`<button class="chip" data-goto="${id}">${esc(t.t.split(' v')[0].slice(0,26))}</button>`:''}).join('')}</div>`:''}
    </div></div></div>`).join('');

  /* citation network */
  const net=CASES.filter(c=>c.k.length||CASES.some(o=>o.k.includes(c.id)));
  const NR=250,NCX=300,NCY=270;
  const pos={};
  net.forEach((c,i)=>{const a=(Math.PI*2*i/net.length)-Math.PI/2;
    pos[c.id]=[NCX+Math.cos(a)*NR,NCY+Math.sin(a)*NR]});
  const edges=net.flatMap(c=>c.k.filter(k=>pos[k]).map(k=>{
    const[x1,y1]=pos[c.id],[x2,y2]=pos[k];
    return `<path d="M${x1.toFixed(1)},${y1.toFixed(1)} Q${NCX},${NCY} ${x2.toFixed(1)},${y2.toFixed(1)}"
      fill="none" stroke="var(--brass)" stroke-opacity=".22" stroke-width="1"></path>`})).join('');
  const CATC={Foundations:'#c9a227',Rights:'#4d9bf5',Criminal:'#e05c4f',Contracts:'#3fb27f',
    Torts:'#9b7fe0',International:'#e0a33a',Technology:'#4d9bf5',Environment:'#3fb27f',Recent:'#c9a227'};
  const nodes=net.map(c=>{const[x,y]=pos[c.id];
    const deg=c.k.length+net.filter(o=>o.k.includes(c.id)).length;
    return `<g class="tile" data-goto="${c.id}"><title>${esc(c.t)} (${c.y}) · ${deg} connections</title>
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${clamp(3+deg*1.3,4,11)}"
        fill="${CATC[c.cat]||'#8994a6'}" fill-opacity=".85" stroke="var(--bg)" stroke-width="1.4"></circle>
      <text x="${x.toFixed(1)}" y="${(y+(y<NCY?-11:16)).toFixed(1)}" class="axl" text-anchor="middle"
        style="font-size:7px;fill:var(--dim)">${esc(c.t.split(' v')[0].split(' ').slice(0,2).join(' ').slice(0,16))}</text></g>`}).join('');

  $('#b-caselaw').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Forty-two decisions in chronological order, each with what happened, what was decided and why it still matters. Switch to the network view to see how doctrines connect — the chain from Entick in 1765 to Riley in 2014 is one continuous argument about searches, restated for general warrants, wiretaps and then smartphones.</p></div>
    
    <div class="ctl">
      <input type="search" id="cq" placeholder="Search cases, courts, doctrines…" value="${esc(caseQ)}">
      <div class="seg" id="cViewSeg">
        <button data-v="timeline" class="${caseView==='timeline'?'on':''}">Timeline</button>
        <button data-v="network" class="${caseView==='network'?'on':''}">Citation network</button></div>
    </div>
    <div class="ctl" id="cChips">
      <button class="chip ${!caseCat?'on':''}" data-c="">All ${CASES.length}</button>
      ${cats.map(c=>`<button class="chip ${caseCat===c?'on':''}" data-c="${c}">${c} · ${CASES.filter(x=>x.cat===c).length}</button>`).join('')}
    </div>
    ${caseView==='network'?`
      <div class="mapbox">
        <svg viewBox="0 0 600 560" class="chart" style="max-width:620px;margin:0 auto;display:block">${edges}${nodes}</svg>
        <div class="legend">${Object.entries(CATC).map(([k,v])=>`<span><i style="background:${v}"></i>${k}</span>`).join('')}</div>
      </div>
      <div class="note">Node size is the number of doctrinal connections. The dense cluster around
        <b>Nuremberg</b>, <b>Tadić</b> and <b>Akayesu</b> is international criminal law building on itself in fifty years.
        The chain from <b>Entick</b> (1765) through <b>Katz</b> (1967) to <b>Riley</b> (2014) is one continuous argument
        about searches, restated for general warrants, wiretaps and then smartphones.</div>`
    : hits.length?`<div class="tline">${timeline}</div>`:'<div class="empty">NO MATCHES</div>'}`;

  $('#rt-caselaw').textContent=`${hits.length} decisions`;
  const q=$('#cq'); q.oninput=()=>{caseQ=q.value.toLowerCase().trim();renderCases();
    const n=$('#cq');n.focus();n.setSelectionRange(n.value.length,n.value.length)};
  $('#cChips').onclick=e=>{const c=e.target.closest('.chip');if(!c)return;caseCat=c.dataset.c;renderCases()};
  $('#cViewSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;caseView=b.dataset.v;renderCases()};
  $$('#b-caselaw [data-goto]').forEach(b=>b.onclick=()=>{
    const c=CASES.find(x=>x.id===b.dataset.goto); if(!c)return;
    openModal(`<div class="mbox-h"><div>
      <div style="font-family:var(--mono);font-size:.66rem;color:var(--brass);letter-spacing:.18em">${c.y<0?Math.abs(c.y)+' BC':c.y} · ${c.cat.toUpperCase()}</div>
      <h3 style="margin-top:5px">${esc(c.t)}</h3>
      <div style="font-size:.8rem;color:var(--faint);margin-top:5px">${esc(c.c)}</div></div>
      <button class="x" onclick="closeModal()">✕</button></div>
      <div class="mbox-b"><p style="color:var(--dim);margin-bottom:16px">${c.s}</p>
        <div class="note"><b>Why it matters.</b> ${c.w}</div></div>`);
  });
  $$('#b-caselaw [data-j]').forEach(b=>b.onclick=e=>{e.stopPropagation();jurisReport(b.dataset.j)});
}

/* ==================================================================
   08 · Q&A
   ================================================================== */
let qaTopic='', qaQ='', qaLevel='';
function renderQA(openId){
  const topics=[...new Set(QA.map(q=>q.topic))];
  const hits=QA.filter(q=>(!qaTopic||q.topic===qaTopic)&&(!qaLevel||q.level===qaLevel)&&
    (!qaQ||(q.q+q.topic+q.a.join(' ')+(q.l||[]).join(' ')).toLowerCase().includes(qaQ)));
  $('#b-qa').innerHTML=`
    <div class="disclaim"><b>This is education, not advice.</b> Laws differ by country, state and year, and they change.
      Nothing here creates a lawyer–client relationship. For a decision that affects you, talk to a qualified lawyer
      in your jurisdiction.</div>
    <div class="ctl">
      <input type="search" id="qq" placeholder="Search questions — arrest, contract, landlord, data…" value="${esc(qaQ)}">
      <div class="seg" id="qLvl">
        <button data-l="" class="${!qaLevel?'on':''}">All levels</button>
        <button data-l="Beginner" class="${qaLevel==='Beginner'?'on':''}">Beginner</button>
        <button data-l="Intermediate" class="${qaLevel==='Intermediate'?'on':''}">Intermediate</button></div>
    </div>
    <div class="ctl" id="qChips">
      <button class="chip ${!qaTopic?'on':''}" data-t="">All topics</button>
      ${topics.map(t=>`<button class="chip ${qaTopic===t?'on':''}" data-t="${esc(t)}">${esc(t)}</button>`).join('')}
    </div>
    ${hits.length?hits.map(q=>`<details class="qa" id="qa-${q.id}"${openId===q.id?' open':''}>
      <summary>${q.q}</summary>
      <div class="qab">${q.a.map(p=>`<p>${p}</p>`).join('')}
        ${q.l?`<ul>${q.l.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
        ${q.n?`<div class="note"><b>Jurisdiction note.</b> ${q.n}</div>`:''}
        <div style="display:flex;gap:6px;margin-top:14px"><span class="tag b">${esc(q.topic)}</span>
          <span class="tag">${q.level}</span></div>
      </div></details>`).join(''):'<div class="empty">NO MATCHES</div>'}`;
  $('#rt-qa').textContent=`${hits.length} of ${QA.length}`;
  const q=$('#qq'); q.oninput=()=>{qaQ=q.value.toLowerCase().trim();renderQA();
    const n=$('#qq');n.focus();n.setSelectionRange(n.value.length,n.value.length)};
  $('#qChips').onclick=e=>{const c=e.target.closest('.chip');if(!c)return;qaTopic=c.dataset.t;renderQA()};
  $('#qLvl').onclick=e=>{const b=e.target.closest('button');if(!b)return;qaLevel=b.dataset.l;renderQA()};
}

/* ==================================================================
   09 · GUIDED WALKTHROUGH
   ================================================================== */
let gStack=['start'];
function renderGuide(){
  const id=gStack[gStack.length-1], node=FLOW[id];
  let inner;
  if(node.r){
    const reads=(node.read||[]).map(r=>QA.find(q=>q.id===r)).filter(Boolean);
    inner=`<div class="prog"><i style="width:100%"></i></div>
      <span class="tag g">BRIEFING</span>
      <h3 style="font-family:var(--serif);font-size:1.5rem;margin:12px 0 6px">${node.t}</h3>
      <p style="color:var(--dim);margin-bottom:24px">${node.lead}</p>
      <div class="blk"><h4>Rights usually in play</h4><ul>${node.rights.map(r=>`<li>${r}</li>`).join('')}</ul></div>
      <div class="blk"><h4>Sensible next steps</h4><ul>${node.next.map(r=>`<li>${r}</li>`).join('')}</ul></div>
      ${reads.length?`<div class="blk"><h4>Read more</h4>${reads.map(r=>
        `<button class="opt" data-read="${r.id}"><span class="optn">→</span><span>${r.q}</span></button>`).join('')}</div>`:''}
      <div class="disclaim" style="margin-top:22px"><b>General information only.</b> Laws differ by country and change
        over time. Before acting on anything here, speak to a qualified lawyer or a free legal advice service where you live.</div>
      <div class="ctl printbtn" style="margin-bottom:0">
        <button class="btn ghost" onclick="printCurrent()">Print or save this briefing</button>
        <button class="btn ghost" onclick="go('help')">Find someone who can help →</button>
        <button class="btn ghost" onclick="go('letters')">Write a letter about it →</button></div>
      <button class="back" id="gRestart">← Start over</button>`;
  }else{
    inner=`<div class="prog"><i style="width:${Math.min(gStack.length*30,85)}%"></i></div>
      <div class="qtext">${node.q}</div>
      <div class="qsub">${node.sub||'SELECT THE CLOSEST OPTION'}</div>
      ${node.o.map((o,i)=>`<button class="opt" data-n="${o.n}"><span class="optn">${i+1}</span>
        <span>${o.l}${o.s?`<em>${o.s}</em>`:''}</span></button>`).join('')}
      ${gStack.length>1?`<button class="back" id="gBack">← Back</button>`:''}`;
  }
  $('#b-guide').innerHTML=`<div class="panel" style="max-width:760px"><div class="panel-b">${inner}</div></div>`;
  $('#rt-guide').textContent=node.r?'Briefing':`Step ${gStack.length}`;
  $$('#b-guide [data-n]').forEach(b=>b.onclick=()=>{gStack.push(b.dataset.n);renderGuide()});
  const bk=$('#gBack'); if(bk)bk.onclick=()=>{gStack.pop();renderGuide()};
  const rs=$('#gRestart'); if(rs)rs.onclick=()=>{gStack=['start'];renderGuide()};
  $$('#b-guide [data-read]').forEach(b=>b.onclick=()=>{
    qaTopic='';qaQ='';qaLevel='';renderQA(b.dataset.read);go('qa');
    setTimeout(()=>scrollTo_('qa-'+b.dataset.read,'center'),80);
  });
}


/* ==================================================================
   CLERK — offline conversation over this site's own material
   Runs entirely in the browser. No network, no key, no service.
   ================================================================== */
let CHAT_VIEW = [];

const CLERK_INTRO = `<h5>The Clerk is listening</h5><p>Ask about a jurisdiction, a case, a practice
  area or a legal term. The Clerk searches this site's own material and shows you what it finds.</p>
  <p style="font-size:.8rem;color:var(--faint)">Searches jurisdictions, cases, terms, practice areas, games,
  qualification routes and help by country. Runs in your browser and is never sent anywhere.</p>`;

function turnHtml(m){
  if(m.role==='user') return `<div class="chat-turn" style="margin-bottom:14px">
    <div style="font-family:var(--mono);font-size:.56rem;letter-spacing:.14em;color:var(--faint);margin-bottom:5px">YOU</div>
    <div style="background:var(--bg2);border:1px solid var(--line);border-radius:9px;padding:10px 13px;font-size:.88rem">${esc(m.text)}</div></div>`;
  return `<div class="chat-turn" style="margin-bottom:18px">
    <div style="font-family:var(--mono);font-size:.56rem;letter-spacing:.14em;color:var(--brass);margin-bottom:5px">CLERK</div>
    ${m.raw||''}</div>`;
}
function paintChat(){
  const html=CHAT_VIEW.map(turnHtml).join('') || CLERK_INTRO;
  ['#cnOut','#dockOut'].forEach(sel=>{const el=$(sel); if(el){el.innerHTML=html;el.scrollTop=el.scrollHeight}});
  const c=$('#chatClear'); if(c)c.style.display=CHAT_VIEW.length?'':'none';
}
function resetChat(){ CHAT_VIEW=[]; paintChat(); }
function askClerk(q){
  q=(q||'').trim(); if(!q)return;
  CHAT_VIEW.push({role:'user',text:q});
  CHAT_VIEW.push({role:'assistant',raw:answer(q)});
  paintChat();
}
window.askClerk=askClerk; window.resetChat=resetChat;

/* ==================================================================
   10 · COUNSEL — local engine grounded in this dataset
   ================================================================== */
let counselTab='ask', glosQ='';
const STOP=new Set('the a an of in on for to is are what how do does can i my me and or with about between vs versus tell explain all any some nothing something anything thing things get got need want know like just really much more most'.split(' '));
const tok=s=>s.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(w=>w.length>2&&!STOP.has(w));

function findJur(q){
  const l=q.toLowerCase();
  return J.filter(j=>l.includes(j.name.toLowerCase())||
    new RegExp('\\b'+j.iso+'\\b').test(q)||          /* uppercase only: CAN, ARE, PER are English words */
    (j.iso==='USA'&&/\b(u\.s\.|america|american)\b/.test(l))||
    (j.iso==='GBR'&&/\b(uk|britain|british|england)\b/.test(l)));
}
function answer(q){
  if(!q.trim()) return '<p style="color:var(--faint)">Ask something to begin.</p>';
  const t=tok(q), lq=q.toLowerCase();
  const jur=findJur(q);

  /* how to qualify */
  const qr=QROUTE.filter(r=>lq.includes(r.n.toLowerCase())||lq.includes(r.iso.toLowerCase()));
  if(qr.length&&/qualify|become|lawyer|barrister|solicitor|law school|training|bar exam/.test(lq)){
    const r=qr[0];
    return `<h5>Qualifying in ${esc(r.n)}</h5><p>Takes about <b>${esc(r.yrs)} years</b>.</p>
      <ul>${r.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <p><b>What it gates on.</b> ${esc(r.gate)}</p><p>${esc(r.note)}</p>`;
  }

  /* getting help somewhere */
  if(/help|lawyer near|legal aid|free advice|who can i|where do i go|afford/.test(lq)){
    const hj=findJur(q), h=hj.length?HELPJ.find(x=>hj.some(j=>j.iso===x.iso)):null;
    if(h)return `<h5>Getting help in ${esc(h.n)}</h5>
      <ul>${h.r.map(r=>`<li><b>${esc(r[0])}</b> — ${esc(r[1])}</li>`).join('')}</ul>
      <p><a href="situation.html#help">Open Find help →</a></p>`;
    return `<h5>Finding real help</h5><p>The Find help page lists free routes in ${HELPJ.length} countries, plus the
      eight kinds of organisation that exist almost everywhere — legal aid, law centres, university clinics, bar
      referral lines, ombudsman schemes, unions, charities and pro bono schemes.</p>
      <p><a href="situation.html#help">Open Find help →</a></p>`;
  }

  /* comparison of two or more jurisdictions */
  if(jur.length>=2){
    const [a,b]=jur;
    const diff=DIMS.slice(1).map(([k,l])=>[l,a[k],b[k],a[k]-b[k]]).sort((x,y)=>Math.abs(y[3])-Math.abs(x[3]));
    return `<h5>Comparison · ${esc(a.name)} vs ${esc(b.name)}</h5>
      <p><b>${esc(a.name)}</b> scores <b>${a.rol}</b> on the composite rule-of-law scale against
      <b>${esc(b.name)}</b>'s <b>${b.rol}</b> — a gap of ${Math.abs(a.rol-b.rol)} points.
      ${a.trad===b.trad?`Both operate in the ${TRAD[a.trad].toLowerCase()} tradition.`
        :`${esc(a.name)} is a ${TRAD[a.trad].toLowerCase()} system; ${esc(b.name)} is ${TRAD[b.trad].toLowerCase()}.`}</p>
      <p>The largest divergence is on <b>${diff[0][0].toLowerCase()}</b> (${diff[0][1]} vs ${diff[0][2]}),
      the closest on <b>${diff[diff.length-1][0].toLowerCase()}</b> (${diff[diff.length-1][1]} vs ${diff[diff.length-1][2]}).</p>
      <ul><li>Incarceration: ${fmt(a.inc)} vs ${fmt(b.inc)} per 100,000</li>
        <li>Capital punishment: ${DP[a.dp]} vs ${DP[b.dp]}</li>
        <li>Procedure: ${PROC[a.proc]} vs ${PROC[b.proc]}</li>
        <li>Trial mode: ${JURY[a.jury]} vs ${JURY[b.jury]}</li></ul>
      <p style="font-size:.82rem;color:var(--faint)">Open the Compare section to put up to six side by side.</p>`;
  }

  /* single jurisdiction */
  if(jur.length===1){
    const j=jur[0];
    const rank=[...J].sort((x,y)=>y.rol-x.rol).findIndex(x=>x.iso===j.iso)+1;
    const cs=CASES.filter(c=>c.iso===j.iso);
    const ct=COURTS.find(c=>c.iso===j.iso);
    const best=DIMS.slice(1).map(([k,l])=>[l,j[k]]).sort((a,b)=>b[1]-a[1]);
    return `<h5>Jurisdiction report · ${esc(j.name)}</h5>
      <p>${esc(j.name)} is a <b>${TRAD[j.trad].toLowerCase()}</b> jurisdiction, ranked <b>${rank} of ${J.length}</b>
      here with a composite rule-of-law score of <b>${j.rol}</b>. Criminal procedure is
      <b>${PROC[j.proc].toLowerCase()}</b>, with ${JURY[j.jury].toLowerCase()}.
      ${j.cons?`Its current constitution dates from <b>${j.cons}</b>.`:'It has no single codified constitution.'}</p>
      <ul><li>Strongest dimension: <b>${best[0][0].toLowerCase()}</b> at ${best[0][1]}</li>
        <li>Weakest dimension: <b>${best[best.length-1][0].toLowerCase()}</b> at ${best[best.length-1][1]}</li>
        <li>Incarceration: ${fmt(j.inc)} per 100,000${j.hom!=null?` · homicide ${fmt(j.hom)} per 100,000 (live World Bank data)`:''}</li>
        <li>Capital punishment: ${DP[j.dp]}</li>
        <li>Apex court: ${esc(j.apex)}</li></ul>
      ${ct?`<p><b>${esc(ct.n)}</b> — ${ct.seats} members, ${ct.term.toLowerCase()}. ${esc(ct.rev)}.</p>`:''}
      ${cs.length?`<p>Landmark decisions in the dataset: ${cs.map(c=>`<b>${esc(c.t)}</b> (${c.y})`).join(', ')}.</p>`:''}`;
  }

  /* recent decisions */
  if(/recent|latest|newest|this year|2026|what changed|current cases|lately|just decided/.test(lq)){
    const ex=RCASES.filter(c=>c.sum).sort((a,b)=>b.date.localeCompare(a.date));
    if(ex.length){
      const c=ex[0];
      return `<h5>Most recent decision explained</h5>
        <p><b>${esc(c.t)}</b> ${esc(c.cite)} \u2014 ${esc(c.court)}, ${rcDate(c.date)}.</p>
        <p>${esc(c.sum.split('. ').slice(0,2).join('. '))}.</p>
        <p>Recent Decisions holds ${RCASES.length} judgment${RCASES.length===1?'':'s'} in two streams \u2014 what changed
        for ordinary people, and what changed the law itself \u2014 plus ${RCURR.length} measured shift${RCURR.length===1?'':'s'}
        in how legal systems are working overall. Every entry links to its source.</p>
        <p><a href="learn.html#recent">Open Recent Decisions \u2192</a></p>`;
    }
    return `<h5>Recent decisions</h5><p>The site tracks recent significant judgments, split into rulings that change
      what ordinary people can do and rulings that change the law itself.</p>
      <p><a href="learn.html#recent">Open Recent Decisions \u2192</a></p>`;
  }

  /* a document someone has been sent.
     Scored, not first-match: a bare .includes() over the whole record lets a
     stopword like "this" in one document's prose beat a title word in another. */
  const docHandles={claim:'sued suing court claim form judgment',
    evict:'evict eviction landlord tenant leave home possession notice',
    discip:'disciplinary discipline work employer meeting dismissal sacked',
    debt:'debt collector collection owe money bailiff creditor',
    police:'police arrest arrested bail interview custody station',
    et:'timetable order directions bundle disclosure witness statement tribunal',
    refuse:'refusal refused appeal visa immigration application rejected',
    summons:'summons witness subpoena attend give evidence',
    breachnote:'data breach hacked leak password personal information'};
  if(/letter|notice|form|summons|received|sent me|got a|claim form|what does this mean|post|envelope|document|evict|bailiff|disciplinar|breach notif/.test(lq)){
    const best=DOCS.map(x=>{
      const ti=x.t.toLowerCase(), wh=x.who.toLowerCase(), gi=x.gist.toLowerCase();
      let sc=0;
      t.forEach(w=>{ if(w.length<4)return;
        if(ti.includes(w))sc+=6; if(wh.includes(w))sc+=2; if(gi.includes(w))sc+=1; });
      (docHandles[x.id]||'').split(' ').forEach(k=>{ if(k&&lq.includes(k))sc+=5 });
      return {x,sc};
    }).sort((a,b)=>b.sc-a.sc)[0];
    const d=best&&best.sc>0?best.x:null;
    if(d)return `<h5>${esc(d.t)}</h5><p>${esc(d.gist)}</p>
      <p><b>The deadline that matters.</b> ${esc(d.dl)}</p>
      <p><b>If you do nothing.</b> ${esc(d.ignore)}</p>
      <p><a href="situation.html#docs">Walk through it part by part \u2192</a></p>`;
    return `<h5>Understanding a document you were sent</h5>
      <p>The site walks through ${DOCS.length} of the documents people most often receive \u2014 court claims, eviction
      notices, disciplinary invitations, debt letters, police notices, refusals with appeal rights, witness summonses
      and data breach notices \u2014 part by part, with the deadline called out at the top.</p>
      <p><a href="situation.html#docs">Open What Does This Mean \u2192</a></p>`;
  }

  /* what happens next in a process */
  const procHandles={small:'small claim claims money sue sued suing owed refund deposit back',
    tribunal:'employment tribunal unfair dismissal sacked fired employer work redundan',
    possess:'evict eviction evicted possession landlord tenant repossess home bailiff',
    crim:'criminal police arrest arrested charge charged trial jury prosecution',
    ombud:'ombudsman complaint complain bank insurer energy regulator free',
    family:'family child children custody divorce separation contact mediation parent'};
  if(/what happens|how long|process|procedure|stages|steps|court date|hearing|timeline|tribunal|small claims|ombudsman|evicted|sued|arrested|divorce|separat/.test(lq)){
    const bestp=PROCS.map(x=>{
      const ti=x.t.toLowerCase(), tg=x.tag.toLowerCase(), gi=x.gist.toLowerCase();
      let sc=0;
      t.forEach(w=>{ if(w.length<4)return;
        if(ti.includes(w))sc+=6; if(tg.includes(w))sc+=3; if(gi.includes(w))sc+=1; });
      (procHandles[x.id]||'').split(' ').forEach(k=>{ if(k&&lq.includes(k))sc+=5 });
      return {x,sc};
    }).sort((a,b)=>b.sc-a.sc)[0];
    const pr=bestp&&bestp.sc>0?bestp.x:null;
    if(pr)return `<h5>${esc(pr.t)}</h5><p>${esc(pr.gist)}</p>
      <p><b>Typical length.</b> ${esc(pr.total)} across ${pr.steps.length} stages.</p>
      <p><b>Who is there.</b> ${esc(pr.who)}</p>
      <p><a href="situation.html#process">See every stage \u2192</a></p>`;
    return `<h5>What happens next</h5>
      <p>Six processes are mapped stage by stage with honest timescales: a small money claim, an employment claim,
      possession proceedings, a criminal case, an ombudsman complaint, and separating with children involved.</p>
      <p><a href="situation.html#process">Open What Happens Next \u2192</a></p>`;
  }

  /* what have I already done here */
  if(/my progress|where was i|what have i|carry on|continue|last time|pick up/.test(lq)){
    const s=progPct();
    return `<h5>Where you have got to</h5>
      <p>You have opened <b>${s.done} of ${s.tot}</b> things on this site \u2014 ${s.sv} sections, ${s.gv} games,
      ${s.dv} documents and ${s.pv} processes. It is kept on this device only and nothing is uploaded.</p>
      <p><a href="index.html#progress">Open Your progress \u2192</a></p>`;
  }

  /* glossary term */
  const g=GLOS.find(([term])=>lq.includes(term.toLowerCase().split(' /')[0].toLowerCase()));
  if(g&&(/\bwhat is|\bwhat does|\bdefine|\bmeaning/.test(lq)||t.length<=3)){
    return `<h5>Definition · ${esc(g[0])}</h5><p><span class="tag b">${g[1]}</span></p><p>${g[2]}</p>`;
  }

  /* law lab games */
  const gm=GAMES.filter(g=>t.some(w=>(g.t+' '+g.area+' '+g.tag+' '+g.skill).toLowerCase().includes(w)));
  if(gm.length&&/game|play|lab|jury|sentenc|object|board|custody|contract|breach|causation|precedent/.test(lq)){
    const g=gm[0];
    return `<h5>Law Lab · ${esc(g.t)}</h5><p><span class="tag b">${esc(g.area)}</span></p>
      <p>${esc(g.tag)}</p><p><b>What it teaches:</b> ${esc(g.skill)}.</p>
      <p><a href="game-${g.id}.html">Open ${esc(g.t)} →</a></p>
      ${gm.length>1?`<p style="font-size:.82rem;color:var(--faint)">Also matching: ${gm.slice(1,4).map(x=>esc(x.t)).join(', ')}.</p>`:''}`;
  }

  /* AI exposure by profession */
  const pf=PROFESSIONS.filter(x=>t.some(w=>x.r.toLowerCase().includes(w)));
  if(pf.length&&/ai|automat|robot|replace|risk|future/.test(lq)){
    const x=pf[0];
    return `<h5>AI exposure · ${esc(x.r)}</h5>
      <p><b>${x.x}/100</b> — ${STANCE[x.st][0].toLowerCase()}. Most of the day: ${esc(x.mix.toLowerCase())}.</p>
      <p>${esc(x.n)}</p><p><a href="careers.html#ai">See all ${PROFESSIONS.length} professions →</a></p>`;
  }

  /* case lookup */
  const cs=CASES.map(c=>{
    const hay=(c.t+' '+c.c+' '+c.s+' '+c.w+' '+c.cat).toLowerCase();
    return [c,t.reduce((s,w)=>s+(hay.includes(w)?(c.t.toLowerCase().includes(w)?4:1):0),0)];
  }).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]);
  const qs=QA.map(q=>{
    const hay=(q.q+' '+q.topic+' '+q.a.join(' ')+' '+(q.l||[]).join(' ')).toLowerCase();
    return [q,t.reduce((s,w)=>s+(hay.includes(w)?(q.q.toLowerCase().includes(w)?3:1):0),0)];
  }).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]);

  if(cs.length&&cs[0][1]>=4&&(!qs.length||cs[0][1]>qs[0][1])){
    const c=cs[0][0];
    return `<h5>Case · ${esc(c.t)} (${c.y<0?Math.abs(c.y)+' BC':c.y})</h5>
      <p><span class="tag">${esc(c.c)}</span> <span class="tag b">${c.cat}</span></p>
      <p>${c.s}</p><p><b>Why it matters.</b> ${c.w}</p>
      ${cs.length>1?`<p style="font-size:.82rem;color:var(--faint)">Also matching: ${cs.slice(1,4).map(x=>esc(x[0].t)).join(', ')}.</p>`:''}`;
  }
  if(qs.length&&qs[0][1]>=3){
    const q0=qs[0][0];
    return `<h5>${esc(q0.topic)} · ${esc(q0.level)}</h5>
      <p><b>${q0.q}</b></p>${q0.a.map(p=>`<p>${p}</p>`).join('')}
      ${q0.l?`<ul>${q0.l.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
      ${q0.n?`<p style="color:var(--brass)"><b>Jurisdiction note.</b> ${q0.n}</p>`:''}
      ${qs.length>1?`<p style="font-size:.82rem;color:var(--faint)">Related: ${qs.slice(1,4).map(x=>esc(x[0].q)).join(' · ')}</p>`:''}`;
  }
  if(cs.length){const c=cs[0][0];
    return `<h5>Closest match · ${esc(c.t)}</h5><p>${c.s}</p><p><b>Why it matters.</b> ${c.w}</p>`;}

  return `<h5>No grounded answer available</h5>
    <p>The Clerk searches this site only — ${J.length} jurisdictions, ${CASES.length} decisions, ${QA.length} explained
    questions, ${GLOS.length} terms, ${AREAS.length} practice areas, ${GAMES.length} games, ${DOCS.length} annotated
    documents, ${PROCS.length} mapped processes, ${QROUTE.length} qualification routes and help routes in
    ${HELPJ.length} countries. Nothing here matched, and it will not invent an answer.</p>
    <p>Try naming a country, a case, a legal term or a job — or describe a letter you were sent, or ask what happens
    next in a process.</p>`;
}

function renderCounsel(){
  const suggestions=['Rule of law in Morocco','Compare Germany and the United States','What is habeas corpus',
    'I received a letter from a debt collector','What happens next at an employment tribunal',
    'How do I qualify as a lawyer in Ireland','Where can I get free legal help in Kenya',
    'Is my job at risk from AI as a paralegal','Tell me about the jury game','Can I be fired for no reason',
    'Donoghue v Stevenson','What is proportionality'];
  const glos=GLOS.filter(([t,c,d])=>!glosQ||(t+c+d).toLowerCase().includes(glosQ))
    .sort((a,b)=>a[0].localeCompare(b[0]));
  $('#b-counsel').innerHTML=`
    <div class="ctl"><div class="seg" id="cnSeg">
      <button data-t="ask" class="${counselTab==='ask'?'on':''}">Ask the Clerk</button>
      <button data-t="glos" class="${counselTab==='glos'?'on':''}">Glossary · ${GLOS.length}</button></div></div>
    ${counselTab==='ask'?`
      <div class="panel"><div class="panel-h"><h3>Ask the Clerk</h3>
        <span class="hint">Runs offline in your browser · not legal advice</span></div>
        <div class="panel-b">
          <div class="cwin" id="cnOut" style="max-height:min(52vh,460px);overflow-y:auto">${CLERK_INTRO}</div>
          <div class="ctl" style="margin:14px 0 0"><input type="search" id="cnQ" placeholder="Ask a question, then keep talking…">
            <button class="btn" id="cnGo">Ask</button>
            <button class="btn ghost" id="chatClear" style="display:none">New conversation</button></div>
          <div class="suggest">${suggestions.map(s=>`<button class="chip" data-s="${esc(s)}">${esc(s)}</button>`).join('')}</div>
        </div></div>`
    :`<div class="ctl"><input type="search" id="glQ" placeholder="Search terms…" value="${esc(glosQ)}"></div>
      <div class="panel"><div class="panel-b"><dl>${glos.length?glos.map(([t,c,d])=>
        `<div class="gl-row"><dt>${esc(t)}<small>${esc(c)}</small></dt><dd>${d}</dd></div>`).join('')
        :'<div class="empty">NO MATCHES</div>'}</dl></div></div>`}`;

  $('#rt-counsel').textContent=counselTab==='ask'?'Local engine':`${glos.length} terms`;
  $('#cnSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;counselTab=b.dataset.t;renderCounsel()};
  if(counselTab==='ask'){
    const run=v=>{askClerk(v);$('#cnQ').value=''};
    $('#cnGo').onclick=()=>run($('#cnQ').value);
    $('#cnQ').onkeydown=e=>{if(e.key==='Enter')run($('#cnQ').value)};
    $('#chatClear').onclick=()=>resetChat();
    if(CHAT_VIEW.length)paintChat();
    $$('#b-counsel [data-s]').forEach(b=>b.onclick=()=>run(b.dataset.s));
  }else{
    const g=$('#glQ'); g.oninput=()=>{glosQ=g.value.toLowerCase().trim();renderCounsel();
      const n=$('#glQ');n.focus();n.setSelectionRange(n.value.length,n.value.length)};
  }
}

/* ==================================================================
   11 · QUIZ
   ================================================================== */
const AUTHORED=[
{q:'In common law systems, what does <i>stare decisis</i> require?',
 o:['That courts follow precedent set by higher courts','That trials be held in public',
    'That the accused be presumed innocent','That laws cannot apply retroactively'],a:0,
 e:'"To stand by things decided" — the doctrine of binding precedent. It is why common law is built case by case, and why overruling is treated as a serious step.'},
{q:'Which 1932 decision created the modern law of negligence?',
 o:['Carlill v Carbolic Smoke Ball Co','Donoghue v Stevenson','R v Dudley and Stephens','Entick v Carrington'],a:1,
 e:'A decomposed snail in a ginger beer bottle. Lord Atkin\'s neighbour principle spread across the entire common law world.'},
{q:'What is the standard of proof in most civil cases?',
 o:['Beyond reasonable doubt','Balance of probabilities','Absolute certainty','Clear and convincing in all cases'],a:1,
 e:'More likely than not. Criminal cases require the far higher "beyond reasonable doubt" — which is why identical facts can produce opposite results in the two forums.'},
{q:'Which two decisions together built the constitutional structure of EU law?',
 o:['Handyside and Marper','Van Gend en Loos and Costa v ENEL','Schrems II and Google Spain','Tadić and Akayesu'],a:1,
 e:'Van Gend en Loos created direct effect; Costa v ENEL created supremacy. Between them they turned a trade treaty into a legal order binding individuals.'},
{q:'At which stage does the proportionality test usually do most of its work?',
 o:['Legitimate aim','Suitability','Necessity','Fair balance'],a:2,
 e:'Necessity. Governments rarely pursue openly illegitimate aims, but they very often reach for a heavier instrument than the job requires — and a less restrictive alternative defeats the measure.'},
{q:'What did the Nuremberg Trials establish about following orders?',
 o:['It is a complete defence','It is not a defence to international crimes','It automatically reduces sentence','It applies only to soldiers'],a:1,
 e:'Individuals bear personal criminal responsibility under international law, and obedience to superior orders is no excuse. Every international criminal court since builds on this.'},
{q:'Which doctrine did the Indian Supreme Court create in <i>Kesavananda Bharati</i> (1973)?',
 o:['The basic structure doctrine','The margin of appreciation','Direct effect','The neighbour principle'],a:0,
 e:'Parliament may amend the Constitution but not destroy its basic structure. Since adopted by courts in Bangladesh, Pakistan, Kenya and Uganda.'},
{q:'Why is a single non-renewable judicial term thought to protect independence?',
 o:['It is cheaper to administer','The judge has nothing to gain from pleasing whoever would reappoint them',
    'It guarantees ideological balance','It shortens the caseload'],a:1,
 e:'Reappointment is leverage. Removing the possibility removes the incentive. Karlsruhe, Strasbourg and Johannesburg all use this design.'},
{q:'What does <i>habeas corpus</i> protect against?',
 o:['Double jeopardy','Unlawful detention','Self-incrimination','Retroactive criminal law'],a:1,
 e:'"That you have the body" — an order requiring anyone detaining a person to justify that detention before a court. One of the oldest liberty safeguards still in use.'},
{q:'In an inquisitorial system, who leads the investigation of the facts?',
 o:['The two opposing lawyers','The jury','The judge or investigating magistrate','The police alone'],a:2,
 e:'A judge directs fact-finding and builds a dossier. In adversarial systems the parties investigate and the judge referees. Most modern systems now mix both.'}
];
function generated(){
  const pick=n=>{const c=[...J];const out=[];while(out.length<n&&c.length)out.push(c.splice(Math.floor(Math.random()*c.length),1)[0]);return out};
  const g=[];
  const [a,b,c,d]=pick(4);
  const hi=[a,b,c,d].reduce((m,x)=>x.rol>m.rol?x:m);
  g.push({q:`Which of these jurisdictions scores highest on the composite rule-of-law measure?`,
    o:[a,b,c,d].map(x=>x.name),a:[a,b,c,d].indexOf(hi),
    e:`${hi.name} scores ${hi.rol}. The others: ${[a,b,c,d].filter(x=>x!==hi).map(x=>x.name+' '+x.rol).join(', ')}.`});
  const [e]=pick(1);
  const wrongT=Object.keys(TRAD).filter(t=>t!==e.trad).slice(0,3);
  const opts=[TRAD[e.trad],...wrongT.map(t=>TRAD[t])].sort(()=>Math.random()-0.5);
  g.push({q:`Which legal tradition does ${e.name} principally belong to?`,o:opts,a:opts.indexOf(TRAD[e.trad]),
    e:`${e.name} is classified here as ${TRAD[e.trad].toLowerCase()}. Its apex court is the ${e.apex}.`});
  const four=pick(4);
  const mostInc=four.reduce((m,x)=>x.inc>m.inc?x:m);
  g.push({q:'Which of these imprisons the largest share of its population?',o:four.map(x=>x.name),
    a:four.indexOf(mostInc),
    e:`${mostInc.name} at ${fmt(mostInc.inc)} per 100,000. Incarceration rates reflect sentencing policy far more than crime rates.`});
  const ct=COURTS[Math.floor(Math.random()*COURTS.length)];
  const seatOpts=[...new Set([ct.seats,ct.seats+4,Math.max(3,ct.seats-5),ct.seats+11])].slice(0,4).sort(()=>Math.random()-0.5);
  g.push({q:`How many members sit on the ${ct.n}?`,o:seatOpts.map(String),a:seatOpts.indexOf(ct.seats),
    e:`${ct.seats}, seated in ${ct.seat}, serving ${ct.term.toLowerCase()}.`});
  return g;
}
let QSET=[], qi=0, score=0;
function newQuiz(){
  QSET=[...AUTHORED].sort(()=>Math.random()-0.5).slice(0,8).concat(generated()).sort(()=>Math.random()-0.5);
  qi=0;score=0;
}
function renderQuiz(){
  if(!QSET.length)newQuiz();
  $('#rt-quiz').textContent=`${QSET.length} questions`;
  if(qi>=QSET.length){
    const pct=Math.round(score/QSET.length*100);
    const msg=pct>=83?'Excellent — a genuinely solid grasp of the fundamentals.'
      :pct>=58?'Good foundation. Re-read the explanations you missed and the gaps close fast.'
      :'A useful starting point. The Q&A and Case law sections cover everything asked here.';
    $('#b-quiz').innerHTML=`<div class="panel" style="max-width:720px"><div class="panel-b" style="text-align:center;padding:36px 24px">
      <div class="prog"><i style="width:100%"></i></div>
      <div class="gnum" style="color:${pct>=70?'var(--green)':pct>=45?'var(--amber)':'var(--red)'}">${score}<span style="font-size:1.4rem;color:var(--faint)">/${QSET.length}</span></div>
      <p style="margin:18px auto 26px;max-width:44ch;color:var(--dim)">${msg}</p>
      <button class="btn" id="qzAgain">New question set</button>
      <button class="btn ghost" onclick="go('caselaw')">Study the case law</button></div></div>`;
    $('#qzAgain').onclick=()=>{newQuiz();renderQuiz()};
    return;
  }
  const q=QSET[qi];
  $('#b-quiz').innerHTML=`<div class="panel" style="max-width:760px"><div class="panel-b">
    <div class="prog"><i style="width:${qi/QSET.length*100}%"></i></div>
    <div class="qsub">QUESTION ${qi+1} OF ${QSET.length} · SCORE ${score}</div>
    <div class="qtext" style="margin-bottom:22px">${q.q}</div>
    <div id="qzOpts">${q.o.map((o,i)=>`<button class="opt" data-i="${i}"><span class="optn">${'ABCD'[i]}</span><span>${o}</span></button>`).join('')}</div>
    <div id="qzAfter"></div></div></div>`;
  let done=false;
  $$('#qzOpts .opt').forEach(b=>b.onclick=()=>{
    if(done)return;done=true;
    const pick=+b.dataset.i, ok=pick===q.a;
    if(ok)score++;
    $$('#qzOpts .opt').forEach((x,i)=>{x.disabled=true;
      if(i===q.a)x.classList.add('right'); else if(i===pick)x.classList.add('wrong')});
    $('#qzAfter').innerHTML=`<div class="note" style="margin-top:18px"><b>${ok?'Correct.':'Not quite.'}</b> ${q.e}</div>
      <button class="btn" style="margin-top:16px" id="qzNext">${qi===QSET.length-1?'See results':'Next question'}</button>`;
    $('#qzNext').onclick=()=>{qi++;renderQuiz()};
  });
}

/* ==================================================================
   12 · DOCKET
   ================================================================== */
/* ==================================================================
   LIVE SYNC — World Bank Open Data (free, no key)
   ================================================================== */
async function pull(ind,field){
  const url=`https://api.worldbank.org/v2/country/all/indicator/${ind}?format=json&per_page=400&mrnev=1`;
  const r=await fetch(url);
  const d=await r.json();
  if(!Array.isArray(d)||!Array.isArray(d[1]))throw new Error('unexpected shape');
  let n=0;
  d[1].forEach(row=>{
    const j=byIso[row.countryiso3code];
    if(j&&row.value!=null){j[field]=row.value;j.live=true;n++}
  });
  return n;
}
$('#syncBtn').onclick=async()=>{
  const b=$('#syncBtn'); b.disabled=true; b.textContent='Syncing…';
  try{
    const [a,c]=await Promise.all([
      pull('VC.IHR.PSRC.P5','hom').catch(()=>0),
      pull('SP.POP.TOTL','pop').catch(()=>0)
    ]);
    if(a+c===0)throw new Error('no data returned');
    toast(`Live sync complete · ${a} homicide + ${c} population series matched`);
    b.textContent='Synced ✓';
    renderAll();
  }catch(e){
    toast('Live sync unavailable — showing the static snapshot');
    b.textContent='Sync live data';
  }finally{ b.disabled=false; setTimeout(()=>{b.textContent='Sync live data'},4000) }
};


/* ==================================================================
   PRACTICE AREAS
   ================================================================== */
const AREAS=[
{n:'Corporate / M&A',cat:'Corporate & Finance',d:82,ai:58,st:'augment',e:88,adv:25,pay:[72,88,96],
 tags:['dealpace','negotiation','drafting','clientfacing','finance'],
 day:'Long stretches of drafting and negotiating transaction documents, coordinating diligence workstreams, and managing a closing timetable that everyone else is also depending on.',
 who:'Global firms, investment banks, corporate in-house teams, private equity houses.',
 piv:['Private Equity & Funds','Capital Markets','Technology, Data & Privacy']},
{n:'Banking & Finance',cat:'Corporate & Finance',d:76,ai:54,st:'augment',e:84,adv:20,pay:[70,85,94],
 tags:['dealpace','drafting','finance','quantitative','advisory'],
 day:'Structuring and documenting lending: facility agreements, security packages, conditions precedent. Highly precedent-driven work where the value is in spotting what does not fit the template.',
 who:'Banks, alternative lenders, sponsors, borrowers.',piv:['Restructuring & Insolvency','Capital Markets','Corporate / M&A']},
{n:'Capital Markets',cat:'Corporate & Finance',d:68,ai:56,st:'augment',e:86,adv:18,pay:[71,86,95],
 tags:['dealpace','drafting','finance','regulatory'],
 day:'Prospectus drafting, verification, and regulatory compliance for equity and debt issues. Intense around a deal window, quieter between.',
 who:'Issuers, underwriting banks, exchanges, regulators.',piv:['Corporate / M&A','Banking & Finance','Tax']},
{n:'Private Equity & Funds',cat:'Corporate & Finance',d:78,ai:50,st:'augment',e:88,adv:20,pay:[74,89,97],
 tags:['dealpace','negotiation','finance','quantitative','clientfacing'],
 day:'Fund formation documents, LP negotiations, and the acquisition and disposal work that follows. Repeat clients and long relationships.',
 who:'PE and VC houses, institutional investors, fund administrators.',piv:['Corporate / M&A','Tax','Banking & Finance']},
{n:'Restructuring & Insolvency',cat:'Corporate & Finance',d:70,ai:44,st:'augment',e:80,adv:55,pay:[68,82,92],
 tags:['negotiation','finance','longrunning','contentious','advisory'],
 day:'Multi-party negotiation under time pressure, with court process running alongside. Counter-cyclical: busiest when everything else is quiet.',
 who:'Lenders, distressed funds, insolvency practitioners, boards.',piv:['Banking & Finance','Commercial Litigation','Corporate / M&A']},
{n:'Tax',cat:'Corporate & Finance',d:72,ai:62,st:'amplify',e:86,adv:35,pay:[70,85,94],
 tags:['quantitative','advisory','regulatory','drafting','international'],
 day:'Structuring transactions and defending positions against revenue authorities. One of the most intellectually technical areas of practice, and one where a single provision can move enormous sums.',
 who:'Corporates, funds, revenue authorities, accountancy firms.',piv:['Corporate / M&A','Private Client, Wills & Estates','Capital Markets']},
{n:'Competition / Antitrust',cat:'Regulatory',d:74,ai:42,st:'augment',e:88,adv:60,pay:[70,85,94],
 tags:['regulatory','quantitative','contentious','international','advisory'],
 day:'Merger clearances, cartel investigations, and abuse-of-dominance work. Heavily economics-driven — you will spend real time with econometric evidence.',
 who:'Competition authorities, multinationals, economic consultancies.',piv:['Commercial Litigation','Technology, Data & Privacy','Corporate / M&A']},
{n:'Commercial Litigation',cat:'Disputes',d:76,ai:38,st:'augment',e:84,adv:95,pay:[68,84,95],
 tags:['courtroom','adversarial','longrunning','drafting','contentious'],
 day:'Case strategy, disclosure, witness statements, expert evidence, interlocutory applications — and comparatively little trial, because most cases settle.',
 who:'Corporates, insurers, litigation funders, boards.',piv:['International Arbitration','Restructuring & Insolvency','Competition / Antitrust']},
{n:'International Arbitration',cat:'Disputes',d:78,ai:36,st:'augment',e:90,adv:85,pay:[72,88,97],
 tags:['adversarial','international','longrunning','courtroom','drafting'],
 day:'Disputes under institutional rules across borders, with written submissions carrying more weight than oral hearings and enforcement often the hardest part.',
 who:'States, energy majors, construction groups, investors.',piv:['Commercial Litigation','Energy & Natural Resources','Construction & Infrastructure']},
{n:'Criminal Defence',cat:'Disputes',d:64,ai:30,st:'augment',e:62,adv:98,pay:[34,48,66],
 tags:['courtroom','adversarial','clientfacing','publicgood','contentious'],
 day:'Police station attendance, case preparation, and advocacy. More time on your feet in court than almost any other area, on the lowest pay of any comparable specialism.',
 who:'Defence practices, legal aid providers, public defender offices.',piv:['Prosecution','Human Rights & Public Interest','Family']},
{n:'Prosecution',cat:'Disputes',d:62,ai:34,st:'augment',e:64,adv:95,pay:[36,50,64],
 tags:['courtroom','adversarial','publicgood','contentious'],
 day:'Charging decisions, disclosure obligations, and trial advocacy on behalf of the state — carrying a duty to the process itself, not just to winning.',
 who:'Prosecution services, regulatory enforcement bodies.',piv:['Criminal Defence','Public Law & Judicial Review','Competition / Antitrust']},
{n:'Employment',cat:'Regulatory',d:80,ai:46,st:'augment',e:70,adv:70,pay:[52,66,80],
 tags:['clientfacing','contentious','advisory','regulatory','courtroom'],
 day:'A genuine split between advisory work for employers and contentious tribunal work. Extremely deadline-sensitive — limitation periods here are among the shortest in law.',
 who:'Employers, unions, individuals, HR functions.',piv:['Human Rights & Public Interest','Commercial Litigation','Immigration']},
{n:'Family',cat:'Private Client',d:68,ai:40,st:'augment',e:58,adv:75,pay:[42,56,70],
 tags:['clientfacing','contentious','courtroom','publicgood'],
 day:'Financial remedy and children work, conducted with clients at the worst point of their lives. Emotionally demanding in a way the commercial areas are not.',
 who:'High street practices, specialist family sets, local authorities.',piv:['Private Client, Wills & Estates','Human Rights & Public Interest','Criminal Defence']},
{n:'Immigration',cat:'Public & Human Rights',d:84,ai:52,st:'amplify',e:56,adv:60,pay:[38,52,66],
 tags:['clientfacing','publicgood','regulatory','contentious'],
 day:'Applications, appeals and judicial review, against rules that change faster than almost any other area. High volume, high stakes for the individual.',
 who:'Specialist practices, NGOs, corporate mobility teams, government.',piv:['Human Rights & Public Interest','Public Law & Judicial Review','Employment']},
{n:'Personal Injury & Clinical Negligence',cat:'Disputes',d:62,ai:48,st:'compress',e:60,adv:80,pay:[40,55,72],
 tags:['clientfacing','contentious','quantitative','longrunning'],
 day:'Liability and quantum: medical records, expert evidence, and life-expectancy arithmetic. Heavily process-driven at the lower value end, deeply technical at the top.',
 who:'Claimant practices, insurers, NHS and health bodies.',piv:['Commercial Litigation','Healthcare & Life Sciences','Family']},
{n:'Real Estate / Property',cat:'Corporate & Finance',d:70,ai:66,st:'compress',e:68,adv:25,pay:[52,66,80],
 tags:['drafting','dealpace','advisory','clientfacing'],
 day:'Title investigation, leases, development agreements and registration. The most systematised area of practice, which is exactly why automation reaches it first.',
 who:'Developers, funds, occupiers, lenders, local authorities.',piv:['Construction & Infrastructure','Banking & Finance','Private Client, Wills & Estates']},
{n:'Construction & Infrastructure',cat:'Sector',d:78,ai:44,st:'augment',e:76,adv:70,pay:[62,78,90],
 tags:['contentious','technical','longrunning','drafting','international'],
 day:'Front-end contract drafting on major projects, then adjudication and arbitration when they go wrong — which, at scale, they usually do somewhere.',
 who:'Contractors, employers, engineers, funders, governments.',piv:['International Arbitration','Energy & Natural Resources','Real Estate / Property']},
{n:'Energy & Natural Resources',cat:'Sector',d:80,ai:40,st:'augment',e:82,adv:45,pay:[68,84,94],
 tags:['international','technical','dealpace','regulatory','advisory'],
 day:'Project development, offtake and concession agreements, and regulatory work across jurisdictions where the state is usually a counterparty.',
 who:'Majors, developers, state entities, multilateral lenders.',piv:['Environmental & Climate','International Arbitration','Construction & Infrastructure']},
{n:'Environmental & Climate',cat:'Sector',d:88,ai:38,st:'amplify',e:78,adv:55,pay:[56,72,86],
 tags:['regulatory','publicgood','technical','contentious','international'],
 day:'Permitting and compliance, climate disclosure obligations, and a fast-growing litigation practice suing governments and companies over emissions.',
 who:'Corporates, NGOs, regulators, investors, funds.',piv:['Public Law & Judicial Review','Energy & Natural Resources','Human Rights & Public Interest']},
{n:'Intellectual Property — Patents',cat:'IP & Technology',d:82,ai:46,st:'augment',e:92,adv:60,pay:[70,85,95],
 tags:['science','technical','contentious','international','quantitative'],
 day:'Prosecution and enforcement of patents. Almost uniquely, this area gates on a science or engineering degree before you touch the law at all.',
 who:'Pharma, semiconductors, engineering groups, patent offices, NPEs.',piv:['Healthcare & Life Sciences','Technology, Data & Privacy','Commercial Litigation']},
{n:'Trade Marks & Brand',cat:'IP & Technology',d:70,ai:60,st:'compress',e:74,adv:45,pay:[54,68,82],
 tags:['creative','regulatory','international','advisory'],
 day:'Clearance searches, registration strategy across jurisdictions, oppositions and enforcement against counterfeiting.',
 who:'Consumer brands, luxury groups, media companies, IP offices.',piv:['Sports, Media & Entertainment','Intellectual Property — Patents','Technology, Data & Privacy']},
{n:'Technology, Data & Privacy',cat:'IP & Technology',d:92,ai:50,st:'amplify',e:76,adv:30,pay:[64,80,92],
 tags:['technical','regulatory','advisory','international','drafting'],
 day:'Data protection compliance, cross-border transfer structures, technology contracts, and incident response when something leaks.',
 who:'Technology companies, regulators, every large corporate with customer data.',piv:['AI & Algorithmic Regulation','Competition / Antitrust','Intellectual Property — Patents']},
{n:'AI & Algorithmic Regulation',cat:'IP & Technology',d:95,ai:44,st:'amplify',e:80,adv:30,pay:[66,82,93],
 tags:['technical','regulatory','advisory','international'],
 day:'Advising on model governance, liability allocation, training-data provenance and emerging statutory regimes — an area that essentially did not exist a decade ago.',
 who:'AI developers, deployers, regulators, standards bodies.',piv:['Technology, Data & Privacy','Intellectual Property — Patents','Competition / Antitrust']},
{n:'Public Law & Judicial Review',cat:'Public & Human Rights',d:72,ai:36,st:'augment',e:82,adv:80,pay:[48,64,80],
 tags:['courtroom','adversarial','publicgood','regulatory','contentious'],
 day:'Challenging the lawfulness of government decisions on very short deadlines. Constitutionally the most interesting litigation there is, and often the least lucrative.',
 who:'Claimant sets, government legal services, NGOs, regulators.',piv:['Human Rights & Public Interest','Environmental & Climate','Immigration']},
{n:'Human Rights & Public Interest',cat:'Public & Human Rights',d:66,ai:32,st:'augment',e:80,adv:75,pay:[30,44,60],
 tags:['publicgood','adversarial','international','courtroom','contentious'],
 day:'Strategic litigation, international mechanisms and advocacy. The hardest area to enter relative to what it pays, and the one people are most determined to enter anyway.',
 who:'NGOs, international organisations, specialist sets, UN bodies.',piv:['Public Law & Judicial Review','Immigration','Criminal Defence']},
{n:'Private Client, Wills & Estates',cat:'Private Client',d:74,ai:56,st:'augment',e:64,adv:30,pay:[52,68,84],
 tags:['clientfacing','advisory','quantitative','international','drafting'],
 day:'Succession planning, trusts, and cross-border estate structuring. Long relationships, discreet work, and a client base that is ageing and transferring enormous wealth.',
 who:'Private banks, family offices, trust companies, individuals.',piv:['Tax','Family','Real Estate / Property']},
{n:'Shipping, Aviation & Trade',cat:'Sector',d:68,ai:42,st:'augment',e:80,adv:60,pay:[64,80,92],
 tags:['international','contentious','technical','dealpace'],
 day:'Asset finance, charterparties, casualty response and sanctions compliance — one of the most genuinely international practices, working across time zones by necessity.',
 who:'Shipowners, charterers, P&I clubs, airlines, lessors.',piv:['International Arbitration','Banking & Finance','Energy & Natural Resources']},
{n:'Healthcare & Life Sciences',cat:'Sector',d:84,ai:44,st:'amplify',e:84,adv:40,pay:[66,82,93],
 tags:['science','regulatory','technical','advisory','international'],
 day:'Clinical trial regulation, marketing authorisations, pricing and reimbursement, and product liability. Sits at the intersection of the most regulated industry and the fastest-moving science.',
 who:'Pharmaceutical and device companies, regulators, health systems.',piv:['Intellectual Property — Patents','Technology, Data & Privacy','Personal Injury & Clinical Negligence']},
{n:'Sports, Media & Entertainment',cat:'Sector',d:64,ai:54,st:'augment',e:78,adv:50,pay:[50,66,82],
 tags:['creative','clientfacing','contentious','international','negotiation'],
 day:'Rights licensing, talent contracts, image rights, regulatory disputes before sporting tribunals, and defamation work. Glamorous from outside, contract-heavy from inside.',
 who:'Broadcasters, clubs, governing bodies, studios, agencies.',piv:['Trade Marks & Brand','Commercial Litigation','Technology, Data & Privacy']}
];
const PAYBAND=v=>v>=85?'Very high':v>=70?'High':v>=55?'Upper middle':v>=42?'Middle':'Modest';
const STANCE={amplify:['Amplifies','g','Demand for the work grows because the tooling makes more of it viable.'],
  augment:['Augments','bl','The tooling speeds up preparation, but the judgement at the core is unaffected.'],
  compress:['Compresses','r','The routine volume that funded junior training is shrinking fastest here.']};

/* ---------- AI EXPOSURE BY TASK ---------- */
const AITASK=[
{t:'First-pass document review',x:92,st:'compress',n:'The clearest case of displacement anywhere in legal work. This was the training ground for a generation of juniors, and it is disappearing fastest.'},
{t:'E-disclosure / e-discovery',x:88,st:'compress',n:'Predictive coding was accepted by courts years before generative models arrived. The technology is mature and the case law endorsing it already exists.'},
{t:'Summarising judgments',x:86,st:'amplify',n:'Reliable enough to be genuinely useful, and it makes reading more authorities feasible — so people read more, not less.'},
{t:'Legal research — settled question',x:84,st:'amplify',n:'Fast and mostly right on well-trodden ground. The failure mode is fabricated citations, which has already produced sanctions in several jurisdictions.'},
{t:'Standard contract drafting',x:82,st:'compress',n:'NDAs, standard terms, simple leases. Where the document is essentially a form, the value of drafting it was always low.'},
{t:'Due diligence review',x:80,st:'compress',n:'Extraction and flagging against a checklist is close to solved. Deciding what the flag means for the deal is not.'},
{t:'Contract review against a playbook',x:78,st:'augment',n:'Excellent at finding deviations from a standard position. Cannot tell you which deviations you should actually accept.'},
{t:'Compliance monitoring',x:66,st:'amplify',n:'Continuous monitoring at a scale nobody could staff manually — which has increased demand for lawyers to design and defend the systems.'},
{t:'Bespoke contract drafting',x:52,st:'augment',n:'Fine on structure and boilerplate, weak on the clause that allocates the risk the parties are actually arguing about.'},
{t:'Drafting pleadings',x:48,st:'augment',n:'Can produce a competent shape. Selecting the causes of action and the theory of the case remains the hard, valuable part.'},
{t:'Legal research — novel question',x:44,st:'augment',n:'Where there is no settled answer, models tend to produce a confident synthesis of the nearest settled thing. That is precisely the wrong output.'},
{t:'Negotiation strategy',x:30,st:'augment',n:'Useful for modelling positions and preparing for objections. Reading which concession the other side actually needs is not in the training data.'},
{t:'Client interviewing',x:26,st:'augment',n:'Clients frequently do not know what is relevant, or say something different from what happened. Extracting the real facts is a human skill.'},
{t:'Judgment writing',x:22,st:'augment',n:'Several jurisdictions have issued judicial guidance permitting assisted drafting while requiring the judge to own every word. The legitimacy problem is the constraint, not the capability.'},
{t:'Risk judgement on instructions',x:20,st:'augment',n:'Advising a client to accept commercial risk is a matter of professional responsibility. It cannot be delegated to a system that carries none.'},
{t:'Negotiation itself',x:18,st:'augment',n:'Real-time, adversarial, relational. The parts that matter happen between the drafts.'},
{t:'Oral advocacy',x:8,st:'augment',n:'Responding to a judge who has just cut across your argument with a question you did not anticipate. Essentially untouched.'},
{t:'Cross-examination',x:6,st:'augment',n:'The least exposed task in the profession. It depends entirely on reading a person in the moment and adapting.'}
];

/* ---------- AI exposure by profession ---------- */
const PROFESSIONS=[
{r:'Legal secretary / typist',x:88,st:'compress',mix:'Dictation, formatting, filing, correspondence',
 n:'Almost every core task is generation or formatting, and the work was already shrinking before generative models arrived. The role that survives is the one that becomes case management rather than document production.'},
{r:'Document review contractor',x:86,st:'compress',mix:'First-pass review, coding for privilege and relevance',
 n:'The most exposed legal job in existence. Predictive coding was already accepted by courts before generative models; this is displacement that has largely happened rather than displacement to come.'},
{r:'Conveyancer',x:74,st:'compress',mix:'Title checks, standard forms, searches, routine correspondence',
 n:'Highly systematised and largely form-driven, which is exactly what automates well. What resists is the judgement call when a search comes back wrong and someone has to decide whether the deal still works.'},
{r:'Paralegal',x:70,st:'compress',mix:'Bundling, chronologies, research summaries, disclosure',
 n:'The bulk of the day is preparation rather than judgement. The paralegals who thrive move toward client contact and case management — the parts that require someone to be accountable.'},
{r:'Junior associate (1–3 years)',x:64,st:'compress',mix:'Due diligence, first drafts, research memos, disclosure review',
 n:'The profession’s real problem sits here. The tasks being automated are precisely the ones juniors learned judgement on, and nobody has yet answered how you train a senior lawyer without them.'},
{r:'In-house compliance officer',x:58,st:'amplify',mix:'Monitoring, policy drafting, training, reporting',
 n:'Automation increases the volume of monitoring an organisation can do, which increases the amount of work requiring a human to interpret and defend it. Demand grows rather than shrinks.'},
{r:'Legal researcher / knowledge lawyer',x:56,st:'amplify',mix:'Research, current awareness, precedent maintenance',
 n:'Research got faster, so more of it gets done. The value moved from finding the authority to knowing which authority is load-bearing and which is decoration.'},
{r:'Tax adviser',x:52,st:'amplify',mix:'Structuring, computation, filings, advisory memos',
 n:'Computation automates well; structuring does not. And every automated filing eventually needs someone who can defend the position to a revenue authority that disagrees.'},
{r:'Corporate / transactional lawyer',x:50,st:'augment',mix:'Drafting, negotiation, diligence oversight, closing management',
 n:'Drafting speeds up substantially, but the value was never in producing the words. It is in knowing which clause the other side will actually fight over and what to trade for it.'},
{r:'In-house counsel',x:44,st:'augment',mix:'Risk advice, contract review, escalation, board reporting',
 n:'Reviewing more contracts faster does not reduce the need for someone to own the risk decision. Accountability cannot be delegated to a system that carries none.'},
{r:'Notary (civil law systems)',x:42,st:'augment',mix:'Authentication, deeds, succession, registration',
 n:'Drafting automates; the notarial function does not, because the whole point is a specific accountable person attesting that this happened in front of them.'},
{r:'Family lawyer',x:34,st:'augment',mix:'Client interviewing, negotiation, court advocacy, drafting orders',
 n:'The documents are formulaic and the work is not. Most of the job is managing people at the worst moment of their lives, which is not a text-generation problem.'},
{r:'Solicitor advocate / litigator',x:32,st:'augment',mix:'Case strategy, pleadings, disclosure, hearings',
 n:'Preparation compresses hard; strategy and advocacy do not. Choosing the theory of the case is the part that decides outcomes and the part models are worst at.'},
{r:'Criminal defence lawyer',x:26,st:'augment',mix:'Police station attendance, client care, cross-examination, plea advice',
 n:'Among the least exposed roles in law, and among the worst paid — which tells you that exposure to automation and market reward are not the same axis at all.'},
{r:'Barrister / advocate',x:22,st:'augment',mix:'Advisory opinions, drafting, oral advocacy, cross-examination',
 n:'The written work compresses; the courtroom does not. Responding to a judge who has just cut across your argument is close to the purest untouched skill in the profession.'},
{r:'Mediator / arbitrator',x:18,st:'augment',mix:'Facilitating settlement, managing parties, writing awards',
 n:'The job is reading a room and making people feel heard enough to move. Award drafting speeds up; nothing else does.'},
{r:'Judge',x:16,st:'augment',mix:'Reading, hearings, fact-finding, judgment writing',
 n:'Several jurisdictions permit assisted drafting while requiring the judge to own every word. The constraint is legitimacy rather than capability — we do not accept decisions from something that cannot be held responsible.'}];

/* ---------- QUALIFICATION ROUTES ---------- */
const QROUTE=[
{iso:'GBR',n:'England & Wales',yrs:'5–6',cost:4,
 steps:['Degree in any subject','SQE1 — functioning legal knowledge','SQE2 — practical legal skills','Two years qualifying work experience','Admission as a solicitor'],
 alt:'Bar route: Bar Practice Course → one-year pupillage → tenancy as a barrister.',
 gate:'No law degree required. The SQE replaced the LPC route in 2021.',
 note:'The split profession is the defining feature: solicitors and barristers qualify separately and do largely different work. Pupillage remains one of the most competitive entry points in any profession anywhere.'},
{iso:'USA',n:'United States',yrs:'7',cost:5,
 steps:['Four-year bachelor\'s degree in any subject','LSAT','Three-year Juris Doctor','State bar examination','Character and fitness review'],
 alt:'A handful of states still permit law office study in place of law school.',
 gate:'Law is a graduate degree only. There is no undergraduate law degree.',
 note:'The longest and most expensive common route in the world, and admission is state by state rather than national. Debt loads materially shape which practice areas graduates can afford to enter.'},
{iso:'DEU',n:'Germany',yrs:'7–8',cost:1,
 steps:['University law studies, roughly four to five years','First State Examination','Two-year Referendariat across courts, prosecution, administration and private practice','Second State Examination','Qualification as Volljurist'],
 alt:'The same qualification opens judge, prosecutor, notary and practice — a single unified path.',
 gate:'Both state examinations are set and marked by the state, not the universities.',
 note:'Uniquely, the qualification is for the whole legal profession at once: you only choose between judge, prosecutor and advocate after passing. Tuition is nominal, but the examinations are notoriously severe.'},
{iso:'FRA',n:'France',yrs:'6–7',cost:2,
 steps:['Licence en droit, three years','Master 1 in law','CRFPA entrance examination','Eighteen months at a regional bar school (EFB)','CAPA certificate and admission'],
 alt:'Separate competitive routes lead to the magistrature (ENM) and the notariat.',
 gate:'The CRFPA is the real filter, with pass rates that make it the decisive step.',
 note:'Judges are not drawn from the bar — they train separately at the École nationale de la magistrature from the start. That structural separation is characteristic of civil law systems.'},
{iso:'IND',n:'India',yrs:'5',cost:2,
 steps:['Five-year integrated BA LLB straight from school, or three-year LLB after a degree','All India Bar Examination','Enrolment with a State Bar Council'],
 alt:'Judicial service examinations offer a direct route to the lower judiciary.',
 gate:'CLAT determines entry to the national law universities, which dominate elite recruitment.',
 note:'Among the fastest routes into practice anywhere, and one of the youngest bars. Advocates enjoy rights of audience at all levels of court from the outset.'},
{iso:'MAR',n:'Morocco',yrs:'5–6',cost:2,
 steps:['Licence en droit','Bar entrance examination','Two-year stage under a supervising advocate','Admission to the roll'],
 alt:'The magistrature is entered through the Institut Supérieur de la Magistrature.',
 gate:'Legal education is conducted in Arabic and French, and practice requires both.',
 note:'A mixed system in practice as well as theory: commercial matters follow French-derived codes while personal status follows the codified Moudawana, so practitioners work across two legal logics.'},
{iso:'JPN',n:'Japan',yrs:'6–8',cost:4,
 steps:['Undergraduate degree','Two to three years at a professional law school','National Bar Examination','One year at the Legal Training and Research Institute','Qualification as bengoshi'],
 alt:'A preliminary qualifying examination allows the law school stage to be bypassed.',
 gate:'The bar examination was historically among the hardest in the world, with pass rates in the low single digits before reforms.',
 note:'Judges, prosecutors and advocates all pass through the same Institute before dividing — a training design that deliberately builds shared professional culture across the three roles.'},
{iso:'BRA',n:'Brazil',yrs:'5',cost:3,
 steps:['Five-year bacharel em direito','OAB examination, two phases','Registration with the Ordem dos Advogados do Brasil'],
 alt:'Public competitions (concursos) lead to the judiciary, prosecution and public defence.',
 gate:'The OAB examination is national and mandatory regardless of where you studied.',
 note:'Brazil has more law schools than almost any country on earth and one of the world\'s largest bars. The concurso system means the judiciary is entered by examination, not by appointment from practice.'},
{iso:'ZAF',n:'South Africa',yrs:'5–6',cost:2,
 steps:['Four-year LLB','Practical vocational training or articles of clerkship','Board examinations','Admission by the High Court'],
 alt:'The advocates\' profession requires pupillage and admission to a Bar.',
 gate:'Legal Practice Council regulates both branches under a unified framework since 2014.',
 note:'A split profession like England\'s, operating over a hybrid legal system — practitioners work with Roman-Dutch principles, English procedure and recognised customary law in the same career.'},
{iso:'CHN',n:'China',yrs:'5–6',cost:2,
 steps:['Undergraduate law degree','National Unified Legal Profession Qualification Examination','One-year internship at a law firm','Practising licence'],
 alt:'The same examination gates judges, prosecutors and notaries.',
 gate:'One of the largest and most competitive single examinations in the world by candidate volume.',
 note:'The unified examination introduced in 2018 replaced separate tracks, consolidating entry to every legal role behind one gate.'},
{iso:'CAN',n:'Canada',yrs:'6–7',cost:4,
 steps:['Undergraduate degree','Three-year JD or LLB','Articling placement of roughly ten months, or a practice programme','Bar admission by province'],
 alt:'Quebec follows a civil law path with its own notarial profession.',
 gate:'Admission is provincial; the National Committee on Accreditation handles foreign qualifications.',
 note:'The articling bottleneck is the recurring structural problem — placement supply has not kept pace with graduate numbers, which is why alternative practice programmes were introduced.'},
{iso:'AUS',n:'Australia',yrs:'5–6',cost:3,
 steps:['LLB or JD covering the prescribed academic areas','Practical Legal Training','Admission to the Supreme Court of a state or territory','Supervised practice, usually two years'],
 alt:'The bar is entered separately by reading and a bar examination in most states.',
 gate:'The eleven prescribed academic areas — the Priestley 11 — are mandatory content.',
 note:'Admission is national in effect through mutual recognition, and the fused-then-split structure varies by state, with some jurisdictions maintaining a formally independent bar and others not.'}
,
{iso:'IRL',n:'Ireland',yrs:'5–6',cost:3,
 steps:['Degree in any subject','FE-1 entrance examinations','Professional Practice Course at Blackhall Place','Two-year training contract','Admission as a solicitor'],
 alt:'The barrister route runs through King’s Inns and a year of devilling.',
 gate:'The FE-1s are eight separate examinations sat before training begins.',
 note:'A small, tightly held profession where the training contract is the real bottleneck. Barristers here “devil” — shadow a senior unpaid for a year — which openly favours those who can afford to.'},
{iso:'NLD',n:'Netherlands',yrs:'7',cost:2,
 steps:['Bachelor and master in Dutch law','Traineeship with a law firm for three years','Beroepsopleiding Advocaten alongside the traineeship','Registration as advocaat'],
 alt:'The judiciary is entered through a separate selective training programme.',
 gate:'The master’s degree must be in Dutch law specifically — foreign degrees require conversion.',
 note:'Trainees carry real cases from early on under a supervising patroon, which front-loads responsibility more than most systems.'},
{iso:'ESP',n:'Spain',yrs:'6',cost:2,
 steps:['Grado en Derecho, four years','Máster de Acceso a la Abogacía','State examination','Registration with a Colegio de Abogados'],
 alt:'Judges and prosecutors are selected by a famously long oposición examination.',
 gate:'The access master’s became compulsory in 2011; before that the degree alone sufficed.',
 note:'The oposición for the judiciary is measured in years of memorising the code aloud — a route that is either the purest meritocracy or the narrowest, depending on who you ask.'},
{iso:'ITA',n:'Italy',yrs:'7',cost:2,
 steps:['Laurea magistrale in giurisprudenza, five years','Eighteen-month praticantato with a lawyer','Esame di Stato — written and oral','Enrolment with the Ordine degli Avvocati'],
 alt:'The magistratura is entered by a separate national concorso.',
 gate:'The state examination has historically had low pass rates and regional variation.',
 note:'Italy has one of the largest bars in Europe by head count, and the practice period is unpaid or barely paid, which shapes who completes it.'},
{iso:'NGA',n:'Nigeria',yrs:'6',cost:2,
 steps:['Five-year LLB','Nigerian Law School, one year','Bar Part II examinations','Call to the Bar'],
 alt:'The same call admits you as both barrister and solicitor.',
 gate:'Law School is compulsory and centrally run, with limited places.',
 note:'A fused profession: every Nigerian lawyer is called as barrister and solicitor together, unlike the English split it descends from.'},
{iso:'KEN',n:'Kenya',yrs:'6',cost:2,
 steps:['Four-year LLB','Advocates Training Programme at the Kenya School of Law','Bar examinations','Pupillage for six months','Admission as an advocate'],
 alt:'Paralegal accreditation offers a shorter route into legal support work.',
 gate:'The Kenya School of Law controls admission to the programme.',
 note:'Bar examination pass rates have been a running controversy, and the resit backlog is a real feature of the route rather than a footnote.'},
{iso:'MEX',n:'Mexico',yrs:'5',cost:2,
 steps:['Licenciatura en Derecho, four to five years','Servicio social','Professional examination or thesis','Cédula profesional issued by the education ministry'],
 alt:'The judiciary is entered through the Escuela Federal de Formación Judicial.',
 gate:'Unusually, there is no separate bar examination — the degree and the cédula suffice.',
 note:'One of the shortest routes to practice anywhere, and the absence of a bar exam is a live reform debate.'},
{iso:'ARG',n:'Argentina',yrs:'5–6',cost:1,
 steps:['Abogacía degree at a public or private university','Registration with a provincial colegio de abogados'],
 alt:'Judicial careers begin as a clerk and progress internally.',
 gate:'Public universities charge no tuition, which makes this among the cheapest routes in the world.',
 note:'Free public legal education produces a very large bar. The University of Buenos Aires alone graduates lawyers in numbers most countries produce nationally.'},
{iso:'POL',n:'Poland',yrs:'8',cost:2,
 steps:['Five-year master’s in law','Competitive entrance examination for the aplikacja','Three-year apprenticeship as adwokat or radca prawny','Final professional examination'],
 alt:'Judges and prosecutors train at the National School of Judiciary in Kraków.',
 gate:'The entrance examination to the apprenticeship is the decisive filter.',
 note:'Poland has two separate advocate professions — adwokat and radca prawny — whose scopes have converged almost entirely, a distinction now largely historical.'},
{iso:'SWE',n:'Sweden',yrs:'8',cost:1,
 steps:['Juristexamen, four and a half years','Practical legal work for three years','Advokatexamen','Membership of the Swedish Bar Association'],
 alt:'Notarietjänstgöring — a court clerkship — is the traditional route towards the judiciary.',
 gate:'Only members of the Bar may call themselves advokat, but you may practise law without membership.',
 note:'Unusually, the protected title is narrower than the activity: much legal work is done by lawyers who are not advokater at all.'},
{iso:'SGP',n:'Singapore',yrs:'5',cost:4,
 steps:['Approved law degree','Part B bar examinations','Practice training contract of six months','Admission to the Bar'],
 alt:'Foreign-qualified lawyers sit Part A before Part B.',
 gate:'The list of approved overseas universities is short and periodically revised.',
 note:'A deliberately tight pipeline: the number of approved degrees is managed centrally to match the profession’s size to demand.'},
{iso:'EGY',n:'Egypt',yrs:'5',cost:1,
 steps:['Four-year law degree','Registration with the Lawyers Syndicate as a trainee','Two years under supervision','Progressive rights of audience through the court levels'],
 alt:'The judiciary is entered from graduation through a separate appointment process.',
 gate:'Rights of audience expand with years of practice rather than by examination.',
 note:'Seniority rather than examination governs which courts you may appear in — you earn the Court of Cassation by time served.'}];

/* ---------- FIT FINDER ---------- */
const FITQ=[
{q:'Where would you rather spend a Tuesday?',
 o:[['On your feet in a hearing',{courtroom:4,adversarial:3}],
    ['In a negotiation room',{negotiation:4,dealpace:2,clientfacing:1}],
    ['Drafting alone with the door shut',{drafting:4,technical:1}],
    ['In front of a client, working out what they actually need',{clientfacing:4,advisory:2}]]},
{q:'How do you feel about conflict?',
 o:[['I am energised by it',{adversarial:4,contentious:3,courtroom:2}],
    ['Comfortable, but it is not the appeal',{contentious:2,negotiation:1}],
    ['I would rather build something than fight over it',{drafting:2,advisory:3,dealpace:1}]]},
{q:'Numbers or words?',
 o:[['Strongly numbers',{quantitative:4,finance:2}],['Comfortable with both',{quantitative:1,drafting:1}],
    ['Strongly words',{drafting:3,creative:2,courtroom:1}]]},
{q:'What do you most want out of the work?',
 o:[['Money',{_pay:1}],['Intellectual difficulty',{technical:3,quantitative:2,_hardentry:1}],
    ['To help people who need it',{publicgood:5,clientfacing:2}],['To build and close things',{dealpace:4,negotiation:2}]]},
{q:'What is your background?',
 o:[['Science, engineering or medicine',{science:5,technical:3}],
    ['Finance, economics or maths',{finance:4,quantitative:4}],
    ['Humanities, languages or politics',{creative:2,publicgood:2,drafting:2,international:1}],
    ['Nothing in particular yet',{}]]},
{q:'How do you feel about how much of the work AI can already do?',
 o:[['I want work models cannot touch',{_lowai:1}],
    ['I want to work on the regulation of it',{technical:3,regulatory:4}],
    ['I would rather use it heavily and move faster',{_highai:1}]]},
{q:'What pace suits you?',
 o:[['High-pressure deals with hard closing dates',{dealpace:5,negotiation:2}],
    ['Long-running matters that unfold over years',{longrunning:4,adversarial:2}],
    ['Steady advisory work with repeat clients',{advisory:4,clientfacing:2}]]},
{q:'How international do you want it?',
 o:[['Genuinely cross-border, multiple time zones',{international:5}],
    ['Domestic is fine',{}],['Whatever the work requires',{international:1}]]}
];

/* ---------- METHOD ---------- */
const METRICS=[
['Rule of law (headline)','0–100 composite of how far a jurisdiction adheres to the rule of law.','Calibrated to the World Justice Project Rule of Law Index, rescaled from 0–1.','sourced'],
['Dimension breakdown','Judicial independence, absence of corruption, fundamental rights, order and security, civil and criminal justice.','Modelled decomposition consistent with the headline figure. Not published sub-scores.','modelled'],
['Composite Legal Integrity Index','Unweighted mean of the six dimensions above.','Derived from the dimension breakdown.','derived'],
['Incarceration rate','Prisoners per 100,000 population, including pre-trial detainees.','Approximated from World Prison Brief reporting.','sourced'],
['Homicide rate','Intentional homicides per 100,000 population.','World Bank Open Data, indicator VC.IHR.PSRC.P5 — pulled live.','measured'],
['Population','Total population.','World Bank Open Data, indicator SP.POP.TOTL — pulled live.','measured'],
['Death penalty status','Abolished, abolished in practice, exceptional crimes only, or retained.','Standard Amnesty International classification.','sourced'],
['Legal tradition','Common, civil, religious, mixed or socialist.','Conventional comparative-law classification. Contested at the edges.','editorial'],
['Trial mode and procedure','Jury, lay judges or professional bench; adversarial, inquisitorial or mixed.','Constitutional and procedural codes.','sourced'],
['Constitution year','Year of the currently operative constitution.','Constitutional texts. Reflects the current instrument, not amendments.','sourced'],
['Apex court data','Composition, term, appointment method, review power, output.','Court statutes, annual reports and published caseload figures.','sourced'],
['Court output series','Annual volume of decisions or filings over ten years.','Indicative series showing direction and order of magnitude, not audited counts.','editorial'],
['Case summaries','What happened and why the decision matters.','Compressed from the judgments themselves. Simplified for teaching.','editorial'],
['Practice area demand','0–100 read on hiring direction and structural growth drivers.','Editorial composite.','editorial'],
['Practice area AI exposure','0–100 estimate of the share of core work current models can produce.','Editorial, scored on the nature of the output rather than the job title.','editorial'],
['AI stance','Whether exposure amplifies, augments or compresses the work.','Editorial judgement.','editorial'],
['Pay bands','Entry, mid and senior pay as a 0–100 index, not currency.','Deliberately index-only: currency figures would imply precision across jurisdictions that does not exist.','editorial'],
['Qualification routes','Steps, duration and gates to qualify in each jurisdiction.','Published regulator and bar requirements.','sourced'],
['Case strength / sentencing / damages models','Structured calculators over your own inputs.','Derived from the inputs you set. Not predictions of any real outcome.','derived'],
['Fit shortlist','Ranking of practice areas against your stated preferences.','Derived from your answers and the area tag vectors.','derived'],
['Ticker movement','The drifting figures in the top strip.','Simulated. Nothing behind them updates in real time.','forecast']
];
const LIMITS=[
['The sub-dimension scores are modelled, not measured','Only the headline rule-of-law figure is calibrated to a published index. The six-dimension breakdown is constructed to be consistent with it and to show the shape of a system\'s profile. Do not cite an individual dimension as a finding.'],
['The sample is still small','The correlation matrix runs on about a hundred observations with partly modelled inputs. It is a tool for interrogating the shape of the data, not for establishing relationships.'],
['Legal tradition is a contested classification','Almost every system is mixed to some degree. Labelling Canada mixed and Australia common law is defensible; so is labelling both differently. The category tells you how a system reasons, not how well it works.'],
['Incarceration figures are not comparable across systems','Some jurisdictions count pre-trial detainees in the prison population and some do not. Administrative detention, immigration detention and military facilities are treated inconsistently.'],
['The 2026 rulings are recent and compressed','Several entries describe decisions handed down within months. Read the court\'s own published opinion before relying on any characterisation here.'],
['Practice area scores are editorial throughout','There is no BLS equivalent for legal practice areas. The ordering is defensible and the individual numbers are directional. Treat the direction as the useful part.'],
['Pay is an index, not money','Comparing lawyer pay across jurisdictions in currency requires assumptions about tax, cost of living, hours and firm tier that would make the result misleading. The index compares areas within a market, not markets against each other.'],
['AI exposure has no authoritative dataset','Nobody has measured this properly. The task-level ordering reflects the nature of each output — cross-examination is genuinely less exposed than document review — but the numbers are judgement.'],
['Qualification routes simplify enormous variation','Every route listed has exceptions, transitional arrangements and jurisdiction-specific carve-outs. Check the regulator before making any decision.'],
['"Live" means two indicators','Homicide and population sync from the World Bank. Everything else is a curated snapshot, and the ticker movement is simulated outright.']
];
const VINTAGE=[
['Rule of law index','WJP 2025 edition','Annual, published each autumn'],
['Homicide and population','World Bank, most recent non-empty value','Continuous — re-pull with the sync button'],
['Incarceration rates','World Prison Brief, 2023–25 reporting','Rolling, by country'],
['Death penalty status','2025 classification','Annual'],
['Apex court composition','2026 standing','Reviewed each release'],
['Case law','Decisions to mid-2026','As handed down'],
['Practice areas and AI exposure','Editorial, revision A','Reviewed with each release'],
['Qualification routes','2026 requirements','Annual']
];
const SOURCES=[
['World Justice Project','Rule of Law Index 2025','Headline rule-of-law figures','worldjusticeproject.org'],
['World Bank','Open Data API (WDI)','Homicide rate, population — live','api.worldbank.org'],
['World Prison Brief','Institute for Crime & Justice Policy Research','Incarceration rates','prisonstudies.org'],
['Amnesty International','Global report on death sentences and executions','Capital punishment status','amnesty.org'],
['Courts themselves','Published judgments, statutes and annual reports','Case summaries, court composition and output','various'],
['Regulators and bars','Published admission requirements','Qualification routes','various']
];

/* ==================================================================
   13 · PRACTICE AREAS
   ================================================================== */
let paSort='d', paCat='', paQ='';
function areaColor(a){return a.st==='amplify'?'var(--green)':a.st==='augment'?'var(--blue)':'var(--red)'}
function renderAreas(){
  const cats=[...new Set(AREAS.map(a=>a.cat))];
  let rows=AREAS.filter(a=>(!paCat||a.cat===paCat)&&(!paQ||(a.n+a.cat+a.day+a.who+a.tags.join(' ')).toLowerCase().includes(paQ)));
  rows.sort((x,y)=> paSort==='n'?x.n.localeCompare(y.n): paSort==='pay'?y.pay[2]-x.pay[2]: y[paSort]-x[paSort]);
  const W=1160,H=520,pad=64;
  const px=v=>pad+(v/100)*(W-pad*2), py=v=>H-pad-(v/100)*(H-pad*2);
  // spread labels vertically so they never collide
  const placed=[];
  const pts=[...AREAS].sort((a,b)=>a.ai-b.ai).map(a=>{
    const x=px(a.ai), y=py(a.d);
    let ly=y-14, tries=0;
    while(placed.some(p=>Math.abs(p.x-x)<132&&Math.abs(p.y-ly)<17)&&tries++<22) ly-=17;
    placed.push({x,y:ly});
    const short=a.n.replace('Intellectual Property — ','IP: ').replace(' & ',' & ').slice(0,26);
    return `<g class="areapt" data-a="${esc(a.n)}">
      <line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${x.toFixed(1)}" y2="${(ly+4).toFixed(1)}"
        stroke="${areaColor(a)}" stroke-width="1" opacity=".4"/>
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(5+a.pay[2]/26).toFixed(1)}"
        fill="${areaColor(a)}" fill-opacity=".75" stroke="${areaColor(a)}" stroke-width="1.6"/>
      <text x="${x.toFixed(1)}" y="${ly.toFixed(1)}" class="areatx" text-anchor="middle">${esc(short)}</text>
      <title>${esc(a.n)} — demand ${a.d}, AI exposure ${a.ai}</title></g>`;
  }).join('');
  const quads=`
    <rect x="${pad}" y="${pad}" width="${(W-pad*2)/2}" height="${(H-pad*2)/2}" fill="var(--green)" opacity=".05"/>
    <rect x="${pad+(W-pad*2)/2}" y="${pad+(H-pad*2)/2}" width="${(W-pad*2)/2}" height="${(H-pad*2)/2}" fill="var(--red)" opacity=".05"/>
    <text x="${pad+14}" y="${pad+22}" class="quadlbl" fill="var(--green)">STRONG DEMAND · HARD TO AUTOMATE</text>
    <text x="${W-pad-14}" y="${H-pad-14}" class="quadlbl" text-anchor="end" fill="var(--red)">FLAT DEMAND · EASY TO AUTOMATE</text>`;
  $('#b-areas').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Twenty-nine areas of legal work, scored on demand, automation exposure, how hard they are to enter and what they pay. Start with the scatter plot to see the landscape, then open any card for what the work is actually like on an ordinary Tuesday.</p></div>
    
    <div class="ctl">
      <input type="search" id="paQ" placeholder="Search areas, tags, employers…" value="${esc(paQ)}">
      <div class="seg" id="paSortSeg">${[['d','Demand'],['ai','AI exposure'],['e','Entry bar'],['adv','Adversarial'],['pay','Pay'],['n','A–Z']]
        .map(([k,l])=>`<button data-s="${k}" class="${paSort===k?'on':''}">${l}</button>`).join('')}</div>
    </div>
    <div class="ctl" id="paChips"><button class="chip ${!paCat?'on':''}" data-c="">All ${AREAS.length}</button>
      ${cats.map(c=>`<button class="chip ${paCat===c?'on':''}" data-c="${esc(c)}">${esc(c)} · ${AREAS.filter(a=>a.cat===c).length}</button>`).join('')}</div>

    <div class="exh"><u>EXHIBIT A</u><h3>Demand against automation exposure</h3>
      <span>each dot is one area · bigger dot means better senior pay</span></div>
    <div class="howto" style="margin-bottom:16px"><b>What you are looking at</b>
      <p>Across the bottom: how much of the work current AI can already do. Up the side: how much demand there is
      for the work. So the <b style="color:var(--green)">top left</b> is where the leverage sits — plenty of work,
      hard to automate. The <b style="color:var(--red)">bottom right</b> is the squeeze. The size of each dot is
      what the work pays at senior level.</p></div>
    <div class="mapbox">
      <svg viewBox="0 0 ${W} ${H}" class="chart areachart" style="min-width:780px">
        ${quads}
        ${[0,25,50,75,100].map(p=>{const y=py(p),x=px(p);
          return `<line class="gl" x1="${pad}" y1="${y}" x2="${W-pad}" y2="${y}"></line>
            <line class="gl" x1="${x}" y1="${pad}" x2="${x}" y2="${H-pad}"></line>
            <text class="axl" x="${pad-10}" y="${y+3}" text-anchor="end">${p}</text>
            <text class="axl" x="${x}" y="${H-pad+18}" text-anchor="middle">${p}</text>`}).join('')}
        <text class="axl" x="${W/2}" y="${H-16}" text-anchor="middle" style="font-size:12px">HOW MUCH AI CAN ALREADY DO →</text>
        <text class="axl" x="20" y="${H/2}" text-anchor="middle" transform="rotate(-90 20 ${H/2})" style="font-size:12px">HOW MUCH DEMAND →</text>
        ${pts}</svg>
      <div class="legend">${Object.entries(STANCE).map(([k,v])=>
        `<span><i style="background:${k==='amplify'?'var(--green)':k==='augment'?'var(--blue)':'var(--red)'}"></i>${v[0]} — ${v[2].split('.')[0].toLowerCase()}</span>`).join('')}</div>
    </div>
    <div class="note">The top-left quadrant is where the leverage sits: strong demand, work models cannot yet produce.
      <b>AI &amp; Algorithmic Regulation</b>, <b>Environmental &amp; Climate</b> and <b>International Arbitration</b>
      all sit there for different reasons. The bottom-right — high exposure, flat demand — is where the routine
      volume that used to fund junior training is disappearing.</div>

    <div class="exh"><u>EXHIBIT B</u><h3>The areas</h3><span>click any card for the full read</span></div>
    <div class="grid g3">${rows.map(a=>`<div class="pa" data-a="${esc(a.n)}" style="border-left-color:${areaColor(a)}">
      <div class="cat">${esc(a.cat)}</div><h4>${esc(a.n)}</h4>
      <span class="tag ${STANCE[a.st][1]}">${STANCE[a.st][0]}</span>
      <div class="mini">
        <div><u>DEMAND</u><b style="color:${heat(a.d)}">${a.d}</b><div class="mbar"><i style="width:${a.d}%;background:${heat(a.d)}"></i></div></div>
        <div><u>AI EXPOSURE</u><b style="color:${heat(100-a.ai)}">${a.ai}</b><div class="mbar"><i style="width:${a.ai}%;background:${heat(100-a.ai)}"></i></div></div>
        <div><u>ENTRY BAR</u><b>${a.e}</b><div class="mbar"><i style="width:${a.e}%;background:var(--violet)"></i></div></div>
        <div><u>SENIOR PAY</u><b>${PAYBAND(a.pay[2])}</b><div class="mbar"><i style="width:${a.pay[2]}%;background:var(--brass)"></i></div></div>
      </div></div>`).join('')||'<div class="empty">NO MATCHES</div>'}</div>`;
  $('#rt-areas').textContent=`${rows.length} of ${AREAS.length}`;
  const q=$('#paQ'); q.oninput=()=>{paQ=q.value.toLowerCase().trim();renderAreas();
    const n=$('#paQ');n.focus();n.setSelectionRange(n.value.length,n.value.length)};
  $('#paChips').onclick=e=>{const c=e.target.closest('.chip');if(!c)return;paCat=c.dataset.c;renderAreas()};
  $('#paSortSeg').onclick=e=>{const b=e.target.closest('button');if(!b)return;paSort=b.dataset.s;renderAreas()};
  $$('#b-areas [data-a]').forEach(el=>el.onclick=()=>areaReport(el.dataset.a));
  $$('#b-areas .areapt').forEach(el=>el.onclick=()=>areaReport(el.dataset.a));
}
function areaReport(name){
  const a=AREAS.find(x=>x.n===name); if(!a)return;
  const rankD=[...AREAS].sort((x,y)=>y.d-x.d).findIndex(x=>x.n===name)+1;
  const rankA=[...AREAS].sort((x,y)=>x.ai-y.ai).findIndex(x=>x.n===name)+1;
  openModal(`<div class="mbox-h"><div>
    <div style="font-family:var(--mono);font-size:.64rem;color:var(--brass);letter-spacing:.18em">${esc(a.cat.toUpperCase())}</div>
    <h3 style="margin-top:5px">${esc(a.n)}</h3>
    <div style="margin-top:9px;display:flex;gap:6px;flex-wrap:wrap">
      <span class="tag ${STANCE[a.st][1]}">${STANCE[a.st][0]}</span>
      ${a.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>
    <button class="x" onclick="closeModal()">✕</button></div>
   <div class="mbox-b">
     <div class="spec">
       <div><u>Demand</u><b style="color:${heat(a.d)}">${a.d}</b></div>
       <div><u>Demand rank</u><b>${rankD} of ${AREAS.length}</b></div>
       <div><u>AI exposure</u><b style="color:${heat(100-a.ai)}">${a.ai}</b></div>
       <div><u>Least exposed rank</u><b>${rankA} of ${AREAS.length}</b></div>
       <div><u>Entry bar</u><b>${a.e}</b></div>
       <div><u>Adversarial intensity</u><b>${a.adv}</b></div>
     </div>
     <h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:9px">THE WORK</h4>
     <p style="color:var(--dim);font-size:.9rem;margin-bottom:18px">${esc(a.day)}</p>
     <h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:9px">PAY PROGRESSION</h4>
     <div class="dims" style="margin-bottom:18px">
       ${[['Entry',a.pay[0]],['Mid-level',a.pay[1]],['Senior',a.pay[2]]].map(([l,v])=>
        `<div class="dim"><u>${l}</u><div class="bar"><i style="width:${v}%;background:var(--brass)"></i></div>
         <b style="color:var(--brass)">${PAYBAND(v)}</b></div>`).join('')}</div>
     <p style="font-size:.8rem;color:var(--faint);margin-bottom:18px">Indexed 0–100 within the profession, deliberately
       not in currency — cross-jurisdiction pay comparison in money would imply a precision that does not exist.</p>
     <h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:9px">WHO HIRES</h4>
     <p style="color:var(--dim);font-size:.89rem;margin-bottom:18px">${esc(a.who)}</p>
     <h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:9px">MOVES ACROSS TO</h4>
     <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:18px">
       ${a.piv.map(p=>`<button class="chip" data-piv="${esc(p)}">${esc(p)} →</button>`).join('')}</div>
     <div class="note"><b>How automation lands here.</b> ${STANCE[a.st][2]}</div>
     <div class="disclaim" style="margin-top:16px"><b>Editorial scores.</b> Demand, AI exposure, entry bar and pay
       are a considered read, not measured data. Treat the ordering as the useful part.</div>
   </div>`);
  $$('#mbox [data-piv]').forEach(b=>b.onclick=()=>areaReport(b.dataset.piv));
}
window.areaReport=areaReport;

/* ==================================================================
   14 · AI EXPOSURE
   ================================================================== */
let aiView='task';
function renderAIsec(){
  const sorted=[...AITASK].sort((a,b)=>b.x-a.x);
  const pro=[...PROFESSIONS].sort((a,b)=>b.x-a.x);
  const avg=Math.round(mean(AITASK.map(t=>t.x)));
  const comp=AITASK.filter(t=>t.st==='compress').length;
  const W=1160,H=300,pad=44;
  const bw=(W-pad*2)/AREAS.length;
  const areaBars=[...AREAS].sort((a,b)=>b.ai-a.ai).map((a,i)=>
    `<g class="skybar" data-a="${esc(a.n)}"><title>${esc(a.n)}: ${a.ai}</title>
     <rect x="${pad+i*bw}" y="${H-pad-(a.ai/100)*(H-pad*2)}" width="${Math.max(bw-2,1)}"
       height="${(a.ai/100)*(H-pad*2)}" fill="${areaColor(a)}" fill-opacity=".8" rx="1"></rect>
     <text x="${pad+i*bw+bw/2}" y="${H-pad+10}" class="axl" text-anchor="end"
       transform="rotate(-55 ${pad+i*bw+bw/2} ${H-pad+10})" style="font-size:6px">${esc(a.n.split(' —')[0].slice(0,20))}</text></g>`).join('');
  $('#b-ai').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Automation does not replace jobs, it replaces tasks — so this is measured at the task level. Read the task list before the practice-area chart. The tasks tell you far more than the job titles, and they explain why the profession's real problem is that the work being automated is the work juniors learned on.</p></div>
    
    <div class="grid g4 mb2">
      <div class="panel"><div class="panel-b"><div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--faint)">MOST EXPOSED JOB</div>
        <div style="font-family:var(--serif);font-size:1.15rem;color:var(--red);margin-top:6px;line-height:1.2">${esc(pro[0].r)}</div>
        <div style="font-size:.78rem;color:var(--dim);margin-top:4px">${pro[0].x}/100 exposure</div></div></div>
      <div class="panel"><div class="panel-b"><div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--faint)">SAFEST JOB</div>
        <div style="font-family:var(--serif);font-size:1.15rem;color:var(--green);margin-top:6px;line-height:1.2">${esc(pro[pro.length-1].r)}</div>
        <div style="font-size:.78rem;color:var(--dim);margin-top:4px">${pro[pro.length-1].x}/100 exposure</div></div></div>
      <div class="panel"><div class="panel-b"><div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--faint)">MOST EXPOSED</div>
        <div style="font-family:var(--serif);font-size:1.15rem;color:var(--red);margin-top:6px;line-height:1.2">${esc(sorted[0].t)}</div>
        <div style="font-size:.78rem;color:var(--dim);margin-top:4px">${sorted[0].x}/100</div></div></div>
      <div class="panel"><div class="panel-b"><div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--faint)">LEAST EXPOSED</div>
        <div style="font-family:var(--serif);font-size:1.15rem;color:var(--green);margin-top:6px;line-height:1.2">${esc(sorted[sorted.length-1].t)}</div>
        <div style="font-size:.78rem;color:var(--dim);margin-top:4px">${sorted[sorted.length-1].x}/100</div></div></div>
    </div>

    <div class="ctl" id="aiSeg"><div class="seg">
      <button data-v="task" class="${aiView==='task'?'on':''}">By task</button>
      <button data-v="job" class="${aiView==='job'?'on':''}">By profession</button></div></div>

    ${aiView==='job'?`
    <div class="exh"><u>EXHIBIT A</u><h3>Which jobs are exposed</h3>
      <span>a role is just a bundle of tasks — this is that bundle scored</span></div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${pro.map(p=>`<div class="panel"><div class="panel-b" style="padding:15px 18px">
        <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-bottom:7px">
          <b style="font-size:.96rem;flex:1;min-width:190px">${esc(p.r)}</b>
          <span class="tag ${STANCE[p.st][1]}">${STANCE[p.st][0]}</span>
          <b style="font-family:var(--mono);font-size:.98rem;color:${heat(100-p.x)};width:34px;text-align:right">${p.x}</b></div>
        <div class="bar" style="margin-bottom:9px"><i style="width:${p.x}%;background:${heat(100-p.x)}"></i></div>
        <div style="font-family:var(--mono);font-size:.62rem;letter-spacing:.08em;color:var(--faint);margin-bottom:7px">
          MOST OF THE DAY: ${esc(p.mix.toUpperCase())}</div>
        <div style="font-size:.87rem;color:var(--dim)">${esc(p.n)}</div></div></div>`).join('')}
    </div>
    <div class="note"><b>Read the two views together.</b> A profession's score is just the weighted average of the
      tasks it is made of. That is why a criminal defence lawyer and a document review contractor sit at opposite
      ends despite both being "lawyers" — they spend their days doing almost entirely different things.</div>
    `:`
    <div class="exh"><u>EXHIBIT A</u><h3>Task-level exposure</h3><span>because automation operates on tasks, not job titles</span></div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${sorted.map(t=>`<div class="panel"><div class="panel-b" style="padding:14px 17px">
        <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-bottom:8px">
          <b style="font-size:.92rem;flex:1;min-width:180px">${esc(t.t)}</b>
          <span class="tag ${STANCE[t.st][1]}">${STANCE[t.st][0]}</span>
          <b style="font-family:var(--mono);font-size:.95rem;color:${heat(100-t.x)};width:34px;text-align:right">${t.x}</b></div>
        <div class="bar" style="margin-bottom:9px"><i style="width:${t.x}%;background:${heat(100-t.x)}"></i></div>
        <div style="font-size:.85rem;color:var(--dim)">${esc(t.n)}</div></div></div>`).join('')}
    </div>`}

    <div class="exh"><u>EXHIBIT B</u><h3>Exposure by practice area</h3><span>weighted composite of the tasks each area contains</span></div>
    <div class="mapbox"><svg viewBox="0 0 ${W} ${H}" class="chart" style="min-width:700px">
      ${[0,25,50,75,100].map(p=>{const y=H-pad-(p/100)*(H-pad*2);
        return `<line class="gl" x1="${pad}" y1="${y}" x2="${W-pad}" y2="${y}"></line>
          <text class="axl" x="${pad-7}" y="${y+3}" text-anchor="end">${p}</text>`}).join('')}
      ${areaBars}</svg></div>

    <div class="note"><b>The structural problem nobody has solved.</b> The tasks compressing fastest — document review,
      due diligence, disclosure, standard drafting — are exactly the tasks that trained junior lawyers. The tasks that
      remain unexposed — cross-examination, negotiation, judgement on risk — are learned by doing the compressed ones
      first. Removing the bottom rung does not make the ladder shorter; it makes it harder to get onto. Every
      profession-level conversation about AI eventually arrives at this and stops.</div>
    <div class="disclaim" style="margin-top:16px"><b>No authoritative dataset exists for this.</b> There is no
      statistical agency measuring legal-task automation. The ordering here is defensible and the individual numbers
      are directional judgement. Read the ranking, not the decimals.</div>`;
  $('#rt-ai').textContent=aiView==='job'?`${PROFESSIONS.length} professions`:`${AITASK.length} tasks`;
  const seg=$('#aiSeg'); if(seg)seg.onclick=e=>{const b=e.target.closest('button');if(!b)return;aiView=b.dataset.v;renderAIsec()};
  $$('#b-ai [data-a]').forEach(el=>el.onclick=()=>areaReport(el.dataset.a));
}

/* ==================================================================
   15 · QUALIFICATION ROUTES
   ================================================================== */
let qrSel='GBR';
function renderQualify(){
  const r=QROUTE.find(x=>x.iso===qrSel)||QROUTE[0];
  const j=byIso[r.iso];
  const costLbl=['','Low','Moderate','Substantial','High','Very high'][r.cost];
  const yrsNum=x=>parseFloat(String(x.yrs).split('–')[0]);
  const maxY=Math.max(...QROUTE.map(yrsNum));
  $('#b-qualify').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>How you actually become a lawyer in twelve countries. The routes differ enormously — from five years in India to eight in Germany. Watch for the structural split: civil law systems usually train the whole profession together and divide into judges, prosecutors and advocates afterwards.</p></div>
    
    <div class="ctl" id="qrChips">${QROUTE.map(x=>
      `<button class="chip ${x.iso===qrSel?'on':''}" data-q="${x.iso}">${esc(x.n)}</button>`).join('')}</div>

    <div class="panel mb2"><div class="panel-h"><h3>${esc(r.n)}</h3>
      <span class="hint">${j?TRAD[j.trad]:''} · rule of law ${j?j.rol:'—'}</span></div>
      <div class="panel-b">
        <div class="spec">
          <div><u>Time to qualify</u><b>${esc(r.yrs)} years</b></div>
          <div><u>Cost burden</u><b class="hot">${costLbl}</b></div>
          <div><u>Steps</u><b>${r.steps.length}</b></div>
          <div><u>Tradition</u><b style="font-size:.82rem">${j?TRAD[j.trad]:'—'}</b></div>
        </div>
        <h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:12px">THE ROUTE</h4>
        <div style="display:flex;flex-direction:column;gap:0">
          ${r.steps.map((s,i)=>`<div style="display:flex;gap:14px;align-items:flex-start;padding-bottom:16px;position:relative">
            <div style="width:26px;height:26px;border-radius:50%;background:var(--bg2);border:1px solid var(--brass-d);
              display:grid;place-items:center;font-family:var(--mono);font-size:.68rem;color:var(--brass);flex-shrink:0">${i+1}</div>
            ${i<r.steps.length-1?`<div style="position:absolute;left:13px;top:26px;bottom:0;width:1px;background:var(--line2)"></div>`:''}
            <div style="padding-top:3px;font-size:.9rem">${esc(s)}</div></div>`).join('')}
        </div>
        <div class="grid g2" style="margin-top:10px">
          <div><h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:8px">WHAT IT GATES ON</h4>
            <p style="font-size:.88rem;color:var(--dim)">${esc(r.gate)}</p></div>
          <div><h4 style="font-family:var(--mono);font-size:.63rem;letter-spacing:.16em;color:var(--brass);margin-bottom:8px">ALTERNATIVE ROUTES</h4>
            <p style="font-size:.88rem;color:var(--dim)">${esc(r.alt)}</p></div>
        </div>
        <div class="note">${esc(r.note)}</div>
      </div></div>

    <div class="exh"><u>EXHIBIT A</u><h3>Time to qualify, compared</h3><span>minimum realistic duration from leaving school</span></div>
    <div class="panel"><div class="panel-b"><div class="dims">
      ${[...QROUTE].sort((a,b)=>yrsNum(b)-yrsNum(a)).map(x=>`<div class="dim">
        <u style="cursor:pointer" data-q="${x.iso}">${esc(x.n)}</u>
        <div class="bar"><i style="width:${yrsNum(x)/maxY*100}%;background:${x.iso===qrSel?'var(--brass)':'var(--blue)'}"></i></div>
        <b>${esc(x.yrs)}y</b></div>`).join('')}</div></div></div>

    <div class="note" style="margin-top:20px"><b>The pattern worth seeing.</b> Civil law systems generally train the
      whole legal profession together and split roles afterwards — Germany's Volljurist and Japan's Legal Training and
      Research Institute both produce judges, prosecutors and advocates from one pipeline. Common law systems train
      advocates and appoint judges later from among them. That single structural difference explains a great deal about
      how each system's judiciary behaves, including how willing it is to rule against the state.</div>`;
  $('#rt-qualify').textContent=`${QROUTE.length} jurisdictions`;
  $$('#b-qualify [data-q]').forEach(b=>b.onclick=()=>{qrSel=b.dataset.q;renderQualify()});
}

/* ==================================================================
   16 · FIT FINDER
   ================================================================== */
let fitAns={};
function fitScores(){
  const w={}, mods={};
  Object.entries(fitAns).forEach(([qi,oi])=>{
    const o=FITQ[qi].o[oi]; if(!o)return;
    Object.entries(o[1]).forEach(([k,v])=>{
      if(k.startsWith('_')) mods[k]=(mods[k]||0)+v; else w[k]=(w[k]||0)+v;
    });
  });
  const any=Object.keys(w).length||Object.keys(mods).length;
  return AREAS.map(a=>{
    let s=0;
    a.tags.forEach(t=>{ if(w[t]) s+=w[t]*10 });
    if(mods._pay) s+=a.pay[2]*0.9*mods._pay;
    if(mods._hardentry) s+=a.e*0.5*mods._hardentry;
    if(mods._lowai) s+=(100-a.ai)*0.9*mods._lowai;
    if(mods._highai) s+=a.ai*0.6*mods._highai;
    s+=a.d*0.18;
    return {a,s};
  }).sort((x,y)=>y.s-x.s).map((r,i,arr)=>({...r,pct:arr[0].s?Math.round(r.s/arr[0].s*100):0,any}));
}
function renderFit(){
  const answered=Object.keys(fitAns).length;
  const res=fitScores();
  const top=res.slice(0,6);
  $('#b-fit').innerHTML=`
    <div class="grid g2">
      <div>
        <div class="exh" style="margin-top:0;border:0;padding-top:0"><u>EXHIBIT A</u><h3>Eight questions</h3>
          <span>${answered} of ${FITQ.length} answered</span></div>
        <div class="prog" style="margin-bottom:18px"><i style="width:${answered/FITQ.length*100}%"></i></div>
        ${FITQ.map((q,qi)=>`<div class="fitq"><h4>${qi+1}. ${esc(q.q)}</h4>
          <div class="fitopts">${q.o.map((o,oi)=>
            `<button data-q="${qi}" data-o="${oi}" class="${fitAns[qi]===oi?'on':''}">${esc(o[0])}</button>`).join('')}</div></div>`).join('')}
        <button class="btn ghost" id="fitReset" style="margin-top:6px">Reset answers</button>
      </div>
      <div>
        <div class="exh" style="margin-top:0;border:0;padding-top:0"><u>EXHIBIT B</u><h3>Where your answers point</h3>
          <span>weighted against every area in the dataset</span></div>
        ${answered<3?`<div class="empty" style="border:1px dashed var(--line);border-radius:10px">
          ANSWER AT LEAST THREE QUESTIONS</div>`
        :top.map((r,i)=>`<div class="fitres" data-a="${esc(r.a.n)}">
          <div class="fitrank">${i+1}</div>
          <div style="flex:1;min-width:0">
            <div style="display:flex;gap:8px;align-items:baseline;flex-wrap:wrap">
              <b style="font-size:.92rem">${esc(r.a.n)}</b>
              <span class="tag ${STANCE[r.a.st][1]}">${STANCE[r.a.st][0]}</span></div>
            <div style="font-size:.75rem;color:var(--faint);margin:3px 0 6px">${esc(r.a.cat)} ·
              demand ${r.a.d} · AI exposure ${r.a.ai} · entry bar ${r.a.e}</div>
            <div class="bar"><i style="width:${r.pct}%;background:var(--brass)"></i></div></div>
          <b style="font-family:var(--mono);color:var(--brass);font-size:.85rem">${r.pct}%</b></div>`).join('')}
        ${answered>=3?`<div class="note"><b>Read this as a prompt, not a verdict.</b> It weights what you said you
          want against tags attached to each area. It knows nothing about whether you would actually enjoy the work,
          whether you can get in, or what the market looks like where you live. The most useful output is usually the
          area you did not expect to see near the top — go and find someone who does it and ask them what the bad days
          look like.</div>`:''}
      </div>
    </div>`;
  $('#rt-fit').textContent=`${answered}/${FITQ.length} answered`;
  $$('#b-fit .fitopts button').forEach(b=>b.onclick=()=>{
    const qi=+b.dataset.q; fitAns[qi]=fitAns[qi]===+b.dataset.o?undefined:+b.dataset.o;
    if(fitAns[qi]===undefined)delete fitAns[qi]; renderFit()});
  $('#fitReset').onclick=()=>{fitAns={};renderFit()};
  $$('#b-fit .fitres').forEach(el=>el.onclick=()=>areaReport(el.dataset.a));
}

/* ==================================================================
   17 · METHOD
   ================================================================== */
function renderMethod(){
  $('#b-method').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Every figure on this site, labelled by how much weight it can carry. Measured means counted or pulled from a live feed. Modelled means constructed to be consistent with something measured. Editorial means my judgement. Check the label before you cite anything.</p></div>
    
    <div class="exh" style="margin-top:0;border:0;padding-top:0"><u>SCH. A</u><h3>What each number means</h3>
      <span>and how much weight it can carry</span></div>
    <p style="color:var(--dim);font-size:.92rem;margin-bottom:18px;max-width:78ch">Not every figure here is the same
      kind of fact. Some are counted, some derived, some editorial judgement. They are labelled so you can tell which
      is which — <b style="color:var(--ink)">a live World Bank homicide figure deserves far more of your trust than an
      editorial AI-exposure score</b>, and none of this should be the only thing you read.</p>
    <div class="tbl-wrap mb2"><table class="mtable"><thead><tr><th style="cursor:default">Metric</th>
      <th style="cursor:default">Definition and source</th><th style="cursor:default">Confidence</th></tr></thead>
      <tbody>${METRICS.map(([m,d,src,c])=>`<tr style="cursor:default"><td>${esc(m)}</td>
        <td style="color:var(--dim)"><b style="color:var(--ink);font-weight:500">${esc(d)}</b><br>
          <span style="font-size:.8rem">${esc(src)}</span></td>
        <td><span class="conf ${c}">${c}</span></td></tr>`).join('')}</tbody></table></div>
    <div class="legend" style="margin-bottom:10px">
      <span><span class="conf measured">measured</span> counted or pulled from a primary feed</span>
      <span><span class="conf sourced">sourced</span> from a named publisher</span>
      <span><span class="conf derived">derived</span> computed from other figures here</span>
      <span><span class="conf modelled">modelled</span> constructed to be consistent, not measured</span>
      <span><span class="conf editorial">editorial</span> considered judgement</span>
      <span><span class="conf forecast">forecast</span> or simulated</span></div>

    <div class="exh"><u>SCH. B</u><h3>Known limitations</h3><span>what this site cannot tell you</span></div>
    ${LIMITS.map(([t,d])=>`<div class="lim"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}

    <div class="exh"><u>SCH. C</u><h3>Data vintage</h3><span>when each input was last true, and when it turns over</span></div>
    <p style="color:var(--dim);font-size:.9rem;margin-bottom:16px;max-width:78ch">Every figure has a shelf life. This is
      the part most sites leave out, and it is why a page can look authoritative eighteen months after it stopped being
      right. <b style="color:var(--ink)">If the reviewed date is more than a year old, treat everything as indicative
      and check the primary source.</b></p>
    <div class="tbl-wrap mb2"><table><thead><tr><th style="cursor:default">Input</th>
      <th style="cursor:default">Vintage</th><th style="cursor:default">Refresh cycle</th></tr></thead>
      <tbody>${VINTAGE.map(([a,b,c])=>`<tr style="cursor:default"><td class="nm">${esc(a)}</td>
        <td style="color:var(--dim)">${esc(b)}</td><td style="color:var(--dim)">${esc(c)}</td></tr>`).join('')}</tbody></table></div>

    <div class="exh"><u>SCH. D</u><h3>Sources</h3><span>primary references</span></div>
    <div class="tbl-wrap mb2"><table><thead><tr><th style="cursor:default">Publisher</th>
      <th style="cursor:default">Publication</th><th style="cursor:default">Used for</th>
      <th style="cursor:default">Where</th></tr></thead>
      <tbody>${SOURCES.map(([p,pub,u,l])=>`<tr style="cursor:default"><td class="nm">${esc(p)}</td>
        <td style="color:var(--dim);white-space:normal">${esc(pub)}</td>
        <td style="color:var(--dim);white-space:normal">${esc(u)}</td>
        <td style="font-family:var(--mono);font-size:.75rem;color:var(--faint)">${esc(l)}</td></tr>`).join('')}</tbody></table></div>

    <div class="exh"><u>SCH. E</u><h3>About this project</h3><span>what it is, and what it is not</span></div>
    <div class="grid g2">
      <div class="panel"><div class="panel-b">
        <h4 style="margin-bottom:8px">What LawOrchard is</h4>
        <p style="font-size:.89rem;color:var(--dim)">A learning instrument for people who are not lawyers — civilians
        who need to understand a situation, and students who want to see how legal systems actually differ. It reads
        the world's legal systems the way an analyst reads a market: structure first, numbers second.</p></div></div>
      <div class="panel"><div class="panel-b">
        <h4 style="margin-bottom:8px">What it is not</h4>
        <p style="font-size:.89rem;color:var(--dim)">Not legal advice, not a prediction, and not a substitute for a
        qualified lawyer in your jurisdiction. The models are structured ways of thinking about a problem, not
        forecasts of any real outcome. Where a number is judgement rather than measurement, the table above says so.</p></div></div>
      <div class="panel"><div class="panel-b">
        <h4 style="margin-bottom:8px">How to use it well</h4>
        <p style="font-size:.89rem;color:var(--dim)">Start with the Walkthrough or the Q&amp;A if you have a real
        situation. Start with the Atlas and Case law if you are learning. Use the models to interrogate your own
        assumptions rather than to generate an answer — the sliders are there so you can watch what changes when you
        change what you believe.</p></div></div>
      <div class="panel"><div class="panel-b">
        <h4 style="margin-bottom:8px">Why the honesty labels</h4>
        <p style="font-size:.89rem;color:var(--dim)">Because a dashboard makes everything look equally solid. A tile
        coloured by a modelled sub-dimension looks exactly like a tile coloured by a measured homicide rate, and that
        is a problem the design creates rather than solves. The confidence labels are the correction.</p></div></div>
    </div>`;
  $('#rt-method').textContent='Revision A';
}

/* ==================================================================
   GIMMICKS · lens, ticker, docket block, terminal, analyst dock
   ================================================================== */
let LENS=storeGet('lens','');
function JL(){return LENS?J.filter(j=>j.trad===LENS):J}
function tileOp(j){return (!LENS||j.trad===LENS) ? 0.84 : 0.12}

$('#lensSel').onclick=e=>{
  const b=e.target.closest('button'); if(!b)return;
  LENS=b.dataset.l; saveStore({lens:LENS});
  $$('#lensSel button').forEach(x=>x.classList.toggle('on',x===b));
  const set=JL();
  const bar=$('#lensBar');
  if(LENS){
    bar.classList.add('on');
    bar.querySelector('.wrap').innerHTML=
      `LENS ACTIVE · ${TRAD[LENS].toUpperCase()} · ${set.length} JURISDICTIONS ·
       MEDIAN RULE OF LAW ${fmt(median(set.map(j=>j.rol)))} ·
       MEDIAN INCARCERATION ${fmt(median(set.map(j=>j.inc)))}/100K ·
       ${set.filter(j=>j.dp==='A'||j.dp==='P').length} ABOLITIONIST
       <button class="chip" id="lensClear" style="margin-left:auto">CLEAR ✕</button>`;
    const lc=$('#lensClear'); if(lc)lc.onclick=()=>$('#lensSel button[data-l=""]').click();
  } else bar.classList.remove('on');
  jFilter=LENS; renderAtlas(); renderIndex(); renderJuris();
  toast(LENS?`Lens: ${TRAD[LENS]} · ${set.length} jurisdictions`:'Lens cleared · showing all jurisdictions');
};

/* ---- ticker ---- */
function buildTicker(){
  const drift=()=>{const d=(Math.random()*1.6-0.8);return d};
  const movers=[...J].sort(()=>Math.random()-0.5).slice(0,16).map(j=>{
    const d=drift(), cls=d>0.15?'tk-up':d<-0.15?'tk-dn':'tk-fl', arw=d>0.15?'▲':d<-0.15?'▼':'▬';
    return `<span class="tk-item"><b>${j.iso}</b> ROL ${j.rol}
      <i class="${cls}">${arw} ${Math.abs(d).toFixed(2)}</i></span>`});
  const idx=`<span class="tk-item"><b>CLII GLOBAL</b> ${Math.round(mean(DIMS.slice(1).map(([k])=>mean(J.map(j=>j[k])))))}
    <i class="tk-dn">▼ 0.4</i></span>`;
  /* the ticker reads the same material as Recent Decisions, so there is one
     source of truth for "what is new" rather than two that drift apart */
  const heads=[
    ...RCASES.filter(c=>c.sum).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4)
      .map(c=>`<span class="tk-item"><b>${(c.area||'RULING').toUpperCase()}</b> ${esc(c.t)}</span>`),
    ...RCURR.slice(0,2)
      .map(c=>`<span class="tk-item"><b>${(c.area||'TREND').toUpperCase()}</b> ${esc(c.t)}</span>`)
  ];
  const facts=[`<span class="tk-item"><b>ABOLITIONIST</b> ${J.filter(j=>j.dp==='A'||j.dp==='P').length}/${J.length} jurisdictions</span>`,
    `<span class="tk-item"><b>CASE LAW</b> ${CASES.length} decisions · ${CASES[0].y<0?Math.abs(CASES[0].y)+' BC':CASES[0].y} to 2026</span>`,
    `<span class="tk-item"><b>PRACTICE</b> ${AREAS.length} areas · mean AI exposure ${Math.round(mean(AREAS.map(a=>a.ai)))}</span>`];
  const seq=[idx,...movers,...heads,...facts].join('');
  $('#tkTrack').innerHTML=seq+seq;
}

/* ---- docket title block ---- */
function buildDocket(){
  const live=J.filter(j=>j.live).length;
  const rows=[['Cause no.','JV-2026-001'],['Folio','1 of 1'],['Revision','A'],
    ['Units','index 0–100'],['Jurisdictions',String(J.length)],['Decisions',String(CASES.length)],
    ['Practice areas',String(AREAS.length)],['Letters',String(LETTERS.length)],
    ['Help routes',String(HELPJ.length)+' juris.'],['Standard','preponderance'],
    ['Tolerance','± editorial'],['Reviewed','Aug 2026'],
    ['Live series',live?`${live} synced`:'snapshot'],['Status','open']];
  $('#docketBlock').innerHTML=`
    <div class="docket-h"><b>LAWORCHARD</b><span>GLOBAL LEGAL INTELLIGENCE</span>
      <span style="margin-left:auto">RECORD OF FILING</span></div>
    <div class="docket-g">${rows.map(([u,v])=>
      `<div><u>${u}</u><b class="${['Cause no.','Status','Live series'].includes(u)?'hot':''}">${v}</b></div>`).join('')}</div>`;
}

/* ---- terminal ---- */
const TERM_HELP=`<b>COMMANDS</b>
<table><tbody>
<tr><td class="cmd">/jur &lt;iso|name&gt;</td><td>full jurisdiction record</td></tr>
<tr><td class="cmd">/compare &lt;a&gt; &lt;b&gt;</td><td>two jurisdictions, dimension by dimension</td></tr>
<tr><td class="cmd">/rank &lt;metric&gt; [n]</td><td>rol · jud · corr · rights · order · civil · crim · inc</td></tr>
<tr><td class="cmd">/def &lt;term&gt;</td><td>glossary lookup</td></tr>
<tr><td class="cmd">/cite &lt;case&gt;</td><td>case record and why it matters</td></tr>
<tr><td class="cmd">/area &lt;name&gt;</td><td>practice area record</td></tr>
<tr><td class="cmd">/ai [n]</td><td>least-exposed legal tasks</td></tr>
<tr><td class="cmd">/route &lt;jurisdiction&gt;</td><td>how to qualify there</td></tr>
<tr><td class="cmd">/find &lt;query&gt;</td><td>search everything</td></tr>
<tr><td class="cmd">/goto &lt;section&gt;</td><td>${SEC.map(s=>s[0]).join(' · ')}</td></tr>
<tr><td class="cmd">/count</td><td>dataset size</td></tr>
<tr><td class="cmd">/random</td><td>a decision you have probably not read</td></tr>
<tr><td class="cmd">/clear</td><td>clear the console</td></tr>
</tbody></table>`;
function termPrint(html){const o=$('#termOut');o.innerHTML+=html+'<br>';o.scrollTop=o.scrollHeight}
function termRun(raw){
  const line=raw.trim(); if(!line)return;
  termPrint(`<span class="cmd">laworchard:~$ ${esc(line)}</span>`);
  const [cmdRaw,...rest]=line.split(/\s+/);
  const cmd=cmdRaw.toLowerCase().replace(/^\//,''); const arg=rest.join(' ');
  const findJ=q=>J.find(j=>j.iso.toLowerCase()===q.toLowerCase())||
    J.find(j=>j.name.toLowerCase().startsWith(q.toLowerCase()))||
    J.find(j=>j.name.toLowerCase().includes(q.toLowerCase()));
  switch(cmd){
    case 'help': case '?': termPrint(TERM_HELP); break;
    case 'clear': $('#termOut').innerHTML=''; break;
    case 'count':
      termPrint(`<table><tbody>
        <tr><td>jurisdictions</td><td><b>${J.length}</b></td></tr>
        <tr><td>landmark decisions</td><td><b>${CASES.length}</b></td></tr>
        <tr><td>apex courts</td><td><b>${COURTS.length}</b></td></tr>
        <tr><td>practice areas</td><td><b>${AREAS.length}</b></td></tr>
        <tr><td>legal tasks scored</td><td><b>${AITASK.length}</b></td></tr>
        <tr><td>qualification routes</td><td><b>${QROUTE.length}</b></td></tr>
        <tr><td>explained questions</td><td><b>${QA.length}</b></td></tr>
        <tr><td>glossary terms</td><td><b>${GLOS.length}</b></td></tr>
        <tr><td>walkthrough outcomes</td><td><b>${Object.values(FLOW).filter(n=>n.r).length}</b></td></tr>
        </tbody></table>`); break;
    case 'jur': {
      const j=arg&&findJ(arg); if(!j){termPrint('<span class="err">usage: /jur &lt;iso|name&gt;</span>');break}
      const rank=[...J].sort((a,b)=>b.rol-a.rol).findIndex(x=>x.iso===j.iso)+1;
      termPrint(`<b>${esc(j.name)}</b> (${j.iso}) · rank ${rank}/${J.length}
        <table><tbody>${DIMS.map(([k,l])=>`<tr><td>${l.toLowerCase()}</td><td><b>${j[k]}</b></td></tr>`).join('')}
        <tr><td>tradition</td><td><b>${TRAD[j.trad]}</b></td></tr>
        <tr><td>procedure</td><td><b>${PROC[j.proc]} · ${JURY[j.jury]}</b></td></tr>
        <tr><td>incarceration</td><td><b>${fmt(j.inc)}/100k</b></td></tr>
        ${j.hom!=null?`<tr><td>homicide (live)</td><td><b>${fmt(j.hom)}/100k</b></td></tr>`:''}
        <tr><td>death penalty</td><td><b>${DP[j.dp]}</b></td></tr>
        <tr><td>constitution</td><td><b>${j.cons||'uncodified'}</b></td></tr>
        <tr><td>apex court</td><td><b>${esc(j.apex)}</b></td></tr></tbody></table>`); break}
    case 'compare': {
      const parts=arg.split(/\s+(?:vs|v|and)\s+|\s+/).filter(Boolean);
      const a=parts[0]&&findJ(parts[0]), b=parts[1]&&findJ(parts[1]);
      if(!a||!b){termPrint('<span class="err">usage: /compare DEU USA</span>');break}
      termPrint(`<b>${esc(a.name)}</b> vs <b>${esc(b.name)}</b>
        <table><tbody>${DIMS.map(([k,l])=>{const d=a[k]-b[k];
          return `<tr><td>${l.toLowerCase()}</td><td><b>${a[k]}</b></td><td><b>${b[k]}</b></td>
            <td class="${d>0?'ok':d<0?'err':''}">${d>0?'+':''}${d}</td></tr>`}).join('')}
        <tr><td>incarceration</td><td><b>${fmt(a.inc)}</b></td><td><b>${fmt(b.inc)}</b></td><td></td></tr>
        </tbody></table>`); break}
    case 'rank': {
      const [m,nStr]=arg.split(/\s+/); const key=(m||'rol').toLowerCase();
      const valid=['rol','jud','corr','rights','order','civil','crim','inc'];
      if(!valid.includes(key)){termPrint('<span class="err">metrics: '+valid.join(' · ')+'</span>');break}
      const n=clamp(parseInt(nStr)||10,1,30);
      const list=[...J].sort((a,b)=>b[key]-a[key]).slice(0,n);
      termPrint(`<b>TOP ${n} · ${key.toUpperCase()}</b><table><tbody>${list.map((j,i)=>
        `<tr><td>${String(i+1).padStart(2,'0')}</td><td><b>${esc(j.name)}</b></td><td>${fmt(j[key])}</td>
         <td>${TRAD[j.trad]}</td></tr>`).join('')}</tbody></table>`); break}
    case 'def': {
      const g=GLOS.find(([t])=>t.toLowerCase().includes(arg.toLowerCase()))||
              GLOS.find(([t,c,d])=>d.toLowerCase().includes(arg.toLowerCase()));
      if(!arg||!g){termPrint('<span class="err">no matching term. try /def habeas</span>');break}
      termPrint(`<b>${esc(g[0])}</b> <span class="ok">[${esc(g[1])}]</span><br>${g[2]}`); break}
    case 'cite': {
      const c=CASES.find(x=>x.t.toLowerCase().includes(arg.toLowerCase()))||
              CASES.find(x=>(x.s+x.w+x.c).toLowerCase().includes(arg.toLowerCase()));
      if(!arg||!c){termPrint('<span class="err">no matching case. try /cite donoghue</span>');break}
      termPrint(`<b>${esc(c.t)}</b> (${c.y<0?Math.abs(c.y)+' BC':c.y}) · ${esc(c.c)}<br>
        ${c.s}<br><span class="ok">WHY IT MATTERS</span> ${c.w}
        ${c.k.length?`<br><span class="ok">CONNECTS TO</span> ${c.k.map(k=>{const t=CASES.find(y=>y.id===k);return t?esc(t.t):k}).join(' · ')}`:''}`); break}
    case 'area': {
      const a=AREAS.find(x=>x.n.toLowerCase().includes(arg.toLowerCase()));
      if(!arg||!a){termPrint('<span class="err">no matching area. try /area arbitration</span>');break}
      termPrint(`<b>${esc(a.n)}</b> · ${esc(a.cat)}<table><tbody>
        <tr><td>demand</td><td><b>${a.d}</b></td></tr><tr><td>AI exposure</td><td><b>${a.ai}</b> (${STANCE[a.st][0].toLowerCase()})</td></tr>
        <tr><td>entry bar</td><td><b>${a.e}</b></td></tr><tr><td>adversarial</td><td><b>${a.adv}</b></td></tr>
        <tr><td>senior pay</td><td><b>${PAYBAND(a.pay[2])}</b></td></tr></tbody></table>
        ${esc(a.day)}<br><span class="ok">MOVES TO</span> ${a.piv.map(esc).join(' · ')}`); break}
    case 'ai': {
      const n=clamp(parseInt(arg)||6,1,AITASK.length);
      const list=[...AITASK].sort((a,b)=>a.x-b.x).slice(0,n);
      termPrint(`<b>LEAST EXPOSED LEGAL TASKS</b><table><tbody>${list.map((t,i)=>
        `<tr><td>${String(i+1).padStart(2,'0')}</td><td><b>${esc(t.t)}</b></td><td class="ok">${t.x}</td></tr>`).join('')}</tbody></table>`); break}
    case 'route': {
      const r=QROUTE.find(x=>x.n.toLowerCase().includes(arg.toLowerCase())||x.iso.toLowerCase()===arg.toLowerCase());
      if(!arg||!r){termPrint('<span class="err">jurisdictions: '+QROUTE.map(x=>x.iso).join(' · ')+'</span>');break}
      termPrint(`<b>QUALIFYING IN ${esc(r.n.toUpperCase())}</b> · ${r.yrs} years<table><tbody>${
        r.steps.map((s,i)=>`<tr><td>${i+1}</td><td>${esc(s)}</td></tr>`).join('')}</tbody></table>
        <span class="ok">GATE</span> ${esc(r.gate)}`); break}
    case 'find': {
      if(!arg){termPrint('<span class="err">usage: /find privacy</span>');break}
      const q=arg.toLowerCase();
      const jm=J.filter(j=>j.name.toLowerCase().includes(q)).slice(0,4);
      const cm=CASES.filter(c=>(c.t+c.s+c.w).toLowerCase().includes(q)).slice(0,4);
      const qm=QA.filter(x=>(x.q+x.a.join(' ')).toLowerCase().includes(q)).slice(0,4);
      const am=AREAS.filter(a=>(a.n+a.day+a.tags.join(' ')).toLowerCase().includes(q)).slice(0,4);
      const gm=GLOS.filter(g=>(g[0]+g[2]).toLowerCase().includes(q)).slice(0,4);
      const tot=jm.length+cm.length+qm.length+am.length+gm.length;
      if(!tot){termPrint('<span class="err">no matches across the dataset</span>');break}
      termPrint(`<b>${tot} MATCHES</b>
        ${jm.length?`<br><span class="ok">JURISDICTIONS</span> ${jm.map(j=>esc(j.name)).join(' · ')}`:''}
        ${cm.length?`<br><span class="ok">CASES</span> ${cm.map(c=>esc(c.t)).join(' · ')}`:''}
        ${qm.length?`<br><span class="ok">QUESTIONS</span> ${qm.map(x=>esc(x.q)).join(' · ')}`:''}
        ${am.length?`<br><span class="ok">PRACTICE</span> ${am.map(a=>esc(a.n)).join(' · ')}`:''}
        ${gm.length?`<br><span class="ok">TERMS</span> ${gm.map(g=>esc(g[0])).join(' · ')}`:''}`); break}
    case 'goto': {
      const s=SEC.find(x=>x[0]===arg.toLowerCase());
      if(!s){termPrint('<span class="err">sections: '+SEC.map(x=>x[0]).join(' · ')+'</span>');break}
      go(s[0]); termPrint(`<span class="ok">→ ${s[2].replace(/&amp;/g,'&')}</span>`); break}
    case 'random': {
      const c=CASES[Math.floor(Math.random()*CASES.length)];
      termPrint(`<b>${esc(c.t)}</b> (${c.y<0?Math.abs(c.y)+' BC':c.y}) · ${esc(c.c)}<br>${c.w}`); break}
    case 'sync': $('#syncBtn').click(); termPrint('<span class="ok">requesting World Bank series…</span>'); break;
    default:
      termPrint(`<span class="err">unknown command: ${esc(cmdRaw)}</span> — type /help`);
  }
}
(function initTerm(){
  const t=$('#term');
  $('#termBar').onclick=()=>{t.classList.toggle('open');
    $('#termHint').textContent=t.classList.contains('open')?'esc to close':'click to open · type /help';
    if(t.classList.contains('open'))$('#termIn').focus()};
  const hist=[]; let hi=-1;
  $('#termIn').onkeydown=e=>{
    if(e.key==='Enter'){const v=e.target.value;if(v.trim()){hist.unshift(v);hi=-1}termRun(v);e.target.value=''}
    else if(e.key==='ArrowUp'){if(hi<hist.length-1){hi++;e.target.value=hist[hi]}e.preventDefault()}
    else if(e.key==='ArrowDown'){if(hi>0){hi--;e.target.value=hist[hi]}else{hi=-1;e.target.value=''}e.preventDefault()}
    else if(e.key==='Escape'){t.classList.remove('open');e.target.blur()}
  };
  termPrint(`<span class="ok">LawOrchard research console · revision A</span>
    ${J.length} jurisdictions · ${CASES.length} decisions · ${AREAS.length} practice areas · ${GLOS.length} terms loaded.<br>
    Everything runs locally. Type <span class="cmd">/help</span> for commands.`);
})();

/* ---- analyst dock ---- */
(function initDock(){
  const sug=['Rule of law in Morocco','Compare Germany and the United States','What is proportionality',
    'Donoghue v Stevenson','Can I be fired for no reason','Death penalty in Japan'];
  $('#dockSug').innerHTML=sug.map(s=>`<button class="chip" data-s="${esc(s)}">${esc(s)}</button>`).join('');
  $('#dockOut').innerHTML=CLERK_INTRO;
  $('#dockOut').style.maxHeight='min(44vh,360px)'; $('#dockOut').style.overflowY='auto';
  const open=v=>{$('#dock').classList.toggle('on',v);$('#dockFab').classList.toggle('hide',v);
    if(v)setTimeout(()=>$('#dockIn').focus(),80)};
  $('#dockFab').onclick=()=>open(true);
  $('#dockX').onclick=()=>open(false);
  const run=v=>{askClerk(v);$('#dockIn').value=''};
  $('#dockGo').onclick=()=>run($('#dockIn').value);
  $('#dockIn').onkeydown=e=>{if(e.key==='Enter')run(e.target.value)};
  $$('#dockSug [data-s]').forEach(b=>b.onclick=()=>run(b.dataset.s));
})();


/* ==================================================================
   00 · START HERE
   ================================================================== */
/* A returning visitor should not be shown a front door they have already
   walked through. If anything is remembered, offer the way back in first. */
function startResume(){
  const p=progressAll(), s=progPct();
  if(!s.done)return '';
  const last=Object.entries(p).map(([k,v])=>{
    const kind=k.slice(0,k.indexOf(':')), id=k.slice(k.indexOf(':')+1);
    if(kind==='sec'&&SECBY[id]&&id!=='start')return {l:SECBY[id][2].replace(/&amp;/g,'&'),h:GROUP_PAGE[SECBY[id][4]]+'#'+id,v};
    if(kind==='game'&&GAMEBY[id])return {l:GAMEBY[id].t,h:'game-'+id+'.html',v};
    if(kind==='doc'&&DOCSBY[id])return {l:DOCSBY[id].t,h:'situation.html#docs',v};
    if(kind==='proc'&&PROCSBY[id])return {l:PROCSBY[id].t,h:'situation.html#process',v};
    return null;
  }).filter(Boolean).sort((a,b)=>b.v.last-a.v.last)[0];
  if(!last)return '';
  return `<div class="resume">
    <div class="resumeL"><span class="resk">Welcome back</span>
      <b>You were last reading <a href="${last.h}">${esc(last.l)}</a></b>
      <i>${progWhen(last.v.last)} \u00b7 you have opened ${s.done} of ${s.tot} things here</i></div>
    <div class="resumeR"><a class="btn sm" href="${last.h}">Carry on \u2192</a>
      <button class="btn sm ghost" data-go="progress">See everything</button></div></div>`;
}
function renderStart(){
  const cards=[
    ['guide','⚖','I have a legal problem right now',
     'Something is happening — a landlord, an employer, the police, a purchase that went wrong. Answer two or three questions and get a clear briefing, then write the letter or find someone who can help.','Start the walkthrough'],
    ['atlas','◉','I want to understand how law works',
     'How courts differ between countries, which decisions shaped the modern world, and what terms like precedent, proportionality and habeas corpus actually mean. Built for students and the plainly curious.','Open the atlas'],
    ['areas','◈','I am thinking about a career in law',
     'What each area of practice is really like day to day, how exposed it is to automation, how you qualify in twelve different countries, and a short questionnaire that points at areas worth looking into.','Explore practice areas'],
    ['docs','✉','I have been sent something I do not understand',
     'A court form, an eviction notice, a letter from a debt collector, an invitation to a disciplinary meeting. Nine of them walked through part by part — including which date is the one that actually matters.','Read my letter']];
  const tour=GROUPS.filter(g=>g[0]!=='start').map(([g,l])=>{
    const list=sectionsIn(g);
    return [l,list.map(x=>x[1]).join(' · '),list[0][0],list[0][5]];
  });
  $('#b-start').innerHTML=`
    <div class="panel mb2" style="border-left:4px solid var(--red)"><div class="panel-b"
      style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
      <div style="flex:1;min-width:240px">
        <b style="font-size:.95rem">Is this urgent?</b>
        <p style="font-size:.88rem;color:var(--dim);margin-top:4px">If you have been arrested, are being evicted
        today, are facing removal, or have a court deadline this week — skip everything else and go straight to
        the help routes.</p></div>
      <button class="btn" data-go="help" style="flex-shrink:0">Find help now →</button>
    </div></div>
    <svg class="biglogo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="32,3 61,32 32,61 3,32" fill="var(--brass)" opacity=".22"/><rect x="10" y="9" width="44" height="44" fill="none" stroke="var(--brass)" stroke-width="3.2"/><polygon points="24.56,21.05 33.05,12.56 35.88,15.39 27.39,23.88" fill="var(--ink)"/><polygon points="28.45,24.94 36.94,16.45 51.44,30.95 42.95,39.44" fill="var(--ink)"/><polygon points="38.71,26.71 35.88,23.88 21.74,38.02 24.56,40.85" fill="var(--ink)"/><polygon points="21.31,37.60 24.99,41.27 16.79,45.80" fill="var(--brass)"/><path d="M16.79 45.80 L20.32 42.26" stroke="var(--panel)" stroke-width="1.1" stroke-linecap="round"/><circle cx="24.21" cy="38.37" r="1" fill="var(--panel)"/></svg>
    ${startResume()}
    <div class="grid g4 mb2">${cards.map(([to,ic,h,p,cta])=>
      `<div class="startcard" data-go="${to}"><div class="ic">${ic}</div>
        <h3>${h}</h3><p>${p}</p><div class="go">${cta} →</div></div>`).join('')}</div>

    <div class="grid g2">
      <div class="panel"><div class="panel-h"><h3>What is in here</h3>
        <span class="hint">${SEC.length-1} sections in ${GROUPS.length-1} groups</span></div>
        <div class="panel-b" style="padding-top:6px">
          ${tour.map(([l,items,to,what],i)=>`<a class="tourrow linkrow" href="${GROUP_PAGE[GROUPS.filter(g=>g[0]!=='start')[i][0]]}">
            <span class="n">${String(i+1).padStart(2,'0')}</span>
            <div><b>${l}</b><p>${items}</p></div><span class="rowgo">→</span></a>`).join('')}
        </div></div>

      <div>
        <div class="panel mb"><div class="panel-h"><h3>Before you start</h3></div>
          <div class="panel-b">
            <p style="font-size:.92rem;color:var(--dim);margin-bottom:14px">Three things worth knowing:</p>
            <div class="tourrow"><span class="n">01</span><div><b>This is not legal advice</b>
              <p>It explains how law generally works. It cannot tell you what to do about your specific situation, and it is not a substitute for a lawyer where you live.</p></div></div>
            <div class="tourrow"><span class="n">02</span><div><b>Everything stays on your device</b>
              <p>There is no account and no server. The walkthrough, the calculators, the letter builder, the Law Lab and the search all run inside your own browser. Your theme, text size and progress are saved on this device so they are still here when you come back — and they are never sent anywhere.</p></div></div>
            <div class="tourrow"><span class="n">03</span><div><b>Not every figure is the same kind of fact</b>
              <p>Some numbers are measured, some are editorial judgement. The Method page labels every one of them, and you should check before citing anything.</p></div></div>
          </div></div>
        <div class="panel"><div class="panel-h"><h3>Make it comfortable</h3></div>
          <div class="panel-b">
            <p style="font-size:.9rem;color:var(--dim);margin-bottom:14px">Four looks, changeable at any time from
              <b style="color:var(--ink)">Theme</b> in the top bar — a bright daylight view, a low-light night view,
              a warm courtroom view, and one that reads like a printed contract.</p>
            <div class="ctl" id="startThemes" style="margin:0">${THEMES.map(t=>
              `<button class="chip" data-t="${t.k}">${t.n}</button>`).join('')}</div>
          </div></div>
      </div>
    </div>`;
  $('#rt-start').textContent='';
  $$('#b-start [data-go]').forEach(c=>c.onclick=()=>go(c.dataset.go));
  $('#startThemes').onclick=e=>{const b=e.target.closest('button');if(b)setTheme(b.dataset.t)};
}

/* ==================================================================
   THEME ENGINE
   ================================================================== */
const THEMES=[
 {k:'light',n:'Daylight',d:'Warm paper and navy ink. The calmest read.',sw:['#f6f5f1','#ffffff','#8a6a1c']},
 {k:'dark', n:'Night',   d:'Low light, muted contrast, easy on the eyes.',sw:['#0d1016','#161c27','#d3ab35']},
 {k:'court',n:'Courtroom',d:'Oak, brass and green baize.',sw:['#1d1712','#2c231b','#d8b04a']},
 {k:'contract',n:'Contract',d:'Cream stock, serif type, a ruled margin.',sw:['#f2eee2','#fffdf6','#1e3a68']}];
let THEME=storeGet('theme','court');
function setTheme(k,quiet){
  if(!THEMES.find(t=>t.k===k))return;
  THEME=k; document.documentElement.setAttribute('data-theme',k); saveStore({theme:k});
  paintThemeMenu(); if(typeof paintMore==='function')paintMore();
  const t=THEMES.find(x=>x.k===k);
  if(!quiet)toast('Theme: '+t.n);
  if($('#b-atlas'))renderAtlas();
  if($('#b-index'))renderIndex();
}
function paintThemeMenu(){
  $('#thmMenu').innerHTML=`<h6>Appearance</h6>`+THEMES.map(t=>
    `<button class="thmopt ${t.k===THEME?'on':''}" data-t="${t.k}">
      <span class="sw">${t.sw.map(c=>`<i style="background:${c}"></i>`).join('')}</span>
      <span><b style="font-weight:600">${t.n}</b><small>${t.d}</small></span></button>`).join('')
    +`<h6 style="border-top:1px solid var(--line);margin-top:6px;padding-top:12px">Text size</h6>
      <div class="sizerow">${SIZES.map(sz=>
        `<button data-sz="${sz[0]}" class="${sz[0]===textSize?'on':''}">${sz[1]}</button>`).join('')}</div>`;
  $$('#thmMenu .sizerow button').forEach(b=>b.onclick=e=>{e.stopPropagation();setTextSize(b.dataset.sz)});
  $$('#thmMenu .thmopt').forEach(b=>b.onclick=()=>{setTheme(b.dataset.t);$('#thmMenu').classList.remove('on')});
  $$('#startThemes button').forEach(b=>b.classList.toggle('on',b.dataset.t===THEME));
}
$('#thmBtn').onclick=e=>{e.stopPropagation();
  $('#moreMenu').classList.remove('on'); $('#thmMenu').classList.toggle('on')};

/* ---------- more menu: ticker, console, sync ---------- */
$('#moreBtn').insertAdjacentHTML('afterend','<div class="thmmenu" id="moreMenu" style="right:0"></div>');
$('#moreBtn').parentElement.style.position='relative';
let tickerOn=storeGet('ticker',false), consoleOn=storeGet('console',false);
function paintMore(){
  $('#moreMenu').innerHTML=`<h6>Optional extras</h6>
    <button class="thmopt ${tickerOn?'on':''}" data-m="ticker">
      <span class="sw"><i style="background:var(--brass)"></i></span>
      <span><b style="font-weight:600">Live ticker</b><small>${tickerOn?'Showing':'Hidden'} · a scrolling strip of figures and headlines</small></span></button>
    <button class="thmopt ${consoleOn?'on':''}" data-m="console">
      <span class="sw"><i style="background:var(--blue)"></i></span>
      <span><b style="font-weight:600">Research console</b><small>${consoleOn?'Showing':'Hidden'} · a command line for power users</small></span></button>
    <button class="thmopt" data-m="sync">
      <span class="sw"><i style="background:var(--green)"></i></span>
      <span><b style="font-weight:600">Sync live data</b><small>Pull homicide and population figures from the World Bank</small></span></button>
    <h6 style="border-top:1px solid var(--line);margin-top:6px;padding-top:12px">Appearance</h6>
    <div class="sizerow" id="moreThemes">${THEMES.map(t=>
      `<button data-mt="${t.k}" class="${THEME===t.k?'on':''}">${t.n}</button>`).join('')}</div>
    <div class="sizerow" id="moreSize">${SIZES.map(z=>
      `<button data-ms="${z[0]}" class="${textSize===z[0]?'on':''}">${z[1]}</button>`).join('')}</div>
    <h6 style="border-top:1px solid var(--line);margin-top:6px;padding-top:12px">Help</h6>
    <button class="thmopt" data-m="tour">
      <span class="sw"><i style="background:var(--violet)"></i></span>
      <span><b style="font-weight:600">Show the introduction</b><small>The five-card tour you get on a first visit</small></span></button>
    <h6 style="border-top:1px solid var(--line);margin-top:6px;padding-top:12px">Jurisdiction lens</h6>
    <div class="sizerow" id="moreLens">${[['','All'],['CM','Common'],['CV','Civil'],['MX','Mixed']].map(([k,l])=>
      `<button data-ml="${k}" class="${LENS===k?'on':''}">${l}</button>`).join('')}</div>`;
  $$('#moreMenu [data-mt]').forEach(b=>b.onclick=e=>{e.stopPropagation();setTheme(b.dataset.mt)});
  $$('#moreMenu [data-ms]').forEach(b=>b.onclick=e=>{e.stopPropagation();setTextSize(b.dataset.ms)});
  $$('#moreMenu [data-ml]').forEach(b=>b.onclick=e=>{e.stopPropagation();
    const t=$('#lensSel button[data-l="'+b.dataset.ml+'"]'); if(t)t.click(); paintMore();});
  $$('#moreMenu .thmopt').forEach(b=>b.onclick=()=>{
    const m=b.dataset.m;
    if(m==='ticker'){tickerOn=!tickerOn;saveStore({ticker:tickerOn});$('#ticker').classList.toggle('on',tickerOn);}
    else if(m==='console'){consoleOn=!consoleOn;saveStore({console:consoleOn});$('#term').classList.toggle('avail',consoleOn);document.body.classList.toggle('console-on',consoleOn);
      if(!consoleOn)$('#term').classList.remove('open'); else toast('Console added at the bottom of the page');}
    else if(m==='sync'){$('#syncBtn').click();$('#moreMenu').classList.remove('on');return}
    else if(m==='tour'){$('#moreMenu').classList.remove('on');tourShow(true);return}
    paintMore();
  });
}
$('#moreBtn').onclick=e=>{e.stopPropagation();
  $('#thmMenu').classList.remove('on'); $('#moreMenu').classList.toggle('on')};
document.addEventListener('click',e=>{
  const inThm=e.target.closest('#thmMenu,#thmBtn'), inMore=e.target.closest('#moreMenu,#moreBtn');
  if(!inThm)$('#thmMenu').classList.remove('on');
  if(!inMore)$('#moreMenu').classList.remove('on');
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){
  $('#thmMenu').classList.remove('on'); $('#moreMenu').classList.remove('on'); }});


/* ==================================================================
   FIND HELP — referral data
   ================================================================== */
const URGENT=[
{t:'You are in immediate physical danger',
 d:'Call your local emergency number first. Legal questions come afterwards. If the danger is from someone you live with, domestic abuse services can arrange emergency accommodation and can apply to a court for a protective order the same day in most jurisdictions.',
 a:['Emergency services','Domestic abuse helpline','Police protective order or injunction']},
{t:'You are being evicted today or the locks have been changed',
 d:'In most systems a landlord cannot remove you without a court order and an official enforcement officer. If your locks were changed or your belongings removed, that is usually unlawful and often criminal — this is one of the few situations where same-day intervention exists.',
 a:['Local authority homelessness team','Emergency tenancy or housing enforcement line','Tenants\' union or housing charity']},
{t:'You have been arrested or detained',
 d:'Ask for a lawyer and stop answering questions. In serious criminal matters most systems provide one free at the police station regardless of means — it is not a favour and asking does not make you look guilty.',
 a:['Duty solicitor or public defender at the station','Consulate if you are a foreign national','Family member to instruct a lawyer for you']},
{t:'You have a court deadline in the next few days',
 d:'Deadlines are the one thing that cannot be fixed later. Missing a response date often means losing without a hearing. Contact a court-stage advice service today and take every document with you.',
 a:['Court-based advice desk','Legal aid intake line','Duty scheme at the court building']},
{t:'You are facing removal or immigration detention',
 d:'Removal timetables move very fast and specialist representation matters enormously. Detention centres normally have an on-site advice scheme, and there are charities that intervene at short notice.',
 a:['Detention duty advice scheme','Immigration legal charity','Consulate of your country of nationality']}];

const HELPKINDS=[
['Legal aid authority','State-funded representation for people below an income threshold. Almost every country has one, usually means-tested and strongest in criminal and family matters.'],
['Law centre or community legal clinic','Free local advice on housing, benefits, immigration and employment. Often the fastest route to a real person.'],
['University law clinic','Supervised students taking real cases at no cost. Slower, but thorough, and they take matters others turn down.'],
['Bar or law society referral line','The professional body will name qualified practitioners in your area, sometimes with a free or fixed-fee first consultation.'],
['Ombudsman or regulator','Free, binding-ish dispute resolution for banking, insurance, telecoms, energy, healthcare and public bodies. Almost always free and far faster than court.'],
['Trade union or tenants\' union','If you are a member, representation is usually included. Many will advise non-members in an emergency.'],
['Specialist charity or NGO','Housing, domestic abuse, immigration, disability and debt charities often employ their own lawyers.'],
['Pro bono scheme','Private firms doing free work through an organised scheme. Usually accessed through a referral agency rather than directly.']];

const HELPJ=[
{iso:'GBR',n:'United Kingdom',
 r:[['Citizens Advice','Free generalist advice on housing, benefits, employment, debt and consumer problems, in person and by phone. Usually the right first call.','citizensadvice.org.uk'],
    ['Civil Legal Advice','Government telephone advice line for people on low incomes, covering debt, housing, discrimination and some family matters. Published number 0345 345 4 345.','gov.uk/civil-legal-advice'],
    ['Law Centres Network','Local law centres employing solicitors who take on housing, immigration and welfare cases at no cost.','lawcentres.org.uk'],
    ['LawWorks','Coordinates free legal clinics run by volunteer solicitors across England and Wales.','lawworks.org.uk'],
    ['Shelter','Housing and homelessness specialists with an emergency helpline and a legal team.','shelter.org.uk'],
    ['Acas','Free, impartial advice on workplace rights and mandatory early conciliation before a tribunal claim.','acas.org.uk'],
    ['Financial Ombudsman Service','Free binding decisions on complaints about banks, insurers and lenders.','financial-ombudsman.org.uk']]},
{iso:'USA',n:'United States',
 r:[['LawHelp.org','Referral portal to nonprofit legal aid in every state and territory, plus self-help guides and court forms.','lawhelp.org'],
    ['Legal Services Corporation','Federally funded network of civil legal aid providers; its site locates your local grantee.','lsc.gov'],
    ['ABA Free Legal Answers','Post a civil legal question and get a written answer from a volunteer attorney in your state.','abafreelegalanswers.org'],
    ['State bar referral service','Every state bar runs a referral line, often with a low fixed fee for a first consultation.','americanbar.org'],
    ['Public defender','Appointed free of charge in criminal matters if you cannot afford counsel — the Gideon right.','—'],
    ['Law school clinics','Most accredited law schools run free clinics in housing, immigration, family and veterans\' matters.','—']]},
{iso:'FRA',n:'France',
 r:[['Aide juridictionnelle','State funding for a lawyer, applied for through the tribunal. Full or partial depending on income.','justice.fr'],
    ['Points-justice','Free walk-in legal information points, including the Maisons de justice et du droit, in most towns.','justice.fr'],
    ['Défenseur des droits','Independent authority handling complaints against public services and discrimination, free of charge.','defenseurdesdroits.fr'],
    ['Ordre des avocats','Local bar associations run free consultation sessions, often at the mairie or courthouse.','—']]},
{iso:'DEU',n:'Germany',
 r:[['Beratungshilfe','State-funded initial legal advice for people on low incomes, applied for at the local Amtsgericht.','—'],
    ['Prozesskostenhilfe','State funding for the costs of litigation itself, assessed on means and prospects of success.','—'],
    ['Mieterverein','Tenants\' associations providing legal advice and representation to members for a modest annual fee.','—'],
    ['Verbraucherzentrale','Consumer advice centres in every state, giving low-cost advice on contracts, energy and telecoms.','verbraucherzentrale.de'],
    ['Anwaltauskunft','The German bar association\'s lawyer-finding service.','anwaltauskunft.de']]},
{iso:'MAR',n:'Morocco',
 r:[['Assistance judiciaire','Court-administered legal aid: an application to the bureau d\'assistance judiciaire at the tribunal can result in a lawyer being appointed at the state\'s expense.','—'],
    ['Ordre des avocats','Local bar offices run free legal consultation sessions open to anyone regardless of means.','—'],
    ['Conseil National des Droits de l\'Homme','National human rights institution with regional commissions that receive individual complaints.','cndh.ma'],
    ['Fondation Hassan II','Free legal assistance for Moroccans resident abroad, including a volunteer lawyer network.','fh2mre.ma'],
    ['Associations de la société civile','Specialist associations working on women\'s rights, migrants and detainees provide accompaniment and referral.','—']]},
{iso:'IND',n:'India',
 r:[['NALSA','The National Legal Services Authority provides free legal aid as a statutory right, with authorities in every state and district.','nalsa.gov.in'],
    ['District Legal Services Authority','Your local DLSA is the practical entry point — free representation and Lok Adalat settlement.','—'],
    ['Lok Adalat','People\'s courts settling disputes by conciliation, with no court fee and awards that bind like a decree.','—'],
    ['Eligibility','Women, children, scheduled castes and tribes, industrial workmen, disaster and trafficking victims, and anyone below the income limit qualify as of right.','—']]},
{iso:'BRA',n:'Brazil',
 r:[['Defensoria Pública','Constitutionally mandated public defenders covering civil as well as criminal matters for those who cannot pay.','—'],
    ['Procon','State consumer protection bodies resolving consumer disputes free and quickly.','—'],
    ['OAB','The Brazilian bar runs orientation services and disciplinary complaints against lawyers.','oab.org.br'],
    ['Juizado Especial','Small claims courts where you may act without a lawyer up to a value threshold.','—']]},
{iso:'ZAF',n:'South Africa',
 r:[['Legal Aid South Africa','National legal aid body with justice centres countrywide, covering criminal and many civil matters.','legal-aid.co.za'],
    ['CCMA','Free dispute resolution for unfair dismissal and workplace disputes, with no lawyer required.','ccma.org.za'],
    ['Law clinics','University law clinics and the Legal Resources Centre take public interest and individual cases.','—'],
    ['SAHRC','The Human Rights Commission receives complaints of rights violations free of charge.','sahrc.org.za']]},
{iso:'CAN',n:'Canada',
 r:[['Provincial legal aid','Each province runs its own plan; coverage and thresholds differ substantially between them.','—'],
    ['Pro Bono organisations','Pro Bono Ontario, Access Pro Bono BC and equivalents offer free advice lines and clinics.','—'],
    ['Law society referral','Provincial law societies operate referral services, often with a free initial call.','—'],
    ['Community legal clinics','Neighbourhood clinics specialising in tenancy, social assistance and employment.','—']]},
{iso:'AUS',n:'Australia',
 r:[['Legal Aid commissions','One in each state and territory, covering criminal, family and some civil matters.','—'],
    ['Community Legal Centres','Independent centres giving free advice, many specialising in tenancy or domestic violence.','clcs.org.au'],
    ['Fair Work Ombudsman','Free help with pay, entitlements and unfair dismissal.','fairwork.gov.au'],
    ['Aboriginal Legal Services','Culturally specific legal representation for Aboriginal and Torres Strait Islander people.','—']]},
{iso:'NLD',n:'Netherlands',
 r:[['Het Juridisch Loket','Free legal advice counters nationwide, and the gateway to subsidised representation.','juridischloket.nl'],
    ['Raad voor Rechtsbijstand','Administers the toevoeging — subsidised legal assistance based on income.','rvr.org'],
    ['Geschillencommissie','Sector dispute committees resolving consumer complaints cheaply.','degeschillencommissie.nl']]},
{iso:'ESP',n:'Spain',
 r:[['Asistencia jurídica gratuita','Free legal assistance applied for through the Colegio de Abogados, assessed on income.','—'],
    ['Turno de oficio','The duty lawyer rota, including 24-hour criminal duty cover.','—'],
    ['Oficinas de atención al ciudadano','Court-based citizen information offices explaining procedure at no cost.','—']]},
{iso:'ITA',n:'Italy',
 r:[['Patrocinio a spese dello Stato','State-funded representation for those below an income threshold, applied for through the bar council.','—'],
    ['Sportello del cittadino','Bar association citizen desks providing free orientation.','—'],
    ['Difensore civico','Regional ombudsmen handling complaints against public administration.','—']]},
{iso:'JPN',n:'Japan',
 r:[['Houterasu','The Japan Legal Support Center — the national gateway to free consultations and civil legal aid.','houterasu.or.jp'],
    ['Bar association consultations','Local bar associations run low-cost consultation sessions in every prefecture.','—'],
    ['Duty attorney','Free attorney attendance for detained suspects on request.','—']]},
{iso:'NGA',n:'Nigeria',
 r:[['Legal Aid Council of Nigeria','Federal body providing free representation in criminal and some civil matters.','legalaidcouncil.gov.ng'],
    ['NBA pro bono','Nigerian Bar Association branches coordinate free representation schemes.','—'],
    ['Office of the Public Defender','State-level public defender offices in Lagos and several other states.','—']]},
{iso:'KEN',n:'Kenya',
 r:[['National Legal Aid Service','Statutory legal aid body established under the Legal Aid Act.','nlas.go.ke'],
    ['Kituo Cha Sheria','Long-established legal advice centre providing free representation and paralegal support.','—'],
    ['Law Society of Kenya','Runs pro bono and public interest litigation programmes.','lsk.or.ke']]},
{iso:'BGD',n:'Bangladesh',
 r:[['National Legal Aid Services Organization','Government legal aid body under the Ministry of Law, with district committees.','nlaso.gov.bd'],
    ['BLAST','Bangladesh Legal Aid and Services Trust — free representation and strategic litigation.','blast.org.bd'],
    ['Ain o Salish Kendra','Legal aid and human rights organisation with a long track record.','askbd.org']]},
{iso:'IRL',n:'Ireland',
 r:[['Citizens Information','Free public service giving information on rights and entitlements, in person and by phone.','citizensinformation.ie'],
    ['Legal Aid Board','State civil legal aid through law centres, means-tested with a modest contribution.','legalaidboard.ie'],
    ['FLAC','Free Legal Advice Centres — volunteer-run evening clinics nationwide.','flac.ie'],
    ['Threshold','National housing charity advising tenants on eviction and deposits.','threshold.ie']]},
{iso:'POL',n:'Poland',
 r:[['Nieodpłatna pomoc prawna','Free legal aid points in every district, open to anyone who declares they cannot afford a lawyer.','np.ms.gov.pl'],
    ['Rzecznik Praw Obywatelskich','The Ombudsman receives complaints about public authorities free of charge.','brpo.gov.pl'],
    ['Okręgowa Rada Adwokacka','Regional bar councils run free consultation days.','—']]},
{iso:'SWE',n:'Sweden',
 r:[['Rättshjälp','State legal aid where you have no legal expenses insurance, applied for through the court.','—'],
    ['Rättsskydd','Most Swedish home insurance includes legal expenses cover — check this first, it is the usual route.','—'],
    ['Juridiska föreningar','University law student advice bureaux offer free guidance in the main cities.','—'],
    ['Diskrimineringsombudsmannen','The Equality Ombudsman investigates discrimination complaints at no cost.','do.se']]},
{iso:'PRT',n:'Portugal',
 r:[['Apoio judiciário','Legal aid applied for through Segurança Social, covering fees and a lawyer.','seg-social.pt'],
    ['Ordem dos Advogados','The bar assigns lawyers under the legal aid scheme and runs information sessions.','oa.pt'],
    ['DECO','Consumer protection association handling disputes for members and non-members.','deco.pt']]},
{iso:'MEX',n:'Mexico',
 r:[['Defensoría Pública Federal','Federal public defenders in criminal and some civil matters, free of charge.','—'],
    ['PROFECO','Consumer protection agency that mediates disputes and can impose penalties.','profeco.gob.mx'],
    ['CNDH','National Human Rights Commission receives complaints against authorities.','cndh.org.mx'],
    ['Bufetes jurídicos universitarios','University legal clinics offering free representation.','—']]},
{iso:'ARG',n:'Argentina',
 r:[['Defensoría General','Public defenders covering criminal and civil matters for those who cannot pay.','mpd.gov.ar'],
    ['Centros de Acceso a Justicia','Walk-in justice access centres in neighbourhoods across the country.','—'],
    ['Defensoría del Pueblo','Ombudsman handling complaints against public bodies.','—']]},
{iso:'CHL',n:'Chile',
 r:[['Corporación de Asistencia Judicial','Free legal assistance offices nationwide, the main civil legal aid route.','cajmetro.cl'],
    ['Defensoría Penal Pública','Public criminal defence, free for anyone who cannot afford a lawyer.','dpp.cl'],
    ['SERNAC','Consumer protection service mediating disputes with businesses.','sernac.cl']]},
{iso:'COL',n:'Colombia',
 r:[['Defensoría del Pueblo','Ombudsman providing public defenders and receiving rights complaints.','defensoria.gov.co'],
    ['Consultorios jurídicos','Compulsory university law clinics — a major source of free representation.','—'],
    ['Acción de tutela','A fast constitutional remedy any person can file without a lawyer, decided within ten days.','—']]},
{iso:'EGY',n:'Egypt',
 r:[['Lawyers Syndicate','The bar operates a legal aid committee and free consultation days.','—'],
    ['National Council for Human Rights','Receives complaints and provides legal support in rights cases.','nchr.eg'],
    ['University legal clinics','Law faculties run clinics offering free advice.','—']]},
{iso:'GHA',n:'Ghana',
 r:[['Legal Aid Commission','Statutory body providing free representation in criminal and family matters.','legalaid.gov.gh'],
    ['CHRAJ','Commission on Human Rights and Administrative Justice — free complaints against public bodies.','chraj.gov.gh'],
    ['Legal Resources Centre','NGO providing advice and paralegal support.','—']]},
{iso:'TZA',n:'Tanzania',
 r:[['Legal Services Facility','Funds paralegal centres providing free advice across the country.','lsftz.org'],
    ['Legal and Human Rights Centre','Free legal aid clinics and rights litigation.','humanrights.or.tz'],
    ['TAWLA','Women lawyers association offering free assistance in family matters.','—']]},
{iso:'PHL',n:'Philippines',
 r:[['Public Attorney’s Office','Free representation in criminal and civil cases for the indigent.','pao.gov.ph'],
    ['Integrated Bar of the Philippines','Legal aid offices in every chapter across the country.','ibp.ph'],
    ['Commission on Human Rights','Investigates rights violations and provides legal assistance.','chr.gov.ph']]},
{iso:'IDN',n:'Indonesia',
 r:[['Bantuan Hukum','State-funded legal aid delivered through accredited organisations.','—'],
    ['LBH','Legal Aid Institute offices providing free representation, particularly in rights cases.','—'],
    ['Ombudsman Republik Indonesia','Free complaints about maladministration by public services.','ombudsman.go.id']]},
{iso:'MYS',n:'Malaysia',
 r:[['Legal Aid Department','Government legal aid for family, criminal and some civil matters.','jbg.gov.my'],
    ['Bar Council Legal Aid Centre','Free legal clinics run by volunteer lawyers in each state.','—'],
    ['SUHAKAM','Human rights commission receiving complaints free of charge.','suhakam.org.my']]},
{iso:'PAK',n:'Pakistan',
 r:[['Legal Aid and Justice Authority','Federal body funding legal representation for those who cannot pay.','—'],
    ['District Legal Empowerment Committees','Provide funds for lawyers in each district.','—'],
    ['AGHS Legal Aid Cell','Long-established free legal aid organisation.','—']]},
{iso:'TUR',n:'Türkiye',
 r:[['Adli yardım','Legal aid administered by the bar associations, covering fees and a lawyer.','—'],
    ['Baro','Provincial bar associations operate legal aid bureaux and consultation days.','—'],
    ['Kamu Denetçiliği Kurumu','The Ombudsman Institution examines complaints about public administration.','ombudsman.gov.tr']]},
{iso:'NZL',n:'New Zealand',
 r:[['Legal Aid','Government-funded lawyer for criminal, family and civil matters, repayable in some cases.','justice.govt.nz'],
    ['Community Law Centres','Free legal help nationwide, no means test for initial advice.','communitylaw.org.nz'],
    ['Citizens Advice Bureau','Free information and referral on any problem.','cab.org.nz'],
    ['Tenancy Services','Free dispute resolution for landlords and tenants.','tenancy.govt.nz']]},
{iso:'PSE',n:'Palestine',
 r:[['Palestinian Bar Association','Operates legal aid committees and free consultation.','—'],
    ['Independent Commission for Human Rights','National human rights institution receiving individual complaints.','ichr.ps'],
    ['Legal aid NGOs','Several organisations provide free representation, particularly in family and detention matters.','—']]},
{iso:'ARE',n:'United Arab Emirates',
 r:[['Legal aid on request','Courts may appoint a lawyer at the state’s expense in serious criminal cases.','—'],
    ['Ministry of Justice consultation','Free legal consultation services offered through ministry channels.','moj.gov.ae'],
    ['Labour dispute mediation','Free mediation through the labour ministry before a case reaches court.','mohre.gov.ae']]}];

const HELPEU=[
['European e-Justice Portal','Explains how to find a lawyer, legal aid and cross-border procedures in every EU member state.','e-justice.europa.eu'],
['European Consumer Centres Network','Free help with cross-border consumer disputes inside the EU, Norway and Iceland.','eccnet.eu'],
['SOLVIT','Free resolution of problems caused by a public body misapplying EU law.','ec.europa.eu/solvit'],
['European Court of Human Rights','Individual applications against member states, after domestic remedies are exhausted.','echr.coe.int']];

const HELPBY=[
['Housing and eviction','Tenants\' union · law centre · local authority homelessness team · housing charity · rent tribunal'],
['Employment and dismissal','Trade union · labour inspectorate · conciliation service · employment tribunal duty scheme'],
['Consumer and faulty goods','Sector ombudsman · consumer protection agency · small claims court · card chargeback'],
['Debt and money','Free debt advice charity · financial ombudsman · statutory debt solutions'],
['Family and children','Family mediation service · legal aid (usually available for children matters) · domestic abuse service'],
['Immigration and asylum','Accredited immigration adviser · refugee charity · detention duty scheme · consulate'],
['Criminal','Duty solicitor or public defender · legal aid · court duty scheme'],
['Discrimination','Equality body or human rights commission · specialist NGO · union'],
['Public bodies and benefits','Ombudsman · welfare rights adviser · judicial review clinic'],
['Data and privacy','National data protection authority — complaints are normally free']];

/* ==================================================================
   LETTER BUILDER — templates
   ================================================================== */
const F={
 me:['Your full name','text','Amina Haddad'],
 myaddr:['Your address','area','12 Rue des Oliviers\nCasablanca 20000'],
 them:['Their name or company','text','Northgate Lettings Ltd'],
 theiraddr:['Their address','area','4 High Street\nManchester M1 2AB'],
 date:['Date of the letter','text',''],
 ref:['Reference or account number','text','TEN-4471'],
};
const LETTERS=[
{id:'deposit',cat:'Housing',t:'Demand for return of a tenancy deposit',
 when:'Your tenancy ended, the deposit has not come back, and no itemised deductions have been given.',
 fields:['me','myaddr','them','theiraddr','ref',
   ['prop','Address of the property you rented','area','12 Rue des Oliviers, Apt 3'],
   ['ended','Date the tenancy ended','text','1 June 2026'],
   ['amount','Deposit amount','text','9,000'],
   ['days','Days you are giving them to respond','text','14']],
 body:`Dear {{them}},

RE: RETURN OF TENANCY DEPOSIT — {{prop}}

My tenancy of the above property ended on {{ended}}. I paid a deposit of {{amount}} at the start of the tenancy.

To date the deposit has not been returned to me, and I have not received any itemised statement of deductions or supporting evidence for them.

The deposit is my money, held conditionally. Deductions may only be made for actual loss or damage beyond fair wear and tear, and must be itemised and evidenced.

I therefore ask you to return the full sum of {{amount}} within {{days}} days of the date of this letter. If you consider any deduction is due, please send me a written breakdown of each item with supporting evidence within the same period.

If I do not hear from you I will pursue the matter through the appropriate deposit adjudication scheme or the courts, and will rely on this letter.

Yours sincerely,

{{me}}`,
 next:'Send it in a way that proves delivery. If there is a deposit protection or adjudication scheme where you live, it is usually free, faster than court, and decides on the paperwork alone.'},

{id:'repair',cat:'Housing',t:'Formal notice of disrepair to a landlord',
 when:'Something is broken, you have mentioned it, and nothing has happened.',
 fields:['me','myaddr','them','theiraddr',
   ['prop','Address of the property','area','12 Rue des Oliviers, Apt 3'],
   ['issue','What is wrong','area','The boiler has not produced hot water since 3 May. The kitchen ceiling has a spreading damp patch.'],
   ['told','When and how you first reported it','text','by WhatsApp on 4 May 2026'],
   ['days','Days you are giving them to act','text','14']],
 body:`Dear {{them}},

RE: DISREPAIR AT {{prop}}

I am writing to give you formal notice of disrepair at the above property, which I rent from you.

The problems are:

{{issue}}

I first reported this {{told}}. The repairs have not been carried out.

You are responsible for keeping the structure and installations of the property in repair and the property fit to live in. That obligation is implied into the tenancy by law and cannot be removed by any term of the agreement.

Please arrange for the necessary repairs to be carried out within {{days}} days, and confirm in writing when access is required. I am happy to provide reasonable access.

If the repairs are not carried out I will consider my options, which may include reporting the condition of the property to the local authority and seeking an order and compensation.

Yours sincerely,

{{me}}`,
 next:'Photograph everything with dates before and after. Keep paying rent unless you have checked that withholding is lawful where you live — in many places it is not, and it hands the landlord a ground.'},

{id:'faulty',cat:'Consumer',t:'Faulty goods — request repair, replacement or refund',
 when:'Something you bought is defective, and the seller is stalling or pointing at the manufacturer.',
 fields:['me','myaddr','them','theiraddr','ref',
   ['item','What you bought','text','Bosch dishwasher, model SMS4H'],
   ['bought','Date of purchase','text','2 February 2026'],
   ['price','Price paid','text','4,300'],
   ['fault','What is wrong with it','area','It stops mid-cycle and displays error E15. This has happened since the third week of use.'],
   ['want','What you want','text','a full refund'],
   ['days','Days for them to respond','text','14']],
 body:`Dear {{them}},

RE: FAULTY GOODS — {{item}}

I bought the above item from you on {{bought}} for {{price}}.

The fault is:

{{fault}}

Goods must be of satisfactory quality, fit for their purpose and as described. This item is not. That obligation is owed by you as the seller — not by the manufacturer — and it exists independently of any warranty or guarantee.

I am therefore asking for {{want}}.

Please respond within {{days}} days. If I do not receive a satisfactory response I will refer the matter to the relevant consumer protection body or ombudsman, and to the small claims procedure if necessary. I will rely on this letter on the question of costs.

Yours sincerely,

{{me}}`,
 next:'If you paid by card or through a platform, check the chargeback and buyer-protection deadlines at the same time — they run independently and are often quicker than any complaint.'},

{id:'cooling',cat:'Consumer',t:'Cancelling an online order within the cooling-off period',
 when:'You bought at a distance, changed your mind, and are inside the withdrawal window.',
 fields:['me','myaddr','them','ref',
   ['item','What you ordered','text','Two dining chairs, oak'],
   ['ordered','Date ordered','text','20 July 2026'],
   ['received','Date delivered','text','24 July 2026']],
 body:`Dear {{them}},

RE: NOTICE OF WITHDRAWAL — ORDER {{ref}}

I am giving notice that I am withdrawing from the contract for {{item}}, ordered on {{ordered}} and delivered on {{received}}.

This is a distance contract and I am exercising my statutory right of withdrawal within the cooling-off period. No reason is required and no penalty applies.

Please confirm the return arrangements and refund the full amount paid, including the standard outbound delivery charge, to the original payment method.

Yours sincerely,

{{me}}`,
 next:'The date you send this notice is what counts, not the date the item gets back to them. Keep proof that you sent it inside the window.'},

{id:'dsar',cat:'Data',t:'Data subject access request',
 when:'You want to know what an organisation holds about you — often the strongest first step in an employment or complaint dispute.',
 fields:['me','myaddr','them','theiraddr','ref',
   ['context','How they know you','text','I have been an employee since March 2023, payroll number 8841.']],
 body:`Dear {{them}},

RE: DATA SUBJECT ACCESS REQUEST

I am making a request for access to the personal data you hold about me. {{context}}

Please provide:

1. Confirmation of whether you are processing personal data about me.
2. A copy of all personal data you hold about me, in a commonly used electronic format.
3. The purposes of the processing and the legal basis relied on.
4. The categories of personal data concerned.
5. The recipients or categories of recipient to whom the data has been or will be disclosed.
6. The retention period, or the criteria used to determine it.
7. The source of the data where it was not collected from me.
8. Whether any automated decision-making or profiling is applied, and the logic involved.

This request covers emails, messages, notes, recordings, records of meetings and any other document in which I am identified or identifiable, including material held by individual staff.

Please respond within the statutory period. This request is made free of charge.

Yours sincerely,

{{me}}`,
 next:'Response deadlines are typically one month. If they ignore it or refuse, complaining to the national data protection authority costs nothing and organisations take those complaints seriously.'},

{id:'erasure',cat:'Data',t:'Request to erase personal data',
 when:'You want an organisation to delete what it holds about you.',
 fields:['me','myaddr','them','ref',
   ['what','What you want erased','area','My account, contact details and all marketing profiles associated with the email address above.'],
   ['why','Why erasure applies','area','The data is no longer necessary for the purpose it was collected for, and I withdraw any consent previously given.']],
 body:`Dear {{them}},

RE: REQUEST FOR ERASURE OF PERSONAL DATA

I am requesting the erasure of personal data you hold about me.

The data concerned:

{{what}}

The grounds on which I make this request:

{{why}}

Please also confirm that you have communicated this request to any recipients to whom the data has been disclosed, unless doing so is impossible or involves disproportionate effort.

If you consider that an exemption applies to any part of this request, please identify the data concerned and the specific exemption relied on.

Please respond within the statutory period.

Yours sincerely,

{{me}}`,
 next:'Erasure is not absolute — organisations can refuse where they have a legal obligation to keep records. Making them state which exemption they rely on is the useful part.'},

{id:'wages',cat:'Work',t:'Claim for unpaid or incorrect wages',
 when:'You have not been paid what you worked for.',
 fields:['me','myaddr','them','theiraddr','ref',
   ['role','Your job title','text','Warehouse operative'],
   ['period','Period affected','text','1 June to 31 July 2026'],
   ['detail','What is missing and how you calculate it','area','34 hours of overtime at the contractual rate, plus 3 days of accrued but untaken leave on termination.'],
   ['amount','Total you say is owed','text','6,240'],
   ['days','Days for them to pay','text','14']],
 body:`Dear {{them}},

RE: UNPAID WAGES — {{role}}

I am writing about a shortfall in wages properly due to me for the period {{period}}.

The shortfall is:

{{detail}}

The total I calculate as outstanding is {{amount}}.

Wages properly due for work performed must be paid in full, and deductions may only be made where they are authorised by law or by a written term I have agreed to. Please provide an itemised explanation of any deduction you say applies.

Please pay the outstanding amount within {{days}} days, or set out in writing why you say it is not due.

If the matter is not resolved I will pursue it through the appropriate labour inspectorate or employment tribunal.

Yours sincerely,

{{me}}`,
 next:'Employment time limits are among the shortest in law — sometimes weeks. Send this quickly, but check the tribunal deadline separately and do not let it pass while you wait for a reply.'},

{id:'grievance',cat:'Work',t:'Formal grievance to an employer',
 when:'Something has happened at work and you need the employer formally on notice.',
 fields:['me','myaddr','them','theiraddr',
   ['role','Your job title','text','Account manager'],
   ['what','What has happened, with dates','area','On 12 June my line manager made repeated comments about my accent in front of the team. I raised it informally on 15 June. On 20 June I was removed from two client accounts without explanation.'],
   ['want','What outcome you are asking for','area','An investigation, and reinstatement to the accounts I was removed from.']],
 body:`Dear {{them}},

RE: FORMAL GRIEVANCE

I am raising a formal grievance under the company's grievance procedure.

The matters I am raising:

{{what}}

The outcome I am seeking:

{{want}}

Please confirm receipt, tell me who will investigate, and let me know the date of the grievance meeting. I would like to be accompanied at that meeting.

I would be grateful if you would preserve all relevant records, including emails, messages and notes, while this grievance is being considered.

Yours sincerely,

{{me}}`,
 next:'Keep this factual and dated. The purpose is to put the employer formally on notice — the tone that reads best later is calm and specific, not angry.'},

{id:'reasons',cat:'Work',t:'Request written reasons for dismissal',
 when:'You were dismissed and given no reason, or a reason you believe is a cover story.',
 fields:['me','myaddr','them','theiraddr',
   ['role','Your job title','text','Sales assistant'],
   ['ended','Date your employment ended','text','30 July 2026']],
 body:`Dear {{them}},

RE: REQUEST FOR WRITTEN REASONS FOR DISMISSAL

My employment as {{role}} ended on {{ended}}.

Please provide me with a written statement of the reasons for my dismissal.

Please also confirm:

1. The date my employment is treated as having ended.
2. Whether notice was given or paid in lieu, and how it was calculated.
3. The sums paid in respect of accrued but untaken leave.
4. Whether any right of appeal exists and how to exercise it.

I would be grateful if you would preserve all records relating to my employment and its termination.

Yours sincerely,

{{me}}`,
 next:'A refusal to give reasons in writing is itself often useful evidence. Send this early — before you lose access to your work email and documents if you have not already.'},

{id:'final',cat:'Disputes',t:'Request a final response so you can escalate to an ombudsman',
 when:'You have complained, nothing has happened, and you need to unlock the ombudsman route.',
 fields:['me','myaddr','them','ref',
   ['complained','Date you first complained','text','3 May 2026'],
   ['about','What the complaint is about','area','An unauthorised charge of 1,150 taken from my account on 28 April, which I reported the same day.']],
 body:`Dear {{them}},

RE: REQUEST FOR A FINAL RESPONSE — {{ref}}

I complained to you on {{complained}} about the following:

{{about}}

I have not received a substantive resolution.

Please treat this letter as a request for your final response so that, if the matter remains unresolved, I may refer it to the relevant ombudsman or dispute resolution scheme.

If you do not issue a final response within the period allowed under the applicable complaints rules, I will refer the matter regardless and will provide this letter as evidence of the date of my complaint.

Yours sincerely,

{{me}}`,
 next:'Most ombudsman schemes require you to complain to the business first and either get a final response or wait a set period. This letter is what starts that clock properly.'},

{id:'lba',cat:'Disputes',t:'Letter before action',
 when:'You are close to issuing a claim and need to make a formal demand first.',
 fields:['me','myaddr','them','theiraddr',
   ['claim','What the dispute is about','area','A contract dated 14 March 2026 under which you agreed to install kitchen units by 30 April. The work was abandoned on 2 May and remains incomplete.'],
   ['amount','Amount you are claiming','text','18,500'],
   ['how','How you calculate it','area','12,000 already paid, plus 6,500 quoted by another contractor to complete the work.'],
   ['days','Days you are allowing','text','14']],
 body:`Dear {{them}},

RE: LETTER BEFORE ACTION

This letter is written before the issue of proceedings and sets out my claim so that you have the opportunity to resolve it without litigation.

The claim concerns:

{{claim}}

The amount claimed is {{amount}}, calculated as follows:

{{how}}

I ask you to pay the sum of {{amount}} within {{days}} days of the date of this letter, or to set out in writing the basis on which you dispute the claim, enclosing any documents you rely on.

If I do not receive a satisfactory response within that period, I will issue proceedings without further notice. I will draw this letter to the court's attention on the question of costs.

Yours sincerely,

{{me}}`,
 next:'Many jurisdictions expect a letter like this before you sue, and penalise claimants who skip it. Keep the copy you send — the fact you gave a fair chance to settle is worth real money on costs.'},

{id:'stopcontact',cat:'Disputes',t:'Dispute a debt and require contact in writing',
 when:'A collector is chasing you for something you do not owe, or contacting you unreasonably.',
 fields:['me','myaddr','them','ref',
   ['why','Why you dispute it','area','I have never held an account with the original creditor named. I have asked twice for the agreement and have received nothing.']],
 body:`Dear {{them}},

RE: DISPUTED ACCOUNT {{ref}}

I dispute the debt you are pursuing.

{{why}}

Please provide a copy of the original agreement, a full statement of account showing how the sum claimed is made up, and confirmation of the identity of the current creditor.

Until you have provided that documentation, please treat the account as in dispute and suspend collection activity.

I also ask that all further contact be made in writing to the address above, and not by telephone, at my place of work, or through third parties.

Yours sincerely,

{{me}}`,
 next:'Keep a log of every contact after this letter — date, time and what was said. Continued pressure after a written dispute is itself often a regulatory breach.'}];

/* ==================================================================
   CASE BRIEF TRAINER
   ================================================================== */
const BRIEFS=[
{id:'donoghue',
 issue:[['Whether a manufacturer owes a duty of care to the ultimate consumer of its product in the absence of a contract',1],
        ['Whether ginger beer sold in an opaque bottle is of merchantable quality',0],
        ['Whether a friend who buys a drink for another can sue on the contract',0]],
 hold:[['A manufacturer owes a duty to take reasonable care to avoid acts likely to injure persons closely and directly affected',1],
       ['Contractual privity is required before any claim in tort can be brought',0],
       ['Liability attaches only where the defect could have been discovered on inspection',0]],
 ratio:[['You must take reasonable care to avoid acts you can reasonably foresee would injure your neighbour',1],
        ['Lord Atkin\'s reference to the biblical question "who is my neighbour"',0],
        ['The observation that Scottish and English law are the same on this point',0]]},
{id:'marbury',
 issue:[['Whether the Court may declare an Act of Congress unconstitutional and refuse to apply it',1],
        ['Whether Marbury was entitled to delivery of his commission',0],
        ['Whether the Secretary of State can be sued personally',0]],
 hold:[['A law repugnant to the Constitution is void, and it is the province of the courts to say what the law is',1],
       ['The Judiciary Act of 1789 was validly enacted in every respect',0],
       ['Executive officers are immune from judicial process',0]],
 ratio:[['An Act of Congress conflicting with the Constitution cannot be applied by a court',1],
        ['Marshall\'s discussion of whether a commission takes effect on signing or delivery',0],
        ['The remark that the government of the United States is one of laws, not of men',0]]},
{id:'brown',
 issue:[['Whether racially segregated public schools violate the Equal Protection Clause',1],
        ['Whether the federal government may compel states to fund schools equally',0],
        ['Whether Plessy was correctly decided on its own facts in 1896',0]],
 hold:[['Separate educational facilities are inherently unequal, so segregation denies equal protection',1],
       ['Segregation is permissible where physical facilities are demonstrably equal',0],
       ['The question is one for Congress rather than the courts',0]],
 ratio:[['Separating children solely by race generates a feeling of inferiority that impairs education, so equality cannot be achieved',1],
        ['The Court\'s survey of the historical intent behind the Fourteenth Amendment',0],
        ['The reference to contemporary psychological studies in a footnote',0]]},
{id:'riley',
 issue:[['Whether police may search a mobile phone incident to arrest without a warrant',1],
        ['Whether the arrest itself was lawful',0],
        ['Whether digital evidence is admissible at trial',0]],
 hold:[['A warrant is generally required before searching a phone seized on arrest',1],
       ['Phones may be searched because they are found on the arrested person',0],
       ['Officers may search a phone only if it is unlocked',0]],
 ratio:[['A phone differs in kind and quantity from physical items, so the rationales for search incident to arrest do not extend to its data',1],
        ['The observation that phones are now such a pervasive part of daily life that a visitor from Mars might think them a feature of human anatomy',0],
        ['The note that the government may still rely on exigent circumstances in a particular case',0]]},
{id:'carlill',
 issue:[['Whether an advertisement promising money can amount to a binding offer capable of acceptance by performance',1],
        ['Whether the smoke ball was an effective medical treatment',0],
        ['Whether the company could be wound up for its debts',0]],
 hold:[['The advertisement was a unilateral offer to the world, accepted by performing the stated conditions',1],
       ['Advertisements are always invitations to treat and never offers',0],
       ['Consideration was absent because Mrs Carlill paid nothing to the company',0]],
 ratio:[['An offer may be made to the world at large and accepted by performance without notification of acceptance',1],
        ['The remark that the £1,000 deposited at the bank showed sincerity',0],
        ['Bowen LJ\'s aside about the inconvenience of requiring notification in such cases',0]]},
{id:'kesav',
 issue:[['Whether Parliament\'s power to amend the Constitution is unlimited',1],
        ['Whether the property of religious institutions may be acquired by the state',0],
        ['Whether the Supreme Court may sit as a bench of thirteen judges',0]],
 hold:[['Parliament may amend any provision but may not alter or destroy the Constitution\'s basic structure',1],
       ['Parliament may amend any provision including fundamental rights without limit',0],
       ['Constitutional amendments are not justiciable at all',0]],
 ratio:[['The amending power does not extend to abrogating the essential features that give the Constitution its identity',1],
        ['The various judges\' differing lists of what those essential features are',0],
        ['The observation that the Preamble forms part of the Constitution',0]]},
{id:'maka',
 issue:[['Whether the death penalty is consistent with the rights to life and dignity under the new Constitution',1],
        ['Whether the accused had a fair trial in the court below',0],
        ['Whether the Constitutional Court may hear criminal appeals at all',0]],
 hold:[['Capital punishment is unconstitutional as cruel, inhuman and degrading punishment inconsistent with life and dignity',1],
       ['The death penalty is permissible where the offence is sufficiently grave',0],
       ['The question should be decided by referendum rather than by the Court',0]],
 ratio:[['The rights to life and dignity are the most important of all rights, and the state cannot vindicate them by taking life',1],
        ['The extensive comparative survey of foreign abolition decisions',0],
        ['The discussion of ubuntu as an underlying constitutional value',0]]},
{id:'vangend',
 issue:[['Whether a Treaty provision can create rights individuals may enforce in national courts',1],
        ['Whether the Netherlands had breached the Treaty by reclassifying a product',0],
        ['Whether national courts must refer every question to the Court of Justice',0]],
 hold:[['The Treaty creates a new legal order whose subjects include individuals, who may rely on clear and unconditional provisions directly',1],
       ['Treaty obligations bind states only and are enforceable only by the Commission',0],
       ['Individuals may rely on the Treaty only after implementing legislation is passed',0]],
 ratio:[['A clear, unconditional Treaty provision not requiring further implementation confers rights enforceable by individuals in national courts',1],
        ['The observation that the preamble refers to peoples as well as states',0],
        ['The comment on the role of the preliminary reference procedure generally',0]]},
{id:'entick',
 issue:[['Whether a Secretary of State may authorise entry and seizure of papers by a general warrant',1],
        ['Whether the papers seized were in fact seditious',0],
        ['Whether messengers may be sued personally for acts of the Crown',0]],
 hold:[['The warrant was unlawful, because no statute or precedent authorised the entry and seizure',1],
       ['State necessity is sufficient justification for entry without specific authority',0],
       ['Long practice by Secretaries of State validated the warrant',0]],
 ratio:[['The state may act only where positive law authorises it; if it is law it will be found in our books, and if it is not it is no law',1],
        ['Lord Camden\'s remark that the great end for which men entered society was to secure their property',0],
        ['The discussion of whether the messengers acted with excessive force',0]]},
{id:'miranda',
 issue:[['Whether statements obtained in custodial interrogation are admissible without prior warning of rights',1],
        ['Whether Miranda was in fact guilty of the offences charged',0],
        ['Whether a confession must be corroborated by other evidence',0]],
 hold:[['A suspect must be warned of the right to silence and to counsel before custodial interrogation, or statements are inadmissible',1],
       ['Warnings are required only where the suspect asks for a lawyer',0],
       ['Confessions are admissible provided no physical force was used',0]],
 ratio:[['Custodial interrogation is inherently coercive, so procedural safeguards are required to protect the privilege against self-incrimination',1],
        ['The Court\'s survey of police interrogation manuals of the period',0],
        ['The suggestion that Congress or the states might devise other equally effective safeguards',0]]}];

/* ==================================================================
   FIND HELP
   ================================================================== */
let helpJ='GBR';
function renderHelp(){
  const j=HELPJ.find(x=>x.iso===helpJ)||HELPJ[0];
  $('#b-help').innerHTML=`
    <div class="howto reveal"><b>How to read this</b><p>Every briefing on this site ends by telling you to speak to someone. This page is that someone. If it is urgent, read the red panel first. Otherwise match your problem in step one and find your country in step two.</p></div>
    
    <div class="panel mb2" style="border-left:4px solid var(--red)">
      <div class="panel-h"><h3>If this is urgent</h3><span class="hint">Read this first</span></div>
      <div class="panel-b" style="padding-top:8px">
        ${URGENT.map(u=>`<div class="tourrow"><span class="n" style="border-color:var(--red);color:var(--red)">!</span>
          <div><b>${esc(u.t)}</b><p>${esc(u.d)}</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
            ${u.a.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div></div></div>`).join('')}
      </div></div>

    <div class="exh"><u>STEP 1</u><h3>What kind of help do you need?</h3>
      <span>match the problem to the right kind of organisation</span></div>
    <div class="tbl-wrap mb2"><table><thead><tr><th style="cursor:default">Your problem</th>
      <th style="cursor:default">Who to approach, in rough order</th></tr></thead><tbody>
      ${HELPBY.map(([a,b])=>`<tr style="cursor:default"><td class="nm">${esc(a)}</td>
        <td style="color:var(--dim);white-space:normal">${esc(b)}</td></tr>`).join('')}</tbody></table></div>

    <div class="exh"><u>STEP 2</u><h3>Where you are</h3>
      <span>${HELPJ.length} jurisdictions in detail, and a method for anywhere else</span></div>
    <div class="ctl" id="helpChips">${HELPJ.map(x=>
      `<button class="chip ${x.iso===helpJ?'on':''}" data-h="${x.iso}">${esc(x.n)}</button>`).join('')}</div>
    <div class="panel mb2"><div class="panel-h"><h3>${esc(j.n)}</h3>
      <span class="hint">${byIso[j.iso]?TRAD[byIso[j.iso].trad]:''}</span></div>
      <div class="panel-b" style="padding-top:8px">
        ${j.r.map(([n,d,w])=>`<div class="tourrow">
          <span class="n">›</span><div><b>${esc(n)}</b><p>${esc(d)}</p>
          ${w&&w!=='—'?`<p style="font-family:var(--mono);font-size:.74rem;color:var(--brass);margin-top:4px">${esc(w)}</p>`:''}
          </div></div>`).join('')}
      </div></div>

    <div class="grid g2 mb2">
      <div class="panel"><div class="panel-h"><h3>Anywhere else</h3>
        <span class="hint">The eight kinds of help that exist almost everywhere</span></div>
        <div class="panel-b" style="padding-top:8px">
          ${HELPKINDS.map(([a,b])=>`<div class="tourrow"><span class="n">·</span>
            <div><b>${esc(a)}</b><p>${esc(b)}</p></div></div>`).join('')}
        </div></div>
      <div>
        <div class="panel mb"><div class="panel-h"><h3>Cross-border and European routes</h3></div>
          <div class="panel-b" style="padding-top:8px">
            ${HELPEU.map(([a,b,w])=>`<div class="tourrow"><span class="n">·</span>
              <div><b>${esc(a)}</b><p>${esc(b)}</p>
              <p style="font-family:var(--mono);font-size:.74rem;color:var(--brass);margin-top:4px">${esc(w)}</p></div></div>`).join('')}
          </div></div>
        <div class="panel"><div class="panel-h"><h3>What to bring</h3></div>
          <div class="panel-b">
            <p style="font-size:.9rem;color:var(--dim);margin-bottom:12px">Advice services are usually free but rushed.
              Turning up organised roughly doubles what you get out of the appointment.</p>
            <ul style="margin-left:20px;color:var(--dim);font-size:.89rem">
              <li style="margin-bottom:7px">A one-page dated timeline of what happened</li>
              <li style="margin-bottom:7px">The contract, tenancy agreement or terms, if there is one</li>
              <li style="margin-bottom:7px">Every letter, email and message between you and the other side</li>
              <li style="margin-bottom:7px">Proof of payment — bank statements, receipts, payslips</li>
              <li style="margin-bottom:7px">Any deadline you already know about, written at the top</li>
              <li>Identification and, if means-tested help is involved, proof of income</li>
            </ul>
            <button class="btn ghost" style="margin-top:16px" onclick="go('guide')">Build a timeline in the walkthrough →</button>
          </div></div>
      </div>
    </div>

    <div class="disclaim"><b>Verify before you rely on any of this.</b> Organisations, eligibility rules and contact
      details change, and this page is a snapshot. Treat the names here as a starting point for a search rather than
      a current directory — and where a phone number matters, confirm it on the organisation's own website first.</div>`;
  $('#rt-help').textContent=`${HELPJ.length} jurisdictions`;
  $('#helpChips').onclick=e=>{const c=e.target.closest('.chip');if(!c)return;helpJ=c.dataset.h;renderHelp();};
}

/* ==================================================================
   LETTER BUILDER
   ================================================================== */
let letSel='deposit', letVals={};
function fieldDef(f){ return typeof f==='string' ? [f,...F[f]] : f; }
function renderLetters(){
  const L=LETTERS.find(x=>x.id===letSel)||LETTERS[0];
  const cats=[...new Set(LETTERS.map(x=>x.cat))];
  const defs=L.fields.map(fieldDef);
  const today=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  let out=L.body;
  defs.forEach(([k,label,type,ph])=>{
    const v=(letVals[L.id]||{})[k];
    out=out.split('{{'+k+'}}').join(v&&v.trim()?v.trim():'['+label.toUpperCase()+']');
  });
  const head=((letVals[L.id]||{}).myaddr||'[YOUR ADDRESS]')+'\n\n'+today+'\n\n'+
    (((letVals[L.id]||{}).theiraddr)?((letVals[L.id]||{}).theiraddr)+'\n\n':'');
  const full=head+out;
  $('#b-letters').innerHTML=`
    <div class="ctl" id="letCats">${cats.map(c=>`<span class="tag b">${esc(c)}</span>`).join('')}</div>
    <div class="grid g2">
      <div>
        <div class="exh" style="margin-top:0;border:0;padding-top:0"><u>STEP 1</u><h3>Pick a letter</h3></div>
        <div class="ctl" id="letChips" style="margin-bottom:20px">${LETTERS.map(x=>
          `<button class="chip ${x.id===letSel?'on':''}" data-l="${x.id}">${esc(x.t.length>34?x.t.slice(0,32)+'…':x.t)}</button>`).join('')}</div>
        <div class="panel mb"><div class="panel-b">
          <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--brass)">USE THIS WHEN</div>
          <p style="font-size:.9rem;color:var(--dim);margin-top:6px">${esc(L.when)}</p></div></div>
        <div class="exh"><u>STEP 2</u><h3>Fill in the blanks</h3><span>runs in your browser \u00b7 nothing is sent anywhere</span></div>
        <div class="panel"><div class="panel-b">
          ${defs.map(([k,label,type,ph])=>{
            const v=esc(((letVals[L.id]||{})[k])||'');
            return `<div style="margin-bottom:15px"><div class="slabel" style="margin-bottom:6px"><span>${esc(label)}</span></div>
              ${type==='area'
                ?`<textarea data-f="${k}" rows="3" style="width:100%" placeholder="${esc(ph||'')}">${v}</textarea>`
                :`<input type="text" data-f="${k}" style="width:100%" value="${v}" placeholder="${esc(ph||'')}">`}</div>`}).join('')}
          <button class="btn ghost" id="letClear">Clear this form</button>
        </div></div>
      </div>
      <div>
        <div class="exh" style="margin-top:0;border:0;padding-top:0"><u>STEP 3</u><h3>Your letter</h3>
          <span>copy it, or print it</span></div>
        <div class="panel mb" id="letterPaper"><div class="panel-b">
          <pre style="white-space:pre-wrap;font-family:var(--serif);font-size:.94rem;line-height:1.7;color:var(--ink);margin:0">${esc(full)}</pre>
        </div></div>
        <div class="ctl">
          <button class="btn" id="letCopy">Copy to clipboard</button>
          <button class="btn ghost" id="letPrint">Print or save as PDF</button>
        </div>
        <div class="note"><b>What happens next.</b> ${esc(L.next)}</div>
        <div class="disclaim" style="margin-top:18px"><b>A template, not advice.</b> These letters are written to be
          reasonable and clear in most systems, but wording, deadlines and the right recipient vary by jurisdiction.
          Read it through and change anything that does not match your situation before you send it.</div>
      </div>
    </div>`;
  $('#rt-letters').textContent=`${LETTERS.length} templates`;
  $('#letChips').onclick=e=>{const c=e.target.closest('.chip');if(!c)return;letSel=c.dataset.l;renderLetters();};
  $$('#b-letters [data-f]').forEach(el=>{
    el.oninput=()=>{ letVals[L.id]=letVals[L.id]||{}; letVals[L.id][el.dataset.f]=el.value;
      const pre=$('#letterPaper pre'); if(!pre)return;
      let o=L.body; defs.forEach(([k,label])=>{const v=(letVals[L.id]||{})[k];
        o=o.split('{{'+k+'}}').join(v&&v.trim()?v.trim():'['+label.toUpperCase()+']')});
      const h=((letVals[L.id]||{}).myaddr||'[YOUR ADDRESS]')+'\n\n'+today+'\n\n'+
        (((letVals[L.id]||{}).theiraddr)?((letVals[L.id]||{}).theiraddr)+'\n\n':'');
      pre.textContent=h+o; };
  });
  $('#letClear').onclick=()=>{letVals[L.id]={};renderLetters()};
  $('#letCopy').onclick=async()=>{
    const txt=$('#letterPaper pre').textContent;
    try{ await navigator.clipboard.writeText(txt); toast('Letter copied to clipboard'); }
    catch(e){ const ta=document.createElement('textarea'); ta.value=txt; document.body.appendChild(ta);
      ta.select(); try{document.execCommand('copy');toast('Letter copied')}catch(_){toast('Select the text and copy manually')}
      document.body.removeChild(ta); }
  };
  $('#letPrint').onclick=()=>{document.body.classList.add('print-letter');window.print();
    setTimeout(()=>document.body.classList.remove('print-letter'),600)};
}

/* ==================================================================
   CASE BRIEF TRAINER
   ================================================================== */
let brSel=0, brStage=0, brPicks={}, brScore=0;
function renderBrief(){
  const b=BRIEFS[brSel], c=CASES.find(x=>x.id===b.id);
  const stages=[['issue','The issue','What legal question did the court actually have to decide?'],
    ['hold','The holding','What did the court decide on that question?'],
    ['ratio','Ratio or obiter','Which statement is the binding reason for the decision, rather than a remark made in passing?']];
  const [key,label,prompt]=stages[Math.min(brStage,2)];
  const done=brStage>=3;
  const opts=b[key];
  $('#b-brief').innerHTML=`
    <div class="ctl" id="brChips">${BRIEFS.map((x,i)=>{const cc=CASES.find(y=>y.id===x.id);
      return `<button class="chip ${i===brSel?'on':''}" data-b="${i}">${esc(cc?cc.t.split(' v')[0].slice(0,24):x.id)}</button>`}).join('')}</div>
    <div class="grid g2">
      <div class="panel"><div class="panel-h"><h3>${esc(c.t)}</h3><span class="hint">${c.y<0?Math.abs(c.y)+' BC':c.y}</span></div>
        <div class="panel-b">
          <div style="font-size:.78rem;color:var(--faint);margin-bottom:12px">${esc(c.c)}</div>
          <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--brass);margin-bottom:7px">FACTS</div>
          <p style="font-size:.92rem;color:var(--dim);margin-bottom:18px">${c.s}</p>
          ${done?`<div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--brass);margin-bottom:7px">SIGNIFICANCE</div>
            <p style="font-size:.92rem;color:var(--dim)">${c.w}</p>`:
            `<div class="note" style="margin-top:0"><b>How to brief a case.</b> Read the facts, then work out the
             <b>issue</b>, the <b>holding</b> and the <b>ratio decidendi</b>. Only the ratio binds later courts —
             everything else, however memorable, is obiter.</div>`}
        </div></div>
      <div class="panel"><div class="panel-h"><h3>${done?'Brief complete':label}</h3>
        <span class="hint">${done?'':'Step '+(brStage+1)+' of 3'}</span></div>
        <div class="panel-b">
          <div class="prog"><i style="width:${(Math.min(brStage,3)/3)*100}%"></i></div>
          ${done?`<div style="text-align:center;padding:10px 0 18px">
              <div class="gnum" style="color:${brScore===3?'var(--green)':brScore>=2?'var(--amber)':'var(--red)'}">${brScore}<span style="font-size:1.3rem;color:var(--faint)">/3</span></div>
              <p style="margin-top:14px;color:var(--dim);font-size:.9rem">${brScore===3?'Clean brief. You separated the ratio from the obiter, which is the part most people get wrong.':brScore===2?'Close. Re-read the option you missed — the distinction between holding and ratio is subtle and worth getting exact.':'Worth another pass. The ratio is the reasoning the court needed to reach its result; everything else is commentary.'}</p>
              <button class="btn" style="margin-top:18px" id="brAgain">Brief another case</button></div>
            <div style="border-top:1px solid var(--line);padding-top:18px;margin-top:6px">
              ${stages.map(([k,l])=>`<div class="blk"><h4>${l}</h4>
                <p style="font-size:.89rem;color:var(--dim)">${esc(b[k].find(o=>o[1]===1)[0])}</p></div>`).join('')}</div>`
          :`<p style="font-size:.92rem;color:var(--dim);margin-bottom:18px">${prompt}</p>
            <div id="brOpts">${opts.map((o,i)=>`<button class="opt" data-i="${i}">
              <span class="optn">${'ABC'[i]}</span><span>${esc(o[0])}</span></button>`).join('')}</div>
            <div id="brAfter"></div>`}
        </div></div>
    </div>`;
  $('#rt-brief').textContent=`${BRIEFS.length} cases`;
  $('#brChips').onclick=e=>{const c2=e.target.closest('.chip');if(!c2)return;
    brSel=+c2.dataset.b;brStage=0;brScore=0;renderBrief()};
  const ag=$('#brAgain'); if(ag)ag.onclick=()=>{brSel=(brSel+1)%BRIEFS.length;brStage=0;brScore=0;renderBrief()};
  let locked=false;
  $$('#brOpts .opt').forEach(el=>el.onclick=()=>{
    if(locked)return; locked=true;
    const i=+el.dataset.i, ok=opts[i][1]===1;
    if(ok)brScore++;
    $$('#brOpts .opt').forEach((x,k)=>{x.disabled=true;
      if(opts[k][1]===1)x.classList.add('right'); else if(k===i)x.classList.add('wrong')});
    $('#brAfter').innerHTML=`<div class="note" style="margin-top:16px"><b>${ok?'Correct.':'Not that one.'}</b>
      ${key==='issue'?'The issue is the precise legal question in dispute — not the facts, and not the remedy sought.'
        :key==='hold'?'The holding is the court\'s answer to that question, stated as a proposition of law.'
        :'The ratio is the reasoning without which the court could not have reached its decision. Vivid phrases and asides are obiter, however often they get quoted.'}</div>
      <button class="btn" style="margin-top:14px" id="brNext">${brStage>=2?'See the full brief':'Next step'}</button>`;
    $('#brNext').onclick=()=>{brStage++;renderBrief()};
  });
}

/* ==================================================================
   GLOBAL SEARCH  (Cmd/Ctrl + K)
   ================================================================== */
function searchAll(q){
  q=q.toLowerCase().trim(); if(q.length<2)return [];
  const out=[];
  SEC.forEach(x=>{ if((x[2]+' '+x[3]+' '+x[1]).toLowerCase().includes(q))
    out.push({k:'Section',t:x[2].replace(/&amp;/g,'&'),s:x[1],go:()=>go(x[0])}) });
  J.forEach(j=>{ if((j.name+' '+j.iso+' '+j.apex).toLowerCase().includes(q))
    out.push({k:'Jurisdiction',t:j.name,s:TRAD[j.trad]+' · rule of law '+j.rol,go:()=>{PAGE==='world'?jurisReport(j.iso):go('atlas',{j:j.iso})}}) });
  CASES.forEach(c=>{ if((c.t+' '+c.c+' '+c.s+' '+c.w).toLowerCase().includes(q))
    out.push({k:'Case',t:c.t,s:(c.y<0?Math.abs(c.y)+' BC':c.y)+' · '+c.c,go:()=>{if(PAGE==='learn'){caseQ=c.t.toLowerCase().slice(0,18);caseCat='';caseView='timeline';renderCases();go('caselaw')}else location.href='learn.html#caselaw'}}) });
  QA.forEach(x=>{ if((x.q+' '+x.topic+' '+x.a.join(' ')).toLowerCase().includes(q))
    out.push({k:'Question',t:x.q,s:x.topic,go:()=>{if(PAGE==='situation'){qaQ='';qaTopic='';qaLevel='';renderQA(x.id);go('qa');
      setTimeout(()=>scrollTo_('qa-'+x.id,'center'),90)}else go('qa',{qa:x.id})}}) });
  GLOS.forEach(g=>{ if((g[0]+' '+g[2]).toLowerCase().includes(q))
    out.push({k:'Term',t:g[0],s:g[2].slice(0,90)+'…',go:()=>{if(PAGE==='situation'){counselTab='glos';glosQ=g[0].toLowerCase();renderCounsel();go('counsel')}else location.href='situation.html#counsel'}}) });
  AREAS.forEach(a=>{ if((a.n+' '+a.cat+' '+a.day+' '+a.tags.join(' ')).toLowerCase().includes(q))
    out.push({k:'Practice area',t:a.n,s:a.cat,go:()=>{PAGE==='careers'?areaReport(a.n):go('areas',{a:a.n})}}) });
  LETTERS.forEach(l=>{ if((l.t+' '+l.when+' '+l.cat).toLowerCase().includes(q))
    out.push({k:'Letter',t:l.t,s:l.cat,go:()=>{if(PAGE==='situation'){letSel=l.id;renderLetters();go('letters')}else go('letters',{l:l.id})}}) });
  HELPJ.forEach(h=>{ if((h.n+' '+h.r.map(r=>r[0]+r[1]).join(' ')).toLowerCase().includes(q))
    out.push({k:'Help',t:'Getting help in '+h.n,s:h.r.map(r=>r[0]).slice(0,3).join(' · '),go:()=>{if(PAGE==='situation'){helpJ=h.iso;renderHelp();go('help')}else location.href='situation.html#help'}}) });
  return out.slice(0,40);
}
let sIdx=0, sRes=[];
function openSearch(){ $('#searchOv').classList.add('on'); $('#searchIn').value=''; sRes=[];sIdx=0;
  paintSearch(); setTimeout(()=>$('#searchIn').focus(),40); }
function closeSearch(){ $('#searchOv').classList.remove('on') }
function paintSearch(){
  const box=$('#searchRes');
  if(!sRes.length){ box.innerHTML=`<div class="srch-hint">Search jurisdictions, cases, questions, terms,
    practice areas, letters and help routes. Try <b>Morocco</b>, <b>habeas</b>, <b>deposit</b> or <b>arbitration</b>.</div>`; return }
  box.innerHTML=sRes.map((r,i)=>`<button class="srch-row ${i===sIdx?'on':''}" data-i="${i}">
    <span class="srch-k">${r.k}</span>
    <span class="srch-t"><b>${esc(r.t)}</b><small>${esc(r.s)}</small></span></button>`).join('');
  $$('#searchRes .srch-row').forEach(b=>b.onclick=()=>{const r=sRes[+b.dataset.i];closeSearch();r.go()});
  const on=$('#searchRes .srch-row.on'); if(on&&on.scrollIntoView)on.scrollIntoView({block:'nearest'});
}
$('#searchIn').oninput=e=>{ sRes=searchAll(e.target.value); sIdx=0; paintSearch() };
$('#searchIn').onkeydown=e=>{
  if(e.key==='ArrowDown'){sIdx=Math.min(sIdx+1,sRes.length-1);paintSearch();e.preventDefault()}
  else if(e.key==='ArrowUp'){sIdx=Math.max(sIdx-1,0);paintSearch();e.preventDefault()}
  else if(e.key==='Enter'&&sRes[sIdx]){const r=sRes[sIdx];closeSearch();r.go()}
  else if(e.key==='Escape'){closeSearch()}
};
$('#searchOv').onclick=e=>{ if(e.target.id==='searchOv')closeSearch() };
$('#searchBtn').onclick=openSearch;
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}
  else if(e.key==='/'&&!/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)){e.preventDefault();openSearch()}
});

/* ==================================================================
   TEXT SIZE
   ================================================================== */
const SIZES=[['s','Small',15],['m','Default',16],['l','Large',18],['xl','Larger',20]];
let textSize=storeGet('textSize','m');
function setTextSize(k){ const s=SIZES.find(x=>x[0]===k); if(!s)return;
  textSize=k; saveStore({textSize:k});
  document.documentElement.style.fontSize=s[2]+'px';   /* rem scales from :root */
  document.body.style.fontSize=s[2]+'px';
  paintThemeMenu(); paintMore(); toast('Text size: '+s[1]); }
window.setTextSize=setTextSize;

/* ==================================================================
   PRINT
   ================================================================== */
function printCurrent(){ window.print() }
window.printCurrent=printCurrent;


/* ==================================================================
   LAW LAB — data
   ================================================================== */
const JURY_CASES=[
{id:'shop',t:'R v Okonjo',charge:'Theft from a shop',kind:'Criminal',
 facts:'A bottle of spirits worth about 40 was found in the accused’s bag outside a supermarket. She says she was distracted by a phone call and forgot to pay for it.',
 ev:[['CCTV shows her placing the bottle in her own bag inside the shop',22,'p'],
     ['She walked past three open tills without stopping',18,'p'],
     ['She has two previous convictions for shoplifting',12,'p'],
     ['The bottle was in an open bag, in plain view',-14,'d'],
     ['Her phone records confirm a call at that moment',-16,'d'],
     ['She had enough money in her account to pay for it',-12,'d'],
     ['A store guard says she looked "shifty"',6,'p'],
     ['She returned to the shop voluntarily when called back',-10,'d']]},
{id:'fall',t:'Aliyev v Meridian Properties',charge:'Negligence — a fall on a wet floor',kind:'Civil',
 facts:'A visitor slipped on a wet lobby floor and broke a wrist. He is suing the building owner. The owner says a warning sign was out.',
 ev:[['Photographs show no warning sign at the time of the fall',24,'p'],
     ['The cleaning log has a two-hour gap that morning',18,'p'],
     ['Two other people reported slipping the same week',14,'p'],
     ['A staff member testifies the sign was put out at 9am',-18,'d'],
     ['He was looking at his phone as he walked',-16,'d'],
     ['He was wearing worn-down leather soles',-8,'d'],
     ['The floor had just been mopped with no drying time',16,'p']]},
{id:'id',t:'R v Beaumont',charge:'Assault — disputed identification',kind:'Criminal',
 facts:'A man was punched outside a bar at 1am. The complainant picked the accused out of a line-up nine days later. The accused says he was somewhere else.',
 ev:[['The complainant identified him in a properly run line-up',20,'p'],
     ['He was seen in the area that night',10,'p'],
     ['The lighting outside the bar was poor',-18,'d'],
     ['The complainant had been drinking heavily',-20,'d'],
     ['Nine days passed before the identification',-14,'d'],
     ['A friend gives him an alibi for the whole evening',-16,'d'],
     ['He has no previous convictions of any kind',-8,'d'],
     ['CCTV of the street was not retained by the bar',-6,'d']]}];

const STANDARDS=[
 ['bal',50,'Balance of probabilities','More likely than not. Used in virtually every civil case.'],
 ['cc',75,'Clear and convincing','An intermediate standard used for fraud and some family matters.'],
 ['brd',92,'Beyond reasonable doubt','The criminal standard. Not certainty, but no reasonable alternative.']];

const SENT_OFFENCES=[
 ['theft','Theft from a shop',3,'Low-value, non-violent acquisitive offending.'],
 ['burg','Burglary of a home',30,'Entry as a trespasser with intent to steal.'],
 ['abh','Assault causing actual bodily harm',12,'Injury that is more than trivial.'],
 ['fraud','Fraud on an employer',26,'Breach of trust over a sustained period.'],
 ['drug','Supplying a controlled drug',36,'Street-level supply of a class B drug.'],
 ['dang','Causing death by dangerous driving',60,'Driving far below the standard of a careful driver.']];
const SENT_FACTORS=[
 ['agg','Planned and sophisticated',1.35],['agg','Victim was particularly vulnerable',1.30],
 ['agg','Offence committed on bail',1.20],['agg','Relevant previous convictions',1.25],
 ['agg','Group offending',1.18],['agg','Attempt to conceal evidence',1.15],
 ['mit','Early guilty plea',0.67],['mit','No previous convictions',0.85],
 ['mit','Genuine remorse and reparation',0.85],['mit','Minor role under direction',0.72],
 ['mit','Serious ill health',0.82],['mit','Sole carer for dependants',0.88]];

const OBJECTIONS=[
{w:'Miss Adeyemi, you were at the junction at half past eight, weren’t you?',bad:'Leading',
 why:'It puts the answer in the witness’s mouth. Leading questions are not allowed in examination-in-chief, though they are the whole point of cross-examination.'},
{w:'What did you see when you looked up?',bad:null,
 why:'Open, neutral, asks the witness what they perceived. Nothing wrong with it.'},
{w:'What did your neighbour tell you she saw that night?',bad:'Hearsay',
 why:'An out-of-court statement offered for the truth of what it asserts. The neighbour should give that evidence herself so she can be cross-examined.'},
{w:'Why do you think the defendant was driving so fast?',bad:'Speculation',
 why:'Asks the witness to guess at another person’s state of mind. Witnesses testify to what they perceived, not to what they suppose.'},
{w:'How far away were you standing?',bad:null,
 why:'A plain question of fact within the witness’s own knowledge.'},
{w:'You didn’t bother calling an ambulance, did you, because you didn’t care?',bad:'Compound',
 why:'Two questions rolled into one, so any single answer is ambiguous. It is also argumentative.'},
{w:'When you stopped taking your medication, what happened next?',bad:'Assumes facts',
 why:'It assumes a fact not in evidence — that the witness stopped taking medication at all.'},
{w:'Can you describe the colour of the vehicle?',bad:null,
 why:'Direct, relevant, within perception. Perfectly proper.'},
{w:'Isn’t it true that you have been lying to this court all afternoon?',bad:'Argumentative',
 why:'It argues the case rather than seeking evidence. Counsel may suggest a version of events, but not harangue.'},
{w:'What is your occupation?',bad:null,
 why:'Ordinary background question, always allowed.'},
{w:'Tell us about the defendant’s conviction from twelve years ago.',bad:'Relevance',
 why:'Old, unrelated bad character is usually inadmissible because its prejudicial effect outweighs any probative value.'},
{w:'Did you sign this document on the fourth of March?',bad:null,
 why:'A closed question, but a proper one — it goes to a specific fact the witness can confirm or deny.'},
{w:'So you would agree you are a careless person by nature?',bad:'Argumentative',
 why:'Invites a general character judgement rather than evidence of what happened.'},
{w:'What were the road conditions like?',bad:null,why:'Plainly relevant and within the witness’s perception.'},
{w:'Your husband said you’d been arguing that evening, didn’t he?',bad:'Hearsay',
 why:'Both leading and hearsay — it reports what someone outside court said, to prove it happened.'}];

const PRECEDENT_PUZZLES=[
{goal:'A manufacturer owes a duty of care to a consumer with no contract',
 chain:['entick','donoghue'],
 pool:['donoghue','carlill','entick','dudley','riley'],
 order:['donoghue'],
 note:'Donoghue v Stevenson alone establishes it. Carlill is contract, Dudley is criminal necessity, Riley is search and seizure — none of them touch the duty of care.'},
{goal:'A court may refuse to apply a statute that conflicts with the constitution',
 order:['marbury','kesav'],
 pool:['marbury','kesav','brown','carlill','miranda'],
 note:'Marbury establishes judicial review of legislation; Kesavananda extends the idea so far that even a constitutional amendment can be struck down. Brown applies review but does not create it.'},
{goal:'Individuals can enforce rights against their own state in a supranational court',
 order:['vangend','costa'],
 pool:['vangend','costa','nicara','tadic','handy'],
 note:'Van Gend en Loos creates direct effect, Costa v ENEL makes it prevail over national law. Nicaragua is state-to-state, Tadić is criminal.'},
{goal:'A person is criminally responsible even when obeying the law of their own state',
 order:['nurem','eich','tadic'],
 pool:['nurem','eich','tadic','pino','dred'],
 note:'Nuremberg establishes personal responsibility, Eichmann applies it through universal jurisdiction, Tadić extends it to internal conflicts. Pinochet is immunity, which is related but different.'},
{goal:'Privacy protection must follow the technology rather than the property line',
 order:['entick','katz','riley'],
 pool:['entick','katz','riley','gspain','miranda'],
 note:'Entick establishes that the state needs positive authority, Katz moves protection from places to people, Riley applies it to the phone in your pocket. One continuous argument across 250 years.'}];

const POWERS_PROFILES=[
 [82,'Constitutional balance','Each branch can check the others and none can act unilaterally. Boring, and that is the point.'],
 [64,'Executive-leaning','Government usually gets its way, but courts and the legislature can still bite. Common in stable democracies under strain.'],
 [46,'Weak checks','Formal separation exists on paper. In practice the executive rarely loses.'],
 [26,'Concentrated power','One branch decides and the others ratify. Courts exist but do not constrain.']];

const REALFAKE=[
 ...['donoghue','carlill','dudley','entick','marbury','miranda','riley','mabo','maka','vishaka','akayesu','somer']
   .map(id=>({id,real:true})),
 {real:false,t:'Pemberton v Crown Cutlery Co.',y:1921,c:'England · Court of Appeal',
  s:'A cutlery firm was held liable when a customer cut herself on a knife that was, the court found, "insufficiently blunt for domestic use".',
  why:'Invented. Sharpness is the purpose of a knife, so it could not be a defect — this is the standard example of why "fitness for purpose" is judged against what the thing is for.'},
 {real:false,t:'Ellersley v Board of Trade',y:1954,c:'United Kingdom · House of Lords',
  s:'Held that a promise made on a Sunday is unenforceable unless witnessed by two persons of good character.',
  why:'Invented, though it sounds like real Sunday trading law. Formality requirements attach to the type of transaction, never to the day of the week.'},
 {real:false,t:'State of Louisiana v Fontenot',y:1988,c:'United States · Supreme Court',
  s:'Held that a defendant may refuse to appear at trial if the courtroom temperature exceeds 26 degrees.',
  why:'Invented. Comfort has no bearing on the right to be present; a court would adjourn rather than create a right to absent yourself.'},
 {real:false,t:'Kowalczyk v Republic of Poland',y:2009,c:'European Court of Human Rights',
  s:'Held that Article 8 creates a right to be forgotten by one’s own family members.',
  why:'Invented. Article 8 protects private and family life against state interference — it does not regulate what relatives may remember.'},
 {real:false,t:'Re Ashgrove Farms',y:1977,c:'Australia · High Court',
  s:'Established that land may be acquired by anyone who tends it for seven consecutive harvests, regardless of title.',
  why:'Invented, but adjacent to real adverse possession doctrine — which requires possession inconsistent with the owner’s title for a statutory period, not agricultural effort.'},
 {real:false,t:'Marchetti v Banca Populare',y:2015,c:'Italy · Corte di Cassazione',
  s:'Held that a contract term printed in a font smaller than 8 point is automatically void.',
  why:'Invented. Unfair terms law looks at transparency and imbalance in substance, not at typography by a fixed rule.'}];


/* ==================================================================
   LAW LAB v2 — registry
   ================================================================== */
/* ==================================================================
   34 · ISSUE SPOTTER — the exam skill
   Fact patterns marked up as {{phrase|issueId}}. An empty issueId
   means the phrase is a decoy: real-sounding, legally irrelevant.
   ================================================================== */
const SPOTS=[
{id:'sale',t:'The second-hand van',area:'Contract',level:'Foundation',
 setup:'Priya is buying a van from Dan, who runs a small garage.',
 text:`Dan advertised a van online for 6,000. Priya visited on {{a wet Tuesday afternoon||}} and asked whether the van had ever been in an accident. {{Dan said it had never been damaged, though he knew it had been rebuilt after a front-end collision|misrep}}. Priya said she would take it, and {{Dan replied that he would hold it for her until Friday|offer}}. On Thursday {{Dan sold the van to someone else for 6,400|offer}}, having heard nothing further from Priya. When Priya complained, Dan pointed to {{a line on the back of his invoice excluding all liability for the condition or history of any vehicle|excl}}. Priya had {{not read the invoice|excl}}. She now says the engine is failing. {{Dan's garage has four employees||}} and {{Priya paid a 500 deposit in cash|consid}}.`,
 issues:[
  {id:'misrep',n:'Misrepresentation',why:'A false statement of fact, made before the contract, that induced Priya to enter it. Knowing it was untrue makes it fraudulent rather than merely negligent, which affects the remedy.',ord:1},
  {id:'offer',n:'Offer, acceptance and revocation',why:'Was there a binding contract at all? A promise to hold an offer open is generally not binding without something given for it — which is why the deposit matters.',ord:2},
  {id:'consid',n:'Consideration',why:'The deposit may be the consideration that makes the promise to hold the van until Friday enforceable. Without it, Dan was free to sell.',ord:3},
  {id:'excl',n:'Exclusion clauses and incorporation',why:'A term on the back of an invoice handed over after the deal is very unlikely to be incorporated, and an attempt to exclude liability for fraud fails in almost every system regardless.',ord:4}],
 decoys:['The weather on the day of the visit tells you nothing about any legal relationship.','The number of employees would matter for some employment or consumer questions, but not for this dispute.'],
 plan:'Deal with formation first — if there was no contract, nothing else arises. Then the misrepresentation, because fraud affects which remedies are open. The exclusion clause comes last, since it is a defence to liability you have already established.'},

{id:'slip',t:'The supermarket floor',area:'Negligence',level:'Foundation',
 setup:'Marcus slipped in a supermarket aisle and broke his wrist.',
 text:`A carton of yoghurt had split in aisle four. {{A member of staff walked past the spill twice in the twenty minutes before Marcus fell|breach}}. {{The store's own policy requires aisle checks every fifteen minutes|breach}}. Marcus {{was looking at his phone as he walked|contrib}} and {{was wearing shoes with worn soles|contrib}}. {{The store had recently changed its floor tiles to a cheaper, glossier finish||}}. He broke his wrist, and because {{he is a self-employed piano tuner he lost four months of income|damage}}. {{Two weeks later, while his wrist was still in plaster, he tripped on his own front step and broke the same wrist again|remote}}. {{The supermarket is part of a chain with 200 branches||}}. Marcus had {{shopped there every week for six years||}}.`,
 issues:[
  {id:'breach',n:'Breach of duty',why:'Duty is not seriously in issue — an occupier owes visitors a duty. The argument is about breach: staff passing the spill twice, and the store failing its own standard, are the strongest facts Marcus has.',ord:1},
  {id:'damage',n:'Damage and loss',why:'Lost earnings for a self-employed claimant are recoverable but need proving. The nature of his work makes the loss foreseeable and quantifiable.',ord:2},
  {id:'remote',n:'Intervening cause',why:'The second injury raises whether the chain of causation broke. Courts often treat a subsequent injury caused by the weakened state as still flowing from the original wrong — but not always.',ord:3},
  {id:'contrib',n:'Contributory negligence',why:'The phone and the worn soles do not defeat the claim but can reduce damages by a percentage the court sets.',ord:4}],
 decoys:['The tiles are a tempting fact but nothing suggests they fell below any standard, and the spill is the cause in any event.','The size of the chain and his loyalty as a customer are irrelevant to liability.'],
 plan:'Establish breach before anything else — without it there is no claim. Then causation and damage. Contributory negligence is a partial defence and belongs at the end, after liability is settled, because it only reduces what is owed.'},

{id:'fight',t:'Outside the takeaway',area:'Criminal',level:'Intermediate',
 setup:'Two men, an argument in a queue, and one of them ends up in hospital.',
 text:`Callum was queuing when Reece {{pushed past him and swore at him|prov}}. Callum {{turned and pushed Reece in the chest|ar}}. Reece {{raised his fist|selfd}}, and Callum {{punched him once, hard, in the jaw|ar}}. Reece fell, {{struck his head on the kerb and suffered a bleed on the brain|caus}}. Callum {{had drunk four pints|intox}}. He says {{he thought Reece was about to hit him|selfd}} and that {{he only meant to make him back off|mr}}. {{Callum has one previous conviction for shoplifting||}}. {{The takeaway had a CCTV camera that was not working||}}. Reece {{recovered after surgery|caus}}.`,
 issues:[
  {id:'ar',n:'The act itself',why:'Two separate applications of force. Each is potentially an offence, and they may be charged differently — the push and the punch are not the same act.',ord:1},
  {id:'mr',n:'Intention or recklessness',why:'What Callum meant to do determines which offence. Intending only to make someone back off is a very different mental state from intending serious harm, even where the harm is serious.',ord:2},
  {id:'caus',n:'Causation and the resulting harm',why:'The serious injury came from the kerb, not the punch. Whether Callum is responsible for it turns on whether that consequence was a foreseeable result of the punch — usually it is.',ord:3},
  {id:'selfd',n:'Self-defence',why:'Raised by the fist and by his stated belief. The questions are whether the belief was honestly held and whether the force used was reasonable in the circumstances he believed them to be.',ord:4},
  {id:'intox',n:'Intoxication',why:'Voluntary intoxication generally cannot be relied on to support a mistaken belief in the need for self-defence, which makes the four pints a fact working against him.',ord:5},
  {id:'prov',n:'Provocation and its limits',why:'Being sworn at rarely justifies force. It is relevant to sentence far more often than to liability.',ord:6}],
 decoys:['A shoplifting conviction is not relevant to whether this assault occurred.','The broken camera is an evidential problem, not a legal issue.'],
 plan:'Take the offences in order of seriousness, and within each one work through act, then mental state, then causation. Only then turn to defences — self-defence first, since it is a complete defence, and intoxication after it, because here it operates on the self-defence argument rather than standing alone.'},

{id:'dismiss',t:'The restructure',area:'Employment',level:'Intermediate',
 setup:'Aisha was dismissed six weeks after telling her manager something he did not want to hear.',
 text:`Aisha had worked at the firm for {{four years|qual}}. In March she {{reported to her manager that the company was billing a client for work it had not done|whistle}}. Her manager {{told her to leave it alone|whistle}}. In April {{she told HR she was pregnant|disc}}. In May she was told her role was {{redundant in a restructure, though a colleague was hired into a near-identical role two weeks later|sham}}. {{She was given one week's notice|notice}}. {{The company has 40 staff||}}. {{Her performance reviews had been consistently good|sham}}. {{She had recently changed her working hours to start at ten|disc}}. {{The office moved to a new building in February||}}.`,
 issues:[
  {id:'qual',n:'Qualifying service',why:'Ordinary unfair dismissal usually requires a minimum period of service. Four years clears it in most systems — but the point of the question is that the other claims below do not need any qualifying period at all.',ord:1},
  {id:'sham',n:'Whether the redundancy was genuine',why:'Hiring into a near-identical role immediately afterwards is the classic indicator of a sham redundancy. Good reviews undercut any suggestion of performance.',ord:2},
  {id:'whistle',n:'Whistleblowing detriment',why:'A protected disclosure about wrongdoing, followed closely by dismissal, raises automatically unfair dismissal — which normally needs no qualifying service and is often uncapped.',ord:3},
  {id:'disc',n:'Pregnancy discrimination',why:'Dismissal because of pregnancy is direct discrimination in most systems, needs no qualifying period, and the change of hours may separately raise a failure to accommodate.',ord:4},
  {id:'notice',n:'Notice period',why:'One week after four years is very likely short of the statutory or contractual minimum. A small, separate, easily-proved claim.',ord:5}],
 decoys:['Company size can matter for some procedural duties but does not decide any of these claims.','The office move is background noise.'],
 plan:'Start with the claims that need no qualifying service — whistleblowing and discrimination — because they are the strongest and the least technical. Ordinary unfair dismissal comes next, and the notice claim last: it is small, but it is nearly always winnable and costs nothing to add.'},

{id:'landlord',t:'The flat with the leak',area:'Housing',level:'Foundation',
 setup:'Tomas has been renting the same flat for two years.',
 text:`Water has been {{coming through the bathroom ceiling for five months|repair}} and Tomas has {{reported it in writing four times|repair}}. His landlord {{has not responded|repair}}. Last week the landlord {{let himself in while Tomas was at work to show the flat to a buyer|quiet}}, having {{given no notice|quiet}}. He also {{turned off the hot water for two days to encourage Tomas to leave|harass}}. Tomas {{paid a deposit of two months' rent at the start|dep}} and {{has never been told where it is held|dep}}. {{The flat is on the third floor||}}. Tomas {{is two weeks behind on rent because of the disruption|arrears}}. {{His neighbour has the same landlord||}}.`,
 issues:[
  {id:'repair',n:'Repairing obligations',why:'A landlord is normally responsible for the structure and for water installations. Five months and four written reports establish both the disrepair and the notice needed to trigger liability.',ord:1},
  {id:'quiet',n:'Quiet enjoyment and entry',why:'Entering without notice, and for the landlord’s own purposes, breaches the tenant’s right to occupy without interference in most systems.',ord:2},
  {id:'harass',n:'Harassment and unlawful eviction',why:'Cutting off a utility to make someone leave is a criminal offence in many countries, not merely a breach of contract. This is the most serious fact here.',ord:3},
  {id:'dep',n:'Deposit protection',why:'Many systems require deposits to be held in a scheme and the tenant to be told where. Failing to do so often carries a fixed penalty and can block a landlord from ending the tenancy.',ord:4},
  {id:'arrears',n:'Rent arrears and set-off',why:'The arrears are a genuine risk, but disrepair can sometimes be set off against rent. It should be raised as an answer, not ignored.',ord:5}],
 decoys:['The floor the flat is on is not a legal issue.','What happens to the neighbour is not part of this claim, though it may be evidence of a pattern.'],
 plan:'Lead with harassment, because it is the only fact here that may be a criminal offence and the only one that could need an emergency application. Then disrepair, which is the ongoing harm. Deposit and entry are strong, self-contained points. Address the arrears last, but do address them — the other side certainly will.'}];

const GAMES=[
{id:'spot',t:'Issue Spotter',area:'Exam technique',acc:'#7d8fc4',
 tag:'A messy set of facts with the law hidden inside it. Find what matters, ignore what does not, then put the issues in the order a marker expects.',
 skill:'Issue spotting \u00b7 relevance \u00b7 answer structure'},
{id:'jury',t:'The Jury Room',area:'Criminal & civil procedure',acc:'#c0574a',
 tag:'Weigh the evidence, argue with eleven other jurors, and watch the verdict flip when the standard of proof changes.',
 skill:'Standards of proof · burden · deliberation'},
{id:'bench',t:'The Sentencing Bench',area:'Criminal sentencing',acc:'#d8b04a',
 tag:'Take a plea, weigh aggravation against mitigation, pass sentence — then find out whether the Court of Appeal agrees with you.',
 skill:'Guidelines · plea discount · appellate review'},
{id:'obj',t:'Objection!',area:'Evidence & advocacy',acc:'#6d9cb5',
 tag:'A witness is being examined. Object to the improper questions and name the fault before the judge loses patience with you.',
 skill:'Leading · hearsay · speculation · relevance'},
{id:'boardroom',t:'The Boardroom',area:'Corporate law',acc:'#5f9060',
 tag:'You sit on a board. Seven decisions, each one a chance to breach a duty you did not know you had.',
 skill:'Directors’ duties · conflicts · business judgement'},
{id:'custody',t:'Best Interests',area:'Family law',acc:'#a58bc4',
 tag:'Decide where a child lives. Move the weights, hear how a judge would reason, and see what changes when the child turns fourteen.',
 skill:'Welfare checklist · the child’s wishes'},
{id:'forge',t:'Contract Forge',area:'Contract law',acc:'#c88a4a',
 tag:'Assemble an agreement from clause cards, then run the enforceability audit and find out which ones a court would strike straight out.',
 skill:'Unfair terms · penalties · restraint of trade'},
{id:'breach',t:'72 Hours',area:'Data protection',acc:'#4a9bb5',
 tag:'A breach has just been discovered. The notification clock is running and every decision costs you time you do not have.',
 skill:'Breach duties · notification · containment'},
{id:'causation',t:'Chain of Causation',area:'Negligence',acc:'#b5744a',
 tag:'Build the tort element by element and find the link where the chain snaps.',
 skill:'Duty · breach · causation · remoteness'},
{id:'prec',t:'Precedent Builder',area:'Legal reasoning',acc:'#8a7cc4',
 tag:'Given a proposition, assemble the cases that establish it — in the order that actually carries the argument.',
 skill:'Authority · ratio · doctrinal chains'},
{id:'guess',t:'Guess the Jurisdiction',area:'Comparative law',acc:'#5f9060',
 tag:'Six clues, worth fewer points each time. Name the legal system before you run out.',
 skill:'Legal traditions · procedure · institutions'},
{id:'pow',t:'Separation of Powers',area:'Constitutional law',acc:'#c9a227',
 tag:'Build a state by giving each branch its power, then read the consequences of what you made.',
 skill:'Checks and balances · rule of law'},
{id:'rf',t:'Real or Fake',area:'Case law',acc:'#b55a8a',
 tag:'Twelve genuine decisions and six inventions. The fakes read perfectly well — the tell is whether the rule does any work.',
 skill:'Doctrinal instinct · reading judgments'}];
const GAMEBY=Object.fromEntries(GAMES.map(g=>[g.id,g]));

/* ---------- 1 · JURY ROOM (plain language rebuild) ---------- */
const JURORS=['Foreperson','Juror 2','Juror 3','Juror 4','Juror 5','Juror 6',
  'Juror 7','Juror 8','Juror 9','Juror 10','Juror 11'];
const JUROR_LEANS=[.12,-.22,.30,-.10,.05,.24,-.30,.16,-.06,.20,-.16];
const BELIEF=[['no','I don’t believe this',0],['unsure','I’m not sure',50],['yes','I believe this',100]];
let juryCase='shop', juryBelief={}, juryStd='brd', juryPhase=0, juryRule='maj';
function jbelief(){ return juryBelief[juryCase]||(juryBelief[juryCase]={}) }
function juryScore(){
  const c=JURY_CASES.find(x=>x.id===juryCase), b=jbelief();
  let sum=0; c.ev.forEach((e,i)=>{ const w=(b[i]===undefined?50:b[i])/100; sum+=e[1]*w });
  return clamp(Math.round(50+sum*0.95),0,100);
}
function sureWord(c){
  if(c>=95)return 'Certain';
  if(c>=85)return 'Almost certain';
  if(c>=70)return 'Quite sure';
  if(c>=55)return 'Leaning towards guilty';
  if(c>=45)return 'Genuinely torn';
  if(c>=30)return 'Leaning towards not guilty';
  return 'Not convinced at all';
}
function jurorVotes(conf){
  const std=STANDARDS.find(x=>x[0]===juryStd)[1];
  return JUROR_LEANS.map(l=>clamp(conf+l*34,0,100)>=std);
}
function renderJury(){
  const c=JURY_CASES.find(x=>x.id===juryCase), b=jbelief();
  const conf=juryScore(), std=STANDARDS.find(x=>x[0]===juryStd), met=conf>=std[1];
  const votes=jurorVotes(conf), yes=votes.filter(Boolean).length+(met?1:0);
  const need=juryRule==='unan'?12:10;
  const outcome=yes>=need?'convict':(12-yes)>=need?'acquit':'hung';
  const answered=c.ev.filter((_,i)=>b[i]!==undefined).length;
  const crim=c.kind==='Criminal';

  return `<div class="game-wrap">
  <div class="phases">${['1. Read the case','2. Weigh the evidence','3. Decide'].map((p,i)=>
    `<button class="phase ${i===juryPhase?'on':''} ${i<juryPhase?'done':''}" data-ph="${i}"><span>${i+1}</span>${p.slice(3)}</button>`).join('')}</div>

  ${juryPhase===0?`
  <div class="panel" style="max-width:760px;margin:0 auto"><div class="panel-b">
    <div class="ctl" id="juryPick">${JURY_CASES.map(x=>
      `<button class="chip ${x.id===juryCase?'on':''}" data-j="${x.id}">${esc(x.t.split(' v')[0])}</button>`).join('')}</div>
    <div class="casecard">
      <div class="casecard-h"><span class="tag ${crim?'r':'bl'}">${crim?'A criminal trial':'A civil claim'}</span>
        <b>${esc(c.charge)}</b></div>
      <p>${esc(c.facts)}</p>
    </div>
    <div class="plainbox">
      <b>Your job, in one sentence</b>
      <p>You are not deciding what you think probably happened. You are deciding whether
      <b>${crim?'the prosecution':'the person bringing the claim'}</b> has proved it —
      and ${crim?'in a criminal trial they have to prove it to a very high level':'in a civil claim they only have to show it is more likely than not'}.
      If they fall short, you must say ${crim?'not guilty':'not liable'}, even if you suspect they did it.</p>
    </div>
    <button class="btn big" style="margin-top:18px" data-ph="1">Look at the evidence →</button>
  </div></div>`:''}

  ${juryPhase===1?`
  <div class="panel" style="max-width:820px;margin:0 auto"><div class="panel-h">
    <h3>What do you make of each piece?</h3><span class="hint">${answered} of ${c.ev.length} decided</span></div>
    <div class="panel-b">
      <p class="plainlead">There are no right answers here. Juries disagree about exactly this.
        Pick what <i>you</i> think about each piece of evidence.</p>
      ${c.ev.map((e,i)=>{const v=b[i];
        return `<div class="ev2 ${e[2]==='p'?'pros':'def'}">
          <div class="ev2-top">
            <span class="ev2-side">${e[2]==='p'?'Against the accused':'For the accused'}</span>
            <span class="ev2-txt">${esc(e[0])}</span></div>
          <div class="ev2-opts">${BELIEF.map(([k,lbl,val])=>
            `<button class="ev2-b ${v===val?'on '+k:''}" data-bel="${i}" data-v="${val}">${lbl}</button>`).join('')}</div>
        </div>`}).join('')}
      <div class="ctl" style="margin-top:20px">
        <button class="btn ghost" data-ph="0">← Back to the case</button>
        <button class="btn" data-ph="2">I’ve decided →</button></div>
    </div></div>`:''}

  ${juryPhase===2?`
  <div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>How sure are you?</h3></div><div class="panel-b" data-live="sure">
      <div class="sureword" style="color:${heat(conf)}">${sureWord(conf)}</div>
      <div class="surebar"><i style="width:${conf}%;background:${heat(conf)}"></i>
        <span class="surepin" style="left:${std[1]}%"><b>${crim?'the line for a criminal case':'the line for a civil case'}</b></span></div>
      <p class="plainlead" style="margin-top:34px">
        ${crim?`To convict someone of a crime you must be <b>almost certain</b>. Not just fairly confident —
          almost certain. That is what “beyond reasonable doubt” means in ordinary words.`
              :`To win a civil claim you only need to show it is <b>more likely than not</b>. Fifty-one percent is enough.`}
        You are currently <b style="color:${heat(conf)}">${sureWord(conf).toLowerCase()}</b>, and the line sits at ${std[1]}%.</p>
      <div class="ctl" id="juryStd" style="margin-top:16px">${STANDARDS.map(x=>
        `<button class="chip ${x[0]===juryStd?'on':''}" data-s="${x[0]}">${x[2]}</button>`).join('')}</div>
      <p style="font-size:.8rem;color:var(--faint);margin-top:8px">Switch the standard to see the same evidence judged a different way.</p>
      <div class="ctl" style="margin-top:16px"><button class="btn ghost" data-ph="1">← Change my mind</button></div>
    </div></div>
    <div class="panel"><div class="panel-h"><h3>The other eleven jurors</h3>
      <span class="hint">They saw the same evidence</span></div><div class="panel-b" data-live="verdict">
      <div class="jurybox">
        <div class="juror you ${met?'convict':'acquit'}"><span>YOU</span><i></i></div>
        ${JURORS.map((n,i)=>`<div class="juror ${votes[i]?'convict':'acquit'}" style="animation-delay:${i*40}ms">
          <span>${n.replace('Juror ','J')}</span><i></i></div>`).join('')}
      </div>
      <div class="tally"><div class="tally-bar"><i class="cv" style="width:${yes/12*100}%"></i></div>
        <div class="tally-lbl"><b style="color:var(--red)">${yes} say ${crim?'guilty':'liable'}</b>
          <b style="color:var(--green)">${12-yes} say ${crim?'not guilty':'not liable'}</b></div></div>
      <div class="ctl" id="juryRule" style="margin-top:16px">
        <button class="chip ${juryRule==='unan'?'on':''}" data-r="unan">All 12 must agree</button>
        <button class="chip ${juryRule==='maj'?'on':''}" data-r="maj">10 out of 12 is enough</button></div>
      <div class="verdict-wrap"><div class="stamp ${outcome==='convict'?'guilty':outcome==='acquit'?'not':'hung'}" key="${conf}-${juryStd}-${juryRule}">
        ${outcome==='convict'?(crim?'GUILTY':'LIABLE'):outcome==='acquit'?(crim?'NOT GUILTY':'NOT LIABLE'):'NO VERDICT'}</div></div>
      <p class="plainlead" style="text-align:center">${outcome==='hung'
        ? 'The jury cannot agree, so there is no verdict at all. In real life the case may be tried again with a new jury.'
        : outcome==='convict' ? `Enough jurors were sure enough. ${need} were needed and ${yes} agreed.`
        : `Not enough jurors were sure. That is not the same as deciding they are innocent — it means the case was not proved.`}</p>
      <div class="plainbox" style="margin-top:16px"><b>Why this matters</b>
        <p>Try switching between the criminal and civil standards without changing anything else. The same evidence,
        the same twelve people, and a different answer — which is exactly how someone can be found not guilty of a
        crime and still lose a civil case about the very same events.</p></div>
    </div></div>
  </div>`:''}
  </div>`;
}
function wireJury(){
  $$('#b-lab [data-ph]').forEach(b=>b.onclick=()=>{juryPhase=+b.dataset.ph;paintLab()});
  const pk=$('#juryPick'); if(pk)pk.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;
    juryCase=b.dataset.j;juryPhase=0;paintLab()};
  const st=$('#juryStd'); if(st)st.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;
    juryStd=b.dataset.s;liveRefresh(renderJury)};
  const rl=$('#juryRule'); if(rl)rl.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;
    juryRule=b.dataset.r;liveRefresh(renderJury)};
  $$('#b-lab [data-bel]').forEach(b=>b.onclick=()=>{
    jbelief()[+b.dataset.bel]=+b.dataset.v; paintLab(); });
}

/* ---------- 2 · SENTENCING BENCH (plain language rebuild) ---------- */
let sentOff='burg', sentOn={}, sentPlea='none', sentStage=0, sentMaths=false;
const PLEAS=[['none','They pleaded not guilty and were convicted at trial',1,'No reduction'],
  ['late','They admitted it on the morning of the trial',0.9,'A small reduction — about a tenth off'],
  ['early','They admitted it straight away, at the first hearing',0.667,'The full reduction — about a third off']];
function plainLen(m){
  if(m<1)return 'no custody';
  if(m<12)return m+' month'+(m===1?'':'s');
  const y=Math.floor(m/12), r=m%12;
  return y+' year'+(y===1?'':'s')+(r?' and '+r+' month'+(r===1?'':'s'):'');
}
function sentResult(){
  const o=SENT_OFFENCES.find(x=>x[0]===sentOff);
  let m=o[2];
  SENT_FACTORS.forEach((f,i)=>{ if(sentOn[i]) m*=f[2] });
  const preplea=Math.round(m);
  m*=PLEAS.find(p=>p[0]===sentPlea)[2];
  return {base:o[2],preplea,months:Math.max(0,Math.round(m)),o};
}
function appealOutcome(r){
  const lo=Math.round(r.base*0.35), hi=Math.round(r.base*2.6);
  if(r.months>hi)return['Too harsh','var(--red)',
    `The appeal judges reduce it to ${plainLen(hi)}. Even where every factor you applied was real, a sentence far above what similar cases get is cut back — consistency between defendants matters as much as the individual case.`];
  if(r.months<lo&&r.base>=12)return['Too lenient','var(--amber)',
    `The sentence is increased to ${plainLen(lo)}. In serious cases prosecutors can appeal a sentence for being too soft, which surprises most people — appeals do not only run one way.`];
  return['Sentence stands','var(--green)',
    'This is within the range a reasonable judge could reach. Appeal courts only step in when a sentence falls outside the bracket — not when they would simply have chosen a different number.'];
}
function renderBench(){
  const r=sentResult(), ap=appealOutcome(r), max=200;
  const heavier=SENT_FACTORS.filter((f,i)=>f[0]==='agg'&&sentOn[i]).length;
  const lighter=SENT_FACTORS.filter((f,i)=>f[0]==='mit'&&sentOn[i]).length;
  return `<div class="game-wrap">
  <div class="phases">${['The crime','What happened','The plea','Your sentence'].map((p,i)=>
    `<button class="phase ${i===sentStage?'on':''} ${i<sentStage?'done':''}" data-sg="${i}"><span>${i+1}</span>${p}</button>`).join('')}</div>

  ${sentStage===0?`<div class="panel" style="max-width:760px;margin:0 auto"><div class="panel-b">
    <p class="plainlead">You are the judge. Someone has been convicted and you must decide what happens to them.
      Start by choosing the crime.</p>
    <div class="offlist">${SENT_OFFENCES.map(o=>
      `<button class="offrow ${o[0]===sentOff?'on':''}" data-o="${o[0]}">
        <b>${esc(o[1])}</b><p>${esc(o[3])}</p>
        <span>Typical starting point: <b>${plainLen(o[2])}</b></span></button>`).join('')}</div>
    <div class="plainbox"><b>What a “starting point” means</b>
      <p>Judges do not begin from zero. Every offence has a published starting point for an ordinary example of that
      crime, and the judge moves up or down from there. It keeps sentences roughly consistent between courts.</p></div>
    <button class="btn big" style="margin-top:18px" data-sg="1">Next: what happened →</button>
  </div></div>`:''}

  ${sentStage===1?`<div class="panel" style="max-width:800px;margin:0 auto"><div class="panel-h">
      <h3>What makes this case worse or better?</h3>
      <span class="hint">Starting point: ${plainLen(r.base)}</span></div>
    <div class="panel-b">
      <p class="plainlead">Tick anything the facts support. Nothing here is compulsory — this is the judgement part.</p>
      <div class="facgroup worse"><h4>Makes it worse</h4>
        <div class="fac-wrap">${SENT_FACTORS.map((f,i)=>f[0]!=='agg'?'':
          `<button class="fac agg ${sentOn[i]?'on':''}" data-f="${i}">${esc(f[1])}
            ${sentMaths?`<b>×${f[2]}</b>`:''}</button>`).join('')}</div></div>
      <div class="facgroup better"><h4>Makes it better</h4>
        <div class="fac-wrap">${SENT_FACTORS.map((f,i)=>f[0]!=='mit'?'':
          `<button class="fac mit ${sentOn[i]?'on':''}" data-f="${i}">${esc(f[1])}
            ${sentMaths?`<b>×${f[2]}</b>`:''}</button>`).join('')}</div></div>
      <div class="runsum" data-live="run">
        <span>${heavier} thing${heavier===1?'':'s'} making it worse · ${lighter} making it better</span>
        <b>Now at ${plainLen(r.preplea)}</b></div>
      <label class="mathstoggle"><input type="checkbox" id="sentMaths" ${sentMaths?'checked':''}> Show me the arithmetic</label>
      <div class="ctl" style="margin-top:16px"><button class="btn ghost" data-sg="0">← Back</button>
        <button class="btn" data-sg="2">Next: the plea →</button></div>
    </div></div>`:''}

  ${sentStage===2?`<div class="panel" style="max-width:720px;margin:0 auto"><div class="panel-h">
      <h3>Did they admit it?</h3><span class="hint">Currently ${plainLen(r.preplea)}</span></div>
    <div class="panel-b">
      <p class="plainlead">This is applied last, to whatever number the rest of the case produced.</p>
      ${PLEAS.map(p=>`<button class="opt ${sentPlea===p[0]?'right':''}" data-pl="${p[0]}">
        <span class="optn">${p[2]===1?'—':'−'+Math.round((1-p[2])*100)+'%'}</span>
        <span>${esc(p[1])}<em>${esc(p[3])}</em></span></button>`).join('')}
      <div class="plainbox"><b>Why admitting it earns a discount</b>
        <p>It is not mercy. An early admission spares witnesses from giving evidence and saves weeks of court time,
        so the law rewards it — and the reward shrinks the longer someone waits, which is why it is largest at the
        very first hearing and nearly gone by the morning of the trial.</p></div>
      <div class="ctl" style="margin-top:16px"><button class="btn ghost" data-sg="1">← Back</button>
        <button class="btn" data-sg="3">Pass sentence →</button></div>
    </div></div>`:''}

  ${sentStage===3?`<div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>Your sentence</h3></div><div class="panel-b">
      <div class="sent-num"><span class="gavel">⚖</span>
        <div><b>${plainLen(r.months)}</b><u>${r.months>=6?'in prison':r.months>0?'a short sentence or community order':'a fine or community order'}</u></div></div>
      <div class="sentline">
        <div class="sentline-bar"><i style="width:${clamp(r.months/max*100,1,100)}%"></i>
          <span class="sl-mark start" style="left:${clamp(r.base/max*100,1,100)}%"></span>
          <span class="sl-zone" style="left:${clamp(r.base*0.35/max*100,0,100)}%;width:${clamp((r.base*2.6-r.base*0.35)/max*100,2,100)}%"></span></div>
        <div class="sl-key"><span>too soft</span><span>the usual range</span><span>too harsh</span></div>
      </div>
      <div class="plainbox"><b>How you got here</b>
        <p>Started at ${plainLen(r.base)} for this offence. ${heavier?`${heavier} thing${heavier===1?'':'s'} made it worse. `:''}${lighter?`${lighter} made it better. `:''}
        That gave ${plainLen(r.preplea)}. ${sentPlea==='none'?'No credit for a plea, so that is the final figure.'
          :`Then the discount for admitting it brought it to ${plainLen(r.months)}.`}</p></div>
      <div class="ctl" style="margin-top:16px"><button class="btn ghost" data-sg="0">Sentence someone else</button></div>
    </div></div>
    <div class="panel appeal"><div class="panel-h"><h3>They appeal</h3><span class="hint">The Court of Appeal reviews it</span></div>
      <div class="panel-b">
        <div class="appeal-stamp" style="color:${ap[1]}" key="${r.months}">${ap[0]}</div>
        <p class="plainlead" style="margin-top:14px">${esc(ap[2])}</p>
        <div class="disclaim" style="margin-top:18px"><b>Illustrative only.</b> Real starting points come from
          published guidelines that differ by country and offence. Nothing here predicts an actual sentence.</div>
      </div></div>
  </div>`:''}
  </div>`;
}
function wireBench(){
  $$('#b-lab [data-sg]').forEach(b=>b.onclick=()=>{sentStage=+b.dataset.sg;paintLab()});
  $$('#b-lab [data-o]').forEach(b=>b.onclick=()=>{sentOff=b.dataset.o;paintLab()});
  $$('#b-lab [data-f]').forEach(b=>b.onclick=()=>{const i=+b.dataset.f;sentOn[i]=!sentOn[i];paintLab()});
  $$('#b-lab [data-pl]').forEach(b=>b.onclick=()=>{sentPlea=b.dataset.pl;paintLab()});
  const m=$('#sentMaths'); if(m)m.onchange=()=>{sentMaths=m.checked;paintLab()};
}

/* ---------- 3 · OBJECTION! (judge patience) ---------- */
let objDeck=[], objI=0, objScore=0, objAns=null, objStreak=0, objBest=0, objPat=100;
function objStart(){ objDeck=[...OBJECTIONS].sort(()=>Math.random()-0.5).slice(0,12);
  objI=0;objScore=0;objAns=null;objStreak=0;objPat=100; }
function renderObj(){
  if(!objDeck.length)objStart();
  if(objI>=objDeck.length||objPat<=0){
    const pct=Math.round(objScore/Math.max(objI,1)*100);
    return `<div class="game-wrap"><div class="panel" style="max-width:640px;margin:0 auto">
      <div class="panel-b" style="text-align:center;padding:40px 26px">
      ${objPat<=0?`<div class="admonish">“Sit down, counsel.”</div>
        <p style="color:var(--dim);margin:14px auto 0;max-width:44ch">The bench has run out of patience. Objecting to
        proper questions costs credibility, and credibility is the only currency an advocate actually has.</p>`
      :`<div class="gnum" style="color:${pct>=80?'var(--green)':pct>=50?'var(--amber)':'var(--red)'}">${objScore}<span style="font-size:1.3rem;color:var(--faint)">/${objDeck.length}</span></div>
        <p style="margin:16px auto 6px;max-width:44ch;color:var(--dim)">${pct>=80
          ?'Sharp. You are hearing the shape of a question rather than its content, which is the actual skill.'
          :pct>=50?'Reasonable. Leading questions are the classic trap — improper in chief, entirely proper in cross.'
          :'Read the explanations. Most improper questions fail on form, not on subject matter.'}</p>`}
      <p style="font-family:var(--mono);font-size:.66rem;color:var(--brass);margin-top:10px">BEST STREAK ${objBest}</p>
      <button class="btn" style="margin-top:18px" id="objAgain">New transcript</button></div></div></div>`;
  }
  const q=objDeck[objI];
  return `<div class="game-wrap">
    <div class="court-strip">
      <div class="judge"><div class="wig"></div><div class="face"></div></div>
      <div class="pat"><span>JUDGE'S PATIENCE</span>
        <div class="pat-bar"><i style="width:${objPat}%;background:${objPat>60?'var(--green)':objPat>30?'var(--amber)':'var(--red)'}"></i></div></div>
      <div class="scorepill">Q ${objI+1}/${objDeck.length} · ${objScore} correct · streak ${objStreak}</div>
    </div>
    <div class="panel" style="max-width:720px;margin:18px auto 0"><div class="panel-b">
      <div class="transcript"><span class="tr-who">COUNSEL</span><p key="${objI}">${esc(q.w)}</p></div>
      ${objAns===null?`<div class="obj-grid" id="objBtns">
          ${['Leading','Hearsay','Speculation','Compound','Assumes facts','Argumentative','Relevance'].map(t=>
            `<button class="obj-b" data-a="${t}">${t}</button>`).join('')}
          <button class="obj-b allow" data-a="">No objection</button></div>`
        :`<div class="obj-res ${objAns.ok?'right':'wrong'}">
            <b>${objAns.ok?(q.bad?'Sustained.':'Quite right — no objection.'):(q.bad?'You let it through.':'Overruled.')}</b>
            ${q.bad?`The proper objection is <b>${q.bad.toLowerCase()}</b>.`:'The question was proper.'}
            <p style="margin-top:8px">${esc(q.why)}</p></div>
          <button class="btn" style="margin-top:16px" id="objNext">${objI===objDeck.length-1?'See result':'Next question'}</button>`}
    </div></div></div>`;
}
function wireObj(){
  const g=$('#objBtns');
  if(g)g.onclick=e=>{const b=e.target.closest('.obj-b');if(!b)return;
    const q=objDeck[objI], picked=b.dataset.a||null, ok=(picked===(q.bad||null));
    if(ok){objScore++;objStreak++;objBest=Math.max(objBest,objStreak);objPat=Math.min(100,objPat+4)}
    else{objStreak=0; objPat-=(q.bad?12:26);}   /* objecting to a proper question costs most */
    objAns={ok,picked}; paintLab();};
  const n=$('#objNext'); if(n)n.onclick=()=>{objI++;objAns=null;paintLab()};
  const a=$('#objAgain'); if(a)a.onclick=()=>{objStart();paintLab()};
}

/* ---------- 4 · THE BOARDROOM (corporate) ---------- */
const BOARD=[
{s:'The company needs a new logistics supplier. Your brother-in-law runs one of the three bidders, and his quote is genuinely the cheapest.',
 o:[['Vote for his bid — it is the best deal',-2,'You voted on a matter in which you have a personal interest. Being right about the price is no defence: the duty is to avoid the conflict, not to win the argument.'],
    ['Declare the interest, then vote',1,'Better. Declaration is required — but an interested director should usually also step out of the vote unless the constitution or the members permit otherwise.'],
    ['Declare the interest and take no part in the decision',3,'Correct. Declare, withdraw, let the disinterested directors decide. The company still gets the cheap quote; you just do not choose it.']],
 duty:'Avoid conflicts of interest'},
{s:'At a dinner you hear of a warehouse coming to market that would suit the company perfectly. The company is short of cash and probably could not buy it.',
 o:[['Buy it personally — the company could not afford it anyway',-3,'This is the corporate opportunity doctrine, and inability to take the opportunity is famously not a defence. The classic cases turn on exactly this argument, and it loses.'],
    ['Tell the board, and buy it only if they decline in an informed vote',3,'Correct. Disclosure first. If the company, properly informed, declines, you may usually take it.'],
    ['Say nothing and forget about it',0,'No breach, but you have deprived the company of information it was entitled to have.']],
 duty:'Corporate opportunities'},
{s:'The finance director proposes a large dividend. Cash flow is tight and a major customer has just gone quiet.',
 o:[['Approve it — the shareholders elected you to deliver returns',-3,'Directors owe duties to the company, not directly to shareholders, and paying a dividend the company cannot support risks wrongful trading and personal liability.'],
    ['Ask for a cash-flow forecast and defer the decision',3,'Correct. Reasonable care and skill means informing yourself before deciding, and the record of having asked is what protects you later.'],
    ['Abstain so you are not associated with it',-1,'Abstention is not neutrality. A director who sees a risk and says nothing has still failed to exercise independent judgement.']],
 duty:'Care, skill and diligence'},
{s:'A major investor asks you to vote their way on a strategic decision, reminding you they put you on the board.',
 o:[['Vote as they ask — they appointed you',-3,'A nominee director still owes duties to the company. Voting to order is the textbook failure to exercise independent judgement.'],
    ['Listen, weigh it, then decide what is best for the company',3,'Correct. You may hear them out. You may not delegate your judgement to them.'],
    ['Resign to avoid the conflict',0,'Honourable but unnecessary, and it leaves the company without your judgement at the moment it needs it.']],
 duty:'Independent judgement'},
{s:'The company is close to insolvent. A rescue plan might work, but it risks worsening creditors’ position if it fails.',
 o:[['Push ahead — you owe it to the shareholders to try',-3,'Once insolvency is likely the duty shifts: creditors’ interests come to the fore. Trading on regardless is where personal liability lives.'],
    ['Take insolvency advice and minute every decision',3,'Correct. The defence to wrongful trading is having taken every step to minimise loss to creditors — and being able to prove it.'],
    ['Stop trading immediately',1,'Cautious and defensible, though premature closure can destroy value a properly advised rescue would have preserved.']],
 duty:'Duties near insolvency'},
{s:'Marketing want to describe a product as “clinically proven”. The study was small, funded by the company, and not peer-reviewed.',
 o:[['Approve it — the study exists',-2,'A technically true claim that misleads is still a misleading claim, and directors who wave it through can be personally exposed.'],
    ['Require the wording to state the study’s size and sponsor',3,'Correct. Accuracy is not the same as disclosure. The fix is context, not deletion.'],
    ['Leave it to the marketing director',-1,'Delegation is proper; abdication is not. You may rely on others, but not blindly.']],
 duty:'Promoting the success of the company'},
{s:'A board paper arrives forty minutes before the meeting. It is ninety pages long and the decision is irreversible.',
 o:[['Vote — you trust the executive team',-2,'The business judgement rule protects informed decisions. It does not protect a decision you were in no position to make.'],
    ['Ask to defer until the board has had time to read it',3,'Correct, and the single most useful thing a non-executive director ever does.'],
    ['Read the summary and vote on that',-1,'Better than nothing, but an executive summary is written by the people asking for your approval.']],
 duty:'Care, skill and diligence'}];
let bdI=0, bdScore=0, bdAns=null, bdLog=[];
function renderBoardroom(){
  if(bdI>=BOARD.length){
    const max=BOARD.length*3, pct=Math.round(Math.max(bdScore,0)/max*100);
    return `<div class="game-wrap"><div class="panel" style="max-width:700px;margin:0 auto"><div class="panel-b" style="padding:36px 26px">
      <div style="text-align:center"><div class="gnum" style="color:${pct>=75?'var(--green)':pct>=45?'var(--amber)':'var(--red)'}">${Math.max(bdScore,0)}<span style="font-size:1.3rem;color:var(--faint)">/${max}</span></div>
      <p style="margin:14px auto 22px;max-width:46ch;color:var(--dim)">${pct>=75
        ?'You disclosed, informed yourself and kept your own judgement. That is essentially the whole of directors’ duties.'
        :pct>=45?'A mixed board. Notice how often the right answer was procedural — declare, defer, ask — rather than clever.'
        :'Worth another run. Almost every breach here came from deciding something you should have stepped back from.'}</p></div>
      ${bdLog.map(l=>`<div class="board-log ${l.pts>=3?'good':l.pts<0?'bad':'mid'}">
        <b>${esc(l.duty)}</b><p>${esc(l.why)}</p></div>`).join('')}
      <button class="btn" style="margin-top:18px" id="bdAgain">Sit again</button></div></div></div>`;
  }
  const q=BOARD[bdI];
  return `<div class="game-wrap">
    <div class="board-table">
      ${Array.from({length:7},(_,i)=>`<div class="seat ${i===3?'you':''}" style="animation-delay:${i*50}ms">${i===3?'YOU':''}</div>`).join('')}
    </div>
    <div class="panel" style="max-width:740px;margin:20px auto 0"><div class="panel-h">
      <h3>Item ${bdI+1} of ${BOARD.length}</h3><span class="hint">Board of directors · in session</span></div>
      <div class="panel-b">
        <p class="board-item" key="${bdI}">${esc(q.s)}</p>
        ${bdAns===null?`<div id="bdOpts">${q.o.map((o,i)=>
          `<button class="opt" data-b="${i}"><span class="optn">${'ABC'[i]}</span><span>${esc(o[0])}</span></button>`).join('')}</div>`
        :`<div class="obj-res ${bdAns.pts>=3?'right':bdAns.pts<0?'wrong':''}">
            <b>${bdAns.pts>=3?'Sound.':bdAns.pts<0?'That is a breach.':'Defensible, not ideal.'}</b>
            <span class="tag b" style="margin-left:8px">${esc(q.duty)}</span>
            <p style="margin-top:8px">${esc(q.o[bdAns.i][2])}</p></div>
          <button class="btn" style="margin-top:16px" id="bdNext">${bdI===BOARD.length-1?'See the record':'Next item'}</button>`}
      </div></div></div>`;
}
function wireBoardroom(){
  const g=$('#bdOpts'); if(g)g.onclick=e=>{const b=e.target.closest('.opt');if(!b)return;
    const i=+b.dataset.b, q=BOARD[bdI];
    bdAns={i,pts:q.o[i][1]}; bdScore+=q.o[i][1];
    bdLog.push({duty:q.duty,why:q.o[i][2],pts:q.o[i][1]}); paintLab();};
  const n=$('#bdNext'); if(n)n.onclick=()=>{bdI++;bdAns=null;paintLab()};
  const a=$('#bdAgain'); if(a)a.onclick=()=>{bdI=0;bdScore=0;bdAns=null;bdLog=[];paintLab()};
}

/* ---------- 5 · BEST INTERESTS (family) ---------- */
const CUST_FACTORS=[
 ['stab','Stability and continuity','Who has provided the settled routine — school, home, friendships.',.9],
 ['care','Day-to-day care so far','Who has actually done the school runs, the illnesses, the bedtimes.',.85],
 ['wish','The child’s own wishes','Weighted by age and understanding, not simply counted.',1],
 ['harm','Risk of harm','Any history of violence, neglect or substance misuse. Overrides almost everything.',1.4],
 ['sib','Keeping siblings together','Courts are reluctant to separate brothers and sisters.',.7],
 ['cap','Capacity to meet needs','Housing, working hours, willingness to support the other relationship.',.95]];
let custW={stab:60,care:60,wish:50,harm:20,sib:50,cap:60}, custAge=8, custParent=55;
function custResult(){
  const wishWeight=custAge<7?0.15:custAge<11?0.45:custAge<14?0.8:1.15;
  let a=0,b=0;
  CUST_FACTORS.forEach(f=>{
    const w=custW[f[0]]/100*f[3]*(f[0]==='wish'?wishWeight:1);
    const lean=(custParent-50)/50;
    if(f[0]==='harm'){a+=w*40*(lean<0?1:0);b+=w*40*(lean>0?1:0);}
    else{a+=w*30*(0.5+lean/2);b+=w*30*(0.5-lean/2);}
  });
  const total=a+b||1;
  return {a:Math.round(a/total*100),b:100-Math.round(a/total*100),wishWeight};
}
function renderCustody(){
  const r=custResult(), shared=Math.abs(r.a-50)<12;
  return `<div class="game-wrap"><div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>The welfare checklist</h3>
      <span class="hint">Weight what matters here</span></div><div class="panel-b">
      <div style="margin-bottom:20px">
        <div class="slabel"><span><b style="color:var(--ink)">The child is ${custAge}</b><br>
          <span data-lbl="agew" style="font-size:.78rem">Their wishes carry ${r.wishWeight<0.3?'very little':r.wishWeight<0.6?'modest':r.wishWeight<1?'substantial':'near-decisive'} weight at this age</span></span><b data-lbl="age">${custAge}</b></div>
        <input type="range" data-age min="3" max="16" value="${custAge}">
        <div class="agebar"><i data-livestyle="agebar" style="width:${(custAge-3)/13*100}%"></i></div></div>
      ${CUST_FACTORS.map(f=>`<div style="margin-bottom:16px">
        <div class="slabel"><span><b style="color:var(--ink)">${esc(f[1])}</b><br><span style="font-size:.78rem">${esc(f[2])}</span></span><b data-lbl="cf${f[0]}">${custW[f[0]]}</b></div>
        <input type="range" data-cf="${f[0]}" min="0" max="100" value="${custW[f[0]]}"></div>`).join('')}
      <div class="slabel" style="margin-top:22px"><span><b style="color:var(--ink)">Which parent do the facts favour?</b></span></div>
      <input type="range" data-par min="0" max="100" value="${custParent}">
      <div style="display:flex;justify-content:space-between;font-size:.76rem;color:var(--faint)"><span>Parent A</span><span>evenly balanced</span><span>Parent B</span></div>
    </div></div>
    <div class="panel"><div class="panel-h"><h3>The order</h3><span class="hint">How a court would frame it</span></div>
      <div class="panel-b" data-live="out">
        <div class="split"><div class="split-a" style="width:${r.a}%"><span>A · ${r.a}%</span></div>
          <div class="split-b" style="width:${r.b}%"><span>${r.b}% · B</span></div></div>
        <div class="order-stamp" key="${r.a}-${custAge}">${shared?'SHARED LIVING ARRANGEMENT'
          :r.a>r.b?'LIVES WITH PARENT A':'LIVES WITH PARENT B'}</div>
        <p style="font-size:.9rem;color:var(--dim);margin-top:14px">${shared
          ? 'The factors are close enough that a court would likely order a shared arrangement, with the detail turning on geography and school runs rather than on merit.'
          : 'One parent’s case is clearly stronger on the checklist. The other would normally still have substantial contact — “lives with” is not “never sees”.'}</p>
        <div class="note"><b>The thing people get wrong.</b> The checklist is not a scoreboard where the higher total
          wins. It is a structure for reasoning, and one factor — risk of harm — can override every other factor at
          once. Slide harm up and watch it swamp the arithmetic, because that is what it does in a real court.</div>
        <div class="note" style="margin-top:12px"><b>And the child’s voice grows.</b> At six a child’s preference is
          noted. At fifteen it is close to decisive, because a court cannot practically enforce an order a teenager
          refuses to follow. Move the age slider and watch the weighting shift.</div>
        <div class="disclaim" style="margin-top:16px"><b>Not a prediction.</b> Real decisions turn on evidence,
          welfare reports and the specific children involved.</div>
      </div></div></div></div>`;
}
function wireCustody(){
  const up=()=>liveRefresh(renderCustody);
  $$('#b-lab [data-cf]').forEach(r=>r.oninput=()=>{custW[r.dataset.cf]=+r.value;up()});
  const a=$('#b-lab [data-age]'); if(a)a.oninput=()=>{custAge=+a.value;up()};
  const p=$('#b-lab [data-par]'); if(p)p.oninput=()=>{custParent=+p.value;up()};
}

/* ---------- 6 · CONTRACT FORGE ---------- */
const CLAUSES=[
 ['Payment within 30 days of invoice',1,'Ordinary and enforceable.'],
 ['Either party may terminate on 60 days’ written notice',1,'Clear, mutual, enforceable.'],
 ['Governing law: the courts of England and Wales',1,'A standard jurisdiction clause.'],
 ['Confidential information may not be disclosed for 3 years',1,'Reasonable in duration and scope.'],
 ['Liability capped at the total fees paid',1,'Generally enforceable between businesses, subject to a reasonableness test.'],
 ['Force majeure suspends obligations during events beyond either party’s control',1,'Standard, mutual and enforceable.'],
 ['If payment is late, the customer pays £5,000 per day',0,'A penalty clause. A sum wholly out of proportion to any conceivable loss is unenforceable — damages compensate, they do not punish.'],
 ['The supplier excludes all liability for death or personal injury',0,'Void almost everywhere. You cannot contract out of liability for causing death or injury by negligence, and no amount of drafting fixes it.'],
 ['The employee may not work in the industry anywhere for 5 years',0,'A restraint of trade far wider than any legitimate interest. Courts test duration, geography and activity — this fails all three.'],
 ['The company may vary any term at any time without notice',0,'A classic unfair term: it makes the agreement binding on one side only.'],
 ['The consumer waives all statutory rights regarding faulty goods',0,'You cannot contract out of mandatory consumer protection. The clause is simply void.'],
 ['Disputes go to arbitration in a country neither party has visited',0,'An unfair jurisdiction term that functions as a barrier to any remedy at all.']];
let forgePick=[], forgeAudit=false;
function renderForge(){
  const good=forgePick.filter(i=>CLAUSES[i][1]===1).length;
  const bad=forgePick.filter(i=>CLAUSES[i][1]===0);
  return `<div class="game-wrap"><div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>Clause library</h3><span class="hint">Build the agreement</span></div>
      <div class="panel-b"><div class="fac-wrap">
        ${CLAUSES.map((c,i)=>`<button class="fac ${forgePick.includes(i)?'on':''}" data-cl="${i}">${esc(c[0])}</button>`).join('')}
      </div>
      <div class="ctl" style="margin-top:18px">
        <button class="btn" id="forgeRun" ${forgePick.length?'':'disabled'}>Run the enforceability audit</button>
        <button class="btn ghost" id="forgeClear">Clear</button></div>
      <div class="note"><b>Drafting is not wishing.</b> Writing a term down does not make it binding. Courts strike
        clauses that punish rather than compensate, that exclude what cannot be excluded, or that bind one side only —
        however carefully they are worded.</div>
    </div></div>
    <div class="panel"><div class="panel-h"><h3>The agreement</h3>
      <span class="hint">${forgePick.length} clause${forgePick.length===1?'':'s'}</span></div>
      <div class="panel-b">
        ${forgePick.length?`<div class="deed">${forgePick.map((i,k)=>`
          <div class="deed-cl ${forgeAudit?(CLAUSES[i][1]?'ok':'void'):''}" style="animation-delay:${k*60}ms">
            <span class="deed-n">${k+1}.</span><span>${esc(CLAUSES[i][0])}</span>
            ${forgeAudit?`<span class="deed-tag">${CLAUSES[i][1]?'ENFORCEABLE':'STRUCK OUT'}</span>`:''}
          </div>${forgeAudit&&!CLAUSES[i][1]?`<p class="deed-why">${esc(CLAUSES[i][2])}</p>`:''}`).join('')}</div>`
        :`<div class="empty">Pick clauses from the library to build an agreement</div>`}
        ${forgeAudit?`<div class="note" style="margin-top:16px"><b>${bad.length?`${bad.length} clause${bad.length>1?'s':''} struck out.`:'Every clause survives.'}</b>
          ${bad.length?' The rest of the contract usually stands — courts sever the offending term rather than tearing up the whole agreement, unless what is left makes no sense.'
          :' A short, mutual, proportionate contract is a boring one, and boring contracts are the ones that hold.'}
          You kept ${good} enforceable clause${good===1?'':'s'}.</div>`:''}
      </div></div></div></div>`;
}
function wireForge(){
  $$('#b-lab [data-cl]').forEach(b=>b.onclick=()=>{const i=+b.dataset.cl,k=forgePick.indexOf(i);
    if(k>=0)forgePick.splice(k,1); else forgePick.push(i); forgeAudit=false; paintLab()});
  const r=$('#forgeRun'); if(r)r.onclick=()=>{forgeAudit=true;paintLab()};
  const c=$('#forgeClear'); if(c)c.onclick=()=>{forgePick=[];forgeAudit=false;paintLab()};
}

/* ---------- 7 · 72 HOURS (data protection) ---------- */
const BREACH_STEPS=[
{q:'08:12 — Support reports that a spreadsheet of 40,000 customer records was emailed to the wrong distribution list.',
 o:[['Recall the email and hope it worked',4,-2,'Recall is unreliable and tells you nothing. You have burned four hours and still cannot say who received what.'],
   ['Establish what was in the file and who received it',2,3,'Correct first move. You cannot assess risk, notify, or contain anything until you know the scope.'],
   ['Notify the regulator immediately',1,0,'Not wrong, but premature — you would file a report with no facts in it, and have to file again.']]},
{q:'10:40 — The file held names, addresses and dates of birth. No passwords, no card numbers.',
 o:[['Conclude it is low risk and close the incident',2,-3,'Identity theft is built from exactly this combination. Assessing risk as low because no passwords leaked is the most common mistake there is.'],
   ['Assess risk against likelihood and severity for the individuals',3,3,'Correct. The test is risk to people, not embarrassment to you.'],
   ['Wait for legal to advise before doing anything',6,-1,'Advice matters, but the clock does not stop for it. Assess in parallel.']]},
{q:'13:05 — You can identify 62 external recipients. Some have already replied asking what this is.',
 o:[['Ask recipients to delete it and confirm',3,3,'Genuine containment, and documented confirmations reduce the residual risk you must report.'],
   ['Say nothing to recipients to avoid drawing attention',1,-3,'Concealment is its own breach, and the replies prove they already noticed.'],
   ['Send a company-wide memo about email discipline',2,0,'Useful eventually. It contains nothing today.']]},
{q:'17:20 — Risk assessed as likely to affect the rights of individuals. The clock started at 08:12.',
 o:[['Notify the supervisory authority now, with what you know',2,3,'Correct. Notification does not require a complete picture — information may be supplied in phases, and late notification needs a reason.'],
   ['Wait until the investigation is complete, then file once',20,-3,'This is how organisations blow the deadline. A complete report on day five is worse than a partial one on day one.'],
   ['Notify only if a customer complains',24,-3,'The duty is not complaint-driven. It is triggered by the breach.']]},
{q:'Day 2 — Should the 40,000 individuals be told directly?',
 o:[['Yes — the risk to them is high and they can act on it',4,3,'Correct where risk is high. Telling people lets them watch for fraud, which is the entire point of the duty.'],
   ['No — the regulator was told, that is enough',2,-2,'Regulator notification and individual notification are separate duties with different thresholds.'],
   ['Only the 62 recipients',2,-1,'They are not the people at risk. The 40,000 in the file are.']]},
{q:'Day 3 — What goes in the record?',
 o:[['Every decision, its time, and the reasoning',2,3,'Correct. The obligation is to document the breach, its effects and the remedial action — and the record is what you will be judged on.'],
   ['A one-line note that it was resolved',1,-2,'Insufficient documentation is itself a finding regulators make, independently of the breach.'],
   ['Nothing — it is closed',0,-3,'Undocumented is treated as unaddressed.']]}];
let bhI=0, bhHours=0, bhScore=0, bhAns=null;
function renderBreach(){
  const over=bhHours>72;
  if(bhI>=BREACH_STEPS.length){
    const good=bhScore>=12;
    return `<div class="game-wrap"><div class="panel" style="max-width:680px;margin:0 auto"><div class="panel-b" style="text-align:center;padding:38px 26px">
      <div class="clockface ${over?'late':''}">${bhHours}h</div>
      <div style="font-family:var(--serif);font-size:2rem;color:${good&&!over?'var(--green)':'var(--red)'};margin-top:12px">${good&&!over?'Handled':'Mishandled'}</div>
      <p style="margin:14px auto 0;max-width:46ch;color:var(--dim)">${over
        ?'You went past 72 hours. Late notification is not fatal in itself, but it must be explained — and “we wanted the full picture first” is the explanation regulators hear most and accept least.'
        :good?'Contained, assessed, notified in time and documented. Notice how much of it was administrative rather than technical.'
        :'Inside the clock, but the substance was weak. Breach response is judged on the decisions and the record, not on speed alone.'}</p>
      <button class="btn" style="margin-top:20px" id="bhAgain">Run it again</button></div></div></div>`;
  }
  const s=BREACH_STEPS[bhI], pct=Math.min(bhHours/72*100,100);
  return `<div class="game-wrap">
    <div class="clockbar"><div class="clockbar-fill ${over?'late':''}" style="width:${pct}%"></div>
      <span class="clockbar-lbl">${bhHours}h of 72 elapsed</span></div>
    <div class="panel" style="max-width:740px;margin:18px auto 0"><div class="panel-h">
      <h3>Incident log</h3><span class="hint">Decision ${bhI+1} of ${BREACH_STEPS.length}</span></div>
      <div class="panel-b">
        <p class="breach-q" key="${bhI}">${esc(s.q)}</p>
        ${bhAns===null?`<div id="bhOpts">${s.o.map((o,i)=>
          `<button class="opt" data-bh="${i}"><span class="optn">+${o[1]}h</span><span>${esc(o[0])}</span></button>`).join('')}</div>`
        :`<div class="obj-res ${bhAns.pts>=3?'right':bhAns.pts<0?'wrong':''}">
            <b>${bhAns.pts>=3?'Right call.':bhAns.pts<0?'That hurts you.':'Neutral.'}</b>
            <p style="margin-top:8px">${esc(s.o[bhAns.i][3])}</p></div>
          <button class="btn" style="margin-top:16px" id="bhNext">${bhI===BREACH_STEPS.length-1?'Close the incident':'Next decision'}</button>`}
      </div></div></div>`;
}
function wireBreach(){
  const g=$('#bhOpts'); if(g)g.onclick=e=>{const b=e.target.closest('.opt');if(!b)return;
    const i=+b.dataset.bh,s=BREACH_STEPS[bhI];
    bhHours+=s.o[i][1]; bhScore+=s.o[i][2]; bhAns={i,pts:s.o[i][2]}; paintLab();};
  const n=$('#bhNext'); if(n)n.onclick=()=>{bhI++;bhAns=null;paintLab()};
  const a=$('#bhAgain'); if(a)a.onclick=()=>{bhI=0;bhHours=0;bhScore=0;bhAns=null;paintLab()};
}

/* ---------- 8 · CHAIN OF CAUSATION (negligence) ---------- */
const TORT_CASES=[
{f:'A supermarket mops a floor at 9am and puts out no sign. At 9:20 a customer slips and breaks a wrist. On the way to hospital the ambulance is hit by a drunk driver and she suffers a head injury.',
 links:[['Duty of care',1,'An occupier owes a duty to lawful visitors. Uncontroversial.'],
   ['Breach of that duty',1,'Mopping without a sign falls below the standard of a reasonable occupier.'],
   ['Factual causation',1,'But for the wet floor she would not have fallen. The “but for” test is satisfied for the wrist.'],
   ['Legal causation for the wrist',1,'Nothing intervenes between the fall and the wrist. The chain holds.'],
   ['Legal causation for the head injury',0,'This is where it snaps. The drunk driver is a new intervening act — novus actus interveniens — breaking the chain for the second injury.'],
   ['Remoteness',1,'A slip injury is a foreseeable kind of harm from a wet floor.']],
 answer:4,
 note:'The supermarket is liable for the wrist and not for the head injury. Both flowed factually from the mopping, but the law stops the chain at an unforeseeable, independent, culpable intervention.'},
{f:'A builder installs a boiler badly. It leaks slowly for two years. The homeowner notices damp, does nothing for a further year, and the floor eventually rots through.',
 links:[['Duty of care',1,'A builder owes a duty to the person for whom the work is done.'],
   ['Breach',1,'Defective installation falls below the standard of a competent builder.'],
   ['Factual causation',1,'But for the bad installation there would have been no leak.'],
   ['Legal causation',1,'The homeowner’s inaction is careless but not an independent act — it does not break the chain.'],
   ['Remoteness',1,'Water damage from a leaking boiler is plainly foreseeable.'],
   ['Full recovery of the loss',0,'Here it breaks — not on causation but on mitigation. A claimant who watches damage worsen for a year cannot recover the part they could reasonably have avoided.']],
 answer:5,
 note:'Everything holds until the very end. The failure is not causation but the duty to mitigate: damages are reduced to what a reasonable claimant would have suffered had they acted.'},
{f:'A cyclist rides at night with no lights. A driver, texting, fails to see him and knocks him off. The cyclist was not wearing a helmet and suffers a head injury.',
 links:[['Duty of care',1,'Road users owe each other a duty. Settled.'],
   ['Breach by the driver',1,'Texting while driving is plainly below the standard of a careful driver.'],
   ['Factual causation',1,'But for the driver’s inattention the collision would not have happened.'],
   ['Legal causation',1,'Nothing independent intervenes between the texting and the collision.'],
   ['Full damages',0,'It breaks here. No lights and no helmet is contributory negligence — the claimant’s own carelessness contributed to the harm, and damages are reduced proportionately.'],
   ['Remoteness',1,'Head injury from being knocked off a bicycle is entirely foreseeable.']],
 answer:4,
 note:'The driver is liable, but the award is cut — often substantially — because the cyclist contributed to both the collision and the severity of his injury. Contributory negligence reduces damages; it does not defeat the claim.'}];
let tortI=0, tortPick=null;
function renderCausation(){
  const c=TORT_CASES[tortI], done=tortPick!==null;
  return `<div class="game-wrap"><div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>The facts</h3>
      <span class="hint">Case ${tortI+1} of ${TORT_CASES.length}</span></div>
      <div class="panel-b">
        <p style="font-size:.95rem;color:var(--dim);line-height:1.65">${esc(c.f)}</p>
        <div class="note"><b>Negligence is a chain, not a feeling.</b> Duty, breach, factual causation, legal
          causation, remoteness, damage. Every link must hold. Find the one that does not.</div>
        ${done?`<div class="note" style="border-left-color:${tortPick===c.answer?'var(--green)':'var(--red)'}">
          <b>${tortPick===c.answer?'That is the break.':'Not quite — look again at where it actually snaps.'}</b>
          <p style="margin-top:8px">${esc(c.note)}</p></div>
          <div class="ctl" style="margin-top:16px"><button class="btn" id="tortNext">Next case</button></div>`:''}
      </div></div>
    <div class="panel"><div class="panel-h"><h3>The chain</h3>
      <span class="hint">${done?'Where it broke':'Click the link you think fails'}</span></div>
      <div class="panel-b"><div class="tchain">
        ${c.links.map((l,i)=>{
          const state=!done?'':(l[1]?'hold':'snap');
          const picked=done&&tortPick===i;
          return `<button class="tlink ${state} ${picked?'picked':''}" data-tl="${i}" style="animation-delay:${i*70}ms">
            <span class="tl-n">${i+1}</span><span class="tl-t">${esc(l[0])}</span>
            ${done?`<span class="tl-s">${l[1]?'holds':'breaks'}</span>`:''}
            ${done?`<p class="tl-w">${esc(l[2])}</p>`:''}
          </button>${i<c.links.length-1?`<div class="tl-join ${done?(c.links[i][1]?'ok':'cut'):''}"></div>`:''}`}).join('')}
      </div></div></div></div></div>`;
}
function wireCausation(){
  $$('#b-lab [data-tl]').forEach(b=>b.onclick=()=>{ if(tortPick!==null)return;
    tortPick=+b.dataset.tl; paintLab();});
  const n=$('#tortNext'); if(n)n.onclick=()=>{tortI=(tortI+1)%TORT_CASES.length;tortPick=null;paintLab()};
}


/* ---------- 4 · PRECEDENT BUILDER ---------- */
let precI=0, precPick=[], precDone=false;
function renderPrec(){
  const p=PRECEDENT_PUZZLES[precI];
  const correct=precDone && precPick.length===p.order.length && precPick.every((id,i)=>id===p.order[i]);
  return `<div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>Build the authority</h3>
      <span class="hint">Puzzle ${precI+1} of ${PRECEDENT_PUZZLES.length}</span></div>
      <div class="panel-b">
        <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--brass);margin-bottom:8px">THE PROPOSITION</div>
        <p style="font-family:var(--serif);font-size:1.15rem;line-height:1.35;margin-bottom:20px">${esc(p.goal)}</p>
        <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--faint);margin-bottom:9px">
          PICK THE CASES THAT ESTABLISH IT, IN ORDER</div>
        <div class="fac-wrap">${p.pool.map(id=>{const c=CASES.find(x=>x.id===id); if(!c)return '';
          const idx=precPick.indexOf(id);
          return `<button class="fac ${idx>=0?'on':''}" data-p="${id}">${idx>=0?`<span class="pin">${idx+1}</span>`:''}${esc(c.t.split(' v')[0])} <b>${c.y<0?Math.abs(c.y)+'BC':c.y}</b></button>`}).join('')}</div>
        <div class="ctl" style="margin-top:18px">
          <button class="btn" id="precGo" ${precPick.length?'':'disabled'}>Test the chain</button>
          <button class="btn ghost" id="precClear">Clear</button></div>
      </div></div>
    <div class="panel"><div class="panel-h"><h3>The chain</h3></div><div class="panel-b">
      ${precPick.length?`<div class="chain">${precPick.map((id,i)=>{const c=CASES.find(x=>x.id===id);
        return `<div class="chain-item" style="animation-delay:${i*90}ms">
          <div class="chain-y">${c.y<0?Math.abs(c.y)+' BC':c.y}</div>
          <div class="chain-t">${esc(c.t)}</div>
          <div class="chain-w">${c.w.replace(/<[^>]+>/g,'').slice(0,150)}…</div></div>`}).join('')}</div>`
        :`<div class="empty">Choose cases on the left to build a chain of authority</div>`}
      ${precDone?`<div class="note ${correct?'':'wrong-note'}" style="margin-top:18px">
        <b>${correct?'That holds.':'Not quite.'}</b> ${esc(p.note)}</div>
        <button class="btn" style="margin-top:14px" id="precNext">Next puzzle</button>`:''}
      <div class="disclaim" style="margin-top:18px"><b>Why order matters.</b> An argument from authority is a chain:
        each case must license the step the next one takes. A case that is merely famous, or merely about the same
        subject, does not carry the argument any further.</div>
    </div></div></div>`;
}
function wirePrec(){
  $$('#b-lab [data-p]').forEach(b=>b.onclick=()=>{
    const id=b.dataset.p, i=precPick.indexOf(id);
    if(i>=0)precPick.splice(i,1); else precPick.push(id);
    precDone=false; paintLab();});
  const g=$('#precGo'); if(g)g.onclick=()=>{precDone=true;paintLab()};
  const c=$('#precClear'); if(c)c.onclick=()=>{precPick=[];precDone=false;paintLab()};
  const n=$('#precNext'); if(n)n.onclick=()=>{precI=(precI+1)%PRECEDENT_PUZZLES.length;precPick=[];precDone=false;paintLab()};
}

/* ---------- 5 · GUESS THE JURISDICTION ---------- */
let gjTarget=null, gjOpts=[], gjClue=1, gjDone=null, gjScore=0, gjRound=0;
function gjNew(){
  const pool=[...J].filter(j=>j.rol>0).sort(()=>Math.random()-0.5);
  gjTarget=pool[0]; gjOpts=[pool[0],pool[1],pool[2],pool[3]].sort(()=>Math.random()-0.5);
  gjClue=1; gjDone=null; gjRound++;
}
function gjClues(j){
  return [`This is a ${TRAD[j.trad].toLowerCase()} system.`,
   `Criminal trials are ${PROC[j.proc].toLowerCase()}, with ${JURY[j.jury].toLowerCase()}.`,
   `Its highest court is the ${j.apex}.`,
   j.cons?`Its current constitution dates from ${j.cons}.`:'It has no single codified constitution.',
   `It imprisons about ${fmt(j.inc)} people per 100,000, and capital punishment is: ${DP[j.dp].toLowerCase()}.`,
   `It scores ${j.rol} on the composite rule-of-law scale.`];
}
function renderGuess(){
  if(!gjTarget)gjNew();
  const cl=gjClues(gjTarget), pts=Math.max(1,7-gjClue);
  return `<div class="panel" style="max-width:660px;margin:0 auto"><div class="panel-h">
      <h3>Guess the jurisdiction</h3><span class="hint">Round ${gjRound} · score ${gjScore}</span></div>
    <div class="panel-b">
      <p style="font-size:.86rem;color:var(--dim);margin-bottom:18px">Clues get easier and worth less.
        Guess now for <b style="color:var(--brass)">${pts} point${pts>1?'s':''}</b>.</p>
      <div class="clues">${cl.slice(0,gjClue).map((c,i)=>
        `<div class="clue" style="animation-delay:${i*70}ms"><span>${i+1}</span>${esc(c)}</div>`).join('')}</div>
      ${gjDone===null?`
        <div class="ctl" style="margin:18px 0 14px">
          ${gjClue<cl.length?`<button class="btn ghost" id="gjMore">Another clue (−1 point)</button>`:''}</div>
        <div class="obj-grid" id="gjOpts">${gjOpts.map(o=>
          `<button class="obj-b" data-g="${o.iso}">${esc(o.name)}</button>`).join('')}</div>`
      :`<div class="obj-res ${gjDone.ok?'right':'wrong'}">
          <b>${gjDone.ok?`Correct — ${esc(gjTarget.name)}.`:`It was ${esc(gjTarget.name)}.`}</b>
          <p style="margin-top:8px">${esc(gjTarget.name)} is a ${TRAD[gjTarget.trad].toLowerCase()} system scoring
          ${gjTarget.rol} overall, with its apex court the ${esc(gjTarget.apex)}.</p></div>
        <div class="ctl" style="margin-top:16px">
          <button class="btn" id="gjNext">Next jurisdiction</button>
          <button class="btn ghost" data-jr="${gjTarget.iso}">Open the full record</button></div>`}
    </div></div>`;
}
function wireGuess(){
  const m=$('#gjMore'); if(m)m.onclick=()=>{gjClue++;paintLab()};
  const g=$('#gjOpts'); if(g)g.onclick=e=>{const b=e.target.closest('.obj-b');if(!b)return;
    const ok=b.dataset.g===gjTarget.iso;
    if(ok)gjScore+=Math.max(1,7-gjClue);
    gjDone={ok}; paintLab();};
  const n=$('#gjNext'); if(n)n.onclick=()=>{gjNew();paintLab()};
  $$('#b-lab [data-jr]').forEach(b=>b.onclick=()=>jurisReport(b.dataset.jr));
}

/* ---------- 6 · SEPARATION OF POWERS ---------- */
const POW={exec:50,leg:50,jud:50};
function powScore(){
  const {exec,leg,jud}=POW;
  const spread=Math.max(exec,leg,jud)-Math.min(exec,leg,jud);
  const checks=Math.min(leg,jud);
  return clamp(Math.round(20+checks*0.72-spread*0.30+(jud>=exec?10:0)),0,100);
}
function renderPow(){
  const sc=powScore(), prof=POWERS_PROFILES.find(p=>sc>=p[0])||POWERS_PROFILES[POWERS_PROFILES.length-1];
  const warn=[];
  if(POW.exec-POW.jud>28)warn.push('The executive substantially outweighs the courts. Expect the government to win the cases that matter to it.');
  if(POW.jud<30)warn.push('Judicial power this low means rights exist on paper without a forum that can enforce them.');
  if(POW.leg<30)warn.push('A weak legislature means law is made by decree, and made faster than it can be scrutinised.');
  if(POW.jud>78&&POW.leg<45)warn.push('Courts far stronger than the legislature invites the opposite complaint: unelected judges deciding contested policy.');
  if(!warn.length)warn.push('No single branch dominates. Slow, frustrating, and the arrangement most likely to survive a bad government.');
  const near=[...J].sort((a,b)=>Math.abs(a.rol-sc)-Math.abs(b.rol-sc)).slice(0,4);
  return `<div class="grid g2">
    <div class="panel"><div class="panel-h"><h3>Build a state</h3><span class="hint">Give each branch its power</span></div>
      <div class="panel-b">
        ${[['exec','Executive','Government, ministers, the administration'],
           ['leg','Legislature','Parliament or congress — makes and scrutinises law'],
           ['jud','Judiciary','Courts able to rule against the other two']].map(([k,l,d])=>
          `<div style="margin-bottom:20px">
            <div class="slabel"><span><b style="color:var(--ink)">${l}</b><br><span style="font-size:.78rem">${d}</span></span><b data-lbl="pw${k}">${POW[k]}</b></div>
            <input type="range" data-pw="${k}" min="0" max="100" value="${POW[k]}">
            <div class="branch-bar"><i data-livestyle="pw${k}" style="width:${POW[k]}%"></i></div></div>`).join('')}
        <div class="note" style="margin-top:6px"><b>The measure that matters.</b> Not whether a country has courts —
          all do — but whether the government loses in them. That is why judicial power is weighted against executive
          power here rather than counted on its own.</div>
      </div></div>
    <div class="panel"><div class="panel-h"><h3>What you built</h3></div><div class="panel-b" data-live="out">
      <div class="gauge-wrap">
        <div style="text-align:center;min-width:130px">
          <div class="gnum" style="color:${heat(sc)}">${sc}</div>
          <div class="tag ${sc>=70?'g':sc>=45?'a':'r'}" style="margin-top:10px">${prof[1]}</div></div>
        <div style="flex:1;min-width:220px"><p style="font-size:.9rem;color:var(--dim)">${esc(prof[2])}</p></div>
      </div>
      <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--brass);margin:22px 0 10px">CONSEQUENCES</div>
      ${warn.map(w=>`<div class="warn">${esc(w)}</div>`).join('')}
      <div style="font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--brass);margin:22px 0 10px">
        REAL SYSTEMS SCORING NEAR THIS</div>
      <div class="dims">${near.map(j=>`<div class="dim"><u style="cursor:pointer" data-jr="${j.iso}">${esc(j.name)}</u>
        <div class="bar"><i style="width:${j.rol}%;background:${heat(j.rol)}"></i></div>
        <b style="color:${heat(j.rol)}">${j.rol}</b></div>`).join('')}</div>
      <div class="formula">score = 20 + 0.72·min(legislature, judiciary) − 0.30·spread + 10 if judiciary ≥ executive</div>
    </div></div></div>`;
}
function wirePow(){
  $$('#b-lab [data-pw]').forEach(r=>r.oninput=()=>{POW[r.dataset.pw]=+r.value;liveRefresh(renderPow)});
  $$('#b-lab [data-jr]').forEach(b=>b.onclick=()=>jurisReport(b.dataset.jr));
}

/* ---------- 7 · REAL OR FAKE ---------- */
let rfDeck=[], rfI=0, rfScore=0, rfAns=null;
function rfStart(){ rfDeck=[...REALFAKE].sort(()=>Math.random()-0.5).slice(0,10); rfI=0;rfScore=0;rfAns=null; }
function rfCard(x){
  if(x.real){const c=CASES.find(y=>y.id===x.id); return {t:c.t,y:c.y,c:c.c,s:c.s,why:c.w,real:true}}
  return {...x};
}
function renderRF(){
  if(!rfDeck.length)rfStart();
  if(rfI>=rfDeck.length){
    const pct=Math.round(rfScore/rfDeck.length*100);
    return `<div class="panel" style="max-width:620px;margin:0 auto"><div class="panel-b" style="text-align:center;padding:38px 24px">
      <div class="gnum" style="color:${pct>=80?'var(--green)':pct>=50?'var(--amber)':'var(--red)'}">${rfScore}<span style="font-size:1.3rem;color:var(--faint)">/${rfDeck.length}</span></div>
      <p style="margin:16px auto 0;max-width:46ch;color:var(--dim)">${pct>=80
        ?'Good instincts. The fakes are all plausible in tone — what gives them away is that the rule does no sensible work.'
        :'The tell is rarely the language. Ask what the rule would do if applied: real doctrine solves a problem, invented doctrine solves nothing.'}</p>
      <button class="btn" style="margin-top:20px" id="rfAgain">Deal again</button></div></div>`;
  }
  const c=rfCard(rfDeck[rfI]);
  return `<div class="panel" style="max-width:660px;margin:0 auto"><div class="panel-h">
      <h3>Real or fake?</h3><span class="hint">Card ${rfI+1} of ${rfDeck.length} · score ${rfScore}</span></div>
    <div class="panel-b">
      <div class="rf-card ${rfAns?'flipped':''}" key="${rfI}">
        <div class="rf-y">${c.y<0?Math.abs(c.y)+' BC':c.y}</div>
        <div class="rf-t">${esc(c.t)}</div>
        <div class="rf-c">${esc(c.c)}</div>
        <div class="rf-s">${c.s}</div>
      </div>
      ${rfAns===null?`<div class="ctl" style="justify-content:center;margin-top:20px" id="rfBtns">
          <button class="btn" data-r="1">Real decision</button>
          <button class="btn ghost" data-r="0">Invented</button></div>`
        :`<div class="obj-res ${rfAns.ok?'right':'wrong'}">
            <b>${rfAns.ok?'Correct.':'No — '}</b>${c.real?'This is a real decision.':'This one is invented.'}
            <p style="margin-top:8px">${c.why}</p></div>
          <button class="btn" style="margin-top:16px" id="rfNext">${rfI===rfDeck.length-1?'See result':'Next card'}</button>`}
    </div></div>`;
}
function wireRF(){
  const g=$('#rfBtns'); if(g)g.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    const c=rfCard(rfDeck[rfI]), ok=(b.dataset.r==='1')===!!c.real;
    if(ok)rfScore++; rfAns={ok}; paintLab();};
  const n=$('#rfNext'); if(n)n.onclick=()=>{rfI++;rfAns=null;paintLab()};
  const a=$('#rfAgain'); if(a)a.onclick=()=>{rfStart();paintLab()};
}



/* ---------- per-game instructions ---------- */
const HOWPLAY={
spot:['You are handed a set of facts, like an exam question.',
 ['Read it once for the story. Then click every phrase that raises a legal issue. Some facts are put there to look important and are not \u2014 marking those costs you.',
  'Check your spotting. You will see what you found, what you missed, and what each relevant fact actually raises.',
  'Then put the issues in the order you would deal with them. Order carries real marks, because some issues only arise depending on how an earlier one is answered.'],
 'What it teaches: the skill law students are actually graded on. Knowing the law is assumed \u2014 the marks are in seeing which law the facts have put in play, and in what sequence.'],

jury:['You are a juror in a real-shaped case.',
 ['Read the charge, then rate how much you believe each piece of evidence. Prosecution evidence is marked red, defence blue.',
  'Go through to deliberation. Eleven other jurors have their own leanings and their votes shift as your assessment does.',
  'Choose the counting rule and the standard of proof, then return a verdict.'],
 'What it teaches: that “proved” is a threshold, not a feeling — and that the same evidence returns a different verdict depending on which threshold and which counting rule apply.'],
bench:['You are the judge passing sentence.',
 ['Pick the offence. Every offence has a published starting point for a typical case.',
  'Toggle the aggravating and mitigating factors the facts support. They multiply the starting point rather than adding months to it.',
  'Hear the plea — the discount applies last — then pass sentence and see whether the Court of Appeal lets it stand.'],
 'What it teaches: sentencing is a structured calculation, not an instinct, and appellate courts correct sentences outside the bracket rather than ones they would merely have pitched differently.'],
obj:['You are counsel, and a witness is being examined.',
 ['Read each question. If it is improper, object and name the fault. If it is proper, say so.',
  'Watch the judge’s patience. Objecting to a perfectly good question costs you far more than missing a bad one.',
  'Every answer explains why, so getting it wrong is the useful part.'],
 'What it teaches: most improper questions fail on their form, not their subject — and leading questions are forbidden in chief but the whole point of cross-examination.'],
boardroom:['You are a director sitting on a board.',
 ['Seven items come before you. Each one is a real decision with a duty hiding inside it.',
  'Choose an action. You are scored against the core duties directors actually owe.',
  'At the end you get a record of what you upheld and what you breached.'],
 'What it teaches: most breaches are not dishonesty. They are deciding something you should have declared an interest in, or voting on a paper you had no time to read.'],
custody:['You are deciding where a child lives.',
 ['Set the child’s age. It changes how much their own wishes weigh.',
  'Move each factor on the welfare checklist to reflect how much it matters here.',
  'Point the balance toward whichever parent the facts favour, and read the resulting order.'],
 'What it teaches: the checklist is a structure for reasoning, not a scoreboard. Risk of harm can override everything else at once, and a teenager’s wishes become close to decisive.'],
forge:['You are drafting an agreement.',
 ['Pick clauses from the library to build your contract.',
  'Run the enforceability audit.',
  'Read why the struck-out clauses fail.'],
 'What it teaches: writing a term down does not make it binding. Courts strike clauses that punish rather than compensate, exclude what cannot be excluded, or bind one side only.'],
breach:['You are handling a data breach, and the clock is running.',
 ['Six decisions, in order. Each one costs hours you cannot get back.',
  'The 72-hour notification deadline starts from the moment of discovery, not from when you finish investigating.',
  'You are judged on the decisions and the record, not on speed alone.'],
 'What it teaches: breach response is mostly administrative rather than technical, and the most common failure is waiting for a complete picture before notifying anyone.'],
causation:['You are testing whether a negligence claim holds.',
 ['Read the facts.',
  'The chain has six links: duty, breach, factual causation, legal causation, remoteness, damage.',
  'Click the link you think fails.'],
 'What it teaches: negligence is a chain where every link must hold, and claims usually fail at causation, remoteness or mitigation rather than on whether someone was careless.'],
prec:['You are building an argument from authority.',
 ['Read the proposition you need to establish.',
  'Pick the cases that establish it, clicking them in the order the argument runs.',
  'Test the chain.'],
 'What it teaches: a case that is merely famous, or merely about the same subject, does not carry an argument. Each authority must license the step the next one takes.'],
guess:['You are identifying a legal system from its features.',
 ['Read the clue. Guess now for the most points.',
  'Ask for another clue if you need it — each one costs a point.',
  'Six clues in total, from tradition down to the raw scores.'],
 'What it teaches: legal systems have fingerprints. Whether trials are adversarial, whether lay people sit, and how the apex court is composed tell you an enormous amount.'],
pow:['You are designing a state from scratch.',
 ['Give each branch its share of power.',
  'Read the consequences and the warnings as the balance shifts.',
  'See which real jurisdictions score where you landed.'],
 'What it teaches: the measure that matters is not whether a country has courts — all do — but whether the government loses in them.'],
rf:['You are separating real case law from invention.',
 ['Read the case.',
  'Decide whether it is a genuine decision or one I made up.',
  'Every answer explains the tell.'],
 'What it teaches: the fakes read perfectly well. What gives them away is that the rule does no sensible work — real doctrine solves a problem.']};
function howPlay(id){
  const h=HOWPLAY[id]; if(!h)return '';
  return `<details class="howplay" open><summary><span>How to play</span><i></i></summary>
    <div class="howplay-b">
      <p class="hp-lead">${esc(h[0])}</p>
      <ol>${h[1].map(x=>`<li>${esc(x)}</li>`).join('')}</ol>
      <p class="hp-teach">${esc(h[2])}</p>
    </div></details>`;
}

/* ---------- shell: index grid + single-game pages ---------- */
/* ---------- ISSUE SPOTTER ---------- */
let spI=0, spPhase=1, spPicked={}, spOrder=[], spDone=false;
function spParse(txt){
  const out=[]; let last=0, re=/\{\{([^|]+)\|([a-z]*)\}\}/g, m, k=0;
  while((m=re.exec(txt))){
    if(m.index>last)out.push({p:txt.slice(last,m.index)});
    out.push({c:k++,txt:m[1],iss:m[2]||''});
    last=m.index+m[0].length;
  }
  if(last<txt.length)out.push({p:txt.slice(last)});
  return out;
}
function spScen(){ return SPOTS[spI] }
function renderSpot(){
  const s=spScen(), toks=spParse(s.text);
  const clues=toks.filter(t=>t.c!==undefined);
  const real=clues.filter(c=>c.iss), fake=clues.filter(c=>!c.iss);
  const hit=real.filter(c=>spPicked[c.c]).length;
  const wrong=fake.filter(c=>spPicked[c.c]).length;
  const pct=real.length?Math.round(hit/real.length*100):0;
  const foundIss=[...new Set(real.filter(c=>spPicked[c.c]).map(c=>c.iss))];
  const allIss=s.issues.slice().sort((a,b)=>a.ord-b.ord);

  return `<div class="spwrap">
    <div class="spbar">
      <div class="spsel">
        ${SPOTS.map((x,i)=>`<button class="spchip ${i===spI?'on':''}" data-sc="${i}">${esc(x.area)}</button>`).join('')}
      </div>
      <div class="spphase">
        ${[1,2,3].map(n=>`<span class="spdot ${spPhase===n?'on':spPhase>n?'done':''}">${n}</span>`).join('<i></i>')}
      </div>
    </div>

    <div class="sphead">
      <div><span class="tag b">${esc(s.area)}</span> <span class="tag">${esc(s.level)}</span></div>
      <h3>${esc(s.t)}</h3>
      <p class="splede">${esc(s.setup)}</p>
    </div>

    ${spPhase===1?`
    <div class="spstep"><b>Step 1 of 3 · Spot</b> — Read it once, then click every phrase that raises a legal issue.
      Some are there to look important and are not. You are marking facts, not answers.</div>
    <div class="sptext" id="spText">
      ${toks.map(t=>t.c===undefined?esc(t.p):
        `<button class="spc ${spPicked[t.c]?'on':''}" data-c="${t.c}">${esc(t.txt)}</button>`).join('')}
    </div>
    <div class="spfoot">
      <span class="spcount">${Object.keys(spPicked).filter(k=>spPicked[k]).length} phrase(s) marked</span>
      <button class="btn" id="spCheck">Check my spotting →</button>
    </div>`:''}

    ${spPhase===2?`
    <div class="spstep"><b>Step 2 of 3 · Review</b> — Here is what was actually in the facts.</div>
    <div class="spscore">
      <div class="spsc"><b>${hit}<span>/${real.length}</span></b><i>Relevant facts found</i></div>
      <div class="spsc ${wrong?'bad':''}"><b>${wrong}</b><i>Red herrings marked</i></div>
      <div class="spsc"><b>${pct}%</b><i>Coverage</i></div>
    </div>
    <div class="sptext ok">
      ${toks.map(t=>{ if(t.c===undefined)return esc(t.p);
        const cl=t.iss?(spPicked[t.c]?'got':'miss'):(spPicked[t.c]?'red':'quiet');
        return `<mark class="spm ${cl}">${esc(t.txt)}</mark>`}).join('')}
    </div>
    <div class="splegend">
      <span><i class="k got"></i> you found it</span><span><i class="k miss"></i> you missed it</span>
      <span><i class="k red"></i> red herring you marked</span><span><i class="k quiet"></i> red herring you left alone</span>
    </div>
    <h4 class="spsec">The issues buried in those facts</h4>
    <div class="spissues">
      ${allIss.map(is=>`<div class="spis ${foundIss.includes(is.id)?'found':''}">
        <div class="spisT"><b>${esc(is.n)}</b>${foundIss.includes(is.id)?'<span class="spok">spotted</span>':'<span class="spno">missed</span>'}</div>
        <p>${esc(is.why)}</p></div>`).join('')}
    </div>
    ${s.decoys.length?`<div class="spdec"><h4>Why the others do not matter</h4>
      <ul>${s.decoys.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}
    <div class="spfoot"><button class="btn ghost" id="spBack1">← Try spotting again</button>
      <button class="btn" id="spNext2">Now structure the answer →</button></div>`:''}

    ${spPhase===3?`
    <div class="spstep"><b>Step 3 of 3 · Structure</b> — Spotting is half the mark. Click the issues in the order you would
      deal with them in an answer. Order matters because some issues only arise if an earlier one is answered a particular way.</div>
    <div class="sporder">
      <div class="sppool"><h5>The issues</h5>
        <div class="sppoolb" id="spPool">
          ${allIss.filter(i=>!spOrder.includes(i.id)).map(i=>
            `<button class="spob" data-o="${i.id}">${esc(i.n)}</button>`).join('')||'<span class="spempty">All placed.</span>'}
        </div></div>
      <div class="spslots"><h5>Your answer plan</h5>
        <ol class="spslotb" id="spSlots">
          ${spOrder.map((id,i)=>{const it=s.issues.find(x=>x.id===id);
            const right=spDone?(it.ord===i+1):null;
            return `<li class="spsl ${right===true?'good':right===false?'off':''}">
              <span class="spn">${i+1}</span><b>${esc(it.n)}</b>
              ${spDone?`<span class="spmk">${right?'✓':'should be '+it.ord}</span>`:
                `<button class="spx" data-x="${id}">✕</button>`}</li>`}).join('')
            ||'<li class="spplace">Click an issue on the left to place it first.</li>'}
        </ol></div>
    </div>
    ${spDone?`<div class="spmodel"><h4>How a marker would order it</h4>
      <p>${esc(s.plan)}</p></div>
      <div class="spfinal"><b>${spOrder.filter((id,i)=>s.issues.find(x=>x.id===id).ord===i+1).length}
        of ${allIss.length}</b> in the right place, and <b>${hit} of ${real.length}</b> facts spotted.</div>
      <div class="spfoot"><button class="btn ghost" id="spReset">Play this one again</button>
        <button class="btn" id="spNextS">Next fact pattern →</button></div>`:
      `<div class="spfoot"><button class="btn ghost" id="spBack2">← Back to the review</button>
        <button class="btn" id="spMark"${spOrder.length<allIss.length?' disabled':''}>Mark my plan</button></div>`}`:''}
  </div>`;
}
function wireSpot(){
  const s=spScen();
  const sel=$('#b-lab .spsel'); if(sel)sel.onclick=e=>{const b=e.target.closest('[data-sc]');if(!b)return;
    spI=+b.dataset.sc;spPhase=1;spPicked={};spOrder=[];spDone=false;paintLab()};
  const t=$('#spText'); if(t)t.onclick=e=>{const b=e.target.closest('[data-c]');if(!b)return;
    const k=b.dataset.c; spPicked[k]=!spPicked[k]; b.classList.toggle('on',!!spPicked[k]);
    const c=$('#b-lab .spcount');
    if(c)c.textContent=Object.keys(spPicked).filter(x=>spPicked[x]).length+' phrase(s) marked'};
  const chk=$('#spCheck'); if(chk)chk.onclick=()=>{spPhase=2;paintLab();scrollTo_('b-lab','start')};
  const b1=$('#spBack1'); if(b1)b1.onclick=()=>{spPhase=1;paintLab()};
  const n2=$('#spNext2'); if(n2)n2.onclick=()=>{spPhase=3;paintLab();scrollTo_('b-lab','start')};
  const b2=$('#spBack2'); if(b2)b2.onclick=()=>{spPhase=2;paintLab()};
  const pool=$('#spPool'); if(pool)pool.onclick=e=>{const b=e.target.closest('[data-o]');if(!b)return;
    spOrder.push(b.dataset.o);paintLab()};
  const slots=$('#spSlots'); if(slots)slots.onclick=e=>{const b=e.target.closest('[data-x]');if(!b)return;
    spOrder=spOrder.filter(x=>x!==b.dataset.x);paintLab()};
  const mk=$('#spMark'); if(mk)mk.onclick=()=>{
    spDone=true;
    const right=spOrder.filter((id,i)=>s.issues.find(x=>x.id===id).ord===i+1).length;
    /* store as a percentage: fact patterns have different issue counts, so raw
       scores are not comparable and "best" would be meaningless. */
    track('game','spot',{score:Math.round(right/s.issues.length*100),of:100});
    track('spot',s.id,{score:Math.round(right/s.issues.length*100),of:100});
    paintLab();scrollTo_('b-lab','start')};
  const rs=$('#spReset'); if(rs)rs.onclick=()=>{spPhase=1;spPicked={};spOrder=[];spDone=false;paintLab();scrollTo_('b-lab','start')};
  const ns=$('#spNextS'); if(ns)ns.onclick=()=>{spI=(spI+1)%SPOTS.length;spPhase=1;spPicked={};spOrder=[];spDone=false;
    paintLab();scrollTo_('b-lab','start')};
}

const GAME_RENDER={spot:renderSpot,jury:renderJury,bench:renderBench,obj:renderObj,boardroom:renderBoardroom,
  custody:renderCustody,forge:renderForge,breach:renderBreach,causation:renderCausation,
  prec:renderPrec,guess:renderGuess,pow:renderPow,rf:renderRF};
const GAME_WIRE={spot:wireSpot,jury:wireJury,bench:wireBench,obj:wireObj,boardroom:wireBoardroom,
  custody:wireCustody,forge:wireForge,breach:wireBreach,causation:wireCausation,
  prec:wirePrec,guess:wireGuess,pow:wirePow,rf:wireRF};
let labTab='jury';
function paintLab(){
  const host=$('#b-lab'); if(!host)return;
  host.innerHTML=howPlay(labTab)+GAME_RENDER[labTab]();
  (GAME_WIRE[labTab]||function(){})();
  const rt=$('#rt-lab'); if(rt)rt.textContent=(GAMEBY[labTab]||{}).t||'';
  if(typeof revealScan==='function')revealScan();
}
function renderLab(){
  const host=$('#b-lab'); if(!host)return;
  host.innerHTML=`<div class="gamegrid">${GAMES.map((g,i)=>`
    <a class="gcard tilt reveal" href="game-${g.id}.html" style="--acc:${g.acc};animation-delay:${i*40}ms">
      <div class="gcard-art">${gameArt(g.id)}</div>
      <div class="gcard-b">
        <div class="gcard-area">${esc(g.area)}</div>
        <h3>${esc(g.t)}</h3>
        <p>${esc(g.tag)}</p>
        <div class="gcard-skill">${esc(g.skill)}</div>
        <span class="gcard-go">Play →</span>
      </div></a>`).join('')}</div>`;
  const rt=$('#rt-lab'); if(rt)rt.textContent=GAMES.length+' games';
  if(typeof revealScan==='function')revealScan();
}

/* ---------- per-game card art ---------- */
function gameArt(id){
  const A={
  spot:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    <rect x="18" y="16" width="118" height="78" rx="5" opacity=".13"/>
    ${Array.from({length:7},(_,i)=>`<rect x="30" y="${26+i*9}" width="${[92,74,86,60,90,70,50][i]}" height="4" rx="2" opacity="${[.3,.85,.3,.85,.3,.3,.85][i]}"/>`).join('')}
    <circle cx="150" cy="52" r="26" fill="none" stroke="currentColor" stroke-width="5"/>
    <path d="M169 71 L188 90" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
    <circle cx="150" cy="52" r="26" opacity=".1"/></g></svg>`,
  jury:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    ${Array.from({length:6},(_,i)=>`<circle cx="${28+i*29}" cy="34" r="9"/><rect x="${20+i*29}" y="46" width="16" height="18" rx="5"/>`).join('')}
    ${Array.from({length:5},(_,i)=>`<circle cx="${42+i*29}" cy="74" r="9"/><rect x="${34+i*29}" y="86" width="16" height="18" rx="5"/>`).join('')}
    </g></svg>`,
  bench:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    <rect x="24" y="78" width="152" height="14" rx="4"/>
    <g transform="rotate(-22 100 50)"><rect x="58" y="30" width="84" height="26" rx="7"/><rect x="92" y="52" width="14" height="40" rx="6"/></g>
    <circle cx="100" cy="16" r="6" opacity=".5"/></g></svg>`,
  obj:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    <rect x="26" y="26" width="88" height="9" rx="4"/><rect x="26" y="46" width="120" height="9" rx="4"/>
    <rect x="26" y="66" width="70" height="9" rx="4"/>
    <circle cx="160" cy="66" r="22" opacity=".28"/><rect x="152" y="52" width="16" height="30" rx="6"/>
    <rect x="146" y="46" width="28" height="9" rx="4"/></g></svg>`,
  boardroom:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    <ellipse cx="100" cy="58" rx="66" ry="26" opacity=".3"/>
    ${[0,1,2,3,4,5,6,7].map(i=>{const a=i/8*Math.PI*2;const x=100+Math.cos(a)*80,y=58+Math.sin(a)*40;
      return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="8"/>`}).join('')}</g></svg>`,
  custody:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    <circle cx="52" cy="34" r="13"/><rect x="38" y="52" width="28" height="42" rx="12"/>
    <circle cx="148" cy="34" r="13"/><rect x="134" y="52" width="28" height="42" rx="12"/>
    <circle cx="100" cy="56" r="9"/><rect x="90" y="70" width="20" height="26" rx="9"/>
    <path d="M66 62 L88 72 M134 62 L112 72" stroke="currentColor" stroke-width="4" opacity=".5"/></g></svg>`,
  forge:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    <rect x="52" y="12" width="96" height="90" rx="7" opacity=".28"/>
    ${[0,1,2,3,4].map(i=>`<rect x="66" y="${26+i*15}" width="${i%2?52:68}" height="7" rx="3.5"/>`).join('')}
    <circle cx="140" cy="88" r="13"/></g></svg>`,
  breach:`<svg viewBox="0 0 200 110"><g fill="none" stroke="currentColor" stroke-width="7">
    <circle cx="100" cy="55" r="40"/><path d="M100 30 L100 55 L120 66" stroke-linecap="round"/></g>
    <g fill="currentColor"><rect x="96" y="6" width="8" height="10" rx="3"/>
    <path d="M148 22 l10 -10" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></g></svg>`,
  causation:`<svg viewBox="0 0 200 110"><g fill="none" stroke="currentColor" stroke-width="6">
    <circle cx="34" cy="55" r="15"/><circle cx="76" cy="55" r="15"/>
    <circle cx="132" cy="55" r="15" opacity=".4"/><circle cx="174" cy="55" r="15" opacity=".4"/></g>
    <g fill="currentColor"><path d="M96 46 l16 9 -16 9 z" opacity=".5"/></g></svg>`,
  prec:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    ${[0,1,2].map(i=>`<rect x="${30+i*56}" y="${64-i*20}" width="48" height="${34+i*20}" rx="6" opacity="${.4+i*.25}"/>`).join('')}
    <rect x="24" y="98" width="152" height="8" rx="4"/></g></svg>`,
  guess:`<svg viewBox="0 0 200 110"><g fill="none" stroke="currentColor" stroke-width="6">
    <circle cx="100" cy="55" r="40"/><ellipse cx="100" cy="55" rx="17" ry="40"/>
    <path d="M60 55 h80 M68 34 h64 M68 76 h64" stroke-width="4" opacity=".6"/></g></svg>`,
  pow:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    ${[0,1,2].map(i=>`<rect x="${34+i*56}" y="${34+i*10}" width="34" height="${58-i*10}" rx="4" opacity="${.85-i*.2}"/>`).join('')}
    <rect x="24" y="94" width="152" height="10" rx="4"/><rect x="24" y="20" width="152" height="8" rx="4" opacity=".45"/></g></svg>`,
  rf:`<svg viewBox="0 0 200 110"><g fill="currentColor">
    <rect x="26" y="18" width="72" height="76" rx="7" opacity=".75" transform="rotate(-7 62 56)"/>
    <rect x="104" y="18" width="72" height="76" rx="7" opacity=".35" transform="rotate(6 140 56)"/></g></svg>`};
  return A[id]||A.jury;
}

/* --- renderer: what does this mean --------------------------------- */
let docSel='', docPart=0;
const URGW=[[1,'Not urgent','ok'],[2,'Time-limited','warn'],[3,'Act now','hot']];
function docIcon(id){
  const P={claim:'M14 8h24l10 10v34H14z M38 8v10h10',evict:'M32 10 L52 26v26H12V26z M26 52V38h12v14',
    discip:'M16 10h32v44H16z M24 22h16 M24 30h16 M24 38h10',debt:'M12 18h40v28H12z M12 28h40 M40 38h8',
    police:'M32 8 L52 16v16c0 12-9 19-20 24-11-5-20-12-20-24V16z',et:'M12 12h40v40H12z M20 22h24 M20 30h24 M20 38h14',
    refuse:'M16 10h32v44H16z M25 25l14 14 M39 25l-14 14',summons:'M12 14h40v36H12z M22 26h20 M22 34h12 M44 44l6 8',
    breachnote:'M32 10 L54 50H10z M32 26v12 M32 43v2'};
  return `<svg viewBox="0 0 64 64" class="dcico" aria-hidden="true"><path d="${P[id]||P.claim}" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}
function renderDocs(){
  const host=$('#b-docs'); if(!host)return;
  if(!docSel){
    host.innerHTML=`
      <div class="howto"><b>What this page is.</b> A letter arrives and it is written to sound serious. This page takes the
        documents people most often receive, and walks through them line by line — what each part means, which date is the one
        that actually matters, and what really happens if you do nothing. Pick whichever looks like yours.</div>
      <div class="dcgrid">
        ${DOCS.map(d=>{const u=URGW[d.urg-1];
          return `<button class="dccard u-${u[2]}" data-d="${d.id}">
            <div class="dchd">${docIcon(d.id)}<span class="uband ${u[2]}">${u[1]}</span></div>
            <h4>${d.t}</h4><p class="dcwho">From: ${esc(d.who)}</p>
            <p class="dcgist">${esc(d.gist.split('.')[0])}.</p>
            <span class="dcgo">Open this →</span></button>`}).join('')}
      </div>
      <div class="note" style="margin-top:20px"><b>Not sure which one you have?</b> Look at who sent it. A court, a landlord,
        an employer, a debt collector and a government department all send very different things, and the sender tells you more
        than the wording does.</div>`;
    host.querySelector('.dcgrid').onclick=e=>{const b=e.target.closest('[data-d]');if(!b)return;
      docSel=b.dataset.d;docPart=0;renderDocs();scrollTo_('b-docs','start');track('doc',docSel)};
    if($('#rt-docs'))$('#rt-docs').textContent=DOCS.length+' documents';
    return;
  }
  const d=DOCSBY[docSel], u=URGW[d.urg-1], p=d.parts[docPart];
  host.innerHTML=`
    <div class="dcback"><button class="btn ghost sm" id="dcBack">← All documents</button>
      <span class="uband ${u[2]}">${u[1]}</span></div>
    <h3 class="dctitle">${d.t}</h3>
    <p class="dcfrom">Sent by ${esc(d.who)}</p>
    <div class="dcdl"><span class="dcdlk">The deadline that matters</span><b>${esc(d.dl)}</b></div>
    <div class="dcrow">
      <div class="dcwhat"><h4>What this actually is</h4><p>${esc(d.gist)}</p></div>
      <div class="dccalm"><h4>Before you panic</h4><p>${esc(d.calm)}</p></div>
    </div>

    <h4 class="dcsec">The document, part by part</h4>
    <p class="dchint">Click any numbered part of the document to see what it means. Documents look different in every country —
      this is the shape they share.</p>
    <div class="dcwrap">
      <div class="dcpaper" id="dcPaper">
        <div class="dcstamp">${esc(d.t.toUpperCase())}</div>
        ${d.parts.map((x,i)=>`<button class="dcband ${i===docPart?'on':''}" data-p="${i}" aria-pressed="${i===docPart}">
          <span class="dcnum">${i+1}</span>
          <span class="dclab">${esc(x[0])}</span>
          <span class="dclines">${'<i></i>'.repeat(2+(i%3))}</span></button>`).join('')}
      </div>
      <div class="dcexp">
        <div class="dcexpn">${docPart+1}</div>
        <h5 data-live="dcT">${esc(p[0])}</h5>
        <p data-live="dcB">${esc(p[1])}</p>
        <div class="dcnav"><button class="btn ghost sm" id="dcPrev"${docPart===0?' disabled':''}>← Previous</button>
          <span class="dccount">${docPart+1} of ${d.parts.length}</span>
          <button class="btn sm" id="dcNext"${docPart===d.parts.length-1?' disabled':''}>Next part →</button></div>
      </div>
    </div>

    <div class="dcrow2">
      <div class="dcign"><h4>If you do nothing</h4><p>${esc(d.ignore)}</p></div>
      <div class="dcdo"><h4>What to do now</h4>
        <ol class="dclist">${d.act.map((a,i)=>`<li><label><input type="checkbox" data-ck="${i}"> <span>${esc(a)}</span></label></li>`).join('')}</ol>
        <p class="dcnote">Ticking these is just for you. Nothing is sent anywhere.</p></div>
    </div>
    <div class="dcask"><h4>Three questions worth answering before you reply</h4>
      <ul>${d.ask.map(q=>`<li>${esc(q)}</li>`).join('')}</ul></div>
    <div class="dcfoot">
      <p>This describes the general shape of these documents. The exact rules, forms and time limits differ by country and
        sometimes by region — check yours, and get advice if a deadline is close.</p>
      <div class="dcfl"><a class="btn sm" href="situation.html#help">Find free help near you</a>
        <a class="btn sm ghost" href="situation.html#process">See what happens next →</a>
        <a class="btn sm ghost" href="situation.html#letters">Write a reply</a></div>
    </div>`;
  $('#dcBack').onclick=()=>{docSel='';renderDocs();scrollTo_('b-docs','start')};
  $('#dcPaper').onclick=e=>{const b=e.target.closest('[data-p]');if(!b)return;docPart=+b.dataset.p;renderDocs()};
  $('#dcPrev').onclick=()=>{if(docPart>0){docPart--;renderDocs()}};
  $('#dcNext').onclick=()=>{if(docPart<d.parts.length-1){docPart++;renderDocs()}};
  if($('#rt-docs'))$('#rt-docs').textContent=d.t;
}

/* --- renderer: what happens next ----------------------------------- */
let prcSel='', prcStep=-1;
function prcIcon(ic){
  const P={coin:'M32 12a20 20 0 100 40 20 20 0 100-40 M32 20v24 M26 26h9a5 5 0 010 10h-9',
    scale:'M32 12v40 M14 22h36 M14 22l-7 14h14z M50 22l-7 14h14z M22 52h20',
    door:'M18 12h28v40H18z M39 32v3',gavel:'M18 40l16-16 M28 18l12 12 M36 26l12 12 M14 46l10 4',
    seal:'M32 10l6 12 13 2-9 10 2 13-12-6-12 6 2-13-9-10 13-2z',
    home:'M32 12L54 30v22H10V30z M26 52V38h12v14'};
  return `<svg viewBox="0 0 64 64" class="prico" aria-hidden="true"><path d="${P[ic]||P.scale}" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function renderProcs(){
  const host=$('#b-process'); if(!host)return;
  if(!prcSel){
    host.innerHTML=`
      <div class="howto"><b>What this page is.</b> Most of the fear in a legal process is fear of the unknown — not knowing
        what happens, in what order, over how long, or who will be in the room. These are the six processes people most often
        find themselves in, laid out stage by stage with honest timescales.</div>
      <div class="prgrid">
        ${PROCS.map(p=>`<button class="prcard" data-p="${p.id}">
          ${prcIcon(p.ic)}<h4>${p.t}</h4><p class="prtag">${esc(p.tag)}</p>
          <div class="prmeta"><span>${p.steps.length} stages</span><span>${esc(p.total)}</span></div>
          <span class="dcgo">Walk through it →</span></button>`).join('')}
      </div>
      <div class="note" style="margin-top:20px"><b>Timescales are typical, not promised.</b> Court backlogs vary enormously
        between countries and even between cities. Treat these as the shape of the thing, not a schedule.</div>`;
    host.querySelector('.prgrid').onclick=e=>{const b=e.target.closest('[data-p]');if(!b)return;
      prcSel=b.dataset.p;prcStep=-1;renderProcs();scrollTo_('b-process','start');track('proc',prcSel)};
    if($('#rt-process'))$('#rt-process').textContent=PROCS.length+' processes';
    return;
  }
  const p=PROCSBY[prcSel], n=p.steps.length;
  const done=prcStep>=0?prcStep:-1, pct=prcStep>=0?Math.round(((prcStep+1)/n)*100):0;
  host.innerHTML=`
    <div class="dcback"><button class="btn ghost sm" id="prBack">← All processes</button>
      <span class="uband ok">${esc(p.total)}</span></div>
    <h3 class="dctitle">${p.t}</h3>
    <p class="dcfrom">${esc(p.tag)}</p>
    <div class="dcrow">
      <div class="dcwhat"><h4>How this works</h4><p>${esc(p.gist)}</p></div>
      <div class="dccalm"><h4>Who is actually there</h4><p>${esc(p.who)}</p></div>
    </div>

    <div class="prwhere"><h4>Where are you in this?</h4>
      <p class="dchint">Tell it which stage you have reached and it shows you what is behind you and what is still ahead.</p>
      <div class="prsteps" id="prSteps">
        <button class="prchip ${prcStep<0?'on':''}" data-s="-1">Not started</button>
        ${p.steps.map((s,i)=>`<button class="prchip ${prcStep===i?'on':''}" data-s="${i}">${i+1}. ${esc(s[0])}</button>`).join('')}
      </div>
      ${prcStep>=0?`<div class="prbar"><i style="width:${pct}%"></i></div>
        <p class="prpct">Roughly <b>${pct}%</b> of the way through — ${n-prcStep-1} stage${n-prcStep-1===1?'':'s'} still ahead.</p>`:''}
    </div>

    <ol class="prtl">
      ${p.steps.map((s,i)=>{
        const st=done<0?'':(i<done?'past':i===done?'now':'ahead');
        return `<li class="prtli ${st}">
          <div class="prdot">${i<done?'✓':i+1}</div>
          <div class="prbody">
            <div class="prtop"><h5>${esc(s[0])}</h5><span class="prtime">${esc(s[1])}</span></div>
            <p>${esc(s[2])}</p>
            <div class="prtip"><b>Worth knowing.</b> ${esc(s[3])}</div>
          </div></li>`}).join('')}
    </ol>

    <div class="prfear"><h4>Three things people worry about that are not true</h4>
      <ul>${p.fear.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></div>
    <div class="dcfoot">
      <p>Procedure differs by country, and sometimes within one. The stages and their order are broadly shared; the names,
        forms and exact timescales are not.</p>
      <div class="dcfl"><a class="btn sm" href="situation.html#help">Find free help near you</a>
        <a class="btn sm ghost" href="situation.html#docs">Understand a letter you received</a>
        <a class="btn sm ghost" href="situation.html#guide">Start the walkthrough</a></div>
    </div>`;
  $('#prBack').onclick=()=>{prcSel='';renderProcs();scrollTo_('b-process','start')};
  $('#prSteps').onclick=e=>{const b=e.target.closest('[data-s]');if(!b)return;prcStep=+b.dataset.s;renderProcs()};
  if($('#rt-process'))$('#rt-process').textContent=p.t;
}

/* ==================================================================
   35 · YOUR PROGRESS
   ================================================================== */
function progPct(){
  const p=progressAll();
  const secs=SEC.filter(s=>s[0]!=='start'&&s[0]!=='progress');
  const sv=secs.filter(s=>p['sec:'+s[0]]).length;
  const gv=GAMES.filter(g=>p['game:'+g.id]).length;
  const dv=DOCS.filter(d=>p['doc:'+d.id]).length;
  const pv=PROCS.filter(x=>p['proc:'+x.id]).length;
  const tot=secs.length+GAMES.length+DOCS.length+PROCS.length;
  return {sv,gv,dv,pv,secs:secs.length,tot,done:sv+gv+dv+pv,
    pct:Math.round((sv+gv+dv+pv)/tot*100)};
}
function progWhen(ts){
  if(!ts)return '';
  const m=Math.floor((Date.now()-ts)/60000);
  if(m<2)return 'just now'; if(m<60)return m+' minutes ago';
  const h=Math.floor(m/60); if(h<24)return h+' hour'+(h===1?'':'s')+' ago';
  const d=Math.floor(h/24); if(d<31)return d+' day'+(d===1?'':'s')+' ago';
  return 'a while ago';
}
function shareText(){
  const s=progPct(), p=progressAll();
  const best=GAMES.map(g=>({g,r:p['game:'+g.id]})).filter(x=>x.r&&x.r.best!==undefined)
    .sort((a,b)=>(b.r.best/(b.r.of||1))-(a.r.best/(a.r.of||1)))[0];
  let t='I have explored '+s.pct+'% of LawOrchard — '+s.gv+' of '+GAMES.length+' law games';
  if(best)t+=', best run '+best.r.best+(best.r.of===100?'%':'/'+best.r.of)+' on '+best.g.t;
  return t+'. Free, no account needed: https://laworchard.com';
}
function renderProgress(){
  const host=$('#b-progress'); if(!host)return;
  const p=progressAll(), s=progPct(), any=s.done>0;
  const recent=Object.entries(p).map(([k,v])=>{
    const [kind,id]=[k.slice(0,k.indexOf(':')),k.slice(k.indexOf(':')+1)];
    let label='',href='';
    if(kind==='sec'&&SECBY[id]){label=SECBY[id][2].replace(/&amp;/g,'&');href=GROUP_PAGE[SECBY[id][4]]+'#'+id}
    else if(kind==='game'&&GAMEBY[id]){label=GAMEBY[id].t;href='game-'+id+'.html'}
    else if(kind==='doc'&&DOCSBY[id]){label=DOCSBY[id].t;href='situation.html#docs'}
    else if(kind==='proc'&&PROCSBY[id]){label=PROCSBY[id].t;href='situation.html#process'}
    return label?{label,href,kind,v}:null;
  }).filter(Boolean).sort((a,b)=>b.v.last-a.v.last).slice(0,6);

  host.innerHTML=`
    <div class="howto"><b>What this is.</b> A record of what you have looked at on this site, kept on this device only.
      Nothing is uploaded, there is no account, and clearing it removes it for good. It exists so you can pick up where you
      left off rather than wondering which parts you have already read.</div>

    ${!any?`<div class="pgempty">
      <div class="pgring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" class="pgbg"/></svg><b>0%</b></div>
      <h4>Nothing tracked yet</h4>
      <p>Read a section, play a game or open a document and it will appear here.</p>
      <div class="dcfl"><a class="btn" href="situation.html#guide">Start the walkthrough</a>
        <a class="btn ghost" href="lab.html">Open the Law Lab</a></div></div>`:`

    <div class="pgtop">
      <div class="pgring">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" class="pgbg"/>
          <circle cx="60" cy="60" r="52" class="pgfg" style="stroke-dasharray:${(s.pct/100*326.7).toFixed(1)} 326.7"/>
        </svg><b>${s.pct}%</b></div>
      <div class="pgsum">
        <h4>You have opened ${s.done} of ${s.tot} things here</h4>
        <p>There is no order you are meant to go in and no reason to finish it. This is a map of where you have been,
          not a checklist you owe anybody.</p>
        <div class="pgstats">
          <div><b>${s.sv}<span>/${s.secs}</span></b><i>Sections</i></div>
          <div><b>${s.gv}<span>/${GAMES.length}</span></b><i>Games</i></div>
          <div><b>${s.dv}<span>/${DOCS.length}</span></b><i>Documents</i></div>
          <div><b>${s.pv}<span>/${PROCS.length}</span></b><i>Processes</i></div>
        </div>
      </div>
    </div>

    ${recent.length?`<h4 class="pgh">Pick up where you left off</h4>
    <div class="pgrec">${recent.map(r=>`<a class="pgr" href="${r.href}">
      <span class="pgk">${r.kind==='sec'?'Section':r.kind==='game'?'Game':r.kind==='doc'?'Document':'Process'}</span>
      <b>${esc(r.label)}</b>
      <i>${progWhen(r.v.last)}${r.v.n>1?' · '+r.v.n+' visits':''}${r.v.best!==undefined?' · best '+r.v.best+(r.v.of===100?'%':'/'+r.v.of):''}</i>
      </a>`).join('')}</div>`:''}

    <h4 class="pgh">The Law Lab</h4>
    <div class="pggames">${GAMES.map(g=>{const r=p['game:'+g.id];
      return `<a class="pgg ${r?'on':''}" href="game-${g.id}.html" style="--acc:${g.acc}">
        <span class="pggd"></span><b>${esc(g.t)}</b>
        <i>${r?(r.best!==undefined?'best '+r.best+(r.of===100?'%':'/'+r.of):'played'):'not played'}</i></a>`}).join('')}</div>

    <div class="pgshare">
      <h4>Share where you have got to</h4>
      <p>Copies a line of text you can paste anywhere. It contains no personal information — just the percentage and your best game score.</p>
      <div class="pgsharebox" id="pgShareBox">${esc(shareText())}</div>
      <div class="dcfl"><button class="btn" id="pgCopy">Copy this</button>
        <button class="btn ghost" id="pgClear">Clear my history</button></div>
    </div>`}`;

  const cp=$('#pgCopy');
  if(cp)cp.onclick=()=>{const t=shareText();
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(()=>toast('Copied.'),()=>toast('Could not copy — select the text instead.'));
    } else toast('Select the text above and copy it.');};
  const cl=$('#pgClear');
  if(cl)cl.onclick=()=>{
    if(!confirm('Clear everything this site remembers on this device — progress, theme and text size?'))return;
    clearStore(); toast('Cleared.'); renderProgress();};
}

/* ==================================================================
   36 · FIRST RUN TOUR
   Five cards on a first visit. Remembered, skippable, and re-openable
   from the More menu. Never shown to anyone who has been here before.
   ================================================================== */
const TOUR=[
 ['Welcome to LawOrchard',
  'This is a free site that explains how law works to people who are not lawyers. No account, no sign-up, nothing to pay.',
  'Three kinds of people use it: someone dealing with a legal problem right now, a student learning how systems work, and someone who is simply curious. You can be any of them, on different days.','◈'],
 ['Start with why you are here',
  'The front page has four doors. Pick the one that sounds like you and it takes you straight there rather than making you hunt through menus.',
  'If something is urgent — an arrest, an eviction today, a deadline this week — there is a red panel at the top that skips everything else and goes to real help.','⚖'],
 ['Make it comfortable to read',
  'Four looks live under Theme in the top bar: bright daylight, low light, a warm courtroom, and one that reads like a printed contract.',
  'Under More you can also change the text size. Both are remembered on this device, so you only set them once.','◐'],
 ['Everything stays on your device',
  'There is no server and no account. The walkthrough, the calculators, the letter builder, the games and the search all run inside your own browser.',
  'Your theme, text size and what you have read are saved locally so the site remembers you. You can wipe all of it from Your progress whenever you want.','▣'],
 ['One last thing',
  'Press ⌘K, Ctrl+K or the slash key anywhere on the site to search everything at once — a country, a case, a legal term, or a problem in your own words.',
  'And the important caveat: this explains how law generally works. It is not advice about your situation, and it does not replace a lawyer where you live.','⌕']];

let tourAt=0;
function tourShow(force){
  if(!force&&storeGet('seenTour',false))return;
  if(!force&&PAGE!=='start')return;
  tourAt=0; tourPaint();
}
function tourPaint(){
  const t=TOUR[tourAt], last=tourAt===TOUR.length-1;
  let ov=$('#tourOv');
  if(!ov){ ov=document.createElement('div'); ov.id='tourOv'; ov.className='tourov';
    document.body.appendChild(ov); }
  ov.innerHTML=`<div class="tourbox" role="dialog" aria-modal="true" aria-label="Introduction">
    <button class="tourx" id="tourX" aria-label="Close">✕</button>
    <div class="touric">${t[3]}</div>
    <h3>${esc(t[0])}</h3>
    <p>${esc(t[1])}</p>
    <p class="toursub">${esc(t[2])}</p>
    <div class="tourdots">${TOUR.map((_,i)=>
      `<button class="tourd ${i===tourAt?'on':''}" data-td="${i}" aria-label="Step ${i+1}"></button>`).join('')}</div>
    <div class="tourfoot">
      <button class="btn ghost sm" id="tourSkip">${last?'':'Skip this'}</button>
      <div class="tournav">
        ${tourAt>0?'<button class="btn ghost sm" id="tourPrev">← Back</button>':''}
        <button class="btn" id="tourNext">${last?'Start looking around':'Next →'}</button>
      </div></div></div>`;
  requestAnimationFrame(()=>ov.classList.add('on'));
  document.body.style.overflow='hidden';
  const close=()=>{ ov.classList.remove('on'); document.body.style.overflow='';
    saveStore({seenTour:true}); setTimeout(()=>{ if(ov.parentNode)ov.parentNode.removeChild(ov) },260); };
  $('#tourX').onclick=close;
  $('#tourSkip').onclick=close;
  $('#tourNext').onclick=()=>{ if(tourAt===TOUR.length-1)return close(); tourAt++; tourPaint(); };
  const pv=$('#tourPrev'); if(pv)pv.onclick=()=>{ tourAt--; tourPaint(); };
  ov.querySelector('.tourdots').onclick=e=>{ const b=e.target.closest('[data-td]'); if(!b)return;
    tourAt=+b.dataset.td; tourPaint(); };
  ov.onclick=e=>{ if(e.target===ov)close(); };
  document.addEventListener('keydown',function esc(ev){
    if(!document.getElementById('tourOv')){document.removeEventListener('keydown',esc);return}
    if(ev.key==='Escape')close();
    if(ev.key==='ArrowRight'&&tourAt<TOUR.length-1){tourAt++;tourPaint()}
    if(ev.key==='ArrowLeft'&&tourAt>0){tourAt--;tourPaint()}
  });
}
window.tourShow=tourShow;

/* ==================================================================
   37 · RECENT DECISIONS
   Fed from cases-recent.js, which loads BEFORE this file. If that
   file is missing or broken the page still works — it just shows
   nothing. That is deliberate: the automatic update writes only to
   that file, so it can never take the site down.
   ================================================================== */
const RCASES = (typeof RECENT!=='undefined' && Array.isArray(RECENT)) ? RECENT : [];
const RPEND  = (typeof PENDING!=='undefined' && Array.isArray(PENDING)) ? PENDING : [];
const RCURR  = (typeof CURRENTS!=='undefined' && Array.isArray(CURRENTS)) ? CURRENTS : [];
const RUPD   = (typeof RECENT_UPDATED!=='undefined') ? RECENT_UPDATED : '';
let rcStream='people', rcOpen='';

function rcDate(iso){
  const M=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const d=new Date(iso+'T00:00:00Z'); if(isNaN(d))return iso;
  return d.getUTCDate()+' '+M[d.getUTCMonth()]+' '+d.getUTCFullYear();
}
function rcAgo(iso){
  const d=new Date(iso+'T00:00:00Z'); if(isNaN(d))return '';
  const days=Math.floor((Date.now()-d.getTime())/86400000);
  if(days<1)return 'today'; if(days<14)return days+' days ago';
  if(days<60)return Math.floor(days/7)+' weeks ago';
  if(days<730)return Math.floor(days/30)+' months ago';
  return Math.floor(days/365)+' years ago';
}
function renderRecent(){
  const host=$('#b-recent'); if(!host)return;
  const mine=RCASES.filter(c=>c.stream===rcStream).sort((a,b)=>b.date.localeCompare(a.date));
  const explained=mine.filter(c=>c.sum), listed=mine.filter(c=>!c.sum);
  const nPeople=RCASES.filter(c=>c.stream==='people').length;
  const nMark=RCASES.filter(c=>c.stream==='landmark').length;

  host.innerHTML=`
    <div class="howto"><b>What this page is.</b> Courts hand down hundreds of decisions a week and almost none of them
      matter to anyone outside the case. These are the ones that do — split into rulings that change what an ordinary
      person can actually do, and rulings that change the law itself. Every entry links to the judgment so you can check
      it rather than take our word for it.</div>

    <div class="rcstreams" id="rcStreams">
      <button class="rcs ${rcStream==='people'?'on':''}" data-s="people">
        <b>What changed for you</b><i>${nPeople} ruling${nPeople===1?'':'s'}</i>
        <span>Decisions that change your rights at work, at home, with the police or with your money.</span></button>
      <button class="rcs ${rcStream==='landmark'?'on':''}" data-s="landmark">
        <b>Landmark rulings</b><i>${nMark} ruling${nMark===1?'':'s'}</i>
        <span>Decisions that change the law itself — overruled precedents, new tests, constitutional questions.</span></button>
      <button class="rcs ${rcStream==='currents'?'on':''}" data-s="currents">
        <b>The wider picture</b><i>${RCURR.length} shift${RCURR.length===1?'':'s'}</i>
        <span>Changes that are not a single ruling — where legal systems as a whole are moving, and how fast.</span></button>
    </div>

    ${rcStream==='currents'?`<div class="rclist">
      ${RCURR.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(c=>`
        <article class="rcard ${rcOpen===c.id?'open':''}" id="rc-${c.id}">
        <button class="rchead" data-o="${c.id}">
          <div class="rcmeta"><span class="rcct">${esc(c.kind||'Trend')}</span>
            <span class="rcdt">${rcDate(c.date)}</span></div>
          <h4>${esc(c.t)}</h4>
          <div class="rctags"><span class="tag b">${esc(c.area)}</span>
            <span class="rcexp">Sourced</span></div>
          <span class="rcchev">${rcOpen===c.id?'−':'+'}</span>
        </button>
        <div class="rcbody">
          <h5>What the figures show</h5><p>${esc(c.sum)}</p>
          ${c.why?`<h5>Why it matters to you</h5><p>${esc(c.why)}</p>`:''}
          <a class="rcsrc" href="${esc(c.src)}" target="_blank" rel="noopener noreferrer">
            Read the source — ${esc(c.srcName||'official page')} ↗</a>
        </div></article>`).join('')}
      </div>
      <div class="note" style="margin-top:18px"><b>These are not court decisions.</b> They are measured shifts in how legal
        systems are working, from bodies that publish their method. Each one links to the original so you can see how the
        figure was arrived at.</div>`:''}

    ${rcStream!=='currents'?`${explained.length?`<div class="rclist">
      ${explained.map(c=>`<article class="rcard ${rcOpen===c.id?'open':''}" id="rc-${c.id}">
        <button class="rchead" data-o="${c.id}">
          <div class="rcmeta"><span class="rcct">${esc(c.court)}</span>
            <span class="rcdt">${rcDate(c.date)} · ${rcAgo(c.date)}</span></div>
          <h4>${esc(c.t)}</h4>
          <div class="rctags"><span class="tag b">${esc(c.area)}</span>
            <span class="tag">${esc(c.cite)}</span>
            <span class="rcexp">Explained</span></div>
          <span class="rcchev">${rcOpen===c.id?'−':'+'}</span>
        </button>
        <div class="rcbody">
          <h5>What the court decided</h5><p>${esc(c.sum)}</p>
          ${c.why?`<h5>Why it matters to you</h5><p>${esc(c.why)}</p>`:''}
          <a class="rcsrc" href="${esc(c.src)}" target="_blank" rel="noopener noreferrer">
            Read the source — ${esc(c.srcName||'official page')} ↗</a>
        </div></article>`).join('')}
    </div>`:'<div class="empty">NOTHING EXPLAINED IN THIS STREAM YET</div>'}

    ${listed.length?`
    <h4 class="rch">Also decided — listed, not yet summarised</h4>
    <p class="dchint">We know these were decided and what they were about, but nobody has read the full judgment to
      write it up. Rather than guess at the outcome, they are listed with a link. That is the honest version.</p>
    <div class="rclisted">
      ${listed.map(c=>`<a class="rcl" href="${esc(c.src)}" target="_blank" rel="noopener noreferrer">
        <span class="rcldt">${rcDate(c.date)}</span>
        <b>${esc(c.t)}</b>
        <span class="rclmeta">${esc(c.cite)} · ${esc(c.area)} ↗</span></a>`).join('')}
    </div>`:''}

    ${RPEND.length?`
    <h4 class="rch">Argued but not yet decided</h4>
    <div class="rcpend">
      ${RPEND.map(p=>`<div class="rcp">
        <div class="rcmeta"><span class="rcct">${esc(p.court)}</span><span class="rcdt">${esc(p.stage)}</span></div>
        <h4>${esc(p.t)}</h4>
        <p>${esc(p.what)}</p>
        <a class="rcsrc" href="${esc(p.src)}" target="_blank" rel="noopener noreferrer">${esc(p.srcName||'Source')} ↗</a>
      </div>`).join('')}
    </div>`:''}`:''}

    <div class="rcfoot">
      <div><b>Last reviewed ${RUPD?rcDate(RUPD):'—'}</b>
        <p>New decisions are added periodically. Every entry carries a link to the judgment or an official court page —
          if an entry has no source it does not go in. Coverage is currently strongest for the United Kingdom and will
          widen; it is not, and will never be, a complete record of what courts decided.</p></div>
      <div class="dcfl"><a class="btn sm ghost" href="learn.html#caselaw">The 42 landmark cases →</a>
        <a class="btn sm ghost" href="about.html#method">How we label confidence →</a></div>
    </div>`;

  $('#rcStreams').onclick=e=>{const b=e.target.closest('[data-s]');if(!b)return;
    rcStream=b.dataset.s; rcOpen=''; renderRecent(); track('sec','recent')};
  host.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{
    rcOpen=rcOpen===b.dataset.o?'':b.dataset.o; renderRecent();
    if(rcOpen)track('case',rcOpen);
  });
  if($('#rt-recent'))$('#rt-recent').textContent=RCASES.length+' decisions';
}

/* ==================================================================
   BOOT
   ================================================================== */
const RENDERERS={start:()=>renderStart(),help:()=>renderHelp(),guide:()=>renderGuide(),
  qa:()=>renderQA(),letters:()=>renderLetters(),counsel:()=>renderCounsel(),lab:()=>renderLab(),
  docs:()=>renderDocs(),process:()=>renderProcs(),progress:()=>renderProgress(),recent:()=>renderRecent(),
  atlas:()=>renderAtlas(),index:()=>renderIndex(),juris:()=>renderJuris(),compare:()=>renderCompare(),
  courts:()=>renderCourts(),caselaw:()=>renderCases(),brief:()=>renderBrief(),quiz:()=>renderQuiz(),
  models:()=>renderModels(),areas:()=>renderAreas(),ai:()=>renderAIsec(),qualify:()=>renderQualify(),
  fit:()=>renderFit(),method:()=>renderMethod()};
function renderAll(){
  if($('#kpis'))renderKpis();
  if(GAME){ setupGamePage(); paintLab(); }
  MYSEC.forEach(x=>{ const f=RENDERERS[x[0]]; if(f&&$('#b-'+x[0]))f(); });
  buildTicker();paintThemeMenu();paintMore();
}
newQuiz();
renderAll();
function setupGamePage(){
  const g=GAMEBY[GAME]||GAMES[0]; labTab=GAME;
  $('#main').innerHTML=`<section class="view on" id="v-lab">
    <div class="shead reveal"><div class="kicker">${g.area}</div><h2>${g.t}</h2>
      <p class="lede">${g.tag}</p><div class="right" id="rt-lab"></div></div>
    <div id="b-lab"></div>
    <div class="backlab"><a class="btn ghost" href="lab.html">← All thirteen games</a></div>
  </section>`;
  document.documentElement.style.setProperty('--game-acc',g.acc);
  track('game',g.id);
}
function applySaved(){
  const st=loadStore();
  if(st.theme)document.documentElement.setAttribute('data-theme',st.theme);
  if(st.textSize){const z=SIZES.find(x=>x[0]===st.textSize);
    if(z){document.documentElement.style.fontSize=z[2]+'px';document.body.style.fontSize=z[2]+'px'}}
  if(st.ticker){$('#ticker').classList.add('on')}
  if(st.console){$('#term').classList.add('avail');document.body.classList.add('console-on')}
  if(st.lens){ const b=$('#lensSel button[data-l="'+st.lens+'"]');
    if(b){$$('#lensSel button').forEach(x=>x.classList.toggle('on',x===b));} }
}
(function boot(){
  applySaved();
  if(GAME){ document.body.classList.add('booted');
    if(typeof initFX==='function')initFX(); return; }
  const hash=(location.hash||'').replace('#','');
  const first=MYSEC.length?MYSEC[0][0]:'start';
  go(MYSEC.some(x=>x[0]===hash)?hash:first);
  setTimeout(()=>{ try{ tourShow() }catch(e){} },700);
  const q=new URLSearchParams(location.search);
  if(q.get('j')&&byIso[q.get('j')])setTimeout(()=>jurisReport(q.get('j')),120);
  if(q.get('a')&&AREAS.some(a=>a.n===q.get('a')))setTimeout(()=>areaReport(q.get('a')),120);
  if(q.get('l')&&LETTERS.some(l=>l.id===q.get('l'))){letSel=q.get('l');if($('#b-letters'))renderLetters()}
  if(q.get('qa')){const t=q.get('qa');if($('#b-qa')){renderQA(t);setTimeout(()=>scrollTo_('qa-'+t,'center'),200)}}
  if(q.get('lab')&&LABS.some(l=>l[0]===q.get('lab'))){labTab=q.get('lab');if($('#b-lab'))paintLab()}
  if(typeof initFX==='function')initFX();
})();
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]'); if(!a)return;
  const id=a.getAttribute('href').slice(1);
  if(SECBY[id]){ e.preventDefault(); go(id); }
});
addEventListener('hashchange',()=>{ const h=(location.hash||'').slice(1);
  if(SECBY[h]&&SECBY[h][4]===PAGE)go(h); });
window.go=go;window.setTheme=setTheme;
