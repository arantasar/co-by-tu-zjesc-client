import React from "react";
import styled from "styled-components";
import defaultAvatar from "./../../../assets/avatar.png";
import { Link } from "react-router-dom";

interface IProps {
  photoPath?: string;
  id: string;
  name: string;
}

const RecipeAuthor: React.FC<IProps> = ({ photoPath, id, name }) => (
  <StyledComponent>
    <Avatar src={photoPath || defaultAvatar} />
    <Name to={`/users/${id}`}>{name}</Name>
  </StyledComponent>
);

export default RecipeAuthor;

const StyledComponent = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled(Link)`
  color: #ee24c4;
`;
