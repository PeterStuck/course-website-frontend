import {combineReducers} from "redux";

import {categoryReducer} from "./categoryReducer";
import {subcategoryReducer} from "./subcategoryReducer";


export const rootReducer = combineReducers({
    categories: categoryReducer,
    subcategories: subcategoryReducer
})