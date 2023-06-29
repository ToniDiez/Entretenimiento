import styled from "styled-components";

const Container = styled.div`
  width: 250%;
  height: 20px;
  border-radius: 10px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #007bff;
  border-radius: 10px;
  ${({ value }) => {
    if (value <= 25) {
        return "background-color: red;";
    } else if (value <= 50) {
      return "background-color: brown;";
    } else if (value <= 60) {
      return "background-color: orange;";
    } else if (value <= 70) {
      return "background-color: #b2ff74;";
    } else if (value <= 90) {
      return "background-color: lightgreen;";
    } else if (value <= 100) {
      return "background-color: green;";
    } else {
      return "background-color: gold;";
    }
  }}
`;
export { Container, Progress };
