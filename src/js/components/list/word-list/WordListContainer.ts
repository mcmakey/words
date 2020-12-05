import { connect } from "react-redux";
import { WordList, IStateProps, IDispatchProps } from "./WordList";
import { IWord, WordStatus} from "js/store/api/types";
import { FilterStatus } from "js/store/api/types";
import { toggleWordStatus } from "js/store/actions";
import { RootState } from "js/store/reducers/rootReducer";

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

const WordListContainer = connect<IStateProps, IDispatchProps, {}, RootState>(
    (state) => ({
        words: getVisibleWords(state.words, state.visibilityFilterStatus)
    }),
    (dispatch) => ({
        toggleWord: id => dispatch(toggleWordStatus(id))
    })
)(WordList);

export { WordListContainer as WordList };