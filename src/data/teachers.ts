export type Teacher = {
  name: string;
  role: string;
  focus?: string;
  tags?: string[];
  bio: string;
};

export const leadership: Teacher[] = [
  {
    name: 'Therese Rosenqvist',
    role: 'Rektor',
    focus: 'Trygghet & hållbarhet',
    bio:
      'Therese leder skolans utveckling med fokus på elevnära ledarskap. Hon driver hållbarhetsprojekt tillsammans med elevrådet och syns ofta på skolgården för att fånga elevernas idéer.'
  },
  {
    name: 'Mikael Ahlberg',
    role: 'Biträdande rektor åk 7–9',
    focus: 'Studiero & framtidskompetenser',
    bio:
      'Mikael arbetar med kollegialt lärande och digitalisering i klassrummen. Han coachar arbetslagen i projektbaserat lärande och älskar att starta dagen med pingisturneringar i matsalen.'
  },
  {
    name: 'Lisa Holmgren',
    role: 'Elevhälsochef',
    focus: 'Elevhälsa & inkludering',
    bio:
      'Lisa håller ihop skolans tvärprofessionella elevhälsoteam. Hon ser till att stödinsatser kommer på plats tidigt och att alla elever möts av en tillgänglig lärmiljö.'
  }
];

export const teachingTeams: Teacher[] = [
  {
    name: 'Johanna Berg',
    role: 'Lärare åk 1–3',
    tags: ['Lässtart', 'Utelek'],
    bio:
      'Johanna älskar att skapa magiska högläsningsstunder och bygger små läshörnor i klassrummet. Hennes klass planterar egna kryddor som sedan används i hem- och konsumentkunskapen.'
  },
  {
    name: 'Sadek Khalil',
    role: 'Lärare matematik & NO',
    tags: ['Makerkultur', 'Laborationer'],
    bio:
      'Sadek kombinerar laborationer med vardagsnära problemlösning. Han ansvarar för skolans makerspace där eleverna får programmera väderstationer och odlingssensorer.'
  },
  {
    name: 'Emma Blom',
    role: 'Lärare svenska & SO',
    tags: ['Språkutveckling', 'Elevinflytande'],
    bio:
      'Emma arbetar genrepedagogiskt och bjuder in lokala aktörer till temaveckor. Hon leder skolans redaktionsråd där eleverna gör poddar om miljöfrågor och kultur.'
  },
  {
    name: 'Jonatan Öster',
    role: 'Idrottslärare',
    tags: ['Rörelseglädje', 'Friluftsliv'],
    bio:
      'Jonatan ser till att hela skolan rör på sig varje dag. Han arrangerar “grön rast” med hinderbanor, dans och lugna yogastunder på gräsmattan.'
  },
  {
    name: 'Anna-Lena Persson',
    role: 'Speciallärare',
    tags: ['Studieteknik', 'Tillgängliga lärmiljöer'],
    bio:
      'Anna-Lena arbetar tillsammans med arbetslagen för att skapa tydliga strukturer och smarta stödverktyg. Hon håller också workshops för vårdnadshavare om läxhjälp hemma.'
  },
  {
    name: 'María González',
    role: 'Lärare moderna språk',
    tags: ['Språkglädje', 'Internationella samarbeten'],
    bio:
      'María leder skolans språkbytardagar där eleverna tränar spanska, franska och tyska genom kreativa stationer. Hennes klassrumsdörr är täckt av vykort från vänskolor i Europa.'
  }
];

export const supportTeam: Teacher[] = [
  {
    name: 'Oskar Lind',
    role: 'Skolkurator',
    tags: ['Trygghet', 'Elevdemokrati'],
    bio:
      'Oskar har drop-in-fika i elevcaféet varje tisdag och håller i skolans samtalskort där eleverna får påverka allt från miljömål till rastaktiviteter.'
  },
  {
    name: 'Frida Chen',
    role: 'Skolsköterska',
    tags: ['Hälsocoach', 'Hållbar livsstil'],
    bio:
      'Frida driver “Grön energi”-kampanjen där eleverna testar pulsbrädor, smoothie-cyklar och energisnåla mellanmål. Hon syns ofta i skolkökets odlingstorn tillsammans med elevrådet.'
  },
  {
    name: 'Mohamed Ali',
    role: 'Studie- och yrkesvägledare',
    tags: ['Framtidsdrömmar', 'Praktikplatser'],
    bio:
      'Mohamed kopplar samman elever med lokala företag och universitet. Han arrangerar framtidsmässor där eleverna presenterar sina hållbarhetsidéer för Örebros näringsliv.'
  }
];

export const allTeachers: Teacher[] = [...leadership, ...teachingTeams, ...supportTeam];

export const featuredTeachers: Teacher[] = [
  leadership[0],
  teachingTeams[0],
  teachingTeams[1],
  supportTeam[0]
];
