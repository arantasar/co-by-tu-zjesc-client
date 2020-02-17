import * as React from "react";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import VisibilityIcon from "@material-ui/icons/Visibility";

import styles from "./Icons.module.scss";

export interface IconsProps {
  views: number;
  stars: number;
  likes: number;
}

const recipeCardIcons = (props: IconsProps) => {
  return (
    <div>
      <div className={styles.opposite}>
        <div className={styles.oppositeItem}>
          <VisibilityIcon />
          <span className={styles.oppositeItemValue}>{props.views}</span>
        </div>
        <div className={styles.oppositeItem}>
          <ThumbUpAltIcon />
          <span className={styles.oppositeItemValue}>{props.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default recipeCardIcons;
