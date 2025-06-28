"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 60) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed bottom-4    right-4 ">
        {isVisible && (
          <button
            className="bg-action text-white cursor-pointer rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
}
