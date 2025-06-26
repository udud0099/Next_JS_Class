import { HiClipboardDocument } from "react-icons/hi2";
import { FaFingerprint } from "react-icons/fa";
import { GiCardRandom } from "react-icons/gi";
import { FaHashtag } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

export default function MySkill() {
  const MySkilldata = [
    {
      title: "Frontend Web Development:",
      des: "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
      icon: <HiClipboardDocument />,
    },
    {
      title: "Mobile App Development",
      des: "I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
      icon: <FaFingerprint />,
    },
    {
      title: "Technology Stack",
      des: "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
      icon: <GiCardRandom />,
    },
    {
      title: "Web Optimization",
      des: "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
      icon: <FaHashtag />,
    },
    {
      title: "User-Centric Design",
      des: "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
      icon: <FaEye />,
    },
    {
      title: "Testing and Quality Assurance",
      des: "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
      icon: <IoIosDocument />,
    },
  ];
  return (
    <>
      <div className="py-24 px-8 text-center">
        <h1 className="  text-[16px] font-bold   text-primary">My Skills</h1>
        <h1 className="main_heading_h1 pt-2  pb-4">What I do</h1>
        <p className="main_text_p w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          I'm not just a developer; I'm a digital dreamweaver. Crafting
          immersive online experiences is not just a job but my calling.
          Discover below how I can help you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {MySkilldata.map((myInfo, index) => (
            <div key={index}>
              <div className="text-center px-4 my-12">
                <div className="   bg-primary text-white   w-12 h-12 rounded-full  mx-auto   text-[18px] flex justify-center items-center ">
                  {myInfo.icon}
                </div>
                <h1 className="text-[20px] font-bold text-primary my-4">
                  {myInfo.title}
                </h1>
                <p className="common_text">{myInfo.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
