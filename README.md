# Cinder & Vine

A demo website for **Cinder & Vine**, a fictional wood-fired restaurant in the Old Mill District.

**Live demo:** https://cinder-vine-demo.derin-obasa.workers.dev/

> Cinder & Vine, its menu, prices, events, reviews and phone number are all fictional. This site was built for the MyClickAid demo gallery and does not represent a real business. Do not use any of the content as real.

## What it shows

- **Dramatic hero** with a glowing hearth backdrop, drifting embers, an arch-shaped picture frame and a reservation bar that straddles the hero edge
- **Scroll-reveal story statement** where the words light up as you scroll, with small inline picture chips between them
- **"The week at the hearth"** panels for the weekly nights (Cellar Night, The Whole Fish, Hearth Social, The Long Table, Sunday Roast)
- **Interactive menu** with three categories and eight dishes, each with price, description and tags (house favourite, vegetarian, tableside)
- **Five-room gallery** (the hearth, the long table, the cellar wall, the bar, the courtyard)
- **Tonight's availability** grid. Each open time slot links to the reservation form with the time already chosen, and full slots are struck through
- **Reservation form** that reads the chosen time from the link
- **Guest quotes** stage, an expandable **FAQ**, count-up numbers and scroll reveal animations
- **About** and **Contact** pages

## Built with

- [Next.js](https://nextjs.org/) (App Router, JavaScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Instrument Serif and Hanken Grotesk via `next/font/google`
- Static export (`output: "export"`), hosted on Cloudflare

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

To build the static site:

```bash
npm run build
```

The output goes to the `out/` folder.

## Project structure

```
app/
  _components/   Header, Footer, HeroArch, HeroReserve, Embers, Flame, Art,
                 Motif, ScrollWords, WeekPanels, FireMenu, MenuNav,
                 RoomGallery, QuoteStage, Faq, ReservationWidget,
                 ReservationFromUrl, CountUp, Reveal
  _lib/          data.js (menu, hours, time slots, availability, weekly
                 nights, rooms, quotes, FAQ), pictures.js (photo paths)
  _styles/       globals.css (theme colours, grain and glow effects)
  about/         About page
  contact/       Contact page
  menu/          Full menu page
  reservations/  Reservation page
  layout.js      Fonts, metadata, header and footer
  page.js        Home page
public/          Photos (cv-*.webp)
```

## Photos

The site works without photos, because every slot shows an illustrated panel until a picture is added. The photos live in `public/` and are listed in `pictures.js`:

| Slot          | File                                                                                                                                                    | Shape                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Hero arch     | `cv-hero.webp`                                                                                                                                          | Portrait, 1200 x 1600 |
| Eight dishes  | `cv-octopus.webp`, `cv-burrata.webp`, `cv-tartare.webp`, `cv-ribeye.webp`, `cv-branzino.webp`, `cv-chicken.webp`, `cv-cheesecake.webp`, `cv-torte.webp` | Portrait, 1000 x 1250 |
| Five rooms    | `cv-room-hearth.webp`, `cv-room-table.webp`, `cv-room-cellar.webp`, `cv-room-bar.webp`, `cv-room-patio.webp`                                            | Portrait, 1100 x 1400 |
| Weekly nights | `cv-week-cellar.webp`, `cv-week-fish.webp`, `cv-week-social.webp`, `cv-week-longtable.webp`, `cv-week-roast.webp`                                       | Portrait              |

To remove a photo, delete its line in `pictures.js` and the illustrated panel returns.

## Editing the content

- **Menu, prices, hours, weekly nights, rooms, quotes and FAQ:** `app/_lib/data.js`
- **Tonight's availability:** the `availability` object in `data.js` (tables free per time slot, out of 8)
- **Photos:** `pictures.js`. A dish photo is matched by the dish name, so rename both together.

## Deployment

The site exports to static files (`out/`) and deploys to Cloudflare Workers with static assets. Connect the GitHub repo, use `npm run build` as the build command, and let Cloudflare serve the `out` directory.

## About MyClickAid

MyClickAid builds websites for small businesses. This project is one of a gallery of fictional demo sites that show what we can do for different industries.
