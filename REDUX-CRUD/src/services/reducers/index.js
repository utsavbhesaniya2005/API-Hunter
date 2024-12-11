import { combineReducers } from "redux";
import AdminReducers from "./AdminReducers"
import CamelReducers from "./CamelReducers";

const rootReducer = combineReducers({
    AdminReducers,
    CamelReducers
})

export default rootReducer;