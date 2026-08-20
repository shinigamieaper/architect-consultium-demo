export const BRAND = "The Architect Consultium";
export const PERSON = "Olabanji Afolabi";
export const TAGLINE = "The Leadership Architect";

export type Lesson = { n: string; title: string; len: string; free: boolean };
export type Programme = {
  slug: string;
  title: string;
  blurb: string;
  img: string;
  alt: string;
  lessons: Lesson[];
};

export const programmes: Programme[] = [
  {
    slug: "architecture-of-leadership",
    title: "The Architecture of Leadership",
    blurb:
      "Eight sessions on how leaders are built, not born. Structure, character, and the weight a leader carries.",
    img: "/img/speak_a.jpg",
    alt: "A speaker addressing an audience",
    lessons: [
      { n: "01", title: "The foundation you cannot see", len: "18 min", free: true },
      { n: "02", title: "Character before platform", len: "24 min", free: false },
      { n: "03", title: "Building people who build others", len: "21 min", free: false },
      { n: "04", title: "Carrying weight without breaking", len: "26 min", free: false },
    ],
  },
  {
    slug: "leading-under-pressure",
    title: "Leading Under Pressure",
    blurb:
      "Six sessions for the seasons that test you. Decision making, exhaustion, and holding your people steady.",
    img: "/img/speak_b.jpg",
    alt: "A leader speaking to a room",
    lessons: [
      { n: "01", title: "When the room is watching you", len: "16 min", free: true },
      { n: "02", title: "Deciding without full information", len: "22 min", free: false },
      { n: "03", title: "The tired leader", len: "19 min", free: false },
    ],
  },
];

export const books = [
  {
    title: "The Architecture of Leadership",
    note: "The book the programme is built on.",
    price: "CAD 24",
    priceNgn: "NGN 18,000",
    img: "/img/book_a.jpg",
    alt: "An open book on a desk",
  },
  {
    title: "Building People Who Build Others",
    note: "On raising leaders inside your own house.",
    price: "CAD 21",
    priceNgn: "NGN 15,500",
    img: "/img/book_b.jpg",
    alt: "A closed book beside a notebook",
  },
];

export const plans = [
  {
    name: "Six months",
    price: "CAD 90",
    ngn: "NGN 66,000",
    note: "Full access to every programme and every article for six months.",
  },
  {
    name: "One year",
    price: "CAD 150",
    ngn: "NGN 110,000",
    note: "Everything above, plus first access to new material as it is released.",
    best: true,
  },
];

export const articles = [
  { title: "The leader nobody is discipling", date: "August 2026", mins: "6 min read" },
  { title: "Why your best people leave quietly", date: "July 2026", mins: "8 min read" },
  { title: "Authority is not volume", date: "June 2026", mins: "5 min read" },
];
