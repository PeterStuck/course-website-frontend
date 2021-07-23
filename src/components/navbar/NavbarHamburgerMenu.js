import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import {Drawer} from "@material-ui/core";

import MainCategories from "./MainCategories";
import SideMenuSection from "./mobile/SideMenuSection";
import NavbarLinkTile from "./NavbarLinkTile";

import {urls} from "../../urls";

const NavbarHamburgerMenu = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    const toggleShow = () => setShow(!show);

    const closeSideMenu = () => setShow(false);

    useEffect(() => {
        closeSideMenu();
    }, [location]);

    return (
        <div className="navbar__hamburger">
            <MenuIcon onClick={toggleShow} />
            <Drawer className={'side_menu'} anchor={'left'} open={show} onClose={toggleShow}>
                <div className="side_menu__wrapper">
                    <div className="side_menu__account"></div>

                    <SideMenuSection>
                        <NavbarLinkTile
                            path={urls.PURCHASED_COURSES_PAGE.path}
                            className="side_menu__my_courses"
                            content="My courses"
                        />
                    </SideMenuSection>

                    <SideMenuSection title={'Categories'}>
                        <div className="side_menu__categories">
                            <MainCategories />
                        </div>
                    </SideMenuSection>

                    <SideMenuSection>
                        <NavbarLinkTile
                            path={urls.CREATE_COURSE_PAGE.path}
                            className="side_menu__create_course"
                            content="Create own course"
                        />
                    </SideMenuSection>
                </div>
            </Drawer>
        </div>
    );
};

export default NavbarHamburgerMenu;
