export const ADD_COURSE = 'ADD_COURSE';
export const CLEAR_COURSES = 'CLEAR_COURSES';

export const addCourse = ({id, title, lastUpdate, price, authors}) => ({
    type: ADD_COURSE,
    payload: {
        id,
        title,
        lastUpdate,
        price,
        authors
    }
})

export const removeAllCourses = () => ({
    type: CLEAR_COURSES
})