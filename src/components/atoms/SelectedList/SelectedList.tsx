import React from "react";
import styles from "./SelectedList.module.scss";
import Item from "../../../models/IItem";

interface ISelectedListProps {
  items: Item[];
}

const SelectedList: React.FC<ISelectedListProps> = ({ items }) => (
  <div className={styles.SelectedList}>
    Wybrane: {items.map((item) => item.name).join(", ")}
  </div>
);

export default SelectedList;
