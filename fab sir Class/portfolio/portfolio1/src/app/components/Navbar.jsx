import CommonButton from "./CommonButton";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <>
      <div className="fixed   bg-white/70 backdrop-blur-2xl w-full z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-bold ">Navbar</h1>
            <ul className="list-none hidden lg:flex gap-6 font-semibold    ">
              <a href="#Skills">
                <li>Skills</li>
              </a>
              <a href="#Projects">
                {" "}
                <li>Projects</li>
              </a>
              <a href="#Resume">
                {" "}
                <li>Resume</li>
              </a>
              <a href="#Testimonials">
                {" "}
                <li>Testimonials</li>
              </a>
              <a href="#Clients">
                {" "}
                <li>Clients</li>
              </a>
              <a href="#Contact">
                {" "}
                <li>Contact</li>
              </a>
            </ul>
            <div className="lg:flex gap-4 hidden ">
              <button className="py-2 px-6 hover:bg-gray-200 rounded-xl uppercase ">
                sign up
              </button>
              <CommonButton common_btn_context="sign in" />
            </div>

            <RxHamburgerMenu className="cursor-pointer text-2xl lg:hidden" />
          </div>
        </div>
      </div>
    </>
  );
}
