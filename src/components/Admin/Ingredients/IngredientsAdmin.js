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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const IngredientsAdmin = () => {
  const [items, setItems] = useState([]);
  const [enums, setEnums] = useState([]);
  const [unit, setUnit] = useState("BRAK");
  const [fileName, setFileName] = useState("");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  const fileUpload = () => {
    document.getElementById("file-upload").click();
  };

  const fileUploadChange = (event) => {
    setFileName(event.target.files[0].name);
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:5000/api/ingredients"),
      axios.get("http://localhost:5000/api/ingredients/enums"),
    ]).then((res) => {
      const [ingredients, enums] = res;
      setItems(ingredients.data);
      setEnums(enums.data);
    });
  }, []);

  const menuItems = enums.map((item) => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

  return (
    <>
      <div className={styles.Wrapper}>
        <Paper elevation={3}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nazwa</TableCell>
                <TableCell align="right">Jednostka</TableCell>
                <TableCell align="right">Zdjęcie</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{row.photo}</TableCell>
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
              label="Nazwa"
              color="secondary"
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Jednostka</InputLabel>
              <Select value={unit} onChange={handleChange} label="Jednostka">
                {menuItems}
              </Select>
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
              <Button fullWidth variant="contained" color="secondary">
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
