import * as React from "react";
import styles from "./SearchResults.module.scss";
import { Container } from "@material-ui/core";

import picture from "./../../assets/spaghetti-big.webp";
import { Link } from "react-router-dom";

const searchResults = (props: any) => {
  const shouldDisplay = {
    display: props.showResults ? "block" : "none"
  };

  return (
      <Container style={shouldDisplay}>
        <div className={styles.wrapper}>
          <div>
            <img className={styles.picture} src={picture} alt="pizza" />
          </div>
          <div>
            <h2>
              <Link to="/recipe/1" className={styles.link}>
                Spaghetti Bolognese
              </Link>
            </h2>
            <div className={styles.shortLine}> </div>
            <p className={styles.time}>30 minut przygotowania</p>
            <p className={styles.link}>Masz wszystkie składniki!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              adipisci tempora aut sit dignissimos inventore minima atque commodi
              nemo blanditiis repudiandae officia veniam, sunt, ipsum, obcaecati
              laudantium vero fugiat. Eum!
            </p>
          </div>
        </div>
      </Container>
  );
};

export default searchResults;
