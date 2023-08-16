import React from "react";
import {
  Img,
  Button,
  ButtonPlus
} from "./style.js";
export default function Card({ results, onDelete }) {
  const handleCardClick = (id) => {
    onDelete(id);
  };

  let display;

  if (results) {
    console.log(results.length)
    if (results.length == 1) {
      display = results.map((x) => {
        let { id, symbol, name, image, last_updated } = x;

        return (
           <div>
          <ButtonPlus key={id} onClick={() => handleCardClick(id)}>
            <Img src={image} alt="" />
            <div> 
              <p>{name}</p>
              <div></div>
            </div>
          </ButtonPlus>
          </div>
        );
      });
    } else
      display = results.map((x) => {
        let { id, symbol, name, image, last_updated } = x;

        return (
          <Button key={id} onClick={() => handleCardClick(id)}>
            <Img src={image} alt="" />
            <div>
              <p>{name}</p>
            </div>
          </Button>
        );
      });
  } else {
    display = "No hemos encontrado el personaje :/";
  }

  return <>{display}</>;
}
