import * as React from "react";
import "./Word.scss";

interface IProps {
    word: any;
}

const Word: React.FC<IProps> = ({ word }) => (
    <div className="word">
        <div className="word__value word__value_origin">{word.val}</div>
        <div className="word__value word__value_translate">{word.translate}</div>
        <button className="word__button"></button>
    </div>
);

export { Word };