export const subscriptionInfo = [
  {
    category: 'technology',
    thumbnailContainer: {
      thumbnail: 'https://picsum.photos/640/360?random=11',
      videoDuration: '12:45'
    },
    videoInfo: {
      videoChannelAvatar: 'https://i.pravatar.cc/100?img=1',
      videoDetails: {
        videoTitle: '10 Amazing Technologies You Should Know',
        channelName: 'Tech World',
        videoMeta: '1.2M views • 2 hours ago'
      }
    }
  },
  {
    category: 'programming',
    thumbnailContainer: {
      thumbnail: 'https://picsum.photos/640/360?random=12',
      videoDuration: '28:17'
    },
    videoInfo: {
      videoChannelAvatar: 'https://i.pravatar.cc/100?img=2',
      videoDetails: {
        videoTitle: 'Build a Website From Scratch',
        channelName: 'Code Academy',
        videoMeta: '456K views • 5 hours ago'
      }
    }
  },
  {
    category: 'Travel',
    thumbnailContainer: {
      thumbnail: 'https://picsum.photos/640/360?random=13',
      videoDuration: ' 18:32'
    },
    videoInfo: {
      videoChannelAvatar: 'https://i.pravatar.cc/100?img=3',
      videoDetails: {
        videoTitle: 'Exploring the Most Beautiful Places',
        channelName: 'Travel Vibes',
        videoMeta: '2.1M views • 1 day ago'
      }
    }
  },
  {
    category: 'Music',
    thumbnailContainer: {
      thumbnail: 'https://picsum.photos/640/360?random=14',
      videoDuration: ' 4:28'
    },
    videoInfo: {
      videoChannelAvatar: 'https://i.pravatar.cc/100?img=4',
      videoDetails: {
        videoTitle: ' New Music Mix - Best Songs This Week',
        channelName: 'Music Hub',
        videoMeta: '5.4M views • 1 day ago'
      }
    }
  },
  {
    category: 'fitness',
    thumbnailContainer: {
      thumbnail: 'https://picsum.photos/640/360?random=15',
      videoDuration: '10:52'
    },
    videoInfo: {
      videoChannelAvatar: 'https://i.pravatar.cc/100?img=5',
      videoDetails: {
        videoTitle: 'Best Gadgets You Can Buy This Year',
        channelName: 'Fitness',
        videoMeta: '560K views • 10 days ago'
      }
    }
  },
  {
    category: 'Gadgets',
    thumbnailContainer: {
      thumbnail: 'https://picsum.photos/640/360?random=16',
      videoDuration: '10:52'
    },
    videoInfo: {
      videoChannelAvatar: 'https://i.pravatar.cc/100?img=6',
      videoDetails: {
        videoTitle: 'Best Gadgets You Can Buy This Year',
        channelName: 'Tech World',
        videoMeta: '760K views • 3 days ago'
      }
    }
  }
];



// Render every video into the grid.
export function subscriptionVideoRender(videos = subscriptionInfo) {
  const videoGrid = document.querySelector('#videoGrid');
  if (!videoGrid) return;

  videoGrid.innerHTML = videos.map(video => {
    const thumbnail = video.thumbnailContainer;
    const details = video.videoInfo.videoDetails;

    return `
      <article class="video-card" data-category="${video.category || 'all'}">
        <div class="thumbnail-container">
          <img src="${thumbnail.thumbnail}" alt="${details.videoTitle}">
          <span class="video-duration">${thumbnail.videoDuration}</span>
        </div>

        <div class="video-info">
          <img
            class="video-channel-avatar"
            src="${video.videoInfo.videoChannelAvatar}"
            alt="${details.channelName}"
          >

          <div class="video-details">
            <h3>${details.videoTitle}</h3>
            <p class="channel-name">
              ${details.channelName}
              <i class="fa-solid fa-circle-check verified"></i>
            </p>
            <p class="video-meta">${details.videoMeta}</p>
          </div>

          <button class="more-btn" type="button" aria-label="More options">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </article>
    `;
  }).join('');
}
