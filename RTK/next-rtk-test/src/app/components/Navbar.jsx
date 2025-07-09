import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/mytestpage">test</Link>
      </div>
      <br />
      Navbar
    </div>
  );
};

export default Navbar;
