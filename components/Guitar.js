import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitarra.module.css";
const Guitar = ({ guitar }) => {
  const { descripcion, imagen, nombre, precio, id } = guitar;
  return (
    <div className={styles.guitarra}>
      <Image
        layout="responsive"
        width={150}
        height={350}
        src={imagen.url}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`guitarras/${id}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
