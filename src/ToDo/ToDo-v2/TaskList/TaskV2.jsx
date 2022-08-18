import React from "react";
import "./stylesheets/TaskV2.css";

export const TaskV2 = ({ name, id, onDelete, onComplete, complete }) => {
  return (
    <div
      onClick={(e) => onComplete(e, id)}
      className={`tv2-task-container ${
        complete === false ? "normal-task" : "complete-task"
      }`}
    >
      <span className="tv2-task-name">{name}</span>
      <button className="tv2-task-button" onClick={(e) => onDelete(e, id)}>
        Eliminar
      </button>
    </div>
  );
};
