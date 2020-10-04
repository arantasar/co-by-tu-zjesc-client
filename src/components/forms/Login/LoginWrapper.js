import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import LoginForm from "./Login";
import { UserContext } from "../../../context/user-context";
import { validationSchema } from "./validationSchema";
import { initialValues } from "./initialValues";

const Login = (props) => {
  const userContext = useContext(UserContext);
  const [pass, setPass] = useState(false);

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
