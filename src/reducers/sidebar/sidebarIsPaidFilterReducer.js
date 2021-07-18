import {updateFilterFlag} from "./sidebarIsFreeFilterReducer";
import {UPDATE_IS_PAID_FILTER} from "../../actions/sidebar/sidebarIsPaidFilterActions";

export const sidebarIsPaidFilterReducer = (state = false, action) => {
    const {payload, type} = action;

    switch (type) {
        case UPDATE_IS_PAID_FILTER:
            return updateFilterFlag(state, payload);
        default:
            return state;
    }
}