import React from 'react';
import {Link} from "react-router-dom";

import {urls} from "../../urls";
import "../../styles/navbar/NavbarLogo.scss";

const NavbarLogo = () => {
    return (
        <div className="navbar__logo">
            <Link to={urls.HOME_PAGE.path}>
                <img src="/logo.svg" alt="logo"/>
            </Link>
        </div>
    );
};

export default NavbarLogo;
