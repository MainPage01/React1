import React from 'react';



function AboutUs ({text, text2}) {

    return (
        <div className="about">
            <ul>
                {text}
            </ul>
            <ul>
                {text2}
            </ul>
            <li>
                <li>Onas:</li>
                <li>Кто мы:</li>
            </li>
        </div>
    )
}

export default AboutUs;
