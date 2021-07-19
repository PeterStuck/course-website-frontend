import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeAllCourses} from "../../../actions/courses/content/courseActions";
import {getCoursesByCategoryId} from "../../../operations/courses/content/courseOperations";

const CoursesList = () => {
    const {categoryId} = useParams();
    const courses = useSelector(store => store.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(removeAllCourses());
        dispatch(getCoursesByCategoryId(categoryId));
    }, [categoryId]);

    const courseElements = courses.map(course => (
        <div className="course">
            <div className="course__img">
                {/*<img src="" alt=""/>*/}
            </div>
        </div>
    ))

    return (
        <div className="courses__list">
            {courseElements}
        </div>
    );
};

export default CoursesList;
