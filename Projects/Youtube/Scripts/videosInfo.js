const videoInfo = [
  {
    thubmnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvKnwO4o06B7MgtgP-k4CUz24xy-5siK7dw&s',
    profilePic: 'https://tinyurl.com/2mrsdcv6',
    videoTitle: 'Talking Tech and AI with Google CEO Sundar Pichai!',
    videoAuthor: 'Marques Brownlee',
    channelViewInfo: {
      views: '3.4M views',
      UploadDate: '6 months ago'
    }
  },
  {
    thubmnail: 'https://tinyurl.com/3239aswr',
    profilePic: 'https://tinyurl.com/3j4y5dkc',
    videoTitle: 'Try Not To Laugh Challenge #9',
    videoAuthor: 'Markiplier',
    channelViewInfo: {
      views: '19M views',
      UploadDate: '4 years ago'
    }
  },
  {
    thubmnail: 'https://tinyurl.com/tbjvav3w',
    profilePic: 'https://tinyurl.com/wm55uces',
    videoTitle: 'Crazy Tik Toks Taken Moments Before DISASTER',
    videoAuthor: 'SSSniperWolf',
    channelViewInfo: {
      views: '12M views',
      UploadDate: '1 year ago'
    }
  },
  {
    thubmnail: 'https://tinyurl.com/2yzt95s7',
    profilePic: 'https://tinyurl.com/2set23hh',
    videoTitle: 'The Simplest Math Problem No- Collatz Conjecture',
    videoAuthor: 'Veritasium',
    channelViewInfo: {
      views: '18M views',
      UploadDate: '4 months ago'
    }
  },
  {
    thubmnail: 'https://tinyurl.com/bdupmpw6',
    profilePic: 'https://tinyurl.com/4r75m9xt',
    videoTitle: "Top 7 Algorithms for Coding Interviews Explained SIMPLY",
    videoAuthor: 'CS Dojo',
    channelViewInfo: {
      views: '519K views',
      UploadDate: '5 years ago'
    }
  },
  {
    thubmnail: 'https://tinyurl.com/ykpnv6ar',
    profilePic: 'https://tinyurl.com/24yyfj4f',
    videoTitle: 'Anything You Can Fit In The Circle I’ll Pay For',
    videoAuthor: 'MrBeast',
    channelViewInfo: {
      views: '141M views',
      UploadDate: '1 year ago'
    }
  }

];


function renderVideos() {
  const container = document.querySelector('.js-video-grid');

  let videoGridHtml = '';

  videoInfo.forEach(video => {
    videoGridHtml += `
    
<div class="video-preview">
<a href="youtube.com/watch?v=Tck7MFXRQZg&utm_source=chatgpt.com" target="_blank">
      <div class="thumbnail-row">
        <div class="video-time">14:20</div>
        <img class="thumbnail" src="${video.thubmnail}">
      </div>
      </a>
      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture" src="${video.profilePic}">
        </div>
        <div class="video-info">
          <p class="video-videoTitle">
            ${video.videoTitle}
          </p>
          <p class="video-author">
            ${video.videoAuthor}
          </p>
          <p class="video-stats">
            ${video.channelViewInfo.views}
            •
            ${video.channelViewInfo.UploadDate}
          </p>
        </div>
      </div>
    </div>
`;

  });

  container.innerHTML = videoGridHtml;
}
renderVideos(videoInfo);






