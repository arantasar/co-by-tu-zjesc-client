import React from "react";
import styled from "styled-components";
import RecipeTag from "../../atoms/RecipeTag/RecipeTag";
import IDiet from "../../../models/IDiet";
import ICategory from "../../../models/ICategory";

interface IProps {
  diets: IDiet[];
  categories: ICategory[];
}

const RecipeTags: React.FC<IProps> = ({ diets, categories }) => (
  <Tags>
    {diets.map((d) => (
      <RecipeTag key={d.id} tag={d.name} />
    ))}
    {categories.map((d) => (
      <RecipeTag key={d.id} tag={d.name} />
    ))}
  </Tags>
);

export default RecipeTags;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
