import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Login.module.css";
import { Box } from "@material-ui/core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterForm = (props) => {
  const {
    isSubmitting,
    errors,
    touched,
    handleSubmit,
    isValid,
    handleChange,
    setFieldTouched,
    values: { email, password },
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
        id="email"
        color="secondary"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        required
        variant="outlined"
        label="Email"
        value={email}
        onChange={(e) => {
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
      <Box mt={3}>
        <Button
          disabled={!isValid || isSubmitting}
          variant="contained"
          color="secondary"
          type="submit"
        >
          {isSubmitting ? (
            <FontAwesomeIcon
              spin
              size={"lg"}
              color={"white"}
              icon={faSpinner}
            />
          ) : (
            "Zaloguj"
          )}
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
