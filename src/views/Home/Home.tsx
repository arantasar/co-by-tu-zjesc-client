import Hero from "../../components/organisms/Hero/Hero";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import SearchResults from "../../components/organisms/SearchResults/SearchResults";
import React, { useState, useEffect } from "react";
import Search from "../../components/organisms/Search/Search";
import Item from "../../models/IItem";
import useAppContext from "../../hooks/useAppContext";

const HomeView = () => {
  const [showResults, setShowResults] = useState(false);

  const { ingredients, diets, categories } = useAppContext();

  const handleSearch = (
    ingredients: Item[],
    categories: Item[],
    diets: Item[],
    size: Item[]
  ): void => {
    console.log(ingredients, categories, diets, size);
    setShowResults(true);
  };

  return (
    <>
      <Hero />
      <Search
        ingredients={ingredients}
        categories={categories}
        diets={diets}
        search={handleSearch}
      />
      <SearchResults showResults={showResults} />
      <RecipeCards />
    </>
  );
};

export default HomeView;
