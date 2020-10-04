import React, { useState } from "react";
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
  const [desiredQuantity, setDesiredQuantity] = useState(0);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesiredQuantity(+event.target.value);
  };

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
      {"quantity" in ingredient ? (
        <input
          type={"number"}
          value={desiredQuantity}
          onChange={changeHandler}
          className={[styles.Ribbon, styles.Quantity].join(" ")}
        />
      ) : null}
    </>
  );
};

export default SelectRecipeIngredient;
