"use client";
import React from "react";

const DeleteUser = (props) => {
  const userId = props.id;
  const deleteuser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "delete",
    });
    result = await result.json();
  };
  return (
    <div>
      <button onClick={deleteuser}>delete</button>
    </div>
  );
};

export default DeleteUser;
