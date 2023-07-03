import React, { useState, useEffect } from "react";
import {Div,DivContainer,Select } from "./style.js";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Api1 from "./APIs/Api1/index.js";
import Api2 from "./APIs/Api2/index.js";
import Api3 from "./APIs/Api3/index.js";
import { ContainerSpinner } from "../GlobalStyles.js";

const options = [
  {
    label: "Selecciona",
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
        <ContainerSpinner>
          <h1><u>Selecciona una Api entre la tres que estan disponibles</u></h1>
        </ContainerSpinner>
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
        <h4>Selecciona una Api:</h4>
        <Select value={api} onChange={(e) => setApi(e.target.value)}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Select>
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
