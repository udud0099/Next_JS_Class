"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const imgCon = [0, 0, 0];
  const [activeImg, setActiveImg] = useState(0);
  return (
    <>
      <div className="py-24 px-12 md:px-24 lg:px-32 lx:px-64 ">
        <div className="text-center">
          <h1 className="  text-[16px] font-bold   text-primary">
            Testimonials
          </h1>
          <h1 className="main_heading_h1 pt-2  pb-4">What Clients Say</h1>
          <p className="main_text_p w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            Discover what clients have to say about their experiences working
            with me. My client's satisfaction is my greatest achievement!
          </p>
        </div>

        <div className="py-8   mt-8">
          <div className="flex gap-4 md:gap-12 lg:gap-24 xl:gap-32 flex-wrap flex-col lg:flex-row">
            <div className="flex-[.6]">
              <h1 className="text-primary font-bold leading-[1.1] text-[36px]">
                Mobile App Development
              </h1>
              <p className="common_text my-4">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </p>
              <h2 className="text-primary font-bold leading-[1.1] text-[16px]">
                Michael - Technical Manager
              </h2>
              <span className="text-secondary text-[14px] my-2">
                Marketing @ APPLE INC.
              </span>
              <div className="flex  my-4 ">
                {imgCon.map((con, index) => (
                  <div key={index} className="flex items-center">
                    {index !== 0 && (
                      <div className="w-px h-full bg-gray-300 mx-4" /> // ⬅️ custom divider
                    )}
                    <Image
                      src={`/images/avatar${index + 1}.jpg`}
                      alt={`${1}_img`}
                      width={40}
                      height={40}
                      className={`rounded-sm cursor-pointer ${
                        activeImg == index ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActiveImg(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[.4]">
              <Image
                src={`/images/avatar${activeImg + 1}.jpg`}
                alt={`${activeImg + 1}_img`}
                width={1000}
                height={1000}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
