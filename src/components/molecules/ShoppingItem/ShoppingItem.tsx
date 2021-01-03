import React, { FC } from "react";
import styled from "styled-components";
import IRecipeLine from "../../../models/IRecipeLine";

interface IProps {
  recipeLine: IRecipeLine;
}

const ShoppingItem: FC<IProps> = ({ recipeLine }) => {
  return (
    <Item>
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
        <Button>Usuń</Button>
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

const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  width: 60%;
  padding: 10px 0;
  border-top: 1px solid darkgray;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
`;
