import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  background-color:#3399FF;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
`;
const ButtonBlack= styled.button`
padding: 0.6rem 1rem;
  border: 1px solid #995309;
  border-radius: 4px;
  background-color: rgb(24, 30, 177, 0.5);
  cursor: pointer;
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 100;

  box-shadow: 0 1px 0 rgb(255, 255, 255, 0) inset, 0 1px 3px rgba(0, 0, 0, 0.2);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(10%, #5257dc),
    to(#181eb2)
  );
  background-image: linear-gradient(#5257dc 10%, #181eb2 100%);

  &:hover {
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(10%, #5257dc),
      to(#181eb2)
    );
    background-image: linear-gradient(#5257dc 40%, #181eb2 100%);
    background-color: #181eb2;
    color: #fff;
  }
`
const Input =styled.input`
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #222;
  padding: 15px 5px 10px 20px;
  box-shadow: inset 4px 4px 4px rgba(15, 15, 15, 0.315),4px 4px 4px rgba(28, 28, 28, 0.13);
  border-radius: 25px;
  background-clip: padding-box;
`;
const ContainerSpinner = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  align-content:center;
  background:linear-gradient(to bottom left, #FF7F50, #FFA500);
  width:80vw;
`;

export {Container, ButtonBlack,Input,ContainerSpinner};