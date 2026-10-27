/* ==========================
   SkillSetu homepage interactions
   ========================== */
(() => {
  "use strict";

  const translations = window.SkillSetuTranslations || { en: {}, hi: {} };
  const demoData = window.SkillSetuDemoData || {};
  const languageToggle = document.querySelector(".language-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  const searchForm = document.querySelector("#hero-search");
  const searchInput = document.querySelector("#search-query");
  const searchCategory = document.querySelector("#search-category");
  const searchFeedback = document.querySelector("#search-feedback");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentLanguage = "en";
  let feedbackTimeout;

  // Replace only translation-keyed text. A small allow-list supports intentional
  // <strong> and <br> formatting used in a few short, authored strings.
  function applyTranslation(element, translatedText) {
    const safeMarkupKeys = ["heroMeta", "visualTitle", "businessTitle"];
    const key = element.dataset.i18n;

    if (safeMarkupKeys.includes(key)) {
      element.innerHTML = translatedText;
      return;
    }

    const decorativeIcon = element.querySelector(":scope > [aria-hidden='true']");
    if (decorativeIcon) {
      element.replaceChildren(document.createTextNode(`${translatedText} `), decorativeIcon);
    } else {
      element.textContent = translatedText;
    }
  }

  function setLanguage(language) {
    currentLanguage = translations[language] ? language : "en";
    document.documentElement.lang = currentLanguage === "hi" ? "hi" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translatedText = translations[currentLanguage][key];
      if (translatedText) applyTranslation(element, translatedText);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const translatedText = translations[currentLanguage][key];
      if (translatedText) element.placeholder = translatedText;
    });

    languageToggle.querySelector(".language-label").textContent = currentLanguage === "en" ? "हिंदी" : "EN";
    languageToggle.querySelector(".language-current").textContent = currentLanguage === "en" ? "EN" : "हिंदी";
    languageToggle.setAttribute("aria-label", currentLanguage === "en" ? "Switch to Hindi" : "Switch to English");

    // Keep the user's choice for their next visit when browser storage is available.
    try {
      localStorage.setItem("skillsetu-language", currentLanguage);
    } catch (error) {
      // The language switch still works if storage is unavailable.
    }
  }

  function showSearchFeedback(message, target) {
    window.clearTimeout(feedbackTimeout);
    searchFeedback.textContent = message;
    searchFeedback.hidden = false;

    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
    }

    feedbackTimeout = window.setTimeout(() => {
      searchFeedback.hidden = true;
    }, 6000);
  }

  function findSearchMatches(query, category) {
    const selectedCategory = category === "learn" ? "learning" : category;
    const categories = selectedCategory === "all" ? Object.keys(demoData) : [selectedCategory];
    const normalizedQuery = query.toLocaleLowerCase().trim();
    const matches = [];

    categories.forEach((categoryName) => {
      const items = Array.isArray(demoData[categoryName]) ? demoData[categoryName] : [];
      items.forEach((item) => {
        const searchableText = [item.title, ...(item.terms || [])].join(" ").toLocaleLowerCase();
        if (searchableText.includes(normalizedQuery)) {
          matches.push({ ...item, category: categoryName });
        }
      });
    });

    return matches;
  }

  function handleSearch(event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    const category = searchCategory.value;
    const languageText = translations[currentLanguage];

    if (!query) {
      showSearchFeedback(languageText.searchNoQuery);
      searchInput.focus();
      return;
    }

    const matches = findSearchMatches(query, category);
    if (matches.length === 0) {
      showSearchFeedback(languageText.searchEmpty);
      return;
    }

    const target = matches[0].target;
    const uniqueSections = [...new Set(matches.map((match) => {
      if (match.category === "learning") return currentLanguage === "hi" ? "सीखना" : "Learning";
      if (match.category === "work") return currentLanguage === "hi" ? "काम" : "Work";
      return currentLanguage === "hi" ? "सेवाएँ" : "Services";
    }))];

    showSearchFeedback(languageText.searchResults + uniqueSections.join(", ") + ".", target);
  }

  function closeMobileMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "hi" : "en");
  });

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isExpanded);
    document.body.classList.toggle("menu-open", !isExpanded);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 780 && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
    }
  });

  searchForm.addEventListener("submit", handleSearch);

  // Reveal sections as they enter view. Content remains visible if the API is unavailable.
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  // Initialize the language from the saved preference when possible.
  let savedLanguage = "en";
  try {
    const storedLanguage = localStorage.getItem("skillsetu-language");
    if (storedLanguage && translations[storedLanguage]) savedLanguage = storedLanguage;
  } catch (error) {
    // Use English as the default when browser storage is unavailable.
  }
  setLanguage(savedLanguage);

  document.querySelector("#current-year").textContent = String(new Date().getFullYear());
})();
