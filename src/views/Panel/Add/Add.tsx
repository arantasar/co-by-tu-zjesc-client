import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import UserInfo from "../../../components/organisms/UserInfo/UserInfo";
import styles from "./Add.module.scss";
import axios from "./../../../axios/";
import IIngredient from "../../../models/IIngredient";
import SelectRecipeIngredient from "../../../components/molecules/SelectRecipeIngredient/SelectRecipeIngredient";
import IExtendedIngredient from "../../../models/IExtendedIngredient";
import Selected from "./Selected/Selected";
import Description from "./Description/Description";
import UserContext from "../../../context/UserContext";
import Categories from "./Categories/Categories";
import ICategory from "../../../models/ICategory";
import IDiet from "../../../models/IDiet";
import useAppContext from "../../../hooks/useAppContext";
import Diets from "./Diets/Diets";
import UniversalModal from "../../../components/organisms/UniversalModal";
import OpenFileButton from "../../../components/atoms/OpenFileButton/OpenFileButton";

const Add = () => {
  const ctx = useContext(UserContext);
  const [file, setFile] = useState<File>();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IExtendedIngredient[]
  >([]);
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<IDiet[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");

  const { categories, diets } = useAppContext();

  const fileUploadChange = (event: HTMLInputElement | null) => {
    const file = event && event.files ? event.files[0] : undefined;
    setFile(file);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const selectCategoryHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const id = event.target.id;
    if (selectedCategories.map((c) => c.id).includes(id)) {
      setSelectedCategories((prev) =>
        prev.filter((category) => category.id !== id)
      );
    } else {
      setSelectedCategories((prev) => {
        const newCategory = categories.find((category) => category.id === id);
        return !!newCategory ? [...prev, newCategory] : [...prev];
      });
    }
  };

  const selectDietsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    if (selectedDiets.map((c) => c.id).includes(id)) {
      setSelectedDiets((prev) => prev.filter((category) => category.id !== id));
    } else {
      setSelectedDiets((prev) => {
        const newDiet = diets.find((diet) => diet.id === id);
        return !!newDiet ? [...prev, newDiet] : [...prev];
      });
    }
  };

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

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const quantityHandler = (id: string, quantity: number) => {
    const newSelectedIngredients = selectedIngredients.map((ingredient) =>
      ingredient.id === id
        ? {
            ...ingredient,
            quantity,
          }
        : ingredient
    );
    setSelectedIngredients(newSelectedIngredients);
  };

  const unitHandler = (id: string, unitId: string) => {
    const ingredient = selectedIngredients.find((i) => i.id === id);
    if (ingredient) {
      const unit = ingredient.units.find((u) => u.id === unitId);
      const newSelectedIngredients = selectedIngredients.map((ingredient) =>
        ingredient.id === id
          ? {
              ...ingredient,
              unit,
            }
          : ingredient
      );
      setSelectedIngredients(newSelectedIngredients);
    }
  };

  const addRecipe = () => {
    const recipeLines = selectedIngredients.map(
      ({ unit, quantity, ...rest }) => ({
        unit,
        amount: quantity,
        ingredient: rest,
      })
    );

    const data = new FormData();

    if (file) {
      data.append("photo", file as Blob);
    }
    data.append("name", name);
    data.append("description", description);
    data.append("recipeLines", JSON.stringify(recipeLines));
    data.append("categories", JSON.stringify(selectedCategories));
    data.append("diets", JSON.stringify(selectedDiets));

    axios
      .post("/recipes", data, {
        headers: {
          Authorization: `Bearer ${ctx.token}`,
        },
      })
      .then(() => {
        setHeader("Przepis dodany");
        setText("Przepis został dodany!");
        setModalOpen(true);
      })
      .catch((err) => {
        setHeader("Błąd");
        setText(err.response.data.message);
        setModalOpen(true);
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
            <h2>Dodaj nowy przepis</h2>
            <TextField
              className={styles.Name}
              id="standard-basic"
              label="Nazwa"
              color="secondary"
              value={name}
              onChange={handleChange}
            />
            <div className={styles.Ingredients}>
              <h3>Wybierz składniki</h3>
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
              quantityHandler={quantityHandler}
              unitHandler={unitHandler}
            />
            <Description
              description={description}
              setDescription={handleDescription}
            />
            <OpenFileButton
              fileName={(file && file.name) || ""}
              fileUploadChange={fileUploadChange}
            />
            <div>
              <Categories
                categories={categories}
                selectedCategories={selectedCategories}
                selectCategoryHandler={selectCategoryHandler}
              />
              <Diets
                diets={diets}
                selectedDiets={selectedDiets}
                selectDietHandler={selectDietsHandler}
              />
            </div>
            <Button
              onClick={addRecipe}
              variant="contained"
              color="secondary"
              style={{ margin: "20px 0" }}
            >
              Dodaj przepis
            </Button>
            <UniversalModal
              open={modalOpen}
              handleClose={handleClose}
              header={header}
              buttonText={"OK"}
              text={text}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Add;
