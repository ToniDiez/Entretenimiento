import React, { useState, useEffect } from "react";
import { ButtonDiv, DIV } from "./style.js";
import { ButtonBlack, Input } from "../../../GlobalStyles.js";
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
      <div>
        <img src={logo} alt="loading..." />
      </div>
    );
  } else {
    return (
      <>
        <h1>Bienvenido a la Api de Pokemon</h1>
        <br></br>
        <Buttons></Buttons>
        <DIV>
          <PokeCard results={pokeData}></PokeCard>
        </DIV>
        <Buttons></Buttons>
      </>
    );
  }
};
export default Api1;
