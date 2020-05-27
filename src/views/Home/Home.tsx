import Hero from "../../components/organisms/Hero/Hero";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import Search from "../../components/Search/Search";
import SearchResults from "../../components/SearchResults/SearchResults";
import React, { useState } from "react";

const HomeView = () => {
  const [showResults, setShowResults] = useState(false);
  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <>
      <Hero />
      <Search handleSearch={handleSearch} />
      <SearchResults showResults={showResults} />
      <RecipeCards />
    </>
  );
};

export default HomeView;
