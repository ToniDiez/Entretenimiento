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
const Div= styled.div`
  background:linear-gradient(to bottom left, #FF7F50, #FFA500);
  margin-left:1em;
  margin-right:1em;
  margin-bottom:1em;
  box-shadow:1px 1px 1px black;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: white;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 300ms ease-in-out;

  &:focus {
    background-color: white;
    transform: scale(1.05);
    box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
  }
`;
const Button = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  border: none;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: white;
  overflow: hidden;

  svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.2em 0.8em 1.05em;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: "";
    background: #000;
    opacity:50%;
    width: 120%;
    left: -10%;
    transform: skew(45deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  &:active {
    transform: scale(0.95);
  }
`;
export {Div,Input,Button};