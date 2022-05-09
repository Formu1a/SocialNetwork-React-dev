import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControl/FormsControls";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./Profileinfo.module.css";
import style from "../../common/FormsControl/formsControls.module.css";

const ProfileDataForm = ({
    error,
    handleSubmit,
    status,
    updateStatus,
    profile,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div>
                {error && <div className={style.formSummaryError}>{error}</div>}
            </div>

            <div>
                <div>
                    <b>Full name</b>:
                    <Field
                        placeholder={"Full name"}
                        name={"fullName"}
                        validate={[]}
                        component={Input}
                    />
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
                <b>Looking for a job</b>:
                <Field
                    name={"lookingForAJob"}
                    validate={[]}
                    component={Input}
                    type={"checkbox"}
                />
            </div>

            <div>
                <b>My professional skills</b>:
                <Field
                    placeholder={"My professional skills"}
                    name={"lookingForAJobDescription"}
                    validate={[]}
                    component={Textarea}
                />
            </div>

            <div>
                <b>About me</b>:
                <Field
                    placeholder={"About me"}
                    name={"aboutMe"}
                    validate={[]}
                    component={Textarea}
                />
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <div key={key} className={s.contact}>
                            <b>
                                {key}:{" "}
                                <Field
                                    placeholder={key}
                                    name={"contacts." + key}
                                    validate={[]}
                                    component={Input}
                                />
                            </b>
                        </div>
                    );
                })}
            </div>
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(
    ProfileDataForm
);

export default ProfileDataFormReduxForm;
