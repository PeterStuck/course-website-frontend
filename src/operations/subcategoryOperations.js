import {CATEGORY_RESOURCE_URLS} from "../resourceUrls";

import {addSubcategory, clearSubcategories} from "../actions/subcategoryActions";

export const getAllSubcategories = (categoryId) =>
    async (dispatch) => {
        const {getSubcategoriesUrl} = CATEGORY_RESOURCE_URLS;
        fetch(getSubcategoriesUrl + categoryId, { method: 'GET' })
            .then(response => {
                if (response.status === 204) {
                    dispatch(clearSubcategories());
                    return Promise.reject("No subcategories.");
                }
                return response;
            })
            .then(response => response.json())
            .then(data => data.map(subcategory => dispatch(addSubcategory(subcategory))))
            .catch(error => console.log(error));
    }