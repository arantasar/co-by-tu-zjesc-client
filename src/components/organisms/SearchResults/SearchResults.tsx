import * as React from "react";
import styles from "./SearchResults.module.scss";
import { Container } from "@material-ui/core";

import picture from "../../../assets/spaghetti-big.webp";
import { Link } from "react-router-dom";
import IRecipe from "../../../models/IRecipe";

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
        <div>Nie znaleziono przepisów, spróbuj jeszcze raz</div>
      )}
    </Container>
  );
};

export default searchResults;
