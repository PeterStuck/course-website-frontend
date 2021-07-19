import React from 'react';
import NumberFormat from 'react-number-format';

import {drawStars} from "../starDrawer";

import courseImgPlaceholder from "../../../assets/course-img-placeholder.png";
import '../../../styles/courses/content/Course.scss';

const Course = ({courseFeedback, courseDescription, authors, lastUpdate, price, title}) => {

    const convertLastUpdateDate = (lastUpdate) => {
        const date = new Date(lastUpdate);
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
        };

        return date.toLocaleDateString('en', options);
    }

    const courseRateStarsComponent = (courseFeedback) =>
        checkAvgRateIsNaN(courseFeedback) ? null : (
            <span className="rating__stars">
                {drawStars(courseFeedback.avgRate)}
            </span>
        );

    const courseAvgRateComponent = (courseFeedback) => (
        <span className="rating__avg">
            {checkAvgRateIsNaN(courseFeedback) ? 'No rates yet.': courseFeedback.avgRate}
        </span>
    );

    const checkAvgRateIsNaN = (courseFeedback) => {
        return courseFeedback.avgRate === 'NaN';
    }

    const courseVotesCountComponent = (courseFeedback) => (
        <span className="rating__votes_count">
            {(courseFeedback.ratesCount > 0) ? '(' + courseFeedback.ratesCount + ')' : null}
        </span>
    );

    const authorsComponent = (authors) => authors.map(author => {
        return (
            <span key={author.email} className="course__author">
                {author.firstName} {author.lastName}
            </span>
        )
    })

    return (
        <div className="course">
            <div className="course__img">
                <img src={courseImgPlaceholder} alt="placeholder"/>
            </div>
            <div className="course__title">
                {title}
            </div>
            <div className="course__short_description">
                {courseDescription.shortDescription}
            </div>
            <div className="course__authors">
                {authorsComponent(authors)}
            </div>
            <div className="course__rating">
                {courseRateStarsComponent(courseFeedback)}

                {courseAvgRateComponent(courseFeedback)}

                {courseVotesCountComponent(courseFeedback)}
            </div>
            <div className="course__last_update">
                last update {convertLastUpdateDate(lastUpdate)}
            </div>
            <div className="course__price">
                {<NumberFormat
                    value={price}
                    displayType={"text"}
                    prefix={'$'}
                />}
            </div>
        </div>
    );
};

export default Course;
