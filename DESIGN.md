# Design System — Developer Portfolio (Dark)

> Note: this is a proposed, from-scratch design system for the site described in the MVP spec —
> built around the subject (a frontend engineer / indie dev studio) rather than reverse-engineered
> pixel-for-pixel from the live CSS. If you want an exact match to a specific reference site, pull
> the real hex/font values from its stylesheet and swap them into the tokens below.

## 1. Direction

**Concept: "IDE at night."** The person's whole world is the code editor — so the interface borrows
quietly from that vernacular: monospace for labels and meta-data, bracket motifs instead of generic
numbered steps, a syntax-highlight-inspired accent duo instead of a single generic neon color.
Everything else stays restrained and editorial so the signature moment doesn't get crowded out.

**Signature element:** a monospace "status bar" ticker (used for the music/personality strip and
echoed faintly in the nav) styled like an editor's bottom status line — small, unglamorous, with a
blinking-cursor detail — plus section eyebrows written as `<about />`, `<projects />`, `<contact />`
instead of numbered markers, since the content genuinely lives in a code editor's mental model.

## 2. Color Tokens

| Token | Hex | Use |
|---|---|---|
| `bg-base` | `#0D0E14` | Page background (near-black ink, slightly blue) |
| `bg-surface` | `#15161F` | Cards, nav bar, testimonial tiles |
| `border-hairline` | `#262838` | 1px dividers, card borders |
| `text-primary` | `#EDEDF2` | Headings, body copy |
| `text-muted` | `#8B8D9C` | Sub-copy, captions, meta labels |
| `accent-violet` | `#7C6CF6` | Primary accent — links, active states, glow |
| `accent-mint` | `#4CD9C0` | Secondary accent — CTA hover, success/tag highlight |
| `accent-amber` (sparingly) | `#F5B44C` | Rare highlight, e.g. "available for work" dot |

Rule: one accent leads per screen area. Violet dominates; mint is reserved for interactive hover/CTA
states so it reads as "alive," not decorative.

## 3. Typography

| Role | Typeface | Notes |
|---|---|---|
| Display / headings | **Space Grotesk** | Geometric, slightly technical — used bold, tight tracking |
| Body | **Inter** | Neutral, highly legible at small sizes |
| Mono / labels / tags | **JetBrains Mono** | Nav item labels, project tech tags, eyebrows, status ticker |

**Type scale** (desktop → mobile):

| Level | Desktop | Mobile | Weight |
|---|---|---|---|
| H1 / Hero | 72px | 40px | 600, tight tracking (-0.02em) |
| H2 / Section | 40px | 28px | 600 |
| H3 / Card title | 20px | 18px | 600 |
| Body | 17px | 16px | 400, 1.6 line-height |
| Caption / mono label | 13px | 12px | 500, uppercase, +0.04em tracking |

## 4. Layout & Spacing

- Max content width: `1200px`, side gutters `24px` mobile / `64px` desktop
- Spacing scale (px): `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`
- Section vertical rhythm: `96px` desktop / `56px` mobile between major sections
- Card grid: `1` column mobile → `2` columns tablet → `3` columns desktop, `24px` gap
- Corner radius: `12px` cards, `8px` buttons/tags, `999px` pills (nav CTA, status badge)

**Rough wireframe (desktop):**

```
┌───────────────────────────────────────────────┐
│ [name]         [studio] [linkedin]  [Book a call]│  ← nav, bg-surface, hairline bottom border
├───────────────────────────────────────────────┤
│        <hero />                                │
│   BIG ANIMATED HEADLINE (3 words, staggered)   │
│   [photo, glow ring]   role · availability dot │
│                        [CTA]                   │
├───────────────────────────────────────────────┤
│  <about />          <skills />                 │
│  bio paragraphs     [Frontend][Backend][UI]    │
│                     tag chips, mono labels     │
├───────────────────────────────────────────────┤
│  ░░ status-bar marquee ticker, mono, 2 rows ░░ │  ← signature element
├───────────────────────────────────────────────┤
│  <projects />                                  │
│  [card] [card] [card]                          │
│  [card] [card] [card]                          │
├───────────────────────────────────────────────┤
│  <studio /> banner — offer + CTA               │
├───────────────────────────────────────────────┤
│  <testimonials />                              │
│  [quote card] [quote card] [quote card]        │
├───────────────────────────────────────────────┤
│  <contact />  — email · book a call · socials  │
├───────────────────────────────────────────────┤
│  footer — © · tagline · name→studio link       │
└───────────────────────────────────────────────┘
```

## 5. Components

**Buttons**
- Primary: `bg-accent-violet`, `text` near-white, `radius-8`, hover → background shifts to
  `accent-mint`, subtle 150ms ease transition, no heavy shadow
- Secondary (ghost): `1px border-hairline`, transparent bg, hover → border turns `accent-violet`

**Tags / chips** (skills, project tech stack)
- `bg-surface`, `1px border-hairline`, mono font, `radius-8`, `padding: 6px 12px`
- On project cards, prefix each tag visually like a small code token (no literal brackets needed
  everywhere — reserve brackets for section eyebrows to avoid overuse)

**Project card**
- Image top (16:10 ratio, `radius-12` top corners), `bg-surface` body, `border-hairline` outline
- Title (H3) + description (body, muted) + tag row + two icon-links (GitHub / Live) bottom-aligned
- Hover: image scales `1.03` (300ms ease), card border brightens to `accent-violet` at 40% opacity

**Testimonial card**
- `bg-surface`, `radius-12`, generous padding (`32px`)
- Small quote-mark glyph in `accent-violet` at low opacity, top-left
- Name in `text-primary` semibold, role/company in `text-muted` mono caption below

**Status-bar ticker (signature element)**
- Two full-width rows, mono font, `13px`, `text-muted` with `accent-mint` for currently-highlighted item
- Rows scroll in opposite directions, slow linear loop (~40s), pause on hover
- Thin `border-hairline` rule above and below, like a literal IDE status bar

## 6. Motion Guidelines

- Page load: hero elements fade+rise (`opacity 0→1`, `translateY 16px→0`), staggered 80ms per element
- Scroll reveals: sections fade+rise once, 20% viewport threshold, no repeat replay
- Hover micro-interactions only on: buttons, project cards, tags — nothing ambient/looping except the
  status-bar ticker
- Respect `prefers-reduced-motion`: disable staggered/scroll reveals, keep only opacity crossfades
- One orchestrated moment (hero entrance) > scattered effects everywhere else

## 7. Responsive Breakpoints

| Name | Width |
|---|---|
| `sm` | 480px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

Nav collapses to name + single CTA button below `md`; secondary nav links move into a simple
menu or drop below the fold as footer links.

## 8. Accessibility Notes

- Text/background contrast ≥ 4.5:1 for body text against `bg-base`/`bg-surface`
- All interactive elements have a visible focus ring (`2px accent-violet`, offset `2px`)
- Marquee/ticker content also available statically for screen readers (`aria-hidden` on the
  animated version, a plain list alternative visually hidden but announced)
- Icon-only links (GitHub, LinkedIn) get `aria-label`s
