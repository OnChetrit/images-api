import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { imagesReducer } from "./reducer";

const store = createStore(imagesReducer, applyMiddleware(thunk));

export default store;
