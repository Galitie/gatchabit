"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTaskInput = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tasks", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Task.");
    }
    e.target.reset();
    router.refresh();
  };

  const [formData, setFormData] = useState();

  return (
    <form method="post" onSubmit={handleSubmit} className="flex">
      <input
        className="shadow border-b-4 border-gray-700 appearance-none grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-slate-100"
        id="task-input"
        type="text"
        placeholder="Type in a new task"
        onChange={handleChange}
        required={true}
        name="title"
      ></input>
      <input type="submit" className="btn" value="+ Add" />
    </form>
  );
};

export default AddTaskInput;
