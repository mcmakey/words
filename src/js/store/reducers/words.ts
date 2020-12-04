import { data } from "db";
import { 
    toggleWordStatusTypes,
    TOGGLE_WORD_STATUS
} from "js/store/actions/actionsTypes";
import { 
    IWord,
    WordStatus
} from "js/store/api/types";

const setWordStatus = (word: IWord) => {
    
    const currentStatus = word.status;

    switch (currentStatus) {
        case WordStatus.Unlearned:
            return WordStatus.Studied;
        case WordStatus.Studied:
            return WordStatus.Learned;
        case WordStatus.Learned:
            return WordStatus.Unlearned;
        default:
            return currentStatus;
    }
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
