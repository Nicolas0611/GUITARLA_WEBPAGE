import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useBlogServices } from "../../hooks/useBlogServices";
import { dateReset } from "../../helpers/dateReset";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = () => {
  const router = useRouter();

  const { singleBlog, startGettingBlogs } = useBlogServices();
  const { titulo, imagen, published_at, contenido } = singleBlog;
  useEffect(() => {
    console.log(router.query.id);
    if (router.query.id !== undefined) {
      startGettingBlogs("GET_ID", router.query.id);
    }
  }, [router.query.id]);

  return (
    <Layout title="Bloger">
      <main className="contenedor">
        <h1 className="heading"> {titulo} </h1>
        <article className={styles.entrada}>
          {imagen ? (
            <>
              <Image
                layout="responsive"
                width={800}
                height={600}
                src={imagen.url}
                alt={`Imagen entrada ${titulo}`}
              />
              <div className={styles.contenido}>
                {" "}
                <p className={styles.fecha}>{dateReset(published_at)}</p>
                <p className={styles.texto}> {contenido}</p>
              </div>
            </>
          ) : (
            <div> Is loading ..</div>
          )}
        </article>
      </main>
    </Layout>
  );
};

export default EntradaBlog;
