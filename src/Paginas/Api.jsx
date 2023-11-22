import React from "react";
import CardApi from "../Componentes/cardApi";
import { useEffect, useState } from "react";

const Api = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
          setProducts(data.results);
          console.log(data.results);
      });
  }, []);

  return (
    <div className="Prin">
      <div className="FondoM">
        <div className="Mostrar">
          <a className="opp" href="">
            <b>Fiestas de fin de añ</b>o
          </a>
          <a className="op" href="">
            <b>Descubrir</b>
          </a>
        </div>
      </div>
      <div className="Abajo">
        <a href="">
   
        </a>
      </div>

      <div className="Productos">
        <div className="ProdEs">
          {products.map((product, index) => (
            <CardApi
            key={index}
            habilidades={product.habilidades}
            habilidad={product.habilidad}
              nombre={product.name}
              image={product.url}
            ></CardApi>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Api;