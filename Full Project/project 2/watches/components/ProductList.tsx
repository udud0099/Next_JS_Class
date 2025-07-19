import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  const products = ["", "", ""];
  return (
    <>
      <div id="product">
        <h1>ProductList</h1>
        <div className="grid grid-cols-3 gap-8">
          {products.map((item, index) => (
            <Link key={index} href={"/product/123"}>
              <Image src="/images/w1.webp" alt="img" width={100} height={100} />

              <div>
                <h2>a very good Wathes</h2>
                <p>$122</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
