import * as React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  author: String;
  date: Date;
}

const header = ({ author, date }: HeaderProps) => {
  const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className={styles.wrapper}>
      <div>{author}</div>
      <div className={styles.date}>
        <div>{day}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default header;
