import * as React from "react";
import Header from "./Header/Header";
import Icons from "./Icons/Icons";
import styles from "./RecipeCard.module.scss";
import defaultImagePng from "./../../../assets/spaghetti.png";
import IRecipe from "../../../models/IRecipe";

const shortenText = (text: string) => {
  if (text.length > 100) {
    let shortened = text.slice(0, 100);
    shortened = shortened.replace(/\s+\S*$/, "...");
    return shortened;
  } else {
    return text;
  }
};

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
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <Header author={user && user.name} date={dateAdded} />
      </div>
      <div className={styles.image}>
        <img src={photoPath || defaultImagePng} alt={name} />
      </div>
      <div className={[styles.wrapper, styles.content].join(" ")}>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.dsc}>{shortenText(description)}</p>
        </div>
        <Icons views={viewCounter} likes={likes} stars={inFavourite} />
      </div>
    </div>
  );
};

export default RecipeCard;
