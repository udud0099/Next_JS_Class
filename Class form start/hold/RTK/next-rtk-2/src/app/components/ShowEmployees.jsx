"use client";
import React from "react";
import { useSelector } from "react-redux";

const ShowEmployees = () => {
  const userData = useSelector((data) => data.employees);
  // console.log(userData);

  return (
    <div>
      DispalaysUjser
      <hr></hr>
      <br />
      {userData.map((item, index) => (
        <h1 key={index}>{item.name} </h1>
      ))}
    </div>
  );
};

export default ShowEmployees;
