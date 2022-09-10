import React from "react";
import { dataHeader } from "../lib/headerLib";
import { dataMapping } from "../helpers/dataMapping";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({ guitarra }) => {
  const router = useRouter();

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

        {guitarra && (
          <div className={styles.modelo}>
            <h1>Modelo {guitarra.nombre}</h1>
            <p> {guitarra.descripcion}</p>
            <p className={styles.precio}> ${guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.id}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <div className={styles.guitarra}>
          <Image
            layout="fixed"
            width={500}
            height={1200}
            className={styles.guitarra}
            src="/img/header_guitarra.png"
            alt="imagen header"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
