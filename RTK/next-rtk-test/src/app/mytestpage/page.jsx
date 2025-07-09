"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const userData = useSelector((data) => data.employees);
  console.log(userData);
  return (
    <div>
      my test page
      <h1>{userData}</h1>
    </div>
  );
};

export default page;
