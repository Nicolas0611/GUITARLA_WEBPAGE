import axios from "axios";
import { urlsLib } from "../../lib/urlsLib";
import {
  GET_BLOG_ENTRIES,
  GET_ID,
  GET_SHOP_ITEMS,
  GET_INDEX,
  GET_QUANTITY,
  ADD_ITEMS,
} from "../types/strapiTypes";
import { isLoadingState } from "./generalActions";

let items = [];
let shoppingList = [];

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
export const getIndexReq = (data) => {
  return async (dispatch) => {
    let endpoints = [
      `${process.env.NEXT_PUBLIC_API_URL}/guitarras`,
      `${process.env.NEXT_PUBLIC_API_URL}/cursos`,
      `${process.env.NEXT_PUBLIC_API_URL}/blogs?_limit=${data}`,
    ];

    await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread(
          ({ data: guitarra }, { data: cursos }, { data: blogs }) => {
            dispatch(getIndexContent({ guitarra, cursos, blogs }));
          }
        )
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
export const getAmount = (amount) => {
  let count;
  if (typeof amount === "string") {
    count = Number(amount);
  }
  return (dispatch) => {
    dispatch({
      type: GET_QUANTITY,
      payload: count,
    });
  };
};
export const addItemsCar = (item) => {
  if (shoppingList.some((shopItem) => shopItem.id === item.id)) {
    console.log("ptoducto duplicado");
  } else {
    shoppingList.push(item);
  }

  return (dispatch) => {
    dispatch({
      type: ADD_ITEMS,
      payload: shoppingList,
    });
  };
};
