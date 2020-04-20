import * as React from "react";
import styles from "./Recipe.module.scss";
import defaultPhotoJpg from "./../../assets/spaghetti-big.jpg";
import Details from "./Details/Details";

export interface RecipeProps {}

const Recipe = () => (
  <div className={styles.background}>
    <img src={defaultPhotoJpg} alt="Name" />
    <Details />
  </div>
);

export default Recipe;
