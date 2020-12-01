import { combineReducers } from "redux";
import { visibilityFilterStatus } from "./visibilityFilterStatus";
import { words } from "./words";

const rootReducer = combineReducers({
    words,
    visibilityFilterStatus
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
