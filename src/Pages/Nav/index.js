import React from "react";
import { Nav, Button } from "./style.js";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/Slice.js";

const Navbar = () => {
  const user = useSelector(selectUser);

  return (
    <>
      {user.username !== "" ? (
        <>
          <Nav>
            <Link to="/">
              <Button>Inicio</Button>
            </Link>

            <Link to="/Api">
              <Button>Api</Button>
            </Link>

            <Link to="/Redux">
              <Button>Redux</Button>
            </Link>

            <Link to="/Prox2">
              <Button>PROX1</Button>
            </Link>
            <Link>
              <Button>{user.username}</Button>
            </Link>
          </Nav>

          <Outlet />
        </>
      ) : (
        <>
          <Nav>
            <Link to="/">
              <Button>Inicio</Button>
            </Link>

            <Link to="/Api">
              <Button>Api</Button>
            </Link>

            <Link to="/Redux">
              <Button>Redux</Button>
            </Link>

            <Link to="/Prox2">
              <Button>PROX1</Button>
            </Link>
          </Nav>

          <Outlet />
        </>
      )}
    </>
  );
};

export default Navbar;

