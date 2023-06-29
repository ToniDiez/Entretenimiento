import React from 'react'
import {
    Img,
    Div,
    Name,
    ButtonRed,
    ButtonGreen,
    ButtonUnk,
    Label,
  } from "./style.js";
export default function Card({results,filtertodos}) {
        let display;
    
        if (results) {

            {results.length === 0
                ? display = filtertodos.map((x) => {
            let { id, image, name, status, location, species, origin } = x;
            function Alive() {
              if (status === "Dead") {
                return (
                  <div>
                    <ButtonRed></ButtonRed>
                    {status}-{species}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div>
                    <ButtonGreen></ButtonGreen>
                    {status}-{species}
                  </div>
                );
              } else {
                return (
                  <div>
                    <ButtonUnk></ButtonUnk>
                    {status}-{species}
                  </div>
                );
              }
            }
    
            return (
              <>
                <Div>
                  <Img src={image} alt="" />
                  <div>
                    <Name>{name}</Name>
                    <div>
                      <Alive></Alive>
                      <br></br>
                      <Label>Última vez visto:</Label>
                      <p>{location.name}</p>
                      <Label>Origen:</Label>
                      <p>{origin.name}</p>
                    </div>
                  </div>
                </Div>
              </>
            );
          }):
          display = results.map((x) => {
            let { id, image, name, status, location, species, origin } = x;
            function Alive() {
              if (status === "Dead") {
                return (
                  <div>
                    <ButtonRed></ButtonRed>
                    {status}-{species}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div>
                    <ButtonGreen></ButtonGreen>
                    {status}-{species}
                  </div>
                );
              } else {
                return (
                  <div>
                    <ButtonUnk></ButtonUnk>
                    {status}-{species}
                  </div>
                );
              }
            }
    
            return (
              <>
                <Div>
                  <Img src={image} alt="" />
                  <div>
                    <Name>{name}</Name>
                    <div>
                      <Alive></Alive>
                      <br></br>
                      <Label>Última vez visto:</Label>
                      <p>{location.name}</p>
                      <Label>Origen:</Label>
                      <p>{origin.name}</p>
                    </div>
                  </div>
                </Div>
              </>
            );
          })
          
        }
        } else {
          display = "No Hemos Encontrado al Personaje :/";
        }
    
        return <>{display}</>;
    }
    
