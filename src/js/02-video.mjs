// localStorage.setItem('playtime', '1');

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeFromLocalStorage = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(timeFromLocalStorage)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
const throttledEvent = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
player.on('timeupdate', throttledEvent);

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
