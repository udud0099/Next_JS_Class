import { RxGear } from "react-icons/rx";
import { TbFocusCentered } from "react-icons/tb";
import { BsChat } from "react-icons/bs";
import { RxMagicWand } from "react-icons/rx";
import { GoStopwatch } from "react-icons/go";
import { SlLike } from "react-icons/sl";

export default function Proceces() {
  return (
    <>
      <div id="Profile" className="container bg-white">
        <h1 className="main_h1">All the need that you want</h1>
        <p className="main_p">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          pharetra augue. Donec id elit non mi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   mb-8">
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <RxGear className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1  ">Easy to Customize</h1>
            <p className="sub_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <TbFocusCentered className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1  ">Pixel Perfect</h1>
            <p className="sub_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <BsChat className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1 ">Full Support</h1>
            <p className="sub_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>

          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <RxMagicWand className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1  ">Clean Design</h1>
            <p className="sub_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <GoStopwatch className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1  ">Ontime Project</h1>
            <p className="sub_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className=" text-center   py-4 px-2 rounded-xl bg-white/30 shadow">
            <SlLike className="text-6xl   text-primary mx-auto " />
            <h1 className="sub_h1 ">Built with SASS</h1>
            <p className="sub_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
