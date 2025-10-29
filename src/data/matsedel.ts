export type MenuDay = {
  day: string;
  meals: string[];
  highlight: string;
};

export type MenuWeek = {
  weekNumber: number;
  startDate: string;
  theme: string;
  fact: string;
  days: MenuDay[];
};

export const menuWeeks: MenuWeek[] = [
  {
    weekNumber: 49,
    startDate: '2024-12-02',
    theme: 'Vinterns grönskott',
    fact: 'Veckans råvarufokus är vintermorötter från Närke – fyllda med beta-karoten som stärker immunförsvaret.',
    days: [
      {
        day: 'Måndag',
        meals: [
          'Morots- och linssoppa toppad med rostad palsternacka',
          'Rostad blomkål med örtdressing och hirs',
          'Rågbröd från lokalt bageri med färskost'
        ],
        highlight: 'Soppan mixas med egen pressad havregrädde för extra krämighet.'
      },
      {
        day: 'Tisdag',
        meals: [
          'Ugnsbakad sej med dill- och citronsås, potatisstomp',
          'Ärtfalafel med krämig vitlöksyoghurt och kornotto',
          'Rödbetssallad med äpple och pumpakärnor'
        ],
        highlight: 'Sejen är MSC-märkt och levereras kyld samma morgon från västkusten.'
      },
      {
        day: 'Onsdag',
        meals: [
          'Viltfärsbiffar med lingonsky och rostad spetskål',
          'Svamprisotto med pärlgryn och krispiga ärtskott',
          'Säsongens fruktfat med apelsin och päron'
        ],
        highlight: 'Onsdagar bjuder på smakresor – idag med fokus på svenska skogar.'
      },
      {
        day: 'Torsdag',
        meals: [
          'Kikärtsgryta med saffran, tomat och spenat',
          'Potatisbullar med lingon och rårörda morötter',
          'Smoothie på havre, mango och ingefära'
        ],
        highlight: 'Grytan toppas med skolans egenodlade basilika och koriander.'
      },
      {
        day: 'Fredag',
        meals: [
          'Tacobuffé med långkokt bönchili och picklad rödlök',
          'Majs- och ostgratinerad blomkål med salsa verde',
          'Chiapudding med kanelrostade äpplen'
        ],
        highlight: 'Fredagens buffé avslutas med matsvinnsutmaning och musik från elevens spellista.'
      }
    ]
  },
  {
    weekNumber: 50,
    startDate: '2024-12-09',
    theme: 'Smaker från växthuset',
    fact: 'Eleverna har skördat 12 kilo grönkål i skolans växthus som används i veckans rätter.',
    days: [
      {
        day: 'Måndag',
        meals: [
          'Grönkålspaj med lagrad ost och rotfrukter',
          'Indisk linsgryta med kokos, naan och mynta',
          'Äpple och kanelrostade solrosfrön'
        ],
        highlight: 'Pajen bakas på fullkornsdinkel för långvarig energi.'
      },
      {
        day: 'Tisdag',
        meals: [
          'Kycklinggryta med paprikasås och bulgur',
          'Bakad sötpotatis med chimichurri och svarta bönor',
          'Citrussallad med granatäpple'
        ],
        highlight: 'Chimichurrin hackas av elevköket “Smakpatrullen”.'
      },
      {
        day: 'Onsdag',
        meals: [
          'Fiskgratäng med örttäcke och ärtmos',
          'Quinoabiffar med rödbeta och pepparrotskräm',
          'Morotsstavar med hummus'
        ],
        highlight: 'Fiskgratängen gratineras med örtmix från skolans hydroponiska odling.'
      },
      {
        day: 'Torsdag',
        meals: [
          'Bondomelett med potatis, ost och picklad lök',
          'Asiatisk nudelsallad med tofu och sesamdressing',
          'Fruktsallad på kiwi och apelsin'
        ],
        highlight: 'Sesamdressingen vispas av elever på hem- och konsumentkunskapen.'
      },
      {
        day: 'Fredag',
        meals: [
          'Fredagsfisk med remouladsås och råkostbuffé',
          'Vegansk lasagne med grönkål och ricotta på havre',
          'Bärsmoothie med havregryn'
        ],
        highlight: 'Lasagnen är veckans “Grön stjärna” med 70% mindre klimatavtryck.'
      }
    ]
  },
  {
    weekNumber: 51,
    startDate: '2024-12-16',
    theme: 'Vintervärme & kryddor',
    fact: 'Matsalen doftar kanel och kardemumma – kryddor som värmer och sätter fart på blodcirkulationen.',
    days: [
      {
        day: 'Måndag',
        meals: [
          'Marockansk gryta med kikärtor, aprikos och kanel',
          'Bakad rotselleri med kryddrostade linser',
          'Fullkornsbulgur och mynta'
        ],
        highlight: 'Grytan serveras med yoghurt smaksatt med skolans egenodlade citronmeliss.'
      },
      {
        day: 'Tisdag',
        meals: [
          'Tomtegryta på kalkon med apelsin och rosmarin',
          'Svartkålsdolmar med svamp och vitlök',
          'Apelsin- och rödkålsslaw'
        ],
        highlight: 'Rödkålen masseras med äppelcidervinäger för extra krisp.'
      },
      {
        day: 'Onsdag',
        meals: [
          'Laxsoppa med fänkål och saffran',
          'Rostad blomkålssoppa med hasselnötter',
          'Hembakat rågbröd med smör'
        ],
        highlight: 'Soppan serveras med nybakat rågbröd från skolans bageri.'
      },
      {
        day: 'Torsdag',
        meals: [
          'Kryddiga köttbullar med potatismos och lingon',
          'Grönkålsbiffar med brynt smörsås på växtbasat smör',
          'Äpple och pepparkaksmüsli'
        ],
        highlight: 'Pepparkaksmüslin rostas av hemkunskapsprofilen.'
      },
      {
        day: 'Fredag',
        meals: [
          'Julig tacobowl med rödkål och lingonpicklad gurka',
          'Vegan chili sin carne med kakao och kanel',
          'Clementiner och nötfri knäck'
        ],
        highlight: 'Fredagens tacobowl toppas med elevodlad koriander.'
      }
    ]
  },
  {
    weekNumber: 2,
    startDate: '2025-01-06',
    theme: 'Nystart med energi',
    fact: 'Vi startar vårterminen med proteinrika baljväxter som ger långsam energi och pigga hjärnor.',
    days: [
      {
        day: 'Måndag',
        meals: [
          'Vegansk bolognese på gröna linser och fullkornspasta',
          'Rotsaksgratäng med timjan och solrosfrön',
          'Rödbetshummus och krispiga råkoststavar'
        ],
        highlight: 'Linserna kokas i egen buljong med svenska örter för extra smak.'
      },
      {
        day: 'Tisdag',
        meals: [
          'Ugnsbakad torsk med örttäcke och citron',
          'Quornfärs med ingefära, lime och jasminris',
          'Broccolisallad med solroskärnor'
        ],
        highlight: 'Torsken fiskas hållbart i Barents hav och levereras av lokal grossist.'
      },
      {
        day: 'Onsdag',
        meals: [
          'Libanesisk gryta med aubergine, tomat och kikärtor',
          'Bulgursallad med granatäpple och mynta',
          'Havreyoghurt med blåbär'
        ],
        highlight: 'Onsdagens gryta kryddas med skolans egenodlade persilja.'
      },
      {
        day: 'Torsdag',
        meals: [
          'Klassisk ärtsoppa och pannkakor med hemkokt sylt',
          'Rostad blomkål med citronricotta och örtsallad',
          'Blodapelsin och fullkornsbröd'
        ],
        highlight: 'Ärtsoppan serveras med nybakat rågbröd och ekologisk senap.'
      },
      {
        day: 'Fredag',
        meals: [
          'Asiatisk street food-buffé med kycklingspett och nudlar',
          'Grillad tofu med sesam och lime',
          'Fruktsallad på mango och kiwi'
        ],
        highlight: 'Fredagens buffé toppas med kimchi som eleverna fermenterat själva.'
      }
    ]
  }
];

export const parseDate = (value: string): Date => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
};

export const isDateInWeek = (week: MenuWeek, date: Date): boolean => {
  const start = parseDate(week.startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return target >= start && target < end;
};

export const sortWeeks = (weeks: MenuWeek[]): MenuWeek[] =>
  [...weeks].sort((a, b) => parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime());

export const findCurrentWeek = (weeks: MenuWeek[], referenceDate = new Date()): MenuWeek => {
  const sorted = sortWeeks(weeks);
  const current = sorted.find((week) => isDateInWeek(week, referenceDate));
  if (current) {
    return current;
  }

  const upcoming = sorted.find((week) => parseDate(week.startDate) > referenceDate);
  return upcoming ?? sorted[sorted.length - 1];
};
