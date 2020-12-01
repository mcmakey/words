import { SET_VISIBILITY_FILTER_STATUS, setVisibilityFilterStatusTypes } from "./actionsTypes";
import { FilterStatus } from "js/store/api/types";


const setVisibilityFilterStatus = (filter: FilterStatus): setVisibilityFilterStatusTypes => {
    return {
        type: SET_VISIBILITY_FILTER_STATUS,
        filter
    }
}

export { 
    setVisibilityFilterStatus
 };