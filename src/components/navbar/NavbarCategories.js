import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

import NavbarCategory from "./NavbarCategory";

import {getAllMainCategories} from "../../operations/categoryOperations";
import {clearCategories} from "../../actions/categoryActions";

import '../../styles/navbar/NavbarCategories.scss';

const NavbarCategories = () => {
    const categories = useSelector(store => store.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCategories());
        dispatch(getAllMainCategories());
    }, [])

    const categoryElements = categories.map(category => <NavbarCategory key={category.id} category={category} />);

    return (
        <div className="navbar__categories">
            <span>Categories <FontAwesomeIcon icon={faAngleDown} /></span>
            <div className="categories__content">
                <nav>
                    <ul>
                        {categoryElements}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavbarCategories;
