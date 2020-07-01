import React from "react";
import styles from "../CategoriesAdmin.module.scss";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface INewCategoryProps {
  category: string;
  setCategory: (name: string) => void;
  addCategory: (event: any) => void;
}

const NewCategory: React.FC<INewCategoryProps> = ({
  category,
  setCategory,
  addCategory,
}) => (
  <Paper elevation={3} className={styles.AddForm}>
    <Typography>Dodaj kategorię</Typography>
    <form noValidate autoComplete="off">
      <TextField
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.FormItem}
        label="Nazwa"
        color="secondary"
        fullWidth
      />
      <div className={styles.Button}>
        <Button
          onClick={addCategory}
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

export default NewCategory;
