import React from "react";
import { Task } from "./Task";
import './stylesheets/TaskList.css'
export const TaskList = ({ itemList, setItemList }) => {
  const handleDelete = (id) => setItemList(itemList.filter((i) => i.id !== id));

  return (
    <ol className="tv1-ol-container">
      {itemList.map((item) => (
        <Task
          onDelete={handleDelete}
          key={item.id}
          id={item.id}
          name={item.name}
        />
      ))}
    </ol>
  );
};
