import React, { useState } from "react";
import { FormV2 } from "./FormV2";
import { TaskListV2 } from "./TaskList/TaskListV2";
import "./stylesheets/ToDoV2.css";

export const ToDoV2 = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="tv2-container">
    <div className="todo-tv2-container">
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
          <code className="code-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa eum pariatur! Quo, voluptas voluptate. Nihil, rem aliquam. Sequi corporis voluptatem tempore sapiente maiores quisquam ipsam quod eum, obcaecati rem?
          </code>
        </div>
    </div>


  );
};
