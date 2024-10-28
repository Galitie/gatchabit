import { faCalendar, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddTaskOptions = () => {
  return (
    <div className="flex gap-6">
      <div className="flex gap-2 items-center text-gray-600 cursor-pointer hover:text-gray-400">
        <FontAwesomeIcon icon={faCalendar} />
        <p>Today</p>
      </div>
      <div className="flex gap-2 items-center text-gray-600 cursor-pointer hover:text-gray-400">
        <FontAwesomeIcon icon={faRepeat} />
        <p>Does not repeat</p>
      </div>
    </div>
  );
};

export default AddTaskOptions;
