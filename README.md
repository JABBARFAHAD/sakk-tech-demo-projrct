# SAKK Tech — Enterprise Website

Premium enterprise-level website for **SAKK Tech**, a technology consultancy.  
Built with **React 18 + Vite 5 + Tailwind CSS 3**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build
npm run preview
```

---

## 📁 Project Structure

```
sakk-tech/
├── public/
│   └── favicon.svg               # SVG favicon (hexagon S logo)
├── src/
│   ├── assets/                   # Static assets (images, fonts, etc.)
│   ├── components/
│   │   ├── Logo.jsx              # SVG logo mark + wordmark
│   │   ├── Navbar.jsx            # Fixed nav with scroll detection & mobile drawer
│   │   ├── Hero.jsx              # Full-screen hero with animated grid + orbs
│   │   ├── Services.jsx          # 12-card expandable service grid
│   │   ├── ServiceCard.jsx       # Individual service card with toggle
│   │   ├── Process.jsx           # 6-step horizontal timeline
│   │   ├── WhyUs.jsx             # 4 enterprise feature blocks
│   │   ├── CaseStudies.jsx       # 3 portfolio cards
│   │   ├── Testimonials.jsx      # Auto-scrolling infinite testimonial marquee
│   │   ├── Contact.jsx           # Split contact form + info panel
│   │   ├── Footer.jsx            # 4-column footer with socials
│   │   └── GoldDivider.jsx       # Decorative gold divider
│   ├── hooks/
│   │   ├── useScrollReveal.js    # IntersectionObserver for fade-up reveal
│   │   ├── useNavScroll.js       # Detect page scroll for navbar styling
│   │   └── useProcessReveal.js   # Staggered process step reveal
│   ├── utils/
│   │   └── data.js               # All site copy / content data
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Tailwind directives + global styles
│   └── main.jsx                  # React DOM entry
├── index.html                    # HTML shell (fonts loaded here)
├── vite.config.js                # Vite config (path aliases, build)
├── tailwind.config.js            # Tailwind theme (colors, fonts, animations)
├── postcss.config.js             # PostCSS (Tailwind + Autoprefixer)
├── .eslintrc.cjs                 # ESLint rules
├── .gitignore
└── package.json
```

---

## 🎨 Design System

| Token               | Value                          |
|---------------------|--------------------------------|
| **Gold**            | `#D4AF37`                      |
| **Gold Light**      | `#E8C84A`                      |
| **Background**      | `#0B0B0B`                      |
| **Surface**         | `#111111` / `#181818`          |
| **Text**            | `#F4F1EA`                      |
| **Display Font**    | Playfair Display (serif)       |
| **Body Font**       | DM Sans (sans-serif)           |

### Tailwind Custom Classes (defined in `index.css`)

| Class                | Purpose                                    |
|----------------------|--------------------------------------------|
| `.noise-overlay`     | Fixed grain texture over the entire page   |
| `.gold-divider`      | Full-width 1px gold gradient line          |
| `.section-tag`       | Small uppercase gold label with line       |
| `.section-heading`   | Large Playfair Display heading             |
| `.btn-gold`          | Gold filled CTA button with shine effect   |
| `.btn-outline`       | Ghost button with gold hover               |
| `.card-hover`        | Card with bottom gold line + dim bg hover  |
| `.reveal`            | Scroll-triggered fade-up animation base    |
| `.border-reveal`     | Card with animated left gold border        |
| `.animated-grid`     | Drifting gold grid background              |
| `.testimonial-track` | Infinite scroll testimonial row            |
| `.process-line`      | Horizontal connector for process steps     |

---

## 🔧 Custom Hooks

### `useScrollReveal(options?)`
Attaches an `IntersectionObserver` to the returned `ref`. Adds class `visible`
when the element enters the viewport. Combines with the `.reveal` CSS class for
the fade-up animation effect.

```jsx
const ref = useScrollReveal({ threshold: 0.1 })
return <div ref={ref} className="reveal">...</div>
```

### `useNavScroll(threshold?)`
Returns `{ scrolled }` — `true` when page scrolled past the threshold (default 60px).
Used to intensify the navbar background on scroll.

```jsx
const { scrolled } = useNavScroll(60)
```

### `useProcessReveal(delay?)`
Stagger-reveals all `.proc-step` children inside the observed element with a
configurable delay (default 130ms) between each step.

```jsx
const ref = useProcessReveal(130)
return <div ref={ref}>...</div>
```

---

## 📄 Content Management

All site content lives in **`src/utils/data.js`** as plain JS arrays/objects.  
To update copy, add a service, or change a case study — edit only that file.

```js
// Example: add a new service
export const SERVICES = [
  ...
  {
    id: 'blockchain',
    icon: '⛓️',
    name: 'Blockchain & Web3',
    blurb: 'Decentralized solutions for the next generation of business.',
    items: ['Smart Contract Development', 'DeFi Protocols', ...],
  },
]
```

---

## 📦 Key Dependencies

| Package              | Version  | Purpose                        |
|----------------------|----------|-------------------------------|
| `react`              | ^18.2.0  | UI framework                  |
| `react-dom`          | ^18.2.0  | DOM renderer                  |
| `react-scroll`       | ^1.9.0   | Smooth scroll utilities        |
| `vite`               | ^5.0.8   | Build tool & dev server        |
| `@vitejs/plugin-react` | ^4.2.0 | React fast-refresh plugin     |
| `tailwindcss`        | ^3.4.1   | Utility-first CSS framework    |
| `autoprefixer`       | ^10.4.17 | CSS vendor prefixes            |
| `postcss`            | ^8.4.33  | CSS transformations            |

---

## 🛠 Extending the Project

### Add a new page section
1. Create `src/components/MySection.jsx`
2. Import and use `useScrollReveal` for scroll animations
3. Add your data to `src/utils/data.js`
4. Import in `src/App.jsx` and place between `<GoldDivider />` components
5. Add a nav link in `src/utils/data.js` → `NAV_LINKS`

### Replace the logo
Drop your SVG into `src/components/Logo.jsx` or reference an image in `src/assets/`.

### Change the color scheme
Update the CSS variables in `src/index.css` and the `colors` object in `tailwind.config.js`.

---

## 📋 Browser Support

Targets modern evergreen browsers (Chrome, Firefox, Safari, Edge).  
Uses `IntersectionObserver` (no polyfill needed for target browsers).

---

© 2025 SAKK Tech. All rights reserved.
