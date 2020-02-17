import * as React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./PaperBox.module.scss";
import { Link } from "react-router-dom";

const PaperBox: React.FC = () => {
  return (
    <Box className={styles.PaperBox}>
      <Typography
        variant="h3"
        component="h3"
        align="center"
        className={styles.header}
      >
        Nie masz pomysłu na obiad?
      </Typography>
      <Box mt={5} textAlign="center">
        <Link to="/login">
          <Button variant="contained" color="secondary">
            Znajdź go!
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PaperBox;
