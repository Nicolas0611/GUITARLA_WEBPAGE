import Layout from "../components/Layout";
import List from "../components/List";
import { useBlogServices } from "../hooks/useBlogServices";
import { useEffect } from "react";

const Tienda = () => {
  const { startGettingBlogs, items } = useBlogServices();
  useEffect(() => {
    startGettingBlogs("GET_SHOP");
  }, []);

  return (
    <Layout title="Tienda Virtual">
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>

        <List items={items} />
      </main>
    </Layout>
  );
};

export default Tienda;
