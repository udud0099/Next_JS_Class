"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const handleSubmit = async () => {
    if (!name || age === "") {
      alert("Please enter both name and age");
      return;
    }

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        age: Number(age),
      }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Data saved!");
      setName("");
      setAge("");
    } else {
      alert("Error saving data");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Post Data to MongoDB</h1>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <input
          type="number"
          placeholder="Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value === "" ? "" : Number(e.target.value))}
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
