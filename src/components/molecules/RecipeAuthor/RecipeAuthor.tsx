import React, { useState } from "react";
import styled from "styled-components";
import defaultAvatar from "./../../../assets/avatar.png";
import UserProfile from "../../organisms/UserProfile/UserProfile";

interface IProps {
  photoPath?: string;
  id: string;
  name: string;
}

const RecipeAuthor: React.FC<IProps> = ({ photoPath, id, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledComponent onClick={() => setIsOpen(true)}>
        <Avatar src={photoPath || defaultAvatar} />
        <Name>{name}</Name>
      </StyledComponent>
      <UserProfile
        id={id}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default RecipeAuthor;

const StyledComponent = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const Name = styled.div`
  color: #ee24c4;
`;
