import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./stylesheets/FormV2.css";

export const FormV2 = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length < 3) {
      alert("Las tareas tienen un minimo de 3 caracteres");
      setInputValue("");
    } else {
      onSubmit((prevS) => [
        { name: inputValue.trim(), id: uuidv4(), complete: false },
        ...prevS,
      ]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tv2-form">
      <input
        type="text"
        value={inputValue}
        placeholder="Ingrese su tarea..."
        onChange={handleChange}
        className="tv2-input"
      />
      <button className="tv2-form-button" type="submit">
        Cargar
      </button>
    </form>
  );
};
