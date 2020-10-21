import * as React from "react";
import { Header } from "js/components";
import { WordList } from "js/components";
import { IWord} from "js/store/api/types/";
import "./AppLayout.scss";

type IProps = {
    words: IWord[];
}

const AppLayout: React.FC<IProps> = ({words}) => (
    <div className="layout">
        <div className="layout__top">
            <div className="layout__wrapper">
                <Header />
            </div>
        </div>
        <div className="layout__content">
            <div className="layout__wrapper">
                <WordList words={words} />
            </div>
        </div>
    </div>  
);

export { AppLayout };