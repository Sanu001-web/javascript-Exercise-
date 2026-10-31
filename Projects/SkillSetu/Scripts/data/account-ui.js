/* Shared signed-in account control for site headers. */
(() => {
  "use strict";

  const sessionKey = "skillsetu-session";
  const control = document.querySelector("#account-control");
  if (!control) return;

  function readSession() {
    try {
      const session = JSON.parse(localStorage.getItem(sessionKey) || "null");
      return session && typeof session.email === "string"
        ? { email: session.email, name: typeof session.name === "string" ? session.name : "" }
        : null;
    } catch (error) {
      return null;
    }
  }

  function getInitials(session) {
    const words = (session.name || "").trim().split(/\s+/).filter(Boolean);
    if (words.length > 1) return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
    const name = words[0] || session.email.split("@")[0] || "U";
    return name.slice(0, 2).toUpperCase();
  }

  function render() {
    const session = readSession();
    control.replaceChildren();

    if (!session) {
      const loginLink = document.createElement("a");
      loginLink.className = "button button-small button-dark account-login-link";
      loginLink.href = "auth.html";
      loginLink.append(document.createTextNode("Login / Sign up "));
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";
      loginLink.append(arrow);
      control.append(loginLink);
      return;
    }

    const name = (session.name || "").trim() || "Your profile";
    const toggle = document.createElement("button");
    toggle.className = "profile-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", `Open profile menu for ${name}`);
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-haspopup", "true");
    const initials = document.createElement("span");
    initials.className = "profile-avatar";
    initials.setAttribute("aria-hidden", "true");
    initials.textContent = getInitials(session);
    const chevron = document.createElement("span");
    chevron.className = "profile-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "⌄";
    toggle.append(initials, chevron);

    const menu = document.createElement("div");
    menu.className = "profile-menu";
    menu.hidden = true;
    const label = document.createElement("span");
    label.className = "profile-menu-label";
    label.textContent = "SIGNED IN AS";
    const userName = document.createElement("strong");
    userName.className = "profile-menu-name";
    userName.textContent = name;
    const email = document.createElement("span");
    email.className = "profile-menu-email";
    email.textContent = session.email;
    const divider = document.createElement("span");
    divider.className = "profile-menu-divider";
    divider.setAttribute("aria-hidden", "true");
    const signout = document.createElement("button");
    signout.className = "profile-signout";
    signout.type = "button";
    signout.textContent = "Sign out";
    menu.append(label, userName, email, divider, signout);
    control.append(toggle, menu);

    toggle.addEventListener("click", () => {
      const opening = menu.hidden;
      menu.hidden = !opening;
      toggle.setAttribute("aria-expanded", String(opening));
    });

    signout.addEventListener("click", () => {
      try {
        localStorage.removeItem(sessionKey);
        render();
      } catch (error) {
        menu.hidden = false;
        email.textContent = "Browser storage is unavailable. You could not be signed out.";
      }
    });

  }

  render();
  document.addEventListener("click", (event) => {
    if (control.contains(event.target)) return;
    const toggle = control.querySelector(".profile-toggle");
    const menu = control.querySelector(".profile-menu");
    if (toggle && menu) {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const toggle = control.querySelector(".profile-toggle");
    const menu = control.querySelector(".profile-menu");
    if (toggle && menu && !menu.hidden) {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
  window.addEventListener("storage", (event) => {
    if (event.key === sessionKey) render();
  });
})();
