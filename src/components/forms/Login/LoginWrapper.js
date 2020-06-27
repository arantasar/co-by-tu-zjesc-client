import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import { string, object } from "yup";
import LoginForm from "./Login";
import { UserContext } from "../../../context/user-context";

const validationSchema = object({
  email: string("Adres email")
    .email("Niepoprawny format")
    .required("Pole jest wymagane"),
  password: string("").required("Pole jest wymagane"),
});

const Login = (props) => {
  const userContext = useContext(UserContext);
  const [pass, setPass] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = ({ email, password }) => {
    props.axios
      .post("http://localhost:5000/api/users/login", { email, password })
      .then((res) => {
        userContext.login(res.data.user, res.data.token);
        setPass(true);
      });
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
