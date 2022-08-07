import React from "react";
import { dataHeader } from "../lib/headerLib";
import { dataMapping } from "../helpers/dataMapping";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Image
            width={400}
            height={180}
            src="/img/logo.svg"
            alt="Imagen logo"
          />

          <nav className={styles.navegacion}>
            {dataMapping(dataHeader, "link")}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
