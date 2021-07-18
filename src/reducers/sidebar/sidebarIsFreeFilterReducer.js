import {UPDATE_IS_FREE_FILTER} from "../../actions/sidebar/sidebarIsFreeFilterActions";

export const updateFilterFlag = (state) => {
    return !state;
}

export const sidebarIsFreeFilterReducer = (state = false, action) => {
    const {payload, type} = action;

    switch (type) {
        case UPDATE_IS_FREE_FILTER:
            return updateFilterFlag(state, payload);
        default:
            return state;
    }
}