"use client";
 
// import { FormEvent, useState } from "react"
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  username: string;
  userage: number;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    userage: 0,
  });

  // const handleChange = (e:FormEvent<HTMLInputElement>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) || 0 : value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sub", formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text" 
            name="username"
            id="name"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number" 
            name="userage"
            id="age"
            value={formData.userage}
            onChange={handleChange}
          />
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
