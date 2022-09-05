import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../redux/actions/strapiActions";
import { isLoadingState } from "../redux/actions/generalActions";

export const useBlogServices = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.data);
  const items = useSelector((state) => state.items);
  const singleBlog = useSelector((state) => state.singleBlog);
  const isChanging = useSelector((state) => state.isChanging);

  const startGettingBlogs = (type, id = "") => {
    switch (type) {
      case "GET":
        dispatch(getBlogs("blogs", "GET"));
        break;
      case "GET_ID":
        dispatch(getBlogs("blogs", "GET_ID", id));
        break;
      case "GET_SHOP":
        dispatch(getBlogs("guitarras", "GET_SHOP"));
        break;
      case "GET_SHOP_ID":
        dispatch(getBlogs("guitarras", "GET_ID", id));
        break;
      case "GET_INDEX":
        dispatch(getBlogs("cursos", "GET_INDEX"));
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
    items,
    //Methods
    startGettingBlogs,
    changingState,
  };
};
