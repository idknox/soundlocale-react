import YouTubePlayer from 'youtube-player';
import './../styles/YTPlayer.css';

class YTPlayer {

	constructor(videoId) {
		this.player = YouTubePlayer('youtube-player', {videoId: videoId});
	}

	playVideo() {
		this.player.playVideo();
	}
}

export default YTPlayer;
