import { useEffect, useState } from "react";
import axios from "../axios";
import IIngredient from "../models/IIngredient";
import ICategory from "../models/ICategory";
import IDiet from "../models/IDiet";
import IRecipe from "../models/IRecipe";

const useAppContext = () => {
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [diets, setDiets] = useState<IDiet[]>([]);
  const [newestRecipes, setNewestRecipes] = useState<IRecipe[]>([]);

  const getCategories = () =>
    axios.get<ICategory[]>("/categories").then((res) => res.data);
  const getDiets = () => axios.get<IDiet[]>("/diets").then((res) => res.data);

  const getIngredients = () =>
    axios.get<IIngredient[]>("/ingredients").then((res) => res.data);

  const getNewest = () =>
    axios.get<IRecipe[]>("/recipes/newest").then((res) => res.data);

  useEffect(() => {
    Promise.all<IIngredient[], ICategory[], IDiet[], IRecipe[]>([
      getIngredients(),
      getCategories(),
      getDiets(),
      getNewest(),
    ]).then((response) => {
      const [ingredients, categories, diets, newest] = response;
      setIngredients(ingredients);
      setCategories(categories);
      setDiets(diets);
      setNewestRecipes(newest);
    });
  }, []);

  return { ingredients, diets, categories, newestRecipes };
};

export default useAppContext;
