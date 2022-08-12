import React, { useState } from 'react';
import Style from './components/styles/App.module.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  const [ciudades, setCiudades] = useState([])
  const apiKey = "Secret"
  function onSearch(ciudad) {

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`
    )
      .then((r) => r.json())
      .then((recurso) => {
        
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          
          setCiudades(function(oldCities) {
            let colisionHandler = oldCities.some((el)=> el.id===ciudad.id)
            console.log(colisionHandler)
           if(!colisionHandler) return [...oldCities, ciudad]
           else{ 
            alert("Ciudad Ya Ingresada")
            return [...oldCities]
          }
          } 
          )
          
            ;
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCiudades((estadoAnterior) =>
      estadoAnterior.filter((el) => el.id !== id)
    );
  }





  return (
    <div className={Style.App}>
      <NavBar onSearch={onSearch} />
      <hr />
      <Cards
        cities={ciudades} onClose={onClose}
      />
    </div>
  );
}

export default App;
