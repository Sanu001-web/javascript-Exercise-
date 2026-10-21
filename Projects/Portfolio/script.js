(() => {
  const navigationEntry = performance.getEntriesByType("navigation")[0];
  if (navigationEntry?.type === "reload") {
    history.scrollRestoration = "manual";
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => document.documentElement.style.removeProperty("scroll-behavior"));
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const pageLoader = document.querySelector(".page-loader");
  const heroIntro = document.querySelector(".hero-intro");
  const startHeroIntro = () => heroIntro?.classList.add("animate__fadeInUp");
  if (pageLoader) {
    if (reduceMotion) {
      pageLoader.remove();
    } else {
      pageLoader.addEventListener("animationstart", event => {
        if (event.target === pageLoader) startHeroIntro();
      });
      pageLoader.addEventListener("animationend", event => {
        if (event.target === pageLoader) pageLoader.remove();
      });
    }
  } else {
    startHeroIntro();
  }

  // Animated hero word: motion stays in one place and changes only a short phrase.
  const word = document.querySelector(".type-word");
  const words = ["useful.", "thoughtful.", "responsive.", "human."];
  let wordIndex = 0;
  if (word && !reduceMotion) {
    window.setInterval(() => {
      word.classList.remove("is-entering");
      word.classList.add("is-leaving");
      window.setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        word.textContent = words[wordIndex];
        word.classList.remove("is-leaving");
        word.classList.add("is-entering");
      }, 220);
    }, 2600);
  }

  // Hide the sticky header while scrolling down; reveal it while scrolling up.
  const header = document.querySelector(".site-header");
  let previousScrollY = window.scrollY;
  if (header) {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY - previousScrollY;
      const menuIsOpen = document.querySelector(".menu-toggle")?.getAttribute("aria-expanded") === "true";

      if (Math.abs(direction) > 5 && !menuIsOpen) {
        if (currentScrollY < 100 || direction < 0) {
          header.classList.remove("is-hidden");
        } else {
          header.classList.add("is-hidden");
        }
      }

      previousScrollY = currentScrollY;
    }, { passive: true });
  }

  // Mobile navigation.
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        menuButton.focus();
      }
    });
  }

  // Use the supplied portrait if it loads; otherwise show the designed placeholder.
  const portrait = document.querySelector(".portrait-image");
  if (portrait) {
    const placeholder = document.querySelector(".portrait-placeholder");
    const showPlaceholder = () => {
      portrait.classList.remove("is-loaded");
      if (placeholder) placeholder.hidden = false;
    };
    const showLoadedPortrait = () => {
      if (portrait.naturalWidth > 0) {
        portrait.classList.add("is-loaded");
        if (placeholder) placeholder.hidden = true;
      }
    };
    const tryFallback = () => {
      const fallback = portrait.dataset.fallback;
      if (fallback && !portrait.dataset.triedFallback) {
        portrait.dataset.triedFallback = "true";
        portrait.src = fallback;
      } else {
        showPlaceholder();
      }
    };
    portrait.addEventListener("load", showLoadedPortrait);
    portrait.addEventListener("error", tryFallback);
    if (portrait.complete) {
      if (portrait.naturalWidth > 0) showLoadedPortrait();
      else tryFallback();
    }
  }

  // Small section reveals; content remains visible if IntersectionObserver is unavailable.
  const revealTargets = document.querySelectorAll(".section-heading, .project-card, .about-copy, .band-item, .skill-group, .education-entry, .contact-panel, .info-card, .page-callout, .about-story");
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealTargets.forEach(el => el.classList.add("reveal"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => observer.observe(el));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

})();
