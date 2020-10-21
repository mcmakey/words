import * as React from "react";
import { IWord} from "js/store/api/types/";
import "./Word.scss";

interface IProps {
    word: IWord;
}

const Word: React.FC<IProps> = ({ word }) => (
    <div className="word">
        <div className="word__value word__value_origin">{word.value}</div>
        <div className="word__value word__value_trans">{word.translate}</div>
        <button className="word__button"></button>
    </div>
);

export { Word };