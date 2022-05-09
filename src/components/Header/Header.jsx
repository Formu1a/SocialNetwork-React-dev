import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import s from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={`${s.header} ${s.img} `}>
            <img
                src="https://yangv85.files.wordpress.com/2012/11/linkin-park-live1.jpg"
                alt="none"
            ></img>

            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {" "}
                        {props.login} -{" "}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};
export default Header;
