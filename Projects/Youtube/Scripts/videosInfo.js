export const videoInfo = [
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
    thubmnail: 'https://tinyurl.com/z8jjdcdy',
    profilePic: 'https://tinyurl.com/2set23hh',
    videoTitle: '5 Powerful Lessons that helped me in Life #motivation',
    videoAuthor: 'Veritasium',
    channelViewInfo: {
      views: '18M views',
      UploadDate: '4 months ago'
    }
  },
  {
    thubmnail: 'https://tinyurl.com/4b3e3us3',
    profilePic: 'https://tinyurl.com/2mrsdcv6',
    videoTitle: 'Everything About Machine Learning Explained Slowly (For Sleep)',
    videoAuthor: 'Cosmo Explains',
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
    thubmnail: 'https://tinyurl.com/2p9zabxs',
    profilePic: 'https://tinyurl.com/24yyfj4f',
    videoTitle: 'Building software is not problem solving',
    videoAuthor: 'MrBeast',
    channelViewInfo: {
      views: '141M views',
      UploadDate: '1 year ago'
    }
  }

];


export function renderVideos(videos) {
  const container = document.querySelector('.js-video-grid');

  let videoGridHtml = '';

  videos.forEach(video => {
    videoGridHtml += `
    
    <div class="video-preview">
      <a href="https://youtu.be/0wffuBWP5xg?si=NIte7jO18XNdGpmv">
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





