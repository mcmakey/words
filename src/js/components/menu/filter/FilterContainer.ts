import { connect } from "react-redux";
import { setVisibilityFilterStatus } from "js/store/actions";
import { Filter, IStateProps, IDispatchProps } from "./Filter";

const FilterContainer = connect<IStateProps, IDispatchProps>(
    (state: any, ownProps: any) => ({
        active: ownProps.filter === state.visibilityFilterStatus
    }),
    (dispatch, ownProps:any) => ({
        onFilter: () => dispatch(setVisibilityFilterStatus(ownProps.filter))
    })
)(Filter);

export { FilterContainer as Filter };

// TODO: any