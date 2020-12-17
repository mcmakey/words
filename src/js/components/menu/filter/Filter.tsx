import * as React from "react";
import clssNames from "classnames";
import { FilterStatus } from "js/store/api/types";
import "./Filter.scss";

export interface IOwnProps {
    filterName: string;
    filter: FilterStatus;
    active?: boolean; // TODO: ? 
}

export interface IDispatchProps {
    onFilter?: () => void; // TODO: ?
}

type IProps = IOwnProps & IDispatchProps;

const Filter: React.FC<IProps> = ({filterName, active, onFilter}) => (
    <button 
        className={clssNames("filter", {"filter_active": active})} 
        disabled={active}
        onClick={onFilter}
    >
        <span className="filter__indicator"/>
        <span className="filter__name">{filterName}</span>
    </button>
);

export { Filter };