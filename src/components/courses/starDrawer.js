import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const drawStars = (starCount) => {
    let stars = [];
    for (let i = 0; i < Math.floor(starCount); i++)
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);

    if (starCount % Math.floor(starCount) > 0) stars.push(<FontAwesomeIcon key={"half"} icon={faStarHalfAlt} />)

    return stars;
}