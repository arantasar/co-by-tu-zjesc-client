import * as React from "react";
import { Button } from "@material-ui/core";
import { FavoriteBorder, ThumbUpAlt } from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";
import styles from "./Buttons.module.scss";

const Buttons = () => (
  <div className={styles.wrapper}>
    <Button variant="contained" color="secondary">
      Generuj listę zakupów
    </Button>
    <div className={styles.asideWrapper}>
      <VisibilityIcon />
      <span className={styles.aside}>42</span>
    </div>
    <div className={styles.asideWrapper}>
      <FavoriteBorder />
      <span className={styles.aside}>12</span>
    </div>
    <div className={styles.asideWrapper}>
      <ThumbUpAlt />
      <span className={styles.aside}>20</span>
    </div>
  </div>
);

export default Buttons;
