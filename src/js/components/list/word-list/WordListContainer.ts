import { connect } from "react-redux";
import { WordList, IStateProps } from "./WordList";
import { IWord, WordStatus} from "js/store/api/types";
import { FilterStatus } from "js/store/actions";

const getVisibleWords = (words: IWord[], filter: FilterStatus) => {
    switch (filter) {
        case FilterStatus.SHOW_ALL:
            return words;
        case FilterStatus.SHOW_LEARNED:
            return words.filter(w => w.status === WordStatus.Learned);
        case FilterStatus.SHOW_STUDIED:
            return words.filter(w => w.status === WordStatus.Studied);
        case FilterStatus.SHOW_UNLEARNED:
            return words.filter(w => w.status === WordStatus.Unlearned);
        default:
           throw new Error(`неизвестный фильтр ${filter}`);
    }
} 

const WordListContainer = connect<IStateProps>(
    (state: any) => ({
        words: getVisibleWords(state.words, state.visibilityFilterStatus)
    }),
    {}
)(WordList);

export { WordListContainer as WordList };

// TODO: any