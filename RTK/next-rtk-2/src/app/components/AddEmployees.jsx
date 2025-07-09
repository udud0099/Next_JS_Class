"use client";
import React, { useState } from "react";
import { addEmployee } from "../reduxToolkit/slice";
import { useDispatch } from "react-redux";

const AddEmployees = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addEmployee(name));
    setName("");
  };
  return (
    <div>
      AddUsers
      <br />
      <input
        type="text"
        placeholder="users"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch}>btn</button>
    </div>
  );
};

export default AddEmployees;
