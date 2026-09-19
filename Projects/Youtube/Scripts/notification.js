import { loadCommentNotifications } from './comments.js';

const notifiChannelInfo = [
  {
    profilePic: 'https://tinyurl.com/4wtvze3d',
    comments: "Jackk Mass commented: 'algorithm concepts are fantastic.'",
    updateComments: '1 day ago',
    thumbnail: 'https://tinyurl.com/bdupmpw6',
  },
  {
    profilePic: 'https://tinyurl.com/2mrsdcv6',
    comments: "Miraa Sharma commented: 'chai aur code ek dum must combination kya bolti public.'",
    updateComments: '12 day ago',
    thumbnail: 'https://tinyurl.com/y3yf87e8',
  },
  {
    profilePic: 'https://tinyurl.com/4yvu6ka3',
    comments: "Nick commented: 'Pahle chai bna leta hu fir chai ke saath video dekhunga .'",
    updateComments: '6 minutes ago',
    thumbnail: 'https://tinyurl.com/3239aswr',
  },
  {
    profilePic: 'https://tinyurl.com/3tjyyd2y',
    comments: "Vikash verma commented: ' This is the example of Good Teacher, project end at 30 mins but he add intervalId null to cleanup the memoryvand make this project more.'",
    updateComments: '15 day ago',
    thumbnail: 'https://tinyurl.com/2yzt95s7',
  },
  {
    profilePic: 'https://tinyurl.com/bdrhsadj',
    comments: "Jackk Mass commented: 'behtareen behtareen .'",
    updateComments: '5 months ago',
    thumbnail: 'https://tinyurl.com/y3yf87e8',

  }, {
    profilePic: 'https://tinyurl.com/3tjyyd2y',
    comments: "Aman khan commented: 'Goat of web development is back 🐐.'",
    updateComments: '15 day ago',
    thumbnail: 'https://tinyurl.com/2yzt95s7',
  },

];

// Display notification dates in a YouTube-style relative format.
function formatNotificationDate(createdAt, fallback = 'Unknown date') {
  const date = new Date(createdAt);

  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  const now = new Date();
  const seconds = Math.max(0, Math.floor((now - date) / 1000));

  if (seconds < 60) return 'Just now';

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }

  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const calendarDays = Math.floor((startOfToday - startOfDate) / 86_400_000);

  if (calendarDays === 0) return 'Today';
  if (calendarDays === 1) return 'Yesterday';
  if (calendarDays < 30) {
    return `${calendarDays} day${calendarDays === 1 ? '' : 's'} ago`;
  }

  const months = Math.floor(calendarDays / 30);
  if (months < 12) {
    return `${months} month${months === 1 ? '' : 's'} ago`;
  }

  const years = Math.floor(calendarDays / 365);
  return `${years} year${years === 1 ? '' : 's'} ago`;
}

function notificationQuant(savedNotifications = loadCommentNotifications()) {
  // Six notifications are built in; add every comment notification saved by the user.
  return notifiChannelInfo.length + savedNotifications.length;
}

function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text ?? '';
  return div.innerHTML;
}

function renderNotification(notifications) {
  const notificationContainer = document.querySelector(
    '.js-comments-container-info'
  );

  if (!notificationContainer) return;

  let notificationHTML = '';

  notifications.forEach((notify) => {
    notificationHTML += `
  
      <div class="profile-picutre-container">
        <img
          class="profile-picutre"
          src="${notify.profilePic}"
          alt="profile picture"
        />
      </div>

      <div class="comments-container">
        <div class="comments">
          ${escapeHTML(notify.comments)}
        </div>
        <div class="update-comments js-update-comments">
          ${escapeHTML(formatNotificationDate(notify.createdAt, notify.updateComments))}
        </div>
      </div>

      <div class="video-thumbnail-container">
      <a href="${notify.videoUrl || 'index.html'}">
        <img
          class="video-thumbnail"
          src="${notify.thumbnail}"
          alt="video thumbnail"
        />
      </a>
      </div>
    
    `;
  });

  notificationContainer.innerHTML = notificationHTML;
}

const savedNotifications = loadCommentNotifications();
const totalNotifications = notificationQuant(savedNotifications);

const notificationTitle = document.querySelector('.noty');
if (notificationTitle) {
  notificationTitle.textContent = `Notification (${totalNotifications})`;
}

renderNotification([...savedNotifications, ...notifiChannelInfo]);

