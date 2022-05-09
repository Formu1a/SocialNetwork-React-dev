import { connect } from "react-redux";
import { addPostActionCreator } from "../redux/profile-reducer";
import MyPost from "./MyPost";

let MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

let MapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    };
};

const MyPostContainer = connect(MapStateToProps, MapDispatchToProps)(MyPost);

export default MyPostContainer;
