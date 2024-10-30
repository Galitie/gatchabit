import React from "react";
import Task from "./Task";

const getTasks = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST_URL + "/api/Tasks", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tasks", error);
  }
};
const TaskList = async () => {
  const { tasks } = await getTasks();

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task, taskIndex) => (
        <div key={taskIndex}>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
