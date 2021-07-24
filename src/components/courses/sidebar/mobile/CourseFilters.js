import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {Drawer} from "@material-ui/core";

import Sidebar from "../Sidebar";
import FilterConfirm from "./FilterConfirm";
import FilterIcon from "./FilterIcon";


const CourseFilters = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    const toggleShow = () => setShow(!show);

    const closeFilters = () => setShow(false);

    useEffect(() => {
        closeFilters();
    }, [location])

    return (
        <div className={"courses__filter"}>
            <FilterIcon showHandler={toggleShow} />

            <Drawer className={"filter__sidebar"} open={show} anchor={"left"} onClose={closeFilters}>
                <div className="filter__sidebar__content">
                    <Sidebar />
                    <FilterConfirm closeHandler={closeFilters} />
                </div>
            </Drawer>
        </div>
    );
};

export default CourseFilters;
