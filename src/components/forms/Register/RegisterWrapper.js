import React from "react";
import { Formik } from "formik";
import { string, object, ref } from "yup";
import RegisterForm from "./Register";
import axios from "axios";

const validationSchema = object({
  name: string("Enter a name").required("Name is required"),
  email: string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: string("")
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  passwordConfirm: string("")
    .required("Password is required")
    .oneOf([ref("password")], "Both password need to be the same")
    .min(6, "Password must be at least 6 characters long")
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
