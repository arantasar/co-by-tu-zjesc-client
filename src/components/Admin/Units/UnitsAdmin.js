import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UnitsAdmin.module.scss";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UnitsTable from "./UnitsTable/UnitsTable";

const UnitsAdmin = () => {
  const [items, setItems] = useState([]);
  const [unitName, setUnitName] = useState("");

  const deleteUnit = (id) =>
    axios
      .delete("http://localhost:5000/api/units/" + id)
      .then(() => getUnits())
      .catch((err) => {
        alert(err.response.data.message);
      });
  const addUnit = () => {
    axios
      .post("http://localhost:5000/api/units", {
        name: unitName,
      })
      .then(() => getUnits())
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setUnitName("");
      });
  };
  const getUnits = () =>
    axios.get("http://localhost:5000/api/units").then((res) => {
      setItems(res.data);
    });

  useEffect(() => {
    getUnits();
  }, []);

  return (
    <>
      <div className={styles.Wrapper}>
        <UnitsTable items={items} deleteUnit={deleteUnit} />
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
      </div>
    </>
  );
};

export default UnitsAdmin;
