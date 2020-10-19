import * as React from "react";
import "./WordList.scss";

interface IProps {
    words: any;
}

const WordList: React.FC<IProps> = ({ words }) => {

    window.console.log(words);

    return (
        <ul className="word-list">
           { words.map((item: any) => (
               <li className="word-list__item">
                   {item.val}
               </li>
           ))}
        </ul>
    );
};

export { WordList };