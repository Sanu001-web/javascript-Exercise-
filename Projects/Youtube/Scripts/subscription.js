export function subsFunc() {
  const subscribeButton = document.querySelector('.subscribe-button');
  const notificationBell = document.querySelector('.js-notification-bell');

  subscribeButton?.addEventListener('click', () => {
    const isSubscribed = subscribeButton.innerText === 'Subscribed';

    subscribeButton.innerText = isSubscribed ? 'Subscribe' : 'Subscribed';

    subscribeButton.classList.toggle('is-sub-btn', !isSubscribed);
    // Show bell after subscribing
    notificationBell?.classList.toggle('show-bell', !isSubscribed);
  });
}



localStorage.setItem(
  "subscriptions",
  JSON.stringify(["channel001", "channel005"])
);

localStorage.setItem(
  "notifications",
  JSON.stringify({
    channel001: true
  })
);


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
