import React from "react";
import s from "./users.module.css";
import userPhoto from "../assets/img/def.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        {" "}
                        <img
                            alt="none"
                            src={
                                user.photos.small != null
                                    ? user.photos.small
                                    : userPhoto
                            }
                            className={s.photo}
                        />{" "}
                    </NavLink>
                </div>
                <div>
                    {user.followed ? (
                        <button
                            className={s.aButton}
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onClick={() => {
                                unfollow(user.id);
                            }}
                        >
                            UnFollow
                        </button>
                    ) : (
                        <button
                            className={s.dButton}
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            onClick={() => {
                                follow(user.id);
                            }}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    );
};
export default User;
