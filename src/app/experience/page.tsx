"use client";
import React, { useEffect } from "react";
import { Power2, gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import experience from "../json/experience";
import img from "../Data/experience.png";
import Image from "next/image";

// Make sure to register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  let t1 = gsap.timeline();
  useEffect(() => {
    t1.fromTo(
      "#leftBox1",
      {
        opacity: 0,
        x: -200,
      },
      {
        x: 0,
        opacity: 1,
        zIndex: 0,
        duration: 3,
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "top 43%",
          end: "top 25%",
          trigger: "#leftBox1",
        },
      }
    )
      .fromTo(
        "#rightBox1",
        {
          opacity: 0,
          x: 200,
        },
        {
          x: 0,
          opacity: 1,
          zIndex: 0,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            scrub: 1,
            start: "top 43%",
            end: "top 25%",
            trigger: "#rightBox1",
          },
        }
      )
      .fromTo(
        "#leftBox2",
        {
          opacity: 0,
          x: -200,
        },
        {
          x: 0,
          opacity: 1,
          zIndex: 0,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            scrub: 1,
            start: "top 50%",
            end: "top 30%",
            trigger: "#leftBox2",
          },
        }
      )
      .fromTo(
        "#rightBox2",
        {
          opacity: 0,
          x: 200,
        },
        {
          x: 0,
          opacity: 1,
          zIndex: 0,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            scrub: 1,
            start: "top 90%",
            end: "top 50%",
            trigger: "#rightBox2",
          },
        }
      )
      .fromTo(
        "#height",
        {
          height: "0px",
        },
        {
          height: "1200px",
          zIndex: 0,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            scrub: true,
            start: "top 43%",
            end: "top -100%",
            trigger: "#height",
          },
        }
      );
  }, [t1]);

  useEffect(() => {
    gsap.fromTo(
      "#leftExp",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#rightExp",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-10">
      <div className="flex items-center justify-between mobile:mx-[2vw] md:mx-[5vw] mt-20">
        <h1
          id="leftExp"
          className="md:mt-6 mobile:mt-14 mobile:text-3xl md:text-5xl font-bold text-oceanGreen"
        >
          Experience
        </h1>
        <Image
          id="rightExp"
          src={img}
          alt={"img"}
          className="mix-blend-multiply md:w-[20%] mobile:w-[50%]"
        />
      </div>
      <div className="max-w-xl mx-auto md:mt-0 mobile:mt-20"></div>
      <div className="flex flex-col justify-center ">
        <div className="w-full px-4 mx-auto lg:max-w-5xl ">
          <div className="relative">
            <div
              id="height"
              className="height absolute hidden w-1 h-full transform -translate-x-1/2 bg-grey lg:block left-1/2"
            ></div>
            <div className="space-y-2 lg:space-y-4">
              {experience.map((e, i) => {
                return <Card e={e} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ e }: any) => {
  return (
    <div id={e?.class}>
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center ${
            e?.class.toLowerCase().includes("right")
              ? "mobile:justify-center md:justify-end"
              : "mobile:justify-center md:justify-start"
          } w-full mx-auto`}
        >
          <div
            className={`w-full lg:w-1/2 ${
              e?.class.toLowerCase().includes("right") ? "md:pl-8" : "md:pr-8"
            }`}
          >
            <div className="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-white greyHover cursor-pointer">
              <div
                className={`mobile:static md:absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 ${
                  !e?.class.toLowerCase().includes("right")
                    ? "-right-4"
                    : "-left-4 rotate-[180deg] mt-4"
                }`}
              >
                <div
                  className={`hidden h-10 origin-bottom-left transform -rotate-[45deg] bg-white shadow lg:block dark:bg-white`}
                ></div>
              </div>
              <div className=" relative z-20 pb-2 text-grey">
                {/* content */}
                <div
                  className={`flex flex-col flex-wrap px-4 ${
                    !e?.class.toLowerCase().includes("right")
                      ? "mobile:text-center md:text-end"
                      : "mobile:text-center md:text-start"
                  }`}
                >
                  <h2 className="mt-2 font-bold text-2xl text-oceanGreen">
                    {e?.name}
                  </h2>
                  <h2>{e?.title}</h2>
                  <h3 className="font-medium">{e?.timeline}</h3>
                  <p className="text-sm">{e?.about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center mobile:w-14 md:w-8 mobile:h-14 md:h-8 transform -translate-x-1/2 mobile:-translate-y-8 md:-translate-y-4 bg-blue-500 rounded-full dark:bg-grey left-1/2 lg:translate-y-[4px]">
          <span className="text-white dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mobile:w-7 md:w-4 mobile:h-7 md:h-4 bi bi-globe"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
