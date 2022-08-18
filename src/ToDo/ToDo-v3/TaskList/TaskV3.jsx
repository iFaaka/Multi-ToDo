import React from "react";
import { MdDelete } from "react-icons/md";
import "./stylesheets/TaskV3.css";
export const TaskV3 = ({ name, id, complete, onDelete, onComplete }) => {
  return (
    <div
      onClick={() => onComplete(id)}
      className={`${` ${
        complete === true ? "active" : "normal-task"
      }  mb-2 rounded list-group-item tv3-task-container `}`}
    >
      <span className="tv3-task-name">{name}</span>
      <MdDelete onClick={(e) => onDelete(e, id)} />
    </div>
  );
};
