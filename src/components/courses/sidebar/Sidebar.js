import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Checkbox, FormControlLabel} from "@material-ui/core";

import RatingOptions from "./RatingOptions";
import SidebarOption from "./SidebarOption";
import CategoriesList from "./CategoriesList";

import {CATEGORY_RESOURCE_URLS} from "../../../resources";
import '../../../styles/courses/sidebar/Sidebar.scss';



const Sidebar = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [ratingFilter, setRatingFilter] = useState();
    const [isFree, setIsFree] = useState(false);
    const [isPaid, setIsPaid] = useState(false);

    const {categoryId} = useParams();

    useEffect(() => {
        fetchSubcategoryData();
    }, [categoryId])

    const fetchSubcategoryData = () => {
        const {getSubcategoriesUrl} = CATEGORY_RESOURCE_URLS;
        fetch(getSubcategoriesUrl + categoryId, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => {
                if (response.status === 204) {
                    setSubcategories([]);
                    return Promise.reject("No subcategories.");
                }
                return response;
            })
            .then(response => response.json())
            .then(data => setSubcategories(data))
            .catch(error => console.log(error));
    }

    const subcategoryComponent = (
        (subcategories.length > 0) ? <CategoriesList
            categories={subcategories}
            categoriesClass={"option__subcategories"}
            categoryClass={"option__subcategory"}
        /> : 'Nothing to show.');


    const handleChangeRatingFilter = (e) => setRatingFilter(e.target.value);

    const handleChangeIsFreeFilter = () => setIsFree(!isFree);

    const handleChangeIsPaidFilter = () => setIsPaid(!isPaid);

    return (
        <div className="sidebar_filter_options">

            <SidebarOption optionTitle={"Subcategory"}>
                {subcategoryComponent}
            </SidebarOption>

            <SidebarOption optionTitle={"Ratings"}>
                <RatingOptions
                    selectedRatingFilter={ratingFilter}
                    changeRatingFilterHandler={handleChangeRatingFilter} />
            </SidebarOption>


            <SidebarOption optionTitle={"Price"}>
                <div className="paid__options">
                    <FormControlLabel
                        className={"paid__option"}
                        control={<Checkbox checked={isFree} onChange={handleChangeIsFreeFilter} name="isFree" />}
                        label="Free"
                    />
                    <FormControlLabel
                        className={"paid__option"}
                        control={<Checkbox checked={isPaid} onChange={handleChangeIsPaidFilter} name="isPaid" />}
                        label="Paid"
                    />
                </div>
            </SidebarOption>
        </div>
    );
};

export default Sidebar;
