import React, { useState } from "react";
import { FormV2 } from "./FormV2";
import { TaskListV2 } from "./TaskList/TaskListV2";
import "./stylesheets/ToDoV2.css";

export const ToDoV2 = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="todo-container tv2-container">
      <div className="todo todo-tv2-container">
        <div>
          <span className="tv2-title">Lista de tareas v2</span>
          <FormV2 onSubmit={setTaskList} />
          <TaskListV2 taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div className="tv2-length-task">
          <span>Cantidad de tareas registradas: {taskList.length}</span>
        </div>
      </div>
      <div>
        <p className="code-description">
          La version V2 es una lista de tareas que incluye ademas de un contador
          para saber cuantas tareas tenemos, podemos marcarlas como terminadas.
          Tambien cuenta con un mejor filtrado de tareas, exigiendo un minimo de
          caracteres y eliminando espacios sobrantes que entorpecen la vista{" "}
        </p>
      </div>
    </div>
  );
};
