import {combineReducers} from "redux";

import {categoryReducer} from "./categoryReducer";


export const rootReducer = combineReducers({
    categories: categoryReducer
})