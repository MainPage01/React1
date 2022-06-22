import React from "react";
import Header from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";


function AboutPage(props) {
    return (
        <div>
            <Header/>
            <h1>About Page</h1>
            <p>
                {props.text}
            </p>
            <Footer
                phoneHumber="+996555 505 505"
                email="geekTech@gmail.com"
            />
        </div>
    )
}

export default AboutPage;