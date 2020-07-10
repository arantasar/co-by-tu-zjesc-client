import React from "react";
import styles from "../DietsAdmin.module.scss";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface INewDietProps {
  diet: string;
  setDiet: (name: string) => void;
  addDiet: (event: any) => void;
}

const NewDiet: React.FC<INewDietProps> = ({ diet, setDiet, addDiet }) => (
  <Paper elevation={3} className={styles.AddForm}>
    <Typography>Dodaj dietę</Typography>
    <form noValidate autoComplete="off">
      <TextField
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className={styles.FormItem}
        label="Nazwa"
        color="secondary"
        fullWidth
      />
      <div className={styles.Button}>
        <Button
          onClick={addDiet}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Dodaj
        </Button>
      </div>
    </form>
  </Paper>
);

export default NewDiet;
