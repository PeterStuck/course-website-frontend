import {ADD_COURSE, CLEAR_COURSES} from "../../../actions/courses/content/courseActions";

const addCourse = (state, payload) => {
    return [...state, payload];
}

const clearCourses = () => {
    return [];
}

export const courseReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_COURSE:
            return addCourse(state, payload);
        case CLEAR_COURSES:
            return clearCourses();
        default:
            return state;
    }
}