import React from "react";
import { Container } from "@material-ui/core";
import styles from "./Footer.module.scss";
import Copyright from "../../atoms/Copyright/Copyright";
import ILinkProps from "../../../interfaces/ILinkProps";
import FooterLinkGroup from "../../molecules/FooterLinkGroup/FooterLinkGroup";

const Wrapper = () => {
  const socialLinks: ILinkProps[] = [
    { display: "Facebook", to: "/" },
    { display: "Instagram", to: "/" },
    { display: "Twitter", to: "/" },
  ];
  const legalLinks: ILinkProps[] = [
    { display: "Kontakt", to: "/" },
    { display: "Regulamin", to: "/" },
    { display: "Reklama", to: "/" },
  ];

  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.logo}>CoByTuZjeść?</div>
          <FooterLinkGroup header="Znajdź nas" links={socialLinks} />
          <FooterLinkGroup header="Informacje" links={legalLinks} />
        </div>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Wrapper;
