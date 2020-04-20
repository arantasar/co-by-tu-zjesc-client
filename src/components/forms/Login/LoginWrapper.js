import React from "react";
import { Formik } from "formik";
import { string, object } from "yup";
import RegisterForm from "./Login";
import axios from "axios";

const validationSchema = object({
  email: string("Adres email")
    .email("Niepoprawny format")
    .required("Pole jest wymagane"),
  password: string("").required("Pole jest wymagane"),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = ({ email, password }) => {
    const user = {
      email,
      password,
    };
    axios
      .post("http://weirdy.arantasar.hostingasp.pl/home/create", {
        ...user,
      })
      .then(() => {
        // console.log(res);
      });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(props) => <RegisterForm {...props} />}
    </Formik>
  );
};

export default Login;
