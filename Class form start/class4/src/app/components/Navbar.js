import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" ">
      <Link href={"/products"} style={{ marginRight: "20px" }}>
        products
      </Link>
      <Link href={"/addproduct"}>addproduct</Link>
    </div>
  );
};

export default Navbar;
