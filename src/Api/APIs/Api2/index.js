import React, { useState, useEffect } from "react";
import { Nav, A, DIV } from "./style.js";
import logo from "../../../Assets/bitcoin-03.gif";
import CriptoCard from "./Card.js";
import { ContainerSpinner } from "../../../GlobalStyles.js";

const Api2 = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cont, setCont] = useState(0);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    // console.log(responseJSON);
  };

  const carga = () => {
    if (cont === 0) {
      setLoading(true);
      setCont(1);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchApi();
    carga();
  }, []);

  const handleCardDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleRefresh = () => {
    fetchApi();
  };

  if (loading) {
    return (
      <ContainerSpinner>
        <img src={logo} alt="loading..." />
      </ContainerSpinner>
    );
  } else {
    return (
      <>
        <h1>Bienvenido a la Api de CriptoMonedas</h1>
        <button onClick={handleRefresh}>Actualizar</button>
        <DIV>
          <CriptoCard results={todos} onDelete={handleCardDelete} />
        </DIV>
      </>
    );
  }
};

export default Api2;
