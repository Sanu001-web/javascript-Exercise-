import { videoInfo } from './videosInfo.js';

(() => {
  const videoGrid = document.querySelector('#videoGrid');
  if (!videoGrid) return;

  const categoryTiles = [...document.querySelectorAll('.categories .category')];
  const navigationButtons = [...document.querySelectorAll('.category-navigation .navi-btn')];
  const sectionTitle = document.querySelector('.section-title');

  const normalize = label => label.trim()
    .replace(/^[^\p{L}\p{N}]+/u, '')
    .toLowerCase();

  const categoryMatchers = {
    trending: () => true,
    all: () => true,
    music: text => /\b(music|song|songs|lyrics?|singer|singing|album|ghazal)\b/i.test(text),
    gaming: text => /\b(gaming|game|games|gameplay)\b/i.test(text),
    news: text => /\b(news|technology|tech|current affairs)\b/i.test(text),
    sports: text => /\b(football|sport|sports|cricket|workout|fitness)\b/i.test(text),
    'movies & tv': text => /\b(movie|film|tv|series|trailer)\b/i.test(text),
    learning: text => /\b(learn|learning|tutorial|course|education|explained|how to|javascript|computer science)\b/i.test(text),
    'fashion & beauty': text => /\b(fashion|beauty|style|makeup)\b/i.test(text),
    ai: text => /\b(ai|artificial intelligence|machine learning)\b/i.test(text),
    'computer programming': text => /\b(programming|code|coding|javascript|java|software|developer|algorithms)\b/i.test(text),
    'recently uploaded': text => /\b(hours?|days?) ago\b/i.test(text),
    watched: () => true
  };

  const emptyMessage = document.createElement('p');
  emptyMessage.className = 'explore-empty-message';
  emptyMessage.setAttribute('role', 'status');
  emptyMessage.textContent = 'No videos found in this category.';
  emptyMessage.style.cssText = 'display:none; grid-column:1/-1; padding:24px 0; color:#aaa;';
  videoGrid.after(emptyMessage);

  function searchableText(video) {
    return [
      video.videoTitle,
      video.videoAuthor,
      video.description,
      ...(video.hashtags || []),
      video.channelViewInfo?.UploadDate
    ].filter(Boolean).join(' ');
  }

  function createVideoCard(video, index) {
    const card = document.createElement('a');
    card.className = 'video-card explore-video-link';
    card.href = `video.html?video=${index}`;
    card.setAttribute('aria-label', `Watch ${video.videoTitle || 'video'}`);

    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';

    const image = document.createElement('img');
    image.src = video.thubmnail || '';
    image.alt = video.videoTitle || 'Video thumbnail';
    image.loading = 'lazy';
    thumbnail.append(image);

    if (video.duration) {
      const duration = document.createElement('span');
      duration.className = 'duration';
      duration.textContent = video.duration;
      thumbnail.append(duration);
    }

    const info = document.createElement('div');
    info.className = 'video-info';

    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = video.profilePic || '';
    avatar.alt = '';
    info.append(avatar);

    const details = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'video-title';
    title.textContent = video.videoTitle || 'Untitled video';

    const channel = document.createElement('div');
    channel.className = 'channel';
    channel.textContent = video.videoAuthor || '';

    const stats = document.createElement('div');
    stats.className = 'views';
    const views = video.channelViewInfo?.views || '';
    const uploaded = video.channelViewInfo?.UploadDate || '';
    stats.textContent = [views, uploaded].filter(Boolean).join(' • ');

    details.append(title, channel, stats);
    info.append(details);
    card.append(thumbnail, info);
    return card;
  }

  function selectFilter(label) {
    const key = normalize(label);
    const matcher = categoryMatchers[key] || (text => text.toLowerCase().includes(key));
    const matchedVideos = videoInfo
      .map((video, index) => ({ video, index }))
      .filter(({ video }) => matcher(searchableText(video)));

    videoGrid.replaceChildren(...matchedVideos.map(({ video, index }) => createVideoCard(video, index)));
    emptyMessage.style.display = matchedVideos.length ? 'none' : 'block';

    if (sectionTitle) {
      sectionTitle.textContent = key === 'trending' || key === 'all'
        ? 'Trending videos'
        : `${label.trim().replace(/^[^\p{L}\p{N}]+/u, '')} videos`;
    }

    categoryTiles.forEach(tile => {
      const selected = normalize(tile.textContent) === key;
      tile.classList.toggle('active', selected);
      tile.setAttribute('aria-pressed', String(selected));
    });

    navigationButtons.forEach(button => {
      const buttonKey = normalize(button.textContent);
      const selected = buttonKey === key || (key === 'trending' && buttonKey === 'all');
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  categoryTiles.forEach(tile => {
    tile.setAttribute('role', 'button');
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('aria-pressed', 'false');
    tile.addEventListener('click', () => selectFilter(tile.textContent));
    tile.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectFilter(tile.textContent);
      }
    });
  });

  navigationButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => selectFilter(button.textContent));
  });

  selectFilter('Trending');
})();
