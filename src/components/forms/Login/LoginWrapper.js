import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import { string, object } from "yup";
import LoginForm from "./Login";
import axios from "axios";
import UserContext from "../../../context/user-context";

const validationSchema = object({
  email: string("Adres email")
    .email("Niepoprawny format")
    .required("Pole jest wymagane"),
  password: string("").required("Pole jest wymagane"),
});

const Login = () => {
  const userContext = useContext(UserContext);
  const [pass, setPass] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = ({ email, password }) => {
    const user = {
      email,
      password,
    };
    if (email === "janusz.guzowski@gmail.com" && password === "1234") {
      userContext.login();
      setPass(true);
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(props) => {
        return (
          <>
            <LoginForm {...props} />
            {pass ? <Redirect push to="/" /> : null}
          </>
        );
      }}
    </Formik>
  );
};

export default Login;
