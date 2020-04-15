import * as React from "react";
import Hero from "../../components/Hero/Hero";
import PaperBox from "../../components/Hero/PaperBox/PaperBox";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import Search from "../../components/Search/Search";
import SearchResults from "../../components/SearchResults/SearchResults";
// import styles from "./Home.module.scss";

const HomeView = () => {

  return (
    <>
      <Hero>
        <PaperBox />
      </Hero>
      <Search />
      <SearchResults showResults={false} />
      <RecipeCards />
    </>
  );
};

export default HomeView;
