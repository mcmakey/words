import { connect } from "react-redux";
import { WordList, IStateProps } from "./WordList";

const WordListContainer = connect<IStateProps>(
    (state: any) => ({
        words: state.words
    }),
    {}
)(WordList);

export { WordListContainer as WordList };

// TODO: any