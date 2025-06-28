import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-100 py-8 px-4 text-center flex gap-6 flex-col justify-center items-center">
        <p className="text-secondary">
          © Copyright <span className="  text-primary">Kelly</span> All Rights
          Reserved
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 border border-secondary rounded-full hover:border-action transition"
          >
            <FaXTwitter className="text-secondary group-hover:text-action text-[20px] transition" />
          </a>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 border border-secondary rounded-full hover:border-action transition"
          >
            <FaFacebook className="text-secondary group-hover:text-action text-[20px] transition" />
          </a>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 border border-secondary rounded-full hover:border-action transition"
          >
            <FaInstagram className="text-secondary group-hover:text-action text-[20px] transition" />
          </a>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 border border-secondary rounded-full hover:border-action transition"
          >
            <FaLinkedin className="text-secondary group-hover:text-action text-[20px] transition" />{" "}
          </a>
        </div>
        <div>
          <p className="text-[12px] text-secondary">
            Designed by{" "}
            <a
              href="https://bootstrapmade.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-action"
            >
              BootstrapMade
            </a>{" "}
            Distributed by{" "}
            <a
              href="https://themewagon.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-action"
            >
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
      {/* <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div> */}
    </>
  );
}
