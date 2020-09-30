import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface UniversalModalProps {
  open: boolean;
  handleClose: () => {};
  header: string;
  buttonText: string;
  text: string;
}

const UniversalModal: FC<UniversalModalProps> = ({
  open,
  handleClose,
  text,
  buttonText,
  header,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{header}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color={"secondary"} onClick={handleClose}>
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UniversalModal;
