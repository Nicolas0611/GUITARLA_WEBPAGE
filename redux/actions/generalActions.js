import { IS_LOADING_STATE } from "../types/stateTypes";

export const isLoadingState = (state) => {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING_STATE,
      payload: state,
    });
  };
};
