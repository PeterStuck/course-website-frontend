import React from 'react';
import FilterListIcon from "@material-ui/icons/FilterList";

const FilterIcon = ({ showHandler }) => {
    return (
        <div className="filter__icon" onClick={showHandler}>
            <FilterListIcon />
            <span className={"filter__icon__text"}>
                    Filter
                </span>
        </div>
    );
};

export default FilterIcon;
