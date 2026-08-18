export function renderHeader() {

  const headerHTML = `
<div class="left-section">
      <img class="hamburger-menu" src="https://tinyurl.com/hamburger-menu">
      <a href="index.html">
      <img class="youtube-logo" src="https://tinyurl.com/youtube-logo0">
      </a>
    </div>

    <div class="middle-section">
      <input class="search-bar js-search-bar" type="text" placeholder="Search">

      <button class="search-button js-search-button">
        <img class="search-icon" src="https://tinyurl.com/search-icon0">
        <div class="tooltip">Search</div>
      </button>

      <button class="voice-search-button">
        <img class="voice-search-icon" src="https://tinyurl.com/voice-search-icons">
        <div class="tooltip">Search with your voice</div>
      </button>
    </div>

    <div class="right-section">
      <div class="upload-icon-container">
        <img class="upload-icon" src="https://tinyurl.com/uploads-icons">
        <div class="tooltip">Upload</div>
      </div>

      <div class="youtube-apps-icon-container">
        <img class="youtube-apps-icon" src="https://tinyurl.com/youtube-apps-icon">
        <div class="tooltip">Apps</div>
      </div>
  
       <div class="notifications-icon-container">
        <div class="notify">4</div>
        <img class="notifications-icon" src="https://tinyurl.com/notificaation">
        <div class="tooltip">Notifications</div>
       </div>
    

      <img class="current-user-picture" src="https://tinyurl.com/user-pictures">
    </div>
`;

  document.querySelector('.js-header').innerHTML = headerHTML;
}
