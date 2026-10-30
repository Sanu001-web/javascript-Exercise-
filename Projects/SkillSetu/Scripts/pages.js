/* Dedicated page content and local-only prototype interactions. */
(() => {
  "use strict";

  const catalog = {
    learn: {
      eyebrow: "LEARN WITH A CLEAR NEXT STEP",
      title: "Build practical skills for everyday work.",
      intro: "Short, beginner-friendly learning paths with clear outcomes, suggested practice, and skills you can show in a portfolio.",
      note: "Learning paths are prototype examples. No instructor, certification, or course delivery is currently provided.",
      filterLabel: "Learning area",
      options: ["All areas", "Digital skills", "Communication", "Creative skills", "Career ready"],
      items: [
        { id: "course-web", title: "Build your first responsive website", category: "Digital skills", organization: "SkillSetu Learning Lab", location: "Self-paced · 4 weeks", pay: "Beginner", description: "Plan a simple site, structure it with HTML, style it with CSS, and publish a portfolio-ready project. Suggested weekly tasks and a final project included.", tags: ["HTML", "CSS", "Portfolio project"], action: "plan", icon: "</>" },
        { id: "course-spreadsheets", title: "Spreadsheets for small business", category: "Digital skills", organization: "Community Skills Studio", location: "Self-paced · 2 weeks", pay: "Beginner", description: "Practice organizing expenses, using basic formulas, and building a simple monthly sales tracker for a neighborhood business.", tags: ["Excel basics", "Google Sheets", "Practice files"], action: "plan", icon: "▦" },
        { id: "course-english", title: "Workplace English & confidence", category: "Communication", organization: "Open Learning Circle", location: "15 minutes a day · 3 weeks", pay: "All levels", description: "Build confidence with introductions, customer conversations, short work messages, and asking clear questions on the job.", tags: ["Speaking", "Customer service", "Daily practice"], action: "plan", icon: "Aa" },
        { id: "course-photo", title: "Product photography with a phone", category: "Creative skills", organization: "Local Creator Workshop", location: "Self-paced · 1 week", pay: "Beginner", description: "Use natural light, composition, and simple editing to create useful product photos for a shop or service portfolio.", tags: ["Photography", "Editing", "Portfolio project"], action: "plan", icon: "◎" },
        { id: "course-interview", title: "Prepare for your first interview", category: "Career ready", organization: "SkillSetu Career Desk", location: "Guided practice · 5 sessions", pay: "Beginner", description: "Draft a short introduction, identify examples from your experience, and practice answering common interview questions.", tags: ["Interview practice", "Resume basics", "Confidence"], action: "plan", icon: "↗" }
      ]
    },
    work: {
      eyebrow: "WORK THAT HELPS YOU MOVE FORWARD",
      title: "Find a role that fits your next step.",
      intro: "Browse sample entry-level roles with practical details—work type, location, pay range, and the skills employers ask for.",
      note: "These are fictional demonstration listings, not live vacancies. Never pay a fee to apply for a job.",
      filterLabel: "Role type",
      options: ["All role types", "Full-time", "Part-time", "Internship", "Apprenticeship", "Contract"],
      items: [
        { id: "job-web-intern", title: "Junior Web Design Intern", category: "Internship", organization: "Northstar Digital Studio · Example employer", location: "Jaipur, Rajasthan · Hybrid", pay: "₹8,000–₹12,000 / month", description: "Support the design team with page layouts, simple website updates, image preparation, and quality checks. Mentoring and a weekly learning plan are included in this sample role.", tags: ["Figma basics", "HTML/CSS helpful", "0–6 months experience"], action: "interest", icon: "N" },
        { id: "job-retail-assistant", title: "Customer & Store Assistant", category: "Part-time", organization: "Mitti Market · Example neighborhood shop", location: "Indore, Madhya Pradesh · On-site", pay: "₹9,000–₹13,000 / month · 25 hrs/week", description: "Help customers, maintain product displays, record daily stock, and support digital orders. Friendly communication matters more than prior retail experience.", tags: ["Customer service", "Basic smartphone use", "Hindi + local language"], action: "interest", icon: "M" },
        { id: "job-data-trainee", title: "Data & Office Support Trainee", category: "Apprenticeship", organization: "Sahyog Community Finance · Example organization", location: "Lucknow, Uttar Pradesh · On-site", pay: "₹10,000 / month stipend · 6 months", description: "Learn to maintain spreadsheets, organize digital records, and help prepare weekly reports with a supervisor. Open to applicants starting their first office role.", tags: ["Spreadsheets", "Attention to detail", "Training provided"], action: "interest", icon: "S" },
        { id: "job-content-assistant", title: "Content & Photography Assistant", category: "Contract", organization: "Blue Mango Foods · Example small business", location: "Pune, Maharashtra · Flexible", pay: "₹500–₹800 / shoot · Sample rate", description: "Photograph menu items and help prepare short captions for social channels. A phone camera and a few portfolio examples are enough to get started.", tags: ["Phone photography", "Writing", "Project-based"], action: "interest", icon: "B" },
        { id: "job-delivery-parttime", title: "Community Delivery Partner", category: "Part-time", organization: "Neighborhood Pantry Network · Example", location: "Bhopal, Madhya Pradesh · Local routes", pay: "₹60–₹90 / completed delivery · Sample rate", description: "Deliver pre-packed grocery orders within nearby neighborhoods and confirm completion with customers. Route and safety details should be agreed before starting.", tags: ["Local area knowledge", "Two-wheeler helpful", "Flexible shifts"], action: "interest", icon: "P" }
      ]
    },
    services: {
      eyebrow: "LOCAL SKILLS, CLEAR EXPECTATIONS",
      title: "Find trusted help for the things that matter.",
      intro: "Compare sample local providers by service area, experience, typical starting price, and the work they take on.",
      note: "Provider profiles are illustrative examples only. No provider is verified and no booking or payment is available.",
      filterLabel: "Service category",
      options: ["All services", "Home repair", "Digital services", "Creative services", "Everyday help"],
      items: [
        { id: "service-electrician", title: "Ravi Kumar · Home electrician", category: "Home repair", organization: "Basic wiring, fan installation & minor repairs", location: "Jaipur · Serves Vaishali Nagar and nearby areas", pay: "From ₹250 / visit · Sample price", description: "Example profile: 3 years of residential repair experience. Shares a job estimate before work and recommends switching off the main supply for inspection.", tags: ["Minor repairs", "Fan installation", "Appointment required"], action: "contact", icon: "RK" },
        { id: "service-tailor", title: "Asha Devi · Tailoring & alterations", category: "Everyday help", organization: "Everyday clothing alterations and repairs", location: "Indore · Pickup by arrangement", pay: "From ₹120 / item · Sample price", description: "Example profile: blouse fitting, trouser hemming, school uniforms, and simple repairs. Confirm fabric, delivery date, and final price before placing an order.", tags: ["Alterations", "Uniforms", "Local pickup"], action: "contact", icon: "AD" },
        { id: "service-web", title: "Pixel Neem · Small-business websites", category: "Digital services", organization: "One-page websites, menus & updates", location: "Remote · Based in Lucknow", pay: "From ₹3,500 / project · Sample price", description: "Example studio profile: mobile-friendly landing pages for shops and independent professionals, with basic contact details and a short handover session.", tags: ["Website setup", "Mobile-first", "Small businesses"], action: "contact", icon: "PN" },
        { id: "service-photo", title: "Meera Joshi · Product photographer", category: "Creative services", organization: "Catalog images and short product videos", location: "Pune · Studio or shop visit", pay: "From ₹1,500 / session · Sample price", description: "Example profile: simple product shoots for local makers and cafes. A sample package includes 10 edited images; travel and extra edits are discussed separately.", tags: ["Product photos", "Food & craft", "Portfolio available"], action: "contact", icon: "MJ" },
        { id: "service-cleaning", title: "Nayi Subah · Home cleaning team", category: "Everyday help", organization: "Kitchen, bathroom and move-in cleaning", location: "Bhopal · Selected neighborhoods", pay: "From ₹700 / visit · Sample price", description: "Example team profile: scheduled cleaning with a written task list and estimated duration. Ask which supplies are included and confirm access arrangements.", tags: ["Home cleaning", "Scheduled visits", "Task checklist"], action: "contact", icon: "NS" }
      ]
    },
    business: {
      eyebrow: "TOOLS FOR LOCAL EMPLOYERS",
      title: "Meet talent ready to make a difference.",
      intro: "Draft a clear role, set expectations up front, and help people understand how to apply. Your draft stays in this browser demo.",
      note: "All listings and candidate profiles are fictional examples. Publishing here does not create a real job advert.",
      filterLabel: "Skill area",
      options: ["All skill areas", "Digital", "Customer service", "Operations", "Creative"],
      items: [
        { id: "talent-ananya", title: "Ananya Sharma · Junior web designer", category: "Digital", organization: "Portfolio: 3 mobile-friendly sample pages", location: "Jaipur · Open to hybrid or remote work", pay: "Available for internship or junior role", description: "HTML and CSS fundamentals, Figma wireframes, and a strong interest in accessible layouts. Currently completing a responsive portfolio project.", tags: ["HTML/CSS", "Figma", "Beginner-friendly supervision"], action: "save-talent", icon: "AS" },
        { id: "talent-imran", title: "Imran Khan · Retail & customer support", category: "Customer service", organization: "Experience: 1 year at a family-run shop", location: "Indore · Prefers local, on-site work", pay: "Available part-time or full-time", description: "Experienced in greeting customers, organizing stock, handling basic digital payments, and keeping a daily sales notebook. Comfortable learning new point-of-sale tools.", tags: ["Customer care", "Stock tracking", "Hindi + Urdu"], action: "save-talent", icon: "IK" },
        { id: "talent-priya", title: "Priya Nair · Content & product photography", category: "Creative", organization: "Portfolio: food and handmade products", location: "Pune · Local or remote projects", pay: "Project-based or part-time", description: "Creates phone-shot product images, short captions, and simple social media calendars for small shops. Interested in building a professional portfolio.", tags: ["Photography", "Caption writing", "Canva basics"], action: "save-talent", icon: "PN" },
        { id: "talent-rohit", title: "Rohit Verma · Office & data support", category: "Operations", organization: "Training: spreadsheets and office basics", location: "Lucknow · On-site or hybrid", pay: "Entry-level opportunity preferred", description: "Careful with records, comfortable with spreadsheet templates, and looking for a first role with clear tasks and supportive training.", tags: ["Spreadsheets", "Record keeping", "Entry level"], action: "save-talent", icon: "RV" }
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
    const actionLabels = { plan: "Add to my learning plan", interest: "Express interest", contact: "Request details", "save-talent": "Save profile", draft: "Draft saved" };
    const doneLabels = { plan: "Added to learning plan ✓", interest: "Interest noted ✓", contact: "Request noted ✓", "save-talent": "Profile saved ✓", draft: "Draft saved ✓" };
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

  const pageHead = `<section class="page-hero"><div class="page-hero-copy"><span class="section-kicker">${escapeHTML(page.eyebrow)}</span><h1>${escapeHTML(page.title)}</h1><p>${escapeHTML(page.intro)}</p><span class="prototype-label">SAMPLE CONTENT · PROTOTYPE</span></div><div class="page-hero-aside"><span class="aside-number">0${Object.keys(catalog).indexOf(pageKey) + 1}</span><strong>Small steps.<br>Real progress.</strong><span>Explore, save, and take a next step at your pace.</span></div></section>`;
  const stats = pageKey === "work"
    ? `<div class="page-stats"><div><strong>5</strong><span>example roles</span></div><div><strong>4</strong><span>work types</span></div><div><strong>0</strong><span>live vacancies</span></div></div>`
    : pageKey === "learn"
      ? `<div class="page-stats"><div><strong>5</strong><span>practical paths</span></div><div><strong>4</strong><span>skill areas</span></div><div><strong>Free</strong><span>example resources</span></div></div>`
      : "";
  const filters = `<section class="directory-section"><div class="directory-heading"><div><span class="section-kicker">EXPLORE THE DIRECTORY</span><h2>${pageKey === "work" ? "Roles worth a closer look" : pageKey === "learn" ? "Choose a skill to build" : pageKey === "services" ? "People with practical skills" : "People ready to contribute"}</h2></div><span class="result-count" id="result-count"></span></div><div class="directory-filters"><label class="search-field"><span class="visually-hidden">Search listings</span><span aria-hidden="true">⌕</span><input id="directory-search" type="search" placeholder="Search by skill, role, or location" autocomplete="off"></label><label class="filter-field"><span class="visually-hidden">${escapeHTML(page.filterLabel)}</span><select id="directory-filter" aria-label="${escapeHTML(page.filterLabel)}">${page.options.map((option, index) => `<option value="${index ? escapeHTML(option) : "all"}">${escapeHTML(option)}</option>`).join("")}</select></label></div><div class="directory-grid" id="directory-grid"></div><p class="prototype-note">ⓘ ${escapeHTML(page.note)}</p></section>`;
  const businessTools = pageKey === "business" ? `<section class="employer-tools"><div class="employer-copy"><span class="section-kicker">POST WITH CLARITY</span><h2>Draft an opportunity</h2><p>Set a realistic title, location, and pay expectation. A clear listing helps applicants decide if the role is right for them.</p><ul><li>Describe day-to-day responsibilities</li><li>List must-have skills separately from nice-to-haves</li><li>Explain hours, pay, and how applicants can respond</li></ul></div><form class="role-form" id="role-form"><label>Role title<input name="title" required maxlength="70" placeholder="e.g. Part-time shop assistant"></label><label>Location<input name="location" required maxlength="70" placeholder="City or remote"></label><label>Work type<select name="category"><option>Full-time</option><option>Part-time</option><option>Internship</option><option>Apprenticeship</option><option>Contract</option></select></label><label>Pay or stipend<input name="pay" maxlength="70" placeholder="e.g. ₹10,000–₹14,000 / month"></label><label class="form-wide">What will this person do?<textarea name="description" required maxlength="280" rows="4" placeholder="Share the main responsibilities and what support or training is included."></textarea></label><button class="button button-dark" type="submit">Save draft <span aria-hidden="true">→</span></button><p class="form-hint">Demo only — your draft is stored in this browser, not published.</p></form></section>` : "";

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
    button.textContent = ({ plan: "Added to learning plan ✓", interest: "Interest noted ✓", contact: "Request noted ✓", "save-talent": "Profile saved ✓" })[action];
    const messages = { plan: "Added to your learning plan on this device.", interest: "Your interest was saved locally. This demo does not send an application.", contact: "Request noted locally. This demo does not contact the provider.", "save-talent": "Candidate profile saved locally." };
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
      const draft = { id: `draft-${Date.now()}`, title: formData.get("title"), category: formData.get("category"), organization: "Your business · Local draft", location: formData.get("location"), pay: formData.get("pay") || "Pay details to be confirmed", description: formData.get("description"), tags: ["Draft", "Not published"], action: "draft", icon: "＋", saved: true };
      items.unshift(draft);
      const stored = saveToBrowser("skillsetu-role-drafts", [draft, ...drafts]);
      renderResults();
      roleForm.reset();
      showToast(stored
        ? "Draft saved in this browser. It has not been published."
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
