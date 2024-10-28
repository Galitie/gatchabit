import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddTaskInput = () => {
  return (
    <div className="flex py-4">
      <input
        className="shadow border-b-4 border-gray-700 appearance-none grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="task-input"
        type="text"
        placeholder="Type in a new task"
        maxLength={20}
      ></input>
      <button className="btn">
        <p>
          <span>
            <FontAwesomeIcon
              icon={faAdd}
              className="text-green-600 pt-1"
            ></FontAwesomeIcon>
          </span>{" "}
          Add
        </p>
      </button>
    </div>
  );
};

export default AddTaskInput;
