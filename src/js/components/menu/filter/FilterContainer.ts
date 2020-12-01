import { connect } from "react-redux";
import { setVisibilityFilterStatus } from "js/store/actions";
import { Filter, IStateProps, IDispatchProps, IOwnProps} from "./Filter";
import { RootState } from "js/store/reducers/rootReducer";

const FilterContainer = connect<IStateProps, IDispatchProps, IOwnProps, RootState>(
    (state, ownProps) => ({
        active: ownProps.filter === state.visibilityFilterStatus
    }),
    (dispatch, ownProps) => ({
        onFilter: () => dispatch(setVisibilityFilterStatus(ownProps.filter))
    })
)(Filter);

export { FilterContainer as Filter };