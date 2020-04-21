import React from "react";
import { Container } from "@material-ui/core";
import styles from "./Footer.module.scss";

const Wrapper = () => (
  <footer className={styles.wrapper}>
    <Container>
      <div className={styles.grid}>
        <div className={styles.logo}>CoByTuZjeść?</div>
        <div> </div>
        <div className={styles.social}>
          <h4 className={styles.header}>Znajdź nas</h4>
          <hr />
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div className={styles.legal}>
          <div className={styles.social}>
            <h4 className={styles.header}>Informacje</h4>
            <hr />
            <p>Kontakt</p>
            <p>Regulamin</p>
            <p>Reklama</p>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        &copy; 2020 CoByTuZjeść. Wszelkie prawa niezastrzeżone.
      </div>
    </Container>
  </footer>
);

export default Wrapper;
