import { renderSidebar } from './sideBar.js';
import {setTheme} from './header.js'

renderSidebar();

const categoryButtons = document.querySelectorAll('.navi-btn');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

const categoryNavigation = document.querySelector('.category-navigation');
const previousCategoryButton = document.querySelector('.category-scroll-button--previous');
const nextCategoryButton = document.querySelector('.category-scroll-button--next');

function updateCategoryScrollButtons() {
  if (!categoryNavigation || !previousCategoryButton || !nextCategoryButton) return;

  const maxScroll = categoryNavigation.scrollWidth - categoryNavigation.clientWidth;
  previousCategoryButton.disabled = categoryNavigation.scrollLeft <= 1;
  nextCategoryButton.disabled = categoryNavigation.scrollLeft >= maxScroll - 1;
}

previousCategoryButton?.addEventListener('click', () => {
  categoryNavigation?.scrollBy({ left: -320, behavior: 'smooth' });
});

nextCategoryButton?.addEventListener('click', () => {
  categoryNavigation?.scrollBy({ left: 320, behavior: 'smooth' });
});

categoryNavigation?.addEventListener('scroll', updateCategoryScrollButtons, { passive: true });
window.addEventListener('resize', updateCategoryScrollButtons);
updateCategoryScrollButtons();

const notificationButton = document.querySelector('.notifications-icon');

notificationButton?.addEventListener('click', () => {
  window.location.href = 'notification.html';
});

function toggleSidebar() {
  // Query the sidebar at click time so this also works after dynamic rendering.
  const sidebar = document.querySelector('.js-sidebarss');
  const isOpen = sidebar?.classList.contains('active') === true;
  setSidebarState(!isOpen);
}

function setSidebarState(isOpen) {
  const sidebar = document.querySelector('.js-sidebarss');
  sidebar?.classList.toggle('active', isOpen);
  document.body.classList.toggle('sidebar-open', isOpen);

  try {
    localStorage.setItem('sidebar-open', String(isOpen));
  } catch {
    // Storage may be unavailable in some browsers.
  }
}

let savedSidebarState = false;
try {
  savedSidebarState = localStorage.getItem('sidebar-open') === 'true';
} catch {
  // Use the closed state when storage is unavailable.
}

setSidebarState(savedSidebarState); // Keep sidebar state after page refresh.

// Use delegation because header.js creates the hamburger with innerHTML.
document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.hamburger-menu, .hamburger-menu-two')) {
    toggleSidebar();
    return;
  }

  // On mobile, clicking anywhere outside the open sidebar closes it.
  const sidebar = document.querySelector('.js-sidebarss');
  const isMobile = window.matchMedia('(max-width: 549px)').matches;

  if (
    isMobile &&
    sidebar?.classList.contains('active') &&
    !sidebar.contains(target)
  ) {
    setSidebarState(false);
  }
});

setTheme();



// sidebar-active:

const sidebarItems = document.querySelectorAll(".js-sidebar-container");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

sidebarItems.forEach((item) => {
  const itemPage = item.getAttribute("href");
  const isHomePage = currentPage === "index.html" && itemPage === "index.html";

  if (itemPage === currentPage || isHomePage) {
    item.classList.add("active");
  }
});
