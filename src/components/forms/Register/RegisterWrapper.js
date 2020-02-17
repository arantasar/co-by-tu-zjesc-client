import React from "react";
import { Formik } from "formik";
import { string, object, ref } from "yup";
import RegisterForm from "./Register";
import axios from "axios";

const validationSchema = object({
  name: string("Nazwa użytkownika").required("Pole jest wymagane"),
  email: string("Adres email")
    .email("Niepoprawny format")
    .required("Pole jest wymagane"),
  password: string("")
    .required("Pole jest wymagane")
    .min(6, "Minimalna długość hasła - 6 znaków"),
  passwordConfirm: string("")
    .required("Pole jest wymagane")
    .oneOf([ref("password")], "Hasła nie są takie same")
    .min(6, "Minimalna długość hasła - 6 znaków")
});

const Register = props => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };
  const onSubmit = ({ name, email, password }, bag) => {
    const user = {
      email,
      password,
      name
    };
    axios
      .post("http://weirdy.arantasar.hostingasp.pl/home/create", {
        ...user
      })
      .then(res => {
        console.log(res);
      });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {props => <RegisterForm {...props} />}
    </Formik>
  );
};

export default Register;
