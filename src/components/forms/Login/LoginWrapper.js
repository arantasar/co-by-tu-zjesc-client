import React from "react";
import { Formik } from "formik";
import { string, object } from "yup";
import RegisterForm from "./Login";
import axios from "axios";

const validationSchema = object({
  email: string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: string("").required("Password is required")
});

const Login = props => {
  const initialValues = {
    email: "",
    password: ""
  };
  const onSubmit = ({ email, password }, bag) => {
    const user = {
      email,
      password
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

export default Login;
