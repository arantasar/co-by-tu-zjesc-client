import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  clickHandler: (name: string) => void;
  isActive: boolean;
  id: string;
}

interface StyleProps {
  isActive: boolean;
}

const Switch: React.FC<IProps> = ({ name, clickHandler, isActive, id }) => (
  <StyledComponent isActive={isActive} onClick={() => clickHandler(id)}>
    {name}
  </StyledComponent>
);
export default Switch;

const StyledComponent = styled.div<StyleProps>`
  padding-bottom: 15px;
  border-bottom: ${({ isActive }) => (isActive ? "2px solid white" : "none")};
  font-weight: ${({ isActive }) => (isActive ? "bolder" : "normal")};
  display: inline-block;
  margin-right: 20px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
