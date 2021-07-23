import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import {urls} from "../../urls";

import {Link} from "react-router-dom";

const NavbarCategory = ({category}) => {
    const categoryUrl = urls.COURSE_CATEGORY_PAGE.path + category.id;

    return (
        <Link to={categoryUrl}>
            <li className="navbar__category">
                <span className="category__name">{category.name}</span>
                <FontAwesomeIcon icon={faAngleRight} />
            </li>
        </Link>
    );
};

export default NavbarCategory;
