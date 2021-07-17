import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import '../../../styles/courses/sidebar/SidebarOption.scss';

const SidebarOption = ({optionTitle, children}) => {
    return (
        <div className="sidebar__option">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content">
                    <Typography className="option__title">{optionTitle}</Typography>
                </AccordionSummary>
                <AccordionDetails className="option__body">
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SidebarOption;
