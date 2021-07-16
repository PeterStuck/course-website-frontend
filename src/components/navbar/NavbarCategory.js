import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import '../../styles/navbar/NavbarCategory.scss';

const NavbarCategory = ({category}) => {
    return (
        <li className="navbar__category">
            <span className="category__name">{category.name}</span>
            <FontAwesomeIcon icon={faAngleRight} />
        </li>
    );
};

export default NavbarCategory;
