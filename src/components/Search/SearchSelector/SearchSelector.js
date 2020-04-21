import React from "react";
import styles from "./SearchSelector.module.scss";
import SearchItem from "../SearchItem/SearchItem";
import Button from "@material-ui/core/Button";

const SearchSelector = ({ items, active, select, handleSearch }) => {
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
      <div className={styles.buttonWrapper}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSearch}
        >
          Szukaj
        </Button>
      </div>
    </div>
  );
};

export default SearchSelector;
