import React, { useState } from "react";
import styles from "./Search.module.scss";
import { Container } from "@material-ui/core";
import ingredients from "./../../data/Ingredients";
import categories from "./../../data/Categories";
import filters from "./../../data/Filters";
import sizes from "../../data/Sizes";
import SearchBoard from "./SearchBoard/SearchBoard";
import SearchSelector from "./SearchSelector/SearchSelector";

const Search = (props) => {
  const dbItems = [
    {
      id: 1,
      name: "Składniki",
      items: ingredients,
      selected: [],
      placeholderText: "Co masz w lodówce?",
    },
    {
      id: 2,
      name: "Kategorie",
      items: categories,
      selected: [],
      placeholderText: "Na co masz ochotę?",
    },
    {
      id: 3,
      name: "Dieta",
      items: filters,
      selected: [],
      placeholderText: "Jest coś, czego nie jesz?",
    },
    {
      id: 4,
      name: "Porcja",
      items: sizes,
      selected: [],
      placeholderText: "Będą goście?",
    },
  ];

  const [active, setActive] = useState("");
  const [selected, setSelected] = useState(null);
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState(dbItems);

  const selectHandler = (id) => {
    if (active === id) {
      setActive("");
      setSelected(null);
      setOffset(0);
    } else {
      setActive(id);
      setSelected(items.find((item) => item.id === id));
      setOffset(items.findIndex((item) => item.id === id));
    }
  };

  const changeHandler = (ingredient) => {
    let selectedIngredients = [...selected.selected];

    if (!selectedIngredients.map((item) => item.id).includes(ingredient.id)) {
      selectedIngredients.push(ingredient);
    } else {
      selectedIngredients = selectedIngredients.filter(
        (item) => item.id !== ingredient.id
      );
    }

    const newSelected = JSON.parse(JSON.stringify(selected));
    newSelected.selected = selectedIngredients;

    const newItems = JSON.parse(JSON.stringify(items));
    const idx = newItems.findIndex((item) => item.id === selected.id);
    newItems[idx].selected = selectedIngredients;

    setSelected(newSelected);
    setItems(newItems);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <h2 className={styles.header}>Przepisy</h2>
        <hr />
        <SearchSelector
          items={items}
          select={selectHandler}
          active={active}
          handleSearch={props.handleSearch}
        />
        <hr />
        <SearchBoard
          visible={active}
          item={selected}
          changeHandler={changeHandler}
          offset={offset}
        />
      </Container>
    </section>
  );
};

export default Search;
