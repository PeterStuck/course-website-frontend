import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

import RatingOptionFilter from "./RatingOptionFilter";

import "../../../styles/courses/sidebar/RatingOptions.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeRatingFilter} from "../../../actions/sidebar/sidebarRatingFilterActions";

const RatingOptions = () => {
    const ratingFilter = useSelector(store => store.sidebarFilters);
    const dispatch = useDispatch();

    const handleChangeRatingFilter = (e) =>
        dispatch(changeRatingFilter(e.target.value));

    const ratingValues = [4.5, 4.0, 3.5, 3.0];
    const ratingComponents = ratingValues
                                .map(value => (
                                    <FormControlLabel
                                        key={value}
                                        className={"rating__field"}
                                        value={value.toString()}
                                        control={<Radio />}
                                        label={<RatingOptionFilter starCount={value} />}
                                    />)
                                );

    return (
        <FormControl className={"ratings__fieldset"} component="fieldset">
            <RadioGroup aria-label="ratingFilter" name="ratingFilter" value={ratingFilter} onChange={handleChangeRatingFilter}>
                {ratingComponents}
            </RadioGroup>
        </FormControl>
    );
};

export default RatingOptions;
