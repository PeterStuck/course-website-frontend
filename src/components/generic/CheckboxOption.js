import React from 'react';

import {Checkbox, FormControlLabel} from "@material-ui/core";

const CheckboxOption = ({className, state, changeHandler, label, name}) => {
    return (
        <FormControlLabel
            className={className}
            control={<Checkbox checked={state} onChange={changeHandler} name={name} />}
            label={label}
        />
    );
};

export default CheckboxOption;
