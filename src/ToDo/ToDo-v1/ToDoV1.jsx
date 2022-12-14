import React, { useState } from "react";
import { Form } from "./Form";
import { TaskList } from "./ToDoList-v1/TaskList";
import "./stylesheets/ToDoV1.css";

export const ToDoV1 = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <div className="todo-container tv1-container">
      <div className="todo todo-v1-container">
        <div>
          <p className="tv1-header">Lista de tareas v1</p>

          <Form onSubmit={setItemList} />
        </div>

        <div>
          <TaskList setItemList={setItemList} itemList={itemList} />
        </div>
      </div>
      <p className="code-description">
        Este es el primero de la lista, su uso es basico. Solo sirve para anotar
        y eliminar pequeñas anotaciones
      </p>
    </div>
  );
};
