import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import UserContext from "./../context/user-context";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import RouterSwitch from "./RouterSwitch";

const App: React.FC = () => {
  const [user, setUser] = React.useState({});
  const [isUserLogged, setIsUserLogged] = React.useState(false);

  const login = () => {
    setUser("");
    setIsUserLogged(true);
  };

  const value = { isUserLogged, user, login };

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
