import React from "react";
import Card from "./Card";
import Style from "./styles/Cards.module.css";

export default function Cards({ cities, onClose }) {
  return (
    <div className={Style.allCards}>
      {cities && cities.length > 0 ? (
        cities.map((ciudad) => {

          return (
            <Card
              key={ciudad.id}
              max={ciudad.max}
              min={ciudad.min}
              name={ciudad.name}
              img={ciudad.img}
              onClose={() => onClose(ciudad.id)}
            />
          );
        })
      ) : (
        <h1 className={Style.CardsVacio}>No hay ciudades para mostrar</h1>
      )}
    </div>
  );
}