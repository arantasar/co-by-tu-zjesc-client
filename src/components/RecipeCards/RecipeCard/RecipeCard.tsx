import * as React from "react";
import Header from "./Header/Header";
import Icons from "./Icons/Icons";
import styles from "./RecipeCard.module.scss";
import defaultImage from "./../../../assets/spaghetti.webp";
import defaultImagePng from "./../../../assets/spaghetti.png";
import IRecipe from "../../../models/IRecipe";

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe: {
    name,
    photoPath,
    user,
    dateAdded,
    description,
    viewCounter,
    likes,
    inFavourite,
  },
}) => {
  const img = (
    <picture>
      <source srcSet={photoPath || defaultImage} type="image/webp" />
      <img
        className={styles.image}
        src={photoPath || defaultImagePng}
        alt={name}
      />
    </picture>
  );

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <Header author={user && user.name} date={dateAdded} />
      </div>
      {img}
      <div className={styles.wrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.dsc}>{description}</p>
        <Icons views={viewCounter} likes={likes} stars={inFavourite} />
      </div>
    </div>
  );
};

export default RecipeCard;
