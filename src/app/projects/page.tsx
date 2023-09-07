"use client";
import React, { useEffect, useRef } from "react";
import img from "@/app/Data/undraw_Project_completed_re_jr7u.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import projects from "@/app/json/projects";
import { gsap } from "gsap";
import { Power2 } from "gsap/all";
import { MutableRefObject, LegacyRef } from "react";
import Image from "next/image";

const Project = () => {
  useEffect(() => {
    gsap.fromTo(
      "#leftPro",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#rightPro",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  let ref: MutableRefObject<HTMLDivElement[] | null> = useRef([]);
  let proHead: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        delay: 1,
        opacity: 1.5,
        stagger: 0.75,
      }
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mobile:mx-[2vw] md:mx-[5vw] mt-20 mb-10">
      <div className="flex items-center justify-between">
        <h1
          id="leftPro"
          className="md:mt-6 mobile:mt-14 mobile:text-3xl md:text-6xl font-bold text-oceanGreen"
        >
          Projects
        </h1>
        <Image
          id="rightPro"
          src={img}
          alt={"img"}
          className="mix-blend-multiply md:w-[30%] mobile:w-[50%]"
        />
      </div>
      <div
        ref={proHead}
        className="grid mobile:grid-cols-1 md:grid-cols-3 mobile:gap-0 md:gap-7 mobile:px-1 md:px-5 items-start mobile:mt-2 md:mt-0"
      >
        {projects
          .slice(0)
          .reverse()
          .map((e, i) => {
            return (
              <div
                key={i}
                ref={(element) => {
                  ref.current![i] = element ?? ref.current![i];
                }}
              >
                <Block data={e} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

const Block = ({ data }: any) => {
  return (
    <div className="border md:mb-4 mobile:mb-10 rounded-md border-oceanGreen bg-white text-grey cursor-pointer oceanHover mb-4 mobile:w-[100%] md:w-[95%] mx-auto">
      <Image
        src={data?.img}
        alt={data?.img}
        width={500}
        height={500}
        className="rounded-lg p-0.5 mobile:h-[23vh] md:h-[26vh] w-full object-cover object-center"
      />
      <div className="px-2.5 pt-0.5">
        <h1 className="text-2xl font-bold text-oceanGreen">{data?.name}</h1>
        <p className="font-semibold opacity-90">{data?.title}</p>
        <p>
          This is my personal portfolio website to showcase my skills and
          experience.
        </p>
        <div className="flex items-center mt-1.5 flex-wrap mr-12">
          {data?.skills?.map((e: any, i: any) => {
            return <Tile title={e} key={i} />;
          })}
        </div>
        <div className="flex justify-end -mb-6">
          <div>
            {data?.github?.length > 0 ? (
              <button
                className="bg-oceanGreen px-2 py-1.5 rounded-md mx-2 oceanHover"
                onClick={(e) => {
                  e.preventDefault();
                  data.github.map((e: any, i: any) => {
                    return window.open(e);
                  });
                }}
              >
                <AiFillGithub size={30} color="white" />
              </button>
            ) : null}
            {data?.url ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(data?.url);
                }}
                className="bg-oceanGreen px-2 py-1.5 rounded-md mx-2 oceanHover"
              >
                <AiOutlineLink size={30} color="white" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tile = ({ title }: { title: String }) => {
  return (
    <div className="border border-grey px-2 text-center py-0.5 mr-1 rounded-md text-sm mb-1.5">
      {title}
    </div>
  );
};

export default Project;
