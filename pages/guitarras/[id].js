import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
import { useRouter } from "next/router";
import { useBlogServices } from "../../hooks/useBlogServices";
import { useEffect } from "react";

const EntradaGuitarra = () => {
  const router = useRouter();
  const { singleBlog, startGettingBlogs } = useBlogServices();
  useEffect(() => {
    console.log(singleBlog);
    if (router.query.id !== undefined) {
      startGettingBlogs("GET_SHOP_ID", router.query.id);
    }
  }, [router.query.id]);
  const { nombre, descripcion, imagen, precio } = singleBlog;
  return (
    <Layout title={nombre}>
      <div className={styles.guitarra}>
        {imagen ? (
          <>
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

              <form className={styles.formulario}>
                <label>Cantidad:</label>
                <select>
                  <option value="">--Seleccione--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>

                <input type="submit" value="agregar a carrito" />
              </form>
            </div>
          </>
        ) : (
          <div> is Loading ...</div>
        )}
      </div>
    </Layout>
  );
};

export default EntradaGuitarra;
