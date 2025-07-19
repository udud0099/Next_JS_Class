import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white p-4 w-screen text-black">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>Wathes</Link>
          <div>
            <div>
              <Search />
            </div>
            <input type="text" placeholder="Search" />
          </div>

          <Link href={"/add-product"}>
            <button>Add Product</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
