"use client";
import { useState } from "react";

const adduser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const addUser = async () => {
    // console.log(name, age, email);
    let respone = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    respone = await respone.json();
    console.log(respone);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          width: "300px",
          fontSize: "20px",
        }}
      >
        <h1>adduser</h1>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button onClick={addUser}>adduser</button>
      </div>
    </>
  );
};

export default adduser;
