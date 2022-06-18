import './App.css';
import React from "react";

import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import UsersPage from "./pages/usersPage/UsersPage";
import AboutUs from './pages/AboutUs/AboutUs';
import AboutProduct from './pages/aboutProduct/AboutProduct'



function App() {
    return (
        <div className='App'>

            {/*<h1>my app</h1>*/}

            {/*<MainPage text="i am text"/>*/}

            <MainPage text="i am text two" />

            <AboutPage about="We are producing the best products" />

            <UsersPage />

            <AboutUs text ="
            I am about us" text2=" i am about us2"/>

                {/*<AboutProduct/>*/}

                </div>
    );
}

export default App;
