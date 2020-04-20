import React from "react";
import styles from "./SearchItem.module.scss";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";

const SearchItem = ({ item, isActive, activate }) => {
  const Arrow = () => {
    const style = { height: "30px", width: "30px" };
    const className = [styles.after, "hoverable"].join(" ");

    return isActive ? (
      <KeyboardArrowUpOutlinedIcon style={style} className={className} />
    ) : (
      <KeyboardArrowDownOutlinedIcon style={style} className={className} />
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selection}>
        <div className={styles.headerClassDefault}>{item.name}:</div>
        <div
          className={[styles.select, "hoverable"].join(" ")}
          onClick={() => {
            activate(item.id);
          }}
        >
          <div className={styles.placeholder}>{item.placeholderText}</div>
          <Arrow />
        </div>
      </div>
      <div className={styles.selected}>
        Wybrane: {item.selected.map((item) => item.name).join(", ")}
      </div>
    </div>
  );
};

export default SearchItem;
