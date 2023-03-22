import { combineReducers } from "redux";
import { showHeroes } from "../heroes";

const rootReducer = combineReducers({
    user: showHeroes
})

export default rootReducer