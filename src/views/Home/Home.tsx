import Hero from "../../components/Hero/Hero";
import PaperBox from "../../components/Hero/PaperBox/PaperBox";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import Search from "../../components/Search/Search";
import SearchResults from "../../components/SearchResults/SearchResults";
import * as React from "react";
// import styles from "./Home.module.scss";

const HomeView = () => {
  const [showResults, setShowResults] = React.useState(false);
  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <>
      <Hero>
        <PaperBox />
      </Hero>
      <Search handleSearch={handleSearch} />
      <SearchResults showResults={showResults} />
      <RecipeCards />
    </>
  );
};

export default HomeView;
