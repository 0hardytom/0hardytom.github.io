// Small progressive enhancements; the page works without any of this.

const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const hero = document.querySelector(".hero");

// Nav turns solid once the hero has scrolled away.
if (nav && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(
    ([entry]) => nav.classList.toggle("is-solid", !entry.isIntersecting),
    { rootMargin: "-64px 0px 0px 0px" }
  ).observe(hero);
}

// Mobile menu.
if (nav && toggle) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll(".nav__links a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
}

// Highlight the section currently in view.
const links = [...document.querySelectorAll('.nav__links a[href^="#"]')];
const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
if (sections.length && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          if (a.getAttribute("href") === `#${entry.target.id}`) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

// Gallery lightbox.
const lightbox = document.querySelector("[data-lightbox]");
if (lightbox && typeof lightbox.showModal === "function") {
  const big = lightbox.querySelector("img");
  document.querySelectorAll("[data-gallery] button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      lightbox.showModal();
    });
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target !== big) lightbox.close();
  });
}

// Bio switcher: Overview / Astrophysics / Music. #bio-astro or #bio-music in the URL opens that bio.
const about = document.querySelector("[data-bio-mode]");
const tabs = [...document.querySelectorAll("[data-bio]")];
if (about && tabs.length) {
  const select = (mode, focus = false) => {
    tabs.forEach((tab) => {
      const on = tab.dataset.bio === mode;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      document.getElementById(tab.getAttribute("aria-controls")).hidden = !on;
      if (on && focus) tab.focus();
    });
    about.dataset.bioMode = mode;
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      select(tab.dataset.bio);
      history.replaceState(null, "", tab.dataset.bio === "both" ? "#about" : `#bio-${tab.dataset.bio}`);
    });
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      tabs[(i + step + tabs.length) % tabs.length].click();
      tabs[(i + step + tabs.length) % tabs.length].focus();
    });
  });
  const fromHash = () => {
    const mode = location.hash.match(/^#bio-(astro|music)$/)?.[1];
    if (!mode) return;
    select(mode);
    about.scrollIntoView();
  };
  fromHash();
  window.addEventListener("hashchange", fromHash);

  const copy = document.querySelector("[data-bio-copy]");
  copy?.addEventListener("click", async () => {
    const panel = document.getElementById(`bio-panel-${about.dataset.bioMode}`);
    const text = [...panel.querySelectorAll("p")].map((p) => p.textContent.replace(/\s+/g, " ").trim()).join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      copy.textContent = "Copied ✓";
    } catch {
      copy.textContent = "Couldn't copy, select the text instead";
    }
    setTimeout(() => (copy.textContent = "Copy this bio"), 2000);
  });
}

// Email address is kept out of the HTML; the mailto link is only assembled on click.
document.querySelectorAll("[data-email]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const [user, domain] = a.dataset.email.split("|");
    location.href = `mailto:${user}@${domain}`;
  });
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
