# gavinpinto.ca

My personal website: [gavinpinto.ca](https://gavinpinto.ca)

A one-page site with my work, school and skills, plus a light/dark mode toggle.

## Stack

- [Next.js](https://nextjs.org) (static export)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for the logo animation
- Hosted on GitHub Pages

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing

All of the site's text and links are in [`src/app/site.ts`](src/app/site.ts).

## Deploying

Pushing to `main` builds the site and deploys it to GitHub Pages through [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml).
