"use client";
import React, { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

type Props = {};

const Loader = ({}: Props) => {
  let logo_1 = useRef(null);

  const timeline = gsap.timeline();
  useEffect(() => {
    timeline
      .to(logo_1.current, {
        duration: 1,
        // scale: 19,
        transition: Power4.easeInOut,
        delay: 2,
      })
      .to(
        logo_1.current,
        {
          opacity: 0,
          transition: Power4.easeInOut,
          duration: 0.5,
        },
        "-=0.4"
      );
  });
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full bg-lightWhite overflow-hidden z-50 absolute">
        {/* <h1
          ref={logo_1}
          className="stroke animate-pulse text-6xl md:text-6xl xl:text-[85px] text-center font-bold"
        >
          ANEKANT JAIN
        </h1> */}
        <video autoPlay loop muted>
          <source src={"/Comp 1.mp4"} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Loader;
