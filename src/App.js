import "./App.css";
import { ToDoV1 } from "./ToDo/ToDo-v1/ToDoV1";
import { ToDoV2 } from "./ToDo/ToDo-v2/ToDoV2";
import { ToDoV3 } from "./ToDo/ToDo-v3/ToDoV3";
import bootstrap from "bootstrap";

function App() {
  return (
    <div className="App">
      <div className="title-section">
        <h1>¡Pero cuantas listas!</h1>
      </div>
      <code className="title-code">
        ¡Bienvenido a mi pagina de listas! Para facilitar tu recorrido por como
        me fui capacitando, re-hice todos los ToDo que me fueron ayudando a
        perfeccionar mis habilidades en React y los uni en una sola pagina.
        <br />
        <br />
        Si queres ver como esta hecho este proyecto podes encontrarlo en su{" "}
        <a href="#" target="_blank">
          Github
        </a>
      </code>
      <div className="list-section">
        <ToDoV1 />
        <ToDoV2 />
        <ToDoV3 />
      </div>
    </div>
  );
}

export default App;
