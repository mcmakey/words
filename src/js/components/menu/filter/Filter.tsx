import * as React from "react";
import "./Filter.scss";

interface IProps {
    name: string;
    onClick: () => void;
}

const Filter: React.FC<IProps> = ({name, onClick}) => (
    <button className="filter" onClick={onClick}>
        <span className="filter__indicator"/>
        <span className="filter__name">{name}</span>
    </button>
);

export { Filter };