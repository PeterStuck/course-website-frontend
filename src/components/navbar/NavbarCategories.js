import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

import MainCategories from "./MainCategories";

const NavbarCategories = () => {
   return (
        <div className="navbar__categories">
            <span>Categories <FontAwesomeIcon icon={faAngleDown} /></span>
            <div className="categories__content">
                <MainCategories />
            </div>
        </div>
    );
};

export default NavbarCategories;
