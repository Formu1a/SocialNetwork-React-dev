import MyPostContainer from "../My posts/MyPostsContainer";
import s from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <div className={s.mainProfile}>
            <Profileinfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />

            <MyPostContainer />
        </div>
    );
};

export default Profile;
