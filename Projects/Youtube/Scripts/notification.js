const notifiChannelInfo = [
  {
    profilePic: 'https://tinyurl.com/4wtvze3d',
    comments: "Jackk Mass commented: 'algorithm concepts are fantastic.'",
    updateComments: '1 day ago',
    thumbnail: 'https://tinyurl.com/bdupmpw6'
  },
  {
    profilePic: 'https://tinyurl.com/2mrsdcv6',
    comments: "Neha Sharma commented: 'chai aur code ek dum must combination kya bolti public.'",
    updateComments: '12 day ago',
    thumbnail: 'https://tinyurl.com/y3yf87e8'
  },
  {
    profilePic: 'https://tinyurl.com/4yvu6ka3',
    comments: "Nick commented: 'Pahle chai bna leta hu fir chai ke saath video dekhunga .'",
    updateComments: '6 minutes ago',
    thumbnail: 'https://tinyurl.com/3239aswr'
  },
  {
    profilePic: 'https://tinyurl.com/3tjyyd2y',
    comments: "Vikash verma commented: ' This is the example of Good Teacher, project end at 30 mins but he add intervalId null to cleanup the memoryvand make this project more.'",
    updateComments: '15 day ago',
    thumbnail: 'https://tinyurl.com/2yzt95s7'
  },
  {
    profilePic: 'https://tinyurl.com/bdrhsadj',
    comments: "Jackk Mass commented: 'behtareen behtareen .'",
    updateComments: '5 months ago',
    thumbnail: 'https://tinyurl.com/y3yf87e8'
  }, {
    profilePic: 'https://tinyurl.com/3tjyyd2y',
    comments: "Aman khan commented: 'Goat of web development is back 🐐.'",
    updateComments: '15 day ago',
    thumbnail: 'https://tinyurl.com/2yzt95s7'
  },

];

function renderNotification(notifications) {
  const notificationContainer = document.querySelector(
    '.js-comments-container-info'
  );

  let notificationHTML = '';

  notifications.forEach((notify) => {
    notificationHTML += `
  
      <div class="profile-picutre-container">
        <img
          class="profile-picutre"
          src="${notify.profilePic}"
          alt="profile picture"
        />
      </div>

      <div class="comments-container">
        <div class="comments">
          ${notify.comments}
        </div>
        <div class="update-comments">
          ${notify.updateComments}
        </div>
      </div>

      <div class="video-thumbnail-container">
      <a href="index.html">
        <img
          class="video-thumbnail"
          src="${notify.thumbnail}"
          alt="video thumbnail"
        />
      </a>
      </div>
    
    `;
  });

  notificationContainer.innerHTML = notificationHTML;
}

renderNotification(notifiChannelInfo);
