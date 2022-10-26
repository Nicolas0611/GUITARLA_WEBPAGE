import Layout from "../components/Layout";
import List from "../components/List";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getIndexReq } from "../redux/actions/strapiActions";
import { useSelector } from "react-redux";
import Curso from "../components/Curso";
import styles from "../styles/Curso.module.css";
import { dataMapping } from "../helpers/dataMapping";

export default function Home() {
  const dispatch = useDispatch();
  const isChanging = useSelector((state) => state.isChanging);
  const indexContent = useSelector((state) => state.content);
  const { guitarra, cursos, blogs } = indexContent;
  const [quantity, setQuantity] = useState(3);
  useEffect(() => {
    if (indexContent.length === 0 || quantity > 3) {
      dispatch(getIndexReq(quantity));
    }
  }, [quantity]);

  const moreEntries = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      {isChanging === false && guitarra !== undefined ? (
        <Layout title="Nosotros" guitarra={guitarra[3]}>
          <main className="contenedor">
            <h1 className="heading"> Nuestra Coleccion </h1>

            <List items={guitarra} />
          </main>

          <Curso curso={cursos} />

          <main className="contenedor">
            <h1 className="heading"> Blog </h1>
            <div className="blog">{dataMapping(blogs, "blogs")}</div>
            <button onClick={moreEntries} className={styles.enlace}>
              Màs Entradas
            </button>
          </main>
        </Layout>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
}
