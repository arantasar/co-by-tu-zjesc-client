import React from "react";
import styles from "./Categories.module.scss";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";

const Categories = ({ ingredients, headerClass, toggleList, active }) => {
  const headerClassUse = headerClass || styles.headerClassDefault;

  const selectedIngredients = ingredients.map(item => item.name).join(", ");

  const Arrow = () => {
    const style = { height: "30px", width: "30px" };
    const className = [styles.after, "hoverable"].join(" ");

    return active ? (
      <KeyboardArrowUpOutlinedIcon style={style} className={className} />
    ) : (
      <KeyboardArrowDownOutlinedIcon style={style} className={className} />
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selection}>
        <div className={headerClassUse}>Kategorie:</div>
        <div
          className={[styles.select, "hoverable"].join(" ")}
          onClick={toggleList}
        >
          <div>wybierz</div>
          <Arrow />
        </div>
      </div>
      <div className={styles.selected}>
        Wybrane kategorie: {selectedIngredients}
      </div>
    </div>
  );
};

export default Categories;
