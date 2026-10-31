/* Browser-only demo authentication. Real accounts require a trusted backend. */
(() => {
  "use strict";

  const usersKey = "skillsetu-users";
  const sessionKey = "skillsetu-session";
  const form = document.querySelector("#auth-form");
  const emailInput = document.querySelector("#auth-email");
  const passwordInput = document.querySelector("#auth-password");
  const nameField = document.querySelector("#name-field");
  const nameInput = document.querySelector("#auth-name");
  const title = document.querySelector("#auth-title");
  const intro = document.querySelector("#auth-intro");
  const submit = document.querySelector("#auth-submit");
  const message = document.querySelector("#auth-message");
  const switchText = document.querySelector("#auth-switch");
  const switchButton = document.querySelector("#switch-mode");
  const success = document.querySelector("#auth-success");
  const signout = document.querySelector("#signout");
  let mode = "login";

  function readUsers() {
    const users = JSON.parse(localStorage.getItem(usersKey) || "[]");
    return Array.isArray(users) ? users : [];
  }

  function setMode(nextMode, note = "") {
    mode = nextMode;
    const signingUp = mode === "signup";
    nameField.hidden = !signingUp;
    nameInput.required = signingUp;
    passwordInput.autocomplete = signingUp ? "new-password" : "current-password";
    title.textContent = signingUp ? "Create your account" : "Login to your account";
    intro.textContent = signingUp
      ? "Create an account to keep your next steps together."
      : "Continue exploring skills, work, and local services.";
    submit.innerHTML = signingUp ? 'Create account <span aria-hidden="true">→</span>' : 'Login <span aria-hidden="true">→</span>';
    switchText.firstChild.textContent = signingUp ? "Already have an account? " : "New to SkillSetu? ";
    switchButton.textContent = signingUp ? "Login" : "Create an account";
    message.textContent = note;
  }

  function createSalt() {
    if (!window.crypto || !window.crypto.subtle || !window.crypto.getRandomValues) {
      throw new Error("Secure password hashing is unavailable in this browser context. Use a modern browser on a secure connection.");
    }
    const salt = new Uint8Array(16);
    window.crypto.getRandomValues(salt);
    return Array.from(salt, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  async function hashPassword(password, salt) {
    if (!window.crypto || !window.crypto.subtle) {
      throw new Error("Secure password hashing is unavailable in this browser context. Use a modern browser on a secure connection.");
    }
    const bytes = new TextEncoder().encode(`${salt}:${password}`);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function showSignedIn(user) {
    form.hidden = true;
    switchText.hidden = true;
    document.querySelector(".auth-note").hidden = true;
    success.hidden = false;
    document.querySelector("#success-copy").textContent = `Welcome${user.name ? `, ${user.name}` : ""}. You are signed in on this browser.`;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.textContent = "";

    if (!form.reportValidity()) return;

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    submit.disabled = true;

    try {
      const users = readUsers();
      const existingUser = users.find((user) => user.email === email);

      if (mode === "login") {
        if (!existingUser) {
          const notice = "No account exists for this email yet. Please create an account to get started.";
          setMode("signup", notice);
          nameInput.focus();
          return;
        }
        if (!existingUser.passwordSalt || existingUser.passwordHash !== await hashPassword(password, existingUser.passwordSalt)) {
          message.textContent = "That password does not match this account.";
          passwordInput.focus();
          return;
        }
        localStorage.setItem(sessionKey, JSON.stringify({ email: existingUser.email, name: existingUser.name }));
        showSignedIn(existingUser);
        return;
      }

      if (existingUser) {
        const notice = "An account already exists for this email. Please log in instead.";
        setMode("login", notice);
        passwordInput.focus();
        return;
      }

      const passwordSalt = createSalt();
      const newUser = {
        name: nameInput.value.trim(),
        email,
        passwordSalt,
        passwordHash: await hashPassword(password, passwordSalt),
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      localStorage.setItem(usersKey, JSON.stringify(users));
      localStorage.setItem(sessionKey, JSON.stringify({ email: newUser.email, name: newUser.name }));
      showSignedIn(newUser);
    } catch (error) {
      if (error instanceof SyntaxError) {
        message.textContent = "Saved account data could not be read. Clear this site's saved data and try again.";
      } else if (error.name === "QuotaExceededError" || error.name === "SecurityError") {
        message.textContent = "Browser storage is unavailable. Account changes could not be saved.";
      } else {
        message.textContent = error.message || "Something went wrong. Please try again.";
      }
    } finally {
      submit.disabled = false;
    }
  });

  switchButton.addEventListener("click", () => {
    setMode(mode === "login" ? "signup" : "login");
    (mode === "signup" ? nameInput : emailInput).focus();
  });

  signout.addEventListener("click", () => {
    try {
      localStorage.removeItem(sessionKey);
    } catch (error) {
      // The page can still return to the login form if storage is blocked.
    }
    success.hidden = true;
    form.hidden = false;
    switchText.hidden = false;
    document.querySelector(".auth-note").hidden = false;
    passwordInput.value = "";
    setMode("login", "You have signed out.");
  });

  try {
    const session = JSON.parse(localStorage.getItem(sessionKey) || "null");
    if (session && session.email) showSignedIn(session);
  } catch (error) {
    // Continue to the login screen if local storage is unavailable or invalid.
  }
})();
