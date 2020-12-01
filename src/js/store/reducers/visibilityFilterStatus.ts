import { 
    SET_VISIBILITY_FILTER_STATUS,
    setVisibilityFilterStatusTypes
} from "js/store/actions";
import { FilterStatus } from "js/store/api/types";

const visibilityFilterStatus = (state = FilterStatus.SHOW_ALL, action: setVisibilityFilterStatusTypes ) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER_STATUS:
            return action.filter;
        default:
            return state;
    }
}

export { visibilityFilterStatus };
