import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function(e) {    
    });
    
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


player.on('timeupdate', trottle(getCurrentTime, 1000));

function getCurrentTime(time) {
    const timeToPlay = localStorage.setItem('videoplayer-current-time', time.seconds);
    return timeToPlay;
};
const currentTime = localStorage.getItem('videoplayer-current-time') ? localStorage.getItem('videoplayer-current-time') : 0;

player.setCurrentTime(currentTime);



