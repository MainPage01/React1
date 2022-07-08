import React from 'react';

import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        
             <div>
                <h1>THis is footer</h1>
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

export default Footer;