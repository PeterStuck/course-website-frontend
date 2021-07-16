import React, {useEffect, useState} from 'react';

import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MainSection from "./MainSection";
import {CATEGORY_RESOURCE_URLS} from "../resources";
import {useParams} from "react-router-dom";

const CoursesMainSection = () => {

    const [subcategories, setSubcategories] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        fetchSubcategoryData();
    }, [categoryId])

    const fetchSubcategoryData = () => {
        const {getSubcategoriesUrl} = CATEGORY_RESOURCE_URLS;
        fetch(getSubcategoriesUrl + categoryId, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json())
            .then(data => setSubcategories(data));
    }

    const subcategoryElements = subcategories.map(subcategory => (
        <li key={subcategory.id} className={"option__subcategory"}>
            {subcategory.name}
        </li>
    ))

    return (
        <MainSection sectionClass="section--margin">
            <div className="sidebar_filter_options">
                <div className="sidebar__option">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content">
                            <Typography className="option__title">Subcategory</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="option__body">
                                <ul className="option__subcategories">
                                    {subcategoryElements}
                                </ul>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="content__wrapper">

            </div>
        </MainSection>
    );
};

export default CoursesMainSection;
