import React from "react";
import "./stylesheets/Task.css";

export const Task = ({ name, onDelete, id }) => {
  return (
    <li className="tv1-task-container">
      <span className="tv1-task-name">{name}</span>
      <button className="tv1-task-button" onClick={() => onDelete(id)}>
        Eliminar
      </button>
    </li>
  );
};
