import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

import NavbarCategory from "./NavbarCategory";

import '../../styles/navbar/NavbarCategories.scss';

const NavbarCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategoriesData();
    }, [])

    const fetchCategoriesData = () => {
        fetch("http://localhost:8085/api/categories", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json())
            .then(data => setCategories(data));
    }

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
