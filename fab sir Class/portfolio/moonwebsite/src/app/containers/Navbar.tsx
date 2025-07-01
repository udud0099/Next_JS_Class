"use client";
import { useState } from "react";
import { PiMoonThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [navHov, setNavHov] = useState(-1);
  const navItem: string[] = [
    "Home",
    "Profile",
    "Blog",
    "Portfolio",
    "Pricing",
    "Contact",
  ];
  return (
    <>
      <nav className="sticky  top-0 z-50 bg-white/90 backdrop-blur-sm  w-auto">
        <div className="container mx-auto flex justify-between items-center py-4">
          <PiMoonThin className="text-4xl cursor-pointer text-primary hover:text-action" />
          <div>
            <ul className="md:flex gap-6 hidden ">
              {navItem.map((item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  onMouseEnter={() => setNavHov(index)}
                  onMouseLeave={() => setNavHov(-1)}
                  className={`${
                    navHov == -1
                      ? "text-primary"
                      : index == navHov
                      ? "text-primary"
                      : "text-primary/60"
                  }  `}
                >
                  {" "}
                  <li className=" ">{item}</li>
                </a>
              ))}
            </ul>
            <RxHamburgerMenu className="md:hidden text-2xl text-primary cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
}
