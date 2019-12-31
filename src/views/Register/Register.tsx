import * as React from "react";

import RegisterForm from "../../components/forms/Register/RegisterWrapper";
import styles from "./Register.module.scss";
import photoWebp from "../../assets/restaurant.webp";
import photo from "../../assets/restaurant.jpg";

const LoginView = () => (
  <div className={styles.wrapper}>
    <picture>
      <source srcSet={photoWebp} type="image/webp" />
      <img src={photo} className={styles.image} alt="CoByTuZjesc" />
    </picture>
    <RegisterForm />
  </div>
);

export default LoginView;
