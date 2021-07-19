import {addCategory} from "../../actions/navbar/categoryActions";

import {CATEGORY_RESOURCE_URLS} from "../../resourceUrls";
import {fetchItems} from "../fetchOperations";


export const getAllMainCategories = () =>
    async (dispatch) => {
        const mainCategories = await fetchItems(
            CATEGORY_RESOURCE_URLS.getMainCategoriesUrl,
            "No main categories."
        );
        mainCategories.map(category => dispatch(addCategory(category)));
    }

