"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-transparent border-t text-grey backdrop-blur-md px-[8vw] md:px-[4vw] py-5 md:py-4 flex md:flex-row flex-col md:justify-between justify-center items-center">
      <Image
        src={"/Data/Anekant.png"}
        className="md:w-[8vw] w-[25vw] cursor-pointer"
        width={1000}
        height={1000}
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
        alt="logo"
      />
      <SocialMedia color="grey" />
    </div>
  );
};

export default Footer;
