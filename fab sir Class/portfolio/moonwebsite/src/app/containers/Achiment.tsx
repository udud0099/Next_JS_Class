import { PiUsers } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";

export default function Achiment() {
  return (
    <>
      <div className="p-18 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        <div className="text-center flex gap-2 flex-col text-white">
          <PiUsers className="mx-auto text-5xl" />
          <h1 className="text-6xl">14</h1>
          <p className="text-xl uppercase">Clients</p>
        </div>
        <div className="text-center flex gap-2 flex-col text-white">
          <SlBriefcase className="mx-auto text-5xl" />
          <h1 className="text-6xl">43</h1>
          <p className="text-xl uppercase">Projects</p>
        </div>
        <div className="text-center flex gap-2 flex-col text-white">
          <IoIosHeartEmpty className="mx-auto text-5xl" />
          <h1 className="text-6xl">38</h1>
          <p className="text-xl uppercase">Positive Feedbacks</p>
        </div>
        <div className="text-center flex gap-2 flex-col text-white">
          <IoRocketOutline className="mx-auto text-5xl" />
          <h1 className="text-6xl">29</h1>
          <p className="text-xl uppercase">Website Launch</p>
        </div>
      </div>
    </>
  );
}
