import * as React from "react";
import Header from "./Header/Header";
import Icons from "./Icons/Icons";
import styles from "./RecipeCard.module.scss";
import defaultImage from "./../../../assets/spaghetti.webp";
import defaultImagePng from "./../../../assets/spaghetti.png";
import RecipeCardProps from "./../../../interfaces/RecipeCardProps";

const recipeCard = ({
  author,
  image,
  dsc,
  date,
  name,
  ...props
}: RecipeCardProps) => {
  const img = (
    <picture>
      <source srcSet={image || defaultImage} type="image/webp" />
      <img className={styles.image} src={image || defaultImagePng} alt={name} />
    </picture>
  );

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <Header author={author} date={date} />
      </div>
      {img}
      <div className={styles.wrapper}>
        <p className={styles.name}>{name}</p>
        <p className={styles.dsc}>{dsc}</p>
        <Icons {...props} />
      </div>
    </div>
  );
};

export default recipeCard;
