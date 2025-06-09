"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {  ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/whatido", label: "What I Do" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/awards", label: "Awards" },
  ];
  return (
    <>
      <nav className="max-w-screen-xl mx-auto px-6 lg:px-12 flex justify-between items-center text-white py-2">
        <div>
          <h1 className="text-white text-2xl font-bold">
            <Link href="/">
              Jitendra <br /> Upadhyaya
            </Link>
          </h1>
          {/* <h1>Jitendra </h1><h1>Upadhyaya</h1> */}
        </div>
        <div className="flex gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.href}
                className={`hover:text-primary font-medium transition-colors ${
                  isActive ? "  text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div>
          <Link href="/contactme" className="flex gap-2">
            Contact Me <ArrowUpRightIcon className="w-6 h-6 " />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
