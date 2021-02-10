import * as React from "react";
import styles from "./SearchResults.module.scss";
import { Container } from "@material-ui/core";
import {
  ThumbUpAlt,
  FavoriteOutlined,
} from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";
import picture from "../../../assets/spaghetti-big.webp";
import { Link } from "react-router-dom";
import IRecipe from "../../../models/IRecipe";

import styled from "styled-components";

const searchResults = (props: any) => {
  const shouldDisplay = {
    display: props.showResults ? "block" : "none",
  };

  return (
    <Container style={shouldDisplay}>
      {props.recipes.length ? (
        props.recipes.map((r: IRecipe) => (
          <div className={styles.wrapper} key={r.id}>
            <div>
              <img
                className={styles.picture}
                src={r.photoPath || picture}
                alt={r.name}
              />
            </div>
            <div>
              <h2>
                <Link to={`/recipe/${r.id}`} className={styles.link}>
                  {r.name}
                </Link>
              </h2>
              <div className={styles.shortLine}> </div>
              <p className={styles.time}>{r.prepareTime} minut przygotowania</p>
              <Ingredients>
                {r.recipeLines.map((line) => (
                  <Ingredient>
                    <div>{line.ingredient.name}</div>
                    <Small>
                      {line.amount} {line.unit.name}
                    </Small>
                  </Ingredient>
                ))}
              </Ingredients>
              <Icons>
                <Icon>
                  <FavoriteOutlined color={"secondary"} />
                  <div>{r.inFavourite}</div>
                </Icon>
                <Icon>
                  <ThumbUpAlt color={"action"} />
                  <div>{r.likes}</div>
                </Icon>
                <Icon>
                  <VisibilityIcon />
                  <div>{r.viewCounter}</div>
                </Icon>
              </Icons>
            </div>
          </div>
        ))
      ) : (
        <NoResult>Nie znaleziono przepisów, spróbuj jeszcze raz.</NoResult>
      )}
    </Container>
  );
};

export default searchResults;

const NoResult = styled.div`
  border: 2px solid red;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  color: red;
`;

const Ingredients = styled.div`
  display: flex;
`;

const Ingredient = styled.div`
  background-color: white;
  border: 1px dashed black;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 5px;
  text-align: center;
`;

const Small = styled.div`
  font-weight: bold;
  font-size: 12px;
`;

const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
  margin: 10px;
`;
