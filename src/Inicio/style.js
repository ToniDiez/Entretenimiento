import styled from 'styled-components'


const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin:1em;
`;
const Div1 = styled.div`
  background:linear-gradient(to bottom left, #FF7F50, #FFA500);
  margin-left:1em;
  box-shadow:1px 1px 1px black;
`;
const Div2 = styled.div`
  background:linear-gradient(to bottom right, #FF7F50, #FFA500,#FF7F50);
  margin-left:1em;
  box-shadow:1px 1px 1px black;
`;
const Div3 = styled.div`
 background:linear-gradient(to bottom left, #FF7F50, #FFA500,#FFD700);
 margin-left:1em;
  box-shadow:1px 1px 1px black;
`;
const H1 = styled.h1`
  text-decoration:underline;
`;
const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items:center;
  margin:1em;
  border:10px solid #FF6033;
  background:linear-gradient(to bottom left, #FF7F50, #FFA500,#FFD700);
  box-shadow:5px 5px 5px black;
`;

export {Div,Container,H1,Div1,Div2,Div3};