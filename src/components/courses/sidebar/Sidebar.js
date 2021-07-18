import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import RatingOptions from "./RatingOptions";
import SidebarOption from "./SidebarOption";
import CategoriesList from "../../generic/CategoriesList";
import PaidOptions from "./PaidOptions";

import {defaultState, SidebarContext} from "./SidebarContext";
import {useDispatch, useSelector} from "react-redux";
import {clearSubcategories} from "../../../actions/subcategoryActions";

import '../../../styles/courses/sidebar/Sidebar.scss';
import {getAllSubcategories} from "../../../operations/subcategoryOperations";

const Sidebar = () => {
    const subcategories = useSelector(store => store.subcategories);
    const dispatch = useDispatch();
    const [ratingFilter, setRatingFilter] = useState();
    const [isFree, setIsFree] = useState(defaultState.isFree);
    const [isPaid, setIsPaid] = useState(defaultState.isPaid);

    const {categoryId} = useParams();

    useEffect(() => {
        dispatch(clearSubcategories());
        dispatch(getAllSubcategories(categoryId));
    }, [categoryId])

    const subcategoryComponent = (
        (subcategories.length > 0) ? <CategoriesList
            categories={subcategories}
            categoriesClass={"option__subcategories"}
            categoryClass={"option__subcategory"}
        /> : 'Nothing to show.');


    const handleChangeRatingFilter = (e) => setRatingFilter(e.target.value);

    const handleChangeIsFree = () => setIsFree(!isFree);

    const handleChangeIsPaid = () => setIsPaid(!isPaid);

    return (
        <div className="sidebar_filter_options">
            <SidebarContext.Provider value={{
                isFree,
                handleChangeIsFree,
                isPaid,
                handleChangeIsPaid
            }}>
                <SidebarOption optionTitle={"Subcategory"}>
                    {subcategoryComponent}
                </SidebarOption>

                <SidebarOption optionTitle={"Ratings"}>
                    <RatingOptions
                        selectedRatingFilter={ratingFilter}
                        changeRatingFilterHandler={handleChangeRatingFilter} />
                </SidebarOption>

                <SidebarOption optionTitle={"Price"}>
                    <PaidOptions />
                </SidebarOption>
            </SidebarContext.Provider>
        </div>
    );
};

export default Sidebar;
