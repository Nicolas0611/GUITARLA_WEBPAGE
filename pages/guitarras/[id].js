import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
import { useRouter } from "next/router";
import { useBlogServices } from "../../hooks/useBlogServices";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addItemsCar } from "../../redux/actions/strapiActions";

const EntradaGuitarra = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { singleBlog, itemCar, startGettingBlogs, getQuantity } =
    useBlogServices();
  const { id, nombre, descripcion, imagen, precio } = singleBlog;

  useEffect(() => {
    if (router.query.id !== undefined) {
      startGettingBlogs("GET_SHOP_ID", router.query.id);
    }
  }, [router.query.id]);

  const handleDropdownChange = (e) => {
    e.preventDefault();
    getQuantity(e.target.value);
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (itemCar > 0) {
      const guitarSelected = {
        id,
        imagen: imagen.url,
        nombre,
        precio,
        itemCar,
      };
      dispatch(addItemsCar(guitarSelected));
    }
  };
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

              <form
                className={styles.formulario}
                onChange={(e) => {
                  handleDropdownChange(e);
                }}
                onSubmit={handleSubmitBtn}
              >
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
