export const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';
export const CLEAR_SUBCATEGORIES = 'CLEAR_SUBCATEGORIES';

export const addSubcategory = ({ id, name, parentId }) => ({
    type: ADD_SUBCATEGORY,
    payload: {
        id,
        name,
        parentId
    }
})

export const clearSubcategories = () => ({
    type: CLEAR_SUBCATEGORIES
})