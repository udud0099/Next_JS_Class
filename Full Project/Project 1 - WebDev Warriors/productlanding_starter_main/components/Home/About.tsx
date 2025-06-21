import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
};

const About = ({ imageOrder, textOrder, title, linkText }: Props) => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div className={`${textOrder}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {title}
          </h1>
          {/* list */}
          <div className="mt-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                High-Resolution Audio compatible
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                High quality wireless audio with BLUETOOTH® and LDAC technology
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Smart listening experience by Adaptive Sound Control
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Ergonomic, enfolding design earpads
              </p>
            </div>
            {/* link */}
            <p className="font-semibold text-pink-600 cursor-pointer hover:underline w-fit">
              {linkText}
            </p>
          </div>
        </div>
        {/* img */}
        <div className={`${imageOrder}`}>
          <Image src="/images/h1.png" alt="img" width={380} height={300} />
        </div>
      </div>
    </div>
  );
};

export default About;
