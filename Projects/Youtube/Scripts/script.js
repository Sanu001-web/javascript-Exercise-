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

const notificationButton = document.querySelector('.notifications-icon');

notificationButton?.addEventListener('click', () => {
  window.location.href = 'notification.html';
});

const hamburger = document.querySelector('.hamburger-menu');
const hamburgerTwo = document.querySelector('.hamburger-menu-two');
const sidebar = document.querySelector('.sidebar');


function toggleSidebar() {
  const isOpen = sidebar?.classList.contains('active');
  setSidebarState(!isOpen);
}

function setSidebarState(isOpen) {
  sidebar?.classList.toggle('active', isOpen);
  document.body.classList.toggle('sidebar-open', isOpen);
}
setSidebarState(); //Keep sidebar state after page refresh using localStorage.

hamburger?.addEventListener('click', toggleSidebar);
hamburgerTwo?.addEventListener('click', toggleSidebar);

setTheme();



//sidebar-active:


const sidebarItems = document.querySelectorAll(".js-sidebar-container");
const currentPage = window.location.pathname.split("/").pop();

sidebarItems.forEach((item) => {
  const itemPage = item.getAttribute("href");

  if (itemPage === currentPage) {
    item.classList.add("active");
  }
});
