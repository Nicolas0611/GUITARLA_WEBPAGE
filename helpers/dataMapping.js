import Link from "next/link";
import Entrada from "../components/Entrada";
export const dataMapping = (data, label) => {
  let components = null;

  switch (label) {
    case "link":
      components = data.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.label}
        </Link>
      ));
      break;
    case "blogs":
      components = data.map((blog, index) => (
        <Entrada
          key={index}
          title={blog.titulo}
          resume={blog.resumen}
          content={blog.contenido}
          image={blog.imagen.url}
          published={blog.published_at}
          id={blog.id}
        />
      ));
      break;
    default:
      break;
  }

  return components;
};
