import * as React from "react";
import styles from "./Details.module.scss";
import Buttons from "./Buttons/Buttons";
import IRecipe from "../../../models/IRecipe";
import { FC } from "react";
import styled from "styled-components";

interface IDetailsProps {
  recipe: IRecipe;
}

const Details: FC<IDetailsProps> = ({ recipe }) => {
  const {
    categories,
    dateAdded,
    description,
    diets,
    inFavourite,
    likes,
    name,
    recipeLines,
    user,
    userId,
    viewCounter,
  } = recipe;

  return (
    <div className={styles.details}>
      <div className="date">{dateAdded}</div>
      <h1>{name}</h1>
      <div className={styles.buttons}>
        <Buttons
          inFavourite={inFavourite}
          likes={likes}
          viewCounter={viewCounter}
        />
      </div>
      <div className={styles.grid}>
        <div>
          <h3>Czas przygotowania</h3>
          <p>30 minut</p>
        </div>
        <div>
          <h3>Ilość porcji</h3>
          <p>4</p>
        </div>
      </div>
      <h2>Składniki</h2>
      <ul className={styles.ingredients}>
        {recipeLines.map((ingredient) => (
          <StyledIngredient key={ingredient.id} className={styles.ingredient}>
            <IngredientName>{ingredient.ingredient.name}</IngredientName>
            <IngredientAmount>
              {ingredient.amount} x {ingredient.unit.name}
            </IngredientAmount>
          </StyledIngredient>
        ))}
      </ul>
      <div className={styles.dsc}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;

const StyledIngredient = styled.li`
  display: flex;
  flex-direction: column;
`;

const IngredientName = styled.div`
  font-weight: bold;
`;

const IngredientAmount = styled.div`
  font-size: 12px;
`;
