import axios from "axios";
import { urlsLib } from "../../lib/urlsLib";
import {
  GET_BLOG_ENTRIES,
  GET_ID,
  GET_SHOP_ITEMS,
  GET_INDEX,
} from "../types/strapiTypes";
import { isLoadingState } from "./generalActions";
let items = [];

export const getBlogs = (category, type, id = " ") => {
  return async (dispatch) => {
    let url;
    url = urlsLib(category, type, id);
    await axios
      .get(url)
      .then((response) => {
        items = response.data;
        switch (type) {
          case "GET":
            dispatch(getBlogEntries(items));
            break;
          case "GET_ID":
            dispatch(getBlogEntry(items));
            break;
          case "GET_SHOP":
            dispatch(getShopItems(items));
            break;
          case "GET_INDEX":
            dispatch(getIndexContent(items));
            break;
          default:
            break;
        }
      })
      .catch(() => {
        console.log("Error Data");
      });
  };
};
export const getIndexReq = () => {
  return async (dispatch) => {
    let endpoints = [
      `${process.env.NEXT_PUBLIC_API_URL}/guitarras`,
      `${process.env.NEXT_PUBLIC_API_URL}/cursos`,
    ];

    await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread(({ data: guitarra }, { data: cursos }) => {
          dispatch(getIndexContent({ guitarra, cursos }));
        })
      )
      .catch(() => {
        console.log("Error Data");
      });
  };
};
export const getBlogEntries = (blogs) => {
  return (dispatch) => {
    dispatch({
      type: GET_BLOG_ENTRIES,
      payload: blogs,
    });
  };
};
export const getShopItems = (items) => {
  return (dispatch) => {
    dispatch({
      type: GET_SHOP_ITEMS,
      payload: items,
    });
  };
};
export const getBlogEntry = (blog) => {
  return (dispatch) => {
    dispatch({
      type: GET_ID,
      payload: blog,
    });
  };
};
export const getIndexContent = (content) => {
  return (dispatch) => {
    dispatch({
      type: GET_INDEX,
      payload: content,
    });
  };
};
