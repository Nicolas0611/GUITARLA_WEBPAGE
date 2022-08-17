import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dateReset } from "../helpers/dateReset";
import styles from "../styles/Entrada.module.css";
const Entrada = ({ title, resume, content, image, published, id }) => {
  return (
    <article>
      <Image
        priority="true"
        layout="responsive"
        width={800}
        height={600}
        src={image}
        alt={`imagen blog ${title}`}
      />
      <div className={styles.contenido}>
        <h1 className={styles.fecha}> {title} </h1>
        <p>{dateReset(published)} </p>
        <p> {resume}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.enlace}>Leer Entrada </a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
