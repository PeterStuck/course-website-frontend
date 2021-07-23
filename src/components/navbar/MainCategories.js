import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import NavbarCategory from "./NavbarCategory";

import {clearCategories} from "../../actions/navbar/categoryActions";
import {getAllMainCategories} from "../../operations/navbar/categoryOperations"

const MainCategories = () => {
    const categories = useSelector(store => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCategories());
        dispatch(getAllMainCategories());
    }, [])

    const categoryElements = categories.map(category =>
        <NavbarCategory key={category.id} category={category} />
    );

    return (
        <nav>
            <ul>
                {categoryElements}
            </ul>
        </nav>
    );
};

export default MainCategories;
