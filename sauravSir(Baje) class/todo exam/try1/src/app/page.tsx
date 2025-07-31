"use client";
import { useState } from "react";

export default function Home() {
  const [myTask, setMyTask] = useState("");
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <div className="w-[50%] mx-auto py-12 flex gap-8 flex-col">
          <input
            type="text"
            placeholder="type your task hear .."
            className="py-4  text-xl text-white border-none outline-0 focus:outline-0"
          />
          <button className="w-full rounded-2xl bg-white text-xl text-black py-4">
            Add Task
          </button>
        </div>
        <h1>todo</h1>
      </div>
    </>
  );
}
