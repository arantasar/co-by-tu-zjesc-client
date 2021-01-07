import React from "react";
import styled from "styled-components";

interface IProps {
  tag: string;
}

const RecipeTag: React.FC<IProps> = ({ tag }) => (
  <StyledComponent>{tag}</StyledComponent>
);

export default RecipeTag;

const StyledComponent = styled.div`
  padding: 5px 10px;
  background-color: white;
  border-radius: 15px;
  border: 1px dashed black;
  font-size: 12px;
  margin-right: 5px;
`;
