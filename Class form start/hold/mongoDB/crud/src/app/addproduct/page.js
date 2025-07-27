"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const addProduct = async () => {
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, age, address }),
    });

    result = await result.json();
  };
  return (
    <>
      <div>
        <h1>add data</h1>
        <div>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button onClick={addProduct}>save data</button>
        </div>
      </div>
    </>
  );
};

export default Page;
