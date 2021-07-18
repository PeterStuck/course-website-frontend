import {combineReducers} from "redux";

import {categoryReducer} from "./navbar/categoryReducer";
import {subcategoryReducer} from "./sidebar/subcategoryReducer";
import {sidebarRatingFilterReducer} from "./sidebar/sidebarRatingFilterReducer";
import {sidebarIsFreeFilterReducer} from "./sidebar/sidebarIsFreeFilterReducer";
import {sidebarIsPaidFilterReducer} from "./sidebar/sidebarIsPaidFilterReducer";


export const rootReducer = combineReducers({
    categories: categoryReducer,
    subcategories: subcategoryReducer,

    /* Sidebar course filters */
    sidebarRatingFilter: sidebarRatingFilterReducer,
    sidebarIsFreeFilter: sidebarIsFreeFilterReducer,
    sidebarIsPaidFilter: sidebarIsPaidFilterReducer
})