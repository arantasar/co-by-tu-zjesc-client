import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero>
        <Navbar />
      </Hero>
    </div>
  );
};

export default App;
