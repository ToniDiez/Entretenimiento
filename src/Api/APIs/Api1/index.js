import React, { useState, useEffect } from "react";
import { ButtonDiv, DIV,H1 } from "./style.js";
import { ButtonBlack, ContainerSpinner, Input } from "../../../GlobalStyles.js";
import PokeCard from "./PokeCard.js";
import logo from "../../../Assets/GIF011.gif";
import axios from "axios";

const Api1 = () => {
  const [loading, setLoading] = useState(false);
  const [cont, setCont] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [disable, setDisable] = React.useState(true);

  const pokeFunc = async () => {
    const res = await axios.get(url);

    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemonData(res.data.results);

    if (res.data.previous != null) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const getPokemonData = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log("MAP DATA", result.data);
      setPokeData((state) => {
        state = [...state, result.data];

        state.sort((a, b) => (a.id > b.id ? 1 : -1));

        return state;
      });
    });
  };

  useEffect(() => {
    pokeFunc();
    carga();
  }, [url]);
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
  const Buttons = () => {
    return (
      <>
        <ButtonDiv>
        <ButtonBlack
          disabled={disable}
          onClick={() => {
            setPokeData([]);
            setUrl(prevUrl);
          }}
        >
          Previous
        </ButtonBlack>
        <ButtonBlack
          onClick={() => {
            setPokeData([]);
            setUrl(nextUrl);
          }}
        >
          Next
        </ButtonBlack>
        </ButtonDiv>
      </>
    );
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
        <H1>Bienvenido a la Api de Pokemon</H1>
        <br></br>
        <Buttons></Buttons>
        <br></br>
        <DIV>
          <PokeCard results={pokeData}></PokeCard>
        </DIV>
        <br></br>
        <Buttons></Buttons>
      </>
    );
  }
};
export default Api1;
