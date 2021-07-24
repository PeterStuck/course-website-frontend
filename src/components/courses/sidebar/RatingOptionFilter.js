import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

import {drawStars} from "../starDrawer";


const RatingOptionFilter = ({starCount}) => {
    return (
        <div key={starCount} className={"option__rating"}>
            <span className={"rating__stars"}>
                {drawStars(starCount)}
            </span>
            <span className={"rating__stars_count"}>
                {starCount}
            </span>
            <FontAwesomeIcon className={"rating__up_icon"} icon={faAngleUp} />
        </div>
    );
};

export default RatingOptionFilter;
