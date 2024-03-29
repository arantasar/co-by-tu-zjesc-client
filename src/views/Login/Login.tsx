import React from "react";
import WithModal from "../../hoc/WithModal/WithModal";
import axios from "axios";
import LoginForm from "../../components/forms/Login/LoginWrapper";
import styles from "./Login.module.scss";
import photoWebp from "../../assets/vege-food.webp";
import photo from "../../assets/vege-food.jpg";

const LoginView = () => (
  <div className={styles.wrapper}>
    <picture>
      <source srcSet={photoWebp} type="image/webp" />
      <img src={photo} className={styles.image} alt="CoByTuZjesc" />
    </picture>
    <LoginForm axios={axios} />
  </div>
);

export default WithModal(
  LoginView,
  function () {
    console.log("haha");
  },
  axios
);
