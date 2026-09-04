import { videoInfo } from './videosInfo.js';
import { renderHeader } from './header.js';
import { renderSidebar } from './sideBar.js';
import { subsFunc, joinFunc } from './subscription.js';

subsFunc();

renderHeader();
renderSidebar();

const videoPlayer = document.querySelector('#videoPlayer');
const videoTitle = document.querySelector('#videoTitle');
const videoDescription = document.querySelector('#videoDescription');
const videoViews = document.querySelector('#videoViews');
const videoUploadDate = document.querySelector('#videoUploadDate');
const videoChannelId = document.querySelector('#videoChannelId');
const videoDuration = document.querySelector('#videoDuration');
const videoBadges = document.querySelector('#videoBadges');
const relatedVideos = document.querySelector('#relatedVideos');

const watchLaterBtn = document.querySelector('#watchLaterBtn');
const shareBtn = document.querySelector('#shareBtn');
const saveBtn = document.querySelector('#saveBtn');
const downloadBtn = document.querySelector('#downloadBtn');
const profileImage = document.querySelector('#profile-pic');
const channelAuthor = document.querySelector('.js-channel-author');
const subscriberCount = document.querySelector('#subscriber-count');
const likeNumber = document.querySelector('#js-like-count');
const moreOption = document.querySelector('.js-more-options-btn');
const reportOption = document.querySelector('#js-report-option');
// const joinBtn = document.querySelector('.js-join-button');
// const moreOption = document.querySelector('#js-repot-option');

const shareOptions = document.querySelector('#shareOptions');
const copyLinkBtn = document.querySelector('#copyLinkBtn');
const shareFacebookBtn = document.querySelector('#shareFacebookBtn');
const shareTwitterBtn = document.querySelector('#shareTwitterBtn');
const shareWhatsAppBtn = document.querySelector('#shareWhatsAppBtn');

const urlParams = new URLSearchParams(window.location.search);
const videoIndex = Number(urlParams.get('video')) || 0;
const currentVideo = videoInfo[videoIndex] || videoInfo[0];

joinFunc();

function getEmbedUrl(url) {
  if (!url) {
    return '';
  }

  const videoId = url.split('/embed/')[1]?.split('?')[0];

  return videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0`
    : url;
}

function loadVideo() {
  if (!currentVideo) {
    return;
  }

  videoPlayer.src = getEmbedUrl(currentVideo.videoUrl);

  videoTitle.textContent = currentVideo.videoTitle || 'Video Title';

  videoDescription.textContent = currentVideo.description || 'No description available.';

  videoViews.textContent = currentVideo.channelViewInfo?.views || '0 views';

  videoUploadDate.textContent = currentVideo.channelViewInfo?.UploadDate || 'Unknown date';

  videoChannelId.textContent = currentVideo.videoAuthor || currentVideo.channelId || 'Unknown channel';

  videoDuration.textContent = currentVideo.duration || '00:00';

  renderBadges();
  renderRelatedVideos();
  renderProfileImg();
}

function renderBadges() {
  videoBadges.innerHTML = (currentVideo.badges || [])
    .map(badge => `<span class="video-badge">${badge}</span>`)
    .join('');
}

function renderProfileImg() {
  if (!profileImage || !currentVideo.profilePic) {
    return;
  }

  profileImage.innerHTML = `
    <img
      class="profile-picc"
      src="${currentVideo.profilePic}"
      alt="${currentVideo.videoAuthor || 'Channel profile picture'}"
    >
  `;
}

// videos action feedback
channelAuthor.innerHTML = `${currentVideo.videoAuthor}`;
subscriberCount.innerHTML = `${currentVideo.videoSubscriberCount}`;
likeNumber.innerHTML = `${currentVideo.likeCount}`;
//show report option button

moreOption.addEventListener('click', () => {
  reportOption.classList.toggle('show-report');
});

function renderRelatedVideos() {
  relatedVideos.innerHTML = videoInfo
    .map((video, index) => {
      if (index === videoIndex) {
        return '';
      }

      return `
        <article class="related-video-card">
          <a href="video.html?video=${index}" class="related-video-link">
            <div class="related-thumbnail-wrapper">
              <img
                class="related-thumbnail"
                src="${video.thubmnail}"
                alt="${video.videoTitle}"
              >
              <span class="related-video-duration">
                ${video.duration || '00:00'}
              </span>
            </div>

            <div class="related-video-info">
              <h3 class="related-video-title">${video.videoTitle}</h3>
              <p class="related-video-author">${video.videoAuthor}</p>
              <p class="related-video-stats">
                ${video.channelViewInfo?.views || '0 views'} •
                ${video.channelViewInfo?.UploadDate || 'Unknown date'}
              </p>
            </div>
          </a>
        </article>
      `;
    })
    .join('');
}

watchLaterBtn.addEventListener('click', () => {
  const savedVideos = JSON.parse(
    localStorage.getItem('watchLaterVideos') || '[]'
  );

  const alreadySaved = savedVideos.some(
    video => video.videoTitle === currentVideo.videoTitle
  );

  if (!alreadySaved) {
    savedVideos.push(currentVideo);
    localStorage.setItem('watchLaterVideos', JSON.stringify(savedVideos));
    watchLaterBtn.textContent = 'Added to Watch Later';
  } else {
    watchLaterBtn.textContent = 'Already Added';
  }
});

shareBtn.addEventListener('click', () => {
  shareOptions.hidden = !shareOptions.hidden;
});

copyLinkBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyLinkBtn.textContent = 'Link Copied';
  } catch {
    copyLinkBtn.textContent = 'Copy failed';
  }
});

shareFacebookBtn.addEventListener('click', () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    '_blank'
  );
});

shareTwitterBtn.addEventListener('click', () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(currentVideo.videoTitle)}`,
    '_blank'
  );
});

shareWhatsAppBtn.addEventListener('click', () => {
  window.open(
    `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${currentVideo.videoTitle} ${window.location.href}`
    )}`,
    '_blank'
  );
});

saveBtn.addEventListener('click', () => {
  localStorage.setItem('savedVideo', JSON.stringify(currentVideo));
  saveBtn.textContent = 'Saved';
});

downloadBtn.addEventListener('click', () => {
  alert('Downloading 3%');
});

localStorage.setItem(
  "likedVideos",
  JSON.stringify(["video001", "video002"])
);


loadVideo();
