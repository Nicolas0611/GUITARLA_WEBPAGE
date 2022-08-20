import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useBlogServices } from "../../hooks/useBlogServices";
import { dateReset } from "../../helpers/dateReset";
import { useEffect } from "react";
import Image from "next/image";

const EntradaBlog = () => {
  const router = useRouter();

  const { singleBlog, startGettingBlogs } = useBlogServices();
  useEffect(() => {
    console.log(router.query.id);
    if (router.query.id !== undefined) {
      startGettingBlogs("GET_ID", router.query.id);
    }
  }, [router.query.id]);
  const { titulo, imagen, published_at, contenido } = singleBlog;
  return (
    <Layout title="Bloger">
      <main className="contenedor">
        <h1 className="heading"> {titulo} </h1>
        <article>
          {imagen ? (
            <>
              <Image
                layout="responsive"
                width={800}
                height={600}
                src={imagen.url}
                alt={`Imagen entrada ${titulo}`}
              />
              <div>
                {" "}
                <p>{dateReset(published_at)}</p>
                <p> {contenido}</p>
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
