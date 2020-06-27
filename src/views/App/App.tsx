import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "../../components/organisms/Footer/Footer";
import Navbar from "../../components/organisms/Navbar/Navbar";
import RouterSwitch from "./../../router/RouterSwitch";
import theme from "../../theme";
import UserContextProvider from "../../context/user-context";
import "./App.scss";

const App = () => (
  <ThemeProvider theme={theme}>
    <UserContextProvider>
      <Router>
        <Navbar />
        <RouterSwitch />
        <Footer />
      </Router>
    </UserContextProvider>
  </ThemeProvider>
);

export default App;
