import React, { useEffect, useState } from "react";
import axios from "../axios";
import IIngredient from "../models/IIngredient";
import ICategory from "../models/ICategory";
import IDiet from "../models/IDiet";

const useAppContext = () => {
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [diets, setDiets] = useState<IDiet[]>([]);

  const getCategories = () =>
    axios.get<ICategory[]>("/categories").then((res) => res.data);
  const getDiets = () => axios.get<IDiet[]>("/diets").then((res) => res.data);

  const getIngredients = () =>
    axios.get<IIngredient[]>("/ingredients").then((res) => res.data);

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

  return { ingredients, diets, categories };
};

export default useAppContext;
