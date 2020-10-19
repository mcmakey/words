import * as React from "react";
import { Word } from "../word/Word";
import "./WordList.scss";

interface IProps {
    words: any;
}

const WordList: React.FC<IProps> = ({ words }) => (
    <ul className="word-list">
       { words.map((item: any, index: number) => (
           <li className="word-list__item" key={index}>
              <Word word={item} />
           </li>
       ))}
    </ul>
);

export { WordList };

// TODO: key via id