import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "./Register.module.css";
import { Box } from "@material-ui/core";

const RegisterForm = props => {
  const {
    errors,
    touched,
    handleSubmit,
    isValid,
    handleChange,
    setFieldTouched,
    values: { email, password, name, passwordConfirm }
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit}>
      <TextField
        margin="dense"
        id="name"
        color="secondary"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        required
        variant="outlined"
        label="Nazwa użytkownika"
        value={name}
        onChange={change.bind(null, "name")}
      />
      <TextField
        margin="dense"
        id="email"
        color="secondary"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        required
        variant="outlined"
        label="Email"
        value={email}
        onChange={e => {
          change("email", e);
        }}
      />
      <TextField
        margin="dense"
        id="password"
        color="secondary"
        required
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        label="Hasło"
        variant="outlined"
        type="password"
        value={password}
        onChange={change.bind(null, "password")}
      />
      <TextField
        margin="dense"
        id="passwordConfirm"
        color="secondary"
        required
        helperText={touched.passwordConfirm ? errors.passwordConfirm : ""}
        error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
        label="Powtórz hasło"
        variant="outlined"
        type="password"
        value={passwordConfirm}
        onChange={change.bind(null, "passwordConfirm")}
      />
      <Box mt={3}>
        <Button
          disabled={!isValid}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Załóż konto
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
