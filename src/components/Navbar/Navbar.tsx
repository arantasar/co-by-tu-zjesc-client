import * as React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Link from "./Link";
import "./Navbar.scss";

const Nav = styled.nav`
  background-color: white;
  box-shadow: 2px 0 10px 2px;
  position: fixed;
  width: 100%;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="App-container flex flex-center-vertical height-full">
        <Logo />
        <div className="spacer"></div>
        <Link text="login"></Link>
        <Link text="register"></Link>
      </div>
    </Nav>
  );
};

export default Navbar;
