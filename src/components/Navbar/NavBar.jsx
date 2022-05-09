import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.itemA}`}>
                <NavLink to="/Profile" activeClassName={s.word}>
                    Profile
                </NavLink>
            </div>
            <div className={`${s.item} ${s.itemA}`}>
                <NavLink to="/Dialogs" activeClassName={s.word}>
                    Messages
                </NavLink>
            </div>
            <div className={`${s.item} ${s.itemA}`}>
                <NavLink to="/News" activeClassName={s.word}>
                    News
                </NavLink>
            </div>
            <div className={`${s.item} ${s.itemA}`}>
                <NavLink to="/Music" activeClassName={s.word}>
                    Music
                </NavLink>
            </div>
            <div className={`${s.item} ${s.itemA}`}>
                <NavLink to="/Users" activeClassName={s.word}>
                    Users
                </NavLink>
            </div>
            <div className={`${s.item} ${s.itemS}`}>
                <NavLink to="/Settings" activeClassName={s.word}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
