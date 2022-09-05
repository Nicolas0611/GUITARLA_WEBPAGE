import React from "react";
import Guitar from "./Guitar";
import styles from "../styles/Listado.module.css";
const List = ({ items }) => {
  return (
    <div className={styles.listado}>
      {items.map((guitar) => (
        <Guitar key={guitar.id} guitar={guitar} />
      ))}
    </div>
  );
};

export default List;
