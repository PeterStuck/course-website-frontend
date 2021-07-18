import {ADD_SUBCATEGORY, CLEAR_SUBCATEGORIES} from "../../actions/sidebar/subcategoryActions";


const addSubcategory = (state, payload) => {
    return [...state, payload];
}

const clearSubcategories = () => {
    return [];
}

export const subcategoryReducer = (state = [], action) => {
    const {payload, type} = action;

    switch(type) {
        case ADD_SUBCATEGORY:
            return addSubcategory(state, payload);
        case CLEAR_SUBCATEGORIES:
            return clearSubcategories();
        default:
            return state;
    }
}