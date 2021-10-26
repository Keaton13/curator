import { combineReducers } from "redux";
import coinMarketCapReducer from "./coinMarketCapReducer";

export default combineReducers({
    coinMarketCap: coinMarketCapReducer 
});