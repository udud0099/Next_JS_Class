import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

const Card = () => {
  return (
    <>
      <div className="container pt-24 mb-8">
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold text-3xl">Release notes</h1>
          <div className="group flex gap-0    py-1 px-4  items-center cursor-pointer ">
            <IoMdArrowForward className="  group-hover:opacity-100 opacity-0  text-xl  transition-all transition-discrete  duration-0 group-hover:duration-100  hidden group-hover:flex   ease-in-out   w-0 group-hover:w-8" />
            <h2 className="text-lg">All</h2>
            <IoMdArrowForward className="text-xl transition-all transition-discrete  duration-100 flex  group-hover:hidden  ease-in-out   w-8 group-hover:w-0" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="group cursor-pointer rounded-4xl  bg-white shadow overflow-hidden  flex justify-between flex-col    transition-all duration-350 ease-in-out  hover:rounded-[40px]">
            <div className="text-black p-6">
              <p className="text-gray-600 text-base">Jul 24, 2025</p>
              <h1 className="font-semibold text-2xl mt-4 mb-2">
                A Notion-style editor, ready to use in Tiptap Cloud
              </h1>
              <span className="py-1 px-2 rounded-md border border-gray-300 text-xs">
                Templates
              </span>
            </div>
            <div className="overflow-hidden">
              <Image
                src={"/images/1.jpg"}
                alt="img"
                width={500}
                height={500}
                className="w-full group-hover:scale-110 hover:transition duration-350 ease-in-out"
              />
            </div>
          </div>
          <div className="group cursor-pointer rounded-4xl  bg-white shadow overflow-hidden   flex justify-between flex-col   transition-all duration-350 ease-in-out  hover:rounded-[40px]">
            <div className="text-black p-6">
              <p className="text-gray-600 text-base">Jul 12, 2025</p>
              <h1 className="font-semibold text-2xl mt-4 mb-2">
                Tiptap 3.0 is stable
              </h1>
            </div>
            <div className="overflow-hidden">
              <Image
                src={"/images/2.jpg"}
                alt="img"
                width={500}
                height={500}
                className="w-full group-hover:scale-110 hover:transition duration-350 ease-in-out"
              />
            </div>
          </div>
          <div className="group cursor-pointer rounded-4xl  bg-white shadow overflow-hidden   flex justify-between flex-col   transition-all duration-350 ease-in-out  hover:rounded-[40px]">
            <div className="text-black p-6">
              <p className="text-gray-600 text-base">Jul 4, 2025</p>
              <h1 className="font-semibold text-2xl mt-4 mb-2">
                Faster, lighter, and more reliable DOCX import/export with
                Tiptap
              </h1>
            </div>
            <div className="overflow-hidden">
              <Image
                src={"/images/3.jpg"}
                alt="img"
                width={500}
                height={500}
                className="w-full group-hover:scale-110 hover:transition duration-350 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="group   overflow-hidden    cursor-pointer rounded-4xl  bg-white shadow        transition-all duration-350 ease-in-out  hover:rounded-[60px] mt-8 flex gap-4 items-cente12 pt-8">
          <div className="p-8 flex-1">
            <h1 className="font-bold text-4xl">
              Developers <br /> Launchpad
            </h1>
            <p className="text-gray-600 font-medium text-2xl my-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              officiis voluptatum.
            </p>
            <div className=" flex gap-0    py-1 px-4  items-center cursor-pointer ">
              <IoMdArrowForward className="  group-hover:opacity-100 opacity-0  text-xl  transition-all transition-discrete  duration-0 group-hover:duration-100  hidden group-hover:flex   ease-in-out   w-0 group-hover:w-8" />
              <h2 className="text-lg">Documentation</h2>
              <IoMdArrowForward className="text-xl transition-all transition-discrete  duration-100 flex  group-hover:hidden  ease-in-out   w-8 group-hover:w-0" />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={"/images/b.png"}
              alt="img"
              width={1200}
              height={1200}
              className="w-full  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
