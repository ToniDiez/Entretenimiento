import styled from 'styled-components'

const Img= styled.img`
  border-radius: 10%;
  
`;
const Div= styled.div`
  border:3.5px solid #0b5ed7;
  border-radius: 10%;
  background:#3C3E44;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width:30vw;
  height:auto;
  gap: 10px 20px;
`;

const DIV= styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 20px;
  margin-left:2em;
  margin-bottom:0.5em;
`;
const Name= styled.p`
  color:white;
  font-size:2em;
`;
const ButtonRed= styled.button`
 height: 1rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(214, 61, 46);
    border-radius: 50%;
`;
const ButtonGreen= styled.button`
 height: 1rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
`;
const ButtonUnk= styled.button`
height: 1rem;
   width: 0.5rem;
   margin-right: 0.375rem;
   background: linear-gradient(135deg, rgb(85, 204, 68) 50%,rgb(214, 61, 46) 50%);
   border-radius: 50%;
`;
const Label= styled.label`
  color:white;
  font-size:0%.5;
  text-decoration:underline;
`;
const ButtonDiv= styled.div`
   display: flex;
   justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width:50vw;
`;
export {DIV,Img,Div,Name,ButtonRed,ButtonGreen,ButtonUnk,Label,ButtonDiv};