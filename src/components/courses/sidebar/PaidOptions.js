import React, {useContext} from 'react';

import {SidebarContext} from "./SidebarContext";
import CheckboxOption from "../../generic/CheckboxOption";

const PaidOptions = () => {
    const {isFree, handleChangeIsFree} = useContext(SidebarContext);
    const {isPaid, handleChangeIsPaid} = useContext(SidebarContext);

    return (
        <div className="paid__options">
            <CheckboxOption
                className={"paid__option"}
                label={"Free"}
                name={"isFree"}
                state={isFree}
                changeHandler={handleChangeIsFree}
            />
            <CheckboxOption
                className={"paid__option"}
                label={"Paid"}
                name={"isPaid"}
                state={isPaid}
                changeHandler={handleChangeIsPaid}
            />
        </div>
    );
};

export default PaidOptions;
