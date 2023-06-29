import React, { useState,useEffect } from "react";
import {Nav,A} from "./style.js";
import logo from "../../../Assets/bitcoin-03.gif"

const Api2 = () => {
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

  if (loading) {
    return (
      <>
        <img src={logo} alt="loading..." />
      </>
    );
  } else {
    return (
      <>
        <h1>Bienvenido a la Api de CriptoMonedas</h1>
        
      </>
    );
  }
};
export default Api2;
