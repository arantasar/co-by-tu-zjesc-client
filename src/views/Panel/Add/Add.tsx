import React, { useState, useEffect } from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import UserInfo from "../../../components/organisms/UserInfo/UserInfo";
import styles from "./Add.module.scss";
import axios from "./../../../axios/";
import IIngredient from "../../../models/IIngredient";
import SelectRecipeIngredient from "../../../components/molecules/SelectRecipeIngredient/SelectRecipeIngredient";
import IExtendedIngredient from "../../../models/IExtendedIngredient";
import Selected from "./Selected/Selected";

const Add = () => {
  const [name, setName] = useState<string>("");

  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IExtendedIngredient[]
  >([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    axios.get<IIngredient[]>("/ingredients").then((res) => {
      setIngredients(res.data);
    });
  }, []);

  const clickHandler = (ingredient: IIngredient) => {
    setSelectedIngredients((prev) => [...prev, { ...ingredient, quantity: 0 }]);
  };
  const clickHandlerReverse = (id: string) => {
    setSelectedIngredients((prev) => prev.filter((item) => item.id !== id));
  };

  const isNotInSelected = (ingredient: IIngredient) =>
    !selectedIngredients.some((selected) => selected.id === ingredient.id);

  return (
    <div className={styles.Add}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <UserInfo />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              className={styles.Name}
              id="standard-basic"
              label="Nazwa"
              color="secondary"
              value={name}
              onChange={handleChange}
            />
            <div className={styles.Ingredients}>
              <p>Wybierz składniki</p>
              <div className={styles.All}>
                {ingredients.filter(isNotInSelected).map((ingredient) => {
                  return (
                    <SelectRecipeIngredient
                      key={ingredient.id}
                      ingredient={ingredient}
                      clickHandler={clickHandler}
                    />
                  );
                })}
              </div>
            </div>
            <Selected
              ingredients={selectedIngredients}
              deleteHandler={clickHandlerReverse}
            />
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
