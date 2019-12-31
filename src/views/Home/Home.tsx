import * as React from "react";

import Hero from "../../components/Hero/Hero";
import PaperBox from "../../components/Hero/PaperBox/PaperBox";
import RecipeCards from "../../components/RecipeCards/RecipeCards";

const HomeView = () => (
  <>
    <Hero>
      <PaperBox />
    </Hero>
    <RecipeCards />
  </>
);

export default HomeView;
