(() => {
  'use strict';

  const PROFILE_KEY = 'profile_channel_data';
  const LOGIN_KEY = 'profile_login_state';
  const SUBSCRIBED_KEY = 'profile_subscribed';

  const defaultProfile = {
    username: 'My YouTube Channel',
    image: 'https://tinyurl.com/bdharchm',
    subscribers: 1250,
    description: 'Welcome to my YouTube channel! Here you can find videos, shorts, live streams and more.',
    handle: '@mychannel'
  };

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  function readStorage(key, fallback) {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      return saved ?? fallback;
    } catch {
      return fallback;
    }
  }

  function saveStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // The page still works when browser storage is unavailable.
    }
  }

  function getProfile() {
    return { ...defaultProfile, ...readStorage(PROFILE_KEY, {}) };
  }

  function formatNumber(value) {
    const number = Number(value || 0);

    if (number < 1000) return number.toLocaleString();

    const units = [
      { limit: 1_000_000_000, suffix: 'B' },
      { limit: 1_000_000, suffix: 'M' },
      { limit: 1_000, suffix: 'K' }
    ];

    const unit = units.find(({ limit }) => number >= limit);
    const compactValue = number / unit.limit;
    const roundedValue = compactValue >= 100 ? Math.round(compactValue) : compactValue.toFixed(1);

    return `${String(roundedValue).replace(/\.0$/, '')}${unit.suffix}`;
  }

  function renderProfile() {
    const profile = getProfile();
    const image = profile.image || defaultProfile.image;

    $('#profileUsername').textContent = profile.username;
    $('#profileHandle').textContent = profile.handle || `@${profile.username.toLowerCase().replace(/\s+/g, '')}`;
    $('#subscriberCount').textContent = formatNumber(profile.subscribers);
    $('#dashboardSubscribers').textContent = formatNumber(profile.subscribers);
    $('#profileDescription').textContent = profile.description;
    $('#profileImage').src = image;
    $('#communityProfileImage').src = image;
    $('#communityUsername').textContent = profile.username;
  }

  window.showChannelTab = (tabId, button) => {
    $$('.channel-tab-content').forEach(content => {
      content.classList.toggle('active-content', content.id === tabId);
    });

    $$('.channel-tab').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
    });
  };

  window.openEditProfile = () => {
    const profile = getProfile();
    $('#editUsername').value = profile.username;
    $('#editProfileImage').value = profile.image;
    $('#editSubscribers').value = profile.subscribers;
    $('#editDescription').value = profile.description;
    $('#editProfileModal').classList.add('show');
    $('#editUsername').focus();
  };

  window.closeEditProfile = () => $('#editProfileModal').classList.remove('show');

  window.saveProfile = () => {
    const username = $('#editUsername').value.trim();
    const image = $('#editProfileImage').value.trim();
    const subscribers = Math.max(0, Number.parseInt($('#editSubscribers').value, 10) || 0);
    const description = $('#editDescription').value.trim();

    if (!username) {
      showMessage('Please enter a channel name.');
      $('#editUsername').focus();
      return;
    }

    saveStorage(PROFILE_KEY, {
      username,
      image: image || defaultProfile.image,
      subscribers,
      description: description || defaultProfile.description,
      handle: `@${username.toLowerCase().replace(/[^a-z0-9]+/g, '') || 'mychannel'}`
    });

    renderProfile();
    closeEditProfile();
    showMessage('Profile updated');
  };

  window.subscribeChannel = () => {
    const button = $('.subscribe-button');
    const subscribed = readStorage(SUBSCRIBED_KEY, false);
    saveStorage(SUBSCRIBED_KEY, !subscribed);
    button.textContent = subscribed ? 'Subscribe' : 'Subscribed';
    button.classList.toggle('is-subscribed', !subscribed);
    showMessage(subscribed ? 'Unsubscribed from this channel' : 'Subscribed');
  };

  function renderSubscription() {
    const subscribed = readStorage(SUBSCRIBED_KEY, false);
    const button = $('.subscribe-button');
    button.textContent = subscribed ? 'Subscribed' : 'Subscribe';
    button.classList.toggle('is-subscribed', subscribed);
  }

  window.openLoginModal = () => {
    $('#loginModal').classList.add('show');
    $('#loginUsername').focus();
  };

  window.closeLoginModal = () => $('#loginModal').classList.remove('show');

  window.loginUser = () => {
    const username = $('#loginUsername').value.trim();
    const email = $('#loginEmail').value.trim();

    if (!username || !email || !email.includes('@')) {
      showMessage('Enter a valid username and email.');
      return;
    }

    saveStorage(LOGIN_KEY, { username, email });
    renderLoginStatus();
    closeLoginModal();
    showMessage(`Welcome, ${username}`);
  };

  window.logoutUser = () => {
    localStorage.removeItem(LOGIN_KEY);
    renderLoginStatus();
    showMessage('You have been logged out');
  };

  function renderLoginStatus() {
    const login = readStorage(LOGIN_KEY, null);
    $('#loginStatus').textContent = login
      ? `Signed in as ${login.username} (${login.email})`
      : 'You are not signed in.';
  }

  function showMessage(message) {
    let toast = $('#profileToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'profileToast';
      toast.setAttribute('role', 'status');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(showMessage.timer);
    showMessage.timer = setTimeout(() => toast.classList.remove('visible'), 2600);
  }

  function activateSmallInteractions() {
    $$('.channel-card, .video-item, .short-card, .playlist-card').forEach(card => {
      card.addEventListener('click', event => {
        if (event.target.closest('button, a')) return;
        showMessage('Video preview selected');
      });
    });

    $$('.community-actions').forEach(actions => {
      actions.addEventListener('click', event => {
        const target = event.target;
        if (target.textContent.includes('Like')) {
          target.textContent = '❤️ Liked    💬 Comment';
          showMessage('Post liked');
        } else if (target.textContent.includes('Comment')) {
          showMessage('Comments are coming soon');
        }
      });
    });

    $$('.navi-btn').forEach(button => {
      button.addEventListener('click', () => {
        $$('.navi-btn').forEach(item => item.classList.remove('active'));
        button.classList.add('active');
      });
    });

    $$('.modal').forEach(modal => {
      modal.addEventListener('click', event => {
        if (event.target === modal) modal.classList.remove('show');
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      $$('.modal.show').forEach(modal => modal.classList.remove('show'));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderSubscription();
    renderLoginStatus();
    activateSmallInteractions();
    $$('.channel-tab').forEach((tab, index) => {
      tab.setAttribute('aria-selected', String(index === 0));
    });
  });
})();
