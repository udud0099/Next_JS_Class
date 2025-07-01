"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";

export default function Navbar() {
  const navText = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Resume", url: "/resume" },
    { label: "Services", url: "/services" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Contact", url: "/contact" },
  ];
  const pathname = usePathname();

  return (
    <>
      <div className="flex   z-50 justify-between gap-x-8 flex-nowrap items-center px-4 py-2 shadow sticky top-0 bg-white/70  backdrop-blur-2xl">
        <Link href="/" className={`font-light text-3xl text-primary uppercase`}>
          Kelly
        </Link>
        <div className="hidden lg:block">
          {navText.map((item, index) => {
            const isActive = pathname === item.url;
            return (
              <Link
                href={item.url}
                key={index}
                className={`relative group   px-4 hover:text-action ${
                  isActive ? "  text-action" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-2 bottom-[-8px] h-[2px] w-0  bg-action transition-all duration-50 group-hover:left-2  group-hover:w-6 ${
                    isActive ? "left-2 w-6 bg-action text-action" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-secondary hover:text-action text-[20px] " />
          </a>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-secondary hover:text-action text-[20px] " />
          </a>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-secondary hover:text-action text-[20px] " />
          </a>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-secondary hover:text-action text-[20px] " />{" "}
          </a>
          <GiHamburgerMenu className="text-secondary cursor-pointer text-[24px] lg:hidden ml-4" />
        </div>
      </div>
    </>
  );
}
