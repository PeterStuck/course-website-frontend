import React from 'react';

const SideMenuSection = ({title, children}) => {

    const titleComponent = (title) ? (
        <span className="side_menu__section__title">
            {title}
        </span>
    ) : null;

    return (
        <div className="side_menu__section">
            {titleComponent}
            <div className="side_menu__section__content">
                {children}
            </div>
        </div>
    );
};

export default SideMenuSection;
