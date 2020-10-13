import React, { useState } from "react";
import { Formik } from "formik";
import RegisterForm from "./Register";
import axios from "axios";
import { API } from "../../../config/config";
import UniversalModal from "../../organisms/UniversalModal";
import { useHistory } from "react-router";
import { initialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (!error) {
      history.push("/login");
    }
  };

  const onSubmit = ({ name, email, password }, { resetForm }) => {
    setIsSubmitting(true);
    setError(false);
    axios
      .post(`${API}/users`, {
        name,
        email,
        password,
      })
      .then(() => {
        setHeader("Konto utworzone");
        setText("Konto zostało utworzone. Możesz teraz korzystać z serwisu!");
        setShowModal(true);
        // przycisk zablokowany przy wysyłaniu
        // kółeczko - czekajka
      })
      .catch((err) => {
        setHeader("Błąd");
        setError(true);
        setText(err.response.data.message);
        setShowModal(true);
      })
      .finally(() => {
        setIsSubmitting(false);
        resetForm();
      });
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        isSubmitting={isSubmitting}
      >
        {(props) => <RegisterForm {...props} />}
      </Formik>
      <UniversalModal
        open={showModal}
        handleClose={handleClose}
        header={header}
        buttonText={"OK"}
        text={text}
      />
    </div>
  );
};

export default Register;
