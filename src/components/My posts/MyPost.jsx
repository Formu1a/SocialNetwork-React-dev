import s from "./MyPost.module.css";
import Post from "./Post";
import React from "react";
import { reduxForm, Field } from "redux-form";
import {
    requiredField,
    maxLengthCreator,
} from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControl/FormsControls";

const maxLength10 = maxLengthCreator(10);

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newPostText"
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
    addNewPostForm
);

const MyPost = React.memo((props) => {
    let postsElement = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likeCounts={p.likeCounts} />
    ));

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div>
            <div className={s.post}>
                <h3>My Posts</h3>
                <AddNewPostFormRedux onSubmit={addPost} />
            </div>

            <div className={s.item}>{postsElement}</div>
        </div>
    );
});

export default MyPost;
