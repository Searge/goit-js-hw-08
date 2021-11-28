import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function timePlayer() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(STORAGE_KEY, seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

player.on('timeupdate', throttle(timePlayer, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY) || 0;

player.setCurrentTime(currentTime).catch(function (error) {
  console.log(error);
});
