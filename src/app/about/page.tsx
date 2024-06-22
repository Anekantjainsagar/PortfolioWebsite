"use client";
import React, { useEffect } from "react";
import { Power2, gsap } from "gsap";
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
    <div className="mx-[2vw] md:mx-[6vw] mb-10">
      <div className="mx-[2vw] mt-20 md:mt-24 flex md:flex-row flex-col justify-center">
        <Image
          id="leftAbout"
          src={"/Data/IMG_20230101_140614_317.jpg"}
          width={1000}
          height={1000}
          alt={"me"}
          className="md:w-[25vw] object-cover object-center rounded-lg"
        />
        <div
          id="rightAbout"
          className="w-full md:w-[35%] text-grey md:ml-7 md:mt-0 mt-1 px-1 md:px-0"
        >
          <h1 className="text-4xl font-bold">Anekant Jain</h1>
          <div className="mt-1 flex items-center flex-wrap">
            {["Developer", "ML Engineer", "Hackathon Winner"].map((e) => {
              return <Title text={e} key={e} />;
            })}
          </div>
          <div className="ml-2">
            <p className="mt-1">
              Hi, I am Anekant Jain a Final-year undergraduate Computer Science
              Engineering student from S.A.T.I. Vidisha (M.P).{" "}
            </p>
            <p className="mt-1">
              {" "}
              I have good hands-on experience in Full Stack Web Development
              technologies such as{" "}
              <b>
                Next.js, React.js, Node.js, Express.js, MongoDb (MERN Stack) &
                Machine Learning technologies such as Numpy, Pandas, Matplotlib
                and it's various algorithms.
              </b>
            </p>
            <p className="mt-1">
              {" "}
              I have participated in 10+ Offline Web Development and Ai
              Hackathons out of which in{" "}
              <b>Kriyeta 2023 & SIH 2023 I became the winner</b> and in others
              we are the part of top 10 teams.
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
          <div className="mt-3 md:block hidden">
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
