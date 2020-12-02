import { 
    SET_VISIBILITY_FILTER_STATUS,
    setVisibilityFilterStatusTypes,
    TOGGLE_WORD_STATUS,
    toggleWordStatusTypes
 } from "./actionsTypes";
import { 
    FilterStatus,
    TypeWordId
} from "js/store/api/types";


const setVisibilityFilterStatus = (filter: FilterStatus): setVisibilityFilterStatusTypes => {
    return {
        type: SET_VISIBILITY_FILTER_STATUS,
        filter
    }
}

const toggleWordStatus = (id: TypeWordId): toggleWordStatusTypes => {
    return {
        type: TOGGLE_WORD_STATUS,
        id
    }
}

export { 
    setVisibilityFilterStatus,
    toggleWordStatus
};