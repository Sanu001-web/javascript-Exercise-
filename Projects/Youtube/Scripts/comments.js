export const currentUser = 'You';

export const notificationsStorageKey = 'comment-notifications';

export function saveCommentNotification(notification) {
  let notifications = [];

  try {
    const storedNotifications = JSON.parse(
      localStorage.getItem(notificationsStorageKey) || '[]'
    );
    notifications = Array.isArray(storedNotifications) ? storedNotifications : [];
  } catch {
    notifications = [];
  }

  notifications.unshift({
    id: Date.now() + Math.floor(Math.random() * 1000),
    ...notification
  });
  localStorage.setItem(notificationsStorageKey, JSON.stringify(notifications));
  window.dispatchEvent(new CustomEvent('comment-notification-added'));
}

export function loadCommentNotifications() {
  try {
    const notifications = JSON.parse(
      localStorage.getItem(notificationsStorageKey) || '[]'
    );
    return Array.isArray(notifications) ? notifications : [];
  } catch {
    return [];
  }
}

export let comments = [
  {
    id: 1,
    username: 'Alex',
    text: 'This video was really helpful!',
    likes: 15,
    dislikes: 2,
    liked: false,
    disliked: false,
    date: Date.now() - 1000000,
    replies: [
      {
        id: 11,
        username: 'Sarah',
        text: 'I agree!',
        likes: 4,
        dislikes: 1,
        liked: false,
        disliked: false,
        date: Date.now() - 500000,
        owner: false
      }
    ],
    owner: false
  },
  {
    id: 2,
    username: 'John',
    text: 'Great explanation. Thanks for sharing.',
    likes: 28,
    dislikes: 1,
    liked: false,
    disliked: false,
    date: Date.now() - 2000000,
    replies: [],
    owner: false
  }
];
