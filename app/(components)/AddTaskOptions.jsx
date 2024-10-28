import {
  faCalendar,
  faClock,
  faRepeat,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddTaskOptions = () => {
  return (
    <>
      <div className="flex gap-8">
        <div className="flex gap-2 items-center text-gray-600 cursor-pointer hover:text-gray-400">
          <FontAwesomeIcon icon={faCalendar} />
          <p>Due Today</p>
        </div>
        <div className="flex gap-2 items-center text-gray-600 cursor-pointer hover:text-gray-400">
          <FontAwesomeIcon icon={faRepeat} />
          <p>Does not repeat</p>
        </div>
      </div>
      <div className="hidden border-2 border-gray-500 px-4 py-4 flex flex-col gap-2">
        <div className="flex justify-between items-center cursor-pointer">
          <h2>Update due date/time:</h2>
          <FontAwesomeIcon icon={faX} className="text-red-600" />
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <FontAwesomeIcon icon={faCalendar} />
          <p>Choose a date</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <FontAwesomeIcon icon={faClock} />
          <p>Choose a time</p>
        </div>
      </div>
      <div className="hidden">
        <p>Every day</p>
        <p>Every weekday</p>
        <p>Every week on X day</p>
        <p>Every month on X day</p>
      </div>
    </>
  );
};

export default AddTaskOptions;
