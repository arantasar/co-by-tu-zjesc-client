import React, { FC, useRef } from "react";
import Button from "@material-ui/core/Button";

interface IProps {
  fileName: string;
  fileUploadChange: (file: HTMLInputElement | null) => void;
  [prop: string]: any;
}

const OpenFileButton: FC<IProps> = ({
  fileName,
  fileUploadChange,
  ...props
}) => {
  const buttonRef = useRef<HTMLInputElement>(null);

  const fileUpload = () => {
    if (buttonRef && buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div>
      <input
        ref={buttonRef}
        accept="image/*"
        id="file-upload"
        type="file"
        style={{ display: "none" }}
        onChange={() => fileUploadChange(buttonRef.current)}
      />
      <Button
        {...props}
        variant="contained"
        onClick={fileUpload}
        style={{ margin: "20px 0" }}
      >
        {fileName || "Wybierz zdjęcie"}
      </Button>
    </div>
  );
};

export default OpenFileButton;
