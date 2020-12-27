import * as React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Container } from "@material-ui/core";
import styles from "./RecipeCards.module.scss";
import { Link } from "react-router-dom";
import IRecipe from "../../models/IRecipe";

interface RecipeCardsProps {
  newestRecipes: IRecipe[];
}

const RecipeCards: React.FC<RecipeCardsProps> = ({ newestRecipes }) => {
  const recipeCards = newestRecipes.map((recipe) => (
    <Link key={recipe.id} to={"/recipe/" + recipe.id}>
      <RecipeCard recipe={recipe} />
    </Link>
  ));

  return (
    <Container>
      <div className={styles.wrapper}>
        <h2 className={styles.sectionHeader}>Najnowsze propozycje</h2>
        <div className={styles.cards}>{recipeCards}</div>
      </div>
    </Container>
  );
};

export default RecipeCards;
