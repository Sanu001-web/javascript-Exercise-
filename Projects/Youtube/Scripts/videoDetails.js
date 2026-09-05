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

function formatCount(value) {
  if (value === null || value === undefined || value === '') {
    return '0';
  }

  const text = String(value).trim();
  const match = text.match(/^([\d,.]+)\s*([KMBT])?/i);

  if (!match) {
    return text;
  }

  let number = Number(match[1].replace(/,/g, ''));
  const suffix = match[2]?.toUpperCase();

  if (Number.isNaN(number)) {
    return text;
  }

  const multipliers = {
    K: 1_000,
    M: 1_000_000,
    B: 1_000_000_000,
    T: 1_000_000_000_000
  };

  if (suffix) {
    number *= multipliers[suffix];
  }

  if (number < 1_000) {
    return Math.floor(number).toString();
  }

  const units = [
    { value: 1_000_000_000_000, suffix: 'T' },
    { value: 1_000_000_000, suffix: 'B' },
    { value: 1_000_000, suffix: 'M' },
    { value: 1_000, suffix: 'K' }
  ];

  const unit = units.find(item => number >= item.value);
  const formattedNumber = (number / unit.value)
    .toFixed(1)
    .replace(/\.0$/, '');

  return `${formattedNumber}${unit.suffix}`;
}

function getEmbedUrl(url) {
  if (!url) return '';

  const id = url.split('/embed/')[1]?.split('?')[0];

  return id
    ? `https://www.youtube.com/embed/${id}?rel=0`
    : url;
}

function loadVideo() {
  if (videoPlayer) {
    videoPlayer.src = getEmbedUrl(currentVideo.videoUrl);
  }

  if (videoTitle) {
    videoTitle.textContent = currentVideo.videoTitle || 'Video Title';
  }

  if (videoDescription) {
    videoDescription.textContent =
      currentVideo.description || 'No description available.';
  }

  if (videoViews) {
    videoViews.textContent =
      `${formatCount(currentVideo.channelViewInfo?.views)} views`;
  }

  if (videoUploadDate) {
    videoUploadDate.textContent =
      currentVideo.channelViewInfo?.UploadDate || 'Unknown date';
  }

  if (videoChannelId) {
    videoChannelId.textContent =
      currentVideo.videoAuthor || 'Unknown channel';
  }

  if (videoDuration) {
    videoDuration.textContent = currentVideo.duration || '00:00';
  }

  if (channelAuthor) {
    channelAuthor.textContent = currentVideo.videoAuthor || 'Unknown channel';
  }

  if (subscriberCount) {
    subscriberCount.textContent =
      `${formatCount(currentVideo.videoSubscriberCount)} subscribers`;
  }

  renderBadges();
  renderRelatedVideos();
  renderProfileImg();
  showReactionCounts();
}

function renderBadges() {
  if (!videoBadges) return;

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
  if (!relatedVideos) return;

  relatedVideos.innerHTML = videoInfo
    .map((video, index) => {
      if (index === videoIndex) return '';

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
                ${formatCount(video.channelViewInfo?.views)} views •
                ${video.channelViewInfo?.UploadDate || 'Unknown date'}
              </p>
            </div>
          </a>
        </article>
      `;
    })
    .join('');
}

let likes =
  Number(localStorage.getItem(`likes-${videoId}`)) ||
  Number(String(currentVideo.likeCount || '').replace(/[KMBT]/gi, '')) ||
  0;

let dislikes = Number(localStorage.getItem(`dislikes-${videoId}`)) || 0;

function showReactionCounts() {
  if (likeNumber) {
    likeNumber.textContent = formatCount(likes);
  }

  if (dislikeNumber) {
    dislikeNumber.textContent = formatCount(dislikes);
  }
}

likeButton?.addEventListener('click', () => {
  likes++;
  localStorage.setItem(`likes-${videoId}`, likes);
  showReactionCounts();
});

dislikeButton?.addEventListener('click', () => {
  dislikes++;
  localStorage.setItem(`dislikes-${videoId}`, dislikes);
  showReactionCounts();
});

moreOption?.addEventListener('click', () => {
  reportOption?.classList.toggle('show-report');
});

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
  if (shareOptions) {
    shareOptions.hidden = !shareOptions.hidden;
  }
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
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
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


// ========================================
// COMMENTS
// ========================================

const currentUser = 'You';

let comments = [
  {
    id: 1,
    username: 'Alex',
    text: 'This video was really helpful!',
    likes: 15,
    dislikes: 2,
    liked: false,
    disliked: false,
    date: Date.now() - 1000000,
    replies: [
      {
        id: 11,
        username: 'Sarah',
        text: 'I agree!',
        likes: 4,
        dislikes: 1,
        liked: false,
        disliked: false,
        date: Date.now() - 500000,
        owner: false
      }
    ],
    owner: false
  },
  {
    id: 2,
    username: 'John',
    text: 'Great explanation. Thanks for sharing.',
    likes: 28,
    dislikes: 1,
    liked: false,
    disliked: false,
    date: Date.now() - 2000000,
    replies: [],
    owner: false
  }
];

function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

function findComment(commentId) {
  return comments.find(comment => comment.id === commentId);
}

function addComment() {
  const input = document.getElementById('commentInput');
  if (!input) return;

  const text = input.value.trim();

  if (!text) {
    alert('Please write a comment.');
    return;
  }

  comments.unshift({
    id: generateId(),
    username: currentUser,
    text,
    likes: 0,
    dislikes: 0,
    liked: false,
    disliked: false,
    date: Date.now(),
    replies: [],
    owner: true
  });

  input.value = '';
  renderComments();
}

function cancelComment() {
  const input = document.getElementById('commentInput');

  if (input) {
    input.value = '';
  }
}

function deleteComment(commentId) {
  const comment = findComment(commentId);

  if (!comment || !comment.owner) return;

  if (confirm('Delete this comment?')) {
    comments = comments.filter(item => item.id !== commentId);
    renderComments();
  }
}

function likeComment(commentId) {
  const comment = findComment(commentId);
  if (!comment) return;

  if (comment.liked) {
    comment.likes--;
    comment.liked = false;
  } else {
    comment.likes++;
    comment.liked = true;

    if (comment.disliked) {
      comment.dislikes--;
      comment.disliked = false;
    }
  }

  renderComments();
}

function dislikeComment(commentId) {
  const comment = findComment(commentId);
  if (!comment) return;

  if (comment.disliked) {
    comment.dislikes--;
    comment.disliked = false;
  } else {
    comment.dislikes++;
    comment.disliked = true;

    if (comment.liked) {
      comment.likes--;
      comment.liked = false;
    }
  }

  renderComments();
}

function findReply(commentId, replyId) {
  const comment = findComment(commentId);
  return comment?.replies.find(reply => reply.id === replyId);
}

function likeReply(commentId, replyId) {
  const reply = findReply(commentId, replyId);
  if (!reply) return;

  if (reply.liked) {
    reply.likes--;
    reply.liked = false;
  } else {
    reply.likes++;
    reply.liked = true;

    if (reply.disliked) {
      reply.dislikes--;
      reply.disliked = false;
    }
  }

  renderComments();
}

function dislikeReply(commentId, replyId) {
  const reply = findReply(commentId, replyId);
  if (!reply) return;

  if (reply.disliked) {
    reply.dislikes--;
    reply.disliked = false;
  } else {
    reply.dislikes++;
    reply.disliked = true;

    if (reply.liked) {
      reply.likes--;
      reply.liked = false;
    }
  }

  renderComments();
}

function toggleReplyForm(commentId) {
  document
    .getElementById(`reply-form-${commentId}`)
    ?.classList.toggle('active');
}

function addReply(commentId) {
  const input = document.getElementById(`reply-input-${commentId}`);
  const comment = findComment(commentId);

  if (!input || !comment) return;

  const text = input.value.trim();

  if (!text) {
    alert('Please write a reply.');
    return;
  }

  comment.replies.push({
    id: generateId(),
    username: currentUser,
    text,
    likes: 0,
    dislikes: 0,
    liked: false,
    disliked: false,
    date: Date.now(),
    owner: true
  });

  input.value = '';
  renderComments();
}

function deleteReply(commentId, replyId) {
  const comment = findComment(commentId);
  const reply = findReply(commentId, replyId);

  if (!comment || !reply || !reply.owner) return;

  if (confirm('Delete this reply?')) {
    comment.replies = comment.replies.filter(item => item.id !== replyId);
    renderComments();
  }
}

function sortComments() {
  const sortSelect = document.getElementById('sort');
  if (!sortSelect) return;

  if (sortSelect.value === 'newest') {
    comments.sort((a, b) => b.date - a.date);
  } else {
    comments.sort(
      (a, b) =>
        b.likes + b.replies.length - (a.likes + a.replies.length)
    );
  }
}

function formatDate(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  if (seconds < 60) return `${seconds}s ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  return `${Math.floor(hours / 24)}d ago`;
}

function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderReplies(comment) {
  if (!comment.replies.length) return '';

  return `
    <div class="replies">
      ${comment.replies.map(reply => `
        <div class="comment">
          <div class="avatar">
            ${escapeHTML(reply.username.charAt(0).toUpperCase())}
          </div>

          <div class="comment-content">
            <div class="comment-top">
              <span class="username">${escapeHTML(reply.username)}</span>
              <span class="date">${formatDate(reply.date)}</span>
            </div>

            <div class="comment-text">${escapeHTML(reply.text)}</div>

            <div class="comment-actions">
              <button
                class="action-btn like-btn"
                onclick="likeReply(${comment.id}, ${reply.id})"
              >
                👍 ${reply.likes}
              </button>

              <button
                class="action-btn dislike-btn"
                onclick="dislikeReply(${comment.id}, ${reply.id})"
              >
                👎 ${reply.dislikes}
              </button>

              ${
                reply.owner
                  ? `
                    <button
                      class="action-btn delete-btn"
                      onclick="deleteReply(${comment.id}, ${reply.id})"
                    >
                      Delete
                    </button>
                  `
                  : ''
              }
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderComments() {
  const container = document.getElementById('commentsList');
  const count = document.getElementById('commentCount');

  if (!container || !count) return;

  sortComments();
  count.textContent = comments.length;

  if (!comments.length) {
    container.innerHTML = `
      <div class="empty">
        No comments yet. Be the first to comment!
      </div>
    `;
    return;
  }

  container.innerHTML = comments.map(comment => `
    <div class="comment">
      <div class="avatar">
        ${escapeHTML(comment.username.charAt(0).toUpperCase())}
      </div>

      <div class="comment-content">
        <div class="comment-top">
          <span class="username">${escapeHTML(comment.username)}</span>
          <span class="date">${formatDate(comment.date)}</span>
        </div>

        <div class="comment-text">${escapeHTML(comment.text)}</div>

        <div class="comment-actions">
          <button
            class="action-btn like-btn"
            onclick="likeComment(${comment.id})"
          >
            👍 ${comment.likes}
          </button>

          <button
            class="action-btn dislike-btn"
            onclick="dislikeComment(${comment.id})"
          >
            👎 ${comment.dislikes}
          </button>

          <button
            class="action-btn"
            onclick="toggleReplyForm(${comment.id})"
          >
            Reply
          </button>

          ${
            comment.owner
              ? `
                <button
                  class="action-btn delete-btn"
                  onclick="deleteComment(${comment.id})"
                >
                  Delete
                </button>
              `
              : ''
          }
        </div>

        <div id="reply-form-${comment.id}" class="reply-form">
          <input
            id="reply-input-${comment.id}"
            type="text"
            placeholder="Add a reply..."
          >

          <button onclick="addReply(${comment.id})">
            Reply
          </button>
        </div>

        ${renderReplies(comment)}
      </div>
    </div>
  `).join('');
}

document.getElementById('sort')?.addEventListener('change', renderComments);


// Inline handlers in video.html need these functions on window.
Object.assign(window, {
  addComment,
  cancelComment,
  deleteComment,
  likeComment,
  dislikeComment,
  likeReply,
  dislikeReply,
  toggleReplyForm,
  addReply,
  deleteReply
});

loadVideo();
renderComments();
