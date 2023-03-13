import React from "react";

const Card = ({ name, colour }) => {
  return (
    <div>
      <p>hola {name}!</p>
      <p>Sabemos que tu color favorito es:</p>
      <div style={{backgroundColor:colour}}>
        <p>{colour}</p>
      </div>
    </div>
  );
};

export default Card;
