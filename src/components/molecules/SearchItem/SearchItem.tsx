import React from "react";
import styles from "./SearchItem.module.scss";
import SelectedList from "../../atoms/SelectedList/SelectedList";
import Arrow from "../../atoms/SelectArrow/SelectArrow";
import Item from "../../../models/IItem";

interface ISearchItemProps {
  selectedItems: Item[];
  placeholder: string;
  name: string;
  isActive: boolean;
  activate: (event: React.MouseEvent) => void;
}

const SearchItem: React.FC<ISearchItemProps> = ({
  selectedItems,
  placeholder,
  name,
  isActive,
  activate,
}) => {
  return (
    <div>
      <div className={styles.selection}>
        <div className={styles.headerClassDefault}>{name}:</div>
        <div
          className={[styles.select, "hoverable"].join(" ")}
          onClick={activate}
        >
          <div className={styles.placeholder}>{placeholder}</div>
          <Arrow isActive={isActive} />
        </div>
      </div>
      <SelectedList items={selectedItems} />
    </div>
  );
};

export default SearchItem;
