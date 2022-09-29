import {
  GET_BLOG_ENTRIES,
  GET_ID,
  GET_SHOP_ITEMS,
  GET_INDEX,
  GET_QUANTITY,
  ADD_ITEMS,
  UPDATE_COUNT,
} from "../types/strapiTypes";
import {
  CLEAR_DATA,
  IS_LOADING_STATE,
  UI_MSG_FEEDBACK,
} from "../types/stateTypes";
const initialState = {
  data: [],
  isChanging: false,
  items: [],
  singleBlog: [],
  content: [],
  amount: 0,
  shoppingCar: [],
  msg: "",
};

export const strapiAPI = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_ENTRIES:
      return {
        ...state,
        data: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        singleBlog: action.payload,
      };
    case GET_SHOP_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_INDEX:
      return {
        ...state,
        content: action.payload,
      };
    case IS_LOADING_STATE:
      return {
        ...state,
        isChanging: action.payload,
      };
    case GET_QUANTITY:
      return {
        ...state,
        amount: action.payload,
      };
    case ADD_ITEMS:
      return {
        ...state,
        shoppingCar: action.payload,
      };
    case UI_MSG_FEEDBACK:
      return {
        ...state,
        msg: action.payload,
      };
    case UPDATE_COUNT:
      return {
        ...state,
        shoppingCar: action.payload,
      };
    case CLEAR_DATA:
      return {
        ...state,
        singleBlog: [],
      };
    default:
      return state;
  }
};
