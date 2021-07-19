export const UPDATE_RATING_FILTER = 'UPDATE_RATING_FILTER';

export const changeRatingFilter = (newValue) => ({
    type: UPDATE_RATING_FILTER,
    payload: {
        newValue
    }
})

