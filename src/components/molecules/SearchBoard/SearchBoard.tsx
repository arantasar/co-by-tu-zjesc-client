import React, { useState } from "react";

import styles from "./SearchBoard.module.scss";
import "./SearchBoard.scss";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Item from "../../../models/IItem";

interface ISearchBoardProps {
  offset: number;
  items: Item[];
  selectedItems: Item[];
  changeHandler(item: Item): void;
}

const SearchBoard: React.FC<ISearchBoardProps> = ({
  offset,
  items,
  selectedItems,
  changeHandler,
}) => {
  const [size, setSize] = useState<number>(1);

  const handleSizeChange = (size: number) => {
    setSize(size);
    const sizeAsString = String(size);
    changeHandler({ id: sizeAsString, name: sizeAsString });
  };

  const checked = (item: Item) => {
    return selectedItems.map((item) => item.id).includes(item.id);
  };

  const displayItems = items.map((ingredient: Item) => (
    <FormControlLabel
      key={ingredient.id}
      control={
        <Checkbox
          checked={checked(ingredient)}
          onChange={() => changeHandler(ingredient)}
        />
      }
      label={ingredient.name}
    />
  ));

  let baseArray: number[] = [];
  for (let i = 0; i < offset - 1; i++) {
    baseArray.push(i);
  }
  let offsetDivs = baseArray.map((item, index) => <div key={index}> </div>);

  return (
    <div className={styles.wrapper}>
      {offsetDivs}
      {offsetDivs.length < 3 ? (
        <div className={styles.items}>{displayItems}</div>
      ) : (
        <div>
          <input
            className={styles.searchInput}
            type={"number"}
            min={"1"}
            value={size}
            onChange={(e) => handleSizeChange(e.target.valueAsNumber)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBoard;
