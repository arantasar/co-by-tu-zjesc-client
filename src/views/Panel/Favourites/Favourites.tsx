import React, { useContext, useState } from "react";
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
import DeleteIcon from "@material-ui/icons/Delete";
import placeholder from "./../../../assets/placeholders/meal-placeholder.jpg";
import { Link } from "react-router-dom";
import IUser from "../../../models/IUser";
import UniversalDialog from "../../../components/organisms/UniversalDialog/UniversalDialog";

const Favourites = () => {
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const { user, updateUser, token } = useContext(UserContext);

  const refresh = (user: IUser) => {
    updateUser(user);
  };

  const removeHandler = () => {
    const url = "recipes/favourites/";

    axios
      .post(
        url,
        { id: idToDelete },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        refresh(res.data.user);
      })
      .finally(() => {
        setShowModal(false);
        setIdToDelete("");
      });
  };

  return (
    <div className={styles.Add}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <UserInfo />
          </Grid>
          <Grid item xs={12} sm={9}>
            <h2>Ulubione przepisy</h2>
            <Paper elevation={3}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nazwa</TableCell>
                    <TableCell>Autor</TableCell>
                    <TableCell>Dodano</TableCell>
                    <TableCell align="center">Zdjęcie</TableCell>
                    <TableCell align="center">Wyświetlenia</TableCell>
                    <TableCell align="center">Polubienia</TableCell>
                    <TableCell align="center">W ulubionych</TableCell>
                    <TableCell align="center">Usuń</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user &&
                    user.favourites.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell component="th" scope="row">
                          <StyledLink to={`/recipe/${row.id}`}>
                            {row.name}
                          </StyledLink>
                        </TableCell>
                        <TableCell>
                          <StyledLink to={`/users/${row.userId}`}>
                            {row.userName}
                          </StyledLink>
                        </TableCell>
                        <TableCell>{row.dateAdded}</TableCell>
                        <TableCell align="center">
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
                        <TableCell align="center">{row.viewCounter}</TableCell>
                        <TableCell align="center">{row.likes}</TableCell>
                        <TableCell align="center">{row.inFavourite}</TableCell>
                        <TableCell align="center">
                          <DeleteIcon
                            color={"secondary"}
                            cursor="pointer"
                            onClick={() => {
                              setIdToDelete(row.id);
                              setShowModal(true);
                            }}
                          />{" "}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <UniversalDialog
        open={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={removeHandler}
        header={"Usuń z ulubionych"}
        text={"Czy usunąć przepis z ulubionych"}
      />
    </div>
  );
};

export default Favourites;

const StyledLink = styled(Link)`
  color: #ee24c4;
`;
