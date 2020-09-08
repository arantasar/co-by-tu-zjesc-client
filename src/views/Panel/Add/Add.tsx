import React, { useState, useEffect } from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import UserInfo from "../../../components/organisms/UserInfo/UserInfo";
import styles from "./Add.module.scss";
import axios from "./../../../axios/";
import IIngredient from "../../../models/IIngredient";
import SelectRecipeIngredient from "../../../components/molecules/SelectRecipeIngredient/SelectRecipeIngredient";

const Add = () => {
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    axios.get<IIngredient[]>("/ingredients").then((res) => {
      setIngredients(res.data);
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
            <TextField
              id="standard-basic"
              label="Nazwa"
              color="secondary"
              value={name}
              onChange={handleChange}
            />
            <div className={styles.Ingredients}>
              <p>Składniki</p>
              <div className={styles.Select}>
                <div className={styles.All}>
                  {ingredients.map((ingredient) => {
                    return <SelectRecipeIngredient ingredient={ingredient} />;
                  })}
                </div>
                <div className={styles.Selected}></div>
              </div>
            </div>
            <div>Opis wykonania</div>
            <div>Zdjęcie</div>
            <div>Kategorie i oznaczenia</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Add;
