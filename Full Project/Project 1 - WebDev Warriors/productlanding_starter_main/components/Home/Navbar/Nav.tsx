"use client";
import ThemeToggle from "@/components/Helper/ThemeToggle";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div
        className={`transition-all  ${
          navBg ? "bg-pink-500 shadow-4xl" : "fixed bg-pink-700"
        } duration-200 h-[12vh] z-[100] fixed w-full `}
      >
        <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
          <div className="text-white font-bold text-2xl sm:text-3xl">LOGO</div>

          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.url}
                  key={link.id}
                  className="text-white hover:text-green-300 font-semibold transition-all duration-200"
                >
                  <p>{link.label}</p>
                </Link>
              );
            })}
          </div>
          {/* buttions */}
          <div className="flex items-center space-x-4">
            {/* buy now button */}
            <a
              href="#_"
              className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-green-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-green-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
            >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-sm">
                <FaShoppingBag className="mr-3 w-5 h-5" />
                Buy Now
              </span>
            </a>
            {/* Theme Switch Button */}
            <ThemeToggle />
            {/* ham burger menu */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
