import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { strapiAPI } from "./reducer/strapiReducer";

export default createStore(
  strapiAPI,
  composeWithDevTools(applyMiddleware(thunk))
);
