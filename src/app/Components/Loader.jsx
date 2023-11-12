"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap, { Power4 } from "gsap";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setShowLoader(false);
    }
    window.addEventListener("load", () => {
      setShowLoader(false);
    });
  },[]);

  let logo_1 = useRef(null);
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline
      .to(logo_1.current, {
        duration: 1,
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

  return showLoader ? (
    <>
      <div className="flex justify-center items-center h-screen w-full bg-lightWhite overflow-hidden z-50 top-0 left-0 absolute">
        <video autoPlay loop muted>
          <source src={"/Comp 1.mp4"} type="video/mp4" />
        </video>
      </div>
    </>
  ) : null;
};

export default Loader;
