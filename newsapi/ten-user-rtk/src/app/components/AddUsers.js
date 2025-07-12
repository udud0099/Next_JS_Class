"use client";
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
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

export default AddUsers;
