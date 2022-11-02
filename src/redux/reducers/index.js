import { combineReducers } from "redux";
import coinMarketCapReducer from "./coinMarketCapReducer";
import web3Reducer from "./web3Reducers";
import whaleAlertReducer from "./whaleAlertReducer";

export default combineReducers({
    coinMarketCap: coinMarketCapReducer,
    web3Reducer: web3Reducer,
    whaleReducer: whaleAlertReducer
});