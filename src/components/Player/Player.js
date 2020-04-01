import React, { useRef, useEffect, useContext } from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr";
import { StoreContext } from "../../store";
import { changeVideo } from "../../store/actions";

const BLANK_VIDEO = "https://cdn.plyr.io/static/blank.mp4";

// https://stackoverflow.com/questions/13760805/how-to-take-a-snapshot-of-html5-javascript-based-video-player
export default () => {
  const [state, dispatch] = useContext(StoreContext);
  const plyrElement = useRef();
  const plyrInstance = useRef();

  useEffect(() => {
    console.group("Init plyr");
    plyrInstance.current = new Plyr(plyrElement.current, {
      title: "CDN Player",
      controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
      settings: ["captions", "quality", "speed", "loop"],
    });
    console.groupEnd();
    return () => {
      plyrInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    if(state.videoUrl === "") return;
    console.group("Set new video");

    const source = state.videoUrl;

    plyrInstance.current.stop();
    plyrInstance.current.source = getSourceFor(BLANK_VIDEO);
    plyrInstance.current.source = getSourceFor(source);
    plyrInstance.current.play()
      .catch((error) => console.warn("Couldn't run autoplay without user activity"));

    const handlePlayingEvent = (event) => {
      console.group("Handle playing");
      dispatch(changeVideo(source, plyrInstance.current.currentTime));
      console.groupEnd();
    };
    const handlePauseEvent = (event) => {
      console.group("Handle stop");
      dispatch(changeVideo(source, plyrInstance.current.currentTime));
      console.groupEnd();
    };

    plyrInstance.current.once("progress", event => {
      const historyItem = state.history.find(item => item.source === source);
      const timeOfLastPlay = historyItem ? historyItem.time : 0;
      plyrInstance.current.currentTime = timeOfLastPlay;
    });
    plyrInstance.current.on("playing", handlePlayingEvent);
    plyrInstance.current.on("pause", handlePauseEvent);

    console.groupEnd();
    return () => {
      plyrInstance.current.off("playing", handlePlayingEvent);
      plyrInstance.current.off("pause", handlePauseEvent);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.videoUrl]);

  return (<video ref={plyrElement} style={{display: "none"}}>
    <source src={BLANK_VIDEO} type="video/mp4" />
  </video>);
};

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
