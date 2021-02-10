import * as React from "react";
import styles from "./SearchResults.module.scss";
import { Container } from "@material-ui/core";

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
              <p>{r.description}</p>
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
