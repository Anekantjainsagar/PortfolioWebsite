"use client";
import React, { useEffect, useRef } from "react";

import recommandations from "@/app/json/recommandations";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTypewriter } from "react-simple-typewriter";
import { gsap, Power2 } from "gsap";

// Images
import { AiOutlineLinkedin } from "react-icons/ai";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialMedia from "./Components/SocialMedia";

const Home = () => {
  const image = useRef(null);
  const referrelsImage = useRef(null);
  const referrelHead = useRef(null);
  const recommendation = useRef(null);

  const [text] = useTypewriter({
    words: [
      "MERN Stack Web Developer",
      "Approaching 2 Years of Experience",
      "Experienced 7+ Startups",
      "Passionate Data Science Learner",
      "SIH 2023 Hackathon Winner",
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
      <div className="flex h-[100vh] md:flex-row flex-col justify-center w-full items-center md:px-[5vw] px-[1.5vw]">
        <div className="md:w-[33%] w-[85%] overflow-hidden relative">
          <Image
            src={"/Data/IMG_20230511_225820_Bokeh.png"}
            id="img"
            className="w-full h-full"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <div className="md:ml-16 ml-0 md:mt-0 text-grey md:w-[65%] w-[100%] md:h-[65vh] max-[400px]:h-[65vh] h-[45vh] overflow-hidden flex flex-col justify-center items-center">
          <div
            className="absolute flex flex-col justify-center items-center md:block"
            id="content"
          >
            <p className="text-grey md:text-4xl text-3xl font-semibold">
              Hi, I am
            </p>
            <p className="text-oceanGreen text-4xl md:text-6xl md:py-4 py-1 font-bold">
              Anekant Jain
            </p>
            <p className="md:text-5xl text-2xl font-semibold md:h-[9vh] h-[5vh]">
              {text}
            </p>
            <p className="md:mt-2 mt-1 md:mx-0 mx-4 md:text-start text-center font-[600] ml-1">
              Skilled MERN Stack developer, SDE 1 at Consciousleap, Freelancer
              at Trubuddies, delving into machine learning.
            </p>
            <div className="flex items-center ml-1">
              <Link
                href={
                  "https://drive.google.com/file/d/1jUYOnaWPzWN4GSgWO25X6jtchBLcS5Jp/view?usp=sharing"
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
                  window.open("https://www.buymeacoffee.com/anekantjain");
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
      <div className="md:px-[8vw] px-[4.5vw] overflow-hidden">
        <div className="flex justify-between items-end md:px-4 px-2 w-[100%]">
          <h1
            id="skillHead"
            className="md:text-5xl text-3xl text-oceanGreen font-bold md:mb-4 mb-2"
          >
            Skills
          </h1>
          <Image
            ref={image}
            src={
              "https://res.cloudinary.com/dpbsogbtr/image/upload/v1699981184/un4nytyu880zi4jexeun.png"
            }
            width={1000}
            height={1000}
            alt="Skills"
            className="md:w-[20%] w-[40%] md:-mb-12 -mb-6"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div
            id="socialIcons"
            // className="grid mb-10 md:grid-cols-8 justify-items-center border grid-cols-4 rounded-xl bg-white overflow-hidden px-[2vw] py-[4vw] md:py-[1.5vw]"
            className="mb-10 flex items-center justify-center flex-wrap rounded-xl bg-white px-[2vw] border py-[2vw] md:py-[4vw]"
          >
            <Icon source={"/Data/icons/html.png"} title={"Html"} />
            <Icon source={"/Data/icons/css-3.png"} title={"CSS"} />
            <Icon source={"/Data/icons/bootstrap.png"} title={"Bootstrap"} />
            <Icon source={"/Data/icons/tailwind.png"} title={"Tailwind css"} />
            <Icon source={"/Data/icons/js.png"} title={"JavaScript"} />
            <Icon source={"/Data/icons/typescript.png"} title={"TypeScript"} />
            <Icon source={"/Data/icons/python.png"} title={"Python"} />
            <Icon source={"/Data/icons/numpy.svg"} title={"Numpy"} />
            <Icon source={"/Data/icons/pandas.svg"} title={"Pandas"} />
            <Icon
              source={"/Data/icons/matplotlib-seeklogo.svg"}
              title={"Matplotlib"}
            />
            <Icon source={"/Data/icons/react.png"} title={"React.js"} />
            <Icon source={"/Data/icons/next.png"} title={"Next.js"} />
            <Icon source={"/Data/icons/npm.png"} title={"NPM"} />
            <Icon
              source={"/Data/icons/node-js-736399_1280.png"}
              title={"Node.js"}
            />
            <Icon source={"/Data/icons/Expressjs.png"} title={"Express.js"} />
            <Icon source={"/Data/icons/mongodb.png"} title={"MongoDB"} />
            <Icon source={"/Data/icons/sql.png"} title={"Mysql"} />
            <Icon source={"/Data/icons/mongoose.png"} title={"Mongoose"} />
            <Icon source={"/Data/icons/git.png"} title={"Git"} />
            <Icon source={"/Data/icons/github.png"} title={"Github"} />
            <Icon
              source={"/Data/icons/aws.png"}
              title={"Amazon Web Services"}
            />
            <Icon source={"/Data/icons/letter-c.png"} title={"C"} />
            <Icon source={"/Data/icons/c++.png"} title={"C++"} />
            <Icon source={"/Data/icons/dsa.png"} title={"DSA"} />
          </div>
        </div>
      </div>
      <div className="md:px-[8vw] px-[4.5vw] overflow-hidden mt-4">
        <div className="flex md:flex-row flex-col-reverse justify-between md:px-4 px-2 md:items-end items-baseline w-[100%]">
          <Image
            ref={referrelsImage}
            src={"/Data/referrels.png"}
            width={1000}
            height={1000}
            alt="Skills"
            className="md:w-[25%] z-10 w-[55%] md:-mb-14 -mb-10 self-start"
          />
          <h1
            ref={referrelHead}
            className="md:text-5xl text-3xl text-oceanGreen font-bold md:mb-4 mb-2 self-center"
          >
            Endorsements
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <div
            ref={recommendation}
            className="mb-10 border rounded-xl bg-white pb-[3vw] md:pb-[1.5vw] pt-12 md:pt-16"
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
              {recommandations.map((card, index) => {
                return <Block data={card} key={index} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const router = useRouter();
  return (
    <div className="px-[7vw] md:px-[3vw] pb-9 md:pb-6">
      <p className="text-center text-darkGrey text-lg">
        {data.message.length > 300
          ? data.message.slice(0, 300) + "..."
          : data.message}
      </p>
      <div className="flex justify-end mr-[1vw] mt-2 md:mt-1.5">
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

const Icon = ({ source, title }) => {
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
      title={title}
      id="div"
      className="relative m-auto w-[21vw] h-[12vw] md:w-[9vw] md:h-[5vw] object-cover object-center flex justify-center items-center md:my-6 my-3 transition-all hover:pb-12"
    >
      <Image
        width={1000}
        height={1000}
        className="absolute w-6/12"
        src={source}
        alt={"title"}
      />
    </div>
  );
};

export default Home;
