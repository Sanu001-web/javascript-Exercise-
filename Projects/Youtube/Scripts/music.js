import { musicContent, defaultImages } from '../data/musicContent.js';

const subscribeButton = document.querySelector('.js-subs-button');
const homePageButton = document.querySelector('.js-home-page');
const postPageButton = document.querySelector('.js-post-page');
const homeContent = document.querySelector('.js-home-content');
const postContent = document.querySelector('.js-post-content');

function renderMusicCard(music) {
  return `
    <article class="music-card">
      <div class="img-container">
        <img
          class="card-image image-back"
          src="${music.imageBack || defaultImages.imageBack}"
          alt=""
        >

        <img
          class="card-image image-middle"
          src="${music.imageMiddle || defaultImages.imageMiddle}"
          alt=""
        >

        <div class="image-front">
          <img
            class="card-image"
            src="${music.imageFront}"
            alt="${music.alt}"
          >

          <div class="overlay">
            ${music.overlay || '▶ Play all'}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCards(musics) {
  let cardsHTML = '';

  musics.forEach(music => {
    cardsHTML += renderMusicCard(music);
  });

  return cardsHTML;
}

function renderSection(title, musics, sectionClass) {
  return `
    <section class="${sectionClass}">
      <div class="sample-container">
        <h2 class="home-page-title">${title}</h2>

        <div class="sample">
          ${renderCards(musics)}
        </div>

        <div class="more-container">
          <button class="show-more-button" type="button">
            Show more
          </button>

          <hr class="hr-line">
        </div>
      </div>
    </section>
  `;
}

function renderMusic() {
  const sections = [
    {
      title: "India's Biggest Hits",
      musics: musicContent.biggestHits,
      sectionClass: 'home-music-content'
    },
    {
      title: 'Weekly Top Music Videos by Language',
      musics: musicContent.weeklyTop,
      sectionClass: 'weekly-top-music-lang'
    },
    {
      title: 'Discover New Music',
      musics: musicContent.discover,
      sectionClass: 'discover-new-music'
    }
  ];

  let homeHTML = '';

  sections.forEach(section => {
    homeHTML += renderSection(
      section.title,
      section.musics,
      section.sectionClass
    );
  });

  homeContent.innerHTML = homeHTML;
}

function showHomeContent() {
  homeContent.innerHTML = '';
  postContent.innerHTML = '';
  renderMusic();
}

const postHTML = `
  <article class="post-card">
    <img
      class="post-img"
      src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80"
      alt="Music studio"
    >

    <div class="post-text">
      <h4>What song are you listening to today?</h4>
      <p>Share your favorite song with us and discover new music from other listeners.</p>
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
      <p>Fresh music has arrived. Which new release is at the top of your playlist?</p>
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
      <p>Tell us about the best concert you have ever attended.</p>
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
      <p>Every song has a story. Learn more about the inspiration behind your favorite tracks.</p>
    </div>
  </article>

  <article class="post-card">
    <img
      class="post-img"
      src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
      alt="Music festival"
    >

    <div class="post-text">
      <h4>Music festival season</h4>
      <p>Which artist would you most like to see perform live this year?</p>
    </div>
  </article>
`;

function showPostContent() {
  homeContent.innerHTML = '';
  postContent.innerHTML = postHTML;
}

subscribeButton.addEventListener('click', () => {
  const isSubscribed = subscribeButton.innerText === 'Subscribed';

  subscribeButton.innerText = isSubscribed ? 'Subscribe' : 'Subscribed';
  subscribeButton.classList.toggle('is-sub-btn', !isSubscribed);
});

homePageButton.addEventListener('click', showHomeContent);
postPageButton.addEventListener('click', showPostContent);

const tabButtons = document.querySelectorAll('.selectedss');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(tab => tab.classList.remove('selected'));
    button.classList.add('selected');
  });
});

showHomeContent();
