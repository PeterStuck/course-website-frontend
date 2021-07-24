import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Course from "./Course";

import {removeAllCourses} from "../../../actions/courses/content/courseActions";
import {getCoursesByCategoryId} from "../../../operations/courses/content/courseOperations";

const CourseList = () => {
    const {categoryId} = useParams();
    const courses = useSelector(store => store.courses);
    const dispatch = useDispatch();

    const noCoursesFoundInfo = 'No courses found for this category.';

    useEffect(() => {
        dispatch(removeAllCourses());
        dispatch(getCoursesByCategoryId(categoryId));
    }, [categoryId]);

    const courseElements = courses.map(course => (
        <Course key={course.id} {...course} />
    ));

    const courseListComponent = (courseElements.length > 0)
        ? courseElements :
        (<span className="courses__list__not_found_info">
            {noCoursesFoundInfo}
        </span>);

    return (
        <div className="courses__list">
            {courseListComponent}
        </div>
    );
};

export default CourseList;
