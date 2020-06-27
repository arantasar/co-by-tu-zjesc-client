import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "../../components/organisms/Footer/Footer";
import Navbar from "../../components/organisms/Navbar/Navbar";
import RouterSwitch from "./../../router/RouterSwitch";
import theme from "../../theme";
import UserContext from "../../context/user-context";
import "./App.scss";

const App = () => {
  const [user, setUser] = React.useState({});
  const [isUserLogged, setIsUserLogged] = React.useState(false);

  const login = () => {
    setUser("");
    setIsUserLogged(true);
  };

  const logout = () => {
    setUser("");
    setIsUserLogged(false);
  };

  const value = { isUserLogged, user, login, logout, token: "" };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={value}>
        <Router>
          <Navbar />
          <RouterSwitch />
          <Footer />
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
