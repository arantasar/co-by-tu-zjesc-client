import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import UserContext from "../../../context/user-context";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC<RouteComponentProps> = (props) => {
  const userContext = React.useContext(UserContext);
  const handleLogout = () => {
    userContext.logout();
    props.history.push("/");
  };

  let buttons = (
    <>
      <Button component={NavLink} to="/login" activeClassName="linkActive">
        Zaloguj
      </Button>
      <Button component={NavLink} to="/register" activeClassName="linkActive">
        Rejestracja
      </Button>
    </>
  );

  if (userContext.isUserLogged) {
    buttons = (
      <>
        <Button>Profil</Button>
        <Button component={NavLink} to="/admin" activeClassName="linkActive">
          Admin
        </Button>
        <Button onClick={handleLogout}>Wyloguj</Button>
      </>
    );
  }

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

export default withRouter(Navbar);
