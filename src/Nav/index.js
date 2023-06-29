import React from "react";
import { Nav, Button } from "./style.js";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Link to="/">
          <Button>Inicio</Button>
        </Link>

        <Link to="/Api">
          <Button>Api</Button>
        </Link>

        <Link to="/Prox1">
          <Button>PROX</Button>
        </Link>

        <Link to="/Prox2">
          <Button>PROX1</Button>
        </Link>
      </Nav>

      <Outlet />
    </>
  );
};
export default Navbar;
