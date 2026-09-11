const sidebar = document.querySelector('.js-sidebarss');
export function renderSidebar() {
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-link">
      <div class="sidebar-container">


        <!-- DARK MODE ICON -->
        <svg class="home-icon icon-light" 
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-house-icon lucide-house">
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
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
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
            stroke-linejoin="round"
            class="lucide lucide-compass">
            <circle cx="12" cy="12" r="10" />
            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
         </svg>
         <span class="sidebar-items"> Explore</span>
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
        <img class="subscription icon-light" src="https://tinyurl.com/wx7s74bn">
        <img class="subscription icon-dark" src="https://tinyurl.com/yc4wn25r">
        <span class="sidebar-items"> Subscription</span>
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
        <img class="original" src="https://img.icons8.com/?size=48&id=T3RtcOyeFsCq&format=png">
        <span class="sidebar-items"> Original</span>
      </div>
    </div>

    <a href="music.html" class="music-tab-link">
      <div class="sidebar-link">
        <div class="sidebar-container">
          <img class="yt-music icon-light" src="https://tinyurl.com/yry3tmyz">
          <img class="yt-music icon-dark" src="https://tinyurl.com/57pxhkuc">
          <span class="sidebar-items"> Music</span>
        </div>
      </div>
    </a>

    <div class="sidebar-link">
      <div class="sidebar-container">
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
      </div>
    </div>

    <div class="sidebar-link">
      <div class="sidebar-container">
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
      </div>
    </div>
 
  `;

}

renderSidebar();
