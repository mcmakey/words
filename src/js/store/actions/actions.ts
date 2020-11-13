import { SET_VISIBILITY_FILTER_STATUS } from "./actionsTypes";

enum FilterStatus  {
    SHOW_ALL = "SHOW_ALL",
    SHOW_COMPLETED = "SHOW_UNLEARNED",
    SHOW_STUDIED = "SHOW_STUDIED",
    SHOW_LEARNED ="SHOW_LEARNED"
}

const setVisibilityFilterStatus = (filter: FilterStatus) => {
    return {
        type: SET_VISIBILITY_FILTER_STATUS,
        filter
    }
}

export { 
    FilterStatus,
    setVisibilityFilterStatus
 };