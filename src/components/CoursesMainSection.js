import React from 'react';

import MainSection from "./MainSection";
import Sidebar from "./courses/sidebar/Sidebar";

const CoursesMainSection = () => {
    return (
        <MainSection sectionClass="section--margin">
            <Sidebar />
            <div className="content__wrapper">

            </div>
        </MainSection>
    );
};

export default CoursesMainSection;
