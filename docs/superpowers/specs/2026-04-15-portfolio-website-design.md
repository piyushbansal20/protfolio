# Aditya Jha — GTM Specialist Portfolio Website

## Context

Aditya Jha is a GTM (Go-To-Market) Specialist and Digital Marketer based in Bangalore, currently working at Zenalyst AI. He needs a portfolio website that:
- Primarily targets recruiters for job opportunities
- Secondarily builds his personal brand and online presence
- Positions him as a GTM Specialist (not a generic digital marketer)
- Stands out from typical AI-generated portfolio sites

## Tech Stack

- **Framework:** Next.js (React) with TypeScript
- **Animations:** Framer Motion (parallax, scroll-triggered, staggered reveals)
- **3D:** Three.js via @react-three/fiber + @react-three/drei
- **Styling:** Tailwind CSS
- **Deployment-ready:** Static export compatible

## Design Direction: "The Command Center"

Dashboard-inspired layout — each section feels like a panel in an analytics command center. Monochrome minimal palette. The aesthetic communicates: "I live in data, dashboards, and results."

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| bg-primary | #000000 | Page background |
| bg-card | #0A0A0A | Card/panel backgrounds |
| border | #1A1A1A | Card borders, dividers |
| border-hover | #333333 | Hover state borders |
| text-primary | #FFFFFF | Headings, primary text |
| text-secondary | #999999 | Body text, labels |
| text-muted | #555555 | Subtle text, placeholders |
| accent-glow | rgba(255,255,255,0.05) | Subtle glow effects |

### Typography

- **Headings:** `Space Grotesk` or `JetBrains Mono` — techy, modern
- **Body:** `Inter` — clean, readable
- **Mono accents:** `JetBrains Mono` — for the terminal section and tags

### Global Effects

- Parallax scrolling: sections and elements at different scroll speeds using Framer Motion `useScroll` + `useTransform`
- Smooth scrolling behavior across the page
- Faint grid dot pattern at 5% opacity as a persistent background texture
- Cursor-following subtle spotlight gradient (very low opacity)

---

## Sections

### 1. Hero (Full Viewport)

**Layout:** Two-column on desktop, stacked on mobile.

**Left column:**
- Name: "ADITYA JHA" — large bold type, letter-spacing
- Subtitle: "GTM Specialist" with typing animation effect
- Tagline: *"From market research to closed deals — I build the bridge."*
- Two CTA buttons: "View My Work" (scroll down) | "Get In Touch" (scroll to contact)
- Buttons styled as monochrome bordered pills with hover invert

**Right column:**
- Three.js wireframe icosahedron, white/light gray
- Rotates slowly, reacts to mouse position (subtle tilt/displacement)
- Faint particle dust floating around the shape
- Radial gradient spotlight behind it (very subtle)

**Background:** Black with faint horizontal grid lines at 5% opacity

**Animations:**
- Name fades in + slides up (0.5s)
- Subtitle typing effect (1s delay)
- Tagline fades in (1.5s delay)
- Buttons fade in (2s delay)
- 3D shape fades in with scale (0.8 → 1.0)
- Scroll indicator: chevron at bottom pulsing down

**Parallax:** Name and 3D shape move at different speeds on scroll

### 2. About

**Layout:** Two-column on desktop, stacked on mobile.

**Left column — Terminal card:**
- Styled as a terminal window (rounded corners, 3-dot title bar: red/yellow/green dots in monochrome gray)
- Content displayed as command/response pairs:
  ```
  > whoami
  GTM Specialist & Digital Marketer
  
  > mission
  Taking products from zero to market through
  data-driven campaigns, strategic prospecting,
  and multi-channel growth.
  
  > status
  Currently driving B2B growth at Zenalyst AI
  ```
- Monospace font, green-ish or white text on dark bg

**Right column — Floating metric cards (4 cards in 2x2 grid):**
- "22+ Qualified Leads Generated"
- "3+ Enterprise Clients Onboarded"
- "CFO Conference — Managed End-to-End"
- "Multi-Platform Campaigns — LinkedIn, FB, Instagram"
- Each card: dark bg, thin border, subtle glow pulse on hover
- Staggered Framer Motion entry: fade up + slight scale (0.15s apart)

**Parallax:** Terminal and metric cards at different scroll depths

### 3. Experience (Timeline)

**Layout:** Vertical timeline centered on the page with dotted connector line and node circles.

**Zenalyst AI — GTM & Digital Marketing Associate (Jul 2025 – Present)**
Panel card expanding on scroll with bullets:
- Architected persona-based prospecting and market research strategies to sharpen GTM targeting
- Drove multi-channel lead generation across LinkedIn, email, and social — generating 22+ qualified leads
- Onboarded enterprise clients including Sattva & BharatBiotech
- Managed end-to-end conference lead ops for the CFO Conference
- Owned Zenalyst's entire social media presence — content strategy, scheduling, publishing
- Ran paid & organic campaigns across LinkedIn, Facebook, Instagram

**AccuConsults — Digital Marketing Intern (Sep 2024 – Mar 2025)**
Panel card with bullets:
- Executed email & LinkedIn outreach campaigns for B2B lead generation
- Built targeted lead databases through structured prospecting
- Analyzed campaign performance data and built reporting dashboards for conversion optimization

**Animations:**
- Timeline connector line "draws" downward on scroll
- Node circles glow as they enter viewport
- Cards slide in from alternating sides (left/right)

### 4. Results / Impact (Dashboard Panel)

**Layout:** Single large dark card with subtle border, containing 4 stat blocks in a grid.

| Number | Label |
|--------|-------|
| 22+ | Qualified B2B Leads Generated |
| 3+ | Enterprise Clients Onboarded |
| 1 | CFO Conference Managed End-to-End |
| 3+ | Platforms — Active Campaign Management |

**Each stat block:**
- Large animated counter (counts up from 0 on scroll into view)
- Label text below
- Thin decorative progress bar or spark line

**Animations:**
- Counter uses Framer Motion `useInView` + `animate` with easing
- Blocks stagger in 0.15s apart
- Cards lift with shadow on hover
- Faint grid dots pattern behind panel

### 5. Skills (Tag Cloud)

**Two groups:**

**GTM & Marketing:**
SEO, SEM, PPC, CRO, Lead Generation, Campaign Analytics, ABM, Content Strategy, Social Media Marketing, B2B Outreach, Market Research

**Tools & Platforms:**
Google Analytics, Search Console, SEMrush, Ahrefs, Power BI, Tableau, Excel, Canva, Adobe Photoshop, MS Project

**Styling:**
- Horizontal pill/tag layout, wrapping naturally
- Each tag: dark bg, white text, thin border (#1A1A1A)
- Hover: invert (white bg, black text) with smooth 0.2s transition
- Staggered wave animation on scroll entry

**No** percentage bars or ratings — keeps it honest.

### 6. Certifications (Credential Cards)

**Layout:** Horizontal row on desktop (grid on smaller screens).

**Cards:**
- Google Ads Certification (2025)
- Full Digital Marketing Course (2026)
- Social Media Marketing Mastery
- Account-Based Marketing (ABM)
- AI SEO Course (2025)

**Styling:**
- Glassmorphism: semi-transparent bg, backdrop blur, thin border
- Monochrome icon/glyph at top of each card
- Title + year
- Framer Motion: fade + scale on scroll entry

### 7. Contact

**Layout:** Centered, minimal.

**Heading:** "Let's Build Something."

**Contact blocks (3 items, vertical stack):**
- Email: adityajha2304@gmail.com
- LinkedIn: linkedin.com/in/adityajha23
- Phone: +91 9693445949

**Each block:** Hover slides content right with an arrow indicator animation.

**Footer:** "Designed by Aditya Jha" + current year. Subtle, small text.

---

## Navigation

- Fixed top navbar, transparent bg with blur on scroll
- Logo/name on left: "AJ" monogram or "ADITYA JHA" in small caps
- Nav links on right: About | Experience | Results | Skills | Contact
- Smooth scroll to sections on click
- Active section highlighted based on scroll position
- Mobile: hamburger menu with slide-in panel

## Responsive Design

- Desktop: full two-column layouts, full 3D scene
- Tablet: adjusted grid, smaller 3D element
- Mobile: single column stack, simplified 3D (or 2D fallback for performance), hamburger nav

## Performance Considerations

- Three.js canvas lazy-loaded, with a static fallback while loading
- Framer Motion animations use `useInView` with `once: true` to avoid re-triggering
- Images/assets optimized, fonts preloaded
- Intersection Observer for scroll-triggered animations

## Verification Plan

1. Run `npm run dev` and verify all sections render correctly
2. Test scroll animations and parallax on desktop
3. Test responsive layouts at 375px, 768px, 1024px, 1440px breakpoints
4. Verify Three.js icosahedron loads and responds to mouse
5. Test all nav links smooth-scroll to correct sections
6. Lighthouse performance audit — target 90+ score
7. Test on mobile browser (Safari/Chrome) for animation performance
