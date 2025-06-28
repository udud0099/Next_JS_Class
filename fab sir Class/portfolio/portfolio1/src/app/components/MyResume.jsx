import { IoIosArrowRoundForward } from "react-icons/io";
import { BsBarChartFill } from "react-icons/bs";
import { HiPuzzlePiece } from "react-icons/hi2";
import { HiCursorClick } from "react-icons/hi";

export default function MyResume() {
  const MySkilldata = [
    {
      title: "Bachelor of Science in Computer Science",
      icon: <BsBarChartFill />,
    },
    {
      title: "Certified Web Developer",
      icon: <HiPuzzlePiece />,
    },
    {
      title: "Frontend Framework Proficiency Certification",
      icon: <HiCursorClick />,
    },
  ];
  return (
    <>
      <div className="py-24 px-8">
        <div className="flex gap-4 md:gap-12 lg:gap-24 xl:gap-32 flex-wrap flex-col md:flex-row">
          <div className="flex-[.4]">
            <h1 className="text-primary font-bold leading-[1.1] text-[36px]">
              My Resume
            </h1>
            <p className="common_text my-4">
              Highly skilled and creative Web Developer with 5+ years of
              experience in crafting visually stunning and functionally robust
              websites and web applications.
            </p>
            <button className="py-2 px-6 hover:bg-gray-200 rounded-xl uppercase flex gap-2 flex-nowrap items-center font-semibold text-[12px]">
              view more <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="flex-[.6]">
            {MySkilldata.map((myInfo, index) => (
              <div className="flex gap-x-4 my-2 flex-nowrap" key={index}>
                <div>
                  <button
                    className={`p-4 bg-primary text-white rounded-xl uppercase cursor-pointer text-[20px]`}
                  >
                    {myInfo.icon}
                  </button>
                </div>
                <p className="common_text">{myInfo.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
