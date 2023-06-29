import React, { useState, useEffect } from "react";
import { DIV, ButtonDiv } from "./style.js";
import { ButtonBlack, Input } from "../../../GlobalStyles.js";
import Card from "./Card.js";
import logo from "../../../Assets/portal-rick-and-morty.gif"

const Api3 = () => {
  let api = `https://rickandmortyapi.com/api/character/?page=1`;
  let [ap1, updateApi] = useState([api]);
  const [loading, setLoading] = useState(false);
  const [cont, setCont] = useState(0);

  const carga = () => {
    if (cont == 0) {
      setLoading(true);
      setCont(1);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
    }
  };

  useEffect(() => {
    (async function () {
      let data = await fetch(ap1).then((res) => res.json());
      updateData(data);
      carga();
    })();
  }, [ap1]);

  let [Data, updateData] = useState([]);
  let { info, results } = Data;

  const Buttons = ({ info }) => {
    const handleNext = () => {
      updateApi([info.next]);
    };
    const handlePrev = () => {
      updateApi([info.prev]);
    };

    // const handleInicio = () => {
    //   updateApi(`https://rickandmortyapi.com/api/character/?page=${1}`);
    // };
    // const handleFin = () => {
    //   updateApi([`https://rickandmortyapi.com/api/character/?page=${42}`]);
    // };
    return (
      <>
        <ButtonDiv>
          <ButtonBlack onClick={() => handlePrev()}>Prev</ButtonBlack>
          <ButtonBlack onClick={() => handleNext()}>Next</ButtonBlack>
        </ButtonDiv>
      </>
    );
  };
  const [busqueda, setBusqueda] = useState("");
  const [filtertodos, setfiltertodos] = useState([]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    updateApi(
      `https://rickandmortyapi.com/api/character/?page=${1}&name=${
        e.target.value
      }`
    );
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = results.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setfiltertodos(resultadosBusqueda);
  };
  if (loading) {
    return (
      <>
        <img src={logo} alt="loading..." />
      </>
    );
  } else {
    return (
      <>
        <h1>Bienvenido a la Api de Rick and Morty</h1>
        <Input
          placeholder="Busqueda"
          value={busqueda}
          onChange={handleChange}
        ></Input>
        <br></br>
        <DIV>
          <Card results={results} filtertodos={filtertodos}></Card>
        </DIV>
        <Buttons info={info}></Buttons>
      </>
    );
  }
};
export default Api3;
