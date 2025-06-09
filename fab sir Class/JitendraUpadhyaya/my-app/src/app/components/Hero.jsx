import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <>
      <div max-w-screen-xl mx-auto px-6 lg:px-12>
        <h1>
          Leading with Vision, <br />
          Serving with Heart
        </h1>
        <p>
          With over 8 years of experience championing youth empowerment, social
          justice, and sustainable development, I am committed to turning
          aspirations into reality for every Nepali.
        </p>
        <div>
          <button>
            Contact Me <ArrowUpRightIcon className="w-6 h-6 " />
          </button>
          <button>Explore my works</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
