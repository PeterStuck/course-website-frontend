import React from 'react';
import NavbarCategories from "./NavbarCategories";
import NavbarSearchbar from "./NavbarSearchbar";
import NavbarLinkTile from "../NavbarLinkTile";
import {urls} from "../../../urls";
import NavbarLogo from "../NavbarLogo";
import NavbarLoginRegister from "../NavbarLoginRegister";

const NavbarDesktop = () => {
    return (
        <div className={"navbar__menu--desktop"}>
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

            <NavbarLoginRegister />
        </div>
    );
};

export default NavbarDesktop;
