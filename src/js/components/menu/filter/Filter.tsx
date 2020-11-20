import * as React from "react";
import clssNames from "classnames";
import "./Filter.scss";

interface IOwnProps {
    name: string;
    filter: any;
}

export interface IStateProps {
    active: boolean;
}

export interface IDispatchProps {
    onFilter: () => void;
}

type IProps = IOwnProps & IStateProps & IDispatchProps;

const Filter: React.FC<IProps> = ({name, active, onFilter}) => (
    <button 
        className={clssNames("filter", {"filter_active": active})} 
        disabled={active}
        onClick={onFilter}
    >
        <span className="filter__indicator"/>
        <span className="filter__name">{name}</span>
    </button>
);

export { Filter };