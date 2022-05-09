import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormsControl/FormsControls";
import { login } from "../redux/auth-reducer";
import s from "../common/FormsControl/formsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                {" "}
                <Field
                    component={Input}
                    name={"rememberMe"}
                    type={"checkbox"}
                />{" "}
                Remember me{" "}
            </div>

            {captchaUrl && <img alt="none" src={captchaUrl} />}
            {captchaUrl && (
                <Field
                    placeholder={"Symbols from image"}
                    name={"captcha"}
                    component={Input}
                    validate={[requiredField]}
                />
            )}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        );
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
