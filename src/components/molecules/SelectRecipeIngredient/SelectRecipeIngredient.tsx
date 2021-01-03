import React from "react";
import styles from "./SelectRecipeIngredient.module.scss";
import IIngredient from "../../../models/IIngredient";
import IExtendedIngredient from "../../../models/IExtendedIngredient";
import styled from "styled-components";

interface SelectIngredientProps {
  ingredient: IIngredient | IExtendedIngredient;
  clickHandler: (ingredient: IIngredient) => void;
}

interface PhotoProps {
  photoPath: string;
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
        <Photo photoPath={ingredient.photoPath}>
          <div className={[styles.Ribbon, styles.Name].join(" ")}>
            {ingredient.name}
          </div>
        </Photo>
      </div>
    </>
  );
};

export default SelectRecipeIngredient;

const Photo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props: PhotoProps) => props.photoPath});
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px;
`;
