import styled from 'styled-components'

const Nav = styled.nav`
  display:flex;
  flex-direction: row;
  background-color:palevioletred;
  justify-content:center;

`;
const A= styled.a`
  margin-left:20px;
  text-decoration:none;
  
`;
const Img= styled.img`
  width:8vw;
  height:10vh;
`;
const DIV = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gap: 10px 20px;
margin-left: 2em;
margin-bottom: 0.5em;
`;
const Button = styled.button`
  box-shadow: 2px 2px 2px black;
  border: 4px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #ff0000, #00ff00);
  padding: 20px;
  border-radius: 8px;
  &:hover {
    transform: rotate(345deg);
  }
`;
const ButtonPlus = styled.button`
  box-shadow: 2px 2px 2px black;
  border: 4px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #ff0000, #00ff00);
  padding: 20px;
  border-radius: 8px;
  width:50vw;
  height:70vh;
  &:hover {
    transform: rotate(345deg);
  }
`;
export {Nav,A,Img,DIV,Button,ButtonPlus};