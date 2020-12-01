import { FilterStatus } from "js/store/api/types";

const SET_VISIBILITY_FILTER_STATUS = "SET_VISIBILITY_FILTER_STATUS";

interface setVisibilityFilterStatusAction {
    type: typeof SET_VISIBILITY_FILTER_STATUS;
    filter: FilterStatus;
}

export type setVisibilityFilterStatusTypes = setVisibilityFilterStatusAction;

export {
    SET_VISIBILITY_FILTER_STATUS
};