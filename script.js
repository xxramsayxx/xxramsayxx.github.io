(() => {
  "use strict";

  const splash = document.getElementById("splash");
  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector(".nav");
  const yearEl = document.getElementById("year");

  // Footer year
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Splash — short, dismissible
  const hideSplash = () => {
    if (!splash || splash.classList.contains("hide")) return;
    splash.classList.add("hide");
    splash.setAttribute("aria-hidden", "true");
  };

  if (splash) {
    const timer = setTimeout(hideSplash, 1600);
    splash.addEventListener("click", () => {
      clearTimeout(timer);
      hideSplash();
    });
    // Keyboard: Escape or Enter dismisses
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
          clearTimeout(timer);
          hideSplash();
        }
      },
      { once: true }
    );
  }

  // Header shadow on scroll
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    if (header) {
      header.classList.toggle("scrolled", y > 12);
    }
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close after navigating
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // Smooth anchor offset is handled via CSS scroll-padding-top
  // Extra polish: prevent default jump if needed for older browsers
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });

  // Reveal sections / cards on scroll
  const revealTargets = document.querySelectorAll(
    ".section-header, .about-grid, .skill-card, .project-card, .contact-intro, .contact-card, .hero-content"
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("visible"));
  }

  // Stagger skill / project cards slightly
  document.querySelectorAll(".skills-grid .skill-card, .projects-grid .project-card").forEach((card, i) => {
    card.style.transitionDelay = `${Math.min(i * 0.05, 0.35)}s`;
  });
})();
