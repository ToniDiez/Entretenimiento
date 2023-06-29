
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio/index";
import Api from "./Api/index";
import Prox1 from "./Prox1";
import Prox2 from "./Prox2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="Api" element={<Api />}></Route>
        <Route path="Prox1" element={<Prox1 />}></Route>
        <Route path="Prox2" element={<Prox2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
