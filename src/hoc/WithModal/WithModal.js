import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const withModal = (WrappedComponent, clickHandler, axios) => (props) => {
  const [error, setError] = useState("");

  const closeHandler = () => {
    clickHandler();
    setError("");
  };

  useEffect(() => {
    const req = axios.interceptors.request.use((req) => {
      setError("");
      return req;
    });
    const res = axios.interceptors.response.use(
      (res) => {
        console.log(res.data);
        setError(res.data);
        return res;
      },
      (error) => {
        setError(error.response.data);
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(req);
      axios.interceptors.response.eject(res);
    };
  });

  return (
    <>
      <WrappedComponent {...props} />
      <Dialog open={!!error} onClose={closeHandler}>
        <DialogTitle>Server Error</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withModal;
