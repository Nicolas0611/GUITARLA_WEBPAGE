import {
  CLEAR_DATA,
  IS_LOADING_STATE,
  UI_MSG_FEEDBACK,
} from "../types/stateTypes";

export const isLoadingState = (state) => {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING_STATE,
      payload: state,
    });
  };
};

export const msgError = (msg) => {
  return (dispatch) => {
    dispatch({
      type: UI_MSG_FEEDBACK,
      payload: msg,
    });
  };
};
export const clearData = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_DATA,
    });
  };
};
