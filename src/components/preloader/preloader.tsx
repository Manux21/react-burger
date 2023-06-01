import React from "react";
import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.Preloader}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Preloader;