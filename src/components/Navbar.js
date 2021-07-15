import React from 'react';

import {BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import {Form} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { urls } from '../urls';
import '../styles/Navbar.scss';

const Navbar = () => {

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <header className="navbar">
            <Router>
                <nav className="navbar__menu">
                    <div className="navbar__logo">
                        <Link to={urls.HOME_PAGE.path}>
                            <img src="/logo.svg" alt="logo"/>
                        </Link>
                    </div>
                    <div className="navbar__categories">
                        <span>Categories <FontAwesomeIcon icon={faAngleDown} /></span>
                        <div className="categories__content">
                            <nav>
                                <ul>
                                    <li className="navbar__category">
                                        <span className="category__name">Kategoria 1</span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </li>
                                    <li className="navbar__category">
                                        <span className="category__name">Kategoria 1</span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </li>
                                    <li className="navbar__category">
                                        <span className="category__name">Kategoria 1</span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="navbar__searchbar">
                        <Form onSubmit={handleSearch}>
                            <div className="searchbar__input__wrapper">
                                <Form.Control type="text" placeholder="Search by title..." />
                                <button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </Form>
                    </div>
                    <NavLink to={urls.CREATE_COURSE_PAGE.path} className="navbar__create_course">
                        Create own course
                    </NavLink>
                    <NavLink to={urls.PURCHASED_COURSES_PAGE.path} className="navbar__my_courses">
                        My courses
                    </NavLink>
                    <NavLink to={urls.CART_PAGE.path} className="navbar__cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </NavLink>
                    <NavLink to={urls.ACCOUNT_EDIT_DETAILS_PATH.path} className="navbar__account hidden">
                        <div className="account__icon_wrapper">
                            PK
                        </div>
                    </NavLink>
                    <div className="navbar__login_register">
                        {/* Show modals here */}
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
