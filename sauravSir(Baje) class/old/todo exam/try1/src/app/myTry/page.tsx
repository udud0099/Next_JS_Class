"use client";
import React, { useState } from "react";

const Page = () => {
  const [task, setTask] = useState<string[] | undefined>(["t", "ssae"]);
  const [addTodo, setAddTodo] = useState<string | undefined>();
  const [editMode, setEditMode] = useState(false);
  const [editNo, setEditNo] = useState<number>();

  const saveTodo = () => {
    if (!addTodo) return;
    setTask([...task, addTodo]);
    setAddTodo("");
    console.log(setTask);
  };

  const deleteTask = (index: number) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };
  const editTask = (index: number) => {
    setAddTodo(task[index]);
    setEditMode(true);
    // task[index] = addTodo
    setEditNo(index);
    console.log(editMode);
  };
  const editTodo = () => {
    // setAddTodo(task[index]);
    setEditMode(false);
    task[editNo] = addTodo;
    setAddTodo("");
  };
  return (
    <div>
      <input
        type="text"
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <button
        onClick={() => saveTodo()}
        // className={editMode ? "hidden" : "block"}
        // className="hidden"
        style={editMode ? { display: "none" } : { display: "block" }}
      >
        Save
      </button>
      <button
        onClick={() => editTodo()}
        // className={editMode ? "block" : "hidden"}
        style={{ display: editMode ? "block" : "none" }}
      >
        Edit
      </button>
      <br />

      {task?.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1> <button onClick={() => editTask(index)}>e</button>{" "}
          <button onClick={() => deleteTask(index)}>del</button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Page;
