import React from "react";
import withModal from "../../hoc/WithModal/WithModal";
import axios from "axios";
import styles from "./Panel.module.scss";
import { Container, Grid } from "@material-ui/core";
import avatar from "./../../assets/avatar.png";
import UserInfo from "../../components/organisms/UserInfo/UserInfo";

const Panel = () => {
  return (
    <div className={styles.Panel}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <UserInfo />
          </Grid>
          <Grid item xs={12} sm={9}>
            <div className={styles.Dashboard}>
              <div
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
                style={{ gridColumn: "1 / 3" }}
              >
                Moje przepisy
              </div>
              <div
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
              >
                Dodaj przepis
              </div>
              <div className={styles.DashboardItem}></div>
              <div
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
                style={{ gridColumn: "2 / 4" }}
              >
                Ulubione
              </div>
              <div className={styles.DashboardItem}></div>
              <div
                className={`${styles.DashboardItem} ${styles.DashboardItemActive}`}
              >
                Ustawienia
              </div>
              <div className={styles.DashboardItem}></div>
              <div className={styles.DashboardItem}></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withModal(Panel, () => {}, axios);
