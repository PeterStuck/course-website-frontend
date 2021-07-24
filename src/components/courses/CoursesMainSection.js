import React from 'react';

import MainSection from "../../layout/MainSection";
import Sidebar from "./sidebar/Sidebar";
import CourseContent from "./content/CourseContent";
import CourseFilters from "./sidebar/mobile/CourseFilters";

const CoursesMainSection = () => {
    return (
        <MainSection sectionClass="section--margin">
            <CourseFilters />
            <Sidebar />
            <CourseContent />
        </MainSection>
    );
};

export default CoursesMainSection;
