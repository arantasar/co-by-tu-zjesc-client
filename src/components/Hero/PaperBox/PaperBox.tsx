import * as React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import "./PaperBox.scss";

const PaperBox: React.FC = () => {
  return (
    <Box className="PaperBox">
      <Typography variant="h4" component="h3" align="center">
        Nie masz pomysłu na obiad?
      </Typography>
      <Box mt={5} textAlign="center">
        <Button variant="contained" color="secondary">
          Znajdź go!
        </Button>
      </Box>
    </Box>
  );
};

export default PaperBox;
