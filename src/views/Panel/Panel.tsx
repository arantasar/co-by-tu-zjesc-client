import React, { useContext, useEffect } from "react";
import withModal from "../../hoc/WithModal/WithModal";
import axios from "axios";
import apiAxios from "./../../axios/";
import styles from "./Panel.module.scss";
import { Container, Grid } from "@material-ui/core";
import UserInfo from "../../components/organisms/UserInfo/UserInfo";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import IUser from "../../models/IUser";

const Panel = () => {
  const ctx = useContext(UserContext);
  useEffect(() => {
    const id = ctx.user && ctx.user.id;
    apiAxios.get<IUser>("/users/" + id).then((res) => {
      ctx.updateUser(res.data);
    });
  }, []);

  return (
    <div className={styles.Panel}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <UserInfo />
          </Grid>
          <Grid item xs={12} sm={9}>
            <div className={styles.Dashboard}>
              <Link
                to="/panel/recipes"
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
                style={{ gridColumn: "1 / 3" }}
              >
                Moje przepisy
              </Link>
              <Link
                to="/panel/add"
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
              >
                Dodaj przepis
              </Link>
              <Link
                to={"/panel/ingredients"}
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
              >
                Dodaj składnik
              </Link>
              <Link
                to={"panel/favourites"}
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
                style={{ gridColumn: "2 / 4" }}
              >
                Ulubione
              </Link>
              <div className={styles.DashboardItem}></div>
              <Link
                to={"/panel/update"}
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
              >
                Edytuj profil
              </Link>
              <Link
                to={"/panel/week"}
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
              >
                Mój tydzień
              </Link>
              <div className={styles.DashboardItem}></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withModal(Panel, () => {}, axios);
