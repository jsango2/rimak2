import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import usewindowsize from "../components/helper/usewindowsize";
import animacija from "../components/rimac/rimacLottie/animacija";
import animacijaJson from "../components/rimac/rimacLottie/jsonRimac.json";
import AnimacijaIkona from "../components/rimac/rimacLottie/animacijaIkona";
import Lottie, { useLottie } from "lottie-react";
import styled from "styled-components";

const Body = styled.div`
  position: relative;
  height: 1000vh;
  left: 0;

  scroll-behavior: smooth;
`;

const Wrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  /* top: 30%;
  left: 50%;
  transform: translate(-50%, 0); */
`;

const Rimac = dynamic(() => import("../components/rimac/videoDesk"), {
  ssr: false,
});
// const RimacMobile = dynamic(() => import("../components/rimac/videoMobile"), {
//   ssr: false,
// });
const style = {
  position: "sticky",
  top: "0",
  height: "400px",
};
const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0.4, 0.6],
      type: "seek",
      frames: [0, 725],
    },
  ],
};
export default function Index() {
  const size = usewindowsize();
  return (
    <>
      {size.width > 600 ? (
        <Body className="example">
          <Wrap>
            {/* <Lottie
                animationData={animacijaJson}
                interactivity={interactivity}
                style={style}
              /> */}
            <Rimac rate={50} />
          </Wrap>
        </Body>
      ) : (
        <div>jure</div>
      )}
    </>
  );
}
