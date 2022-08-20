import Layout from "../components/Layout";
import { useEffect } from "react";
import { useBlogServices } from "../hooks/useBlogServices";
import styles from "../styles/Blog.module.css";
import { dataMapping } from "../helpers/dataMapping";
const Blog = () => {
  const { isChanging, blogs, startGettingBlogs } = useBlogServices();
  useEffect(() => {
    startGettingBlogs("GET");
  }, [isChanging]);

  return (
    <Layout title="Blog">
      <main className="contenedor">
        <h1 className="heading"> Blog </h1>
        <div className={styles.blog}>{dataMapping(blogs, "blogs")}</div>
      </main>
    </Layout>
  );
};

export default Blog;
