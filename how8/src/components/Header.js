import React from 'react';
import {NavLink}from 'react-router-dom'
function Header(props) {
    return (
        <ul>
            <li>
                <NavLink to="/">
MAin page
                </NavLink>
            </li>


            <li>
                <NavLink to="/blogs">
                    blogspage
                </NavLink>
            </li>


        </ul>
    );
}

export default Header;