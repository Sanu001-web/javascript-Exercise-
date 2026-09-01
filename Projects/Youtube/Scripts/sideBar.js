const sidebar = document.querySelector('.js-sidebarss');
export function renderSidebar() {
  if (!sidebar) return;

  sidebar.innerHTML = `
  
 
    <div class="sidebar-link">
      <div class="sidebar-container">


        <!-- DARK MODE ICON -->
        <svg class="home-icon icon-light" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-house-icon lucide-house">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <div class="sidebar-items">Home</div>
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
        <img class="explore" src="https://img.icons8.com/?size=48&id=Ts6tllzIMAHs&format=png">
        <div class="sidebar-items">Explore</div>
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
        <img class="subscription" src="https://img.icons8.com/?size=80&id=reqYJP3X0f7Y&format=png">
        <div class="sidebar-items">Subscription</div>
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
        <img class="original" src="https://img.icons8.com/?size=48&id=T3RtcOyeFsCq&format=png">
        <div class="sidebar-items">Original</div>
      </div>
    </div>

    <a href="music.html" class="music-tab-link">
      <div class="sidebar-link">
        <div class="sidebar-container">
          <img class="yt-music" src="https://img.icons8.com/?size=50&id=BhQ1jBS6I2Bu&format=png">
          <div class="sidebar-items">Music</div>
        </div>
      </div>
    </a>

    <div class="sidebar-link">
      <div class="sidebar-container">
        <img class="library" src="https://img.icons8.com/?size=50&id=23030&format=png">
        <div class="sidebar-items">Library</div>
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
        <img class="history" src="https://img.icons8.com/?size=50&id=6904&format=png">
        <div class="sidebar-items">History</div>
      </div>
    </div>
 
  `;

}
renderSidebar();
