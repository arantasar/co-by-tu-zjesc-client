import * as React from "react";
import Header from "./Header/Header";
import styles from "./RecipeCard.module.scss";

export interface RecipeCardProps {
  author: String;
  date: Date;
  image?: String;
  dsc: String;
}

const recipeCard = ({ author, image, dsc, date }: RecipeCardProps) => (
  <div className={styles.wrapper}>
    <Header author={author} date={date} />
    <p>{image}</p>
    <p>{dsc}</p>
    <p>icons</p>
  </div>
);

export default recipeCard;
