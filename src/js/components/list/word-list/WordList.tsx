import * as React from "react";
import { Word } from "../word/Word";
import { TypeWordId } from "js/store/api/types";
import "./WordList.scss";
import { IWord } from "js/store/api/types";

export interface IWordListProps  {
    words: IWord[];
    onToggleWord: (id: TypeWordId) => void;
}

const WordList: React.FC<IWordListProps> = ({ words, onToggleWord }) => {

    return (
        <ul className="word-list">
            {words.map((item,) => (
                <li className="word-list__item" key={item.id}>
                    <Word word={item} onClick={() => onToggleWord(item.id)}/>
                </li>
            ))}
        </ul>
    );
};

export { WordList };