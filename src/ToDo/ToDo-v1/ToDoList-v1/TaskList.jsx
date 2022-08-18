import React from "react";
import { Task } from "./Task";

export const TaskList = ({ itemList, setItemList }) => {
  const handleDelete = (id) => setItemList(itemList.filter((i) => i.id !== id));

  return (
    <ol>
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
