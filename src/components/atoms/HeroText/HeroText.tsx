import React from "react";
import styles from "../../molecules/Ribbon/Ribbon.module.scss";
import Typography from "@material-ui/core/Typography";

interface IHeroTextProps {
  text: string;
}

const HeroText: React.FC<IHeroTextProps> = ({ text }) => (
  <Typography
    variant="h3"
    component="h3"
    align="center"
    className={styles.header}
  >
    {text}
  </Typography>
);

export default HeroText;
