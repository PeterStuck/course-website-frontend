import {ADD_CATEGORY, CLEAR_CATEGORIES} from "../actions/categoryActions";

const addCategory = (state, payload) => {
    return [...state, payload];
}

const clearCategories = (state, payload) => {
    state.length = 0;
    return state;
}

export const categoryReducer = (state = [], action) => {
    const {payload, type} = action;

    switch(type) {
        case ADD_CATEGORY:
            return addCategory(state, payload);
        case CLEAR_CATEGORIES:
            return clearCategories(state, payload);
        default:
            return state;
    }
}