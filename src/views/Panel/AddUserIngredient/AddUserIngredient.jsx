import React, { useContext, useEffect, useState } from "react";
import styles from "../Add/Add.module.scss";
import styled from "styled-components";
import axios from "../../../axios";
import { Container, Grid, Paper } from "@material-ui/core";
import UserInfo from "../../../components/organisms/UserInfo/UserInfo";
import UserContext from "../../../context/UserContext";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import placeholder from "./../../../assets/placeholders/ingredient-placeholder.svg";
import { Link } from "react-router-dom";
import UniversalDialog from "../../../components/organisms/UniversalDialog/UniversalDialog";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import OpenFileButton from "../../../components/atoms/OpenFileButton/OpenFileButton";
import Button from "@material-ui/core/Button";

const AddUserIngredient = () => {
  const [showModal, setShowModal] = useState(false);
  const { updateUser } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [units, setUnits] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [selectedUnits, setSelectednits] = useState([]);
  const [file, setFile] = useState(null);

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

    const data = new FormData();
    data.append("photo", file);
    data.append("name", newIngredient);
    data.append("units", JSON.stringify(ans));
    data.append("alternatives", JSON.stringify([]));

    axios({
      method: "post",
      url: "http://localhost:5000/api/ingredients",
      data: data,
    })
      .then(() => axios.get("http://localhost:5000/api/ingredients"))
      .then((res) => {
        setItems(res.data);
        setNewIngredient("");
        setSelectednits([]);
      });
  };

  const handleNameChange = (e) => {
    setNewIngredient(e.target.value);
  };

  const fileUploadChange = (event) => {
    const file = event.files ? event.files[0] : null;
    setFile(file);
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

  const refresh = (user) => {
    updateUser(user);
  };

  return (
    <div className={styles.Add}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <UserInfo />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>Dodaj składnik</h2>
            <Paper elevation={3}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nazwa</TableCell>
                    <TableCell align="right">Jednostki</TableCell>
                    <TableCell align="right">Zdjęcie</TableCell>
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
                      <TableCell align="right">
                        <img
                          style={{
                            height: "100px",
                            width: "100px",
                            objectFit: "cover",
                          }}
                          src={row.photoPath || placeholder}
                          alt={row.name}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              elevation={3}
              className={styles.AddForm}
              style={{ padding: "20px", marginTop: "72px" }}
            >
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
                <OpenFileButton
                  fileName={file && file.name}
                  fileUploadChange={fileUploadChange}
                  fullWidth
                />
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
          </Grid>
        </Grid>
      </Container>
      <UniversalDialog
        open={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={() => {}}
        header={"Usuń z ulubionych"}
        text={"Czy usunąć przepis z ulubionych"}
      />
    </div>
  );
};

export default AddUserIngredient;
