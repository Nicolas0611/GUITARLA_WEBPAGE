import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../redux/actions/strapiActions";
import { useState } from "react";
import { isLoadingState } from "../redux/actions/generalActions";
export const useBlogServices = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.data);
  const singleBlog = useSelector((state) => state.singleBlog);
  const isChanging = useSelector((state) => state.isChanging);

  const startGettingBlogs = (type, id = "") => {
    switch (type) {
      case "GET":
        dispatch(getBlogs("GET"));
        break;
      case "GET_ID":
        dispatch(getBlogs("GET_ID", id));
        break;
      default:
        break;
    }
  };

  const changingState = () => {
    dispatch(isLoadingState(true));
  };

  return {
    //Properties
    blogs,
    isChanging,
    singleBlog,
    //Methods
    startGettingBlogs,
    changingState,
  };
};
