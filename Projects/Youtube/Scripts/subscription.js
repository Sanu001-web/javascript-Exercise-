const SUBSCRIPTIONS_KEY = 'subscriptions';
const DEFAULT_SUBSCRIPTIONS = ['channel001', 'channel005'];

function getSubscriptions() {
  try {
    const saved = JSON.parse(localStorage.getItem(SUBSCRIPTIONS_KEY) || 'null');
    return Array.isArray(saved) ? saved : [...DEFAULT_SUBSCRIPTIONS];
  } catch {
    return [...DEFAULT_SUBSCRIPTIONS];
  }
}

export function subsFunc() {
  const subscribeButton = document.querySelector('.subscribe-button');
  const notificationBell = document.querySelector('.js-notification-bell');

  if (!subscribeButton) return;

  subscribeButton.addEventListener('click', () => {
    const isSubscribed = subscribeButton.innerText.trim() === 'Subscribed';
    const subscriptions = getSubscriptions();

    subscribeButton.innerText = isSubscribed ? 'Subscribe' : 'Subscribed';
    subscribeButton.classList.toggle('is-sub-btn', !isSubscribed);
    notificationBell?.classList.toggle('show-bell', !isSubscribed);

    // Keep the existing saved subscriptions instead of resetting them on load.
    localStorage.setItem(
      SUBSCRIPTIONS_KEY,
      JSON.stringify(isSubscribed
        ? subscriptions.filter(channel => channel !== 'current-channel')
        : [...new Set([...subscriptions, 'current-channel'])])
    );
  });
}


export function joinFunc() {
  const joinButton = document.querySelector('.js-join-button');

  joinButton?.addEventListener('click', () => {
    if (joinButton.innerText === 'Join') {
      joinButton.innerText = 'Joined';
      joinButton.classList.add('joined');
    } else {
      joinButton.innerText = 'Join';
      joinButton.classList.remove('joined');
    }
  });
}
