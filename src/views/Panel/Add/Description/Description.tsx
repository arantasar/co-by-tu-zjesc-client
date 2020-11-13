import React from "react";
import TextArea from "../../../../components/atoms/TextArea/TextArea";

interface IProps {
  description: string;
  setDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Description: React.FC<IProps> = ({ description, setDescription }) => {
  return (
    <section>
      <h3>Opis przygotowania</h3>
      <TextArea
        id={"description"}
        value={description}
        changeHandler={setDescription}
      />
    </section>
  );
};

export default Description;
