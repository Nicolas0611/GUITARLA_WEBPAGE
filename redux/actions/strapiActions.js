import axios from "axios";
import { urlsLib } from "../../lib/urlsLib";
import { GET_BLOG_ENTRIES, GET_BLOG_ID } from "../types/strapiTypes";
let blogs = [];

export const getBlogs = (type, id = " ") => {
  return async (dispatch) => {
    let url;
    url = urlsLib(type, id);
    await axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        blogs = responseData;
        switch (type) {
          case "GET":
            dispatch(getBlogEntries(blogs));
            break;
          case "GET_ID":
            dispatch(getBlogEntry(blogs));
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

export const getBlogEntry = (blog) => {
  return (dispatch) => {
    dispatch({
      type: GET_BLOG_ID,
      payload: blog,
    });
  };
};
