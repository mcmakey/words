import * as React from "react";
import classNames from "classnames";
import { IWord} from "js/store/api/types";
import { getClassNameStatus } from "./helpers";
import "./Word.scss";

interface IProps {
    word: IWord;
}

const Word: React.FC<IProps> = ({ word }) => {
    
    const classNameStatus = getClassNameStatus(word.status);

    return (
        <div className={classNames("word", classNameStatus)}>
            <div className="word__value word__value_origin">{word.value}</div>
            <div className="word__value word__value_trans">{word.translate}</div>
            <button className="word__button"></button>
        </div>
    )
};

export { Word };