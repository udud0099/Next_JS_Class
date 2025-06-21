import Image from "next/image";
import React from "react";
import { BsQuote } from "react-icons/bs";

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div>
      <BsQuote className="w-14 h-14 text-pink-500" />
      <p className="text-center text-gray-800 dark:text-gray-200 text-sm">
        Custom Arrows. You can pass your own custom arrows to make it the way
        you want, the same for the position. For example, add media query for
        the arrows to go under when on smaller screens. Your custom arrows will
        receive a list of props/state thats passed back by the carousel such as
        the currentSide, is dragging or swiping in progress.
      </p>
      <div className="mt-6">
        <Image
          src={image}
          alt="img"
          width={100}
          height={100}
          className="object-center mx-auto rounded-full"
        />
        <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
        <h1 className="text-center text-gray-500">{role}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
