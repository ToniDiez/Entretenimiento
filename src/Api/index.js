import React, { useState, useEffect } from "react";
import {Div,DivContainer } from "./style.js";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Api1 from "./APIs/Api1/index.js";
import Api2 from "./APIs/Api2/index.js";
import Api3 from "./APIs/Api3/index.js";

const options = [
  {
    label: "",
    value: "",
  },
  {
    label: "Pokemon",
    value: "Pok",
  },
  {
    label: "Cripto Monedas",
    value: "Cripto",
  },
  {
    label: "Rick y morty",
    value: "Rick",
  },
];

let api1 =``;
let api2 =``;
let api3 = `https://rickandmortyapi.com/api/character/?page=1`;

const Api = () => {
  function Eleccion() {
    if (api == "Pok") {
      return (
        <>
          <Api1></Api1>
        </>
      );
    } else if (api == "Cripto") {
      return (
        <>
          <Api2></Api2>
        </>
      );
    } else if (api == "Rick") {
      return (
        <>
          <Api3></Api3>
        </>
      );
    } else {
      return (
        <>
          <h1>Selecciona una Api entre la tres que estan disponibles</h1>
        </>
      );
    }
  }
 
  const [api, setApi] = useState();
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log(api)
  // });
  
  return (
    <>
    <DivContainer>
      <h1>Funciona Api</h1>
      <form action="#">
        <label>Selecciona una Api:</label>
        <select value={api} onChange={(e) => setApi(e.target.value)}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </form>
      </DivContainer>
      <br></br>
      <Div>
      <Eleccion></Eleccion>
      </Div>
    </>
  );
};
export default Api;
