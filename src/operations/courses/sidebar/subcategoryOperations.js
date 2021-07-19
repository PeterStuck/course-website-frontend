import {CATEGORY_RESOURCE_URLS} from "../../../resourceUrls";

import {addSubcategory, clearSubcategories} from "../../../actions/courses/sidebar/subcategoryActions";
import {fetchItems} from "../../fetchOperations";

export const getAllSubcategories = (categoryId) =>
    async (dispatch) => {
        const subcategories = await fetchItems(
            CATEGORY_RESOURCE_URLS.getSubcategoriesUrl + categoryId,
            ""
        );
        subcategories.map(subcategory => dispatch(addSubcategory(subcategory)));
    }