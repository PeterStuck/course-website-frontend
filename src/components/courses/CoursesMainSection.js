import React from 'react';

import MainSection from "../../layout/MainSection";
import Sidebar from "./sidebar/Sidebar";
import CoursesContent from "./content/CoursesContent";

const CoursesMainSection = () => {
    return (
        <MainSection sectionClass="section--margin">
            <Sidebar />
            <CoursesContent />
        </MainSection>
    );
};

export default CoursesMainSection;
