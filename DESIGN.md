# DESIGN.md — lucassommer.com

## 1. Visual Theme & Atmosphere

Lucas Sommer's site should feel like a **personal operating system** — an app you open to get updates, download resources, and follow along with what's being built. It's not a blog, not a portfolio, not a resume. It's **Lucas as a platform**. Half human, half machine, half chimp.

The design is **dark-mode-first** with a light mode toggle. Dark mode is the native state — confident, focused, technical. Light mode is the accessible alternative — warm, clean, approachable. Both modes feel like the same product, just different themes.

The vibe is **approachable tech**: Linear's engineering precision meets Notion's warmth. Cards feel like app tiles. Status badges feel like system indicators. "Follow" buttons feel like subscribing to a service. The press bar feels like integrations. Everything communicates: this is a person who builds things, shipped as a product.

**Key Characteristics:**
- Dark-mode-first with warm undertones (not cold/sterile dark)
- Inter font with negative letter-spacing at display sizes, OpenType features enabled
- App-like components: status badges, version-style tags, "Get update" CTAs
- Card-based layout with luminance stepping (dark) or whisper borders (light)
- One accent color: a confident blue (#3b82f6) that works on both dark and light
- Generous whitespace between sections — each section is a "screen" in the app
- 1000px max-width container — room for cards to breathe

## 2. Color Palette & Roles

### Dark Mode (Default)
- **Background**: `#0a0a0b` — near-black with a warm undertone
- **Surface 1**: `#141415` — card backgrounds, elevated panels
- **Surface 2**: `#1c1c1e` — hover states, secondary surfaces
- **Surface 3**: `#2c2c2e` — active states, tertiary surfaces
- **Text Primary**: `#f5f5f4` — warm off-white, not pure white
- **Text Secondary**: `#a1a1aa` — muted but readable
- **Text Tertiary**: `#71717a` — timestamps, metadata, de-emphasized
- **Border**: `rgba(255,255,255,0.08)` — whisper-thin, semi-transparent
- **Border Hover**: `rgba(255,255,255,0.14)` — slightly more visible on interaction

### Light Mode
- **Background**: `#fafaf9` — warm off-white (stone-50)
- **Surface 1**: `#ffffff` — card backgrounds
- **Surface 2**: `#f5f5f4` — hover states, secondary surfaces
- **Surface 3**: `#e7e5e4` — active states
- **Text Primary**: `#1c1917` — warm near-black (stone-900)
- **Text Secondary**: `#78716c` — warm muted (stone-500)
- **Text Tertiary**: `#a8a29e` — stone-400
- **Border**: `rgba(0,0,0,0.08)` — whisper border, Notion-style
- **Border Hover**: `rgba(0,0,0,0.14)`

### Accent (Both Modes)
- **Accent**: `#3b82f6` — blue-500, the primary interactive color
- **Accent Hover**: `#2563eb` — blue-600, darker on hover
- **Accent Soft**: `rgba(59,130,246,0.1)` — tinted background for badges/tags
- **Accent Text**: `#60a5fa` (dark mode) / `#2563eb` (light mode) — link text

### Status Colors
- **Active/Green**: `#22c55e` bg with `#16a34a` text (dark), `#dcfce7` bg with `#16a34a` text (light)
- **Building/Blue**: `#3b82f6` bg with `#60a5fa` text (dark), `#dbeafe` bg with `#2563eb` text (light)
- **Exploring/Amber**: `#f59e0b` bg with `#fbbf24` text (dark), `#fef3c7` bg with `#a16207` text (light)

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, with fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Mono**: `'JetBrains Mono', 'Fira Code', ui-monospace, monospace` — for version tags, code, technical labels
- **OpenType Features**: Enable `font-feature-settings: "cv01", "cv03", "cv04"` on all Inter text for geometric alternates

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display | 3rem (48px) | 800 | 1.0 | -1.5px | Hero headlines, maximum impact |
| H1 | 2.25rem (36px) | 700 | 1.1 | -1px | Section titles |
| H2 | 1.5rem (24px) | 700 | 1.2 | -0.5px | Card titles, sub-sections |
| H3 | 1.125rem (18px) | 600 | 1.3 | -0.2px | Smaller headings |
| Body Large | 1.125rem (18px) | 400 | 1.7 | normal | Hero subtitles, intros |
| Body | 0.9375rem (15px) | 400 | 1.6 | normal | Standard reading text |
| Body Medium | 0.9375rem (15px) | 500 | 1.6 | normal | Nav links, emphasized text |
| Small | 0.8125rem (13px) | 500 | 1.5 | normal | Captions, metadata, tags |
| Micro | 0.6875rem (11px) | 600 | 1.3 | 0.05em | Status badges, uppercase labels |
| Mono | 0.75rem (12px) | 500 | 1.4 | normal | Version tags, technical labels |

### Principles
- **Compression at scale**: Negative letter-spacing on all headings. -1.5px at 48px, relaxing to normal at 15px.
- **Weight range**: 400 (read) → 500 (navigate) → 600 (label) → 700 (announce) → 800 (display hero only)
- **Tight headlines, relaxed body**: Line-height goes from 1.0 at display to 1.7 at body. Creates contrast between dense headlines and comfortable reading.

## 4. Component Stylings

### Theme Toggle
- A simple sun/moon icon button in the nav
- Smooth CSS transition on theme switch (0.2s ease on background-color, color, border-color)
- Stores preference in localStorage, respects prefers-color-scheme on first visit

### Buttons

**Primary CTA**
- Background: `var(--accent)`
- Text: `#ffffff`
- Padding: 0.55rem 1.15rem
- Radius: 8px
- Font: 13px weight 600
- Hover: `var(--accent-hover)` background
- Use: "Get updates", "Download", "Follow"

**Ghost Button**
- Background: transparent
- Text: `var(--text-secondary)`
- Border: 1px solid `var(--border)`
- Padding: 0.55rem 1.15rem
- Radius: 8px
- Hover: border brightens to `var(--border-hover)`, text to `var(--text-primary)`
- Use: Secondary actions, "Learn more"

### Cards (Project Tiles)
- Background: `var(--surface-1)`
- Border: 1px solid `var(--border)`
- Radius: 12px
- Padding: 1.5rem
- Hover: border brightens to `var(--border-hover)`, subtle background shift
- Feel like app tiles — tappable, contained, self-sufficient

### Status Badges
- Font: 11px weight 600, uppercase, 0.05em letter-spacing
- Padding: 0.2rem 0.55rem
- Radius: 9999px (full pill)
- Colors per status (see Status Colors above)
- Feel like system indicators — "Active", "Building", "v2.1"

### Tags
- Font: 12px weight 500
- Background: `var(--surface-2)`
- Text: `var(--text-secondary)`
- Padding: 0.15rem 0.5rem
- Radius: 4px
- Feel like metadata chips

### Email Capture
- Styled like an app notification opt-in
- Input + button in a contained card
- Card has same styling as project cards
- Button text: "Get updates" (not "Subscribe")

### Navigation
- Sticky header with backdrop blur
- Dark: `rgba(10,10,11,0.8)` + `backdrop-filter: blur(12px)`
- Light: `rgba(250,250,249,0.8)` + `backdrop-filter: blur(12px)`
- Logo/name left, nav links center-right, theme toggle far right
- Border-bottom: 1px solid `var(--border)`

### Footer
- Minimal — copyright + social links
- Same border-top treatment as nav border-bottom
- Social links as icon-text pairs

## 5. Layout Principles

### Spacing
- Base unit: 8px
- Section gaps: 80-100px vertical between major sections
- Card gaps: 12px between project cards
- Inner card padding: 24px

### Container
- Max-width: 1000px
- Padding: 0 1.5rem (desktop), 0 1.25rem (mobile)

### Section Structure
Each section on the homepage is a "screen":
1. **Hero** — The "app splash screen". Name, tagline, social links, stats bar.
2. **Projects** — The "dashboard". Project tiles with status indicators.
3. **Email Capture** — The "notifications" opt-in.
4. **Press/Featured** — The "integrations" — where Lucas has been plugged in.

## 6. Responsive Behavior

### Breakpoints
- Mobile: < 640px
- Tablet: 640-1024px
- Desktop: > 1024px

### Mobile Adjustments
- Display: 48px → 28px
- H1: 36px → 24px
- Nav: hamburger dropdown with backdrop blur
- Project cards: full-width, slightly reduced padding
- Stats bar: 2x2 grid instead of 4-across
- Email form: stacked (input above button)
- Footer: centered, stacked

## 7. Do's and Don'ts

### Do
- Use dark mode as the default — it's the native state
- Make every section feel like a screen in an app
- Use status badges and version-style language
- Use "Get updates" not "Subscribe", "Follow" not "Bookmark"
- Keep the accent blue as the ONLY saturated color in the chrome
- Use whisper borders (0.08 opacity) — never heavy borders
- Respect the 1000px container — content should never feel cramped or sprawling
- Apply negative letter-spacing on all headings

### Don't
- Don't make it feel like a blog or a resume
- Don't use multiple accent colors in the UI chrome
- Don't use pure white (#fff) text on dark mode — use #f5f5f4
- Don't use pure black (#000) backgrounds — use #0a0a0b
- Don't skip the theme toggle — both modes are part of the brand
- Don't use heavy shadows — depth comes from border luminance and surface stepping
- Don't make cards feel like they're floating — they should feel embedded, tappable
