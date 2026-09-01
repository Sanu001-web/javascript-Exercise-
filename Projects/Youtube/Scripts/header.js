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
          aria-label="Search"
        >
          <img
            class="search-icon"
            src="https://tinyurl.com/search-icon0"
            alt="Search"
          >
          <div class="tooltip">Search</div>
        </button>

        <button
          id="clearSearchButton"
          class="clear-search-button"
          type="button"
          aria-label="Clear search"
        >
          ×
        </button>

        <div
          id="searchSuggestions"
          class="search-suggestions"
          role="listbox"
          aria-label="Search suggestions"
        ></div>
      </div>

      <button
        class="voice-search-button"
        type="button"
        aria-label="Search with your voice"
      >
        <img
          class="voice-search-icon"
          src="https://tinyurl.com/voice-search-icons"
          alt="Voice search"
        >
      </button>
    </div>
  ` : '';

  header.innerHTML = `
    <div class="left-section">
      <img
        class="hamburger-menu"
        src="https://tinyurl.com/hamburger-menu"
        alt="Menu"
      >

      <a href="index.html">
        <img
          class="youtube-logo"
          src="https://tinyurl.com/youtube-logo0"
          alt="YouTube"
        >
      </a>
    </div>

    ${searchHTML}

    <div class="right-section">
      <button
        class="theme-toggle js-theme-toggle"
        type="button"
        aria-label="Change theme"
      >
        ☾
      </button>

      <div class="upload-icon-container">
        <img
          class="upload-icon"
          src="https://tinyurl.com/uploads-icons"
          alt="Upload"
        >
      </div>

      <div class="youtube-apps-icon-container">
        <img
          class="youtube-apps-icon"
          src="https://tinyurl.com/youtube-apps-icon"
          alt="Apps"
        >
      </div>

      <div class="notifications-icon-container">
        <div class="notify">6</div>

        <img
          class="notifications-icon"
          src="https://tinyurl.com/notificaation"
          alt="Notifications"
        >
      </div>

      <img
        class="current-user-picture"
        src="https://tinyurl.com/user-pictures"
        alt="User"
      >
    </div>
  `;
}
