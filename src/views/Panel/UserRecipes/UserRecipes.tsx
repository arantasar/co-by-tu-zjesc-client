import React, { useContext, useEffect, useState } from "react";
import styles from "../Add/Add.module.scss";
import styled from "styled-components";
import axios from "../../../axios";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import UserInfo from "../../../components/organisms/UserInfo/UserInfo";
import UserContext from "../../../context/UserContext";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import placeholder from "./../../../assets/placeholders/meal-placeholder.jpg";
import { Link } from "react-router-dom";

const UserRecipes = () => {
  const { user } = useContext(UserContext);

  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const id = (user && user.id) || "lub id z urla";

    axios.get(`/users/${id}/recipes`).then((res) => {
      setRecipes(res.data);
    });
  }, []);

  return (
    <div className={styles.Add}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <UserInfo />
          </Grid>
          <Grid item xs={12} sm={9}>
            <h2>Moje przepisy</h2>
            <Paper elevation={3}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nazwa</TableCell>
                    <TableCell>Dodano</TableCell>
                    <TableCell align="center">Zdjęcie</TableCell>
                    <TableCell align="center">Wyświetlenia</TableCell>
                    <TableCell align="center">Polubienia</TableCell>
                    <TableCell align="center">W ulubionych</TableCell>
                    <TableCell align="center">Usuń / Edytuj</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recipes.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell component="th" scope="row">
                        <StyledLink to={"/"}>{row.name}</StyledLink>
                      </TableCell>
                      <TableCell>{row.dateAdded}</TableCell>
                      <TableCell align="center">
                        <img
                          style={{ height: "75px" }}
                          src={row.photoPath || placeholder}
                          alt={row.name}
                        />
                      </TableCell>
                      <TableCell align="center">{row.viewCounter}</TableCell>
                      <TableCell align="center">{row.likes}</TableCell>
                      <TableCell align="center">{row.inFavourite}</TableCell>
                      <TableCell align="center">
                        <DeleteIcon
                          color={"secondary"}
                          cursor="pointer"
                          onClick={() => {
                            console.log(row.id);
                          }}
                        />{" "}
                        <EditIcon
                          color={"secondary"}
                          cursor="pointer"
                          onClick={() => {
                            console.log(row.id);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UserRecipes;

const StyledLink = styled(Link)`
  color: #ee24c4;
`;
