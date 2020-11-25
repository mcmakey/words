import { 
    FilterStatus,
    SET_VISIBILITY_FILTER_STATUS 
} from "js/store/actions";

const visibilityFilterStatus = (state = FilterStatus.SHOW_ALL, action: any ) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER_STATUS:
            return action.filter;
        default:
            return state;
    }
}

export { visibilityFilterStatus };

// TODO: any