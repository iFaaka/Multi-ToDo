import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./stylesheets/Form.css";

export const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit((prevS) => [{ name: inputValue, id: uuidv4() }, ...prevS]);
    setInputValue("");
  };
  return (
    <form className="tv1-form-container" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={inputValue}
        type="text"
        placeholder="Ingrese su tarea..."
        className="tv1-input"
      />
      <button className="tv1-button" type="submit">
        Cargar
      </button>
    </form>
  );
};
