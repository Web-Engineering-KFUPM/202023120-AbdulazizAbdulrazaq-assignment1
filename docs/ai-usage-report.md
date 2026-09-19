# AI Usage Report

## 1. Tools used and use cases

| Tool | How I used it |
|------|---------------|
| **Claude (Anthropic), in the Claude desktop app** | Main assistant for the whole assignment: turning the rubric into a checklist, generating the first version of the HTML, CSS and JavaScript, drawing the SVG placeholder images, drafting the README and the technical documentation, and running automated browser tests |
| **Playwright (driven through Claude)** | Automated testing: loading the page at desktop, tablet and phone widths, taking screenshots, and checking the theme toggle, the mobile menu and the form validation |

Specific use cases:

1. **Requirements to checklist.** I gave Claude the assignment guidelines and rubric and used the
   result as a checklist: three required sections, at least two projects, a form with three fields,
   responsive layout, at least one JavaScript feature, and the two documentation files.
2. **Code generation.** Claude produced the page structure, the stylesheet (theme variables,
   Grid/Flexbox layout, three breakpoints) and the script (greeting, theme toggle, mobile menu,
   active links, form validation).
3. **Testing and debugging.** Claude ran the site in a headless browser at 1366, 820 and 390 px,
   looked at the screenshots and checked the console for errors.
4. **Documentation support.** Claude drafted the README, this report and the technical documentation.

## 2. Benefits and challenges

**Benefits**

- Much faster start: a working, well-structured first version appeared in minutes, so the time went
  into checking and improving it instead of typing boilerplate.
- Automated screenshots at three screen sizes caught problems I might not have noticed by resizing
  one window by hand.
- The generated code came with comments, which made it easier to read and understand each part.

**Challenges and limitations**

- The AI cannot know my personal details or real projects on its own. The About text and the project
  descriptions had to be based on my actual courses and senior project, not generic filler.
- One screenshot looked wrong (the dark theme appeared grey). The cause was not a bug: the screenshot
  was taken in the middle of the 0.25 s colour transition. This showed me that a test result also
  needs to be read critically.
- AI output can look finished while still hiding small issues, so every feature had to be tested,
  not assumed.

## 3. Learning outcomes

- **CSS custom properties for theming:** dark mode only needs to redefine a few variables instead of
  duplicating styles for every component.
- **Avoiding the theme "flash":** a small inline script in `<head>` applies the saved theme before
  the page is drawn; putting it at the end of the body causes a white flash.
- **Defensive `localStorage` use:** storage can throw in private browsing, so reads and writes are
  wrapped in `try / catch`.
- **Accessible forms:** labels, `aria-live` error messages, `aria-invalid`, and moving focus to the
  first invalid field.
- **`IntersectionObserver`** for highlighting the current section without listening to every scroll event.
- **Workflow:** generate, then test at several screen sizes, then fix. Treat AI as a fast first-draft
  writer and reviewer, not as the final authority.

## 4. Responsible use and modifications

- **Reviewed, not copied blindly.** Every file was read and each feature was tested in the browser
  before it was committed.
- **Fixes that came from testing:**
  - In dark mode the primary button had white text on a light mint colour, which was hard to read. A
    new `--on-accent` colour variable was added so the button text is dark in dark mode.
  - `localStorage` access is wrapped in `try / catch` so the page still works in private-browsing
    mode, where storage can be blocked.
- **Content kept honest.** The projects describe work from my own studies (the SWE 363 team project,
  my senior design project and a facility-planning model from ISE 422); nothing is invented.
- **Placeholder images** are original simple SVG drawings, not copied from other websites.
- **Academic integrity.** AI use is allowed for this assignment and is fully disclosed here and in the
  README. I understand the code and can explain every part of it.
