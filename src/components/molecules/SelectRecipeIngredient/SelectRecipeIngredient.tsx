import React from "react";
import styles from "./SelectRecipeIngredient.module.scss";
import IIngredient from "../../../models/IIngredient";
import IExtendedIngredient from "../../../models/IExtendedIngredient";

interface SelectIngredientProps {
  ingredient: IIngredient | IExtendedIngredient;
  clickHandler: (ingredient: IIngredient) => void;
}

const SelectRecipeIngredient: React.FC<SelectIngredientProps> = ({
  ingredient,
  clickHandler,
}) => {
  return (
    <>
      <div
        className={styles.SelectRecipeIngredient}
        onClick={() => clickHandler(ingredient)}
      >
        <div className={styles.Photo}>
          <div className={[styles.Ribbon, styles.Name].join(" ")}>
            {ingredient.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectRecipeIngredient;
