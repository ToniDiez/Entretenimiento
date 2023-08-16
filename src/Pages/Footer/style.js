import styled from "styled-components";

const Foter = styled.footer`
  background: linear-gradient(70deg, #FFD702 , #FFB380,#3400FF,#00CC66);
  color: white;
  margin-left: -8px;
  margin-bottom:-4em;
  height:auto;
  margin-top:auto;
  position:sticky;
  overflow-x: hidden;
`;
const A = styled.a`
  margin-left: 20px;
  text-decoration: underline;
  color:black
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top:1em;
  margin-bottom:1em;
`;
const Divi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 31%;
  opacity: 90%;
`;

export { Foter, A, Div, Divi};
