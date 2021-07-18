import {createContext} from "react";

export const defaultState = {
    isFree: false,
    handleChangeIsFree: () => console.log('Default provider'),
    isPaid: false,
    handleChangeIsPaid: () => console.log('Default provider')
}

export const SidebarContext = createContext(defaultState);