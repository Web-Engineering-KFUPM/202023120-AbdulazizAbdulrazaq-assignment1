# Technical Documentation

## 1. Overview

The portfolio is a static, single-page web application. The browser loads `index.html`, which links
one stylesheet (`css/styles.css`) and one script (`js/script.js`). There is no server-side code, no
build tool and no external library, so the page loads fast and runs directly from GitHub Pages.

## 2. Page structure (`index.html`)

| Element | Purpose |
|---------|---------|
| `<header class="site-header">` | Sticky navigation bar: logo, section links, hamburger button, theme toggle |
| `<section id="about">` | Hero area: greeting, name, tagline, introduction, two call-to-action buttons, avatar |
| `<section id="skills">` | Four skill cards in a list (`<ul>`) |
| `<section id="projects">` | Two `<article>` project cards with image, title, description and tags |
| `<section id="contact">` | Contact form with Name, Email and Message fields |
| `<footer>` | Copyright with the current year, GitHub link, back-to-top link |

Accessibility choices:

- A **skip link** lets keyboard users jump straight to the main content.
- Every form field has a `<label>`; error messages use `aria-live="polite"` so screen readers announce them.
- The hamburger and theme buttons update `aria-expanded` / `aria-label` to describe their current state.
- All images have meaningful `alt` text and fixed `width` / `height` to avoid layout shift.

## 3. Styling (`css/styles.css`)

### Theme tokens
All colours are CSS custom properties on `:root` (`--bg`, `--surface`, `--text`, `--muted`,
`--accent`, `--on-accent`, …). Dark mode only redefines these variables, so no component needs
separate dark styles.

Dark mode is applied in two ways:

1. `@media (prefers-color-scheme: dark)` follows the operating-system setting, unless the user picked light.
2. `:root[data-theme="dark"]` is used when the user clicks the toggle.

### Layout
- **Grid** for the hero (text + avatar), the skills cards and the project cards.
- **Flexbox** for the navigation bar, buttons, tags and footer.
- `clamp()` makes the main heading scale smoothly with the screen width.

### Breakpoints

| Width | Layout |
|-------|--------|
| > 900 px (desktop) | Skills in 4 columns, projects side by side, hero side by side |
| 681–900 px (tablet) | Skills and projects in 2 columns |
| ≤ 680 px (mobile) | One column, avatar above the text, links move into a hamburger dropdown |

`prefers-reduced-motion` turns off smooth scrolling and transitions for users who ask for less motion.

## 4. JavaScript (`js/script.js`)

The script runs after the DOM is ready and calls one small function per feature:

| Function | What it does |
|----------|--------------|
| `setGreeting()` | Reads the local hour and shows *Good morning* (5–11), *Good afternoon* (12–16) or *Good evening* |
| `initThemeToggle()` | Switches `data-theme` between `light` and `dark` and saves the choice in `localStorage` |
| `initMobileNav()` | Opens / closes the dropdown menu on phones and closes it after a link is clicked |
| `initActiveLinks()` | Uses `IntersectionObserver` to highlight the menu link of the section in the middle of the screen |
| `initContactForm()` | Validates the form on submit and re-validates a field as the user corrects it |

### Theme persistence
A tiny inline script in `<head>` applies the saved theme **before the first paint**, so a returning
visitor who chose dark mode never sees a white flash. Every `localStorage` call is wrapped in
`try / catch` because storage can be blocked (for example in private browsing); the toggle still
works for the current visit in that case.

### Form validation rules

| Field | Rule | Message |
|-------|------|---------|
| Name | at least 2 characters | "Please enter your name (at least 2 characters)." |
| Email | matches `name@domain.tld` | "Please enter a valid email address." |
| Message | at least 10 characters | "Your message should be at least 10 characters." |

The form uses `novalidate` so the custom messages are shown instead of the browser's default
pop-ups. `event.preventDefault()` stops the page from reloading. Because there is no backend yet, a
valid form shows a confirmation message and is reset.

## 5. Performance

- No frameworks, fonts or libraries are downloaded; the only files are one HTML, one CSS, one JS and three small SVG images.
- Images are SVG (vector), so they stay sharp at every size and weigh only a few kilobytes.
- Project images use `loading="lazy"`, and the script uses `defer` so it never blocks rendering.

## 6. Browser compatibility

The code uses widely supported features: CSS Grid, Flexbox, custom properties, `clamp()`,
`aspect-ratio`, `IntersectionObserver` and ES6. These work in current Chrome, Edge, Firefox and
Safari (desktop and mobile). If `IntersectionObserver` is missing, the active-link highlight is
simply skipped and everything else still works.

## 7. Testing performed

| Test | Result |
|------|--------|
| Desktop 1366 px, tablet 820 px, mobile 390 px | Correct layout, no horizontal scrolling |
| Browser console | No errors or warnings |
| Theme toggle | Switches theme, choice survives a page reload |
| Mobile menu | Opens with ☰, closes after choosing a section |
| Empty form submit | All three error messages appear, focus moves to the first invalid field |
| Valid form submit | Confirmation message appears and the form resets |

## 8. Future improvements

- Connect the contact form to a backend or a form service (later in the course with Node/Express).
- Replace the placeholder images with real project screenshots.
- Load projects from a JSON file so new projects can be added without editing HTML.
