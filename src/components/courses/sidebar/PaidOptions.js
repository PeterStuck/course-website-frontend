import React from 'react';
import CheckboxOption from "../../generic/CheckboxOption";
import {useDispatch, useSelector} from "react-redux";
import {changeIsFreeFilter} from "../../../actions/sidebarFilters/sidebarIsFreeFilterActions";
import {changeIsPaidFilter} from "../../../actions/sidebarFilters/sidebarIsPaidFilterActions";


const PaidOptions = () => {
    const isFreeFilter = useSelector(store => store.sidebarIsFreeFilterReducer);
    const isPaidFilter = useSelector(store => store.sidebarIsPaidFilter);
    const dispatch = useDispatch();

    const handleChangeIsFree = () => dispatch(changeIsFreeFilter());

    const handleChangeIsPaid = () => dispatch(changeIsPaidFilter());

    return (
        <div className="paid__options">
            <CheckboxOption
                className={"paid__option"}
                label={"Free"}
                name={"isFree"}
                state={isFreeFilter}
                changeHandler={handleChangeIsFree}
            />
            <CheckboxOption
                className={"paid__option"}
                label={"Paid"}
                name={"isPaid"}
                state={isPaidFilter}
                changeHandler={handleChangeIsPaid}
            />
        </div>
    );
};

export default PaidOptions;
