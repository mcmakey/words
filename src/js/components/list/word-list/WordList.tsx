import * as React from "react";
import { Word } from "../word/Word";
import { IWord} from "js/store/api/types";
import "./WordList.scss";

export interface IStateProps {
    words: IWord[];
}

type IProps = IStateProps;

const WordList: React.FC<IProps> = ({ words }) => (
    <ul className="word-list">
       {words.map((item,) => (
           <li className="word-list__item" key={item.id}>
              <Word word={item} />
           </li>
       ))}
    </ul>
);

export { WordList };