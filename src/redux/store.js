import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
//
const initalState = {};

export const store = createStore(
    reducers,
    initalState,
    applyMiddleware(thunk)
)

