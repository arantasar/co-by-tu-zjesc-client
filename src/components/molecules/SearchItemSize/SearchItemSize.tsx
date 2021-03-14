import React from "react";
import styles from "./../SearchItem/SearchItem.module.scss";

const SearchItem: React.FC = () => {
  return (
    <div>
      <div className={styles.selection}>
        <div className={styles.headerClassDefault}>Porcja:</div>
        <div className={styles.select}>
          <div className={styles.placeholder}>Dla ilu osób?</div>
        </div>
      </div>
      <div className={styles.SelectedList}>Wybrane: Cztery</div>
    </div>
  );
};

export default SearchItem;
