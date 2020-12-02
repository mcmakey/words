import { FilterStatus, TypeWordId } from "js/store/api/types";

const SET_VISIBILITY_FILTER_STATUS = "SET_VISIBILITY_FILTER_STATUS";

interface setVisibilityFilterStatusAction {
    type: typeof SET_VISIBILITY_FILTER_STATUS;
    filter: FilterStatus;
}

export type setVisibilityFilterStatusTypes = setVisibilityFilterStatusAction;

const TOGGLE_WORD_STATUS = "TOGGLE_WORD_STATUS";

interface toggleWordStatusAction {
    type: typeof TOGGLE_WORD_STATUS;
    id: TypeWordId;
}

export type toggleWordStatusTypes = toggleWordStatusAction;

export {
    SET_VISIBILITY_FILTER_STATUS,
    TOGGLE_WORD_STATUS
};