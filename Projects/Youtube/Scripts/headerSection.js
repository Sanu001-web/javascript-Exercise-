import { renderHeader } from './header.js';
import { videoInfo, renderVideos } from './videosInfo.js';

const SEARCH_HISTORY_KEY = 'youtube_search_history';

let selectedSuggestionIndex = -1;

renderHeader({ showSearch: true });
initializeSearch();

function initializeSearch() {
  const searchInput = document.querySelector('.js-search-bar');
  const searchButton = document.querySelector('.js-search-button');
  const clearButton = document.querySelector('#clearSearchButton');
  const suggestions = document.querySelector('#searchSuggestions');

  if (!searchInput || !suggestions) {
    return;
  }

  searchInput.addEventListener('input', () => {
    selectedSuggestionIndex = -1;
    updateClearButton();

    const query = searchInput.value.trim();

    if (query) {
      showSuggestions(query);
    } else {
      showRecentSearches();
    }
  });

  searchInput.addEventListener('focus', () => {
    const query = searchInput.value.trim();

    if (query) {
      showSuggestions(query);
    } else {
      showRecentSearches();
    }
  });

  searchInput.addEventListener('keydown', handleKeyboard);

  searchButton?.addEventListener('click', () => {
    performSearch();
  });

  clearButton?.addEventListener('click', clearSearch);

  document.addEventListener('click', event => {
    const wrapper = document.querySelector('.search-wrapper');

    if (wrapper && !wrapper.contains(event.target)) {
      hideSuggestions();
    }
  });

  updateClearButton();
}

function performSearch(value = null) {
  const searchInput = document.querySelector('.js-search-bar');

  if (!searchInput) {
    return;
  }

  const query = String(
    value === null ? searchInput.value : value
  ).trim();

  if (!query) {
    clearSearch();
    return;
  }

  searchInput.value = query;
  saveSearch(query);
  updateClearButton();
  hideSuggestions();

  const results = videoInfo.filter(video => {
    const title = video.videoTitle.toLowerCase();
    const author = video.videoAuthor.toLowerCase();

    return (
      title.includes(query.toLowerCase()) ||
      author.includes(query.toLowerCase())
    );
  });

  renderVideos(results);
}

function showSuggestions(query) {
  const dropdown = document.querySelector('#searchSuggestions');
  const searchText = query.toLowerCase();

  if (!dropdown) {
    return;
  }

  const historyResults = getSearchHistory()
    .filter(item => item.toLowerCase().includes(searchText))
    .slice(0, 4)
    .map(item => ({
      type: 'history',
      text: item
    }));

  const videoResults = videoInfo
    .filter(video =>
      video.videoTitle.toLowerCase().includes(searchText) ||
      video.videoAuthor.toLowerCase().includes(searchText)
    )
    .slice(0, 6)
    .map(video => ({
      type: 'video',
      text: video.videoTitle
    }));

  const results = [...historyResults, ...videoResults]
    .filter((item, index, items) => {
      return items.findIndex(
        other => other.text.toLowerCase() === item.text.toLowerCase()
      ) === index;
    });

  if (!results.length) {
    dropdown.innerHTML = `
      <div class="suggestion-empty">No suggestions</div>
    `;

    showSuggestionsBox();
    return;
  }

  dropdown.innerHTML = results.map((item, index) => `
    <button
      type="button"
      class="suggestion-item"
      data-index="${index}"
      data-query="${escapeHTML(item.text)}"
    >
      <span class="suggestion-icon">
        ${item.type === 'history' ? '🕘' : '🔍'}
      </span>
      <span class="suggestion-text">
        ${escapeHTML(item.text)}
      </span>
    </button>
  `).join('');

  dropdown.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      performSearch(item.dataset.query);
    });
  });

  showSuggestionsBox();
}

function showRecentSearches() {
  const dropdown = document.querySelector('#searchSuggestions');

  if (!dropdown) {
    return;
  }

  const history = getSearchHistory();

  if (!history.length) {
    dropdown.innerHTML = `
      <div class="suggestion-empty">
        Start typing to search videos
      </div>
    `;

    showSuggestionsBox();
    return;
  }

  dropdown.innerHTML = `
    <div class="recent-search-header">
      <strong>Recent searches</strong>
      <button id="clearHistoryButton" type="button">
        Clear all
      </button>
    </div>

    ${history.map((item, index) => `
      <button
        type="button"
        class="suggestion-item"
        data-index="${index}"
        data-query="${escapeHTML(item)}"
      >
        <span class="suggestion-icon">🕘</span>
        <span class="suggestion-text">${escapeHTML(item)}</span>
      </button>
    `).join('')}
  `;

  dropdown.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      performSearch(item.dataset.query);
    });
  });

  dropdown.querySelector('#clearHistoryButton')?.addEventListener(
    'click',
    () => {
      localStorage.removeItem(SEARCH_HISTORY_KEY);
      showRecentSearches();
    }
  );

  showSuggestionsBox();
}

function handleKeyboard(event) {
  const items = document.querySelectorAll(
    '#searchSuggestions .suggestion-item'
  );

  if (event.key === 'ArrowDown' && items.length) {
    event.preventDefault();

    selectedSuggestionIndex =
      (selectedSuggestionIndex + 1) % items.length;

    updateSelectedItem(items);
  }

  if (event.key === 'ArrowUp' && items.length) {
    event.preventDefault();

    selectedSuggestionIndex =
      selectedSuggestionIndex <= 0
        ? items.length - 1
        : selectedSuggestionIndex - 1;

    updateSelectedItem(items);
  }

  if (event.key === 'Enter') {
    event.preventDefault();

    const selectedItem = items[selectedSuggestionIndex];

    if (selectedItem) {
      performSearch(selectedItem.dataset.query);
    } else {
      performSearch();
    }
  }

  if (event.key === 'Escape') {
    hideSuggestions();
  }
}

function updateSelectedItem(items) {
  items.forEach((item, index) => {
    item.classList.toggle(
      'selected',
      index === selectedSuggestionIndex
    );
  });
}

function clearSearch() {
  const searchInput = document.querySelector('.js-search-bar');

  if (!searchInput) {
    return;
  }

  searchInput.value = '';
  selectedSuggestionIndex = -1;

  updateClearButton();
  renderVideos(videoInfo);
  showRecentSearches();
  searchInput.focus();
}

function updateClearButton() {
  const input = document.querySelector('.js-search-bar');
  const clearButton = document.querySelector('#clearSearchButton');

  if (!input || !clearButton) {
    return;
  }

  clearButton.classList.toggle(
    'visible',
    Boolean(input.value.trim())
  );
}

function showSuggestionsBox() {
  document.querySelector('#searchSuggestions')
    ?.classList.add('show');
}

function hideSuggestions() {
  document.querySelector('#searchSuggestions')
    ?.classList.remove('show');

  selectedSuggestionIndex = -1;
}

function getSearchHistory() {
  try {
    const history = JSON.parse(
      localStorage.getItem(SEARCH_HISTORY_KEY) || '[]'
    );

    return Array.isArray(history) ? history : [];
  } catch {
    return [];
  }
}

function saveSearch(query) {
  const history = getSearchHistory();

  const updatedHistory = [
    query,
    ...history.filter(
      item => item.toLowerCase() !== query.toLowerCase()
    )
  ].slice(0, 10);

  try {
    localStorage.setItem(
      SEARCH_HISTORY_KEY,
      JSON.stringify(updatedHistory)
    );
  } catch {
    // Storage may be unavailable in some browsers.
  }
}

function escapeHTML(value) {
  const element = document.createElement('div');
  element.textContent = String(value);
  return element.innerHTML;
}
