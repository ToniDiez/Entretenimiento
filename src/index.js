import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Nav/index";
import Footer from "./Footer";
import { Container } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <Container>
        <Navbar />

        <App />

        <Footer></Footer>
      </Container>
    </BrowserRouter>
);

reportWebVitals();
