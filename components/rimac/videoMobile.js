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

const RimacMobile = () => {
  const reachedBottom = usePageBottom();
  useEffect(() => {
    reachedBottom && window.scrollTo(0, 0);
  }, [reachedBottom]);

  return (
    <div style={{ height: "1720vh", position: "relative" }}>
      <VideoScroll
        onLoad={(props) =>
          setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
        }
        playbackRate={15}
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
            touchAction: "auto",
            left: "0",
            top: "0",
            objectFit: "cover",
          }}
          playsInline
        >
          <source type="video/mp4" src="./RimacVert.mp4" />
        </video>
      </VideoScroll>
    </div>
  );
};
export default RimacMobile;
