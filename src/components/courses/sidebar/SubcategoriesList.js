import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import CategoriesList from "../../generic/CategoriesList";

import {clearSubcategories} from "../../../actions/courses/sidebar/subcategoryActions";
import {getAllSubcategories} from "../../../operations/courses/sidebar/subcategoryOperations";

const SubcategoriesList = () => {
    const subcategories = useSelector(store => store.subcategories);
    const dispatch = useDispatch();

    const {categoryId} = useParams();

    useEffect(() => {
        dispatch(clearSubcategories());
        dispatch(getAllSubcategories(categoryId));
    }, [categoryId])

    const subcategoryComponent = (
        (subcategories.length > 0) ? <CategoriesList
            categories={subcategories}
            categoriesClass={"option__subcategories"}
            categoryClass={"option__subcategory"}
        /> : 'Nothing to show.');

    return (
        <>
            {subcategoryComponent}
        </>
    );
};

export default SubcategoriesList;
