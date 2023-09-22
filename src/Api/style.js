import styled from 'styled-components'

const Div = styled.div`
  background: linear-gradient(to bottom left, #FF7F50, #FFA500);
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  box-shadow: 1px 1px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    /* Estilos para pantallas más pequeñas (ejemplo: tablets) */
    margin: 0.5em;
  }

  @media screen and (max-width: 480px) {
    /* Estilos para pantallas muy pequeñas (ejemplo: smartphones) */
    margin: 0.25em;
  }
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    /* Estilos para pantallas más pequeñas (ejemplo: tablets) */
    margin: 0.5em;
  }

  @media screen and (max-width: 480px) {
    /* Estilos para pantallas muy pequeñas (ejemplo: smartphones) */
    margin: 0.25em;
  }
`;

const Select = styled.select`
  outline: none;
  max-width: 190px;
  padding: 8px;
  background-color: #d4cbcb;
  border: 4px solid #000000;
  width: auto;
  font-weight: bold;
  font-style: italic;

  @media screen and (max-width: 768px) {
    /* Estilos para pantallas más pequeñas (ejemplo: tablets) */
    max-width: 150px;
  }

  @media screen and (max-width: 480px) {
    /* Estilos para pantallas muy pequeñas (ejemplo: smartphones) */
    max-width: 100px;
  }
`;
export {Div,DivContainer,Select};