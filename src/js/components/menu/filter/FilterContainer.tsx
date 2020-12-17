import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilterStatus } from "js/store/actions";
import { Filter, IOwnProps, IDispatchProps } from "./Filter";
import { RootState } from "js/store/reducers/rootReducer";

type IProps = IOwnProps & IDispatchProps;

const FilterContainer = (props: IProps) => {

    const { filter } = props;

    const  visibilityFilterStatus = useSelector((state: RootState) => state.visibilityFilterStatus);
    const filterActive = filter === visibilityFilterStatus;

    const dispatch = useDispatch();

    const handleFilter = React.useCallback(
        () => {
            dispatch(setVisibilityFilterStatus(filter))
        },
        [dispatch, filter]
    );

    return (
        <Filter {...props}  active={filterActive} onFilter={handleFilter} />
    );
}

export { FilterContainer as Filter };