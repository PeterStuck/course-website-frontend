import {UPDATE_RATING_FILTER} from "../../actions/sidebar/sidebarRatingFilterActions";

const updateFilterValue = (state, payload) => {
    return payload.newValue;
}

export const sidebarRatingFilterReducer = (state = "", action) => {
    const {payload, type} = action;

    switch (type) {
        case UPDATE_RATING_FILTER:
            return updateFilterValue(state, payload);
        default:
            return state;
    }
}