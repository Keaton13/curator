import { createStore } from "redux";
import reducers from "./reducers";
import rootReducer from './reducers';


export const store = createStore(
    reducers,
    {}
)

