import React from "react";
import Task from "./Task";

const TaskList = () => {
  const testTasks = [
    "This is a task",
    "Drink water",
    "Go on a run",
    "more",
    "This is a task",
    "Drink water",
    "Go on a run",
    "more",
  ];
  return (
    <div className="flex flex-col gap-2">
      {testTasks.map((task, taskIndex) => (
        <div key={taskIndex}>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
