import * as React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  author: string;
  date: string;
}

const header = ({ author, date }: HeaderProps) => {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);
  const time = date.slice(11).split(":");
  const dateString = `${day}/${month}/${year}`;
  const timeString = `${time[0]}:${time[1]}`;

  return (
    <div className={styles.wrapper}>
      <div>{author}</div>
      <div className={styles.date}>
        <div>{dateString}</div>
        <div>{timeString}</div>
      </div>
    </div>
  );
};

export default header;
