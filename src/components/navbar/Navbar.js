import React from 'react';

import NavbarMobile from "./mobile/NavbarMobile";
import NavbarDesktop from "./desktop/NavbarDesktop";

const Navbar = () => {
    return (
        <header className="navbar">
            <nav className="navbar__menu">
                <NavbarMobile />
                <NavbarDesktop />
            </nav>
        </header>
    );
};

export default Navbar;
