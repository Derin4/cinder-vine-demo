// Fictitious data for the Cinder & Vine demo.

export const menu = [
  {
    category: "To Start",
    items: [
      {
        name: "Charred Octopus",
        price: 19,
        desc: "Smoked paprika, fingerling potato, salsa verde, a squeeze of lemon at the table.",
        tones: ["#5C534A", "#1A1714"],
        tag: "House favourite",
      },
      {
        name: "Burrata & Fire-Roasted Tomato",
        price: 16,
        desc: "House burrata, blistered cherry tomatoes, basil oil, sourdough from the wood oven.",
        tones: ["#C89B3C", "#3B1F2B"],
        tag: "Vegetarian",
      },
      {
        name: "Beef Tartare",
        price: 21,
        desc: "Hand-cut striploin, capers, shallot, egg yolk, rye crisp.",
        tones: ["#3B1F2B", "#1A1714"],
      },
    ],
  },
  {
    category: "From the Fire",
    items: [
      {
        name: "Dry-Aged Ribeye",
        price: 48,
        desc: "28-day dry-aged, bone-in, finished over embers, served with bone marrow butter.",
        tones: ["#1A1714", "#5C534A"],
        tag: "House favourite",
      },
      {
        name: "Whole Branzino",
        price: 36,
        desc: "Grilled whole, Meyer lemon, fennel, chili oil, deboned tableside.",
        tones: ["#5C534A", "#C89B3C"],
        tag: "Tableside",
      },
      {
        name: "Roasted Half Chicken",
        price: 29,
        desc: "Brined 24 hours, roasted over the open fire, jus, charred lemon.",
        tones: ["#C89B3C", "#5C534A"],
      },
    ],
  },
  {
    category: "To Finish",
    items: [
      {
        name: "Basque Cheesecake",
        price: 12,
        desc: "Deliberately burnt top, vanilla bean, a spoon of sour cherry.",
        tones: ["#3B1F2B", "#C89B3C"],
        tag: "Vegetarian",
      },
      {
        name: "Dark Chocolate Torte",
        price: 13,
        desc: "70% cacao, olive oil, flaked sea salt, espresso reduction.",
        tones: ["#1A1714", "#3B1F2B"],
        tag: "Vegetarian",
      },
    ],
  },
];

export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Thursday", time: "5:30 PM – 10:00 PM" },
  { day: "Friday – Saturday", time: "5:30 PM – 11:00 PM" },
  { day: "Sunday", time: "5:00 PM – 9:00 PM" },
];

export const timeSlots = [
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

// Fictitious table availability per time slot, out of 8 tables total.
export const availability = {
  "5:30 PM": 6,
  "6:00 PM": 5,
  "6:30 PM": 3,
  "7:00 PM": 1,
  "7:30 PM": 0,
  "8:00 PM": 2,
  "8:30 PM": 4,
  "9:00 PM": 6,
};

/* ------------------------------------------------------------------ */
/* Homepage content (all fictitious)                                   */
/* ------------------------------------------------------------------ */

// Story statement. Strings are words; {chip} objects render a small
// inline picture between words.
export const STORY = [
  "We built the dining room around the",
  { chip: ["#C89B3C", "#3B1F2B"] },
  "hearth, not the other way around. Every table can see the",
  { chip: ["#E2672B", "#1A1714"] },
  "fire, and most nights it does more of the cooking than anyone standing near it.",
];

export const WEEK = [
  {
    day: "Tuesday",
    title: "Cellar Night",
    pic: "week-cellar",
    body: "Every bottle on the small-producer list is poured at retail price, and the sommelier opens something strange for the table.",
    meta: "Bottles at retail",
    tones: ["#3B1F2B", "#1A1714"],
  },
  {
    day: "Wednesday",
    title: "The Whole Fish",
    pic: "week-fish",
    body: "One catch of the day, finished over embers and deboned at the table, for two, with everything that goes around it.",
    meta: "$64 for two",
    tones: ["#5C534A", "#C89B3C"],
  },
  {
    day: "Thursday",
    title: "Hearth Social",
    pic: "week-social",
    body: "Bar seats only, 5:30 to 7. Snacks off the coals, short pours, and a front-row view of the fire.",
    meta: "Walk-ins welcome",
    tones: ["#E2672B", "#3B1F2B"],
  },
  {
    day: "Fri & Sat",
    title: "The Long Table",
    pic: "week-longtable",
    body: "A shared, family-style supper at the twelve-seat oak table in front of the hearth. One seating, booked weeks out.",
    meta: "$72 per guest",
    tones: ["#C89B3C", "#1A1714"],
  },
  {
    day: "Sunday",
    title: "Sunday Roast",
    pic: "week-roast",
    body: "A whole bird or a rib roast, carved at the table with every side we can fit on it. The fire is lit by four.",
    meta: "From 5:00 PM",
    tones: ["#1A1714", "#E2672B"],
  },
];

export const ROOMS = [
  {
    kind: "hearth",
    title: "The Hearth",
    caption: "Live oak and ember, in the middle of the room.",
    tones: ["#3B1F2B", "#14100E"],
  },
  {
    kind: "table",
    title: "The Long Table",
    caption: "Twelve seats, one board, every Friday and Saturday.",
    tones: ["#2A211B", "#14100E"],
  },
  {
    kind: "cellar",
    title: "The Cellar Wall",
    caption: "Small-producer bottles, floor to ceiling.",
    tones: ["#3B1F2B", "#1A1714"],
  },
  {
    kind: "bar",
    title: "The Bar",
    caption: "Six stools, a view of the fire, no reservation needed.",
    tones: ["#4A3A2A", "#14100E"],
  },
  {
    kind: "patio",
    title: "The Courtyard",
    caption: "String lights and a quiet corner, May through September.",
    tones: ["#1F2A2A", "#14100E"],
  },
];

export const QUOTES = [
  {
    text: "We came for the ribeye and stayed for the fire. You can feel the heat from table nine, and nobody minds.",
    who: "Marguerite L.",
    note: "Anniversary dinner",
  },
  {
    text: "The branzino arrived whole, was boned in front of us in under a minute, and I am still thinking about the fennel.",
    who: "Tomás R.",
    note: "Wednesday regular",
  },
  {
    text: "I did not know a single name on the wine list. Our server picked four pours and every one was a revelation.",
    who: "Priya S.",
    note: "First visit",
  },
  {
    text: "Burnt cheesecake, two spoons, no regrets.",
    who: "Callum B.",
    note: "Dessert-first guest",
  },
  {
    text: "The only restaurant where I have watched a table of twelve go silent when the bird came out.",
    who: "Odalys M.",
    note: "Sunday Roast",
  },
];

export const FAQS = [
  {
    q: "Do you take walk-ins?",
    a: "Always. The bar and four hearth-side stools are held for walk-ins every night. Friday and Saturday fill fast, so come early or book a table.",
  },
  {
    q: "How long do you hold a reservation?",
    a: "We hold every table for fifteen minutes past the booked time. If you are running late, call us and we will do our best to keep it.",
  },
  {
    q: "Can you cater to dietary needs?",
    a: "Yes. Vegetarian, gluten-free and nut-free adjustments are easy if we know ahead of time, so mention them when you book. Everything is cooked on one shared hearth, so we cannot promise a smoke-free plate.",
  },
  {
    q: "What about large groups?",
    a: "Parties of seven or more, please call us directly. The Long Table seats twelve and is the best seat in the house for a group.",
  },
  {
    q: "Is there a dress code?",
    a: "None. Come as you are. The dining room runs warm, so dress in layers.",
  },
  {
    q: "Can I bring my own bottle?",
    a: "On Cellar Night, no. Otherwise, corkage is $35 per bottle, one bottle per table of four.",
  },
];

export const GALLERY_COPY = {
  eyebrow: "Inside",
  title: "Five rooms, one fire.",
};
