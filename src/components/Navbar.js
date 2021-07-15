import React from 'react';

import {BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import {Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { urls } from '../urls';

const Navbar = () => {
    return (
        <header>
            <Router>
                <nav className="navbar__menu">
                    <div className="navbar__logo">
                        <Link to={urls.HOME_PAGE.path}>
                            <img src="/logo.svg" alt="logo"/>
                        </Link>
                    </div>
                    <div className="navbar__categories">
                        Categories
                    </div>
                    <div className="navbar__searchbar">
                        <Form>
                            <div className="searchbar__input__wrapper">
                                <Form.Control type="text" placeholder="Search by title..." />
                                <button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </Form>
                    </div>
                    <div className="navbar__create_course">
                        <NavLink to={urls.CREATE_COURSE_PAGE.path}>
                            Create own course
                        </NavLink>
                    </div>
                    <div className="navbar__my_courses">
                        <NavLink to={urls.PURCHASED_COURSES_PAGE.path}>
                            My courses
                        </NavLink>
                    </div>
                    <div className="navbar__cart">
                        <NavLink to={urls.CART_PAGE.path}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </NavLink>
                    </div>
                    <div className="navbar__account">
                        <NavLink to={urls.ACCOUNT_EDIT_DETAILS_PATH.path}>
                            <div className="account__icon_wrapper">
                                PK
                            </div>
                        </NavLink>
                    </div>
                    <div className="navbar__login_register">
                        <div className="navbar__login">
                            Log in
                        </div>
                        <div className="navbar__register">
                            Sign up
                        </div>
                    </div>
                </nav>
            </Router>
        </header>
    );
};

export default Navbar;
