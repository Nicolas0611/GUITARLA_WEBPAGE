import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../redux/actions/strapiActions";
import { useState } from "react";
import { isLoadingState } from "../redux/actions/generalActions";
export const useBlogServices = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.data);
  const isChanging = useSelector((state) => state.isChanging);
  //GET ALL USERS
  const startGettingBlogs = () => {
    dispatch(getBlogs("get"));
  };
  const changingState = () => {
    dispatch(isLoadingState(true));
  };
  return {
    //Properties
    blogs,
    isChanging,
    //Methods
    startGettingBlogs,
    changingState,
  };
};
