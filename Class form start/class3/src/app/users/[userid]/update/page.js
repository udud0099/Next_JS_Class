"use client";
import { useEffect, useState } from "react";

const update = ({ params }) => {
  let id = params.userid;
  console.log(id);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDatails();
  }, []);
  const getUserDatails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
  };

  return (
    <div>
      update
      <br></br>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={updateUser}>update user</button>
    </div>
  );
};

export default update;
