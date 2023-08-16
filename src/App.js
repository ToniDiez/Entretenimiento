
import { Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio/index";
import Api from "./Api/index";
import Redux from "./Pages/useRedux";
import Prox2 from "./Pages/Prox2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="Api" element={<Api />}></Route>
        <Route path="Redux" element={<Redux />}></Route>
        <Route path="Prox2" element={<Prox2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
