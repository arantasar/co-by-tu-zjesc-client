import React from "react";
import styled from "styled-components";

interface IProps {
  description: string;
  setDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Description: React.FC<IProps> = ({ description, setDescription }) => {
  return (
    <section>
      <h3>Opis przygotowania</h3>
      <StyledTextArea
        id="description"
        name="description"
        rows={10}
        value={description}
        onChange={setDescription}
      />
    </section>
  );
};

export default Description;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 15px;
  border: 2px solid #ee24c4;
  padding: 20px;

  &:focus {
    outline: none;
  }
`;
