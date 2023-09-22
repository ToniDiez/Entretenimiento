
import { Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio/index";
import Api from "./Api/index";
import Redux from "./Pages/useRedux";
import Prox2 from "./Pages/Prox2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Entretenimiento/build/" element={<Inicio />}></Route>
        <Route path="/Entretenimiento/build/Api" element={<Api />}></Route>
        <Route path="/Entretenimiento/build/Redux" element={<Redux />}></Route>
        <Route path="/Entretenimiento/build/Prox2" element={<Prox2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
