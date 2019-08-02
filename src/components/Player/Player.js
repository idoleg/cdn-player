import React from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr";

const BLANK_VIDEO = "https://cdn.plyr.io/static/blank.mp4";

export default class Player extends React.Component {
    state = {
    	videoElement: React.createRef(),
    }
    currentPlayer = null;
    componentDidMount() {
    	this.currentPlayer = new Plyr(this.state.videoElement.current, {
    		title: "CDN Player",
    		controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
    		settings: ["captions", "quality", "speed", "loop"],
    	});
    	this.update();
    }
    componentDidUpdate(prevProps) {
    	if (this.props.url !== prevProps.url) {
    		this.update();
    	}
    }
    update() {
    	this.currentPlayer.stop();
    	this.currentPlayer.source = getSourceFor(BLANK_VIDEO);
    	this.currentPlayer.source = getSourceFor(this.props.url);
    	this.currentPlayer.play();
    }
    componentWillUnmount() {
    	this.currentPlayer.destroy();
    }
    render() {
    	return <video ref={this.state.videoElement}>
    		<source src={BLANK_VIDEO} type="video/mp4" />
    	</video>;
    }
}


function getSourceFor(url) {
	return {
		type: "video",
		sources: [
			{
				src: url,
				type: "video/mp4",
				size: 720,
			}
		]
	};
} 