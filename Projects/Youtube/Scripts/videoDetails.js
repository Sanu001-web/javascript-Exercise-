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

const likeButton = document.querySelector('.like-button');
const dislikeButton = document.querySelector('.dislike-button');
const likeNumber = document.querySelector('#js-like-count');
const dislikeNumber = document.querySelector('#js-dislike-count');

const moreOption = document.querySelector('#js-more-options-btn');
const reportOption = document.querySelector('#js-report-option');

const shareOptions = document.querySelector('#shareOptions');
const copyLinkBtn = document.querySelector('#copyLinkBtn');
const shareFacebookBtn = document.querySelector('#shareFacebookBtn');
const shareTwitterBtn = document.querySelector('#shareTwitterBtn');
const shareWhatsAppBtn = document.querySelector('#shareWhatsAppBtn');

const urlParams = new URLSearchParams(window.location.search);
const videoIndex = Number(urlParams.get('video')) || 0;
const currentVideo = videoInfo[videoIndex] || videoInfo[0];
const videoId = currentVideo.videoId || `video-${videoIndex}`;

joinFunc();

function getEmbedUrl(url) {
  if (!url) return '';

  const id = url.split('/embed/')[1]?.split('?')[0];

  return id
    ? `https://www.youtube.com/embed/${id}?rel=0`
    : url;
}

function loadVideo() {
  videoPlayer.src = getEmbedUrl(currentVideo.videoUrl);

  videoTitle.textContent = currentVideo.videoTitle || 'Video Title';
  videoDescription.textContent =
    currentVideo.description || 'No description available.';
  videoViews.textContent =
    currentVideo.channelViewInfo?.views || '0 views';
  videoUploadDate.textContent =
    currentVideo.channelViewInfo?.UploadDate || 'Unknown date';
  videoChannelId.textContent =
    currentVideo.videoAuthor || 'Unknown channel';
  videoDuration.textContent = currentVideo.duration || '00:00';

  if (channelAuthor) {
    channelAuthor.textContent = currentVideo.videoAuthor || 'Unknown channel';
  }

  if (subscriberCount) {
    subscriberCount.textContent =
      currentVideo.videoSubscriberCount || '0';
  }

  renderBadges();
  renderRelatedVideos();
  renderProfileImg();
  showReactionCounts();
}

function renderBadges() {
  videoBadges.innerHTML = (currentVideo.badges || [])
    .map(badge => `<span class="video-badge">${badge}</span>`)
    .join('');
}

function renderProfileImg() {
  if (!profileImage || !currentVideo.profilePic) return;

  profileImage.innerHTML = `
    <img
      class="profile-picc"
      src="${currentVideo.profilePic}"
      alt="${currentVideo.videoAuthor || 'Channel profile picture'}"
    >
  `;
}

function renderRelatedVideos() {
  relatedVideos.innerHTML = videoInfo
    .map((video, index) => {
      if (index === videoIndex) return '';

      return `
        <article class="related-video-card">
          <a href="video.html?video=${index}" class="related-video-link">
            <img
              class="related-thumbnail"
              src="${video.thubmnail}"
              alt="${video.videoTitle}"
            >
            <h3>${video.videoTitle}</h3>
            <p>${video.videoAuthor}</p>
            <p>
              ${video.channelViewInfo?.views || '0 views'} •
              ${video.channelViewInfo?.UploadDate || 'Unknown date'}
            </p>
          </a>
        </article>
      `;
    })
    .join('');
}

/* Simple like and dislike logic */
let likes = Number(localStorage.getItem(`likes-${videoId}`)) ||
  Number(currentVideo.likeCount) || 0;

let dislikes = Number(localStorage.getItem(`dislikes-${videoId}`)) || 0;

function showReactionCounts() {
  likeNumber.textContent = likes;
  dislikeNumber.textContent = dislikes;
}

likeButton.addEventListener('click', () => {
  likes++;
  localStorage.setItem(`likes-${videoId}`, likes);
  showReactionCounts();
});

dislikeButton.addEventListener('click', () => {
  dislikes++;
  localStorage.setItem(`dislikes-${videoId}`, dislikes);
  showReactionCounts();
});

/* Other buttons */
if (moreOption && reportOption) {
  moreOption.addEventListener('click', () => {
    reportOption.classList.toggle('show-report');
  });
}

watchLaterBtn?.addEventListener('click', () => {
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

shareBtn?.addEventListener('click', () => {
  shareOptions.hidden = !shareOptions.hidden;
});

copyLinkBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyLinkBtn.textContent = 'Link Copied';
  } catch {
    copyLinkBtn.textContent = 'Copy failed';
  }
});

shareFacebookBtn?.addEventListener('click', () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    '_blank'
  );
});

shareTwitterBtn?.addEventListener('click', () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(currentVideo.videoTitle)}`,
    '_blank'
  );
});

shareWhatsAppBtn?.addEventListener('click', () => {
  window.open(
    `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${currentVideo.videoTitle} ${window.location.href}`
    )}`,
    '_blank'
  );
});

saveBtn?.addEventListener('click', () => {
  localStorage.setItem('savedVideo', JSON.stringify(currentVideo));
  saveBtn.textContent = 'Saved';
});

downloadBtn?.addEventListener('click', () => {
  alert('Downloading 3%');
});

loadVideo();
