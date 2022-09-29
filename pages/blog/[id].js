import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useBlogServices } from "../../hooks/useBlogServices";
import { dateReset } from "../../helpers/dateReset";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Entrada.module.css";
import { useDispatch } from "react-redux";
import { clearData } from "../../redux/actions/generalActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const EntradaBlog = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { singleBlog, startGettingBlogs } = useBlogServices();
  const { titulo, imagen, published_at, contenido } = singleBlog;

  useEffect(() => {
    if (router.query.id !== undefined) {
      startGettingBlogs("GET_ID", router.query.id);
    }
  }, [router.query]);

  return (
    <Layout title="Bloger">
      <main className="contenedor">
        <div className={styles.headerContainer}>
          <div
            onClick={() => {
              dispatch(clearData());
            }}
            className={styles.buttonBack}
          >
            <Link href={`/blog`}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
          <h1 className="heading"> {titulo} </h1>
        </div>
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
