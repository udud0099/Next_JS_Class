"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteData = (props) => {
  const router = useRouter();
  const deleteRecord = async () => {
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
    <div>
      <button onClick={deleteRecord}>delete</button>
    </div>
  );
};

export default DeleteData;
