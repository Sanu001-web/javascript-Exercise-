export function renderHeader() {
  const headerHTML = `
    <div class="left-section">
      <img class="hamburger-menu" src="https://tinyurl.com/hamburger-menu" alt="Menu">
      <a href="index.html">
        <img class="youtube-logo" src="https://tinyurl.com/youtube-logo0" alt="YouTube">
      </a>
    </div>

    <div class="middle-section">
      <input class="search-bar js-search-bar" type="text" placeholder="Search">

      <button class="search-button js-search-button">
        <img class="search-icon" src="https://tinyurl.com/search-icon0" alt="Search">
        <div class="tooltip">Search</div>
      </button>

      <button class="voice-search-button">
        <img class="voice-search-icon" src="https://tinyurl.com/voice-search-icons" alt="Voice search">
        <div class="tooltip">Search with your voice</div>
      </button>
    </div>

    <div class="right-section">
      <button class="theme-toggle js-theme-toggle" type="button" aria-label="Change theme">
        ☾
      </button>

      <div class="upload-icon-container">
        <img class="upload-icon" src="https://tinyurl.com/uploads-icons" alt="Upload">
        <div class="tooltip">Upload</div>
      </div>

      <div class="youtube-apps-icon-container">
        <img class="youtube-apps-icon" src="https://tinyurl.com/youtube-apps-icon" alt="Apps">
        <div class="tooltip">Apps</div>
      </div>

      <div class="notifications-icon-container">
        <div class="notify">6</div>
        <img class="notifications-icon" src="https://tinyurl.com/notificaation" alt="Notifications">
        <div class="tooltip">Notifications</div>
      </div>

      <img class="current-user-picture" src="https://tinyurl.com/user-pictures" alt="User">
    </div>
  `;

  document.querySelector('.js-header').innerHTML = headerHTML;
}




