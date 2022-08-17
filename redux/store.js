import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { strapiAPI } from "./reducer/strapiReducer";
import { createWrapper } from "next-redux-wrapper";
export default createStore(
  strapiAPI,
  composeWithDevTools(applyMiddleware(thunk))
);
// export an assembled wrapper
export const wrapper = createWrapper({ debug: true });
