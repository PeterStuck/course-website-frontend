export const ADD_CATEGORY = 'ADD_CATEGORY';
export const CLEAR_CATEGORIES = 'CLEAR_CATEGORIES';

export const addCategory = ({ id, name, parentId }) => ({
    type: ADD_CATEGORY,
    payload: {
        id,
        name,
        parentId
    }
})

export const clearCategories = () => ({
    type: CLEAR_CATEGORIES
})