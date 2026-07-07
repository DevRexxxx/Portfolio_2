# Frontend Engineer Portfolio — MVP Specification

> Reference: single-page freelance/agency-style developer portfolio (dark theme, Next.js).
> This spec describes the structure and functionality to build. Replace all placeholder copy with your own content.

## 1. Goal

A one-page portfolio that:
- Establishes credibility (skills, past work, testimonials)
- Drives two conversions: **book a call** and **send an email**
- Doubles as a landing page for a personal brand / small dev studio

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion (section/element transitions), GSAP (optional, scroll-driven effects) |
| Fonts | `next/font`, self-hosted variable fonts |
| Images | `next/image`, WebP, static imports |
| Booking | Cal.com embed link (no backend) |
| Contact | `mailto:` link with pre-filled subject/body |
| Hosting | Vercel |
| Data | Static local JSON/TS files (no CMS for MVP) |

## 3. Page Structure (top to bottom)

1. **Nav bar** — name/wordmark, external links (studio site, LinkedIn), primary CTA button ("Book a call")
2. **Hero** — animated multi-word headline (e.g. three rotating/staggered words), profile photo (clickable, links to booking), one-line current role + availability badge, supporting CTA
3. **About** — 3–5 short paragraphs: what you do, how you work, a personal/hobby paragraph for personality, closing line inviting outreach
4. **Skills** — three columns/groups: Frontend, Backend, UI Libraries — rendered as tag/chip lists
5. **Personality strip** *(optional)* — e.g. an auto-scrolling marquee (music, tools, or quotes) purely for character/branding, dual-row, opposite scroll directions
6. **Projects** — grid of cards, each with: cover image, title, 1–2 sentence description, tech tags, GitHub link, live link
7. **Studio/offer banner** — short pitch for a side brand/agency + a scarcity-driven offer line + CTA
8. **Testimonials** — grid or carousel: quote, name, role @ company
9. **Contact** — heading, two CTAs (email / book a call), social icons (LinkedIn, GitHub)
10. **Footer** — copyright, one-line tagline, name linking back to primary brand/site

## 4. Data Model

```ts
type Project = {
  slug: string;
  title: string;
  description: string;   // 1-2 sentences
  coverImage: string;
  tags: string[];         // e.g. ["React", "Tailwind CSS", "Framer Motion"]
  githubUrl?: string;
  liveUrl?: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type SkillGroup = {
  category: "Frontend" | "Backend" | "UI Libraries";
  items: string[];
};
```

Store these as `data/projects.ts`, `data/testimonials.ts`, `data/skills.ts`. No admin UI in MVP — edit the files directly to update content.

## 5. MVP Feature Checklist

- [ ] Responsive, mobile-first single-page layout
- [ ] Sticky/floating nav with primary CTA always visible
- [ ] Hero entrance animation (stagger/fade/slide)
- [ ] About section (static copy)
- [ ] Skills rendered from data file
- [ ] Projects grid rendered from data file, with image hover state, lazy-loaded images
- [ ] Testimonials rendered from data file
- [ ] Contact section: working `mailto:` link + external booking link
- [ ] Favicon, page title, meta description
- [ ] Open Graph + Twitter card image and tags
- [ ] Semantic HTML (single `h1`, landmark regions), visible focus states, alt text on all images
- [ ] Deployed to Vercel with a custom domain

## 6. Explicitly Out of Scope (Phase 2+)

- CMS integration (Sanity / Prismic / Contentful) for projects & testimonials
- Blog / writing section
- Light-mode toggle
- Contact form with a backend + email service (vs. plain `mailto:`)
- Individual case-study pages per project
- Analytics dashboard
- i18n / multi-language support

## 7. Non-Functional Requirements

- **Performance:** Lighthouse ≥ 90 mobile; optimize/lazy-load all images; minimize JS shipped above the fold
- **SEO:** unique title + description, OG/Twitter meta, one `h1` per page, descriptive link text
- **Accessibility:** keyboard-navigable, visible focus rings, WCAG AA contrast on dark background, `prefers-reduced-motion` respected
- **Responsive breakpoints:** ~480px / 768px / 1024px / 1280px

## 8. Suggested Build Order

1. Scaffold Next.js + Tailwind + fonts + base layout
2. Nav + footer shell
3. Hero section
4. About + Skills sections
5. Projects data + grid
6. Testimonials section
7. Contact section
8. Animation pass (Framer Motion)
9. SEO metadata + OG image
10. Accessibility + performance QA → deploy
