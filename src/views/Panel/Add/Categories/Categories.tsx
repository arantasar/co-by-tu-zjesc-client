import React from "react";
import ICategory from "../../../../models/ICategory";
import { Checkbox, FormControlLabel } from "@material-ui/core";

interface IProps {
  categories: ICategory[];
  selectedCategories: ICategory[];
  selectCategoryHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Categories: React.FC<IProps> = ({
  selectedCategories,
  selectCategoryHandler,
  categories,
}) => {
  return (
    <section>
      <h3>Wybierz kategorie</h3>
      {categories.map((category) => (
        <FormControlLabel
          key={category.id}
          control={
            <Checkbox
              id={category.id}
              checked={selectedCategories.includes(category)}
              onChange={selectCategoryHandler}
            />
          }
          label={category.name}
        />
      ))}
    </section>
  );
};

export default Categories;
