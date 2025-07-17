"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    console.log(name, price, company, color, category);
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, company, color, category }),
    });
    result = await result.json();
    setName("");
    setPrice("");
    setCompany("");
    setColor("");
    setCategory("");
  };
  return (
    <>
      <div>
        <h1>Add Product</h1>
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
          <button onClick={addProduct}>Save data</button>
        </div>
      </div>
    </>
  );
};

export default Page;
