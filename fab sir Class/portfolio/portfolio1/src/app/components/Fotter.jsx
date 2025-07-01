import Link from "next/link";
import CommonButton from "./CommonButton";

export default function Fotter() {
  return (
    <>
      <div className="mt-8">
        <div className="flex gap-x-8 gap-y-4 flex-wrap flex-col lg:flex-row border-t py-4 justify-between items-center">
          <p className="text-secondary text-[14px]">
            © 2025 Made with Material Tailwind by Creative Tim. Distributed by
            ThemeWagon
          </p>
          <div className="flex gap-4 items-center">
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
            <CommonButton common_btn_context="subscribe" />
          </div>
        </div>
      </div>
    </>
  );
}
