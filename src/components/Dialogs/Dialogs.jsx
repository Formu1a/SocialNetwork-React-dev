import s from "./Dialogs.module.css";
import Dialogitem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Redirect } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControls";
import {
    requiredField,
    maxLengthCreator,
} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let addNewMessage = (values) => {
        props.addMessageActionCreator(values.newMessageText);
    };

    if (!props.isAuth) return <Redirect to={"/login"} />;

    let messagesElements = state.messages.map((m) => (
        <Message dialog={m.message} />
    ));
    let dialogsElements = state.dialogs.map((d) => (
        <Dialogitem name={d.name} id={d.id} />
    ));
    return (
        <div className={s.Dialogs}>
            <div className={s.Dialogsitem}>{dialogsElements}</div>
            <div className={`${s.Massages} ${s.writeMessage}`}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[requiredField, maxLength50]}
                    name="newMessageText"
                    placeholder="Enter your message"
                />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
    AddMessageForm
);

export default Dialogs;
