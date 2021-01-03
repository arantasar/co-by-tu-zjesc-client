import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "./../../axios";
import IRecipe from "../../models/IRecipe";
import { useParams } from "react-router";
import { Container } from "@material-ui/core";
import ShoppingItem from "../../components/molecules/ShoppingItem/ShoppingItem";

const ShoppingList = () => {
  const [recipe, setRecipe] = useState<IRecipe>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get<IRecipe>(`/recipes/${id}/true`)
      .then((res) => setRecipe(res.data));
  }, [id]);

  return (
    <StyledSection>
      <Container>
        <Content>
          {recipe && (
            <>
              <Header>{recipe.name} - lista zakupów</Header>
              {recipe.recipeLines.map((line) => (
                <ShoppingItem recipeLine={line} />
              ))}
            </>
          )}
        </Content>
      </Container>
    </StyledSection>
  );
};

export default ShoppingList;

const Header = styled.h1``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSection = styled.section`
  margin-top: 64px;
`;
