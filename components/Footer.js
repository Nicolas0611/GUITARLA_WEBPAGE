import { dataHeader } from "../lib/headerLib";
import { dataMapping } from "../helpers/dataMapping";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          {dataMapping(dataHeader, "link")}
        </nav>
        <p className={styles.copyright}> Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
