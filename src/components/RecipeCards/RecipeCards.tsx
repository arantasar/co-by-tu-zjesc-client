import * as React from "react";
import RecipeCard, { RecipeCardProps } from "./RecipeCard/RecipeCard";
import { Container } from "@material-ui/core";
import styles from "./RecipeCards.module.scss";

const recipeCards: React.FC = props => {
  const recipeCardsArr: RecipeCardProps[] = [
    { author: "arantasar", date: new Date(), dsc: "Dsc" },
    { author: "arantasar", date: new Date(), dsc: "Dsc" },
    { author: "arantasar", date: new Date(), dsc: "Dsc" },
    { author: "arantasar", date: new Date(), dsc: "Dsc" }
  ];
  const recipeCards = recipeCardsArr.map((card, index) => (
    <RecipeCard key={index} {...card} />
  ));

  return (
    <Container>
      <h2 className={styles.sectionHeader}>Recent meals</h2>
      <div className={styles.cards}>{recipeCards}</div>
    </Container>
  );
};

export default recipeCards;
