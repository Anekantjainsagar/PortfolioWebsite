"use client";
import React, { useEffect } from "react";
import { Power2, gsap } from "gsap";
import me from "../Data/IMG_20230101_140614_317.jpg";
import SocialMedia from "../Components/SocialMedia";
import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  useEffect(() => {
    gsap.fromTo(
      "#leftAbout",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#rightAbout",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div className="mobile:mx-[2vw] md:mx-[6vw] mb-10">
      <div className="mx-[2vw] mobile:mt-20 md:mt-24 flex md:flex-row mobile:flex-col justify-center">
        <Image
          id="leftAbout"
          src={me}
          alt={"me"}
          className="md:w-[25vw] object-cover object-center rounded-lg"
        />
        <div
          id="rightAbout"
          className="mobile:w-full md:w-[35%] text-grey md:ml-7 md:mt-0 mobile:mt-1 mobile:px-1 md:px-0"
        >
          <h1 className="text-4xl font-bold">Anekant Jain</h1>
          <div className="mt-1 flex items-center flex-wrap">
            {["Developer", "Hackathon Winner"].map((e) => {
              return <Title text={e} key={e} />;
            })}
          </div>
          <div className="ml-2">
            <p className="mt-1">
              Hi, I am Anekant Jain a 3rd-year undergraduate Computer Science
              Engineering student from S.A.T.I. Vidisha (M.P).{" "}
            </p>
            <p className="mt-1">
              {" "}
              I have good hands-on experience in Full Stack Web Development
              technologies such as React.js, Node.js, Express.js, and MongoDB.
            </p>
            <p className="mt-1">
              {" "}
              I have participated in 4 Offline Web Development and Ai Hackathons
              out of which in one hackathon I am the winner and in one we are
              the part of top 10 teams.
            </p>
            <p className="mt-1">
              {" "}
              If you want to talk, hit me up or just email at:
              <span
                className="underline block cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("mailto:anekantjainsagar@gmail.com");
                }}
              >
                anekantjainsagar@gmail.com
              </span>
            </p>
          </div>
          <div className="mt-3 md:block mobile:hidden">
            <SocialMedia color="grey" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Title = ({ text }: { text: String }) => {
  return (
    <div className="border px-2.5 border-gray-400 rounded-lg w-fit text-sm mr-2">
      {text}
    </div>
  );
};

export default About;
