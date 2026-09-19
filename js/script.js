/* ==========================================================================
   Portfolio interactivity
   1. Greeting by time of day
   2. Dark / light theme toggle (remembered in localStorage)
   3. Mobile navigation menu
   4. Highlight the nav link of the section in view
   5. Contact form validation (no backend)
   6. Current year in the footer
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  setGreeting();
  initThemeToggle();
  initMobileNav();
  initActiveLinks();
  initContactForm();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- 1. Greeting by time of day ---------- */
function setGreeting() {
  const hour = new Date().getHours();
  let text = "Good evening!";
  if (hour >= 5 && hour < 12) text = "Good morning!";
  else if (hour >= 12 && hour < 17) text = "Good afternoon!";
  document.getElementById("greeting").textContent = text;
}

/* ---------- 2. Theme toggle ---------- */
function initThemeToggle() {
  const button = document.getElementById("themeToggle");
  const root = document.documentElement;

  // The current theme is the saved one, otherwise whatever the system prefers
  const currentTheme = () =>
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const updateLabel = () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", `Switch to ${next} theme`);
  };

  // Make the icons match the system theme on the first visit
  root.setAttribute("data-theme", currentTheme());
  updateLabel();

  button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage blocked (private mode): the theme still changes for this visit */
    }
    updateLabel();
  });
}

/* ---------- 3. Mobile navigation ---------- */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close the menu after choosing a section
  links.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    })
  );
}

/* ---------- 4. Active link while scrolling ---------- */
function initActiveLinks() {
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  if (!("IntersectionObserver" in window)) return; // older browsers: skip the highlight

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" } // a section counts as "in view" near the middle of the screen
  );

  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
}

/* ---------- 5. Contact form validation ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Each rule returns an error message, or "" when the value is fine
  const rules = {
    name: (value) => (value.length < 2 ? "Please enter your name (at least 2 characters)." : ""),
    email: (value) => (!emailPattern.test(value) ? "Please enter a valid email address." : ""),
    message: (value) => (value.length < 10 ? "Your message should be at least 10 characters." : ""),
  };

  const validateField = (field) => {
    const message = rules[field.name](field.value.trim());
    document.getElementById(`${field.name}Error`).textContent = message;
    field.classList.toggle("invalid", message !== "");
    field.setAttribute("aria-invalid", String(message !== ""));
    return message === "";
  };

  // Re-check a field as soon as the user fixes it
  form.querySelectorAll("input, textarea").forEach((field) =>
    field.addEventListener("input", () => {
      if (field.classList.contains("invalid")) validateField(field);
    })
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // no backend yet, so we handle the form here
    const fields = [...form.querySelectorAll("input, textarea")];
    const allValid = fields.map(validateField).every(Boolean);

    if (!allValid) {
      status.textContent = "";
      fields.find((field) => field.classList.contains("invalid")).focus();
      return;
    }

    const name = form.elements.name.value.trim();
    status.textContent = `Thanks, ${name}! Your message is ready. (This demo has no backend, so nothing was sent.)`;
    form.reset();
  });
}
