import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styles from "./IngredientsAdmin.module.scss";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import DeleteIcon from "@material-ui/icons/Delete";

const IngredientsAdmin = () => {
  const [items, setItems] = useState([]);
  const [units, setUnits] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [selectedUnits, setSelectednits] = useState([]);
  const [fileName, setFileName] = useState("");

  const deleteIngredient = (id) =>
    axios
      .delete("http://localhost:5000/api/ingredients/" + id)
      .then(() => axios.get("http://localhost:5000/api/ingredients"))
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

  const handleChange = (event) => {
    const id = event.target.name;
    if (selectedUnits.includes(id)) {
      setSelectednits((prev) => prev.filter((unit) => unit !== id));
    } else {
      setSelectednits((prev) => [...prev, id]);
    }
  };

  const submitForm = () => {
    const ans = [];
    selectedUnits.forEach((id) => {
      const item = units.find((unit) => unit.id === id);
      ans.push(item);
    });
    axios
      .post("http://localhost:5000/api/ingredients", {
        name: newIngredient,
        units: ans,
      })
      .then(() => axios.get("http://localhost:5000/api/ingredients"))
      .then((res) => {
        setItems(res.data);
        setNewIngredient("");
        setSelectednits([]);
      });
  };

  const fileUpload = () => {
    document.getElementById("file-upload").click();
  };

  const handleNameChange = (e) => {
    setNewIngredient(e.target.value);
  };

  const fileUploadChange = (event) => {
    if (event.target.files[0]) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:5000/api/ingredients"),
      axios.get("http://localhost:5000/api/units"),
    ]).then((values) => {
      const [ingredients, units] = values;
      setUnits(units.data);
      setItems(ingredients.data);
    });
  }, []);

  return (
    <>
      <div className={styles.Wrapper}>
        <Paper elevation={3}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nazwa</TableCell>
                <TableCell align="right">Jednostki</TableCell>
                <TableCell align="right">Zdjęcie</TableCell>
                <TableCell align="right">Usuń</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.units.map((i) => i.name).join(", ")}
                  </TableCell>
                  <TableCell align="right">{row.photo}</TableCell>
                  <TableCell align="right">
                    <DeleteIcon
                      cursor="pointer"
                      onClick={() => {
                        deleteIngredient(row.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Paper elevation={3} className={styles.AddForm}>
          <Typography>Dodaj składnik</Typography>
          <form noValidate autoComplete="off">
            <TextField
              className={styles.FormItem}
              value={newIngredient}
              onChange={handleNameChange}
              label="Nazwa"
              color="secondary"
              fullWidth
            />
            <FormControl component="fieldset">
              <FormGroup>
                {units.map((unit) => (
                  <FormControlLabel
                    key={unit.id}
                    control={
                      <Checkbox
                        checked={selectedUnits.includes(unit.id)}
                        onChange={handleChange}
                        name={unit.id}
                      />
                    }
                    label={unit.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <div className={styles.Button}>
              <input
                accept="image/*"
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => fileUploadChange(e)}
              />
              <Button fullWidth variant="contained" onClick={fileUpload}>
                {fileName || "Wybierz zdjęcie"}
              </Button>
            </div>
            <div className={styles.Button}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={submitForm}
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

export default IngredientsAdmin;
