import React from 'react';
import {NavLink} from "react-router-dom";

const NavbarLinkTile = ({path, className, content}) => {
    return (
        <NavLink to={path} className={className}>
            {content}
        </NavLink>
    );
};

export default NavbarLinkTile;
