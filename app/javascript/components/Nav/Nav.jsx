import React from "react";
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <div>
                <NavLink to = "/" >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to = "/posts" >
                    Posts
                </NavLink>
            </div>
        </div>
    )
}

export default Nav;