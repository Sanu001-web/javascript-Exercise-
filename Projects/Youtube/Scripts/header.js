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

        <button
          class="search-button js-search-button"
          type="button"
          aria-label="Search">
          <img class="search-icon" src="https://tinyurl.com/search-icon0" alt="Search">
          <div class="tooltip">Search</div>
        </button>

        <button id="clearSearchButton" class="clear-search-button" type="button" aria-label="Clear search">
          ×
        </button>

        <div id="searchSuggestions" class="search-suggestions" role="listbox" aria-label="Search suggestions">

        </div>
      </div>

      <button class="voice-search-button" type="button" aria-label="Search with your voice">
        <img class="voice-search-icon " src="https://tinyurl.com/voice-search-icons" alt="Voice search">
        <div class="tooltip">search with your voice</div>
      </button>
    </div>
  ` : '';

  header.innerHTML = `
    <div class="left-section">
    
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
          stroke-linejoin="round"
          class="lucide lucide-menu">
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      <a href="index.html">
        <img class="youtube-logo" src="https://tinyurl.com/youtube-logo0" alt="YouTube">
      </a>
    </div>

    ${searchHTML}

    <div class="right-section">
      <button class="theme-toggle js-theme-toggle" type="button" aria-label="Change theme">
        ☾
      </button>

      <div class="upload-icon-container">
        <img class="upload-icon" src="https://tinyurl.com/uploads-icons" alt="Upload">
      <div class="tooltip">uploads</div>
      </div>

      <div class="youtube-apps-icon-container">
        <img class="youtube-apps-icon" src="https://tinyurl.com/youtube-apps-icon" alt="Apps">
        <div class="tooltip">apps</div>
      </div>

      <div class="notifications-icon-container">
        <div class="notify">6</div>

        <img class="notifications-icon" src="https://tinyurl.com/notificaation" alt="Notifications">
          <div class="tooltip">notifications</div>
      </div>
      <img class="current-user-picture" src="https://tinyurl.com/user-pictures" alt="User">
    </div>
  `;

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

// Automatically render the shared header on pages that contain .js-header.
renderHeader();
