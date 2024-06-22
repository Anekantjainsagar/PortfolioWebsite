import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FadeInAnimation = () => {
  let ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // Create a GSAP timeline for the animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // start the animation when 80% of the element is in view
        end: "bottom top", // end when the top of the element exits the viewport
        scrub: true, // smooth scrubbing effect
        markers: true, // for testing, to visualize the trigger and animation range
      },
    });

    // Initial state before the animation
    gsap.set(element, { opacity: 0, scale: 0.8 });

    // Define the animation
    tl.to(element, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power4.out", // easing function
    });
  }, []);

  return (
    <div ref={ref} className="text-center py-24">
      <h2 className="text-3xl font-bold mb-4">Fade In Animation</h2>
      <p className="text-lg">Scroll down to see the animation!</p>
    </div>
  );
};

export default FadeInAnimation;
