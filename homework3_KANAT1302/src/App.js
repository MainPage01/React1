import './App.css';
import React from "react";
import MainPage from "./pages/mainPage/MainPage"
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import UsersPage from "./pages/usersPage/UsersPage";
import BlogPage from "./pages/blogPage/BlogPage";
// import Comp from "./components/newcomponent1/Comp"


function App() {
        const role = 1;
        return  role ? <UsersPage/> : <BlogPage title="Hello user"/>

}
//
//
// function App(){
//         return(
//             <Comp/>
//         )
//
// }



export default App;
