"use client";
import React, { useEffect, useRef } from "react";

import img from "@/app/Data/IMG_20230511_225820_Bokeh.png";
import skills from "@/app/Data/My project.png";
import referrels from "@/app/Data/referrels.png";
import recommandations from "@/app/json/recommandations";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTypewriter } from "react-simple-typewriter";
import { gsap, Power2 } from "gsap";

import SocialMedia from "@/app/Components/SocialMedia";

// Images
import html from "@/app/Data/icons/html.png";
import css from "@/app/Data/icons/css-3.png";
import javascript from "@/app/Data/icons/js.png";
import typescript from "@/app/Data/icons/typescript.png";
import tailwind from "@/app/Data/icons/tailwind.png";
import bootstrap from "@/app/Data/icons/bootstrap.png";
import nodejs from "@/app/Data/icons/node-js-736399_1280.png";
import expressjs from "@/app/Data/icons/Expressjs.png";
import mongodb from "@/app/Data/icons/mongodb.png";
import mongoose from "@/app/Data/icons/mongoose.png";
import git from "@/app/Data/icons/git.png";
import github from "@/app/Data/icons/github.png";
import c from "@/app/Data/icons/letter-c.png";
import cplus from "@/app/Data/icons/c++.png";
import npm from "@/app/Data/icons/npm.png";
import python from "@/app/Data/icons/python.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const image = useRef(null);
  const referrelsImage = useRef(null);
  const referrelHead = useRef(null);
  const recommendation = useRef(null);

  const router = useRouter();

  const [text] = useTypewriter({
    words: [
      "MERN Stack Web Developer",
      "React Native App Developer",
      "Stand Alone Hackathon Winner",
      "Over 1 year of Experience",
      "Experienced 4+ Startups",
    ],
    loop: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#content",
      { y: 500, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#img",
      { y: -500, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        "#skillHead",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: "#skillHead",
            scrub: true,
            start: window.innerWidth < 550 ? "top 70%" : "top 90%",
            end: window.innerWidth < 550 ? "top 40%" : "top 50%",
          },
        }
      );
      gsap.fromTo(
        image.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#skillHead",
            scrub: true,
            start: window.innerWidth < 550 ? "top 70%" : "top 90%",
            end: window.innerWidth < 550 ? "top 40%" : "top 50%",
          },
        }
      );
      gsap.fromTo(
        referrelsImage.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: referrelsImage.current,
            scrub: true,
            start: window.innerWidth < 550 ? "top 90%" : "top 90%",
            end: window.innerWidth < 550 ? "top 70%" : "top 30%",
          },
        }
      );
      gsap.fromTo(
        referrelHead.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: referrelsImage.current,
            scrub: true,
            start: window.innerWidth < 550 ? "top 100%" : "top 90%",
            end: window.innerWidth < 550 ? "top 60%" : "top 30%",
          },
        }
      );
      gsap.fromTo(
        recommendation.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: referrelsImage.current,
            scrub: true,
            start: window.innerWidth < 550 ? "top 60%" : "top 50%",
            end: window.innerWidth < 550 ? "top 35%" : "top 10%",
          },
        }
      );
    }
  }, []);

  return (
    <div id="mainDiv">
      <div className="md:mt-20 mobile:mt-14 flex md:flex-row mobile:flex-col justify-center w-[100%] items-center md:px-[5vw] mobile:px-[1.5vw]">
        <div className="md:w-[32%] mobile:w-[85%] h-[100%] overflow-hidden relative">
          <Image src={img} id="img" className="w-full h-full" alt="" />
        </div>
        <div className="md:ml-10 mobile:ml-0 text-grey md:w-[65%] mobile:w-[100%] md:h-[65vh] mobile:h-[60vh] overflow-hidden flex items-center">
          <div
            className="absolute mobile:flex mobile:flex-col mobile:justify-center mobile:items-center md:block"
            id="content"
          >
            <p className="text-grey md:text-4xl mobile:text-3xl font-semibold">
              Hi, I am
            </p>
            <p className="text-oceanGreen mobile:text-4xl md:text-6xl md:py-4 mobile:py-1 font-bold">
              Anekant Jain
            </p>
            <p className="md:text-5xl mobile:text-2xl font-semibold md:h-[9vh] mobile:h-[5vh]">
              {text}
            </p>
            <p className="md:mt-2 mobile:mt-1 md:mx-0 mobile:mx-4 md:text-start mobile:text-center font-[600] ml-1">
              Adept MERN Stack developer with a demonstrated history of success.
              Skilled in web and
              <br /> mobile application development, hackathons, and startups.
              Currently a Junior
              <br /> Executive at OLL.co...
            </p>
            <div className="flex items-center ml-1">
              <Link
                href={
                  "https://drive.google.com/file/d/1QpvgNmPyfebiFRq-EbSZL77UrKyL1xBz/view?usp=sharings"
                }
                target="blank"
                style={{ transition: "all 0.25s ease-in-out" }}
                className="text-oceanGreen border px-4 mr-4 py-1 rounded-md border-oceanGreen cursor-pointer hover:bg-oceanGreen hover:text-lightWhite"
              >
                Resume
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("https://www.buymeacoffee.com/anekantjain");
                }}
                className="oceanHover text-lightWhite bg-oceanGreen px-4 py-1 my-3 rounded-md cursor-pointer"
              >
                Buy me a Coffee ☕
              </button>
            </div>
            <div className="ml-1">
              <SocialMedia color={"123"} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[8vw] mobile:px-[4.5vw] overflow-hidden">
        <div className="flex justify-between items-end md:px-4 mobile:px-2 w-[100%]">
          <h1
            id="skillHead"
            className="md:text-5xl mobile:text-3xl text-oceanGreen font-bold md:mb-4 mobile:mb-2"
          >
            Skills
          </h1>
          <Image
            ref={image}
            src={skills}
            alt="Skills"
            className="md:w-[20%] mobile:w-[40%] md:-mb-12 mobile:-mb-6"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div
            id="socialIcons"
            className="grid mb-10 md:grid-cols-8 justify-items-center border mobile:grid-cols-4 rounded-xl bg-white overflow-hidden px-[2vw] mobile:py-[4vw] md:py-[1.5vw]"
          >
            <Icon source={html} title={"Html"} />
            <Icon source={css} title={"CSS"} />
            <Icon source={bootstrap} title={"Bootstrap"} />
            <Icon source={tailwind} title={"Tailwind css"} />
            <Icon source={javascript} title={"JavaScript"} />
            <Icon source={typescript} title={"TypeScript"} />
            <Icon source={npm} title={"NPM"} />
            <Icon source={nodejs} title={"Node.js"} />
            <Icon source={expressjs} title={"Express.js"} />
            <Icon source={mongodb} title={"MongoDB"} />
            <Icon source={mongoose} title={"Mongoose"} />
            <Icon source={git} title={"Git"} />
            <Icon source={github} title={"Github"} />
            <Icon source={c} title={"C"} />
            <Icon source={python} title={"Python"} />
            <Icon source={cplus} title={"C++"} />
          </div>
        </div>
      </div>
      <div className="md:px-[8vw] mobile:px-[4.5vw] overflow-hidden mt-4">
        <div className="flex md:flex-row mobile:flex-col-reverse justify-between md:px-4 mobile:px-2 md:items-end mobile:items-baseline w-[100%]">
          <Image
            ref={referrelsImage}
            src={referrels}
            alt="Skills"
            className="md:w-[25%] z-10 mobile:w-[55%] md:-mb-14 mobile:-mb-10 mobile:self-start"
          />
          <h1
            ref={referrelHead}
            className="md:text-5xl mobile:text-3xl text-oceanGreen font-bold md:mb-4 mobile:mb-2 self-center"
          >
            Endorsements
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <div
            ref={recommendation}
            className="mb-10 border rounded-xl bg-white mobile:pb-[3vw] md:pb-[1.5vw] mobile:pt-12 md:pt-16"
          >
            <Carousel
              showArrows={true}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              swipeable={true}
              emulateTouch={true}
            >
              {recommandations.map((card: any, index: Number) => {
                return <Block data={card} key={index} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }: any) => {
  const router = useRouter();
  return (
    <div className="mobile:px-[7vw] md:px-[3vw] mobile:pb-9 md:pb-6">
      <p className="text-center text-darkGrey text-lg">
        {data.message.length > 300
          ? data.message.slice(0, 300) + "..."
          : data.message}
      </p>
      <div className="flex justify-end mr-[1vw] mobile:mt-2 md:mt-1.5">
        <div>
          <div
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              router.push(data.url);
            }}
          >
            <AiOutlineLinkedin size={20} />
            <h1 className="cursor-pointer text-grey text-lg text-end font-semibold">
              - {data.name}
            </h1>
          </div>
          <p className=" text-end text-sm text-gray-800">{data.position}</p>
        </div>
      </div>
    </div>
  );
};

type IconStruct = {
  source: any;
  title: String;
};

const Icon = ({ source, title }: IconStruct) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        "#div",
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#skillHead",
            scrub: true,
            start: window.innerWidth < 550 ? "top 55%" : "top 70%",
            end: window.innerWidth < 550 ? "top 30%" : "top 30%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      // title={title}
      id="div"
      className="relative m-auto mobile:w-[13vw] mobile:h-[13vw] md:w-[5.5vw] md:h-[5.5vw] object-cover object-center flex justify-center items-center md:my-6 mobile:my-3 transition-all hover:pb-12"
    >
      <Image className="absolute" src={source} alt={"title"} />
    </div>
  );
};

export default Home;
