"use client";

import { ChangeEvent, useState } from "react";

interface FormData {
  name: string;
  age: number;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Extract name and value

    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            placeholder="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
