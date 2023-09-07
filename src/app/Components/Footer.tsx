"use client";
import React from "react";
import SocialMedia from "./SocialMedia";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/Data/Anekant.png";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-transparent border-t text-grey backdrop-blur-md md:px-[8vw] mobile:px-[4vw] mobile:py-5 md:py-2 flex md:flex-row mobile:flex-col md:justify-between mobile:justify-center items-center">
      <Image
        src={logo}
        className="md:w-[8vw] mobile:w-[25vw] cursor-pointer"
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
