import React, { useState } from "react";
import { Formik } from "formik";
import { string, object, ref } from "yup";
import RegisterForm from "./Register";
import axios from "axios";
import { API } from "../../../config/config";
import UniversalModal from "../../organisms/UniversalModal";
import { useHistory } from "react-router";

const validationSchema = object({
  name: string("Nazwa użytkownika").required("Pole jest wymagane"),
  email: string("Adres email")
    .email("Niepoprawny format")
    .required("Pole jest wymagane"),
  password: string("")
    .required("Pole jest wymagane")
    .min(8, "Minimalna długość hasła - 8 znaków"),
  passwordConfirm: string("")
    .required("Pole jest wymagane")
    .oneOf([ref("password")], "Hasła nie są takie same")
    .min(8, "Minimalna długość hasła - 8 znaków"),
});

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setShowModal(false);
    if (!error) {
      history.push("/login");
    }
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = ({ name, email, password }, { resetForm }) => {
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
        resetForm();
      });
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
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
