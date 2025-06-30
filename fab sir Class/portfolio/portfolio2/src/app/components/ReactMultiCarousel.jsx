"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const responsive = {
  superLargeDesktop: {
    // screens >= 1600px
    breakpoint: { max: 4000, min: 1600 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function ReactMultiCarousel() {
  const Testimonials_owl = [
    {
      name: "Saul Goodman",
      post: "Ceo & Founder",
      star: 4,
      con: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. ",
    },
    {
      name: "Sara Wilsson",
      post: "Designer",
      star: 5,
      con: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      post: "Store Owner",
      star: 5,
      con: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      name: "Matt Brandon",
      post: "Freelancer",
      star: 4,
      con: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      name: "John Larson",
      post: "Entrepreneur",
      star: 5,
      con: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        containerClass="carousel-container"
        itemClass="px-2" // Tailwind spacing between slides
      >
        {Testimonials_owl.map((item, index) => (
          <div key={index} className="">
            <div className=" text-center ">
              <img
                src={`/images/owl/testimonials-${index + 1}.jpg`}
                alt="owl img"
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <h1 className="page_sub_h1">{item.name}</h1>
              <p className="page_main_p">{item.post}</p>
              <div className="flex gap-4 mx-auto justify-center my-6">
                {(() => {
                  const stars = [];
                  for (let i = 0; i < 5; i++) {
                    stars.push(
                      <FaStar
                        key={i}
                        className={
                          i < item.star
                            ? "text-yellow-400 text-2xl cursor-pointer"
                            : "text-gray-300 text-2xl cursor-pointer"
                        }
                      />
                    );
                  }
                  return stars;
                })()}
              </div>
              <p className="page_main_p flex flex-nowrap mx-auto w-[90%] md:w-[80%} lg:w-[70%] xl:w-[60%] inline-block ">
                <FaQuoteLeft className="mr-2 inline-block text-[16px] text-action/50" />{" "}
                {item.con}{" "}
                <FaQuoteRight className="ml-2 inline-block text-[16px] text-action/50" />
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
