import React from "react";
import styles from "./FooterLinkGroup.module.scss";
import { Link } from "react-router-dom";
import ILinkProps from "../../../interfaces/ILinkProps";

interface IFooterLinkGroupProps {
  header: string;
  links: ILinkProps[];
}

const FooterLinkGroup: React.FC<IFooterLinkGroupProps> = ({
  header,
  links,
}) => (
  <div>
    <h4>{header}</h4>
    <hr />
    {links.map((link) => (
      <Link className={styles.Link} key={link.display} to={link.to}>
        {link.display}
      </Link>
    ))}
  </div>
);

export default FooterLinkGroup;
