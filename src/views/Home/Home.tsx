import Hero from "../../components/organisms/Hero/Hero";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import SearchResults from "../../components/organisms/SearchResults/SearchResults";
import React, { useState } from "react";
import Search from "../../components/organisms/Search/Search";
import Item from "../../models/IItem";
import useAppContext from "../../hooks/useAppContext";
import axios from "./../../axios/";
import IRecipe from "../../models/IRecipe";

const HomeView = () => {
  const [showResults, setShowResults] = useState(false);
  const [recipesFound, setRecipesFound] = useState<IRecipe[]>([]);
  const { ingredients, diets, categories, newestRecipes } = useAppContext();
  const [size, setSize] = useState<string>("1");

  const handleSearch = (
    ingredients: Item[],
    categories: Item[],
    diets: Item[],
    size: Item[]
  ): void => {
    setSize(size[0].id);
    axios
      .post<IRecipe[]>("/search", {
        ingredients,
        categories,
        diets,
        size,
      })
      .then((res) => {
        setRecipesFound(res.data);
      })
      .finally(() => {
        setShowResults(true);
      });
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
      <SearchResults
        size={size}
        showResults={showResults}
        recipes={recipesFound}
      />
      <RecipeCards newestRecipes={newestRecipes} />
    </>
  );
};
export default HomeView;
