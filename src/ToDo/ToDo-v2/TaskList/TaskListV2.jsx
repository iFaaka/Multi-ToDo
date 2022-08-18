import React from "react";
import { TaskV2 } from "./TaskV2";
import "./stylesheets/TaskListV2.css";

export const TaskListV2 = ({ taskList, setTaskList }) => {
  const handleDelete = (e, id) => {
    e.stopPropagation();
    setTaskList(taskList.filter((i) => i.id !== id));
  };
  const handleComplete = (e, id) => {
    setTaskList(
      taskList.map((i) =>
        i.id == id ? { name: i.name, id: i.id, complete: !i.complete } : i
      )
    );
  };

  return (
    <div className="tasklist-container">
      {taskList.map((item) => (
        <TaskV2
          name={item.name}
          id={item.id}
          key={item.id}
          complete={item.complete}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
