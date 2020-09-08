import React from "react";
import styles from "./SelectRecipeIngredient.module.scss";
import IIngredient from "../../../models/IIngredient";

interface SelectIngredientProps {
  ingredient: IIngredient;
}

const SelectRecipeIngredient: React.FC<SelectIngredientProps> = ({
  ingredient,
}) => {
  const onDragStart = () => {
    console.log("started");
  };

  return (
    <div
      className={styles.SelectRecipeIngredient}
      draggable
      onDragStart={onDragStart}
    >
      <div className={styles.Photo}>
        <div className={styles.Ribbon}>{ingredient.name}</div>
      </div>
    </div>
  );
};

export default SelectRecipeIngredient;
