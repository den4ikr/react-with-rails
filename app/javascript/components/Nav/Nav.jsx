import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.css";

const Nav = (props) => {
    return (
        <div className={s.row} >
            <div className={s.menu__item} >
                <NavLink to = "/" >
                    Home
                </NavLink>
            </div>
            <div className={s.menu__item} >
                <NavLink to = "/posts" >
                    Posts
                </NavLink>
            </div>
        </div>
    )
}

export default Nav;