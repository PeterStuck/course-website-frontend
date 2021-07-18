import {addCategory} from "../../actions/navbar/categoryActions";

import {CATEGORY_RESOURCE_URLS} from "../../resourceUrls";


const fetchMainCategories = async () => {
    const response = await fetch(CATEGORY_RESOURCE_URLS.getMainCategoriesUrl, { method: 'GET' });
    return await response.json();
}

export const getAllMainCategories = () =>
    async (dispatch) => {
        const mainCategories = await fetchMainCategories();
        mainCategories.map(category => dispatch(addCategory(category)));
    }

