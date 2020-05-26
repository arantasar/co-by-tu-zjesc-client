import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import UserContext from "./../../context/user-context";

const Navbar: React.FC = () => {
  const userContext = React.useContext(UserContext);

  const buttons = !userContext.isUserLogged ? (
    <>
      <Button>Profil</Button>
      <NavLink to="/admin" activeClassName="linkActive">
        <Button>Admin</Button>
      </NavLink>
    </>
  ) : (
    <>
      <NavLink to="/login" activeClassName="linkActive">
        <Button>Zaloguj</Button>
      </NavLink>
      <NavLink to="/register" activeClassName="linkActive">
        <Button>Rejestracja</Button>
      </NavLink>
    </>
  );

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <NavLink to="/" className="spacer">
            <Typography variant="h6">CoByTuZjeść?</Typography>
          </NavLink>
          {buttons}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
