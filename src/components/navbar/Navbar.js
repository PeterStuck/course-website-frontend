import React from 'react';

import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import {urls} from '../../urls';
import '../../styles/navbar/Navbar.scss';
import NavbarCategories from "./NavbarCategories";
import NavbarLogo from "./NavbarLogo";
import NavbarSearchbar from "./NavbarSearchbar";
import NavbarLoginRegister from "./NavbarLoginRegister";
import NavbarLinkTile from "./NavbarLinkTile";

const Navbar = () => {

    return (
        <header className="navbar">
            <Router>
                <nav className="navbar__menu">
                    <NavbarLogo />

                    <NavbarCategories />

                    <NavbarSearchbar />

                    <NavbarLinkTile
                        path={urls.CREATE_COURSE_PAGE.path}
                        className="navbar__create_course"
                        content="Create own course"
                    />

                    <NavbarLinkTile
                        path={urls.PURCHASED_COURSES_PAGE.path}
                        className="navbar__my_courses"
                        content="My courses"
                    />

                    <NavbarLinkTile
                        path={urls.CART_PAGE.path}
                        className="navbar__cart"
                        content={<FontAwesomeIcon icon={faShoppingCart} />}
                    />

                    <NavLink to={urls.ACCOUNT_EDIT_DETAILS_PATH.path} className="navbar__account hidden">
                        <div className="account__icon_wrapper">
                            PK
                        </div>
                    </NavLink>

                    <NavbarLoginRegister />
                </nav>
            </Router>
        </header>
    );
};

export default Navbar;
