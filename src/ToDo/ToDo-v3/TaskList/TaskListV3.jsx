import React from "react";
import { TaskV3 } from "./TaskV3";
import "./stylesheets/TaskListV3.css";

export const TaskListV3 = ({ taskList, setTaskList }) => {
  const handleDelete = (e, id) => {
    e.stopPropagation();
    setTaskList(taskList.filter((i) => i.id !== id));
  };

  const handleComplete = (id) => {
    setTaskList(
      taskList.map((i) =>
        i.id === id ? { name: i.name, id: i.id, complete: !i.complete } : i
      )
    );
  };

  return (
    <div className="list-group tv3-task-list-container mt-2">
      {taskList.map((item) => {
        return (
          <TaskV3
            complete={item.complete}
            id={item.id}
            name={item.name}
            onDelete={handleDelete}
            onComplete={handleComplete}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
