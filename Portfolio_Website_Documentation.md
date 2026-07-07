# Portfolio Website — Product & Technical Documentation
**Reference site:** landonorris.com
**Document owner:** Product/Design/Engineering
**Version:** 1.0
**Status:** Draft for review

---

## 0. Reference Analysis & Assumptions

landonorris.com is a personal-brand site for a Formula 1 driver, built to communicate identity, achievement, and commercial partnerships through cinematic imagery and confident motion design. Its structure is not really about "an F1 driver" — it's a reusable pattern for **any high-profile individual portfolio**: athlete, designer, developer, founder, creator, or consultant.

Key patterns observed on the reference site, translated into generic portfolio concepts:

| Reference site element | Generic portfolio equivalent |
|---|---|
| Full-screen hero with name, title, signature | Hero with name, role/tagline, signature/monogram |
| "On Track" (results, stats, race photos) | **Work** — case studies, achievements, metrics |
| "Off Track" (campaigns, shoots, lifestyle) | **Gallery / Behind the Scenes** — process, personality, culture |
| "Helmets Hall of Fame" (visual timeline gallery) | **Highlights** — a curated visual timeline/showcase grid |
| "Partnerships" (brand logos) | **Partnerships / Clients** — logos, collaborations |
| "Calendar" (race schedule) | **Journal / Availability** — upcoming events, talks, releases |
| Social feed strip | Social proof strip (Instagram/YouTube/LinkedIn/X embeds) |
| "Business enquiries" mailto + Store link | Contact CTA + optional Shop/Resource link |
| Dark theme, single accent (lime), bold condensed type | Dark theme, single accent color, bold display type |

**Assumption:** Since the specific profession/industry wasn't provided, this documentation defines a **template system** — every section below is written so that "Work," "Gallery," and "Partnerships" can be relabeled for any individual without changing the underlying structure. Where a decision is genuinely profession-specific (e.g., whether "Work" means case studies or race results), it is called out explicitly so it can be filled in later.

---

## 1. PRD — Product Requirements Document

### 1.1 Purpose & Vision
Build a personal portfolio website that functions as the single, authoritative hub for an individual's professional identity — replacing scattered social profiles and PDFs with one cinematic, fast, mobile-first destination that:
- Establishes credibility in the first 3 seconds (hero + tagline).
- Shows proof of work through curated, high-production visuals and results.
- Converts visitors into the two outcomes that matter: **being remembered** and **being contacted/hired/collaborated with**.

### 1.2 Target Audience
| Persona | Goal on the site | Priority |
|---|---|---|
| Recruiter / brand partner / client | Assess credibility fast, find contact info | High |
| Fan / follower / peer | Explore work, follow socials | Medium |
| Press / media | Find bio, assets, press kit | Medium |
| The individual (site owner) | Update content without a developer | High |

### 1.3 Goals & Success Metrics
| Goal | Metric | Target |
|---|---|---|
| Fast credibility signal | Bounce rate on hero | < 40% |
| Drive contact/collaboration | Contact CTA click-through rate | > 5% of sessions |
| Showcase depth of work | Avg. scroll depth on Work page | > 70% |
| Performance | Largest Contentful Paint (LCP) | < 2.5s on 4G |
| Accessibility | WCAG conformance | AA |
| Content freshness | Time to publish a new update | < 10 minutes, no-code |

### 1.4 Scope — MVP (Must-Have)
1. Home / Landing page (hero, intro statement, highlight reel, section teasers)
2. Work page (achievements, case studies, filterable by category/year)
3. Gallery / Behind-the-Scenes page (media grid, lightbox)
4. Partnerships / Collaborations page (logo wall + featured collaboration stories)
5. Journal / Calendar page (upcoming events, news, availability)
6. Global navigation, footer, and Contact mechanism (mailto or form)
7. Social proof strip (embedded/linked social channels)
8. Responsive design across mobile, tablet, desktop
9. Basic SEO (meta tags, OpenGraph, sitemap, structured data for a Person)
10. Legal pages (Privacy Policy, Terms)

### 1.5 Scope — Phase 2 (Nice-to-Have)
- CMS-driven content (no-code updates)
- Newsletter/"Sign Up" capture
- E-commerce/store integration or external link
- Multi-language support
- Press kit / downloadable media assets page
- Live social feed pulling (API-based) instead of static embeds
- Interactive 3D/Rive-style hero animation
- Dark/"vertical drive" mobile lock rotation pattern (device-orientation prompt)

### 1.6 Out of Scope (Explicit Non-Goals)
- E-commerce checkout, payments, or order fulfillment (link out to a separate store only)
- User accounts / login for site visitors
- Comment systems or public UGC
- Real-time chat support

### 1.7 Assumptions & Constraints
- Content (photos/video, copy, bio, achievements) will be supplied by the site owner; the site does not generate this content.
- One primary individual is the subject of the site (not a team/roster).
- Launch language: English (i18n architecture should not be blocked, but translation is Phase 2).
- Hosting budget assumes a modern JAMstack/CMS approach rather than custom backend infrastructure.

### 1.8 Risks
| Risk | Mitigation |
|---|---|
| Heavy imagery/video hurts performance | Enforce image/video optimization pipeline, lazy loading, CDN |
| Content goes stale (no calendar/journal updates) | CMS-driven journal with scheduled publishing |
| Over-designed motion hurts accessibility/performance on low-end devices | "Reduced motion" fallback, motion budget per page |
| Single point of failure (one person's brand) | Clear fallback states for empty sections (e.g., no upcoming events) |

---

## 2. TRD — Technical Requirements Document

### 2.1 Recommended Stack
| Layer | Recommendation | Rationale |
|---|---|---|
| Frontend framework | Static-site/SSR framework (e.g., Next.js/Nuxt/Astro class) | SEO-friendly, fast, image optimization built in |
| Content management | Headless CMS (e.g., Webflow CMS, Sanity, Contentful, Storyblok) | Non-technical owner can publish updates |
| Hosting/CDN | Global CDN with edge caching (e.g., Vercel/Netlify/Cloudflare) | Low latency worldwide, generous free/pro tiers |
| Media handling | Managed image/video CDN with automatic format conversion (WebP/AVIF, adaptive video bitrate) | Performance at scale with rich media |
| Forms/contact | Serverless form handler + spam protection (honeypot/CAPTCHA) | No backend needed for a simple contact flow |
| Analytics | Privacy-respecting analytics (e.g., Plausible/GA4) + Core Web Vitals monitoring | Measure success metrics from PRD |
| Email | Transactional email service for contact-form notifications | Reliable delivery, no custom mail server |

### 2.2 Non-Functional Requirements
- **Performance:** LCP < 2.5s, CLS < 0.1, INP < 200ms (Core Web Vitals "Good" thresholds) on median mobile connection.
- **Availability:** 99.9% uptime (static hosting/CDN target).
- **Scalability:** Must handle traffic spikes (e.g., viral moment, press feature) without manual intervention — static generation + CDN caching by default.
- **Accessibility:** WCAG 2.1 AA — color contrast, keyboard navigation, alt text, reduced-motion support, focus states.
- **SEO:** Server-rendered or statically generated HTML (not client-only rendering) for indexability; structured data (schema.org `Person`); sitemap.xml; robots.txt; canonical URLs.
- **Security:** HTTPS everywhere, CSP headers, form spam/bot protection, no sensitive data stored client-side.
- **Browser/device support:** Latest 2 versions of Chrome, Safari, Firefox, Edge; iOS Safari and Android Chrome for mobile; graceful degradation on older browsers (no hard dependency on cutting-edge CSS/JS features for core content).
- **Internationalization readiness:** Content model should not hardcode English strings into components (Phase 2 enabler, not MVP requirement).

### 2.3 Content Model (Headless CMS Schema — Conceptual)
- **Person/Profile:** name, role/tagline, bio (short + long), headshot, signature asset, social links, contact email.
- **Work Item:** title, category/tag, year, cover media, description, result/metric, related media gallery, external link (optional).
- **Gallery Item:** media asset, caption, date, location, tags.
- **Partnership:** partner name, logo asset, description, featured flag, link.
- **Journal/Event Entry:** title, date/date range, type (event/news/release), location, description, status (upcoming/past).
- **Site Settings:** navigation labels, footer links, legal page content, social handles, SEO defaults.

### 2.4 Integration Points
- Social platforms: outbound links at minimum (MVP); embedded feeds or API pulls (Phase 2).
- Email: `mailto:` link (MVP) or serverless form → email notification (Phase 1.5).
- Analytics + Web Vitals monitoring from day one.
- Optional external store: outbound link only, no shared cart/session.

### 2.5 Environments & Release Process
- **Environments:** Local → Staging (preview deploys per content change/PR) → Production.
- **Content publishing:** CMS changes trigger an automated rebuild/redeploy (webhook) so non-engineers can ship updates without a code release.
- **Versioning:** Design tokens, component library, and content schema are versioned independently; breaking schema changes require a migration note.

### 2.6 Monitoring & Maintenance
- Uptime monitoring + alerting.
- Core Web Vitals dashboard (field data, not just lab data).
- Broken-link/asset checker run on a schedule.
- Quarterly content audit (remove stale journal/event entries, refresh hero media).

---

## 3. Design System ("Design Files" Specification)

> This section defines the design system a designer would build in Figma/design tooling. It specifies rules and tokens rather than shipping visual files, since actual design files (Figma, etc.) are produced outside this document.

### 3.1 Brand Direction
- **Tone:** Confident, cinematic, premium, kinetic — large type, high-contrast imagery, generous negative space, motion used sparingly but deliberately.
- **Theme:** Dark-first UI (near-black base) with **one** signature accent color used consistently for interactive elements, highlights, and signature/logo marks — mirroring the reference site's single lime accent against black.

### 3.2 Color Tokens
| Token | Purpose | Example value pattern |
|---|---|---|
| `color-bg-base` | Primary background (near-black) | e.g. #0A0A0A |
| `color-bg-elevated` | Cards/panels above base | slightly lighter than base |
| `color-text-primary` | Main text on dark background | near-white |
| `color-text-secondary` | Supporting/meta text | muted grey |
| `color-accent` | Single signature accent (CTAs, links, highlights, active states) | brand-specific bright color |
| `color-border-subtle` | Dividers, outlines | low-opacity white |
| `color-overlay` | Image gradient overlays for text legibility | black gradient, 0–80% opacity |

Rule: the accent color is used sparingly and only for actionable/important elements — it must never be used decoratively at large scale, or it loses meaning.

### 3.3 Typography
| Role | Style direction | Notes |
|---|---|---|
| Display / Hero name | Extra-bold, condensed or wide display typeface, very large scale | One name/title per hero, minimal supporting copy |
| Section headers | Bold, uppercase or small-caps treatment, tracked-out letterspacing | Mirrors "ON / TRACK" two-line stacked treatment |
| Body copy | Clean, high-legibility sans-serif | Comfortable line-height (1.4–1.6), max line length ~65–75 characters |
| Meta/labels | Small, uppercase, wide letter-spacing | Used for tags like "2025", location, category |

### 3.4 Layout & Grid
- 12-column responsive grid on desktop, 4-column on mobile.
- Full-bleed media sections are allowed to break the grid; text content stays within a readable max-width container.
- Generous vertical rhythm between sections (large section padding) to reinforce a premium, uncluttered feel.
- Consistent spacing scale (e.g., 4/8/16/24/32/48/64/96/128px) applied everywhere — no arbitrary spacing values.

### 3.5 Imagery & Motion Principles
- Photography/video is the primary design material — treat it as premium editorial content, not filler.
- Every hero/section image uses a gradient overlay to guarantee text contrast (accessibility requirement, not optional).
- Motion is purposeful: parallax/scroll-reveal on entry, subtle hover states on interactive cards, no motion that blocks content from being read.
- **Reduced-motion mode:** all animation must have a static-equivalent fallback respecting the user's OS-level "reduce motion" preference.

### 3.6 Core Components (to be built as a shared library)
- Global navigation bar (transparent-over-hero → solid-on-scroll)
- Mobile menu/drawer with imagery accents
- Hero module (name, tagline, primary CTA, background media)
- Section teaser card (image + eyebrow label + heading + link)
- Horizontal scroll/story-strip gallery (for moment/timeline imagery, mirroring the reference "message from..." strip)
- Grid gallery with hover-state reveal (mirrors the helmet-style base/hover image swap)
- Logo wall (partnerships)
- Event/journal list item (date, title, status)
- Social proof strip
- Footer (sitemap links, social icons, legal links, contact)
- Signature/monogram mark as a recurring brand motif

### 3.7 Design File Deliverables Checklist (for the design tool of choice)
- [ ] Color & typography token library
- [ ] Component library (all components in 3.6, each with default/hover/active/disabled states)
- [ ] Responsive frames: mobile (375px), tablet (768px), desktop (1440px) for every MVP screen
- [ ] Motion/interaction spec (entry animation, hover behavior, transition durations/easing)
- [ ] Accessibility annotations (contrast ratios, focus order, alt-text placeholders)
- [ ] Empty/error/loading states for dynamic sections (e.g., "no upcoming events")

---

## 4. Architecture

### 4.1 Sitemap
```
Home
├── Work                (achievements / case studies, filterable)
│   └── Work Item Detail
├── Gallery              (behind-the-scenes / lifestyle media grid)
│   └── Lightbox / Media Detail
├── Highlights           (curated visual timeline showcase)
├── Partnerships
│   └── Partnership Detail (optional)
├── Journal / Calendar   (news, events, availability)
├── Contact              (mailto or form)
└── Legal
    ├── Privacy Policy
    └── Terms & Conditions
```
*(Note: "Work," "Gallery," and "Highlights" labels are placeholders per Section 0 — rename to match the individual's field, e.g., "Projects," "Press," "Case Studies.")*

### 4.2 High-Level System Architecture (conceptual, no implementation code)
```
[ Content Owner ]
      │  edits content
      ▼
[ Headless CMS ] ──webhook──▶ [ Build/Deploy Pipeline ] ──▶ [ Static/SSR Site Output ]
      │                                                          │
      │  media                                                   ▼
      ▼                                                   [ Global CDN / Edge Cache ]
[ Media/Image CDN ] ◀────────── media requests ─────────────────┤
                                                                   │
[ Visitor Browser ] ◀─────────── HTML/CSS/JS/media ───────────────┘
      │
      ├──▶ [ Contact Form Handler (serverless) ] ──▶ [ Email/Notification Service ]
      └──▶ [ Analytics / Web Vitals Collector ]
```

### 4.3 Architectural Principles
- **Content/Presentation separation:** All copy, images, and structured data live in the CMS; the codebase renders it. No hardcoded content in components.
- **Static-first rendering:** Pages are pre-rendered at build time wherever content doesn't require real-time data; this maximizes performance and SEO without needing a traditional application server.
- **Edge delivery:** All static assets and pages are served from a CDN edge network close to the visitor.
- **Progressive enhancement:** Core content (text, links, images) must be usable even if JavaScript-driven motion fails to load.
- **Single source of truth for design tokens:** Colors, type, and spacing are defined once (design tokens) and consumed everywhere — no per-page overrides.
- **Stateless frontend:** No visitor accounts/sessions; the only "write" path in the system is the contact form.

### 4.4 Folder/Content Structure (conceptual)
```
/content
  /work-items
  /gallery-items
  /partnerships
  /journal-entries
  /site-settings
/design-system
  /tokens
  /components
/pages
  home, work, gallery, highlights, partnerships, journal, contact, legal
```

---

## 5. MVP Screens

| # | Screen | Primary purpose | Key elements |
|---|---|---|---|
| 1 | **Home** | Establish identity fast, route to deeper content | Full-bleed hero (name, tagline, signature), short mission statement, horizontal moments strip, teaser cards for Work/Gallery, highlights preview grid, partnerships logo strip, social proof strip, footer |
| 2 | **Work (list)** | Prove credibility through results/case studies | Filter/sort by category or year, grid/list of work items with cover image + short result stat |
| 3 | **Work Item Detail** | Deep dive into one achievement/project | Hero image/video, narrative copy, metrics/results, related media, link to related partnership if applicable |
| 4 | **Gallery** | Show personality/behind-the-scenes | Masonry/grid of media, category tags, lightbox on click |
| 5 | **Highlights** | Curated "hall of fame" style showcase | Base/hover image swap cards, title + year label per item, link back to Work/Gallery for context |
| 6 | **Partnerships** | Build commercial credibility | Logo wall, 1–2 featured partnership case stories, CTA for new partnership enquiries |
| 7 | **Journal / Calendar** | Show what's current/upcoming | Chronological list, upcoming vs. past states, empty state when nothing is scheduled |
| 8 | **Contact** | Convert interest into an enquiry | Direct email link or lightweight form (name, email, message, enquiry type), response-time expectation, social links |
| 9 | **Legal (Privacy/Terms)** | Compliance | Static content pages using the same shell/navigation |
| 10 | **404 / Empty States** | Handle broken links and empty sections gracefully | On-brand messaging, link back to Home |

---

## 6. User Flow

### 6.1 Primary Flow — First-Time Visitor → Contact
1. Visitor lands on **Home** (via search, social bio link, or press mention).
2. Hero communicates who this is and why it matters within the first screen.
3. Visitor scrolls through the moments strip and section teasers (Work / Gallery) to get a feel for credibility and personality.
4. Visitor clicks into **Work** to evaluate depth/quality of achievements.
5. Visitor opens a **Work Item Detail** for the most relevant/impressive project.
6. Satisfied, visitor checks **Partnerships** to see who else has trusted this person (social proof).
7. Visitor goes to **Contact**, sends an enquiry or clicks the mailto link.
8. Confirmation state shown (form success message or mail client opens).

### 6.2 Secondary Flow — Returning Fan/Follower
1. Visitor returns via a social platform link.
2. Lands on **Home**, checks **Journal/Calendar** for anything new.
3. Browses **Gallery** or **Highlights** for new media.
4. Follows social links to continue engagement off-site.

### 6.3 Secondary Flow — Press/Media
1. Visitor lands on **Home** or is linked directly to **Work** for background research.
2. Reviews **Work** and **Partnerships** for factual/biographical accuracy.
3. Uses **Contact** (enquiry type = "Press") for interview/asset requests.

### 6.4 Flow Diagram (textual)
```
Entry (search/social/press) 
   → Home 
      → Work (list) → Work Item Detail → Partnerships → Contact → [Confirmation]
      → Gallery → Lightbox → back to Home
      → Highlights → back to Work/Gallery
      → Journal/Calendar → (external event link, optional)
      → Contact → [Confirmation]
```

### 6.5 Edge Cases to Design For
- No upcoming events (Journal/Calendar empty state).
- Slow network / media not yet loaded (skeleton/placeholder states, not blank screens).
- JavaScript disabled or motion library fails to load (content must still render, static fallback).
- Visitor on a very old/unsupported browser (basic layout still legible, even if motion/effects are absent).

---

## 7. System Design Rules

These are the durable rules that govern how the system should be built and evolved, independent of any single feature.

### 7.1 Content Rules
- Every page must render meaningfully with zero client-side JavaScript (progressive enhancement) — critical text, nav, and links come from server-rendered/static HTML.
- No content is hardcoded in the frontend codebase; everything editorial lives in the CMS.
- Every media asset requires: alt text, a compressed/optimized delivery format, and a defined aspect ratio to prevent layout shift.
- Empty states are a required deliverable for every dynamic list (Work, Gallery, Journal) — never ship a blank section.

### 7.2 Design Rules
- Only one accent color is active at a time across the entire system; introducing a second "loud" color requires a design-system version bump and explicit rationale.
- All spacing, color, and typography values must come from the token library — no one-off inline values.
- Every interactive element must have visible hover, focus, active, and disabled states.
- All motion must degrade gracefully under `prefers-reduced-motion`.
- Minimum text contrast ratio of 4.5:1 for body text and 3:1 for large display text against its background, accounting for image overlays.

### 7.3 Performance Rules
- No single page's initial load may exceed an agreed media weight budget (define per page type, e.g., hero image ≤ target KB after compression).
- Images and video must be served via an adaptive CDN (responsive sizes, modern formats) — never a single full-resolution asset for all breakpoints.
- Non-critical scripts (analytics, embeds, motion libraries) load asynchronously and never block first paint.
- Any new section or component must be evaluated against Core Web Vitals before merging to production.

### 7.4 Accessibility Rules
- All interactive elements are reachable and operable via keyboard alone.
- All non-text content has a text alternative.
- Focus order follows visual/logical order; focus is never trapped or lost after navigation/modal interactions (e.g., lightbox).
- Forms include clear labels, error messaging, and success confirmation that is announced to assistive technology.

### 7.5 SEO & Metadata Rules
- Every page defines a unique title, meta description, and OpenGraph/Twitter card image.
- Structured data (`Person`, `Event` for journal items, `Organization` for partnerships where relevant) is included and validated.
- Canonical URLs are set to prevent duplicate-content issues (e.g., filtered Work views).
- Sitemap and robots.txt are regenerated automatically on every deploy.

### 7.6 Content Governance Rules
- The site owner (or delegate) can publish a content change (new Work item, Journal entry, Gallery upload) without a code deployment.
- A lightweight editorial checklist (image optimized, alt text present, links valid) is enforced before publishing, ideally via CMS validation rules.
- Legal pages (Privacy/Terms) are reviewed at least annually or on any material change to data collection (e.g., adding a newsletter form).

### 7.7 Change Management Rules
- Design tokens and shared components are versioned; a breaking visual change requires updating every consuming page in the same release, not incrementally.
- New sections/pages must reuse existing components from the library before introducing a new one-off component.
- Any Phase 2 feature (CMS live feeds, e-commerce, i18n) must be evaluated against the performance and accessibility rules above before being greenlit — new features cannot regress Core Web Vitals or WCAG conformance.

---

## 8. Open Questions for Stakeholder Input
1. What is the actual profession/field of the site owner? (Determines final naming for "Work," "Gallery," "Highlights.")
2. Is a headless CMS acceptable, or does the owner require a fully custom backend for future features (e.g., bookings, e-commerce)?
3. Should the contact path be a form (captures leads, needs spam handling) or a direct mailto (simpler, less data control)?
4. Is multi-language support needed at launch, or is Phase 2 timing acceptable?
5. Are there existing brand assets (logo, signature, color) to lock into the token library, or does the design system need to originate them?

---

*End of document.*
