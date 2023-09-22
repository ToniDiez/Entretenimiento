import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #00CC66;
  justify-content: space-evenly;
  height: 5em;
  margin-top: -8px;
  margin-left: -8px;
  position:sticky;
  top:0;
  opacity:95%;
  box-shadow:5px 5px 5px black;
  @media screen and (max-width: 500px) {
   width:100%

  }
`;
const Button = styled.button`
margin-top:1em;
  margin-left: 20px;
  text-decoration:none;
  font-size: 24px;
  background-color: #00CC66;
  color: black;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow:2px 2px 2px black;
  border-radius:4em;

  :hover {
   color:black;
   background-color:#D5F5E3 ;
   opacity:80%;
   height:auto;
   border-radius:4em;
  }
  @media screen and (max-width: 500px) {
     width:18vw;
     margin-left: 0px;
  }
`;

export { Nav, Button };
