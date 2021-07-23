import React from 'react';
import NavbarHamburgerMenu from "./NavbarHamburgerMenu";
import NavbarSearch from "./NavbarSearch";
import {urls} from "../../../urls";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import NavbarLinkTile from "../NavbarLinkTile";
import NavbarLogo from "../NavbarLogo";

const NavbarMobile = () => {
    return (
        <div className={"navbar__menu--mobile"}>
            <NavbarLogo />

            <NavbarHamburgerMenu />

            <NavbarSearch />

            <NavbarLinkTile
                path={urls.CART_PAGE.path}
                className="navbar__cart"
                content={<FontAwesomeIcon icon={faShoppingCart} />}
            />
        </div>
    );
};

export default NavbarMobile;
