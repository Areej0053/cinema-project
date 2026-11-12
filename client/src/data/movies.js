
const movies = [
  {
    id: 1,
    title: "John Wick",
    genre: "Action",
    releaseYear: 2014,
    rating: 7.4,
    description: "After losing the last connection to his former life, a retired assassin returns to a dangerous underground world of professional killers in a relentless quest for revenge.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
  },
  {
    id: 2,
    title: "The Maze Runner",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 6.8,
    description: "A teenager wakes up in a mysterious maze with no memory of his past. Together with other trapped survivors, he must uncover its secrets and find a way to escape.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/s8K0US4tUEoOrQ1LDh0eppuwGDx.jpg"
  },
  {
    id: 3,
    title: "Don't Breathe",
    genre: "Horror",
    releaseYear: 2016,
    rating: 7.1,
    description: "Three young thieves break into the home of a blind man, expecting an easy robbery. They soon discover that their target is far more dangerous than they imagined.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/dSxHyPZ2nipSfvdft4IhQKjk5eZ.jpg"
  },
  {
    id: 4,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    releaseYear: 2001,
    rating: 7.6,
    description: "An ordinary boy discovers that he is a wizard and begins an extraordinary journey at Hogwarts School of Witchcraft and Wizardry, where friendship, magic, and danger await.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg"
  },
  {
    id: 5,
    title: "The Fast and the Furious",
    genre: "Action",
    releaseYear: 2001,
    rating: 6.8,
    description: "An undercover police officer enters the thrilling world of illegal street racing, where fast cars, dangerous rivalries, loyalty, and unexpected friendships collide.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/gqY0ITBgT7A82poL9jv851qdnIb.jpg"
  },
  {
    id: 6,
    title: "Pirates of the Caribbean",
    genre: "Adventure",
    releaseYear: 2003,
    rating: 8.1,
    description: "Captain Jack Sparrow sets sail on an unforgettable adventure filled with cursed pirates, hidden treasures, supernatural mysteries, and unpredictable battles across the seas.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg"
  },
  {
    id: 7,
    title: "Interstellar",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 8.7,
    description: "As Earth becomes increasingly uninhabitable, a team of astronauts travels beyond our galaxy in search of a new home for humanity, exploring the mysteries of space and time.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg"
  },
  {
    id: 8,
    title: "Me Before You",
    genre: "Romance",
    releaseYear: 2016,
    rating: 7.4,
    description: "An unexpected relationship develops between a cheerful young woman and a wealthy man living with paralysis, transforming their perspectives on love, happiness, and life's difficult choices.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/oo2Q3T8juOYFh2G1YJ3oSMAfUyq.jpg"
  },
  {
    id: 9,
    title: "Mad Max: Fury Road",
    genre: "Action",
    releaseYear: 2015,
    rating: 8.1,
    description: "In a brutal post-apocalyptic wasteland, Max joins a fearless warrior in a high-speed escape from a ruthless ruler, leading to an explosive battle for freedom and survival.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg"
  },
  {
    id: 10,
    title: "Spider-Man",
    genre: "Action",
    releaseYear: 2002,
    rating: 7.4,
    description: "After gaining extraordinary spider-like abilities, Peter Parker must balance his personal life with the responsibility of protecting New York City from dangerous enemies.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg"
  },
  {
    id: 11,
    title: "Avatar",
    genre: "Sci-Fi",
    releaseYear: 2009,
    rating: 7.9,
    description: "On the breathtaking alien world of Pandora, a former Marine discovers an extraordinary civilization and faces a life-changing choice between human ambition and protecting a beautiful planet.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg"
  },
  {
    id: 12,
    title: "Zootopia",
    genre: "Animation",
    releaseYear: 2016,
    rating: 8.0,
    description: "In a vibrant city inhabited by animals, an ambitious rabbit police officer teams up with a clever fox to solve a mysterious case and challenge society's stereotypes.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_face/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg"
  },

  // 10 additional movies

  {
    id: 13,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
    description: "A skilled thief who steals secrets from dreams is offered a chance at redemption by performing an almost impossible mission: planting an idea deep within someone's subconscious.",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    id: 14,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    rating: 9.0,
    description: "Batman faces his greatest psychological challenge when the Joker unleashes chaos across Gotham City, forcing the hero to confront difficult choices about justice and sacrifice.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 15,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    rating: 9.3,
    description: "Wrongfully convicted of murder, a banker builds an extraordinary friendship inside Shawshank Prison while holding on to hope, dignity, and his determination to find freedom.",
    poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
  },
  {
    id: 16,
    title: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    rating: 8.7,
    description: "A computer hacker discovers that reality is an elaborate simulation controlled by machines. He joins a rebellion to uncover the truth and fight for humanity's freedom.",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 17,
    title: "Titanic",
    genre: "Romance",
    releaseYear: 1997,
    rating: 7.9,
    description: "A young artist and a wealthy passenger fall in love aboard the legendary Titanic, but their romance faces tragedy when the magnificent ocean liner meets its fate.",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    id: 18,
    title: "Coco",
    genre: "Animation",
    releaseYear: 2017,
    rating: 8.4,
    description: "A young boy who dreams of becoming a musician journeys into the colorful Land of the Dead, where he discovers surprising truths about his family's history and the power of remembrance.",
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
  },
  {
    id: 19,
    title: "Toy Story",
    genre: "Animation",
    releaseYear: 1995,
    rating: 8.3,
    description: "When a new space ranger toy arrives, a cowboy doll fears losing his place as his owner's favorite. Their rivalry becomes an unforgettable adventure about friendship and belonging.",
    poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
  },
  {
    id: 20,
    title: "The Lion King",
    genre: "Animation",
    releaseYear: 1994,
    rating: 8.5,
    description: "After a devastating family tragedy, a young lion prince must overcome guilt and fear, embrace his destiny, and return home to reclaim his rightful place as king.",
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  },
  {
    id: 21,
    title: "Joker",
    genre: "Drama",
    releaseYear: 2019,
    rating: 8.4,
    description: "An isolated aspiring comedian struggles to find acceptance in Gotham City. As his life unravels, he begins a disturbing transformation into one of the city's most notorious figures.",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    id: 22,
    title: "Oppenheimer",
    genre: "Drama",
    releaseYear: 2023,
    rating: 8.3,
    description: "The story of physicist J. Robert Oppenheimer follows his leadership of the Manhattan Project and the profound scientific, political, and moral consequences of creating the atomic bomb.",
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
  },

  // JOHN WICK COLLECTION
  {
    id: 23,
    title: "John Wick: Chapter 2",
    genre: "Action",
    releaseYear: 2017,
    rating: 7.4,
    description: "Legendary assassin John Wick is forced out of retirement once again when an old promise leads him into a dangerous world of international assassins.",
    poster: "https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg"
  },
  {
    id: 24,
    title: "John Wick: Chapter 3 – Parabellum",
    genre: "Action",
    releaseYear: 2019,
    rating: 7.4,
    description: "With a massive bounty on his head, John Wick must fight his way through New York while being hunted by the world's most dangerous assassins.",
    poster: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg"
  },
  {
    id: 25,
    title: "John Wick: Chapter 4",
    genre: "Action",
    releaseYear: 2023,
    rating: 7.7,
    description: "John Wick discovers a path to defeating the High Table, but he must face powerful enemies and deadly challenges across the world to finally earn his freedom.",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
  },

  // THE MAZE RUNNER COLLECTION
  {
    id: 26,
    title: "Maze Runner: The Scorch Trials",
    genre: "Sci-Fi",
    releaseYear: 2015,
    rating: 6.3,
    description: "Thomas and his friends escape the maze only to discover a devastated world filled with terrifying dangers and a mysterious organization hiding the truth.",
    poster: "https://image.tmdb.org/t/p/w500/mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg"
  },
  {
    id: 27,
    title: "Maze Runner: The Death Cure",
    genre: "Sci-Fi",
    releaseYear: 2018,
    rating: 6.3,
    description: "Thomas leads a dangerous mission to rescue his friends and uncover the secrets of WCKD in the final chapter of the Maze Runner trilogy.",
    poster: "https://image.tmdb.org/t/p/w500/2zYfzA3TBwrMC8tfFbpiTLODde0.jpg"
  },

  // HARRY POTTER COLLECTION
  {
    id: 28,
    title: "Harry Potter and the Chamber of Secrets",
    genre: "Fantasy",
    releaseYear: 2002,
    rating: 7.4,
    description: "Harry returns to Hogwarts for his second year, where mysterious attacks and a hidden chamber threaten the students.",
    poster: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
  },
  {
    id: 29,
    title: "Harry Potter and the Prisoner of Azkaban",
    genre: "Fantasy",
    releaseYear: 2004,
    rating: 7.9,
    description: "Harry discovers that a dangerous prisoner has escaped from Azkaban, leading him to uncover surprising secrets about his parents and his past.",
    poster: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg"
  },
  {
    id: 30,
    title: "Harry Potter and the Goblet of Fire",
    genre: "Fantasy",
    releaseYear: 2005,
    rating: 7.7,
    description: "Harry unexpectedly becomes a competitor in the dangerous Triwizard Tournament, where magical challenges lead to a terrifying confrontation.",
    poster: "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg"
  },
  {
    id: 31,
    title: "Harry Potter and the Order of the Phoenix",
    genre: "Fantasy",
    releaseYear: 2007,
    rating: 7.5,
    description: "As the wizarding world refuses to believe that Voldemort has returned, Harry organizes a secret group of students to prepare for the coming battle.",
    poster: "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg"
  },
  {
    id: 32,
    title: "Harry Potter and the Half-Blood Prince",
    genre: "Fantasy",
    releaseYear: 2009,
    rating: 7.6,
    description: "Harry and Dumbledore investigate Voldemort's past while dark forces threaten Hogwarts and important secrets begin to emerge.",
    poster: "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg"
  },
  {
    id: 33,
    title: "Harry Potter and the Deathly Hallows – Part 1",
    genre: "Fantasy",
    releaseYear: 2010,
    rating: 7.7,
    description: "Harry, Ron, and Hermione leave Hogwarts on a dangerous mission to destroy Voldemort's Horcruxes while the wizarding world falls into darkness.",
    poster: "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg"
  },
  {
    id: 34,
    title: "Harry Potter and the Deathly Hallows – Part 2",
    genre: "Fantasy",
    releaseYear: 2011,
    rating: 8.1,
    description: "The magical journey reaches its conclusion as Harry and his friends return to Hogwarts for the final battle against Voldemort.",
    poster: "https://image.tmdb.org/t/p/w500/c54HpQmuwXjHq2C9wmoACjxoom3.jpg"
  },

  // PIRATES OF THE CARIBBEAN COLLECTION
  {
    id: 35,
    title: "Pirates of the Caribbean: Dead Man's Chest",
    genre: "Adventure",
    releaseYear: 2006,
    rating: 7.4,
    description: "Captain Jack Sparrow must escape a deadly debt to Davy Jones while searching for a mysterious chest that holds extraordinary power.",
    poster: "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg"
  },
  {
    id: 36,
    title: "Pirates of the Caribbean: At World's End",
    genre: "Adventure",
    releaseYear: 2007,
    rating: 7.1,
    description: "Will Turner and Elizabeth Swann embark on a dangerous mission to rescue Jack Sparrow as pirates prepare for an epic battle for their freedom.",
    poster: "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg"
  },
  {
    id: 37,
    title: "Pirates of the Caribbean: On Stranger Tides",
    genre: "Adventure",
    releaseYear: 2011,
    rating: 6.6,
    description: "Jack Sparrow searches for the legendary Fountain of Youth while facing Blackbeard, dangerous mermaids, and unexpected enemies.",
    poster: "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg"
  },
  {
    id: 38,
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    genre: "Adventure",
    releaseYear: 2017,
    rating: 6.5,
    description: "Captain Jack Sparrow searches for Poseidon's legendary trident while being pursued by a terrifying crew of ghost sailors.",
    poster: "https://image.tmdb.org/t/p/w500/qwoGfcg6YUS55nUweKGujHE54Wy.jpg"
  },

  // AVATAR COLLECTION
  {
    id: 39,
    title: "Avatar: The Way of Water",
    genre: "Sci-Fi",
    releaseYear: 2022,
    rating: 7.5,
    description: "Jake Sully and Neytiri build a family on Pandora, but a returning human threat forces them to seek refuge with the ocean-dwelling Metkayina clan.",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  },
  {
    id: 40,
    title: "Avatar: Fire and Ash",
    genre: "Sci-Fi",
    releaseYear: 2025,
    rating: 7.0,
    description: "Jake Sully and his family face new challenges on Pandora as they encounter the Ash People and struggle with conflict, loss, and the future of their world.",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  },

  // TOY STORY COLLECTION
  {
    id: 41,
    title: "Toy Story 2",
    genre: "Animation",
    releaseYear: 1999,
    rating: 7.9,
    description: "When Woody is stolen by a toy collector, Buzz Lightyear and the other toys launch a daring rescue mission while Woody discovers his surprising history.",
    poster: "https://image.tmdb.org/t/p/w500/yFWQkz2ynjwsazT6xQiIXEUsyuh.jpg"
  },
  {
    id: 42,
    title: "Toy Story 3",
    genre: "Animation",
    releaseYear: 2010,
    rating: 8.3,
    description: "As Andy prepares to leave for college, Woody, Buzz, and their friends accidentally end up at a daycare center and must find a way back home.",
    poster: "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg"
  },
  {
    id: 43,
    title: "Toy Story 4",
    genre: "Animation",
    releaseYear: 2019,
    rating: 7.7,
    description: "Woody and his friends embark on a road trip with Bonnie and a new toy named Forky, leading Woody to question what it truly means to belong.",
    poster: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg"
  },



];

export default movies;
