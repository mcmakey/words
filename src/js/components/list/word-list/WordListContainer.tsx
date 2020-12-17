import * as React from "react";
import { WordList } from "./WordList";
import { toggleWordStatus } from "js/store/actions";
import { RootState } from "js/store/reducers/rootReducer";
import { IWord, WordStatus} from "js/store/api/types";
import { FilterStatus } from "js/store/api/types";
import { useDispatch, useSelector } from "react-redux";
import { TypeWordId } from "js/store/api/types";

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

const WordListContainer = () => {
    
    const words = useSelector((state: RootState) => state.words);
    const visibilityFilterStatus = useSelector((state: RootState) => state.visibilityFilterStatus);
    const visibilityWords = getVisibleWords(words, visibilityFilterStatus);

    const dispatch = useDispatch();
    const handleToggleWord = React.useCallback((id: TypeWordId) => {
        dispatch(toggleWordStatus(id))
    }, [dispatch]);

    return (
       <WordList words={visibilityWords} onToggleWord={handleToggleWord} />
    );
}

export { WordListContainer as WordList };