import React from "react";
import styled from "styled-components";
import defaultAvatar from "./../../../assets/avatar.png";

interface IProps {
  photoPath?: string;
  name: string;
}

const UserAvatar: React.FC<IProps> = ({ name, photoPath }) => (
  <StyledComponent>
    <Photo src={photoPath || defaultAvatar} />
    <Name>{name}</Name>
  </StyledComponent>
);

export default UserAvatar;

const StyledComponent = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 18px;
  color: white;
`;
