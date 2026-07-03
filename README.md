# Artisan Coffee

A premium coffee shop website built with Next.js, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Features

- Full responsive design
- Sticky transparent navbar with scroll effects
- Dark and light mode toggle
- Smooth scrolling and premium Framer Motion animations
- Warm neutral color palette inspired by luxury brands
- All required sections: Hero, About, Menu, Gallery, Reviews, Hours, Location, Contact, Footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** — App Router
- **React 19**
- **Tailwind CSS 3**
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **next-themes** — Dark/light mode

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Section.tsx
│   ├── About.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Location.tsx
│   ├── Menu.tsx
│   ├── Navbar.tsx
│   ├── OpeningHours.tsx
│   ├── Reviews.tsx
│   └── ThemeProvider.tsx
└── lib/
    ├── motion.ts
    └── utils.ts
```

## Build

```bash
npm run build
npm start
```
