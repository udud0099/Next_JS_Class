"use client";
import React, { useState } from "react";
import { addEmployee } from "../reduxToolkit/slice";
import { useDispatch } from "react-redux";

const AddEmployees = () => {
  const dispatch = useDispatch();
  const userDispatch = (n) => {
    // dispatch(addEmployee(name));
    dispatch(addEmployee(n));
    console.log(n);
  };
  return (
    <div>
      AddUsers
      <br />
      {/* <input
        type="text"
        placeholder="users"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <button onClick={() => userDispatch(1)}>btn</button>
      <button onClick={() => userDispatch(-1)}>dec</button>
    </div>
  );
};

export default AddEmployees;
