import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";

import "../../../styles/courses/sidebar/RatingOptionFilter.scss";

const RatingOptionFilter = ({starCount}) => {

    const drawStars = () => {
        let stars = [];
        for (let i = 0; i < Math.floor(starCount); i++)
            stars.push(<FontAwesomeIcon key={i} icon={faStar} />);

        if (starCount % Math.floor(starCount) > 0) stars.push(<FontAwesomeIcon key={"half"} icon={faStarHalfAlt} />)

        return stars;
    }

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
