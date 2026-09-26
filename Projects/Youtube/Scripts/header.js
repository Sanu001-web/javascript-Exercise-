import { loadCommentNotifications } from './comments.js';

const builtInNotificationCount = 6;

function getNotificationCount() {
  return builtInNotificationCount + loadCommentNotifications().length;
}

function updateNotificationBadge() {
  const badge = document.querySelector('.notify');
  if (badge) {
    badge.textContent = getNotificationCount();
  }
}

export function renderHeader({ showSearch = true } = {}) {
  const header = document.querySelector('.js-header');

  if (!header) {
    return;
  }

  const searchHTML = showSearch ? `
    <div class="middle-section">
      <div class="search-wrapper">
        <input
          class="search-bar js-search-bar"
          type="text"
          placeholder="Search"
          autocomplete="off"
          aria-label="Search"
        >

        <button class="search-button js-search-button" type="button" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" 
            class="search-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2" 
            stroke-linecap="round"
            stroke-linejoin="round" 
            class="lucide lucide-search">
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          
          <div class="tooltip">Search</div>
        </button>

        <button id="clearSearchButton" class="clear-search-button" type="button" aria-label="Clear search">
          ×
        </button>

        <div id="searchSuggestions" class="search-suggestions" role="listbox" aria-label="Search suggestions">

        </div>
      </div>

      <button class="voice-search-button" type="button" aria-label="Search with your voice">
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="lucide lucide-mic voice-search-icon ">
          <path d="M12 19v3" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <rect x="9" y="2" width="6" height="13" rx="3" />
        </svg>
        <div class="tooltip">search with your voice</div>
      </button>
    </div>
  ` : '';

  header.innerHTML = `
    <div class="left-section yt-log-home">
    
        <svg 
          class="hamburger-menu"
          xmlns="http://www.w3.org/2000/svg"
          width="24" 
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round" 
          stroke-linejoin="round">
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      <a href="index.html">
        <img class="youtube-logo icon-dark" src="https://tinyurl.com/3rf8zvcp" alt="dark-logo" />
        <img class="youtube-logo icon-light" src="https://tinyurl.com/youtube-logo0" alt="YouTube">
      </a>
      <div class="tooltip">youtube home</div>
    </div>
        

    ${searchHTML}

    <div class="right-section">
      <button class="theme-toggle js-theme-toggle" type="button" aria-label="Change theme">
        ☾
      </button>

      <div class="upload-icon-container">
       <svg xmlns="http://www.w3.org/2000/svg"
          class="upload-icon" 
          height="20"
          width="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="lucide lucide-upload">
          <path d="M12 3v12" />
          <path d="m17 8-5-5-5 5" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        </svg>
       
      <div class="tooltip">uploads</div>
      </div>

      <div class="youtube-apps-icon-container">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="youtube-apps-icon" 
          width="20" 
          height="20"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid">
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
        <div class="tooltip">apps</div>
      </div>

<a class="notify-link" href="notification.html">
      <div class="notifications-icon-container">
        <div class="notify">${getNotificationCount()}</div>
          <svg xmlns="http://www.w3.org/2000/svg"
              class="notifications-icon icon-dark " 
              width="20" 
              height="20"
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell">
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path
              d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" 
            class="notifications-icon icon-light"
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#000000"
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="lucide lucide-bell preview-icon">
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path
              d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          <div class="tooltip">notifications</div>
      </div>
      </a>
      <a href="profile.html">
      <img class="current-user-picture" src="https://tinyurl.com/bdharchm" alt="User">
      </a>
    </div>
  `;
  // <button class="sign-btn" type="submit">Sign in</button>  
  // The header is rendered dynamically, so bind the toggle after its HTML exists.
  initializeThemeToggle();
}

function initializeThemeToggle() {
  const themeToggle = document.querySelector('.js-theme-toggle');

  if (!themeToggle || themeToggle.dataset.themeBound === 'true') {
    return;
  }

  themeToggle.dataset.themeBound = 'true';
  themeToggle.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark-theme'));
  });

  setTheme(document.body.classList.contains('dark-theme'));
}

export function setTheme(isDark = document.body.classList.contains('dark-theme')) {
  document.body.classList.toggle('dark-theme', isDark);

  const themeToggle = document.querySelector('.js-theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = isDark ? '☀' : '☾';
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  localStorage.setItem('dark-theme', String(isDark));
}

const savedTheme = localStorage.getItem('dark-theme') === 'true';
setTheme(savedTheme);

// Keep the badge in sync when a comment creates a notification.
window.addEventListener('comment-notification-added', updateNotificationBadge);
window.addEventListener('storage', updateNotificationBadge);

// Automatically render the shared header on pages that contain .js-header.
renderHeader();
