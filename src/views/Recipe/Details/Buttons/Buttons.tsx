import * as React from "react";
import { Button } from "@material-ui/core";
import { FavoriteBorder, ThumbUpAlt } from "@material-ui/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";
import styles from "./Buttons.module.scss";
import { FC } from "react";

interface IButttonsProps {
  likes: number;
  inFavourite: number;
  viewCounter: number;
}

const Buttons: FC<IButttonsProps> = ({ likes, inFavourite, viewCounter }) => {
  const icons = [
    {
      value: viewCounter,
      component: <VisibilityIcon />,
    },
    {
      value: inFavourite,
      component: <FavoriteBorder />,
    },
    {
      value: likes,
      component: <ThumbUpAlt />,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Button variant="contained" color="secondary">
        Generuj listę zakupów
      </Button>
      {icons.map((icon, index) => (
        <div className={styles.asideWrapper} key={index}>
          {icon.component}
          <span className={styles.aside}>{icon.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Buttons;
