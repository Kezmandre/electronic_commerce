import React from "react";
import styles from "./ToolTips.module.css";

const ToolTips = ({ text, children,top,right }) => {
  return (
    <div className={`relative inline-block ${styles.tooltipContainer}`}>
      {children}
      <div className={` ${top ? top : ""} ${right ? right : ""} ${styles.tooltip}`} >{text}</div>
    </div>
  );
};

export default ToolTips;
