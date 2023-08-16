import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./Pages/Nav/index";
import Footer from "./Pages/Footer";
import { Container } from "./GlobalStyles";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
    <BrowserRouter>
    <Provider store={store}>
      <Container>
        <Navbar />

        <App />

        <Footer></Footer>
      </Container>
      </Provider>
    </BrowserRouter>
);

reportWebVitals();
