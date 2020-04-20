import React from "react";
import styles from "./SearchSelector.module.scss";
import SearchItem from "../SearchItem/SearchItem";
import Button from "@material-ui/core/Button";

const SearchSelector = ({ items, active, select }) => {
  return (
    <div className={styles.Wrapper}>
      {items.map((item) => (
        <SearchItem
          key={item.id}
          item={item}
          isActive={active === item.id}
          activate={select}
        />
      ))}
      <Button variant="contained" color="secondary">
        Szukaj
      </Button>
    </div>
  );
};

export default SearchSelector;
