import React from 'react';
import Category from "./Category";

const CategoriesList = ({categories, categoriesClass, categoryClass}) => {
    const subcategoryElements = categories.map(subcategory => (
        <Category key={subcategory.id} category={subcategory} categoryClass={categoryClass} />
    ))

    return (
        <ul className={categoriesClass}>
            {subcategoryElements}
        </ul>
    );
};

export default CategoriesList;
