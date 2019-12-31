import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import UserContext from "./../context/user-context";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "../views/Home/Home";
import RegisterView from "../views/Register/Register";
import LoginView from "../views/Login/Login";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ isUserLogged: false }}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/register">
              <RegisterView />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
