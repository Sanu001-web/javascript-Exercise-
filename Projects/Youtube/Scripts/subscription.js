const SUBSCRIPTIONS_KEY = 'subscriptions';
const DEFAULT_SUBSCRIPTIONS = ['channel001', 'channel005'];
const PAGE_STATE_KEY = 'subscription-page-state';

function getSubscriptions() {
  try {
    const saved = JSON.parse(localStorage.getItem(SUBSCRIPTIONS_KEY) || 'null');
    return Array.isArray(saved) ? saved : [...DEFAULT_SUBSCRIPTIONS];
  } catch {
    return [...DEFAULT_SUBSCRIPTIONS];
  }
}

function savePageState(state) {
  try {
    localStorage.setItem(PAGE_STATE_KEY, JSON.stringify(state));
  } catch {
    // Continue working when browser storage is unavailable.
  }
}

function getPageState() {
  try {
    return JSON.parse(localStorage.getItem(PAGE_STATE_KEY) || '{}');
  } catch {
    return {};
  }
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  const toastMessage = document.querySelector('#toastMessage');
  if (!toast) return;

  if (toastMessage) toastMessage.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

function setModal(open) {
  const modal = document.querySelector('#manageModal');
  if (!modal) return;

  modal.classList.toggle('show', open);
  modal.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('modal-open', open);
}

function setNotifications(open) {
  const panel = document.querySelector('#notificationPanel');
  if (!panel) return;

  panel.classList.toggle('show', open);
  panel.setAttribute('aria-hidden', String(!open));
}

function updateSubscriptionButton(button, subscribed) {
  button.classList.toggle('is-unsubscribed', !subscribed);
  button.innerHTML = subscribed
    ? '<i class="fa-solid fa-check"></i> Subscribed'
    : '<i class="fa-solid fa-plus"></i> Subscribe';
  button.setAttribute('aria-pressed', String(subscribed));
}

function updateChannelSubscription(channelName, subscribed) {
  const card = [...document.querySelectorAll('.channel-card')]
    .find(item => item.querySelector('h3')?.textContent.trim() === channelName);
  const button = card?.querySelector('.subscribed-btn');
  if (button) updateSubscriptionButton(button, subscribed);

  const manageChannel = [...document.querySelectorAll('.manage-channel')]
    .find(item => item.querySelector('span')?.textContent.trim() === channelName);
  const checkbox = manageChannel?.querySelector('input[type="checkbox"]');
  if (checkbox) checkbox.checked = subscribed;
}

function setFilter(filter, clickedButton) {
  document.querySelectorAll('.filter-chip').forEach(button => {
    const active = button === clickedButton || (!clickedButton && button.dataset.filter === filter);
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.querySelectorAll('.video-card').forEach(card => {
    card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
  });
}

function sortVideos() {
  const grid = document.querySelector('#videoGrid');
  const sortButton = document.querySelector('#sortBtn');
  if (!grid) return;

  const newestFirst = sortButton?.dataset.order !== 'oldest';
  const cards = [...grid.querySelectorAll('.video-card')];
  cards.reverse().forEach(card => grid.appendChild(card));

  if (sortButton) {
    sortButton.dataset.order = newestFirst ? 'oldest' : 'newest';
    sortButton.innerHTML = newestFirst
      ? '<i class="fa-solid fa-arrow-up-wide-short"></i> Oldest'
      : '<i class="fa-solid fa-arrow-down-wide-short"></i> Latest';
  }
  showToast(newestFirst ? 'Showing oldest videos' : 'Showing latest videos');
}

function copyVideoLink(card) {
  const link = `${window.location.href.split('#')[0]}#${card.querySelector('h3')?.textContent.trim().replace(/\s+/g, '-')}`;
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(link).then(
      () => showToast('Video link copied'),
      () => showToast('Share link ready')
    );
  } else {
    showToast('Share link ready');
  }
}

function initializeSubscriptionPage() {
  if (document.body.dataset.subscriptionReady === 'true') return;
  document.body.dataset.subscriptionReady = 'true';

  const state = getPageState();
  document.querySelectorAll('.filter-chip').forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
  });

  document.querySelectorAll('.subscribed-btn').forEach(button => {
    const channel = button.closest('.channel-card')?.querySelector('h3')?.textContent.trim();
    const subscribed = state.channels?.[channel] !== false;
    updateSubscriptionButton(button, subscribed);

    const checkbox = [...document.querySelectorAll('.manage-channel')]
      .find(item => item.querySelector('span')?.textContent.trim() === channel)
      ?.querySelector('input[type="checkbox"]');
    if (checkbox) checkbox.checked = subscribed;
  });

  document.addEventListener('click', event => {
    const target = event.target;
    const filterButton = target.closest('.filter-chip');
    const subscribedButton = target.closest('.subscribed-btn');
    const actionButton = target.closest('.action-btn');
    const moreButton = target.closest('.more-btn');

    if (filterButton) {
      setFilter(filterButton.dataset.filter || 'all', filterButton);
      return;
    }

    if (target.closest('#manageBtn')) {
      setModal(true);
      return;
    }
    if (target.closest('#closeManageModal, #doneManageBtn')) {
      setModal(false);
      if (target.closest('#doneManageBtn')) showToast('Subscriptions updated');
      return;
    }
    if (target.closest('#manageModal') === target && target.closest('.modal-overlay')) {
      setModal(false);
      return;
    }

    if (target.closest('#closeNotification')) {
      setNotifications(false);
      return;
    }

    if (target.closest('#channelNextBtn')) {
      document.querySelector('#channelsWrapper')?.scrollBy({ left: 230, behavior: 'smooth' });
      return;
    }

    if (target.closest('#sortBtn')) {
      sortVideos();
      return;
    }

    if (subscribedButton) {
      const channel = subscribedButton.closest('.channel-card')?.querySelector('h3')?.textContent.trim();
      const subscribed = !subscribedButton.classList.contains('is-unsubscribed');
      updateSubscriptionButton(subscribedButton, !subscribed);
      const manageCheckbox = [...document.querySelectorAll('.manage-channel')]
        .find(item => item.querySelector('span')?.textContent.trim() === channel)
        ?.querySelector('input[type="checkbox"]');
      if (manageCheckbox) manageCheckbox.checked = !subscribed;
      const nextState = getPageState();
      nextState.channels = { ...(nextState.channels || {}), [channel]: !subscribed };
      savePageState(nextState);
      showToast(!subscribed ? `Subscribed to ${channel}` : `Unsubscribed from ${channel}`);
      return;
    }

    if (actionButton) {
      const card = actionButton.closest('.video-card');
      if (actionButton.classList.contains('like-btn')) {
        const liked = actionButton.classList.toggle('liked');
        actionButton.querySelector('i')?.classList.toggle('fa-regular', !liked);
        actionButton.querySelector('i')?.classList.toggle('fa-solid', liked);
        showToast(liked ? 'Added to liked videos' : 'Removed from liked videos');
      } else if (actionButton.classList.contains('save-btn')) {
        const saved = actionButton.classList.toggle('saved');
        actionButton.querySelector('i')?.classList.toggle('fa-regular', !saved);
        actionButton.querySelector('i')?.classList.toggle('fa-solid', saved);
        actionButton.childNodes[actionButton.childNodes.length - 1].textContent = saved ? ' Saved' : ' Save';
        showToast(saved ? 'Video saved' : 'Video removed from saved videos');
      } else {
        copyVideoLink(card);
      }
      return;
    }

    if (moreButton) {
      showToast('More video options coming soon');
    }
  });

  document.addEventListener('change', event => {
    const checkbox = event.target.closest('.manage-channel input[type="checkbox"]');
    if (!checkbox) return;

    const channel = checkbox.closest('.manage-channel')?.querySelector('span')?.textContent.trim();
    updateChannelSubscription(channel, checkbox.checked);
    const nextState = getPageState();
    nextState.channels = { ...(nextState.channels || {}), [channel]: checkbox.checked };
    savePageState(nextState);
  });

  document.querySelector('#notificationPanel')?.setAttribute('aria-hidden', 'true');
  document.querySelector('#manageModal')?.setAttribute('aria-hidden', 'true');
}

// Keep these existing exports available for other pages that import this module.
export function subsFunc() {
  const subscribeButton = document.querySelector('.subscribe-button');
  const notificationBell = document.querySelector('.js-notification-bell');
  if (!subscribeButton) return;

  subscribeButton.addEventListener('click', () => {
    const subscribed = subscribeButton.textContent.trim() === 'Subscribed';
    const subscriptions = getSubscriptions();
    subscribeButton.textContent = subscribed ? 'Subscribe' : 'Subscribed';
    subscribeButton.classList.toggle('is-sub-btn', !subscribed);
    notificationBell?.classList.toggle('show-bell', !subscribed);
    localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(subscribed
      ? subscriptions.filter(channel => channel !== 'current-channel')
      : [...new Set([...subscriptions, 'current-channel'])]));
  });
}

export function joinFunc() {
  const joinButton = document.querySelector('.js-join-button');
  joinButton?.addEventListener('click', () => {
    const joined = joinButton.textContent.trim() === 'Joined';
    joinButton.textContent = joined ? 'Join' : 'Joined';
    joinButton.classList.toggle('joined', !joined);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSubscriptionPage, { once: true });
} else {
  initializeSubscriptionPage();
}
