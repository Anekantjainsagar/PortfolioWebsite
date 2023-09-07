"use client";
import { useEffect, useState } from "react";
import store from "@/redux/store";
import { Provider } from "react-redux";
import Loader from "@/app/Components/Loader";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (document.readyState === "complete") return setShowLoader(false);
      window.addEventListener("load", () => {
        setShowLoader(false);
      });
    }, 5000);
  }, []);

  return (
    <>
      <Provider store={store}>{showLoader ? <Loader /> : children}</Provider>
    </>
  );
}
