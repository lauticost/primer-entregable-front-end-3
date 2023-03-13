import React, { useState } from "react";
import Card from "./components/Card";
import TextInput from "./components/TextInput";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [validacion, setValidacion] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length >= 3 && color.length >= 6) {
      setShowCard(true);
      setValidacion(false);
    } else {
      setValidacion(true);
      setShowCard(false);
    }
  };

  return (
    <>
      <form
        id="login-form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder={`Por favor ingrese su nombre`}
          value={nombre}
          onChange={setNombre}
        />
        <TextInput
          placeholder={`Ingresa tu color favorito (formato HEX)`}
          value={color}
          onChange={setColor}
        />
      </form>
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          flexDirection: "column",
          margin: "10px 0px",
        }}
      >
        <button form="login-form" btn="submit">
          Enviar
        </button>
      </div>

      {validacion && (
        <h2>"Por favor chequea que la información sea correcta"</h2>
      )}
      {showCard && <Card name={nombre} colour={color} />}
    </>
  );
};

export default Formulario;