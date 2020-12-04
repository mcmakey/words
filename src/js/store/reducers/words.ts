import { data } from "db";
import { 
    toggleWordStatusTypes,
    TOGGLE_WORD_STATUS
} from "js/store/actions/actionsTypes";
import { 
    // WordStatus,
    IWord
} from "js/store/api/types";

const setWordStatus = (word: IWord) => {
    const statuses = ["Unlearned", "Studied", "Learned"]; // TODO: how to use enum WordStatus ?
    const currentStatus = word.status;
    const indexCurrentStatus = statuses.indexOf(currentStatus);
    
    let nextIndexCurrentStatus = 0;

    if (indexCurrentStatus < statuses.length - 1) {
        nextIndexCurrentStatus = indexCurrentStatus + 1; 
    }

    return statuses[nextIndexCurrentStatus];
}

const words = (state = data, action: toggleWordStatusTypes) => {
    switch (action.type) {
        case TOGGLE_WORD_STATUS:
            return state.map(
                word => word.id === action.id ? { ...word, status: setWordStatus(word) } : word
            );
        default:
            return state;
    }
};

export { words };
