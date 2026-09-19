# Abdulaziz Abdulrazaq – Personal Portfolio (Assignment 1)

A simple, responsive personal portfolio web application built with plain **HTML, CSS and JavaScript**.
It is the starting frame of my professional portfolio for **SWE 363 – Web Engineering & Development (KFUPM, Term 261)**.

**Live site:** https://web-engineering-kfupm.github.io/202023120-AbdulazizAbdulrazaq-assignment1/

---

## Features

| Area | What it does |
|------|--------------|
| **About Me** | Short introduction, a one-line tagline and an avatar image |
| **Skills** | Four skill cards (extra section) |
| **Projects** | Two project cards (my senior design project and Ala Makth), each with a title, description, tags and a placeholder image |
| **Contact** | Form with Name, Email and Message, validated in the browser (no backend) |
| **Greeting** | Says good morning / afternoon / evening based on the visitor's local time |
| **Theme toggle** | Dark / light mode, remembered for the next visit |
| **Navigation** | Sticky header, smooth scrolling, the current section is highlighted, hamburger menu on phones |
| **Responsive** | Multi-column layout on desktop and tablet, one column on mobile |

## Tech stack

- HTML5 (semantic sections, accessible labels)
- CSS3 (custom properties, Flexbox, Grid, media queries); no framework
- Vanilla JavaScript (ES6); no libraries
- Hosted with GitHub Pages

## Project structure

```
├── README.md
├── index.html              # page structure and content
├── css/
│   └── styles.css          # all styling, themes and breakpoints
├── js/
│   └── script.js           # greeting, theme toggle, mobile menu, active links, form validation
├── assets/
│   └── images/             # SVG avatar and project placeholder images
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Setup: run it locally

No build step and no dependencies are needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/Web-Engineering-KFUPM/202023120-AbdulazizAbdulrazaq-assignment1.git
   cd 202023120-AbdulazizAbdulrazaq-assignment1
   ```
2. Open `index.html` in any modern browser (double-click it), **or** serve the folder so the page
   behaves exactly like the live site:
   ```bash
   # Python 3
   python -m http.server 8000
   # then open http://localhost:8000
   ```
   In VS Code you can also use the **Live Server** extension: right-click `index.html` → *Open with Live Server*.

## How to use the site

- Use the top menu (or the ☰ button on a phone) to jump to a section.
- Click the moon / sun button to switch between dark and light mode.
- Fill the contact form and press **Send message**. Empty or invalid fields show a message under
  the field. A valid form shows a confirmation; nothing is actually sent because there is no backend yet.

## Testing

The site was checked at three screen sizes (1366 px, 820 px and 390 px wide) in Chromium, plus
manual checks of the theme toggle, the mobile menu and the form. There is no horizontal scrolling at
any size and the browser console shows no errors. Details are in
[`docs/technical-documentation.md`](docs/technical-documentation.md).

## AI use (summary)

I used **Claude (Anthropic)** as an AI assistant to read the assignment rubric, generate the first
version of the code and documentation, and run automated browser tests at different screen sizes.
I reviewed the output, and the testing led to real fixes (for example the dark-mode button contrast).
The full report is in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Author

**Abdulaziz Abdulrazaq** · Student ID 202023120 · KFUPM
GitHub: [@abdulaziz202023120](https://github.com/abdulaziz202023120)
