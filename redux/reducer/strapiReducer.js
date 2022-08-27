import {
  GET_BLOG_ENTRIES,
  GET_BLOG_ID,
  GET_SHOP_ITEMS,
} from "../types/strapiTypes";
import { IS_LOADING_STATE } from "../types/stateTypes";
const initialState = {
  data: [],
  isChanging: false,
  items: [],
  singleBlog: [],
};

export const strapiAPI = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_ENTRIES:
      return {
        ...state,
        data: action.payload,
      };
    case GET_BLOG_ID:
      return {
        ...state,
        singleBlog: action.payload,
      };
    case GET_SHOP_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case IS_LOADING_STATE:
      return {
        ...state,
        isChanging: action.payload,
      };
    default:
      return state;
  }
};
