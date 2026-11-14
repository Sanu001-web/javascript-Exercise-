(() => {
  const projects = [
    {
      name: "Mishri",
      type: "Live website",
      role: "Built the responsive site and set a warm visual direction to present Mishri’s offerings.",
      tech: "HTML, CSS, JavaScript; responsive design.",
      challenge: "Present the offerings in a way that feels warm and easy to browse.",
      next: "Test the browsing flow on mobile and refine it using visitor feedback.",
      site: "https://mishri.oneapp.dev/",
      screenshots: [
        {
          src: "https://raw.githubusercontent.com/Sanu001-web/javascript-Exercise-/main/Projects/Portfolio/Screenshot%202026-11-14%20142958.png",
          alt: "Mishri website screenshot showing its navbar"
        },
        {
          src: "https://raw.githubusercontent.com/Sanu001-web/javascript-Exercise-/main/Projects/Portfolio/Screenshot%202026-11-14%20143012.png",
          alt: "Another page from the Mishri website"
        },
        {
          src: "https://raw.githubusercontent.com/Sanu001-web/javascript-Exercise-/main/Projects/Portfolio/Screenshot%202026-11-14%20143043.png",
          alt: "Mishri website homepage"
        }
      ],
      github: "https://github.com/Sanu001-web/javascript-Exercise-/tree/main/Projects/Food%20Card"
    },
    {
      name: "Chai & Coffee",
      type: "Live website",
      role: "Built a responsive café site bringing the chai and coffee offerings together.",
      tech: "HTML, CSS, JavaScript; responsive design.",
      challenge: "Balance a cozy visual style with an easy-to-browse menu.",
      next: "Test more screen sizes and refine the menu using visitor feedback.",
      site: "https://chai-coffee18.oneapp.dev/",
      github: "https://github.com/Sanu001-web/javascript-Exercise-/tree/main/Projects/chai-coffee"
    },
    {
      name: "Shaan Lab",
      type: "Live website",
      role: "Built Shaan Lab’s responsive service website with a focused, energetic visual direction.",
      tech: "HTML, CSS, JavaScript; responsive design.",
      challenge: "Make the training and wellness services easy to understand and explore.",
      next: "Review accessibility and mobile usability, then improve service discovery.",
      site: "https://shaanfitness.oneapp.dev/index.html",
      github: "https://github.com/Sanu001-web/javascript-Exercise-/tree/main/Projects/Fitness"
    },
    {
      name: "StudyFlow",
      type: "AI-assisted concept",
      role: "Early-stage study planner concept; no product has been built.",
      tech: "AI-assisted ideation; no build stack yet.",
      challenge: "Offer useful guidance without taking control from learners.",
      next: "Prototype the planning flow and test it with learners.",
      concept: true,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=85"
    },
    {
      name: "SkillSetu",
      type: "Live website",
      role: "Built and launched SkillSetu, a live peer-learning platform connecting learners and teachers.",
      tech: "See the linked source code for implementation details.",
      challenge: "Make it easy for learners and teachers to find each other.",
      next: "Refine onboarding and matching based on user feedback.",
      site: "https://skillsetu.oneapp.dev/",
      github: "https://github.com/Sanu001-web/javascript-Exercise-/tree/main/Projects/SkillSetu"
    }
  ];

  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  const arrowIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>';

  const renderFacts = project => `
    <dl class="project-facts">
      <div><dt>Contribution</dt><dd>${escapeHTML(project.role)}</dd></div>
      <div><dt>${project.concept ? "Tools" : "Tech"}</dt><dd>${escapeHTML(project.tech)}</dd></div>
      <div><dt>Challenge</dt><dd>${escapeHTML(project.challenge)}</dd></div>
      <div><dt>Next</dt><dd>${escapeHTML(project.next)}</dd></div>
    </dl>`;

  const renderScreenshotPreview = project => `
    <div class="project-screenshot-preview" role="group" aria-label="${escapeHTML(`${project.name} website screenshots`)}">
      <div class="screenshot-browser-bar">
        <span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>${escapeHTML(project.name)} · selected screens</span>
        <a href="${escapeHTML(project.site)}" target="_blank" rel="noopener noreferrer" aria-label="Open the ${escapeHTML(project.name)} website">↗</a>
      </div>
      <div class="screenshot-stage">
        ${project.screenshots.slice(0, 1).map(screenshot => `
          <a class="project-shot project-shot-primary" href="${escapeHTML(screenshot.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image: ${escapeHTML(screenshot.alt)}">
            <img src="${escapeHTML(screenshot.src)}" alt="${escapeHTML(screenshot.alt)}" loading="lazy" decoding="async">
          </a>`).join("")}
        <div class="screenshot-thumbnails" role="group" aria-label="More screenshots">
          ${project.screenshots.slice(1).map(screenshot => `
            <a class="project-shot project-shot-thumbnail" href="${escapeHTML(screenshot.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image: ${escapeHTML(screenshot.alt)}">
              <img src="${escapeHTML(screenshot.src)}" alt="${escapeHTML(screenshot.alt)}" loading="lazy" decoding="async">
            </a>`).join("")}
        </div>
      </div>
      <p class="preview-caption">Select a screenshot to open it full size · Visit the live site ↗</p>
    </div>`;

  const renderLivePreview = project => `
    <div class="project-preview" role="group" aria-label="${escapeHTML(`${project.name} live site preview`)}">
      <iframe class="desktop-preview" src="${escapeHTML(project.site)}" title="${escapeHTML(`${project.name} desktop site preview`)}" loading="lazy"></iframe>
      <div class="mobile-preview" aria-label="iPhone-sized preview of the ${escapeHTML(project.name)} website">
        <iframe src="${escapeHTML(project.site)}" title="${escapeHTML(`${project.name} mobile site preview`)}" loading="lazy"></iframe>
      </div>
      <p class="preview-caption">Live site preview · desktop and iPhone-sized views</p>
    </div>`;

  const renderProject = (project, index) => {
    const projectName = escapeHTML(project.name);
    const projectId = `project-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
    const category = project.concept ? "concept" : "website";
    const actionLinks = project.concept
      ? `<a class="case-study-link" href="join-us.html" aria-label="Discuss the ${projectName} concept"><span class="case-study-arrow">${arrowIcon}</span><span class="case-study-label">Discuss the idea</span></a>`
      : `<a class="case-study-link" href="${escapeHTML(project.site)}" target="_blank" rel="noopener noreferrer" aria-label="Visit the ${projectName} website"><span class="case-study-arrow">${arrowIcon}</span><span class="case-study-label">Visit live website</span></a>
         <a class="github-project-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>`;
    const visual = project.concept
      ? `<div class="showcase-cover concept-cover study-cover" role="img" aria-label="A calm study desk with books and a laptop"><img class="image-platform" src="${escapeHTML(project.image)}" alt="" loading="lazy"></div>`
      : project.screenshots ? renderScreenshotPreview(project) : renderLivePreview(project);

    return `
      <article class="showcase-card${project.concept ? " showcase-concept" : ""}" id="${projectId}" data-project-category="${category}">
        <div class="showcase-copy">
          <p class="project-type">${String(index + 1).padStart(2, "0")} — ${escapeHTML(project.type)}</p>
          <h2>${projectName}</h2>
          ${actionLinks}
          ${renderFacts(project)}
        </div>
        ${visual}
      </article>`;
  };

  const list = document.querySelector("#showcase-list");
  if (list) list.innerHTML = projects.map(renderProject).join("");

  const filterButtons = document.querySelectorAll(".project-filter");
  const filterStatus = document.querySelector(".filter-status");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;
      list?.querySelectorAll(".showcase-card").forEach(card => {
        const isVisible = selectedFilter === "all" || card.dataset.projectCategory === selectedFilter;
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });
      filterButtons.forEach(filterButton => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      if (filterStatus) {
        const label = selectedFilter === "all"
          ? `all ${visibleCount} projects`
          : `${visibleCount} ${selectedFilter === "website" ? "websites" : visibleCount === 1 ? "concept" : "concepts"}`;
        filterStatus.textContent = `Showing ${label}`;
      }
    });
  });

  const intro = document.querySelector(".project-hero .projects-intro-copy.hero-intro");
  if (!intro || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const loader = document.querySelector(".page-loader");
  const animateIntro = () => intro.classList.add("animate__fadeInUp");

  if (!loader) {
    animateIntro();
    return;
  }

  const onLoaderAnimationEnd = event => {
    if (event.target !== loader) return;
    loader.removeEventListener("animationend", onLoaderAnimationEnd);
    animateIntro();
  };
  loader.addEventListener("animationend", onLoaderAnimationEnd);
})();
