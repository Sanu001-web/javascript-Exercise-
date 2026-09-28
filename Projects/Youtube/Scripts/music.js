import { musicContent, defaultImages } from '../data/musicContent.js';
import { renderHeader } from './header.js';
import { subsFunc } from './subscription.js';

renderHeader();

/* =========================================
   DOM
========================================= */

const homeContent = document.querySelector('.js-home-content');
const postContent = document.querySelector('.js-post-content');
const homePageButton = document.querySelector('.js-home-page');
const postPageButton = document.querySelector('.js-post-page');

const detailPage = document.querySelector('.js-detail-page');

const audio = document.querySelector('.js-audio');

const player = document.querySelector('.js-music-player');
const playerCover = document.querySelector('.js-player-cover');
const playerTitle = document.querySelector('.js-player-title');
const playerArtist = document.querySelector('.js-player-artist');
const playPauseButton = document.querySelector('.js-play-pause');
const previousButton = document.querySelector('.js-previous');
const nextButton = document.querySelector('.js-next');
const shuffleButton = document.querySelector('.js-shuffle');
const repeatButton = document.querySelector('.js-repeat');
const progress = document.querySelector('.js-progress');
const volume = document.querySelector('.js-volume');
const volumeButton = document.querySelector('.js-volume-button');
const currentTimeElement = document.querySelector('.js-current-time');
const durationElement = document.querySelector('.js-duration');
const playerFavorite = document.querySelector('.js-player-favorite');

const queuePanel = document.querySelector('.js-queue-panel');
const queueList = document.querySelector('.js-queue-list');
const queueCount = document.querySelector('.js-queue-count');

const playlistModal = document.querySelector('.js-playlist-modal');
const playlistName = document.querySelector('.js-playlist-name');
const playlistDescription = document.querySelector('.js-playlist-description');

const searchResult = document.querySelector('.js-search-result');
const searchGrid = document.querySelector('.js-search-grid');

/* =========================================
   CONSTANTS
========================================= */

const DEMO_AUDIO = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
];

const STORAGE_KEYS = {
  favorites: 'music_favorites',
  playlists: 'music_playlists',
  theme: 'music_theme'
};

/* =========================================
   STATE
========================================= */

let currentSongIndex = -1;
let currentPlaylist = [];
let currentPlaylistId = null;

let isShuffle = false;
let repeatMode = 'off';

let editingPlaylistId = null;

let favorites = loadStorage(STORAGE_KEYS.favorites, []);
let userPlaylists = loadStorage(STORAGE_KEYS.playlists, []);

let visibleCounts = {};

/* =========================================
   HELPERS
========================================= */

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHTML(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');

  return `${mins}:${secs}`;
}

function getImage(item) {
  return (
    item?.imageFront ||
    item?.image ||
    item?.thumbnail ||
    defaultImages?.imageFront ||
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80'
  );
}

/* =========================================
   NORMALIZE EXISTING MUSIC DATA
========================================= */

const allSourcePlaylists = [
  ...(musicContent?.biggestHits || []),
  ...(musicContent?.weeklyTop || []),
  ...(musicContent?.discover || [])
];

const playlistMap = new Map();

allSourcePlaylists.forEach((item, index) => {
  const id = String(
    item.id ||
    item.playlistId ||
    `playlist-${index + 1}`
  );

  if (!playlistMap.has(id)) {
    playlistMap.set(id, {
      ...item,
      id,
      title:
        item.title ||
        item.name ||
        item.alt ||
        `Music Playlist ${index + 1}`,
      description:
        item.description ||
        'A collection of popular songs.',
      category:
        item.category ||
        'music',
      imageFront: getImage(item)
    });
  }
});

function createSongsForPlaylist(playlist) {
  if (Array.isArray(playlist.tracks) && playlist.tracks.length) {
    return playlist.tracks.map((song, index) => ({
      id: song.id || `${playlist.id}-song-${index}`,
      title: song.title || song.name || `Song ${index + 1}`,
      artist: song.artist || 'Various Artists',
      album: song.album || playlist.title,
      image: getImage(song) || playlist.imageFront,
      audio: song.audio || DEMO_AUDIO[index % DEMO_AUDIO.length],
      duration: song.duration || 0,
      playlistId: playlist.id
    }));
  }

  return Array.from({ length: 5 }, (_, index) => ({
    id: `${playlist.id}-song-${index + 1}`,
    title: [
      'Midnight Dreams',
      'Golden Hour',
      'Summer Love',
      'Lost In Music',
      'Beautiful Journey'
    ][index],
    artist: playlist.artist || 'Various Artists',
    album: playlist.title,
    image: playlist.imageFront,
    audio: DEMO_AUDIO[index % DEMO_AUDIO.length],
    duration: 0,
    playlistId: playlist.id
  }));
}

const normalizedPlaylists = [...playlistMap.values()].map(playlist => ({
  ...playlist,
  tracks: createSongsForPlaylist(playlist)
}));

/* =========================================
   PLAYLIST CARD
========================================= */

function renderMusicCard(playlist) {
  const songs = playlist.tracks || [];

  return `
    <article
      class="music-card"
      data-playlist-id="${escapeHTML(playlist.id)}"
      data-title="${escapeHTML(playlist.title)}"
      data-category="${escapeHTML(playlist.category || 'music')}"
    >

      <div class="img-container">

        <img
          class="card-image image-back"
          src="${escapeHTML(
            playlist.imageBack || defaultImages?.imageBack || playlist.imageFront
          )}"
          alt=""
        >

        <img
          class="card-image image-middle"
          src="${escapeHTML(
            playlist.imageMiddle || defaultImages?.imageMiddle || playlist.imageFront
          )}"
          alt=""
        >

        <div
          class="image-front js-open-playlist"
          data-playlist-id="${escapeHTML(playlist.id)}"
          tabindex="0"
          role="button"
        >
          <img
            class="card-image"
            src="${escapeHTML(playlist.imageFront)}"
            alt="${escapeHTML(playlist.title)}"
          >

          <div class="overlay">
            ▶ Play all
          </div>
        </div>

      </div>

      <div class="playlist-card-info">

        <div>
          <button
            class="playlist-title js-open-playlist"
            data-playlist-id="${escapeHTML(playlist.id)}"
            type="button"
          >
            ${escapeHTML(playlist.title)}
          </button>

          <p class="playlist-meta">
            ${songs.length} songs · ${escapeHTML(playlist.category || 'Music')}
          </p>
        </div>

        <div class="card-actions">

          <button
            class="card-action js-play-playlist"
            data-playlist-id="${escapeHTML(playlist.id)}"
            type="button"
            title="Play playlist"
          >
            ▶
          </button>

          <button
            class="card-action js-favorite-playlist"
            data-playlist-id="${escapeHTML(playlist.id)}"
            type="button"
            title="Favorite first song"
          >
            ♡
          </button>

        </div>

      </div>
    </article>
  `;
}

/* =========================================
   SECTION
========================================= */

function renderSection(title, playlists, sectionClass) {
  if (!playlists.length) return '';

  if (visibleCounts[sectionClass] === undefined) {
    visibleCounts[sectionClass] = 4;
  }

  const visible = playlists.slice(
    0,
    visibleCounts[sectionClass]
  );

  const hasMore = visible.length < playlists.length;

  return `
    <section class="${sectionClass}">

      <div class="sample-container">

        <h2 class="home-page-title">
          ${escapeHTML(title)}
        </h2>

        <div class="sample">
          ${visible.map(renderMusicCard).join('')}
        </div>

        ${
          hasMore
            ? `
              <div class="more-container">
                <button
                  class="show-more-button js-show-more"
                  data-section="${escapeHTML(sectionClass)}"
                  type="button"
                >
                  Show more
                </button>
                <hr class="hr-line">
              </div>
            `
            : ''
        }

      </div>

    </section>
  `;
}

/* =========================================
   HOME
========================================= */

function getCategoryPlaylists(category = 'all') {
  if (category === 'all') {
    return normalizedPlaylists;
  }

  return normalizedPlaylists.filter(playlist => {
    const playlistCategory =
      String(playlist.category || '').toLowerCase();

    const title =
      String(playlist.title || '').toLowerCase();

    return (
      playlistCategory.includes(category) ||
      title.includes(category)
    );
  });
}

function renderMusic(category = 'all') {
  if (!homeContent) return;

  const playlists = getCategoryPlaylists(category);

  const first = playlists.slice(0);
  const second = playlists.slice(1);
  const third = playlists.slice(2);

  homeContent.innerHTML = `

    ${
      category === 'all'
        ? `
          <section class="my-playlists">
            <div class="playlist-management">
              <div>
                <h2 class="home-page-title">My Playlists</h2>
              </div>

              <button
                class="create-playlist-button js-create-playlist"
                type="button"
              >
                + Create playlist
              </button>
            </div>

            <div class="sample">
              ${renderUserPlaylists()}
            </div>
          </section>
        `
        : ''
    }

    ${renderSection(
      category === 'all'
        ? "India's Biggest Hits"
        : `${capitalize(category)} Music`,
      first,
      'home-music-content'
    )}

    ${
      category === 'all'
        ? renderSection(
            'Weekly Top Music Videos by Language',
            second,
            'weekly-top-music-lang'
          )
        : ''
    }

    ${
      category === 'all'
        ? renderSection(
            'Discover New Music',
            third,
            'discover-new-music'
          )
        : ''
    }

  `;
}

/* =========================================
   USER PLAYLISTS
========================================= */

function renderUserPlaylists() {
  if (!userPlaylists.length) {
    return `
      <div class="playlist-empty">
        You haven't created a playlist yet.
      </div>
    `;
  }

  return userPlaylists.map(playlist => `
    <article class="music-card">

      <div class="img-container">

        <div
          class="image-front js-open-user-playlist"
          data-playlist-id="${escapeHTML(playlist.id)}"
        >
          <img
            class="card-image"
            src="${escapeHTML(
              playlist.image ||
              'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80'
            )}"
            alt="${escapeHTML(playlist.name)}"
          >

          <div class="overlay">
            ▶ Open playlist
          </div>
        </div>

      </div>

      <div class="playlist-card-info">

        <div>
          <button
            class="playlist-title js-open-user-playlist"
            data-playlist-id="${escapeHTML(playlist.id)}"
            type="button"
          >
            ${escapeHTML(playlist.name)}
          </button>

          <p class="playlist-meta">
            ${playlist.songs?.length || 0} songs
          </p>
        </div>

        <div class="card-actions">

          <button
            class="card-action js-edit-playlist"
            data-playlist-id="${escapeHTML(playlist.id)}"
            type="button"
          >
            ✏
          </button>

          <button
            class="card-action js-delete-playlist"
            data-playlist-id="${escapeHTML(playlist.id)}"
            type="button"
          >
            🗑
          </button>

        </div>

      </div>

    </article>
  `).join('');
}

/* =========================================
   POSTS
========================================= */

const postHTML = `
  <article class="post-card">
    <img
      class="post-img"
      src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80"
      alt="Music studio"
    >
    <div class="post-text">
      <h4>What song are you listening to today?</h4>
      <p>
        Share your favorite song and discover new music
        from other listeners.
      </p>
    </div>
  </article>

  <article class="post-card">
    <img
      class="post-img"
      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
      alt="Singer performing"
    >
    <div class="post-text">
      <h4>New music Friday</h4>
      <p>
        Fresh music has arrived. Which new release is
        at the top of your playlist?
      </p>
    </div>
  </article>

  <article class="post-card">
    <img
      class="post-img"
      src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80"
      alt="Concert crowd"
    >
    <div class="post-text">
      <h4>Concert memories</h4>
      <p>
        Tell us about the best concert you have ever attended.
      </p>
    </div>
  </article>

  <article class="post-card">
    <img
      class="post-img"
      src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
      alt="Microphone"
    >
    <div class="post-text">
      <h4>Behind the music</h4>
      <p>
        Every song has a story. Learn more about the inspiration
        behind your favorite music.
      </p>
    </div>
  </article>
`;

function showHomeContent() {
  homeContent?.classList.remove('hidden');
  postContent?.classList.add('hidden');
  detailPage?.classList.add('hidden');

  renderMusic();
}

function showPostContent() {
  homeContent?.classList.add('hidden');
  detailPage?.classList.add('hidden');
  postContent?.classList.remove('hidden');

  if (postContent) {
    postContent.innerHTML = postHTML;
  }
}

/* =========================================
   DETAIL PAGE
========================================= */

function getPlaylistById(id) {
  return normalizedPlaylists.find(
    playlist => playlist.id === id
  );
}

function getUserPlaylistById(id) {
  return userPlaylists.find(
    playlist => playlist.id === id
  );
}

function openPlaylistPage(id, user = false) {
  const playlist = user
    ? getUserPlaylistById(id)
    : getPlaylistById(id);

  if (!playlist || !detailPage) return;

  const songs = user
    ? playlist.songs || []
    : playlist.tracks || [];

  homeContent?.classList.add('hidden');
  postContent?.classList.add('hidden');
  searchResult?.classList.add('hidden');
  detailPage.classList.remove('hidden');

  detailPage.innerHTML = `

    <div class="detail-header">

      <img
        class="detail-cover"
        src="${escapeHTML(
          playlist.image || playlist.imageFront || getImage(playlist)
        )}"
        alt="${escapeHTML(playlist.name || playlist.title)}"
      >

      <div>

        <p class="detail-type">
          ${user ? 'Playlist' : 'Music Playlist'}
        </p>

        <h1 class="detail-title">
          ${escapeHTML(playlist.name || playlist.title)}
        </h1>

        <p class="detail-description">
          ${escapeHTML(
            playlist.description ||
            'Listen to this collection of songs.'
          )}
        </p>

        <div class="detail-actions">

          <button
            class="primary-button js-play-detail"
            data-playlist-id="${escapeHTML(id)}"
            data-user="${user}"
            type="button"
          >
            ▶ Play all
          </button>

          <button
            class="secondary-button js-add-all-queue"
            data-playlist-id="${escapeHTML(id)}"
            data-user="${user}"
            type="button"
          >
            + Add to queue
          </button>

        </div>

      </div>

    </div>

    <div class="song-list">

      ${
        songs.length
          ? songs.map((song, index) =>
              renderSongRow(song, index)
            ).join('')
          : `
            <div class="playlist-empty">
              This playlist has no songs yet.
            </div>
          `
      }

    </div>
  `;

  history.pushState(
    { playlist: id },
    '',
    `#playlist/${encodeURIComponent(id)}`
  );
}

function renderSongRow(song, index) {
  const isFavorite = favorites.includes(song.id);

  return `
    <div
      class="song-row ${currentSong()?.id === song.id ? 'active' : ''}"
      data-song-id="${escapeHTML(song.id)}"
    >

      <span class="song-number">
        ${index + 1}
      </span>

      <img
        class="song-cover"
        src="${escapeHTML(song.image)}"
        alt=""
      >

      <div class="song-info">

        <button
          class="song-name js-play-song"
          data-song-id="${escapeHTML(song.id)}"
          type="button"
        >
          ${escapeHTML(song.title)}
        </button>

        <p class="song-artist">
          ${escapeHTML(song.artist)}
        </p>

      </div>

      <button
        class="song-action ${isFavorite ? 'favorite-active' : ''} js-favorite-song"
        data-song-id="${escapeHTML(song.id)}"
        type="button"
        aria-label="Favorite"
      >
        ${isFavorite ? '♥' : '♡'}
      </button>

      <button
        class="song-action js-add-song-queue"
        data-song-id="${escapeHTML(song.id)}"
        type="button"
        aria-label="Add to queue"
      >
        +
      </button>

      <span class="song-duration">
        ${formatTime(song.duration)}
      </span>

    </div>
  `;
}

/* =========================================
   FLATTEN SONGS
========================================= */

function getAllSongs() {
  const songs = [];

  normalizedPlaylists.forEach(playlist => {
    songs.push(...playlist.tracks);
  });

  userPlaylists.forEach(playlist => {
    songs.push(...(playlist.songs || []));
  });

  return songs.filter(
    (song, index, array) =>
      array.findIndex(item => item.id === song.id) === index
  );
}

function findSong(id) {
  return getAllSongs().find(song => song.id === id);
}

function currentSong() {
  return currentPlaylist[currentSongIndex] || null;
}

/* =========================================
   PLAYER
========================================= */

function playSong(song, playlist = null, index = 0) {
  if (!song) return;

  if (playlist?.length) {
    currentPlaylist = playlist;
    currentSongIndex = index;
  } else {
    currentPlaylist = [song];
    currentSongIndex = 0;
  }

  audio.src = song.audio;
  audio.load();

  playerCover.src = song.image;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;

  updateFavoriteButton();
  updatePlayerUI();

  audio.play().catch(() => {
    updatePlayerUI();
  });
}

function playPlaylist(playlist) {
  if (!playlist?.tracks?.length) return;

  currentPlaylist = playlist.tracks;
  currentPlaylistId = playlist.id;
  currentSongIndex = 0;

  playSong(
    currentPlaylist[0],
    currentPlaylist,
    0
  );
}

function togglePlay() {
  if (!currentSong()) {
    const playlist = normalizedPlaylists[0];

    if (playlist) {
      playPlaylist(playlist);
    }

    return;
  }

  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
}

function nextSong() {
  if (!currentPlaylist.length) return;

  if (isShuffle) {
    let nextIndex = Math.floor(
      Math.random() * currentPlaylist.length
    );

    if (
      currentPlaylist.length > 1 &&
      nextIndex === currentSongIndex
    ) {
      nextIndex =
        (nextIndex + 1) % currentPlaylist.length;
    }

    currentSongIndex = nextIndex;
  } else {
    currentSongIndex++;

    if (currentSongIndex >= currentPlaylist.length) {
      if (repeatMode === 'all') {
        currentSongIndex = 0;
      } else {
        currentSongIndex = currentPlaylist.length - 1;
        audio.pause();
        return;
      }
    }
  }

  playSong(
    currentPlaylist[currentSongIndex],
    currentPlaylist,
    currentSongIndex
  );
}

function previousSong() {
  if (!currentPlaylist.length) return;

  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  currentSongIndex--;

  if (currentSongIndex < 0) {
    currentSongIndex =
      repeatMode === 'all'
        ? currentPlaylist.length - 1
        : 0;
  }

  playSong(
    currentPlaylist[currentSongIndex],
    currentPlaylist,
    currentSongIndex
  );
}

function updatePlayerUI() {
  if (!playPauseButton) return;

  playPauseButton.textContent =
    audio.paused ? '▶' : '❚❚';

  playPauseButton.setAttribute(
    'aria-label',
    audio.paused ? 'Play' : 'Pause'
  );

  const song = currentSong();

  if (song) {
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    playerCover.src = song.image;
  }
}

function updateFavoriteButton() {
  const song = currentSong();

  if (!song || !playerFavorite) return;

  const favorite = favorites.includes(song.id);

  playerFavorite.textContent =
    favorite ? '♥' : '♡';

  playerFavorite.classList.toggle(
    'favorite-active',
    favorite
  );
}

/* =========================================
   QUEUE
========================================= */

function renderQueue() {
  if (!queueList) return;

  queueCount.textContent =
    `${currentPlaylist.length} songs`;

  queueList.innerHTML = currentPlaylist.length
    ? currentPlaylist.map((song, index) => `
        <div
          class="queue-item ${
            index === currentSongIndex ? 'active' : ''
          }"
        >

          <img
            class="queue-cover"
            src="${escapeHTML(song.image)}"
            alt=""
          >

          <div class="queue-info">
            <div class="queue-song">
              ${escapeHTML(song.title)}
            </div>

            <div class="queue-artist">
              ${escapeHTML(song.artist)}
            </div>
          </div>

          <button
            class="song-action js-queue-play"
            data-index="${index}"
            type="button"
          >
            ▶
          </button>

        </div>
      `).join('')
    : `
      <div class="playlist-empty">
        Your queue is empty.
      </div>
    `;
}

function addToQueue(song) {
  if (!song) return;

  if (!currentPlaylist.some(item => item.id === song.id)) {
    currentPlaylist.push(song);
  }

  renderQueue();
}

function addPlaylistToQueue(songs) {
  songs.forEach(song => addToQueue(song));
  renderQueue();
}

/* =========================================
   FAVORITES
========================================= */

function toggleFavorite(songId) {
  if (!songId) return;

  if (favorites.includes(songId)) {
    favorites = favorites.filter(id => id !== songId);
  } else {
    favorites.push(songId);
  }

  saveStorage(
    STORAGE_KEYS.favorites,
    favorites
  );

  updateFavoriteButton();

  if (!detailPage.classList.contains('hidden')) {
    const row = detailPage.querySelector(
      `[data-song-id="${CSS.escape(songId)}"]`
    );

    if (row) {
      const button =
        row.querySelector('.js-favorite-song');

      const active = favorites.includes(songId);

      button.textContent = active ? '♥' : '♡';
      button.classList.toggle(
        'favorite-active',
        active
      );
    }
  }
}

/* =========================================
   PLAYLIST CREATION
========================================= */

function openPlaylistModal(playlist = null) {
  editingPlaylistId = playlist?.id || null;

  document.querySelector(
    '#playlist-modal-title'
  ).textContent = playlist
    ? 'Edit playlist'
    : 'Create playlist';

  playlistName.value =
    playlist?.name || '';

  playlistDescription.value =
    playlist?.description || '';

  playlistModal.classList.remove('hidden');

  setTimeout(() => {
    playlistName.focus();
  }, 50);
}

function closePlaylistModal() {
  playlistModal.classList.add('hidden');
  editingPlaylistId = null;
  playlistName.value = '';
  playlistDescription.value = '';
}

function savePlaylist() {
  const name = playlistName.value.trim();

  if (!name) {
    playlistName.focus();
    return;
  }

  const description =
    playlistDescription.value.trim();

  if (editingPlaylistId) {
    const playlist = getUserPlaylistById(
      editingPlaylistId
    );

    if (playlist) {
      playlist.name = name;
      playlist.description = description;
    }
  } else {
    userPlaylists.push({
      id: `user-${Date.now()}`,
      name,
      description,
      image:
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
      songs: []
    });
  }

  saveStorage(
    STORAGE_KEYS.playlists,
    userPlaylists
  );

  closePlaylistModal();
  renderMusic();
}

function deletePlaylist(id) {
  const playlist = getUserPlaylistById(id);

  if (!playlist) return;

  const confirmed = confirm(
    `Delete "${playlist.name}"?`
  );

  if (!confirmed) return;

  userPlaylists = userPlaylists.filter(
    item => item.id !== id
  );

  saveStorage(
    STORAGE_KEYS.playlists,
    userPlaylists
  );

  renderMusic();
}

/* =========================================
   SEARCH
========================================= */

function performSearch(query) {
  query = query.trim().toLowerCase();

  if (!query) {
    searchResult?.classList.add('hidden');
    homeContent?.classList.remove('hidden');
    return;
  }

  const playlists = normalizedPlaylists.filter(
    playlist => {
      const playlistText =
        `${playlist.title} ${playlist.description || ''} ${playlist.category || ''}`
          .toLowerCase();

      const songText =
        playlist.tracks
          .map(song =>
            `${song.title} ${song.artist} ${song.album}`
          )
          .join(' ')
          .toLowerCase();

      return (
        playlistText.includes(query) ||
        songText.includes(query)
      );
    }
  );

  const songs = getAllSongs().filter(song =>
    `${song.title} ${song.artist} ${song.album}`
      .toLowerCase()
      .includes(query)
  );

  homeContent?.classList.add('hidden');
  postContent?.classList.add('hidden');
  detailPage?.classList.add('hidden');
  searchResult?.classList.remove('hidden');

  searchGrid.innerHTML = `

    ${
      playlists.length
        ? `
          <div style="grid-column:1/-1">
            <h2 class="home-page-title">
              Playlists
            </h2>
          </div>

          ${playlists.map(renderMusicCard).join('')}
        `
        : ''
    }

    ${
      songs.length
        ? `
          <div style="grid-column:1/-1">
            <h2 class="home-page-title">
              Songs
            </h2>
          </div>

          <div class="song-list" style="grid-column:1/-1">
            ${songs.map((song, index) =>
              renderSongRow(song, index)
            ).join('')}
          </div>
        `
        : ''
    }

    ${
      !playlists.length && !songs.length
        ? `
          <div class="playlist-empty"
               style="grid-column:1/-1">
            No music found for "${escapeHTML(query)}".
          </div>
        `
        : ''
    }

  `;
}

function findSearchInput() {
  return document.querySelector(
    '.search-bar input, .search-input, input[placeholder*="Search" i], input[type="search"]'
  );
}

/* =========================================
   ARTIST / ALBUM PAGES
========================================= */

function openArtistPage(artist) {
  const songs = getAllSongs().filter(
    song =>
      song.artist.toLowerCase() ===
      artist.toLowerCase()
  );

  if (!songs.length) return;

  detailPage.classList.remove('hidden');
  homeContent?.classList.add('hidden');
  postContent?.classList.add('hidden');
  searchResult?.classList.add('hidden');

  detailPage.innerHTML = `
    <div class="artist-header">

      <img
        class="artist-image"
        src="${escapeHTML(songs[0].image)}"
        alt="${escapeHTML(artist)}"
      >

      <div>
        <p class="detail-type">Artist</p>

        <h1 class="detail-title">
          ${escapeHTML(artist)}
        </h1>

        <p class="detail-description">
          ${songs.length} songs available.
        </p>

        <div class="detail-actions">
          <button
            class="primary-button js-play-artist"
            type="button"
          >
            ▶ Play
          </button>
        </div>
      </div>

    </div>

    <div class="song-list">
      ${songs.map((song, index) =>
        renderSongRow(song, index)
      ).join('')}
    </div>
  `;

  detailPage
    .querySelector('.js-play-artist')
    ?.addEventListener('click', () => {
      currentPlaylist = songs;
      currentPlaylistId = null;
      currentSongIndex = 0;

      playSong(
        songs[0],
        songs,
        0
      );
    });
}

function openAlbumPage(album) {
  const songs = getAllSongs().filter(
    song =>
      song.album.toLowerCase() ===
      album.toLowerCase()
  );

  if (!songs.length) return;

  detailPage.classList.remove('hidden');
  homeContent?.classList.add('hidden');
  postContent?.classList.add('hidden');
  searchResult?.classList.add('hidden');

  detailPage.innerHTML = `
    <div class="detail-header">

      <img
        class="album-cover-large"
        src="${escapeHTML(songs[0].image)}"
        alt="${escapeHTML(album)}"
      >

      <div>
        <p class="detail-type">Album</p>

        <h1 class="detail-title">
          ${escapeHTML(album)}
        </h1>

        <p class="detail-description">
          ${escapeHTML(songs[0].artist)}
        </p>

        <div class="detail-actions">
          <button
            class="primary-button js-play-album"
            type="button"
          >
            ▶ Play
          </button>
        </div>
      </div>

    </div>

    <div class="song-list">
      ${songs.map((song, index) =>
        renderSongRow(song, index)
      ).join('')}
    </div>
  `;

  detailPage
    .querySelector('.js-play-album')
    ?.addEventListener('click', () => {
      currentPlaylist = songs;
      currentSongIndex = 0;

      playSong(
        songs[0],
        songs,
        0
      );
    });
}

/* =========================================
   EVENTS
========================================= */

homePageButton?.addEventListener(
  'click',
  showHomeContent
);

postPageButton?.addEventListener(
  'click',
  showPostContent
);

document.querySelectorAll('.selectedss')
  .forEach(button => {
    button.addEventListener('click', () => {
      document
        .querySelectorAll('.selectedss')
        .forEach(tab =>
          tab.classList.remove('selected')
        );

      button.classList.add('selected');
    });
  });

/* Category buttons */

document.addEventListener('click', event => {

  const categoryButton =
    event.target.closest('.category-btn');

  if (categoryButton) {
    document
      .querySelectorAll('.category-btn')
      .forEach(button =>
        button.classList.remove('active')
      );

    categoryButton.classList.add('active');

    const category =
      categoryButton.dataset.category || 'all';

    showHomeContent();
    renderMusic(category);
  }

  /* Playlist */

  const openPlaylist =
    event.target.closest('.js-open-playlist');

  if (openPlaylist) {
    openPlaylistPage(
      openPlaylist.dataset.playlistId
    );
  }

  const openUserPlaylist =
    event.target.closest('.js-open-user-playlist');

  if (openUserPlaylist) {
    openPlaylistPage(
      openUserPlaylist.dataset.playlistId,
      true
    );
  }

  /* Play playlist */

  const playPlaylistButton =
    event.target.closest('.js-play-playlist');

  if (playPlaylistButton) {
    const playlist = getPlaylistById(
      playPlaylistButton.dataset.playlistId
    );

    playPlaylist(playlist);
  }

  /* Show more */

  const showMore =
    event.target.closest('.js-show-more');

  if (showMore) {
    const section =
      showMore.dataset.section;

    visibleCounts[section] =
      (visibleCounts[section] || 4) + 4;

    renderMusic();
  }

  /* Create playlist */

  if (
    event.target.closest('.js-create-playlist')
  ) {
    openPlaylistModal();
  }

  /* Edit playlist */

  const editButton =
    event.target.closest('.js-edit-playlist');

  if (editButton) {
    const playlist = getUserPlaylistById(
      editButton.dataset.playlistId
    );

    openPlaylistModal(playlist);
  }

  /* Delete playlist */

  const deleteButton =
    event.target.closest('.js-delete-playlist');

  if (deleteButton) {
    deletePlaylist(
      deleteButton.dataset.playlistId
    );
  }

  /* Song */

  const songButton =
    event.target.closest('.js-play-song');

  if (songButton) {
    const song = findSong(
      songButton.dataset.songId
    );

    if (song) {
      playSong(song);
    }
  }

  /* Favorite */

  const favoriteButton =
    event.target.closest('.js-favorite-song');

  if (favoriteButton) {
    toggleFavorite(
      favoriteButton.dataset.songId
    );
  }

  /* Add song */

  const addSongButton =
    event.target.closest('.js-add-song-queue');

  if (addSongButton) {
    addToQueue(
      findSong(addSongButton.dataset.songId)
    );
  }

  /* Queue song */

  const queuePlayButton =
    event.target.closest('.js-queue-play');

  if (queuePlayButton) {
    const index =
      Number(queuePlayButton.dataset.index);

    if (currentPlaylist[index]) {
      currentSongIndex = index;

      playSong(
        currentPlaylist[index],
        currentPlaylist,
        index
      );

      renderQueue();
    }
  }

  /* Detail play */

  const detailPlay =
    event.target.closest('.js-play-detail');

  if (detailPlay) {
    const id =
      detailPlay.dataset.playlistId;

    const isUser =
      detailPlay.dataset.user === 'true';

    const playlist = isUser
      ? getUserPlaylistById(id)
      : getPlaylistById(id);

    const songs = isUser
      ? playlist?.songs || []
      : playlist?.tracks || [];

    if (songs.length) {
      currentPlaylist = songs;
      currentPlaylistId = id;
      currentSongIndex = 0;

      playSong(
        songs[0],
        songs,
        0
      );
    }
  }

  /* Add playlist to queue */

  const addQueue =
    event.target.closest('.js-add-all-queue');

  if (addQueue) {
    const id = addQueue.dataset.playlistId;
    const isUser =
      addQueue.dataset.user === 'true';

    const playlist = isUser
      ? getUserPlaylistById(id)
      : getPlaylistById(id);

    const songs = isUser
      ? playlist?.songs || []
      : playlist?.tracks || [];

    addPlaylistToQueue(songs);
  }

  /* Favorite playlist */

  const favoritePlaylist =
    event.target.closest('.js-favorite-playlist');

  if (favoritePlaylist) {
    const playlist = getPlaylistById(
      favoritePlaylist.dataset.playlistId
    );

    if (playlist?.tracks?.[0]) {
      toggleFavorite(
        playlist.tracks[0].id
      );
    }
  }

});

/* =========================================
   PLAYER EVENTS
========================================= */

playPauseButton?.addEventListener(
  'click',
  togglePlay
);

nextButton?.addEventListener(
  'click',
  nextSong
);

previousButton?.addEventListener(
  'click',
  previousSong
);

shuffleButton?.addEventListener(
  'click',
  () => {
    isShuffle = !isShuffle;
    shuffleButton.classList.toggle(
      'active',
      isShuffle
    );
  }
);

repeatButton?.addEventListener(
  'click',
  () => {
    if (repeatMode === 'off') {
      repeatMode = 'all';
      repeatButton.classList.add('active');
    } else if (repeatMode === 'all') {
      repeatMode = 'one';
      repeatButton.classList.add('active');
    } else {
      repeatMode = 'off';
      repeatButton.classList.remove('active');
    }
  }
);

audio?.addEventListener(
  'play',
  updatePlayerUI
);

audio?.addEventListener(
  'pause',
  updatePlayerUI
);

audio?.addEventListener(
  'loadedmetadata',
  () => {
    durationElement.textContent =
      formatTime(audio.duration);
  }
);

audio?.addEventListener(
  'timeupdate',
  () => {
    if (!audio.duration) return;

    progress.value =
      (audio.currentTime / audio.duration) * 100;

    currentTimeElement.textContent =
      formatTime(audio.currentTime);
  }
);

audio?.addEventListener(
  'ended',
  () => {
    if (repeatMode === 'one') {
      audio.currentTime = 0;
      audio.play();
      return;
    }

    nextSong();
  }
);

progress?.addEventListener(
  'input',
  () => {
    if (!audio.duration) return;

    audio.currentTime =
      (Number(progress.value) / 100) *
      audio.duration;
  }
);

volume?.addEventListener(
  'input',
  () => {
    audio.volume = Number(volume.value);

    volumeButton.textContent =
      audio.volume === 0
        ? '🔇'
        : audio.volume < 0.5
          ? '🔉'
          : '🔊';
  }
);

volumeButton?.addEventListener(
  'click',
  () => {
    if (audio.volume > 0) {
      audio.dataset.previousVolume =
        audio.volume;

      audio.volume = 0;
      volume.value = 0;
      volumeButton.textContent = '🔇';
    } else {
      const previous =
        Number(audio.dataset.previousVolume) || 1;

      audio.volume = previous;
      volume.value = previous;
      volumeButton.textContent = '🔊';
    }
  }
);

playerFavorite?.addEventListener(
  'click',
  () => {
    const song = currentSong();

    if (song) {
      toggleFavorite(song.id);
    }
  }
);

/* =========================================
   QUEUE EVENTS
========================================= */

document
  .querySelector('.js-open-queue')
  ?.addEventListener('click', () => {
    queuePanel.classList.add('open');
    renderQueue();
  });

document
  .querySelector('.js-close-queue')
  ?.addEventListener('click', () => {
    queuePanel.classList.remove('open');
  });

/* =========================================
   PLAYLIST MODAL EVENTS
========================================= */

document
  .querySelector('.js-save-playlist')
  ?.addEventListener(
    'click',
    savePlaylist
  );

document
  .querySelector('.js-cancel-playlist')
  ?.addEventListener(
    'click',
    closePlaylistModal
  );

document
  .querySelector('.js-close-playlist-modal')
  ?.addEventListener(
    'click',
    closePlaylistModal
  );

playlistModal?.addEventListener(
  'click',
  event => {
    if (event.target === playlistModal) {
      closePlaylistModal();
    }
  }
);

/* =========================================
   SEARCH IN EXISTING HEADER
========================================= */

document.addEventListener(
  'input',
  event => {
    const input = findSearchInput();

    if (!input || event.target !== input) {
      return;
    }

    performSearch(input.value);
  }
);

document
  .querySelector('.js-clear-search')
  ?.addEventListener(
    'click',
    () => {
      const input = findSearchInput();

      if (input) {
        input.value = '';
      }

      searchResult?.classList.add('hidden');
      homeContent?.classList.remove('hidden');

      renderMusic();
    }
  );

/* =========================================
   ENTER KEY SEARCH
========================================= */

document.addEventListener(
  'keydown',
  event => {
    const input = findSearchInput();

    if (
      input &&
      event.target === input &&
      event.key === 'Enter'
    ) {
      performSearch(input.value);
    }

    if (
      event.key === 'Escape' &&
      !playlistModal.classList.contains('hidden')
    ) {
      closePlaylistModal();
    }
  }
);

/* =========================================
   NOTIFICATION NAVIGATION
========================================= */

document.addEventListener(
  'click',
  event => {
    const notification =
      event.target.closest(
        '.notifications-icon-container, .notification-button, .notifications-icon'
      );

    if (!notification) return;

    window.location.href = 'notifications.html';
  }
);

/* =========================================
   THEME SUPPORT
========================================= */

function syncTheme() {
  const savedTheme =
    localStorage.getItem(STORAGE_KEYS.theme);

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
  }
}

function watchThemeChanges() {
  const themeButton =
    document.querySelector(
      '.theme-toggle, .js-theme-toggle'
    );

  themeButton?.addEventListener(
    'click',
    () => {
      setTimeout(() => {
        const isDark =
          document.body.classList.contains(
            'dark-theme'
          );

        localStorage.setItem(
          STORAGE_KEYS.theme,
          isDark ? 'dark' : 'light'
        );
      }, 50);
    }
  );
}

syncTheme();
watchThemeChanges();

/* =========================================
   HASH ROUTING
========================================= */

function handleHashRoute() {
  const hash =
    window.location.hash;

  if (hash.startsWith('#playlist/')) {
    const id =
      decodeURIComponent(
        hash.replace('#playlist/', '')
      );

    if (getPlaylistById(id)) {
      openPlaylistPage(id);
      return;
    }

    if (getUserPlaylistById(id)) {
      openPlaylistPage(id, true);
      return;
    }
  }

  showHomeContent();
}

window.addEventListener(
  'popstate',
  handleHashRoute
);

window.addEventListener(
  'hashchange',
  handleHashRoute
);

/* =========================================
   UTILS
========================================= */

function capitalize(value) {
  if (!value) return '';

  return value.charAt(0).toUpperCase() +
    value.slice(1);
}

/* =========================================
   START
========================================= */

audio.volume = 1;

subsFunc();

renderMusic();

renderQueue();

handleHashRoute();
