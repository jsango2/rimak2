import React, { useRef } from "react";
import lottie from "lottie-web";
import animationData from "../components/rimac/rimacLottie/json45vertical.json";

import { animated } from "@react-spring/web";

const LottieControl = () => {
  const target = useRef(null);
  const lottieRef = React.useRef(null);

  let length = 0;

  React.useEffect(() => {
    var animDuration = 15000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      loop: false,
      autoplay: false,
      animationData,
    });
    function animatebodymovin(duration) {
      let scrollPosition = window.scrollY;
      console.log("scroll", scrollPosition);
      // if (scrollPosition >= 169300) {
      //   window.scrollTo({
      //     top: 0,

      //   });
      // }
      // const scrollPosition = pinc
      const maxFrames = anim.totalFrames;
      // const frame = (maxFrames / 1) * ((scrollPosition/1000) / (duration *10));
      const frame = (maxFrames / 1) * (scrollPosition / 10 / duration);
      if (frame > maxFrames) {
        window.scrollTo({
          top: 0,
        });
      }
      anim.goToAndStop(frame, true);
    }
    animatebodymovin(animDuration);
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <animated.div ref={target}>
      <div style={{ height: "17800vh", position: "relative" }}>
        <div
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            display: "flex",
            touchAction: "auto",
            left: "0",
          }}
          ref={lottieRef}
          id="myElement"
        ></div>
      </div>
    </animated.div>
  );
};

export default LottieControl;
