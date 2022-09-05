import React from "react";
import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  return (
    <section className={styles.curso}>
      <div className="contenedor">
        <div>
          <h2>{titulo}</h2>
          <p>{contenido}</p>
          <a href="#"> Màs Informaciòn</a>
        </div>
      </div>
    </section>
  );
};

export default Curso;
