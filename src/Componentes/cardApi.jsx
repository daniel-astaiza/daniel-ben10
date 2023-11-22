import React from "react";

const CardApi = ({ habilidades, habilidad, nombre, image }) => {
  return (
    <div className="card col-3 m-1 p-4 d-flex justify-content-center- align-items-center">
      <img src={image} alt="" height="300" width="200"/>
      <h1> {habilidades} </h1>
      <p>{habilidad} </p>
      <h4>{nombre}</h4>
    </div>  
  );
};

export default CardApi;