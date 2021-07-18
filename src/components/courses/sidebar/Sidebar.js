import React from 'react';

import RatingOptions from "./RatingOptions";
import SidebarOption from "./SidebarOption";
import PaidOptions from "./PaidOptions";
import SubcategoriesList from "./SubcategoriesList";

import '../../../styles/courses/sidebar/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar_filter_options">
                <SidebarOption optionTitle={"Subcategory"}>
                    <SubcategoriesList />
                </SidebarOption>

                <SidebarOption optionTitle={"Ratings"}>
                    <RatingOptions />
                </SidebarOption>

                <SidebarOption optionTitle={"Price"}>
                    <PaidOptions />
                </SidebarOption>
        </div>
    );
};

export default Sidebar;
