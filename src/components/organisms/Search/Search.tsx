import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import { Container } from "@material-ui/core";
import SearchSelectors from "../../molecules/SearchSelectors/SearchSelectors";
import SearchBoard from "../../molecules/SearchBoard/SearchBoard";
import IIngredient from "../../../models/IIngredient";
import ICategory from "../../../models/ICategory";
import IDiet from "../../../models/IDiet";
import Item from "../../../models/IItem";

interface ISearchProps {
  ingredients: IIngredient[];
  categories: ICategory[];
  diets: IDiet[];
  search: (
    ingredients: Item[],
    categories: Item[],
    diets: Item[],
    size: Item[]
  ) => void;
}

const Search: React.FC<ISearchProps> = ({
  ingredients,
  categories,
  diets,
  search,
}) => {
  const [selectedIngredients, setSelectedIngredients] = useState<Item[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Item[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<Item[]>([]);
  const [selectedSize, setSelectedSize] = useState<Item[]>([
    { id: "1", name: "1" },
  ]);

  const [items, setItems] = useState<Item[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [active, setActive] = useState<string>("");
  const [sizes] = useState<{ id: string; name: string }[]>([
    {
      id: "1",
      name: "Jedna osoba",
    },
    {
      id: "2",
      name: "Dwie osoby",
    },
    {
      id: "3",
      name: "Trzy osoby",
    },
    {
      id: "4",
      name: "Cztery osoby",
    },
  ]);

  useEffect(() => {
    switch (active) {
      case "ingredients":
        setOffset(1);
        setItems(ingredients);
        break;
      case "categories":
        setOffset(2);
        setItems(categories);
        break;
      case "diets":
        setOffset(3);
        setItems(diets);
        break;
      case "sizes":
        setOffset(4);
        setItems(sizes);
        break;
      default:
        setOffset(0);
        break;
    }
  }, [active, categories, diets, ingredients, sizes]);

  const handleActive = (value: string) => {
    setActive(value);
  };

  const changeHandler = ({ name, id }: Item): void => {
    switch (active) {
      case "ingredients":
        if (selectedIngredients.map((item) => item.id).includes(id)) {
          setSelectedIngredients((prev) =>
            prev.filter((ingredient) => ingredient.id !== id)
          );
        } else {
          setSelectedIngredients((prev) => [...prev, { name, id }]);
        }
        break;
      case "categories":
        if (selectedCategories.map((item) => item.id).includes(id)) {
          setSelectedCategories((prev) =>
            prev.filter((item) => item.id !== id)
          );
        } else {
          setSelectedCategories((prev) => [...prev, { name, id }]);
        }
        break;
      case "diets":
        if (selectedDiets.map((item) => item.id).includes(id)) {
          setSelectedDiets((prev) => prev.filter((item) => item.id !== id));
        } else {
          setSelectedDiets((prev) => [...prev, { id, name }]);
        }
        break;
      case "sizes":
        setSelectedSize([{ name, id }]);
        break;
    }
  };

  const selectedItems = () => {
    switch (active) {
      case "ingredients":
        return selectedIngredients;
      case "categories":
        return selectedCategories;
      case "diets":
        return selectedDiets;
      case "sizes":
        return selectedSize;
      default:
        return [];
    }
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <h2 className={styles.header}>Przepisy</h2>
        <hr />
        <SearchSelectors
          selectedIngredients={selectedIngredients}
          selectedCategories={selectedCategories}
          selectedDiets={selectedDiets}
          selectedNumber={selectedSize}
          active={active}
          setActive={handleActive}
          search={() => {
            search(
              selectedIngredients,
              selectedCategories,
              selectedDiets,
              selectedSize
            );
          }}
        />
        <hr />
        {offset !== 0 && (
          <SearchBoard
            offset={offset}
            items={items}
            selectedItems={selectedItems()}
            changeHandler={changeHandler}
          />
        )}
      </Container>
    </section>
  );
};

export default Search;
