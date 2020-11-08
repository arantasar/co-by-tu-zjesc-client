import React, { useContext } from "react";
import styles from "./UserInfo.module.scss";
import avatar from "../../../assets/avatar.png";
import UserContext from "../../../context/UserContext";

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.UserPanel}>
      <div className={styles.Avatar}>
        <img src={(user && user.photoPath) || avatar} alt="Avatar" />
      </div>
      <div className={styles.BasicInfo}>
        <div>{user && user.name}</div>
        <div>{user && user.email}</div>
      </div>
      <div className={styles.Stats}>
        <div className={styles.StatsItem}>
          <div>Dni w serwisie</div>
          <div>{user && user.daysInService}</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Dodanych przepisów</div>
          <div>{user && user.recipes.length}</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Ulubione przepisy</div>
          <div>{user && user.favourites.length}</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Zebrane polubienia</div>
          <div>{user && user.receivedLikes}</div>
        </div>
        <div className={styles.StatsItemLast}>
          <div>Ostatnie logowanie</div>
          <div>{user && user.lastLogin}</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
