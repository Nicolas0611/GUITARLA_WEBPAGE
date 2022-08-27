import axios from "axios";
import { urlsLib } from "../../lib/urlsLib";
import {
  GET_BLOG_ENTRIES,
  GET_BLOG_ID,
  GET_SHOP_ITEMS,
} from "../types/strapiTypes";
let items = [];

export const getBlogs = (category, type, id = " ") => {
  return async (dispatch) => {
    let url;
    url = urlsLib(category, type, id);
    await axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        items = responseData;
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
          default:
            break;
        }
      })
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
      type: GET_BLOG_ID,
      payload: blog,
    });
  };
};
