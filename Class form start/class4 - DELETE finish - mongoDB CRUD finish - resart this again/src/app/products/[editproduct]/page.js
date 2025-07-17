"use client";
import React, { useEffect, useState } from "react";

const Page = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    let productData = await fetch(
      `http://localhost:3000/api/products/${props.params.editproduct}`
    );
    productData = await productData.json();

    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setCompany(result.company);
      setColor(result.color);
      setCategory(result.category);
    }
  };

  const updateProduct = async () => {
    // console.log(name, price, company, color, category);
    let data = await fetch(
      `http://localhost:3000/api/products/${props.params.editproduct}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, company, color, category }),
      }
    );
    data = await data.json();
    setName("");
    setPrice("");
    setCompany("");
    setColor("");
    setCategory("");
  };
  return (
    <>
      <div>
        <h1>Update Product</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "200px",
          }}
        >
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button onClick={updateProduct}>Update data</button>
        </div>
      </div>
    </>
  );
};

export default Page;
