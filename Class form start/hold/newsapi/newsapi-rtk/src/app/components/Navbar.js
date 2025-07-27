import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home </Link>
      <Link href="/apiusers">apiusers </Link>
    </div>
  );
};

export default Navbar;
