import React from 'react';

import { Link } from 'react-router-dom'
function Header(props) {
    return (
        <div>
            <h3>
                this is the header
            </h3>
            <ul>
                <li>
                    <Link to="/">main page</Link>

                </li>

                <li>
                    <Link to="/second">second page</Link>

                </li>
                <li>
                    <Link to="/third">third page</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;