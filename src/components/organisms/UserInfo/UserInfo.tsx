import React, { useContext } from "react";
import styles from "./UserInfo.module.scss";
import avatar from "../../../assets/avatar.png";
import { UserContext } from "../../../context/user-context";

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.UserPanel}>
      <div className={styles.Avatar}>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className={styles.BasicInfo}>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
      <div className={styles.Stats}>
        <div className={styles.StatsItem}>
          <div>Dni w serwisie</div>
          <div>{user.daysInService}</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Dodanych przepisów</div>
          <div>{user.recipes.length}</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Ulubione przepisy</div>
          <div>{user.favourites.length}</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Zebrane polubienia</div>
          <div>{user.receivedLikes}</div>
        </div>
        <div className={styles.StatsItemLast}>
          <div>Ostatnie logowanie</div>
          <div>{user.lastLogin}</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
