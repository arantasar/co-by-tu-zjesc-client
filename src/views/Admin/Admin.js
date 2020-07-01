import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import styles from "./Admin.module.scss";
import IngredientsAdmin from "../../components/Admin/Ingredients/IngredientsAdmin";
import UnitsAdmin from "../../components/Admin/Units/UnitsAdmin";

const Admin = () => {
  const items = [
    { name: "units", display: "Jednostki" },
    { name: "ingredients", display: "Składniki" },
    { name: "categories", display: "Kategorie" },
    { name: "diets", display: "Diety" },
    { name: "recipes", display: "Przepisy" },
    { name: "users", display: "Użytownicy" },
    { name: "settings", display: "Ustawienia" },
  ];
  const [active, setActive] = useState("units");
  const links = items.map((item) => (
    <Typography
      key={item.name}
      onClick={() => setActive(item.name)}
      className={active === item.name ? styles.Active : styles.InActive}
    >
      {item.display}
    </Typography>
  ));
  const ActiveComponent = () => {
    switch (active) {
      case "units":
        return <UnitsAdmin />;
      case "ingredients":
        return <IngredientsAdmin />;
      case "categories":
        return "";
      default:
        return null;
    }
  };

  return (
    <div className={styles.Wrapper}>
      <Container>
        <div className={styles.Nav}>
          <Breadcrumbs aria-label="breadcrumb" component="div">
            {links}
          </Breadcrumbs>
        </div>
        <ActiveComponent />
      </Container>
    </div>
  );
};

export default Admin;
