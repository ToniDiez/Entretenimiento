import React from "react";
import { useState } from "react";
import {
  ButtonPoke,
  Img,
  MyButton,
  PopupContainer,
  PopupContent,
  Div,
  DivImg,
  DivStats,
  DivData,
  ImgIcon,
  DivType,
  P,
  PN,
  H1,
} from "./style";
import ProgressBar from "./ProgressBar";
import typeIcons from "./types";

export default function Card({ results }) {
  let display;
  const [openPopups, setOpenPopups] = useState([]);

  const togglePopup = (index) => {
    if (openPopups.includes(index)) {
      setOpenPopups(openPopups.filter((i) => i !== index));
    } else {
      setOpenPopups([...openPopups, index]);
    }
  };

  if (results) {
    display = results.map((pokemon) => {
      const { id, name, types, sprites, abilities, stats, weight } = pokemon;
      const pokemonIndex = id;

      return (
        <React.Fragment key={pokemonIndex}>
          <ButtonPoke
            type={types[0].type.name}
            onClick={() => togglePopup(pokemonIndex)}
          >
            <Img src={sprites.front_default} />
            <div>
              <H1>{name}</H1>
              <div>
  <PN>Nº Pokedex: {id}</PN>
  <PN>Type:</PN>
  <DivType>
    {types.map((type, typeIndex) => (
      <div key={typeIndex}>
        <P>{type.type.name}</P>
        <ImgIcon src={typeIcons[type.type.name]}></ImgIcon>
      </div>
    ))}
  </DivType>
</div>
            </div>
          </ButtonPoke>
          {openPopups.includes(pokemonIndex) && (
            <PopupContainer>
              <PopupContent type={types[0].type.name}>
                <DivImg>
                  <Img src={sprites.front_default} />
                  <Img src={sprites.back_default} />
                  <Img src={sprites.front_shiny} />
                  <Img src={sprites.back_shiny} />
                </DivImg>
                <H1>{name}</H1>
                <Div>
                  <DivStats>
                    {stats.map((stat, statsIndex) => (
                      <React.Fragment key={statsIndex}>
                        <PN>{stat.stat.name}:</PN>
                        <P>{stat.base_stat}</P>
                        <ProgressBar value={stat.base_stat}></ProgressBar>
                      </React.Fragment>
                    ))}
                  </DivStats>
                  <DivData>
                    <div>
                      <PN>Nº Pokedex: {id}</PN>
                      <PN>Weight: {weight} kg</PN>
                      <PN>Type:</PN>
                      <DivType>
                        {types.map((type, typeIndex) => (
                          <>
                            <P key={typeIndex}>{type.type.name}</P>
                            <ImgIcon src={typeIcons[type.type.name]}></ImgIcon>
                          </>
                        ))}
                      </DivType>
                    </div>
                    <div>
                      {abilities.map((ability, abilitiesIndex) => (
                        <React.Fragment key={abilitiesIndex}>
                          <PN>Ability: {ability.ability.name}</PN>
                          <PN>Hidden Ability: {ability.slot}</PN>
                        </React.Fragment>
                      ))}
                    </div>
                  </DivData>
                </Div>
                <MyButton onClick={() => togglePopup(pokemonIndex)}>
                  Cerrar
                </MyButton>
              </PopupContent>
            </PopupContainer>
          )}
        </React.Fragment>
      );
    });
  } else {
    display = "No hemos Encontrado al Pokemon  :/";
  }

  return <>{display}</>;
}
