import style from "../StartPage/StartPage.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../../Routes";

export const Header = () => {
    return (
        <div className={style.page}>
            <NavLink to={PATH.START_PAGE} className={style.button__link}>Start Page</NavLink>
            <NavLink to={PATH.USERS_PAGE} className={style.button__link}>Get User</NavLink>
        </div>
    )
}
