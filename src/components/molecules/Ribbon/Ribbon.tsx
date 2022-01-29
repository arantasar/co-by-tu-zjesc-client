import * as React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Ribbon.module.scss";
import HeroText from "../../atoms/HeroText/HeroText";

const Ribbon: React.FC = () => {
  const handleClick = () => {
    window.scrollBy({
      top: 1000,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.Ribbon}>
      <HeroText text="Nie masz pomysłu na obiad?" />
      <div className={styles.Wrapper}>
        <Button
          className={styles.Button}
          onClick={handleClick}
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
