# Diversified Plus Typography System

## Design Direction

Diversified Plus should feel architectural, capable, and precise. Typography is restrained and editorial: large headings create confidence, compact labels create structure, and body copy stays practical and easy to scan. The system uses one family—Plus Jakarta Sans—to keep the many page templates visually consistent.

The visual voice is:

- **Architectural:** square edges, strong alignment, disciplined spacing.
- **Premium:** generous scale and whitespace without decorative excess.
- **Direct:** short headings, plain language, and clear calls to action.
- **Human:** readable body copy and moderate weights rather than heavy, compressed type.

## Selected Design Reference

The typography direction is informed by [OH Architecture](https://www.details.so/inspo/oharchitecture-xevhnv), selected through Details for its editorial architecture layout. The adaptation uses the reference's typographic contrast—not its branding, copy, imagery, or exact composition.

Reference manifest:

| Scope | Details ID | Evidence used |
| --- | --- | --- |
| Typography system | `Y0VPNY276UbNgPlkXevHnv` | Oversized sans-serif statements, compact utility labels, black-and-white hierarchy, image inserted into the typographic grid, and large whitespace fields |

The Diversified Plus translation preserves four principles:

1. **Type establishes the grid.** Major statements align to the same content edges as images and body copy.
2. **Scale creates hierarchy before color.** Navy, cool grey, cream, and white support the hierarchy but do not replace it.
3. **Images interrupt type intentionally.** A project image may occupy a measured opening in a display composition; it never floats decoratively over text.
4. **Utility text stays compact.** Navigation, project metadata, and buttons remain small and controlled beside very large statements.

The reference's uppercase display treatment is limited to section-scale architectural statements and project index headings. Service names, page titles, article titles, navigation, buttons, and body copy remain in sentence case for clarity.

## Font Family

### Primary family

**Plus Jakarta Sans** is used for all interface, editorial, navigation, and marketing text.

```css
--font-sans: "Plus Jakarta Sans", system-ui, -apple-system,
  BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Load only the weights the system uses:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
  rel="stylesheet"
>
```

### Fallback behavior

If the web font is unavailable, the system font stack must preserve the layout without hiding text. Avoid fixed-height text containers, especially around headlines and buttons.

## Weight Roles

| Weight | Name | Use |
| --- | --- | --- |
| 400 | Regular | Body copy, descriptions, article text, large display headings |
| 500 | Medium | Navigation, buttons, card titles, metadata, emphasized body text |
| 600 | Semibold | Small labels, compact UI, form labels, occasional high-priority headings |

Do not use weights 300, 700, or 800 in the redesigned system. Weight 300 becomes too fragile over imagery, while 700–800 makes the brand feel promotional rather than architectural.

## Type Tokens

The following tokens are the canonical scale. Use `clamp()` for display sizes and fixed rem values for reading sizes.

```css
:root {
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;

  --type-display-xl: clamp(3.5rem, 7vw, 6.75rem);
  --type-statement: clamp(4rem, 10vw, 9.5rem);
  --type-display-lg: clamp(2.75rem, 5.2vw, 5rem);
  --type-heading-1: clamp(2.5rem, 4.4vw, 4.25rem);
  --type-heading-2: clamp(2rem, 3.4vw, 3.25rem);
  --type-heading-3: clamp(1.5rem, 2.2vw, 2rem);
  --type-heading-4: 1.25rem;
  --type-lead: clamp(1.125rem, 1.5vw, 1.375rem);
  --type-body-lg: 1.0625rem;
  --type-body: 1rem;
  --type-body-sm: 0.875rem;
  --type-label: 0.75rem;
  --type-micro: 0.6875rem;
}
```

No public-facing text should render below 11px. Ten-pixel text should be removed or promoted to the micro token. Long-form body copy should never be smaller than 16px.

## Hierarchy

### Display XL

- **Use:** oversized brand statements and rare closing moments.
- **Size:** `clamp(56px, 7vw, 108px)`.
- **Weight:** 400.
- **Line height:** 0.96.
- **Letter spacing:** `-0.045em`.
- **Maximum:** one instance per page.
- **Line length:** 8–18 characters per line when possible.

### Architectural Statement

- **Use:** section-scale service names and project index headings.
- **Size:** `clamp(64px, 10vw, 152px)`.
- **Weight:** 400–500.
- **Line height:** 0.86–0.92.
- **Letter spacing:** `-0.055em`.
- **Case:** uppercase.
- **Maximum:** one statement composition per page.
- **Layout:** align every line to the content grid; an image may occupy a deliberate rectangular opening between lines.
- **Mobile:** move the integrated image below the statement and restore line height to 0.94.
- **Rule:** use concrete language such as “KITCHEN RENOVATIONS” or “FEATURED PROJECTS,” never a slogan.

### Display Large / Hero H1

- **Use:** primary page headline.
- **Size:** `clamp(44px, 5.2vw, 80px)`.
- **Weight:** 400 or 500 over complex photography.
- **Line height:** 0.98–1.04.
- **Letter spacing:** `-0.04em`.
- **Maximum width:** 12–16 characters per line or approximately 760px.
- **Case:** sentence case only.
- **Rule:** keep to two lines on desktop and three lines on small screens.

### Heading 1

- **Use:** interior page title when the hero is compact.
- **Size:** `clamp(40px, 4.4vw, 68px)`.
- **Weight:** 400.
- **Line height:** 1.02.
- **Letter spacing:** `-0.035em`.

### Heading 2

- **Use:** section headings.
- **Size:** `clamp(32px, 3.4vw, 52px)`.
- **Weight:** 400–500.
- **Line height:** 1.08.
- **Letter spacing:** `-0.03em`.
- **Spacing:** 24–32px below before supporting copy or content.

### Heading 3

- **Use:** card groups, project titles, service titles, and article subsections.
- **Size:** `clamp(24px, 2.2vw, 32px)`.
- **Weight:** 500.
- **Line height:** 1.15.
- **Letter spacing:** `-0.02em`.

### Heading 4 / Card title

- **Use:** compact card titles and list headers.
- **Size:** 20px.
- **Weight:** 500–600.
- **Line height:** 1.25.
- **Letter spacing:** `-0.012em`.

### Lead copy

- **Use:** hero support copy and section introductions.
- **Size:** `clamp(18px, 1.5vw, 22px)`.
- **Weight:** 400.
- **Line height:** 1.5.
- **Letter spacing:** `-0.01em`.
- **Maximum width:** 620px or 32–42 words.

### Body large

- **Use:** prominent explanations and article introductions.
- **Size:** 17px.
- **Weight:** 400.
- **Line height:** 1.65.
- **Maximum width:** 68 characters.

### Body

- **Use:** default paragraphs, card descriptions, form help, and lists.
- **Size:** 16px.
- **Weight:** 400.
- **Line height:** 1.6.
- **Maximum width:** 60–72 characters for long reading; 45–60 characters in cards.

### Body small

- **Use:** metadata, supporting details, footer copy, and secondary UI.
- **Size:** 14px.
- **Weight:** 400–500.
- **Line height:** 1.5.
- **Rule:** do not use for core page copy.

### Eyebrow / Label

- **Use:** section category, project type, form label, and compact navigation label.
- **Size:** 12px.
- **Weight:** 600.
- **Line height:** 1.2.
- **Letter spacing:** `0.14em`.
- **Case:** uppercase.
- **Color:** navy on light surfaces; soft white on navy.
- **Rule:** one short phrase, ideally under 24 characters.

### Micro text

- **Use:** legal text and unavoidable interface annotations only.
- **Size:** 11px.
- **Weight:** 500.
- **Line height:** 1.45.
- **Letter spacing:** `0.04em` where uppercase.

## Component Typography

### Navigation

- Desktop links: 14px / 500 / `0.01em`.
- Mega-menu category labels: 11–12px / 600 / uppercase / `0.14em`.
- Mega-menu titles: 18–20px / 500 / 1.25.
- Mobile navigation: 24–28px / 400 / 1.2.
- Keep labels on one line; do not reduce below 14px to make them fit.

### Buttons and calls to action

- Size: 14px.
- Weight: 600.
- Line height: 1.
- Letter spacing: `0.03em`.
- Case: title case or sentence case, never full uppercase.
- Minimum height: 48px; horizontal padding 22–28px.
- Labels use a verb and object: “Start Your Project,” not “Learn More.”

### Cards

- Category label: eyebrow token.
- Title: Heading 4, or Heading 3 for large editorial cards.
- Description: 15–16px / 1.55.
- Metadata: 12–14px / 500.
- Keep the title to two lines and description to three lines when cards align in a row.

### Forms

- Labels: 13px / 600 / `0.02em`, sentence case.
- Inputs: 16px / 400 / 1.4 to prevent mobile browser zoom.
- Help and errors: 13px / 500 / 1.4.
- Button: standard button token.
- Placeholder text is supplementary; it never replaces a visible label.

### Articles

- Article title: Heading 1.
- Deck: Lead copy.
- Body: 17px / 1.7, maximum 68 characters.
- H2: 32–44px / 1.12 with 64–80px top margin.
- H3: 24–30px / 1.2 with 40–48px top margin.
- Captions or source notes: 13px / 1.5.
- Lists share the body size and line height, with 10–12px between items.

### Footer

- Footer headings: 12px / 600 / uppercase / `0.14em`.
- Footer links: 13–14px / 500 / `0.04em`.
- Legal copy: 11–12px / 400 / 1.5.
- Large brand wordmark: Display XL rules, if used.

## Responsive Behavior

### Large screens: 1200px and above

- Use the top of each `clamp()` range only when the container can preserve the target line length.
- Hero copy should occupy 6–8 columns of a 12-column grid.
- Section headings should usually occupy no more than 8 columns.

### Tablets: 768px–1199px

- Preserve weight and line-height; let fluid type scale down naturally.
- Reduce extreme negative tracking by approximately `0.005em` if wrapping becomes cramped.
- Body text remains 16–17px.

### Mobile: below 768px

- Hero H1: minimum 40–44px with no more than three lines.
- H2: minimum 30–32px.
- Body remains 16px.
- Buttons remain 14px with a 48px minimum height.
- Eyebrows remain 12px; shorten the wording rather than shrinking it.
- Remove manual `<br>` elements that force poor mobile wrapping.

## Spacing Relationships

Typography should establish the vertical rhythm:

| Relationship | Space |
| --- | --- |
| Eyebrow to heading | 14–18px |
| Heading to lead | 20–28px |
| Heading to body | 18–24px |
| Paragraph to paragraph | 16–20px |
| Body to button | 28–36px |
| H2 to section content | 32–48px |
| H3 to supporting copy | 12–16px |

Use the larger value for wide screens and large display text; use the smaller value for compact cards and mobile layouts.

## Color and Contrast

The redesigned palette removes orange entirely.

| Token | Value | Role |
| --- | --- | --- |
| Navy | `#0F172A` | Primary text, dark sections, buttons |
| Slate grey | `#68717D` | Accent fields, labels, active states, graphic marks |
| Deep slate | `#4F5968` | Hover and pressed states for grey controls |
| Soft slate | `rgba(104, 113, 125, 0.72)` | Secondary rules and quiet interaction states |
| Cream | `#F4F2EE` | Warm page surface |
| White | `#FFFFFF` | Content surface and text on dark colors |

- Body text uses navy on cream or white.
- White may be used on navy and slate grey.
- Slate grey should support navy, never replace primary navy brand surfaces.
- Use deep slate for hover states instead of introducing a second accent hue.
- Muted text must retain at least WCAG AA contrast; opacity should not be the only way hierarchy is created.
- Links are identified by color plus underline or motion, never color alone.

## Editorial Rules

- Use sentence case for headings, buttons, and navigation, except the governed Architectural Statement style.
- Reserve uppercase for labels, eyebrows, compact footer headings, and utility metadata.
- Avoid italics except for editorial emphasis or quoted titles.
- Do not center long paragraphs. Centered copy should remain under three short lines.
- Avoid widows in large headings; use intentional max-widths before adding manual line breaks.
- Do not apply outlines, gradients, shadows, or strokes to text.
- Do not mix serif fonts into isolated testimonials or decorative quotes.
- Do not use a different font for numbers, statistics, or project metadata.

## Accessibility and Quality Checks

- Base body size is 16px or larger.
- Input text is 16px or larger on mobile.
- Text contrast meets WCAG AA: 4.5:1 for standard text and 3:1 for large text.
- Zooming to 200% must not clip headings, controls, or navigation.
- Text containers grow with content and translated copy.
- Focus states remain visible and are not obscured by fixed headers.
- Font loading uses `display=swap` so text is always visible.
- Prefer real text over text embedded in images or SVGs.

## Reference CSS

```css
body {
  color: #0f172a;
  font-family: var(--font-sans);
  font-size: var(--type-body);
  font-weight: 400;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  text-wrap: balance;
}

h1 {
  font-size: var(--type-display-lg);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.04em;
}

h2 {
  font-size: var(--type-heading-2);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

h3 {
  font-size: var(--type-heading-3);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

p {
  max-width: 68ch;
}

.eyebrow {
  color: #0f172a;
  font-size: var(--type-label);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
```

## Migration Priorities

1. Consolidate repeated font imports into one optimized Plus Jakarta Sans request per page.
2. Replace 9–10px labels with the 11–12px micro or label token.
3. Reduce the number of one-off sizes by mapping each declaration to this scale.
4. Remove weight 300 from copy over images and weight 700–800 from display headings.
5. Standardize hero, section, card, navigation, and footer styles across all page templates.
6. Test headline wrapping at 1440px, 1024px, 768px, 390px, and 320px.

## Scroll-Triggered Header Reveal

Selected section headers use a restrained reveal adapted from [Andrea Diego Studio](https://www.details.so/inspo/andreadiego-879ivb) through Details reference `JGe9LDi3hImI3zRq879iVb`.

- Apply only to selected `h2` section headers, never hero headings or footer utility headings.
- Start at `opacity: 0`, `translateY(0.7em)`, and a bottom-up clipping mask.
- Reveal once when 12% of the heading intersects the viewport with a 12% lower viewport offset.
- Use a 700–900ms `cubic-bezier(0.22, 1, 0.36, 1)` transition.
- Immediately reveal headings already visible on initial load.
- Disable all hidden states and transitions under `prefers-reduced-motion: reduce`.
- Preserve native scrolling; do not add smooth-scroll ownership or scroll-jacking.
