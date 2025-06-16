import Image from "next/image";
import React from "react";
import { LuMousePointerClick } from "react-icons/lu";
import Landing_Page from "./Landing_Page";
import CheckBox from "./CheckBox";

const Hero = () => {
  return (
    <>
      <div className="bg-primary ">
        <div className="own_container">
          <div className="flex justify-between gap-16 items-center">
            <div className="py-30 md:py-30 lg:py-40 xl:py-55">
              <h1 className="main_heading leading-[1.1] text-white">
                Superior sound, tangible quality
              </h1>
              <p className="font_16px_12px my-4 md:my-6 xl:my-8 text-white">
                Sit back, relax and prepare to experience a new level of audio
                excellence. These headphones combine cutting-edge technology
                with the finest craftsmanship, for the ultimate listening
                experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#005ffb] hover:bg-[rgb(0,63,251)] rounded-lg px-4 py-2 cursor-pointer text-white">
                  Buy Now
                </button>
                <button className="bg-[#00e37c] hover:bg-[#00dbe3] rounded-lg px-4 py-2 cursor-pointer text-white">
                  Explor More
                </button>
              </div>
            </div>
            <div className="hidden xl:block">
              <Image
                src="/images/hero.png"
                alt="Profile"
                width={1200}
                height={1200}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="own_container own_ver_space">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Landing_Page
            heading="Touch to buy"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            icon={<LuMousePointerClick />}
          />
          <Landing_Page
            heading="Touch to buy"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            icon={<LuMousePointerClick />}
          />
          <Landing_Page
            heading="Touch to buy"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            icon={<LuMousePointerClick />}
          />
          <Landing_Page
            heading="Touch to buy"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            icon={<LuMousePointerClick />}
          />
          <Landing_Page
            heading="Touch to buy"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            icon={<LuMousePointerClick />}
          />
          <Landing_Page
            heading="Touch to buy"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
            icon={<LuMousePointerClick />}
          />
        </div>
      </div>

      <div className="own_container own_ver_space">
        <div className="grid grid-cols-1   lg:grid-cols-2 gap-6 own_ver_space">
          <div className="">
            <h1 className="main_heading leading-[1.1] text-heading mb-2">
              Pure sound, no added noise
            </h1>
            <table>
              <tbody>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    {" "}
                    High-Resolution Audio compatible{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    High quality wireless audio with BLUETOOTH® and LDAC
                    technology
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    Smart listening experience by Adaptive Sound Control
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    Ergonomic, enfolding design earpads
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="google.com" className="a_tag_link">
              Learn More
            </a>
          </div>
          <div className="">
            <Image
              src="/images/hero.png"
              alt="Profile"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="own_container own_ver_space">
        <div className="grid grid-cols-1   lg:grid-cols-2 gap-6 own_ver_space">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/hero.png"
              alt="Profile"
              width={400}
              height={400}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="main_heading leading-[1.1] text-heading mb-2">
              Capture pure sound with the 70mm HD Driver
            </h1>
            <table>
              <tbody>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    {" "}
                    High-Resolution Audio compatible{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    High quality wireless audio with BLUETOOTH® and LDAC
                    technology
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    Smart listening experience by Adaptive Sound Control
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox />
                  </td>
                  <td className="font_16px_only py-4">
                    Ergonomic, enfolding design earpads
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="google.com" className="a_tag_link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
