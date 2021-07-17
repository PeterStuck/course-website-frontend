import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

import RatingOptionFilter from "./RatingOptionFilter";

import "../../../styles/courses/sidebar/RatingOptions.scss";

const RatingOptions = ({selectedRatingFilter, changeRatingFilterHandler}) => {

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
            <RadioGroup aria-label="ratingFilter" name="ratingFilter" value={selectedRatingFilter} onChange={changeRatingFilterHandler}>
                {ratingComponents}
            </RadioGroup>
        </FormControl>
    );
};

export default RatingOptions;
