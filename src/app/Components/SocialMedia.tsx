import { useRouter } from "next/navigation";
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

const SocialMedia = ({ color }: { color: String }) => {
  const router = useRouter();

  return (
    <div className="flex items-center mt-2">
      <AiFillLinkedin
        size={
          typeof window !== "undefined"
            ? window.innerWidth < 550
              ? 38
              : 45
            : 0
        }
        onClick={(e: any) => {
          e.preventDefault();
          router.push("https://www.linkedin.com/in/anekantjainsagar");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#65cfc4"}
      />
      <AiFillGithub
        size={
          typeof window !== "undefined"
            ? window.innerWidth < 550
              ? 38
              : 45
            : 0
        }
        onClick={(e: any) => {
          e.preventDefault();
          router.push("https://github.com/Anekantjainsagar");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#65cfc4"}
      />
      <AiFillInstagram
        size={
          typeof window !== "undefined"
            ? window.innerWidth < 550
              ? 38
              : 45
            : 0
        }
        onClick={(e: any) => {
          e.preventDefault();
          router.push(
            "https://instagram.com/ig.anekant?igshid=NTc4MTIwNjQ2YQ=="
          );
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#65cfc4"}
      />
      <AiFillYoutube
        size={
          typeof window !== "undefined"
            ? window.innerWidth < 550
              ? 38
              : 45
            : 0
        }
        onClick={(e: any) => {
          e.preventDefault();
          router.push("https://youtube.com/@ajlearning8494");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#65cfc4"}
      />
      <AiFillTwitterSquare
        size={
          typeof window !== "undefined"
            ? window.innerWidth < 550
              ? 38
              : 45
            : 0
        }
        onClick={(e: any) => {
          e.preventDefault();
          router.push("https://twitter.com/Anekant28446852");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#65cfc4"}
      />
      <AiFillMail
        size={
          typeof window !== "undefined"
            ? window.innerWidth < 550
              ? 38
              : 45
            : 0
        }
        onClick={(e: any) => {
          e.preventDefault();
          router.push("mailto:anekantjainsagar@gmail.com");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#65cfc4"}
      />
      <AiFillFacebook
        size={
          typeof window !== "undefined"
            ? window.innerWidth < 550
              ? 38
              : 45
            : 0
        }
        onClick={(e: any) => {
          e.preventDefault();
          router.push("https://www.facebook.com/anekant.jain.338/");
        }}
        className={`md:mr-4 mobile:mr-3 bg-white md:p-2 mobile:p-1.5 rounded-full cursor-pointer ${
          color === "grey" ? "greyHover" : "oceanHover"
        }`}
        color={color === "grey" ? "#383838" : "#65cfc4"}
      />
    </div>
  );
};

export default SocialMedia;
