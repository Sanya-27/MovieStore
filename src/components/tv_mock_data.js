const MOCK_TV_DATA = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
      genre_ids: [10765, 18, 10759],
      id: 94997,
      origin_country: ["US"],
      original_language: "en",
      original_name: "House of the Dragon",
      overview:
        "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
      popularity: 4217.729,
      poster_path: "/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",
      first_air_date: "2022-08-21",
      name: "House of the Dragon",
      vote_average: 8.413,
      vote_count: 4493,
    },
    {
      adult: false,
      backdrop_path: "/tuMZKK47l6l42lql9fC6PV6S06M.jpg",
      genre_ids: [80, 18, 9648],
      id: 4057,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Criminal Minds",
      overview:
        "An elite team of FBI profilers analyze the country's most twisted criminal minds, anticipating their next moves before they strike again. The Behavioral Analysis Unit's most experienced agent is David Rossi, a founding member of the BAU who returns to help the team solve new cases.",
      popularity: 3905.396,
      poster_path: "/wLMQebhTApmn4F6Fzg6FovdwVvL.jpg",
      first_air_date: "2005-09-22",
      name: "Criminal Minds",
      vote_average: 8.315,
      vote_count: 3639,
    },
    {
      adult: false,
      backdrop_path: "/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
      genre_ids: [10751, 16, 35],
      id: 456,
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Simpsons",
      overview:
        "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      popularity: 3547.722,
      poster_path: "/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
      first_air_date: "1989-12-17",
      name: "The Simpsons",
      vote_average: 8,
      vote_count: 9700,
    },
    {
      adult: false,
      backdrop_path: "/AqhMVAeGQNtBQbD2HJf2m2KrrUX.jpg",
      genre_ids: [10766, 18],
      id: 4275,
      origin_country: ["AU"],
      original_language: "en",
      original_name: "Prisoner: Cell Block H",
      overview:
        "Prisoner is an Australian soap opera that is set in the Wentworth Detention Centre, a fictional women's prison.",
      popularity: 2157.378,
      poster_path: "/9OSK44nb6ZZkMxkX6SLeQszVFke.jpg",
      first_air_date: "1979-02-27",
      name: "Prisoner: Cell Block H",
      vote_average: 7.5,
      vote_count: 27,
    },
    {
      adult: false,
      backdrop_path: "/euuK8owCrdiz0HMj8iVhhquPhDv.jpg",
      genre_ids: [80, 18, 10759],
      id: 4614,
      origin_country: ["US"],
      original_language: "en",
      original_name: "NCIS",
      overview:
        "From murder and espionage to terrorism and stolen submarines, a team of special agents investigates any crime that has a shred of evidence connected to Navy and Marine Corps personnel, regardless of rank or position.",
      popularity: 4570.689,
      poster_path: "/2exOHePjOTquUsbThPGhuEjYTyA.jpg",
      first_air_date: "2003-09-23",
      name: "NCIS",
      vote_average: 7.621,
      vote_count: 2209,
    },
    {
      adult: false,
      backdrop_path: "/w7oNyGaZ8Tz9LnAr0nf6dvKC968.jpg",
      genre_ids: [10764],
      id: 6390,
      origin_country: ["GB"],
      original_language: "en",
      original_name: "Escape to the Country",
      overview:
        "The property show that helps prospective buyers find their dream home in the country.",
      popularity: 2385.158,
      poster_path: "/ykSfW3rU7Th0VvrgB85nHvQZCAN.jpg",
      first_air_date: "2002-10-14",
      name: "Escape to the Country",
      vote_average: 4.864,
      vote_count: 22,
    },
    {
      adult: false,
      backdrop_path: "/mZCq3ldk7hUIyDvfZIOvTrxPWYS.jpg",
      genre_ids: [10764],
      id: 209374,
      origin_country: ["US"],
      original_language: "es",
      original_name: "Top Chef VIP",
      overview: "",
      popularity: 3342.429,
      poster_path: "/6Gy1ReRZ9sK9g8TPXZGz7CcQvrV.jpg",
      first_air_date: "2022-08-09",
      name: "Top Chef VIP",
      vote_average: 5.444,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: "/6MWmIGqZpyPO5fjBFII5gmBYsFX.jpg",
      genre_ids: [99],
      id: 2394,
      origin_country: ["US"],
      original_language: "en",
      original_name: "This Old House",
      overview:
        "TV's original home-improvement show, following one whole-house renovation over several episodes.",
      popularity: 1910.162,
      poster_path: "/ecAOX4esywAXLF5I4X2gaTmhmAG.jpg",
      first_air_date: "1979-01-01",
      name: "This Old House",
      vote_average: 5.15,
      vote_count: 30,
    },
    {
      adult: false,
      backdrop_path: "/jbTqU6BJMufoMnPSlO4ThrcXs3Y.jpg",
      genre_ids: [16, 35],
      id: 1434,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Family Guy",
      overview:
        "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
      popularity: 3337.024,
      poster_path: "/y0HUz4eUNUe3TeEd8fQWYazPaC7.jpg",
      first_air_date: "1999-01-31",
      name: "Family Guy",
      vote_average: 7.345,
      vote_count: 4247,
    },
    {
      adult: false,
      backdrop_path: "/p6OBqwbQTTxv7xdvjueHVZ8gLK5.jpg",
      genre_ids: [10764],
      id: 2637,
      origin_country: ["GB"],
      original_language: "en",
      original_name: "Come Dine with Me",
      overview:
        'Amateur chefs compete against each other by hosting a dinner party for the other contestants. Each competitor then rates the host\'s performance with the winner winning a £1,000 cash prize. An element of comedy is added to the show through comedian Dave Lamb, who provides a dry and "bitingly sarcastic" narration.',
      popularity: 1854.027,
      poster_path: "/enFfviWZwnIKn9DhyMa7cXqKx6Q.jpg",
      first_air_date: "2005-01-10",
      name: "Come Dine with Me",
      vote_average: 4.8,
      vote_count: 29,
    },
    {
      adult: false,
      backdrop_path: "/hib8MpBPU7GdluS38htXCF4uw0c.jpg",
      genre_ids: [80, 18, 9648],
      id: 2734,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Law & Order: Special Victims Unit",
      overview:
        "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
      popularity: 2243.034,
      poster_path: "/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
      first_air_date: "1999-09-20",
      name: "Law & Order: Special Victims Unit",
      vote_average: 7.914,
      vote_count: 3745,
    },
    {
      adult: false,
      backdrop_path: "/7MscZ0FGf4bNP0pSIhQn3hz8GXl.jpg",
      genre_ids: [99],
      id: 3562,
      origin_country: ["US"],
      original_language: "en",
      original_name: "NOVA",
      overview:
        "PBS' premier science series helps viewers of all ages explore the science behind the headlines. Along the way, NOVA demystifies science and technology, and highlights the people involved in scientific pursuits.",
      popularity: 3844.502,
      poster_path: "/giUBXYnDAaJgNqA6iE3BMVE2EHp.jpg",
      first_air_date: "1974-03-03",
      name: "NOVA",
      vote_average: 6.843,
      vote_count: 108,
    },
    {
      adult: false,
      backdrop_path: "/5UNcEz7Lc3OGilpPn1Tb9cd1xsc.jpg",
      genre_ids: [35, 10767],
      id: 1220,
      origin_country: ["GB"],
      original_language: "en",
      original_name: "The Graham Norton Show",
      overview:
        "Each week celebrity guests join Irish comedian Graham Norton to discuss what's being going on around the world that week. The guests poke fun and share their opinions on the main news stories. Graham is often joined by a band or artist to play the show out.",
      popularity: 1609.862,
      poster_path: "/vrbqaBXB8AALynQzpWz6JdCPEJS.jpg",
      first_air_date: "2007-02-22",
      name: "The Graham Norton Show",
      vote_average: 7.143,
      vote_count: 245,
    },
    {
      adult: false,
      backdrop_path: "/nmg2lY4QuyXQrAnrC2lRblK5rT6.jpg",
      genre_ids: [18],
      id: 1416,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Grey's Anatomy",
      overview:
        "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
      popularity: 1939.882,
      poster_path: "/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg",
      first_air_date: "2005-03-27",
      name: "Grey's Anatomy",
      vote_average: 8.231,
      vote_count: 10083,
    },
    {
      adult: false,
      backdrop_path: "/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
      genre_ids: [10765, 18, 10759],
      id: 1399,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Game of Thrones",
      overview:
        "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      popularity: 1852.682,
      poster_path: "/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
      first_air_date: "2011-04-17",
      name: "Game of Thrones",
      vote_average: 8.453,
      vote_count: 23486,
    },
    {
      adult: false,
      backdrop_path: "/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg",
      genre_ids: [10759, 18, 35],
      id: 77169,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Cobra Kai",
      overview:
        "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.",
      popularity: 2050.435,
      poster_path: "/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg",
      first_air_date: "2018-05-02",
      name: "Cobra Kai",
      vote_average: 8.218,
      vote_count: 6044,
    },
    {
      adult: false,
      backdrop_path: "/4bzSEBjVb3QwPaJ39Rp2gmH9Bug.jpg",
      genre_ids: [35],
      id: 3690,
      origin_country: ["US"],
      original_language: "en",
      original_name: "House of Payne",
      overview:
        "The show revolved around a multi-generational family living under one roof in Atlanta led by patriarch Curtis Payne and his wife Ella.",
      popularity: 1458.76,
      poster_path: "/2NdUdJnZnwI6skvm6OXWrK2D42U.jpg",
      first_air_date: "2007-06-06",
      name: "House of Payne",
      vote_average: 7.6,
      vote_count: 48,
    },
    {
      adult: false,
      backdrop_path: "/pPUtOmorFMI2q5OF77r9GDcZTkX.jpg",
      genre_ids: [10764],
      id: 30957,
      origin_country: ["GB", "US"],
      original_language: "en",
      original_name: "The Amazing Race",
      overview:
        "This reality competition sees teams embark on a trek around the world to amazing destinations where they must compete in a series of challenges, some mental and some physical. Only when the tasks are completed will they learn of their next location. Teams who are the farthest behind will gradually be eliminated as the contest progresses, with the first team to arrive at the final destination winning the race and the $1 million prize.",
      popularity: 1457.146,
      poster_path: "/x1jq0atcQg6UkaZpco0kFL6QHuM.jpg",
      first_air_date: "2001-09-05",
      name: "The Amazing Race",
      vote_average: 6.863,
      vote_count: 135,
    },
    {
      adult: false,
      backdrop_path: "/i8iqYtAy9qcO5RSrA1f6fY1n6SN.jpg",
      genre_ids: [10766],
      id: 235484,
      origin_country: ["ZA"],
      original_language: "af",
      original_name: "Suidooster",
      overview:
        "Suidooster is a South African television soap opera produced by Suidooster Films which revolves around a matriarch, her family, friends and the people of Suidooster, a small shopping and business centre in the fictional Cape Town suburb of Ruiterbosch.",
      popularity: 1443.36,
      poster_path: "/naCgSiacvV685kait6fBvhVhdce.jpg",
      first_air_date: "2015-11-16",
      name: "Suidooster",
      vote_average: 7.588,
      vote_count: 17,
    },
    {
      adult: false,
      backdrop_path: "/2Bkqjc9tNWo3KLr1aRYyJ7vMQtM.jpg",
      genre_ids: [10764],
      id: 235493,
      origin_country: ["NL"],
      original_language: "nl",
      original_name: "De Bondgenoten",
      overview: "",
      popularity: 3220.161,
      poster_path: "/wsipinibYxrZhpkQ6MKxIMgL0hv.jpg",
      first_air_date: "2023-10-22",
      name: "De Bondgenoten",
      vote_average: 6.778,
      vote_count: 18,
    },
  ],
  total_pages: 8827,
  total_results: 176532,
};

module.exports = MOCK_TV_DATA;
