import * as React from "react";
import Hero from "../../components/Hero/Hero";
import PaperBox from "../../components/Hero/PaperBox/PaperBox";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import Search from "../../components/Search/Search";
import SearchResults from "../../components/SearchResults/SearchResults";
import styles from "./Home.module.scss";

const HomeView = () => {
  const [res, setRes] = React.useState(false);

  const search = () => {
    setRes(true);
  };

  let showResults = res ? "" : styles.hidden;

  return (
    <>
      <Hero>
        <PaperBox />
      </Hero>
      <Search search={search} />
      <div className={showResults}>
        <SearchResults />
      </div>
      <RecipeCards />
    </>
  );
};

export default HomeView;
