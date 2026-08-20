export const BRAND = "The Architect Consultium";
export const PERSON = "Olabanji Afolabi";
export const TAGLINE = "The Leadership Architect";

/* His own words, taken from thelighthouseglobal.org/leadership */
export const MANDATE = "to build altars, raise leaders, and architect revival in every space";

export const bio = [
  "Pastor Olabanji Afolabi is a pastor, revival architect, transformational strategist and leadership coach, with a mandate to build altars, raise leaders, and architect revival in every space.",
  "He teaches with clarity and power, bridging Scripture with everyday life and equipping believers to walk boldly in purpose.",
  "His calling centres on helping individuals and communities discover God's design, grow in spiritual maturity, and become catalysts for transformation across every sphere of influence.",
];


export type Lesson = { n: string; title: string; len: string; free: boolean };

export type Programme = {
  slug: string;
  title: string;
  format: string;
  who: string;
  blurb: string;
  img: string;
  alt: string;
  lessons: Lesson[];
};

/* Programme names taken from the March proposal, not invented. */
export const programmes: Programme[] = [
  {
    slug: "one-to-one-mentorship",
    title: "1:1 Mentorship",
    format: "Private, twelve sessions",
    who: "For leaders carrying something they cannot put down",
    blurb:
      "Direct work, one to one. We meet on your schedule and go where you actually are, not where a curriculum says you should be.",
    img: "/img/speak_a.jpg",
    alt: "A leader speaking with an audience",
    lessons: [
      { n: "01", title: "Where you actually are", len: "Session", free: true },
      {
        n: "02",
        title: "The weight you are carrying",
        len: "Session",
        free: false,
      },
      {
        n: "03",
        title: "Deciding without full information",
        len: "Session",
        free: false,
      },
      { n: "04", title: "Building your bench", len: "Session", free: false },
    ],
  },
  {
    slug: "group-coaching",
    title: "Group Coaching",
    format: "Cohort, eight weeks",
    who: "For teams and peer groups learning together",
    blurb:
      "A small room of leaders working the same material at the same time. The discussion is half the value.",
    img: "/img/speak_b.jpg",
    alt: "A cohort seated in discussion",
    lessons: [
      { n: "01", title: "Character before platform", len: "42 min", free: true },
      {
        n: "02",
        title: "Building people who build others",
        len: "38 min",
        free: false,
      },
      {
        n: "03",
        title: "When the room is watching you",
        len: "35 min",
        free: false,
      },
    ],
  },
  {
    slug: "purpose-academy",
    title: "Purpose Academy",
    format: "Self paced, on demand",
    who: "For anyone starting, at their own speed",
    blurb:
      "The full teaching, recorded and structured. Start when you want, finish when you finish, come back to it whenever you need it.",
    img: "/img/pba.jpg",
    alt: "Pastor Olabanji Afolabi",
    lessons: [
      {
        n: "01",
        title: "The foundation you cannot see",
        len: "18 min",
        free: true,
      },
      { n: "02", title: "Authority is not volume", len: "24 min", free: false },
      {
        n: "03",
        title: "Carrying weight without breaking",
        len: "26 min",
        free: false,
      },
      { n: "04", title: "The tired leader", len: "19 min", free: false },
    ],
  },
];

export const speaking = {
  topics: [
    "Leadership and character",
    "Building people who build others",
    "Purpose and calling",
    "Leading under pressure",
  ],
  audiences: [
    "Churches and ministry teams",
    "Corporate leadership offsites",
    "Conferences and conventions",
    "Universities and youth programmes",
  ],
};

export const books = [
  {
    title: "The Architecture of Leadership",
    note: "Placeholder cover and title. Your real book goes here.",
    price: "CAD 24",
    img: "/img/book_a.jpg",
    alt: "An open book on a desk",
  },
  {
    title: "Building People Who Build Others",
    note: "Placeholder cover and title. Your real book goes here.",
    price: "CAD 21",
    img: "/img/book_b.jpg",
    alt: "A closed book beside a notebook",
  },
];

export const resources = [
  { title: "The leader's weekly review", kind: "Free, email required" },
  { title: "Purpose Academy workbook", kind: "CAD 12" },
  { title: "Sermon and talk outlines", kind: "Members only" },
];

export const plans = [
  {
    name: "Six months",
    price: "CAD 90",
    note: "Full access to every programme and every article for six months.",
  },
  {
    name: "One year",
    price: "CAD 150",
    note: "Everything above, plus first access to new material as it is released.",
    best: true,
  },
];

export const articles = [
  {
    title: "The leader nobody is discipling",
    date: "August 2026",
    mins: "6 min read",
    cat: "Character",
  },
  {
    title: "Why your best people leave quietly",
    date: "July 2026",
    mins: "8 min read",
    cat: "Teams",
  },
  {
    title: "Authority is not volume",
    date: "June 2026",
    mins: "5 min read",
    cat: "Character",
  },
];
