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
    display = results.map((x, index) => {
      let { id, name, types, sprites, abilities, stats, weight } = x;

      return (
        <React.Fragment key={index}>
          <ButtonPoke
            type={types[0].type.name}
            onClick={() => togglePopup(index)}
          >
            <Img src={sprites.front_default} />
            <div>
              <H1>{name}</H1>
              <div>
                <P>Nº Pokedex: {id}</P>
                <P>Type:</P>
                <DivType>
                  {types.map((type, typeIndex) => (
                    <>
                      <P key={typeIndex}>{type.type.name}</P>
                      <ImgIcon src={typeIcons[type.type.name]}></ImgIcon>
                    </>
                  ))}
                </DivType>
              </div>
            </div>
          </ButtonPoke>
          {openPopups.includes(index) && (
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
                        <P>{stat.stat.name}:</P>
                        <P>{stat.base_stat}</P>
                        <ProgressBar value={stat.base_stat}></ProgressBar>
                      </React.Fragment>
                    ))}
                  </DivStats>
                  <DivData>
                    <div>
                      <P>Nº Pokedex: {id}</P>
                      <P>Weight: {weight} kg</P>
                      <P>Type:</P>
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
                          <P>Ability: {ability.ability.name}</P>
                          <P>Hidden Ability: {ability.slot}</P>
                        </React.Fragment>
                      ))}
                    </div>
                  </DivData>
                </Div>
                <MyButton onClick={() => togglePopup(index)}>Cerrar</MyButton>
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
