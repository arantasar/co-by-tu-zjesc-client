import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import PaperBox from "../components/Hero/PaperBox/PaperBox";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero>
        <PaperBox />
      </Hero>
    </ThemeProvider>
  );
};

export default App;
