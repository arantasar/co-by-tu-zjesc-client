import * as React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Container } from "@material-ui/core";
import styles from "./RecipeCards.module.scss";
import recipeCardsArr from "./../../data/Recipes";
import { Link } from "react-router-dom";

const recipeCards: React.FC = () => {
  const recipeCards = recipeCardsArr.map((card, index) => (
    <Link key={index} to={"/recipe/" + card.id}>
      <RecipeCard {...card} />
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

export default recipeCards;
