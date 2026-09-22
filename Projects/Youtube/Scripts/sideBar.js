const sidebar = document.querySelector('.js-sidebarss');
export function renderSidebar() {
  if (!sidebar) return;

  sidebar.innerHTML = `
  

    <div class="sidebar-link home-icon-btn">
      <a href="index.html" class="sidebar-container js-sidebar-container">
        <!-- DARK MODE ICON -->
        <svg class="home-icon icon-light" 
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none"           stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>

        <svg
          class="home-icon icon-dark"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
          <span class="sidebar-items"> Home</span>
        
      </a>
      <div class="tooltip">Home</div>
    </div>


    <div class="sidebar-link explore-icon-btn">
      <a href="explore.html" class="sidebar-container js-sidebar-container">
       <svg 
          class="icon-light"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24"
          viewBox="0 0 24 24"
          fill="none" 
          stroke="#000000"
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="lucide lucide-compass">
          <circle cx="12" cy="12" r="10" />
          <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
        </svg>


          <svg
            class= "icon-dark"
            xmlns="http://www.w3.org/2000/svg" 
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none" 
            stroke="currentColor"
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
         </svg>
         <span class="sidebar-items"> Explore</span>
      </a>
      <div class="tooltip">explore</div>
    </div>

    <div class="sidebar-link subs-icon-btn">
      <a href="subscription.html" class="sidebar-container js-sidebar-container">
        <img class="subscription icon-light" src="https://tinyurl.com/wx7s74bn">
        <img class="subscription icon-dark" src="data:image/png;base64,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
            70mPl+5T5L1EpdVIIMFU2nhoEIkADSpWsJgKsEl
            /Py0aAjogjwAjQkYBj9QMAAAD//9chIDcAAAAGSURBVAMAMUNL7DYY/64AAAAASUVORK5CYII="
          >
        <span class="sidebar-items"> Subscription</span>
      </a>
      <div class="tooltip">subs</div>
    </div>

    <div class="sidebar-link original-icon-btn">
      <a href="original.html" class="sidebar-container js-sidebar-container">
        <img class="original" src="https://img.icons8.com/?size=48&id=T3RtcOyeFsCq&format=png">
        <span class="sidebar-items"> Original</span>
      </a>
      <div class="tooltip">original</div>
    </div>

  
      <div class="sidebar-link music-icon-btn">
        <a href="music.html" class="sidebar-container js-sidebar-container music-tab-link">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-play yt-music">
            <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span class="sidebar-items">Music</span>
        </a>
        <div class="tooltip">music</div>
      </div>

    <div class="sidebar-link sport-icon-btn">
      <a href="sport.html" class="sidebar-container js-sidebar-container">
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy">
          <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
          <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
          <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
          <path d="M4 22h16" />
          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
          <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
        </svg>
        <span class="sidebar-items"> Sport</span>
      </a>
      <div class="tooltip">sport</div>
    </div>

    <div class="sidebar-link history-icon-btn">
      <a href="history.html" class="sidebar-container js-sidebar-container">
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="24"
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-clock">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M12 7v5l4 2" />
        </svg>
        <div class="sidebar-items">History</div>
      </a>
      <div class="tooltip">history</div>
    </div>
 
  `;

}

renderSidebar();
