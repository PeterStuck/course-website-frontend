import React from 'react';

import '../styles/MainSection.scss';

const MainSection = ({sectionClass, children}) => {
    return (
        <section className={sectionClass}>
            <div className="section__wrapper">
                {children}
            </div>
        </section>
    );
};

export default MainSection;
