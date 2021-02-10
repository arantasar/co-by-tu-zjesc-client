import React from "react";
import styles from "./SearchSelectors.module.scss";
import SearchItem from "../SearchItem/SearchItem";
import Button from "@material-ui/core/Button";
import Item from "../../../models/IItem";

interface ISearchSelectorsProps {
  selectedIngredients: Item[];
  selectedCategories: Item[];
  selectedDiets: Item[];
  selectedNumber: Item[];
  active: string;
  setActive: (item: string) => void;
  search: () => void;
}

const SearchSelectors: React.FC<ISearchSelectorsProps> = ({
  active,
  setActive,
  selectedIngredients,
  selectedCategories,
  selectedDiets,
  selectedNumber,
  search,
}) => {
  return (
    <div className={styles.Wrapper}>
      <SearchItem
        isActive={active === "ingredients"}
        name="Składniki"
        placeholder="Co masz w lodówce?"
        selectedItems={selectedIngredients}
        activate={() => {
          setActive(active === "ingredients" ? "" : "ingredients");
        }}
      />
      <SearchItem
        isActive={active === "categories"}
        name="Kategorie"
        placeholder="Na co masz ochotę?"
        selectedItems={selectedCategories}
        activate={() => {
          setActive(active === "categories" ? "" : "categories");
        }}
      />
      <SearchItem
        isActive={active === "diets"}
        name="Dieta"
        placeholder="Jest coś, czego nie jesz?"
        selectedItems={selectedDiets}
        activate={() => {
          setActive(active === "diets" ? "" : "diets");
        }}
      />
      <SearchItem
        isActive={active === "sizes"}
        name="Porcja"
        placeholder="Dla ilu osób?"
        selectedItems={selectedNumber}
        activate={() => {
          setActive(active === "sizes" ? "" : "sizes");
        }}
      />
      <div className={styles.buttonWrapper}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={search}
        >
          Szukaj
        </Button>
      </div>
    </div>
  );
};

export default SearchSelectors;
