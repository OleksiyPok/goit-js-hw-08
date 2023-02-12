import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_PLAYER_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

onResumePlayer();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
  localStorage.setItem(CURRENT_PLAYER_TIME_KEY, data.seconds);
}

function onResumePlayer() {
  const currentPlayerTime = localStorage.getItem(CURRENT_PLAYER_TIME_KEY);
  if (currentPlayerTime) player.setCurrentTime(currentPlayerTime);
}
