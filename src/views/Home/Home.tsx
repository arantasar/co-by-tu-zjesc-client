import Hero from "../../components/organisms/Hero/Hero";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import SearchResults from "../../components/organisms/SearchResults/SearchResults";
import React, { useState, useEffect } from "react";
import axios from "./../../axios/index";
import IIngredient from "../../models/IIngredient";
import ICategory from "../../models/ICategory";
import IDiet from "../../models/IDiet";
import Search from "../../components/organisms/Search/Search";
import Item from "../../models/IItem";

const HomeView = () => {
  const [showResults, setShowResults] = useState(false);

  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [diets, setDiets] = useState<IDiet[]>([]);

  const getIngredients = () =>
    axios.get<IIngredient[]>("/ingredients").then((res) => res.data);
  const getCategories = () =>
    axios.get<ICategory[]>("/categories").then((res) => res.data);
  const getDiets = () => axios.get<IDiet[]>("/diets").then((res) => res.data);

  useEffect(() => {
    Promise.all<IIngredient[], ICategory[], IDiet[]>([
      getIngredients(),
      getCategories(),
      getDiets(),
    ]).then((response) => {
      const [ingredients, categories, diets] = response;
      setIngredients(ingredients);
      setCategories(categories);
      setDiets(diets);
    });
  }, []);

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
