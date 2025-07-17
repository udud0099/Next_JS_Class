"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteProduct = (props) => {
  const router = useRouter();
  const delectRecord = async () => {
    let response = await fetch(
      `http://localhost:3000/api/products/${props.id}`,
      { method: "delete" }
    );
    response = await response.json();
    if (response.success) {
      router.push("/products");
    }
  };
  return (
    <>
      <button onClick={delectRecord}>delete</button>
    </>
  );
};

export default DeleteProduct;
