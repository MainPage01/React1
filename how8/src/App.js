import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import Header from "./components/header/Header";
import LoginPage from "./pages/loginPage/LoginPage";
import Blog from "./components/blog/Blog";
import Layout from "./components/layout/Layout";
import LayoutBack from './components/layout/LayoutBack';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Layout /> }>
                        <Route index element={ <MainPage /> } />
                        <Route path="blogs" element={ <BlogsPage /> } />
                    </Route>
                    <Route path="/login" element={ <LoginPage /> } />


                    <Route path="/" element={ <LayoutBack /> }>
                        <Route path="blogs/:name" element={ <Blog /> } />

                    </Route>
                </Routes>
\
        </BrowserRouter>
    );
}
export default App;
