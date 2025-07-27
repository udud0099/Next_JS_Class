"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUsers = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);
  const dispatch = useDispatch();

  return (
    <div>
      DispalaysUjser
      <hr></hr>
      <br />
      {userData.map((item, index) => (
        <div key={index}>
          <h1>{item.name} </h1>
          <button onClick={() => dispatch(removeUser(item.id))}>del</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
