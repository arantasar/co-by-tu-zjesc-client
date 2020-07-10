import React from "react";
import styles from "./UserInfo.module.scss";
import avatar from "../../../assets/avatar.png";

const UserInfo = () => {
  return (
    <div className={styles.UserPanel}>
      <div className={styles.Avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className={styles.BasicInfo}>
        <div>Arantasar</div>
        <div>janusz.guzowski@gmail.com</div>
      </div>
      <div className={styles.Stats}>
        <div className={styles.StatsItem}>
          <div>Dni w serwisie</div>
          <div>54</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Dodanych przepisów</div>
          <div>12</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Ulubione przepisy</div>
          <div>16</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Zebrane polubienia</div>
          <div>50</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
