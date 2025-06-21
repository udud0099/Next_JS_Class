"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
    >
      <ReviewCard image="/images/c1.png" name="John Doe" role="Founder Codex" />
      <ReviewCard
        image="/images/c2.png"
        name="John Doe2"
        role="Founder Codex2"
      />
      <ReviewCard
        image="/images/c3.png"
        name="John Doe3"
        role="Founder Codex3"
      />
    </Carousel>
  );
};

export default ReviewSlider;
