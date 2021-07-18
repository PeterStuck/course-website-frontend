import {combineReducers} from "redux";

import {categoryReducer} from "./categoryReducer";
import {subcategoryReducer} from "./subcategoryReducer";
import {sidebarFilterReducer} from "./sidebarFilterReducer";
import {sidebarIsFreeFilterReducer} from "./sidebarFilters/sidebarIsFreeFilterReducer";
import {sidebarIsPaidFilterReducer} from "./sidebarFilters/sidebarIsPaidFilterReducer";


export const rootReducer = combineReducers({
    categories: categoryReducer,
    subcategories: subcategoryReducer,
    sidebarFilters: sidebarFilterReducer,
    sidebarIsFreeFilter: sidebarIsFreeFilterReducer,
    sidebarIsPaidFilter: sidebarIsPaidFilterReducer
})