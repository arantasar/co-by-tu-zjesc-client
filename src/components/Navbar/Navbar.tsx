import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" className="spacer">
            CoByTuZjeść?
          </Typography>
          <Button>Login</Button>
          <Button>Register</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
