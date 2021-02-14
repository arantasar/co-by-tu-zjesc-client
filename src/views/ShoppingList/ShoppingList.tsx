import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "./../../axios";
import IRecipe from "../../models/IRecipe";
import { useParams } from "react-router";
import { Container } from "@material-ui/core";
import ShoppingItem from "../../components/molecules/ShoppingItem/ShoppingItem";

const ShoppingList = () => {
  const [recipe, setRecipe] = useState<IRecipe>();
  const [deleted, setDeleted] = useState<string[]>([]);
  const handleDelete = (newId: string) => {
    if (deleted.includes(newId)) {
      setDeleted((prev) => prev.filter((id) => id !== newId));
    } else {
      setDeleted((prev) => [...prev, newId]);
    }
  };
  const { id, size } = useParams();

  useEffect(() => {
    axios
      .get<IRecipe>(`/recipes/${id}/${size}/true`)
      .then((res) => setRecipe(res.data));
  }, [id]);

  return (
    <StyledSection>
      <Container>
        <Content>
          {recipe && (
            <>
              <Header>{recipe.name} - lista zakupów</Header>
              {recipe.recipeLines
                .filter((line) => !deleted.includes(line.id))
                .map((line) => (
                  <ShoppingItem
                    isDeleted={false}
                    key={line.id}
                    recipeLine={line}
                    handleDelete={handleDelete}
                  />
                ))}
              {recipe.recipeLines
                .filter((line) => deleted.includes(line.id))
                .map((line) => (
                  <ShoppingItem
                    isDeleted={true}
                    key={line.id}
                    recipeLine={line}
                    handleDelete={handleDelete}
                  />
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
