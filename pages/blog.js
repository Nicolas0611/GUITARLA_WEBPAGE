import Layout from "../components/Layout";
import { useEffect } from "react";
import { useBlogServices } from "../hooks/useBlogServices";
const Blog = () => {
  const { blogs, isChanging, startGettingBlogs } = useBlogServices();
  useEffect(() => {
    startGettingBlogs();
  }, [isChanging]);

  return (
    <Layout title="Blog">
      <h1 className="heading"> Desde blog </h1>
    </Layout>
  );
};

export default Blog;
