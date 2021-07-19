import React from 'react';

import CourseList from "./CourseList";

import '../../../styles/courses/content/CourseContent.scss';

const CourseContent = () => {
    return (
        <div className="content__wrapper">
            <CourseList />
        </div>
    );
};

export default CourseContent;
