import { render } from "react-dom";
import { useEffect, useRef } from "react";
import { VideoScroll } from "react-video-scroll";
import usePageBottom from "../helper/pageBottom";

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${
    Math.floor(videoEl.duration) * playbackRate + "px"
  })`;
  wrapperEl.style.marginBottom = `calc(180% - ${
    Math.floor(videoEl.duration) * playbackRate + "px"
  })`;
};

const RimacDesk = () => {
  const reachedBottom = usePageBottom();

  useEffect(() => {
    reachedBottom && window.scrollTo(0, 0);
  }, [reachedBottom]);

  return (
    <div style={{ height: "12700vh", position: "relative" }}>
      <VideoScroll
        onLoad={(props) =>
          setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
        }
        playbackRate={45}
        style={{ position: "sticky" }}
      >
        <video
          tabIndex="0"
          autobuffer="autobuffer"
          preload="auto"
          muted
          //   style={{ width: "100%", objectFit: "contain" }}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            touchAction: "none",
            left: "0",
            top: "0",
          }}
          playsInline
        >
          {/* <source type="video/mp4" src="./RimacHdOff.mp4" /> */}
        </video>
      </VideoScroll>
    </div>
  );
};
export default RimacDesk;
