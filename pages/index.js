import Layout from "../components/Layout";
import List from "../components/List";
import { useBlogServices } from "../hooks/useBlogServices";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIndexReq } from "../redux/actions/strapiActions";
import { useSelector } from "react-redux";
import { isLoadingState } from "../redux/actions/generalActions";
import Curso from "../components/Curso";
import { useState } from "react";

export default function Home() {
  const isChanging = useSelector((state) => state.isChanging);
  useEffect(() => {
    dispatch(getIndexReq());
  }, []);

  const dispatch = useDispatch();
  const indexContent = useSelector((state) => state.content);
  const { guitarra, cursos } = indexContent;

  return (
    <Layout title="Nosotros">
      <main className="contenedor">
        <h1 className="heading"> Nuestra Coleccion </h1>
        {isChanging === false && guitarra !== undefined ? (
          <>
            <List items={guitarra} />
          </>
        ) : (
          <p>is Loading....</p>
        )}
      </main>
      {isChanging === false && guitarra !== undefined ? (
        <>
          <Curso curso={cursos} />
        </>
      ) : null}
    </Layout>
  );
}
