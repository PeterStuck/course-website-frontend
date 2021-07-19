import React from 'react';

import MainSection from "../../layout/MainSection";
import Sidebar from "./sidebar/Sidebar";
import CourseContent from "./content/CourseContent";

const CoursesMainSection = () => {
    return (
        <MainSection sectionClass="section--margin">
            <Sidebar />
            <CourseContent />
        </MainSection>
    );
};

export default CoursesMainSection;
