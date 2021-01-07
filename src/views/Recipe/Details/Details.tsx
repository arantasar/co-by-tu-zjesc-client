import * as React from "react";
import styles from "./Details.module.scss";
import Buttons from "./Buttons/Buttons";
import IRecipe from "../../../models/IRecipe";
import { FC } from "react";
import styled from "styled-components";
import IUser from "../../../models/IUser";
import RecipeAuthor from "../../../components/molecules/RecipeAuthor/RecipeAuthor";

interface IDetailsProps {
  recipe: IRecipe;
  refresh: (recipe: IRecipe, user?: IUser) => void;
}

const Details: FC<IDetailsProps> = ({ recipe, refresh }) => {
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
    prepareTime,
    size,
  } = recipe;

  return (
    <div className={styles.details}>
      <div className="date">{dateAdded}</div>
      <RecipeAuthor id={userId} name={user.name} photoPath={user.photoPath} />
      <h1>{name}</h1>
      <div className={styles.buttons}>
        <Buttons
          inFavourite={inFavourite}
          likes={likes}
          viewCounter={viewCounter}
          refresh={refresh}
        />
      </div>
      <div className={styles.grid}>
        <div>
          <h3>Czas przygotowania</h3>
          <p>{prepareTime} minut</p>
        </div>
        <div>
          <h3>Ilość porcji</h3>
          <p>{size}</p>
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
