import Layout from "../components/Layout";
import { useEffect } from "react";
import { useBlogServices } from "../hooks/useBlogServices";
import styles from "../styles/Blog.module.css";
import { dataMapping } from "../helpers/dataMapping";
import { useRouter } from "next/router";

const Blog = () => {
  const { blogs, startGettingBlogs } = useBlogServices();
  const router = useRouter();
  useEffect(() => {
    console.log(router);
    if (blogs.length === 0) {
      startGettingBlogs("GET");
    }
  }, []);

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
