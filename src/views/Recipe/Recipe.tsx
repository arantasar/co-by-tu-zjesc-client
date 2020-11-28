import styles from "./Recipe.module.scss";
import defaultPhotoJpg from "./../../assets/spaghetti-big.jpg";
import Details from "./Details/Details";
import React, { FC, useEffect, useState } from "react";
import axios from "./../../axios";
import { useParams } from "react-router-dom";
import IRecipe from "../../models/IRecipe";

interface RecipeProps {}

const Recipe: FC<RecipeProps> = () => {
  const [recipe, setRecipe] = useState<IRecipe>();
  const refresh = (updatedRecipe: IRecipe) => setRecipe(updatedRecipe);

  let { id } = useParams();

  useEffect(() => {
    axios.get<IRecipe>("/recipes/" + id).then((res) => {
      setRecipe(res.data);
    });
  }, [id]);

  return (
    <div className={styles.background}>
      {recipe && (
        <img src={(recipe && recipe.photoPath) || defaultPhotoJpg} alt="Name" />
      )}
      {recipe && <Details recipe={recipe} refresh={refresh} />}
    </div>
  );
};

export default Recipe;
