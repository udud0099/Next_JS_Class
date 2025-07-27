"use client";
import React, { useEffect, useState } from "react";

const Page = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    getProductDetal();
  }, []);

  const getProductDetal = async () => {
    let productData = await fetch(
      `http://localhost:3000/api/products/${props.params.editproduct}`
    );
    productData = await productData.json();
    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setAge(result.age);
      setAddress(result.address);
    }
  };
  const editProduct = async () =>{
    let productData = await fetch(
      `http://localhost:3000/api/products/${props.params.editproduct}`,{method:"PUT", body:JSON.stringify({name,age,address})}
    );
    productData = await productData.json()
  }

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
          <button onClick={editProduct}>save data</button>
        </div>
      </div>
    </>
  );
};

export default Page;
