import React from 'react';
import {Link} from "react-router-dom";

import {urls} from "../../../urls";

const Category = ({category, categoryClass}) => {
    const {id, name} = category;
    const categoryUrl = urls.COURSE_CATEGORY_PAGE.path + id;

    return (
        <Link to={categoryUrl} className={categoryClass}>
            <li key={id}>
                {name}
            </li>
        </Link>
    );
};

export default Category;
