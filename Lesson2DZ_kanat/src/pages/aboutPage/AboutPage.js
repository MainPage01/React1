import React from "react";
import Header from "../../components/header/Header";

function AboutPage(props) {
    return (
        <div>
            <h1 className="abtp">About page - {props.about}</h1>
        </div>
    )
}
export default AboutPage;