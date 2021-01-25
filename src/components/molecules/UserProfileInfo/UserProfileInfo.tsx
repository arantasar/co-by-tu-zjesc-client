import React from "react";
import styled from "styled-components";
import IUser from "../../../models/IUser";
import { getDaysInService } from "../../../helpers";

const UserProfileInfo: React.FC<IUser> = ({
  recipesAddedCount,
  favourites,
  receivedLikes,
  lastLogin,
  dateCreated,
}) => {
  const diffDays = getDaysInService(dateCreated);

  return (
    <StyledComponent>
      <div>Dni w serwisie</div>
      <div>{diffDays}</div>
      <div>Dodanych przepisów</div>
      <div>{recipesAddedCount}</div>
      <div>Ulubione przepisy</div>
      <div>{favourites.length}</div>
      <div>Zebrane polubienia</div>
      <div>{receivedLikes}</div>
      <div>Ostatnia aktywność</div>
      <div>{lastLogin}</div>
    </StyledComponent>
  );
};

export default UserProfileInfo;

const StyledComponent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 20px;

  div {
    margin-bottom: 5px;
  }
`;
