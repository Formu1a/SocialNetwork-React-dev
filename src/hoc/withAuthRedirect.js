import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />;
            return <Component {...this.props} />;
        }
    }

    let ConnectedAuthRedirect = connect(mapStateToPropsRedirect)(
        RedirectComponent
    );
    return ConnectedAuthRedirect;
};
