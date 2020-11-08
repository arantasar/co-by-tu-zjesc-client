import React, { useContext, useState } from "react";
import { Formik } from "formik";
import LoginForm from "./Login";
import UserContext from "../../../context/UserContext";
import { validationSchema } from "./validationSchema";
import { initialValues } from "./initialValues";
import UniversalModal from "../../organisms/UniversalModal";
import { API } from "../../../config/config";
import { useHistory } from "react-router";

const Login = (props) => {
  const userContext = useContext(UserContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();

  const handleClose = () => {
    setModalOpen(false);
  };

  const onSubmit = ({ email, password }, { resetForm }) => {
    setIsSubmitting(true);
    props.axios
      .post(`${API}/users/login`, { email, password })
      .then((res) => {
        userContext.login(res.data.user, res.data.token);
        history.push("/");
      })
      .catch((err) => {
        setHeader("Błąd");
        setText(err.response.data.message);
        setModalOpen(true);
      })
      .finally(() => {
        resetForm();
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        isSubmitting={isSubmitting}
      >
        {(props) => {
          return <LoginForm {...props} />;
        }}
      </Formik>
      <UniversalModal
        open={modalOpen}
        handleClose={handleClose}
        header={header}
        buttonText={"OK"}
        text={text}
      />
    </>
  );
};

export default Login;
