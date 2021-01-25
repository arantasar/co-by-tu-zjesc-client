import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import IRecipe from "../../models/IRecipe";
import axios from "./../../axios/";
import UserContext from "../../context/UserContext";
import { Container } from "@material-ui/core";
import ShoppingItem from "../../components/molecules/ShoppingItem/ShoppingItem";
import IRecipeLine from "../../models/IRecipeLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Week = () => {
  const { token } = useContext(UserContext);
  const [deleted, setDeleted] = useState<string[]>([]);
  const [names, setNames] = useState<
    { name: string; itemId: string; photoPath: string }[]
  >([]);
  const [recipeLines, setRecipeLines] = useState<IRecipeLine[]>([]);

  const getRecipes = () => {
    axios
      .post<IRecipe[]>("/users/getweek", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const names = res.data.map(({ name, itemId, photoPath }) => ({
          name,
          itemId,
          photoPath,
        }));
        const recipeLines = res.data
          .flatMap((recipe) => recipe.recipeLines)
          .reduce<IRecipeLine[]>((prev, current) => {
            const candidate = prev.find(
              (line) =>
                line.ingredient.id === current.ingredient.id &&
                line.unit.id === current.unit.id
            );
            if (candidate) {
              candidate.amount += current.amount;
              return prev;
            } else {
              return [...prev, current];
            }
          }, []);

        setNames(names);
        setRecipeLines(recipeLines);
      });
  };

  const deleteRecipe = async (id: string) => {
    await axios.delete(`/users/deleteweek/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getRecipes();
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <StyledSection>
      <Container>
        <Content>
          <Header>Mój tydzień</Header>
          <Names>
            {names.map((name) => (
              <Name key={name.itemId}>
                <Photo src={name.photoPath || "https://picsum.photos/75"} />
                {name.name}
                <Trash
                  onClick={() => {
                    deleteRecipe(name.itemId);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Trash>
              </Name>
            ))}
          </Names>
          {recipeLines
            .filter((line) => !deleted.includes(line.id))
            .map((line) => (
              <ShoppingItem
                isDeleted={false}
                key={line.id}
                recipeLine={line}
                handleDelete={() => {
                  setDeleted((prev) => [...prev, line.id]);
                }}
              />
            ))}
          {recipeLines
            .filter((line) => deleted.includes(line.id))
            .map((line) => (
              <ShoppingItem
                isDeleted={true}
                key={line.id}
                recipeLine={line}
                handleDelete={() => {
                  setDeleted((prev) => prev.filter((item) => item !== line.id));
                }}
              />
            ))}
        </Content>
      </Container>
    </StyledSection>
  );
};

export default Week;

const StyledSection = styled.section`
  margin-top: 64px;
`;

const Photo = styled.img`
  object-fit: cover;
  width: 75px;
  height: 75px;
  margin: 5px 15px;
`;

const Names = styled.div`
  width: 40%;
`;

const Trash = styled.div`
  text-align: right;
  margin-right: 30px;
`;

const Name = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: white;
  border-radius: 25px;
  border: 1px dashed black;
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1``;
