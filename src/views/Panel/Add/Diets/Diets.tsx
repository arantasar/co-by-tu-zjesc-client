import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import IDiet from "../../../../models/IDiet";

interface IProps {
  diets: IDiet[];
  selectedDiets: IDiet[];
  selectDietHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Diets: React.FC<IProps> = ({
  selectedDiets,
  selectDietHandler,
  diets,
}) => {
  return (
    <section>
      <h3>Wybierz typ diety</h3>
      {diets.map((diet) => (
        <FormControlLabel
          key={diet.id}
          control={
            <Checkbox
              id={diet.id}
              checked={selectedDiets.includes(diet)}
              onChange={selectDietHandler}
            />
          }
          label={diet.name}
        />
      ))}
    </section>
  );
};

export default Diets;
