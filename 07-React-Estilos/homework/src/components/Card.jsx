import React from "react";
import Style from "./styles/Card.module.css"

export default function Card(props) {
  // acá va tu código
  return (

    <div className={Style.container}>

      <button id={Style.close} onClick={props.onClose}>
        {" "}
        X{" "}
      </button>
      <h1 className={Style.CityName}> {props.name} </h1>
      <div className={Style.info}>
        <h3 className={Style.minElement}>Min <br></br> {props.min}° </h3>
        <h3>Max <br></br> {props.max}° </h3>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img clima" />
    </div>
  );
}