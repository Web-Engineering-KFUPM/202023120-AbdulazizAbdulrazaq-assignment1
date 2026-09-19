# AI Usage Report

## 1. Tools used and use cases

| Tool | What I used it for |
|------|--------------------|
| **Claude (Anthropic)** | My main AI assistant. I used it to break the assignment rubric into a checklist, to get a first draft of the HTML, CSS and JavaScript, to draw simple SVG placeholder images, to help me write the documentation, and to review the finished work against the rubric. |
| **Playwright (run through Claude)** | Testing the site automatically at desktop, tablet and phone sizes and checking the console for errors. |

How I used them, step by step:

1. **Planning.** I gave Claude the assignment guidelines and asked it to turn them into a
   checklist. I used that list to make sure nothing was missing: About, Projects, Contact, responsive
   layout, at least one JavaScript feature, README and the two docs.
2. **First draft of the code.** I told Claude which sections and features the site needed, and it
   produced the first version of the page, the styles and the script.
3. **Testing.** I had the site tested at 1366, 820 and 390 px wide, looked at the screenshots, and
   checked that the theme toggle, the mobile menu and the form all worked.
4. **Documentation.** Claude helped me structure the README and the technical documentation, and I
   edited the content to match what the site actually does.
5. **Final review.** Before submitting, I asked Claude to check every requirement in the guidelines
   one by one and to point out anything missing or inaccurate.

### Examples of what I asked

These are the main instructions I gave during the work (shortened):

- "Build my portfolio for this assignment and follow the guidelines and rubric exactly."
- "Replace the projects with my senior design project and our Qur'an associations product at my company."
- "Check that everything meets the requirements and the rubric exactly. I don't want anything missing."
- "Is it safe to name the AI tool in the report?" (I checked the guidelines: naming the tool is
  required, and AI use is allowed.)

## 2. Benefits and challenges

**What helped**

- I got a working, well-organized starting point quickly, so I spent my time checking and improving
  the site instead of writing boilerplate.
- Testing at three screen sizes showed layout problems I would probably have missed by only
  resizing one browser window.
- The code comments made it easier for me to follow what each part does.

**What was difficult**

- The AI does not know me. The About text and the projects had to come from my real work (my senior
  project and my company's product); I had to give it that information myself.
- One screenshot showed the dark theme as grey. It turned out it was taken halfway through the colour
  transition, not a real bug. I learned not to trust a test result without understanding it.
- Code from AI can look finished and still have small problems, so I had to test every feature.

## 3. What I learned

- **CSS variables for themes:** dark mode only changes a few variables instead of repeating styles.
- **Why the theme script is in `<head>`:** it sets the saved theme before the page is drawn, so there
  is no white flash for users who chose dark mode.
- **Safe use of `localStorage`:** it can fail in private browsing, so it is wrapped in `try / catch`.
- **Accessible forms:** labels, error messages read by screen readers (`aria-live`), and moving focus
  to the first field with an error.
- **`IntersectionObserver`:** a simple way to highlight the menu link of the section on screen.

**In my own words:** The biggest lesson for me is that working with AI is like managing any process.
It gives you a fast first draft, but you still need a clear checklist and real testing before you
accept the output. I also learned that using AI is not the problem; hiding it is. The course asks
for transparency, so I document exactly how I used it.

## 4. Responsible use and my changes

- **I reviewed the work before submitting it.** I went through the files and tested each feature in
  the browser.
- **Problems I caught and fixed:**
  - In dark mode the main button had white text on a light green background, which was hard to read.
    An `--on-accent` colour was added so the button text becomes dark in dark mode.
  - The first version described one project as already "built" when it is still in progress. I
    corrected it, because a portfolio should not claim something that is not done yet.
  - I removed two placeholder images that were no longer used after I changed the projects, so the
    repository has no leftover files.
  - The first draft of this report said I did some steps myself that the AI actually did. I rewrote
    those lines so the report describes the real workflow.
  - `localStorage` is wrapped in `try / catch` so the page still works in private browsing.
- **Real content only.** Both projects are my own work: my senior design project and Ala Makth, a
  non-profit product I am building at my company, Optimal X.
- **Original images.** The placeholders are simple SVG drawings made for this site, not copied from
  other websites.

**What I would change next:** Right now the project cards are written directly in `index.html`.
Next time I would move them into a small JSON file and build the cards with JavaScript, so I can add
a new project without touching the HTML. I would also replace the placeholder images with real
screenshots, starting with the inventory system once our team finishes it.

## 5. Innovation: using AI as a reviewer, not only a code generator

Most of the value did not come from generating code. It came from using AI as a quality check:

- **Rubric audit.** I had the AI compare the final repository against every line of the guidelines
  and produce a pass / fail list, the same way an engineer checks a product against a specification.
- **Automated device testing.** Instead of resizing one browser window, the site was tested
  automatically at three screen sizes with screenshots and a console-error check after each change.
- **Honesty check.** I asked for a review of every claim in the site and the docs, which caught the
  "built" project and the inaccurate lines in this report.

- **Academic integrity.** AI tools are allowed in this assignment, and I have disclosed how I used
  them here and in the README. I understand the code and can explain any part of it.
