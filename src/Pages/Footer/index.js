import React from "react";
import { Foter,Div,Divi, A } from "./style.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Foter>
        <Div>
      <Divi>
      <Link to="/"><A>Inicio</A></Link>
          

          
          <Link to="/Api"><A>Api</A></Link>
        

        
          <Link to="/Prox1"><A>PROX</A></Link>
        

        
          <Link to="/Prox2"><A>PROX1</A></Link>
      </Divi> 
      <Divi>B</Divi> 
      <Divi>C</Divi> 
      </Div> 
      
      </Foter>
      
    </>
  );
};
export default Footer;
