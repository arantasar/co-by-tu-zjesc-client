import styles from "./Recipe.module.scss";
import defaultPhotoJpg from "./../../assets/spaghetti-big.jpg";
import Details from "./Details/Details";
import React, { FC, useEffect, useState } from "react";
import axios from "./../../axios";
import { useParams } from "react-router-dom";

interface RecipeProps {}

const Recipe: FC<RecipeProps> = () => {
  const [recipe, setRecipe] = useState();
  let { id } = useParams();

  useEffect(() => {
    axios.get("/recipes/" + id).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <div className={styles.background}>
      {recipe && (
        <img src={(recipe && recipe.photoPath) || defaultPhotoJpg} alt="Name" />
      )}
      {recipe && <Details recipe={recipe} />}
    </div>
  );
};

export default Recipe;
