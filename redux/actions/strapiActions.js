import axios from "axios";
import { GET_BLOG_ENTRIES } from "../types/strapiTypes";

let blogs = [];
export const getBlogs = (type, setState) => {
  return async (dispatch) => {
    let url = null;
    if (type === "get") {
      url = "http://localhost:1337/blogs";
    }
    await axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (type === "get") {
          blogs = responseData;
          dispatch(getBlogEntries(blogs));
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
