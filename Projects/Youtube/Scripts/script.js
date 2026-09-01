import { renderSidebar } from './sideBar.js';

renderSidebar();

const notificationButton = document.querySelector('.notifications-icon');

notificationButton?.addEventListener('click', () => {
  window.location.href = 'notification.html';
});

const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');

function setSidebarState(isOpen) {
  sidebar?.classList.toggle('active', isOpen);
  document.body.classList.toggle('sidebar-open', isOpen);
}

hamburger?.addEventListener('click', () => {
  const isOpen = sidebar?.classList.contains('active');
  setSidebarState(!isOpen);
});

const themeToggle = document.querySelector('.js-theme-toggle');

function setTheme(isDark) {
  document.body.classList.toggle('dark-theme', isDark);

  if (themeToggle) {
    themeToggle.textContent = isDark ? '☀' : '☾';
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  localStorage.setItem('dark-theme', isDark);
}

const savedTheme = localStorage.getItem('dark-theme') === 'true';

setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-theme');
  setTheme(!isDark);
});
