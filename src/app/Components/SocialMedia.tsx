import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
  AiFillMail,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const SocialMedia = ({ color }: {color:String}) => {
  return (
    <div className="flex items-center mt-2">
      <AiFillLinkedin
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e: any) => {
          e.preventDefault();
          window.open("https://www.linkedin.com/in/anekantjainsagar");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      />
      <AiFillGithub
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e: any) => {
          e.preventDefault();
          window.open("https://github.com/Anekantjainsagar");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      />
      <AiFillInstagram
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e: any) => {
          e.preventDefault();
          window.open(
            "https://instagram.com/ig.anekant?igshid=NTc4MTIwNjQ2YQ=="
          );
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      />
      <AiFillYoutube
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e: any) => {
          e.preventDefault();
          window.open("https://youtube.com/@ajlearning8494");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      />
      <AiFillTwitterSquare
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e: any) => {
          e.preventDefault();
          window.open("https://twitter.com/Anekant28446852");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      />
      <AiFillMail
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e: any) => {
          e.preventDefault();
          window.open("mailto:anekantjainsagar@gmail.com");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      />
      <AiFillFacebook
        size={window.innerWidth < 550 ? 38 : 45}
        onClick={(e: any) => {
          e.preventDefault();
          window.open("https://www.facebook.com/anekant.jain.338/");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color ? "greyHover" : "oceanHover"
        }`}
        color={color ? "#383838" : "#65cfc4"}
      />
    </div>
  );
};

export default SocialMedia;
