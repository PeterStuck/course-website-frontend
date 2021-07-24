import React from 'react';

const FilterConfirm = ({ closeHandler }) => {
    return (
        <div className="filter__sidebar__confirm__wrapper">
            <div
                className="filter__sidebar__confirm"
                onClick={closeHandler}>
                Done
            </div>
        </div>
    );
};

export default FilterConfirm;
