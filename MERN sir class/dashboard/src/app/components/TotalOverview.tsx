import { HiMiniUsers } from "react-icons/hi2";
import { TbArrowsExchange2 } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const TotalOverview = () => {
  return (
    <>
      <div className="flex gap-2 justify-between overflow-hidden  bg-white rounded shadow ">
        <div className="flex-1 p-8 flex flex-col gap-8">
          <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start sm:justify-between   ">
            <HiMiniUsers className="text-2xl text-primary" />
            <div className="text-left sm:text-center">
              <h1 className="mainH2">1000</h1>
              <p className="content">Customers</p>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start sm:justify-between   ">
            <TbArrowsExchange2 className="text-2xl text-primary" />
            <div className="text-left sm:text-center">
              <h1 className="mainH2">3550</h1>
              <p className="content">Returns</p>
            </div>
          </div>
        </div>
        <span className="h-fill w-[2px] bg-gray-100  hidden md:flex"></span>
        <div className="flex-1 p-8   flex-col gap-8 hidden md:flex">
          <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start sm:justify-between   ">
            <CiGlobe className="text-2xl text-primary" />
            <div className="text-left sm:text-center">
              <h1 className="mainH2">1252</h1>
              <p className="content">Revenue</p>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start sm:justify-between   ">
            <FaCloudDownloadAlt className="text-2xl text-primary" />
            <div className="text-left sm:text-center">
              <h1 className="mainH2">3550</h1>
              <p className="content">Downloads</p>
            </div>
          </div>
        </div>
        <span className="h-fill w-[2px] bg-gray-100 "></span>
        <div className="flex-1 p-8 flex flex-col gap-8">
          <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start sm:justify-between   ">
            <FaFileUpload className="text-2xl text-primary" />
            <div className="text-left sm:text-center">
              <h1 className="mainH2">600</h1>
              <p className="content">Growth</p>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start sm:justify-between   ">
            <PiShoppingCartSimpleFill className="text-2xl text-primary" />
            <div className="text-left sm:text-center">
              <h1 className="mainH2">100%</h1>
              <p className="content">Order</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalOverview;
