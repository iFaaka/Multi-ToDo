import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormV3 = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length < 3) {
      alert("Las tareas requieren un minimo de tres caracteres");
    } else {
      onSubmit((prevS) => [
        { name: inputValue.trim(), id: uuidv4(), complete: false },
        ...prevS,
      ]);
      setInputValue("");
    }
  };

  return (
    <form
      className="form-container mt-2 mb-3 input-group"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Ingrese su tarea..."
        value={inputValue}
        onChange={handleChange}
        className="form-input form-control"
      />
      <button type="submit" className="form-button btn btn-outline-secondary">
        Cargar
      </button>
    </form>
  );
};
