import { GoArrowRight } from "react-icons/go";

const Card = () => {
  return (
    <>
      <div className="container pt-24">
        <div className="flex justify-between">
          <h1>Release notes</h1>
          <div className="group flex gap-2  bg-blue-700 p-8">
            <GoArrowRight className="group-hover:hidden text-4xl hover:transition duration-1500 ease-in-out" />{" "}
            <h2 className="   text-4xl      ">All</h2>{" "}
            <GoArrowRight className="hidden group-hover:inline-block text-4xl hover:transition duration-1500 ease-in-out" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
