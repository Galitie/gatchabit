"use client";
import {
  faCheckCircle,
  faEllipsisV,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const Task = ({ task }) => {
  const router = useRouter();

  const deleteTask = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST_URL + "/api/Tasks/" + task._id,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div className="flex items-center justify-between bg-slate-300 rounded-sm px-4 py-2">
      <div className="flex justify-start gap-6 items-center">
        <FontAwesomeIcon icon={faEllipsisV} />
        <p>{task.title}</p>
      </div>
      <div className="flex gap-6">
        <button className="flex items-center" onClick={deleteTask}>
          <FontAwesomeIcon icon={faX} className="text-red-600" />
        </button>
        <button className="btn flex items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
        </button>
      </div>
    </div>
  );
};

export default Task;
