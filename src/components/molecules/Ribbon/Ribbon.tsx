import * as React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Ribbon.module.scss";
import HeroText from "../../atoms/HeroText/HeroText";
import { Link } from "react-router-dom";

const Ribbon: React.FC = () => {
  return (
    <div className={styles.Ribbon}>
      <HeroText text="Nie masz pomysłu na obiad?" />
      <div className={styles.Wrapper}>
        <Button
          className={styles.Button}
          component={Link}
          to="/login"
          variant="contained"
          color="secondary"
        >
          Znajdź go!
        </Button>
      </div>
    </div>
  );
};

export default Ribbon;
