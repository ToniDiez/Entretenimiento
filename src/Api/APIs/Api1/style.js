import styled, { keyframes } from "styled-components";
import image from "../../../Assets/pokeball-re.jpg";

const DIV = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px 20px;
  margin-left: 2em;
  margin-bottom: 0.5em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-left: 1em;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-left: 0.5em;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 50vw;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Img = styled.img`
  background: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 2px 2px 2px black;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ButtonPoke = styled.button`
  align-items: center;
  height: 45vh;
  appearance: none;
  background: ${({ type }) => {
    switch (type) {
      case 'fire':
        return 'linear-gradient(135deg, white, #FD746C, #FF9068)'; // Rojo claro a naranja claro
        case 'water':
        return 'linear-gradient(135deg, white, #4CB8C4, #3CD3AD)'; // Azul verdoso a verde turquesa
      case 'grass':
        return 'linear-gradient(135deg, white, #8ED56E, #57BA6F)'; // Verde claro a verde oscuro
      case 'electric':
        return 'linear-gradient(135deg, white, #FFD86F, #FFA94D)'; // Amarillo claro a naranja claro
      case 'poison':
        return 'linear-gradient(135deg, white, #9F6E97, #977DA1)'; // Morado oscuro a púrpura claro
      case 'flying':
        return 'linear-gradient(135deg, white, #9EACEB, #6E8AC2)'; // Azul claro a azul oscuro
      case 'normal':
        return 'linear-gradient(135deg, white, #9E9E9E, #727272)'; // Gris claro a gris oscuro
      case 'fighting':
        return 'linear-gradient(135deg, white, #CE4265, #A7552A)'; // Rojo oscuro a marrón oscuro
      case 'psychic':
        return 'linear-gradient(135deg, white, #FF80B2, #FF519E)'; // Rosa claro a rosa oscuro
      case 'ground':
        return 'linear-gradient(135deg, white, #D97746, #B75320)'; // Marrón claro a marrón oscuro
      case 'rock':
        return 'linear-gradient(135deg, white, #C9BB8A, #A59E75)'; // Beige claro a beige oscuro
      case 'bug':
        return 'linear-gradient(135deg, white, #92BC2C, #6C8E29)'; // Verde claro a verde oscuro
      case 'ghost':
        return 'linear-gradient(135deg, white, #5269AC, #414D6F)'; // Azul oscuro a morado oscuro
      case 'steel':
        return 'linear-gradient(135deg, white, #5A8EA1, #3D708E)'; // Azul claro a azul oscuro
      case 'ice':
        return 'linear-gradient(135deg, white, #B8E3F1, #82C0D8)'; // Azul claro hielo a azul oscuro hielo
      case 'dragon':
        return 'linear-gradient(135deg, white, #8A75FF, #7043F0)'; // Púrpura claro a púrpura oscuro
      case 'dark':
        return 'linear-gradient(135deg, white, #595761, #3E3A44)'; // Gris oscuro a negro azulado
      case 'fairy':
        return 'linear-gradient(135deg, white, #FDB9E9, #FF8CC3)'; // Rosa claro a rosa oscuro
      // Agrega más casos según los tipos de Pokémon que desees manejar
      default:
        return 'linear-gradient(135deg, #FFFFFF, #FFFFFF)'; // Degradado blanco
    }
  }};
  border-radius: 4px;
  border-width: 0;
  width: 20vw;
  flex-direction: column;
  border: 8px groove grey;
  box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px,
    rgba(45, 35, 66, 0.15) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  font-size: 18px;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px,
      rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
  @media screen and (max-width: 768px) {
    /* Cambios de estilo para pantallas más pequeñas */
    font-size: 16px;
    padding: 8px 16px;
    width: 50vw;
  }
`;
const slideOut = keyframes`
  from {
    transform: translate(-50%, 100%);
  }

  to {
    transform: translate(-50%, -50%);
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(-50%, 100%);
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70vw;
  height: 79vh;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 4px;
  z-index: 9999;
  animation: ${(props) => (props.isOpen ? slideIn : slideOut)} 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 70vh;
  }

  @media screen and (max-width: 480px) {
    width: 95vw;
    height: 60vh;
  }
`;

const PopupContent = styled.div`
  background: url(${image})center center no-repeat ,${({ type }) => {
    switch (type) {
      case 'fire':
        return 'linear-gradient(135deg, white, #FD746C, #FF9068)'; // Rojo claro a naranja claro
        case 'water':
        return 'linear-gradient(135deg, white, #4CB8C4, #3CD3AD)'; // Azul verdoso a verde turquesa
      case 'grass':
        return 'linear-gradient(135deg, white, #8ED56E, #57BA6F)'; // Verde claro a verde oscuro
      case 'electric':
        return 'linear-gradient(135deg, white, #FFD86F, #FFA94D)'; // Amarillo claro a naranja claro
      case 'poison':
        return 'linear-gradient(135deg, white, #9F6E97, #977DA1)'; // Morado oscuro a púrpura claro
      case 'flying':
        return 'linear-gradient(135deg, white, #9EACEB, #6E8AC2)'; // Azul claro a azul oscuro
      case 'normal':
        return 'linear-gradient(135deg, white, #9E9E9E, #727272)'; // Gris claro a gris oscuro
      case 'fighting':
        return 'linear-gradient(135deg, white, #CE4265, #A7552A)'; // Rojo oscuro a marrón oscuro
      case 'psychic':
        return 'linear-gradient(135deg, white, #FF80B2, #FF519E)'; // Rosa claro a rosa oscuro
      case 'ground':
        return 'linear-gradient(135deg, white, #D97746, #B75320)'; // Marrón claro a marrón oscuro
      case 'rock':
        return 'linear-gradient(135deg, white, #C9BB8A, #A59E75)'; // Beige claro a beige oscuro
      case 'bug':
        return 'linear-gradient(135deg, white, #92BC2C, #6C8E29)'; // Verde claro a verde oscuro
      case 'ghost':
        return 'linear-gradient(135deg, white, #5269AC, #414D6F)'; // Azul oscuro a morado oscuro
      case 'steel':
        return 'linear-gradient(135deg, white, #5A8EA1, #3D708E)'; // Azul claro a azul oscuro
      case 'ice':
        return 'linear-gradient(135deg, white, #B8E3F1, #82C0D8)'; // Azul claro hielo a azul oscuro hielo
      case 'dragon':
        return 'linear-gradient(135deg, white, #8A75FF, #7043F0)'; // Púrpura claro a púrpura oscuro
      case 'dark':
        return 'linear-gradient(135deg, white, #595761, #3E3A44)'; // Gris oscuro a negro azulado
      case 'fairy':
        return 'linear-gradient(135deg, white, #FDB9E9, #FF8CC3)'; // Rosa claro a rosa oscuro
      // Agrega más casos según los tipos de Pokémon que desees manejar
      default:
        return 'linear-gradient(135deg, #FFFFFF, #FFFFFF)'; // Degradado blanco
    }
  }};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 68vw;
  height: 75vh;
  padding: 20px;
  border-radius: 4px;
  background-image:url(${image})left bottom no-repeat;
`;

const MyButton = styled.button`
  padding: 10px 20px;
  background-color: #36395a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 65vw;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
  }
`;
const DivImg = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: auto;
  height: auto;
`;
const DivStats = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.2fr 0.1fr;
  border: 8px groove grey;
  width: 70vw;
  height: 40vh;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 30vh;
  }
`;
const DivData = styled.div`
  display: flex;
  border: 8px groove grey;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 50vw;
  height: 40vh;

  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 30vh;
  }
`;
const ImgIcon = styled.img`
  width: 2vw;
  height: 2vh;

  @media screen and (max-width: 768px) {
    width: 4vw;
    height: 4vh;
  }
`;
const DivType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin:-1.5em
`;
const PN = styled.p`
font-weight:bold;
::first-letter {
    text-transform: capitalize;
  }
`;
const P = styled.p`
::first-letter {
    text-transform: capitalize;
  }
`;
const H1 = styled.h1`
text-decoration:underline;
::first-letter {
    text-transform: capitalize;
  }
`;

export {
  DivImg,
  DIV,
  ButtonDiv,
  Img,
  ButtonPoke,
  PopupContainer,
  PopupContent,
  MyButton,
  Div,
  DivStats,
  DivData,
  ImgIcon,
  DivType,
  P,
  H1,
  PN
};
