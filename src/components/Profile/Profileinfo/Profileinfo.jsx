import Preloader from "../../common/preloader/preloader";
import s from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/img/def.jpg";
import React, { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const Profileinfo = ({
    profile,
    status,
    updateStatus,
    savePhoto,
    isOwner,
    saveProfile,
}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div>
            <div className={s.photo}>
                <img
                    src="https://weandthecolor.com/wp-content/uploads/2020/12/Japan-Nights-by-Aishy.jpg"
                    alt="none"
                />
                {isOwner && (
                    <input type={"file"} onChange={onMainPhotoSelected} />
                )}
            </div>

            <div className={s.photoA}>
                <img alt="none" src={profile.photos.large || userPhoto} />
            </div>

            <div>
                <h4 className={s.name}>{profile.fullName}</h4>
            </div>

            <div className={s.info}>
                {editMode ? (
                    <ProfileDataForm
                        initialValues={profile}
                        profile={profile}
                        status={status}
                        updateStatus={updateStatus}
                        onSubmit={onSubmit}
                    />
                ) : (
                    <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        status={status}
                        updateStatus={updateStatus}
                        goToEditMode={() => {
                            setEditMode(true);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

const ProfileData = ({
    profile,
    status,
    updateStatus,
    isOwner,
    goToEditMode,
}) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={goToEditMode}>Edit</button>
                </div>
            )}
            <div>
                <div>
                    <b>Full name</b>:{profile.fullName}
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
                <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>My professional skills</b>:
                    {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>About me</b>:{profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    );
};

export default Profileinfo;
