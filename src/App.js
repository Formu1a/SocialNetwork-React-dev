import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import { Component, Suspense } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import { initializeApp } from "./components/redux/app-reducer";
import React from "react";
import store from "./components/redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer")
);

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        let someDialogs = () => <DialogsContainer />;

        let someNews = () => <News />;
        let someMusic = () => <Music />;
        let someSettings = () => <Settings />;
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className="app-wrapper">
                <Suspense
                    fallback={
                        <div>
                            <Preloader />
                        </div>
                    }
                >
                    <HeaderContainer />
                    <Navbar />

                    <div className="app-wrapper-content">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to={"/profile"} />}
                            />

                            <Route path="/Dialogs" render={someDialogs} />
                            <Route
                                path="/Profile/:userId?"
                                render={() => <ProfileContainer />}
                            />

                            <Route path="/News" render={someNews} />
                            <Route path="/Music" render={someMusic} />
                            <Route path="/Settings" render={someSettings} />
                            <Route
                                path="/users"
                                render={() => <UsersContainer />}
                            />
                            <Route path="/login" render={() => <Login />} />
                            <Route
                                path="*"
                                render={() => <div>404 NOT FOUND</div>}
                            />
                        </Switch>
                    </div>
                </Suspense>
            </div>
        );
    }
}

const mapDispatchToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(
    withRouter,
    connect(mapDispatchToProps, { initializeApp })
)(App);

const JsApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default JsApp;
