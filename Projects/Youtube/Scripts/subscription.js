export function subsFunc() {
  const subscribeButton = document.querySelector('.subscribe-button');

  subscribeButton?.addEventListener('click', () => {
    const isSubscribed = subscribeButton.innerText === 'Subscribed';

    subscribeButton.innerText = isSubscribed ? 'Subscribe' : 'Subscribed';

    subscribeButton.classList.toggle('is-sub-btn', !isSubscribed);

  });
}

export function joinFunc(){
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
