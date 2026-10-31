/* Learning paths, career guides, local services, and employer tools. */
(() => {
  "use strict";

  const catalog = {
    learn: {
      eyebrow: "LEARN WITH A CLEAR NEXT STEP",
      title: "Build practical skills for everyday work.",
      intro: "Follow focused learning plans in digital, communication, creative, and career skills—with clear outcomes and hands-on practice.",
      note: "Use these guided plans to structure your own learning. Course fees, credentials, and instructor support depend on the resource you choose.",
      filterLabel: "Learning area",
      options: ["All areas", "Digital skills", "Communication", "Creative skills", "Career ready"],
      items: [
        { id: "course-web", title: "Build your first responsive website", category: "Digital skills", organization: "Learning path · Web development", location: "Self-paced · 4 weeks", pay: "Beginner", description: "Plan a simple site, structure it with HTML, style it with CSS, and publish a portfolio-ready project. Suggested weekly tasks and a final project included.", tags: ["HTML", "CSS", "Portfolio project"], action: "plan", icon: "</>" },
        { id: "course-spreadsheets", title: "Spreadsheets for small business", category: "Digital skills", organization: "Learning path · Business productivity", location: "Self-paced · 2 weeks", pay: "Beginner", description: "Practice organizing expenses, using basic formulas, and building a simple monthly sales tracker for a neighborhood business.", tags: ["Excel basics", "Google Sheets", "Practice files"], action: "plan", icon: "▦" },
        { id: "course-english", title: "Workplace English & confidence", category: "Communication", organization: "Learning path · Workplace communication", location: "15 minutes a day · 3 weeks", pay: "All levels", description: "Build confidence with introductions, customer conversations, short work messages, and asking clear questions on the job.", tags: ["Speaking", "Customer service", "Daily practice"], action: "plan", icon: "Aa" },
        { id: "course-photo", title: "Product photography with a phone", category: "Creative skills", organization: "Learning path · Creative skills", location: "Self-paced · 1 week", pay: "Beginner", description: "Use natural light, composition, and simple editing to create useful product photos for a shop or service portfolio.", tags: ["Photography", "Editing", "Portfolio project"], action: "plan", icon: "◎" },
        { id: "course-interview", title: "Prepare for your first interview", category: "Career ready", organization: "Learning path · Career preparation", location: "Guided practice · 5 sessions", pay: "Beginner", description: "Draft a short introduction, identify examples from your experience, and practice answering common interview questions.", tags: ["Interview practice", "Resume basics", "Confidence"], action: "plan", icon: "↗" },
        { id: "course-email", title: "Email and online workplace essentials", category: "Digital skills", organization: "Learning path · Digital confidence", location: "Self-paced · 1 week", pay: "Beginner", description: "Practice creating a professional email, organizing files, joining a video call, and spotting suspicious messages before you click.", tags: ["Email basics", "Online safety", "File management"], action: "plan", icon: "@" },
        { id: "course-business", title: "Plan and price a small service", category: "Career ready", organization: "Learning path · Independent work", location: "Self-paced · 2 weeks", pay: "Beginner", description: "Map your costs, estimate the time a job takes, write a clear service description, and prepare a simple quote for a customer.", tags: ["Pricing basics", "Customer communication", "Self-employment"], action: "plan", icon: "₹" }
      ]
    },
    work: {
      eyebrow: "WORK THAT HELPS YOU MOVE FORWARD",
      title: "Explore roles for your next step.",
      intro: "Explore common entry-level roles, the skills they call for, and what to consider when comparing work opportunities.",
      note: "Role descriptions are career guidance, not vacancy announcements. Confirm current openings, pay, and application requirements with each employer.",
      filterLabel: "Role type",
      options: ["All role types", "Full-time", "Part-time", "Internship", "Apprenticeship", "Contract"],
      items: [
        { id: "job-web-intern", title: "Junior Web Design Intern", category: "Internship", organization: "Role guide · Digital & creative teams", location: "Work arrangements vary by employer", pay: "Compensation set by employer", description: "Support the design team with page layouts, simple website updates, image preparation, and quality checks. Look for roles that include mentoring and a clear weekly learning plan.", tags: ["Figma basics", "HTML/CSS helpful", "0–6 months experience"], action: "interest", icon: "N" },
        { id: "job-retail-assistant", title: "Customer & Store Assistant", category: "Part-time", organization: "Role guide · Retail & customer support", location: "Usually customer-facing and on-site", pay: "Hours and compensation vary", description: "Help customers, maintain product displays, record daily stock, and support digital orders. Friendly communication matters more than prior retail experience.", tags: ["Customer service", "Basic smartphone use", "Hindi + local language"], action: "interest", icon: "M" },
        { id: "job-data-trainee", title: "Data & Office Support Trainee", category: "Apprenticeship", organization: "Role guide · Administration & operations", location: "Office, hybrid, or on-site", pay: "Training and compensation vary", description: "Learn to maintain spreadsheets, organize digital records, and help prepare weekly reports with a supervisor. Open to applicants starting their first office role.", tags: ["Spreadsheets", "Attention to detail", "Training provided"], action: "interest", icon: "S" },
        { id: "job-content-assistant", title: "Content & Photography Assistant", category: "Contract", organization: "Role guide · Content & marketing", location: "Project-based or in-house", pay: "Rates agreed per role or project", description: "Photograph menu items and help prepare short captions for social channels. A phone camera and a few portfolio examples are enough to get started.", tags: ["Phone photography", "Writing", "Project-based"], action: "interest", icon: "B" },
        { id: "job-delivery-parttime", title: "Community Delivery Partner", category: "Part-time", organization: "Role guide · Local logistics", location: "Neighborhood routes; arrangements vary", pay: "Rates and expenses vary by employer", description: "Deliver pre-packed grocery orders within nearby neighborhoods and confirm completion with customers. Route and safety details should be agreed before starting.", tags: ["Local area knowledge", "Two-wheeler helpful", "Flexible shifts"], action: "interest", icon: "P" },
        { id: "job-support-assistant", title: "Customer Support Associate", category: "Full-time", organization: "Role guide · Customer operations", location: "Office, hybrid, or remote by employer", pay: "Compensation and shifts vary", description: "Respond to customer questions by phone, email, or chat; record each interaction; and route complex issues to the right team. Look for roles that provide product training and clear escalation steps.", tags: ["Written communication", "Problem solving", "CRM familiarity"], action: "interest", icon: "?" }
      ]
    },
    services: {
      eyebrow: "LOCAL SKILLS, CLEAR EXPECTATIONS",
      title: "Choose the right service for the job.",
      intro: "Learn what common local services cover, compare the scope of work, and know what to ask before arranging a visit or project.",
      note: "Use these guides when comparing providers. Confirm qualifications, service scope, and final cost directly before work begins.",
      filterLabel: "Service category",
      options: ["All services", "Home repair", "Digital services", "Creative services", "Everyday help", "Business support"],
      items: [
        { id: "service-electrician", title: "Residential electrician", category: "Home repair", organization: "Wiring checks, fan installation & minor repairs", location: "Service area confirmed with provider", pay: "Request an estimate", description: "For small electrical repairs, explain the issue and share photos if appropriate. Ask about relevant qualifications, parts, call-out charges, and whether power must be isolated before work begins.", tags: ["Fault finding", "Fan installation", "Written estimate"], action: "contact", icon: "⚡" },
        { id: "service-tailor", title: "Tailoring & clothing alterations", category: "Everyday help", organization: "Fittings, hemming, repairs & made-to-measure clothing", location: "Pickup or delivery by arrangement", pay: "Price agreed per item", description: "Share the garment, measurements, and preferred finish before confirming a booking. Agree on the alteration, collection date, material costs, and total price in advance.", tags: ["Fittings", "Hemming", "Repairs"], action: "contact", icon: "✂" },
        { id: "service-web", title: "Small-business website setup", category: "Digital services", organization: "Landing pages, online menus & content updates", location: "Remote or on-site by arrangement", pay: "Request a project quote", description: "A small website project may include page structure, mobile-friendly styling, contact details, and a handover. Agree on the number of pages, content, revisions, hosting, and ongoing costs before work starts.", tags: ["Landing pages", "Mobile design", "Site updates"], action: "contact", icon: "⌘" },
        { id: "service-photo", title: "Product photography", category: "Creative services", organization: "Catalog images, food photography & short videos", location: "Studio or location shoot by arrangement", pay: "Quote based on shoot requirements", description: "Share the product list, image formats, usage, and delivery deadline when requesting a quote. Confirm the number of edited images, retouching, travel, and usage rights in writing.", tags: ["Product images", "Food & craft", "Image editing"], action: "contact", icon: "◎" },
        { id: "service-cleaning", title: "Home cleaning", category: "Everyday help", organization: "Kitchen, bathroom, regular & move-in cleaning", location: "Confirm coverage for your neighborhood", pay: "Quote based on home and task list", description: "Describe the rooms, surfaces, and level of cleaning required. Confirm the task list, estimated time, supplies, access arrangements, and any additional charges before scheduling.", tags: ["Kitchen & bath", "Move-in cleaning", "Task checklist"], action: "contact", icon: "⌂" },
        { id: "service-plumbing", title: "Plumbing repairs", category: "Home repair", organization: "Leak checks, tap repairs & drain clearing", location: "Confirm call-out area and arrival window", pay: "Ask for a written estimate", description: "Describe the fixture and symptoms before a visit. Ask whether inspection, parts, and call-out charges are included, and agree on the cost before any additional work is started.", tags: ["Leak repairs", "Tap replacement", "Drain maintenance"], action: "contact", icon: "⌁" },
        { id: "service-bookkeeping", title: "Small-business bookkeeping support", category: "Business support", organization: "Expense records, invoice tracking & monthly summaries", location: "Remote or on-site by arrangement", pay: "Quote based on records and frequency", description: "Organize invoices, categorize routine expenses, and prepare basic summaries for a small business. Agree on the records involved, update schedule, confidentiality, and whether tax filing is included.", tags: ["Record keeping", "Invoice tracking", "Monthly summaries"], action: "contact", icon: "▤" }
      ]
    },
    business: {
      eyebrow: "TOOLS FOR LOCAL EMPLOYERS",
      title: "Build a role that attracts the right people.",
      intro: "Use practical role outlines to shape a clear job description, set expectations, and explain how applicants can respond.",
      note: "Role outlines are starting points. Adapt each one to your business, local requirements, compensation, and working conditions.",
      filterLabel: "Skill area",
      options: ["All skill areas", "Digital", "Customer service", "Operations", "Creative"],
      items: [
        { id: "talent-web", title: "Junior web designer", category: "Digital", organization: "Role outline · Website & product teams", location: "On-site, hybrid, or remote by agreement", pay: "Set a transparent salary or stipend", description: "Support page layouts, update website content, prepare images, and check designs across screen sizes. A strong entry-level role includes a clear mentor, defined tools, and time for feedback.", tags: ["HTML/CSS basics", "Figma familiarity", "Accessible design"], action: "save-talent", icon: "⌘" },
        { id: "talent-retail", title: "Retail & customer support", category: "Customer service", organization: "Role outline · Shops & customer-facing teams", location: "Usually based at a store or service desk", pay: "Set pay, hours, and any incentives", description: "Welcome customers, answer product questions, keep displays organized, record stock, and support checkout. State shift patterns, break arrangements, training, and payment terms clearly.", tags: ["Customer care", "Stock tracking", "Point-of-sale basics"], action: "save-talent", icon: "▣" },
        { id: "talent-creative", title: "Content & product photography", category: "Creative", organization: "Role outline · Marketing & small-business teams", location: "Project-based, studio, or on-site", pay: "Define project fees or hourly pay", description: "Plan simple product shoots, prepare short captions, and organize assets for social channels. Include expected output, equipment requirements, usage rights, and deadlines in the role brief.", tags: ["Photography", "Caption writing", "Content planning"], action: "save-talent", icon: "◎" },
        { id: "talent-operations", title: "Office & data support", category: "Operations", organization: "Role outline · Administration & operations", location: "Office-based or hybrid by agreement", pay: "Publish salary, hours, and benefits", description: "Maintain records, update spreadsheets, organize files, and prepare routine reports. List the tools used, expected accuracy, supervision, and any training offered.", tags: ["Spreadsheets", "Record keeping", "Clear procedures"], action: "save-talent", icon: "▤" }
      ]
    }
  };

  const pageKey = document.body.dataset.page;
  const page = catalog[pageKey];
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

  const actionStorageKeys = { plan: "skillsetu-learning-plan", interest: "skillsetu-interests", contact: "skillsetu-service-requests", "save-talent": "skillsetu-talent" };

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

  const pageHead = `<section class="page-hero"><div class="page-hero-copy"><span class="section-kicker">${escapeHTML(page.eyebrow)}</span><h1>${escapeHTML(page.title)}</h1><p>${escapeHTML(page.intro)}</p><span class="page-feature-label">PRACTICAL GUIDES</span></div><div class="page-hero-aside"><span class="aside-number">0${Object.keys(catalog).indexOf(pageKey) + 1}</span><strong>Small steps.<br>Real progress.</strong><span>Explore, save, and take a next step at your pace.</span></div></section>`;
  const stats = pageKey === "work"
    ? `<div class="page-stats"><div><strong>6</strong><span>role guides</span></div><div><strong>5</strong><span>work types</span></div><div><strong>Flexible</strong><span>career paths</span></div></div>`
    : pageKey === "learn"
      ? `<div class="page-stats"><div><strong>7</strong><span>practical paths</span></div><div><strong>4</strong><span>skill areas</span></div><div><strong>Flexible</strong><span>learning pace</span></div></div>`
      : "";
  const filters = `<section class="directory-section"><div class="directory-heading"><div><span class="section-kicker">EXPLORE THE DIRECTORY</span><h2>${pageKey === "work" ? "Roles worth a closer look" : pageKey === "learn" ? "Choose a skill to build" : pageKey === "services" ? "Services for everyday needs" : "Role outlines to build from"}</h2></div><span class="result-count" id="result-count"></span></div><div class="directory-filters"><label class="search-field"><span class="visually-hidden">Search listings</span><span aria-hidden="true">⌕</span><input id="directory-search" type="search" placeholder="Search by skill, role, or location" autocomplete="off"></label><label class="filter-field"><span class="visually-hidden">${escapeHTML(page.filterLabel)}</span><select id="directory-filter" aria-label="${escapeHTML(page.filterLabel)}">${page.options.map((option, index) => `<option value="${index ? escapeHTML(option) : "all"}">${escapeHTML(option)}</option>`).join("")}</select></label></div><div class="directory-grid" id="directory-grid"></div><p class="directory-note">ⓘ ${escapeHTML(page.note)}</p></section>`;
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
      const stored = saveToBrowser("skillsetu-saved", wasSaved
        ? saved.filter((item) => item !== id)
        : [...saved, id]);
      if (stored) {
        showToast(wasSaved
          ? "Removed from your saved items."
          : "Saved in this browser. You can come back to it later.");
      }
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
      showToast(stored
        ? "Draft saved on this device. It has not been shared with applicants."
        : "Draft added for this session only; browser storage is unavailable, so it will not be saved after you leave.");
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
