import React, { useContext } from "react";
import styles from "./UserInfo.module.scss";
import avatar from "../../../assets/avatar.png";
import UserContext from "../../../context/UserContext";
import { getDaysInService } from "../../../helpers";

const UserInfo = () => {
  const { user } = useContext(UserContext);
  const diffDays = getDaysInService((user && user.dateCreated) || "");

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
          <div>{diffDays}</div>
        </div>
        <div className={styles.StatsItem}>
          <div>Dodanych przepisów</div>
          <div>{user && user.recipesAddedCount}</div>
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
