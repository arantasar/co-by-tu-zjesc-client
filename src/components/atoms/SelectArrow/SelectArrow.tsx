import React from "react";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";

interface IArrowProps {
  isActive: boolean;
}

const Arrow: React.FC<IArrowProps> = ({ isActive }) => {
  const style = { height: "30px", width: "30px" };

  return isActive ? (
    <KeyboardArrowUpOutlinedIcon style={style} className="hoverable" />
  ) : (
    <KeyboardArrowDownOutlinedIcon style={style} className="hoverable" />
  );
};

export default Arrow;
