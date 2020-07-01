import React from "react";
import styles from "../UnitsAdmin.module.scss";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface INewUnitProps {
  unitName: string;
  setUnitName: (name: string) => void;
  addUnit: (event: any) => void;
}

const NewUnit: React.FC<INewUnitProps> = ({
  unitName,
  setUnitName,
  addUnit,
}) => (
  <Paper elevation={3} className={styles.AddForm}>
    <Typography>Dodaj jednostkę</Typography>
    <form noValidate autoComplete="off">
      <TextField
        value={unitName}
        onChange={(e) => setUnitName(e.target.value)}
        className={styles.FormItem}
        label="Nazwa"
        color="secondary"
        fullWidth
      />
      <div className={styles.Button}>
        <Button
          onClick={addUnit}
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

export default NewUnit;
