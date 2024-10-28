import { faCheckCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Task = ({ task }) => {
  return (
    <div className="flex items-center justify-between bg-slate-300 rounded-sm px-4 py-2">
      <div className="flex justify-start gap-6 items-center">
        <FontAwesomeIcon icon={faEllipsisV} />
        <p>{task}</p>
      </div>
      <button className="btn flex items-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
      </button>
    </div>
  );
};

export default Task;
