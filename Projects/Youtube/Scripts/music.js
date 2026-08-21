const jsBtnElem = document.querySelector('.js-subs-button');

const homePage = document.querySelector('.js-home-page');
const postPage = document.querySelector('.js-post-page');
const homeContent = document.querySelector('.js-home-content');
const postContent = document.querySelector('.js-post-content');




const homeHTML = `
 <section class="home-music-content">
      
  <div class="sample-container">
        <h2 class="home-page-title">India's Biggest Hits</h2>

        <div class="sample">
          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/4b9rht7e" alt="India's biggest hits playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/4r5y7ent" alt="Top Indian music playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/3jzh5dn6" alt="Popular Hindi songs playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/msuwu5yt" alt="Latest music playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/5xbwencw" alt="Bollywood hits playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>
        </div>

        <div class="more-container">
      

      <button class="show-more-button" type="button">Show more
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-chevron-down-icon lucide-chevron-down down-arrow">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
        <hr class="hr-line">
      </div>
    </div>
    </section>

<section class="weekly-top-music-lang">

      <div class="sample-container">
        <h2 class="home-page-title">Weekly Top Music Videos by Language</h2>

        <div class="sample">
          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/5n7m6vs9" alt="India's biggest hits playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/5h96r8p7" alt="Top Indian music playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/23xd9kc4" alt="Popular Hindi songs playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/2eu9nv5m" alt="Latest music playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>

          <article class="music-card">
            <div class="img-container">
              <img class="card-image image-back" src="https://tinyurl.com/43x4htrs" alt="">
              <img class="card-image image-middle" src="https://tinyurl.com/3cu78r4a" alt="">
              <div class="image-front">
                <img class="card-image" src="https://tinyurl.com/va4jvf9x" alt="Bollywood hits playlist">
                <div class="overlay">▶ Play all</div>
              </div>
            </div>
          </article>
        </div>

        <div class="more-container">


          <button class="show-more-button" type="button">Show more
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-chevron-down-icon lucide-chevron-down down-arrow">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
          <hr class="hr-line">
        </div>
      </div>

    </section>


`;

const postHTML = `
  <article class="post-card">
    <img class="post-img" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80" alt="Music studio">
    <div class="post-text">
      <h4>What song are you listening to today?</h4>
      <p>Share your favorite song with us and discover new music from other listeners.</p>
    </div>
  </article>

  <article class="post-card">
    <img class="post-img" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80" alt="Singer performing">
    <div class="post-text">
      <h4>New music Friday</h4>
      <p>Fresh music has arrived. Which new release is at the top of your playlist?</p>
    </div>
  </article>

  <article class="post-card">
    <img class="post-img" src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80" alt="Concert crowd">
    <div class="post-text">
      <h4>Concert memories</h4>
      <p>Tell us about the best concert you have ever attended. What made it unforgettable?</p>
    </div>
  </article>

  <article class="post-card">
    <img class="post-img" src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80" alt="Microphone">
    <div class="post-text">
      <h4>Behind the music</h4>
      <p>Every song has a story. Learn more about the inspiration, creativity, and people behind your favorite tracks.</p>
    </div>
  </article>

  <article class="post-card">
    <img class="post-img" src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80" alt="Music festival">
    <div class="post-text">
      <h4>Music festival season</h4>
      <p>Which artist would you most like to see perform live this year?</p>
    </div>
  </article>
`;


function showHomeContent() {
  homeContent.innerHTML = homeHTML;
  postContent.innerHTML = '';

}

function showPostContent() {
  postContent.innerHTML = postHTML;
  homeContent.innerHTML = '';
}

homePage.addEventListener('click', showHomeContent);
postPage.addEventListener('click', showPostContent);
showHomeContent();

//selected code 
const items = document.querySelectorAll(".selectedss");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
  });
});

// subscribe button

jsBtnElem.addEventListener('click', () => {
  if (jsBtnElem.innerText === 'Subscribe') {
    jsBtnElem.innerText = 'Subscribed';
    jsBtnElem.classList.add('is-sub-btn');
  } else {
    jsBtnElem.innerText = 'Subscribe';
    jsBtnElem.classList.remove('is-sub-btn');
  }
});
