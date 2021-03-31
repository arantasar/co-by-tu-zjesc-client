import React from "react";
import styled from "styled-components";
import IRecipe from "../../../models/IRecipe";
import { Link } from "react-router-dom";
import defaultImage from "./../../../assets/placeholders/meal-placeholder.jpg";
import { faEye, faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipeMiniature: React.FC<IRecipe> = ({
  photoPath,
  name,
  id,
  viewCounter,
  likes,
  inFavourite,
}) => (
  <StyledComponent to={`/recipe/${id}`}>
    <Photo src={photoPath || defaultImage} />
    <Name>{name}</Name>
    <Stats>
      <div>
        <FontAwesomeIcon color={"black"} icon={faEye} />
        <div>{viewCounter}</div>
      </div>
      <div>
        <FontAwesomeIcon color={"red"} icon={faHeart} />
        <div>{inFavourite}</div>
      </div>
      <div>
        <FontAwesomeIcon color={"blue"} icon={faThumbsUp} />
        <div>{likes}</div>
      </div>
    </Stats>
  </StyledComponent>
);

export default RecipeMiniature;

const StyledComponent = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #ee24c4;
  border-radius: 15px;
`;
const Name = styled.div`
  color: black;
  padding: 10px;
`;

const Photo = styled.img`
  height: 100px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const Stats = styled.div`
  color: black;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
