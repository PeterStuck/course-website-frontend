import {COURSE_RESOURCE_URLS} from "../../../resourceUrls";

import {addCourse} from "../../../actions/courses/content/courseActions";
import {fetchItems} from "../../fetchOperations";


export const getCoursesByCategoryId = (categoryId) =>
    async (dispatch) => {
        const courses = await fetchItems(
            COURSE_RESOURCE_URLS.getCoursesByCategoryUrl + categoryId,
            "No courses found."
        );
        courses.map(course => dispatch(addCourse(course)));
    }