import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-primary py-50 md:py-60 lg:py-70 xl:py-80">
        <div className="own_container">
          <div>
            <h1 className="main_heading">Superior sound, tangible quality</h1>
            <p className="font_16px_12px">
              Sit back, relax and prepare to experience a new level of audio
              excellence. These headphones combine cutting-edge technology with
              the finest craftsmanship, for the ultimate listening experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button >Buy Now</button>
              <button >Explor More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
