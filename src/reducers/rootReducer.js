import {combineReducers} from "redux";

import {categoryReducer} from "./navbar/categoryReducer";
import {subcategoryReducer} from "./courses/sidebar/subcategoryReducer";
import {sidebarRatingFilterReducer} from "./courses/sidebar/sidebarRatingFilterReducer";
import {sidebarIsFreeFilterReducer} from "./courses/sidebar/sidebarIsFreeFilterReducer";
import {sidebarIsPaidFilterReducer} from "./courses/sidebar/sidebarIsPaidFilterReducer";
import {courseReducer} from "./courses/content/courseReducer";


export const rootReducer = combineReducers({
    /* Navbar */
    categories: categoryReducer,

    /* Sidebar */
    subcategories: subcategoryReducer,
    sidebarRatingFilter: sidebarRatingFilterReducer,
    sidebarIsFreeFilter: sidebarIsFreeFilterReducer,
    sidebarIsPaidFilter: sidebarIsPaidFilterReducer,

    /* Courses content */
    courses: courseReducer
})