# DESIGN.md — how the site looks

Sources: Gavin's brand (the GP logo mark, black on white, Geist) and three reference
screenshots (hanzpo.com, tania.dev, Daniel Pu's site). Brand wins on colour and font.
References win on layout and feel.

## Principles

1. Clean, high contrast, mostly text. No big image, no photo, no illustration.
2. One page. The intro and links are visible without scrolling.
3. Light and dark mode, with a toggle. First visit follows the system setting.
4. Monochrome. The logo is black on white, so the site has no accent colour.

## Colour

All colours are CSS variables on `:root`, swapped by `data-theme` on `<html>`.

| Token        | Light     | Dark      | Used for                         |
| ------------ | --------- | --------- | -------------------------------- |
| `--bg`       | `#fbfaf7` | `#171613` | Page background                  |
| `--fg`       | `#171717` | `#ecebe6` | Headings, names, logo            |
| `--body`     | `#3d3b37` | `#c9c6be` | Paragraph text                   |
| `--muted`    | `#6b6861` | `#9f9c94` | Roles, dates, labels             |
| `--line`     | `#e4e1d9` | `#2f2d28` | Hairline dividers                |
| `--hover`    | `#f1efe9` | `#201f1b` | Row and button hover background  |

Contrast: `--fg`, `--body` and `--muted` all pass WCAG AA (4.5:1) on `--bg` in both themes.

## Type

| Role                     | Font                 | Size / line height        | Weight |
| ------------------------ | -------------------- | ------------------------- | ------ |
| Headline                 | Newsreader (serif)   | 44px / 1.1 (36px mobile)  | 400    |
| Intro paragraphs         | Newsreader (serif)   | 20px / 1.5 (18px mobile)  | 400    |
| Section labels           | Newsreader (serif)   | 20px / 1.3                | 400    |
| Row title, body, links   | Geist Sans           | 15px / 1.55               | 500 / 400 |
| Dates                    | Geist Mono           | 12.5px / 1.5              | 400    |

- Serif for the voice (headline, intro, section labels): taken from hanzpo.com and Daniel Pu.
- Geist Sans for the facts: the existing brand font.
- Mono for dates: taken from tania.dev's timeline.
- Headline letter-spacing −0.02em. No uppercase labels.

## Layout

- Max width 1120px, centred. Side padding 24px (20px on mobile).
- **Desktop (1024px and up):** two columns, 5 / 7 split, 80px gap. The left column (logo, headline, intro, links) is sticky and vertically centred in the viewport. The right column scrolls: Now, Work, School, Skills. This is the hanzpo.com layout.
- **Below 1024px:** one column. Intro first, then the sections.
- Vertical rhythm: 56px between sections, 14px between a section label and its first row.
- Rows are separated by 1px `--line` hairlines. No boxed cards, no shadows, no rounded panels.
- Row: name (weight 500) and role (muted) on the left, date in mono on the right, one summary sentence below in `--body`.
- Skills: label on the left (muted), comma list on the right; stacked on mobile.

## Components

- **Logo mark:** the GP mark from `gplogo.svg`, 44px, `currentColor`. Sits above the headline.
- **Theme toggle:** 36px icon button, fixed top right. Sun icon in dark mode, moon in light mode. Choice is saved in `localStorage`; with nothing saved, follows `prefers-color-scheme`. An inline script sets the theme before first paint so there is no flash.
- **Links:** underlined, 1px, offset 3px, underline in `--line` that turns `--fg` on hover. External links open in a new tab.
- **Focus:** 2px `--fg` outline, 2px offset, on every interactive element.

## Motion

- Logo strokes draw in over about 1.4s on load, then the fill fades in. This keeps the animation from the splash-screen branch, at a small size.
- Content fades up 8px, staggered by 60ms, once on load.
- `prefers-reduced-motion`: no drawing, no fade; everything is shown immediately.

## Never

- No invented logos, employer logos, press mentions, testimonials or stats.
- No third-party embeds or trackers.
- No gradients, no purple, no identical card grids.
- No copy that is not in `COPY.md`.

## Decision log

| Date       | Decision | Why |
| ---------- | -------- | --- |
| 2026-11-16 | One page instead of several | The content is an intro, four short lists and three links. |
| 2026-11-16 | Monochrome, no accent colour | Brand wins on colour; the brand is a black logo on white. |
| 2026-11-16 | Warm off-white and warm near-black backgrounds | hanzpo.com's warm dark background and Daniel Pu's soft light one; softer than pure `#fff` / `#000` while keeping contrast high. |
| 2026-11-16 | Newsreader serif + Geist Sans + Geist Mono | Gavin liked the fonts in all three references (serif, sans, mono); Geist is the existing brand font. |
| 2026-11-16 | Split layout with sticky intro | hanzpo.com; keeps the contact links on screen while the lists scroll. |
| 2026-11-16 | Hairline rows instead of bordered cards | Cleaner with this little content; avoids a wall of boxes. |
| 2026-11-16 | No employer or school logos | Not supplied by Gavin; rule against invented or borrowed logos. |
| 2026-11-16 | Logo shrunk to 44px with the draw animation kept | Gavin does not want a big image; the animation was his own work on this branch. |
| 2026-11-16 | Stay on GitHub Pages rather than Vercel | The repo already deploys there through GitHub Actions. |
