import React, { useEffect, useState } from "react";
import { FormV3 } from "./FormV3";
import { TaskListV3 } from "./TaskList/TaskListV3";
import "./stylesheets/ToDoV3.css";

export const ToDoV3 = () => {
  const [taskList, setTaskList] = useState([
    {
      name: "Trabajar en IT 💻",
      id: 321,
      complete: false,
    },
    {
      name: "Aprender React ⚛",
      id: 123,
      complete: true,
    },
  ]);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data === undefined) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    } else {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="todo-container tv3-container">
      <div className="todo tv3-todo-container border rounded bg-light">
        <div className="tv3-content-container">
          <span className="tv3-title">Lista de tareas v3</span>
          <FormV3 onSubmit={setTaskList} />
          <TaskListV3 setTaskList={setTaskList} taskList={taskList} />
        </div>

        <div>
          <span>Cantidad de tareas registradas: {taskList.length}</span>
          <button
            onClick={() => setTaskList([])}
            className="btn btn-danger mb-3 mt-1"
          >
            Eliminar todas las tareas
          </button>
        </div>
      </div>
      <div>
        <p className="code-description">
          La tercer version de nuestros To-Do esta hecha con Bootstrap para
          facilitar su diseño y trabaja con el LocalStorage para que las tareas
          queden guardadas en tu navegador, ademas de un super util boton para
          eliminar todas las tareas
        </p>
      </div>
    </div>
  );
};
