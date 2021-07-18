import {addCategory} from "../actions/categoryActions";


const fetchMainCategories = async () => {
    const response = await fetch("http://localhost:8085/api/categories", {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }});
    return await response.json();
}

export const getAllMainCategories = () =>
    async (dispatch) => {
        const mainCategories = await fetchMainCategories();
        mainCategories.map(category => dispatch(addCategory(category)));
    }
