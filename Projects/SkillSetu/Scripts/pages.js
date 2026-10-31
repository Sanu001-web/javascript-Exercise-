/* Shared directory rendering and interactions for the four guide pages. */
(() => {
  "use strict";

  const pageKey = document.body.dataset.page;
  const page = window.SkillSetuPageData && window.SkillSetuPageData[pageKey];
  const root = document.querySelector("#page-content");
  const toast = document.querySelector("#page-toast");
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let toastTimer;

  if (!page || !root) return;

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  }

  function readSaved(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  }

  function saveToBrowser(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      showToast("Browser storage is unavailable, so this change will not be saved after you leave.");
      return false;
    }
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 5000);
  }

  const actionStorageKeys = {
    plan: "skillsetu-learning-plan",
    interest: "skillsetu-interests",
    contact: "skillsetu-service-requests",
    "save-talent": "skillsetu-talent"
  };

  function cardHTML(item) {
    const saved = readSaved("skillsetu-saved").includes(item.id);
    const actionLabels = { plan: "Add to learning plan", interest: "Save role guide", contact: "Save service checklist", "save-talent": "Save role outline", draft: "Draft saved" };
    const doneLabels = { plan: "Added to learning plan ✓", interest: "Role guide saved ✓", contact: "Checklist saved ✓", "save-talent": "Role outline saved ✓", draft: "Draft saved ✓" };
    const action = item.action || "draft";
    const actionDone = item.saved === true || Boolean(actionStorageKeys[action] && readSaved(actionStorageKeys[action]).includes(item.id));
    return `<article class="directory-card" data-search="${escapeHTML([item.title, item.category, item.organization, item.location, item.pay, item.description, ...(item.tags || [])].join(" ").toLowerCase())}" data-category="${escapeHTML(item.category)}">
      <div class="directory-card-top"><span class="directory-avatar" aria-hidden="true">${escapeHTML(item.icon || "S")}</span><span class="directory-badge">${escapeHTML(item.category)}</span></div>
      <h2>${escapeHTML(item.title)}</h2><p class="directory-org">${escapeHTML(item.organization)}</p>
      <p class="directory-description">${escapeHTML(item.description)}</p>
      <div class="directory-meta"><span>⌖ ${escapeHTML(item.location)}</span><strong>${escapeHTML(item.pay)}</strong></div>
      <div class="directory-tags">${(item.tags || []).map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="directory-actions"><button class="button button-dark" type="button" data-action="${escapeHTML(action)}" data-id="${escapeHTML(item.id)}" ${actionDone ? "disabled" : ""}>${actionDone ? doneLabels[action] : actionLabels[action]}</button><button class="save-button" type="button" data-action="save" data-id="${escapeHTML(item.id)}" aria-pressed="${saved}">${saved ? "♥ Saved" : "♡ Save"}</button></div>
    </article>`;
  }

  const workAside = `<div class="page-hero-aside work-hero-aside"><div class="work-aside-top"><span class="aside-number">YOUR CAREER COMPASS</span><span class="work-aside-status"><span aria-hidden="true"></span> READY WHEN YOU ARE</span></div><div class="work-aside-art" aria-hidden="true"><span class="work-aside-orbit"></span><span class="work-aside-spark">✦</span><span class="work-aside-figure">↗</span><span class="work-aside-tag work-aside-tag-one">YOUR SKILLS</span><span class="work-aside-tag work-aside-tag-two">NEW PATHS</span></div><div class="work-aside-copy"><strong>One next step<br>can change your path.</strong><span>Explore role guides and find a direction that feels right for you.</span></div><a class="work-aside-link" href="#directory-section">Explore role guides <span aria-hidden="true">↘</span></a></div>`;
  const pageHead = `<section class="page-hero"><div class="page-hero-copy"><span class="section-kicker">${escapeHTML(page.eyebrow)}</span><h1>${escapeHTML(page.title)}</h1><p>${escapeHTML(page.intro)}</p><span class="page-feature-label">PRACTICAL GUIDES</span></div>${pageKey === "work" ? workAside : `<div class="page-hero-aside"><span class="aside-number">${escapeHTML(page.number)}</span><strong>Small steps.<br>Real progress.</strong><span>Explore, save, and take a next step at your pace.</span></div>`}</section>`;
  const stats = pageKey === "work"
    ? `<div class="page-stats"><div><strong>${page.items.length}</strong><span>role guides</span></div><div><strong>${page.options.length - 1}</strong><span>work types</span></div><div><strong>Flexible</strong><span>career paths</span></div></div>`
    : pageKey === "learn"
      ? `<div class="page-stats"><div><strong>${page.items.length}</strong><span>practical paths</span></div><div><strong>${page.options.length - 1}</strong><span>skill areas</span></div><div><strong>Flexible</strong><span>learning pace</span></div></div>`
      : "";
  const directoryTitle = {
    work: "Roles worth a closer look",
    learn: "Choose a skill to build",
    services: "Services for everyday needs",
    business: "Role outlines to build from"
  }[pageKey];
  const filters = `<section class="directory-section" id="directory-section"><div class="directory-heading"><div><span class="section-kicker">EXPLORE THE DIRECTORY</span><h2>${directoryTitle}</h2></div><span class="result-count" id="result-count"></span></div><div class="directory-filters"><label class="search-field"><span class="visually-hidden">Search listings</span><span aria-hidden="true">⌕</span><input id="directory-search" type="search" placeholder="Search by skill, role, or location" autocomplete="off"></label><label class="filter-field"><span class="visually-hidden">${escapeHTML(page.filterLabel)}</span><select id="directory-filter" aria-label="${escapeHTML(page.filterLabel)}">${page.options.map((option, index) => `<option value="${index ? escapeHTML(option) : "all"}">${escapeHTML(option)}</option>`).join("")}</select></label></div><div class="directory-grid" id="directory-grid"></div><p class="directory-note">ⓘ ${escapeHTML(page.note)}</p></section>`;
  const businessTools = pageKey === "business" ? `<section class="employer-tools"><div class="employer-copy"><span class="section-kicker">PLAN YOUR NEXT HIRE</span><h2>Draft a role description</h2><p>Set a clear title, location, and pay expectation. A well-defined role helps candidates understand the work and decide if it suits them.</p><ul><li>Describe day-to-day responsibilities</li><li>List must-have skills separately from nice-to-haves</li><li>Explain hours, pay, and how applicants can respond</li></ul></div><form class="role-form" id="role-form"><label>Role title<input name="title" required maxlength="70" placeholder="e.g. Part-time shop assistant"></label><label>Location<input name="location" required maxlength="70" placeholder="City or remote"></label><label>Work type<select name="category"><option>Full-time</option><option>Part-time</option><option>Internship</option><option>Apprenticeship</option><option>Contract</option></select></label><label>Pay or stipend<input name="pay" maxlength="70" placeholder="e.g. ₹10,000–₹14,000 / month"></label><label class="form-wide">What will this person do?<textarea name="description" required maxlength="280" rows="4" placeholder="Share the main responsibilities and what support or training is included."></textarea></label><button class="button button-dark" type="submit">Save draft <span aria-hidden="true">→</span></button><p class="form-hint">Your draft stays in this browser and is not shared with applicants.</p></form></section>` : "";

  root.innerHTML = `${pageHead}${stats}${filters}${businessTools}`;
  const grid = root.querySelector("#directory-grid");
  const searchInput = root.querySelector("#directory-search");
  const categorySelect = root.querySelector("#directory-filter");
  const count = root.querySelector("#result-count");
  let items = [...page.items];

  function renderResults() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const category = categorySelect.value;
    const results = items.filter((item) => {
      const searchable = [item.title, item.organization, item.location, item.pay, item.description, item.category, ...(item.tags || [])].join(" ").toLocaleLowerCase();
      return (!query || searchable.includes(query)) && (category === "all" || item.category === category);
    });
    count.textContent = `${results.length} ${results.length === 1 ? "result" : "results"}`;
    grid.innerHTML = results.length ? results.map(cardHTML).join("") : `<div class="empty-state"><span aria-hidden="true">⌕</span><h3>No matching results yet</h3><p>Try a broader keyword or choose a different category.</p></div>`;
  }

  searchInput.addEventListener("input", renderResults);
  categorySelect.addEventListener("change", renderResults);
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === "save") {
      const saved = readSaved("skillsetu-saved");
      const wasSaved = saved.includes(id);
      const stored = saveToBrowser("skillsetu-saved", wasSaved ? saved.filter((item) => item !== id) : [...saved, id]);
      if (stored) showToast(wasSaved ? "Removed from your saved items." : "Saved in this browser. You can come back to it later.");
      renderResults();
      return;
    }
    const key = actionStorageKeys[action];
    if (!key) return;
    const existing = readSaved(key);
    const stored = existing.includes(id) || saveToBrowser(key, [...existing, id]);
    if (!stored) return;
    button.disabled = true;
    button.textContent = ({ plan: "Added to learning plan ✓", interest: "Role guide saved ✓", contact: "Checklist saved ✓", "save-talent": "Role outline saved ✓" })[action];
    const messages = { plan: "Added to your learning plan on this device.", interest: "Role guide saved on this device. Contact employers directly about current openings.", contact: "Checklist saved on this device. Confirm availability and details directly with a provider.", "save-talent": "Role outline saved on this device." };
    showToast(messages[action]);
  });

  const roleForm = root.querySelector("#role-form");
  if (roleForm) {
    const drafts = readSaved("skillsetu-role-drafts");
    items = [...drafts, ...items];
    roleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!roleForm.reportValidity()) return;
      const formData = new FormData(roleForm);
      const draft = { id: `draft-${Date.now()}`, title: formData.get("title"), category: formData.get("category"), organization: "Your business · Local draft", location: formData.get("location"), pay: formData.get("pay") || "Pay details to be confirmed", description: formData.get("description"), tags: ["Private draft", "Saved on this device"], action: "draft", icon: "＋", saved: true };
      items.unshift(draft);
      const stored = saveToBrowser("skillsetu-role-drafts", [draft, ...drafts]);
      renderResults();
      roleForm.reset();
      showToast(stored ? "Draft saved on this device. It has not been shared with applicants." : "Draft added for this session only; browser storage is unavailable, so it will not be saved after you leave.");
      root.querySelector(".directory-section").scrollIntoView({ behavior: motionPreference.matches ? "auto" : "smooth", block: "start" });
    });
  }

  renderResults();

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  function closeMenu() {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });
    window.addEventListener("resize", () => { if (window.innerWidth > 780) closeMenu(); });
  }
})();
