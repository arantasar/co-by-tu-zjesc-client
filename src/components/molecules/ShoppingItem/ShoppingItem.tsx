import React, { FC } from "react";
import styled from "styled-components";
import IRecipeLine from "../../../models/IRecipeLine";

interface IProps {
  recipeLine: IRecipeLine;
  handleDelete: (newId: string) => void;
  isDeleted: boolean;
}

interface DeletedProps {
  readonly isDeleted: boolean;
}

const ShoppingItem: FC<IProps> = ({ recipeLine, handleDelete, isDeleted }) => {
  const toggleItem = () => {
    handleDelete(recipeLine.id);
  };

  return (
    <Item isDeleted={isDeleted}>
      <Photo>
        <img
          src={recipeLine.ingredient.photoPath}
          alt={recipeLine.ingredient.name}
        />
        <div>{recipeLine.ingredient.name}</div>
      </Photo>
      <Value>
        {recipeLine.amount} x {recipeLine.unit.name}
      </Value>
      <ButtonWrapper>
        <Button onClick={toggleItem}>{isDeleted ? "Przywróć" : "Usuń"}</Button>
      </ButtonWrapper>
    </Item>
  );
};

export default ShoppingItem;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.div`
  padding: 10px 30px;
  color: white;
  text-transform: uppercase;
  background-color: #ee24c4;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const Item = styled.div<DeletedProps>`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 60%;
  padding: 10px 0;
  border-top: 1px solid darkgray;
  filter: ${(props) => (props.isDeleted ? "opacity(35%)" : "none")};
`;

const Value = styled.div`
  display: flex;
  align-items: center;
`;
