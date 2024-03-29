import styles from "./Recipe.module.scss";
import defaultPhotoJpg from "./../../assets/spaghetti-big.jpg";
import Details from "./Details/Details";
import React, { FC, useContext, useEffect, useState } from "react";
import axios from "./../../axios";
import { useParams } from "react-router-dom";
import IRecipe from "../../models/IRecipe";
import UserContext from "../../context/UserContext";
import IUser from "../../models/IUser";

interface RecipeProps {}

const Recipe: FC<RecipeProps> = () => {
  const [recipe, setRecipe] = useState<IRecipe>();
  const ctx = useContext(UserContext);
  const refresh = (recipe: IRecipe, user?: IUser) => {
    setRecipe(recipe);
    if (user) {
      ctx.updateUser(user);
    }
  };

  const { id, size } = useParams();
  const url = size ? `/recipes/${id}/${size}` : `/recipes/${id}`;

  useEffect(() => {
    console.log(url);
    axios.get<IRecipe>(url).then((res) => {
      setRecipe(res.data);
    });
  }, [id]);

  return (
    <div className={styles.background}>
      {recipe && (
        <img
          src={(recipe && recipe.photoPath) || defaultPhotoJpg}
          alt="Name"
          className={styles.img}
        />
      )}
      {recipe && <Details recipe={recipe} refresh={refresh} />}
    </div>
  );
};

export default Recipe;
