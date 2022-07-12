import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../Redux/Actions/actions";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar variant="dark" style={{ backgroundColor: "#276e90" }}>
        <Container className="">
          <Navbar.Brand href="/home" style={{ color: "#EFEFEF" }}>
            El Tiempo
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/home" style={{ color: "#EFEFEF" }} className="m-1">
              Home
            </Nav.Link>
            <Nav.Link
              href="/perfil"
              style={{ color: "#EFEFEF" }}
              className="m-1"
              
            >
              Perfil
            </Nav.Link>
            <Button
              variant="light"
              className=" m-1"
              onClick={() => dispatch(logoutAsync())}
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/*      <Navbar
        variant="dark"
        className=""
        style={{ backgroundColor: "#00A8C6" }}
      >
        <div className="w-50 d-flex m-auto  justify-content-around">
          <Nav className=" d-flex">
            <Nav.Link href="/home"  className=" m-1" style={{ color: "#F9F2E7" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/perfil"   className=" m-1" style={{ color: "#F9F2E7" }}>
              Perfil
            </Nav.Link>
            <Button variant="light"  className=" m-1" onClick={() => dispatch(logoutAsync())}>
            Logout
          </Button>
          </Nav>
          
        </div>
      </Navbar> */}
    </div>
  );
};

export default NavbarComponent;
