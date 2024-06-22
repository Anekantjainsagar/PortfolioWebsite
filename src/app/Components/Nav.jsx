"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { gsap, Power2 } from "gsap";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [viewNav, setViewNav] = useState(true);
  const ref = useRef(null);
  const navLeft = useRef(null);
  const navRight = useRef(null);
  const router = useRouter();

  useEffect(() => {
    gsap.fromTo(
      navLeft.current,
      {
        x: -100,
      },
      { x: 0, duration: 1.5, ease: Power2.easeInOut }
    );
    gsap.fromTo(
      navRight.current,
      {
        x: 1000,
      },
      { x: 0, duration: 1.5, ease: Power2.easeInOut }
    );
  }, []);

  let closeNav = () => {
    gsap.fromTo(
      ref.current,
      {
        y: 0,
      },
      {
        opacity: 0,
        y: -200,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    setViewNav(!viewNav);
  };

  let routes = [
    { name: "Projects", route: "/projects" },
    { name: "Experience", route: "/experience" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <>
      <div className="backdrop-blur-sm border-b fixed top-0 left-0 w-full flex z-30 items-center justify-between text-xl md:px-8 md:py-2 px-3 py-2">
        <Image
          ref={navLeft}
          src={"/Data/Anekant.png"}
          width={1000}
          height={1000}
          alt="Logo"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
          className="cursor-pointer md:w-[8vw] w-[22vw] object-cover object-top"
        />
        <div ref={navRight}>
          <div className="md:hidden block">
            <AiOutlineAlignRight
              size={24}
              className="mr-1"
              onClick={(e) => {
                e.preventDefault();
                gsap.fromTo(
                  ref.current,
                  { y: -1000 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: Power2.easeInOut,
                  }
                );
                setViewNav(!viewNav);
              }}
            />
            <ul
              ref={ref}
              className={`flex border ${
                !viewNav ? "block" : "hidden"
              } bg-lightWhite items-center justify-between w-[100vw] text-lg flex-col h-[100vh] absolute top-0 right-0 py-[22vh]`}
            >
              <AiOutlineClose
                size={24}
                color="#383838"
                onClick={(e) => {
                  e.preventDefault();
                  closeNav();
                }}
              />
              <Image
                ref={navLeft}
                src={"/Data/Anekant.png"}
                width={1000}
                height={1000}
                alt="Logo"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                  closeNav();
                }}
                className="cursor-pointer w-[25vw] mt-3 object-cover object-top"
              />
              {routes.map((obj, i) => {
                return (
                  <li
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      closeNav();
                      router.push(obj.route);
                    }}
                    className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
                  >
                    {obj.name}
                  </li>
                );
              })}

              <Link
                href={
                  "https://drive.google.com/file/d/1jUYOnaWPzWN4GSgWO25X6jtchBLcS5Jp/view?usp=sharing"
                }
                target="blank"
                style={{ transition: "all 0.25s ease-in-out" }}
                className="text-grey border px-4 py-[2.25px] rounded-md border-grey cursor-pointer hover:bg-grey hover:text-lightWhite"
              >
                Resume
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.buymeacoffee.com/anekantjain");
                  closeNav();
                }}
                className="btnHover text-lightWhite bg-grey px-4 py-1 rounded-md cursor-pointer"
              >
                Buy me a Coffee ☕
              </button>
            </ul>
          </div>
          <ul className="md:flex hidden items-center justify-between w-[50vw] text-[15px] md:flex-row flex-col">
            {routes.map((obj, i) => {
              return (
                <li
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(obj.route);
                  }}
                  className="cursor-pointer px-3 py-[4px] rounded-md hover:bg-white hoverTransition"
                >
                  {obj.name}
                </li>
              );
            })}

            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1jUYOnaWPzWN4GSgWO25X6jtchBLcS5Jp/view?usp=sharing"
                );
              }}
              style={{ transition: "all 0.25s ease-in-out" }}
              className="text-grey border px-4 py-[2.25px] rounded-md border-grey cursor-pointer hover:bg-grey hover:text-lightWhite"
            >
              Resume
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.buymeacoffee.com/anekantjain");
              }}
              className="btnHover text-lightWhite bg-grey px-4 py-1 rounded-md cursor-pointer"
            >
              Buy me a Coffee ☕
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
