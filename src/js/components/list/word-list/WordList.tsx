import * as React from "react";
import { Word } from "../word/Word";
import { IWord} from "js/store/api/types";
import { TypeWordId } from "js/store/api/types";
import "./WordList.scss";

export interface IStateProps {
    words: IWord[];
}

export interface IDispatchProps {
    toggleWord: (id: TypeWordId) => void;
}

type IProps = IStateProps & IDispatchProps;

const WordList: React.FC<IProps> = ({ words, toggleWord}) => (
    <ul className="word-list">
       {words.map((item,) => (
           <li className="word-list__item" key={item.id}>
              <Word word={item} onClick={() => toggleWord(item.id)}/>
           </li>
       ))}
    </ul>
);

export { WordList };