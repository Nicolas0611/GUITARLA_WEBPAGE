import { GET_BLOG_ENTRIES } from "../types/strapiTypes";
import { IS_LOADING_STATE } from "../types/stateTypes";
const initialState = {
  data: [],
  isChanging: false,
};

export const strapiAPI = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_ENTRIES:
      return {
        ...state,
        data: action.payload,
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
