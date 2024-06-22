"use client";
import React, { useEffect, useState } from "react";
import { Power2, gsap } from "gsap";
import { AiOutlineReload, AiOutlineSend } from "react-icons/ai";
import ScrollToBottom from "react-scroll-to-bottom";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
import axios from "axios";

const Contact = () => {
  let message = [
    {
      question: "What is your name?",
    },
    {
      question: "What is your email?",
    },
    {
      question: "What is your mobile?",
    },
    {
      question: "Any Queries..?",
    },
    {
      question: "Thank you for your responses!",
    },
  ];
  let [answers, setAnswers] = useState([]);
  let [response, setResponse] = useState("");
  let [questionIndex, setQuestionIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      "#leftContact",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#rightContact",
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#img",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#block",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  let handleSubmit = () => {
    setLoader(true);
    if (response?.length > 1) {
      if (questionIndex === 1 && !response.includes("@")) {
        setAnswers([
          ...answers,
          { question: message[questionIndex]?.question, answer: response },
          { question: "Please enter valid email address" },
        ]);
        setResponse("");
      } else if (questionIndex === 2 && response?.length !== 10) {
        setAnswers([
          ...answers,
          { question: message[questionIndex]?.question, answer: response },
          { question: "Please enter a 10 digit mobile no." },
        ]);
        setResponse("");
      } else {
        setAnswers([
          ...answers,
          { question: message[questionIndex]?.question, answer: response },
        ]);
        if (message.length - 2 == questionIndex) {
          axios
            .post("/api/query", {
              data: [
                ...answers,
                {
                  question: message[questionIndex]?.question,
                  answer: response,
                },
              ],
            })
            .then((res) => {
              console.log(res.data);
            });
        }
        setResponse("");
        setQuestionIndex(questionIndex + 1);
      }
    } else {
      setAnswers([...answers, { question: "Please enter a value" }]);
      setResponse("");
    }
    setTimeout(() => {
      setLoader(false);
    }, 650);
  };

  return (
    <div className="mx-[2vw] md:mx-[5vw] mb-10">
      <div className="flex items-center justify-between mt-20">
        <h1
          id="leftContact"
          className="md:mt-6 mt-14 text-3xl md:text-5xl font-bold text-oceanGreen"
        >
          Contact
        </h1>
        <Image
          id="rightContact"
          src={"/Data/Contact-Head.png"}
          alt={"img"}
          width={1000}
          height={1000}
          className="mix-blend-multiply md:w-[22%] w-[50%]"
        />
      </div>
      <div className="mx-[2vw] flex md:flex-row flex-col justify-evenly h-fit md:h-[55vh]">
        <Image
          src={"/Data/Contact.png"}
          width={1000}
          height={1000}
          alt={"contact"}
          className="w-[80%] mx-auto md:w-[55%]"
          id="img"
        />
        <div
          className="md:w-[28%] h-[60vh] md:h-full w-full mt-4 md:mt-0 shadow-lg shadow-gray-400 rounded-2xl p-2 border md:border-gray-300 border-gray-300"
          id="block"
        >
          <h1 className="text-center font-bold text-2xl mb-2 text-grey">
            Let&apos;s Connect
          </h1>
          <ScrollToBottom className="h-[79%] md:h-[81%] overflow-y-auto overflow-x-hidden">
            {started ? (
              <>
                {answers?.map((e, i) => {
                  return (
                    <div key={i}>
                      <Chat
                        text={e.question}
                        error={
                          e?.question.includes("Please enter") ? true : false
                        }
                        mine={false}
                      />
                      {e?.answer ? <Chat text={e?.answer} mine={true} /> : null}
                    </div>
                  );
                })}
                <Chat
                  text={message[questionIndex]?.question}
                  mine={false}
                  loader={loader}
                />
                {loader ? (
                  <ThreeDots height="70" width="70" color="#65cfc4" />
                ) : null}
              </>
            ) : null}
          </ScrollToBottom>
          <div className="">
            {questionIndex === message?.length - 1 ? (
              <div className="flex items-center justify-center mt-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setQuestionIndex(0);
                    setAnswers([]);
                    setStarted(false);
                  }}
                  className="flex items-center border border-transparent rounded-lg px-3 justify-center bg-oceanGreen text-white hover:text-grey cursor-pointer hover:bg-transparent hover:border-grey hover:border-spacing-0"
                >
                  <AiOutlineReload className="mr-1" />
                  Restart Chat
                </button>
              </div>
            ) : !started ? (
              <div className="flex items-center justify-center mt-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setStarted(true);
                  }}
                  className="flex items-center border border-transparent transition-all rounded-lg w-full justify-center py-1 bg-oceanGreen text-white hover:text-grey cursor-pointer hover:bg-transparent hover:border-grey hover:border-spacing-0"
                >
                  Start Chat
                </button>
              </div>
            ) : (
              <div
                className="w-full flex justify-between mt-1.5"
                onKeyDown={(e) => {
                  if (e?.code === "Enter") {
                    handleSubmit();
                  }
                }}
              >
                <input
                  type={
                    questionIndex === 2
                      ? "number"
                      : questionIndex === 1
                      ? "email"
                      : "text"
                  }
                  placeholder={
                    questionIndex === 2
                      ? "Enter Mobile No."
                      : questionIndex === 1
                      ? "Enter Email Address"
                      : "Enter Text"
                  }
                  disabled={
                    questionIndex === message?.length - 1 ||
                    questionIndex + 1 > message?.length
                  }
                  value={response}
                  onKeyDown={(e) => {
                    if (e?.code === "Enter") {
                      handleSubmit();
                    }
                  }}
                  autoFocus={true}
                  className="w-[72%] rounded-lg outline-none bg-transparent border px-3 py-0.5"
                  onChange={(e) => {
                    setResponse(e.target.value);
                  }}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  disabled={
                    questionIndex === message?.length - 1 ||
                    questionIndex + 1 > message?.length
                  }
                  className="flex items-center border border-transparent rounded-lg w-[25%] justify-center bg-oceanGreen text-white hover:text-grey cursor-pointer hover:bg-transparent hover:border-grey hover:border-spacing-0"
                >
                  <AiOutlineSend className="mr-1" />
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Chat = ({ mine, text, error, loader }) => {
  return !loader ? (
    <div
      id="chat"
      className={`w-fit px-3 py-1.5 rounded-lg mb-2 clear-both ${
        !mine
          ? error
            ? "bg-red-200 text-red-600"
            : "bg-oceanGreen text-white"
          : "bg-gray-200 text-grey float-right"
      }`}
    >
      <span>{text}</span>
    </div>
  ) : null;
};

export default Contact;
