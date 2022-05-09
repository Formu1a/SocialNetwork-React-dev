import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let MapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

let MapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        },
    };
};

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs);
