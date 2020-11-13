import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<IProps> = ({ id, value, changeHandler }) => (
  <StyledTextArea
    id={id}
    name={id}
    rows={10}
    value={value}
    onChange={changeHandler}
  />
);

export default TextArea;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 15px;
  border: 2px solid #ee24c4;
  padding: 20px;

  &:focus {
    outline: none;
  }
`;
