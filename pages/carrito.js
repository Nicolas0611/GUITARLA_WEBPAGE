import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateItemsCount } from "../redux/actions/strapiActions";
import Image from "next/image";
import { optionsDropdown } from "../lib/headerLib";

const carrito = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingCar);
  const updateQuantity = (product) => {
    const updatedCar = items.map((article) => {
      if (article.id === product.id) {
        article.itemCar = Number(product.counter);
      }
      return article;
    });
    dispatch(updateItemsCount(updatedCar));
  };
  const handleChange = (e, producto) => {
    e.preventDefault();

    //Update counter of items
    updateQuantity({
      counter: e.target.value,
      id: producto.id,
    });
  };
  const deleteProduct = (id) => {
    const shoppingCar = items.filter((item) => item.id !== id);
    dispatch(updateItemsCount(shoppingCar));
  };
  return (
    <Layout title={"Carrito de compras"}>
      <h1 className="heading"> Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {items.length === 0
            ? "Carrito vacio"
            : items.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={480}
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div>
                      <p className={styles.cantidad}>
                        Cantidad: {producto.itemCar}
                      </p>
                      <select
                        className={styles.select}
                        onChange={(e) => {
                          handleChange(e, producto);
                        }}
                      >
                        {optionsDropdown.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $<span>{producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal:{" "}
                      <span>${producto.precio * producto.itemCar}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      deleteProduct(producto.id);
                    }}
                    type="button"
                    className={styles.eliminar}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default carrito;
