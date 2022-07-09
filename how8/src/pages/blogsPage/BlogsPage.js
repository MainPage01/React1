import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, Link} from "react-router-dom";
import Header from "../../components/header/Header";

function BlogsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [])

    const navigate=useNavigate()

 

    return (
        <div className="container">
            <h1>Blogs page again</h1>
            <div>
                {
                    posts.slice(0, 5).map(post => (
                        <div>
                            <h1>{post.title}</h1>
                            <Link to={`/blogs/${post.id}`}>show...</Link>
                        </div>
                    ))
                }

                <button>
                <Link to="/login">go to login</Link>

                </button>
                <ul>

                <li onClick={navigate}>go back</li>

                </ul>
            </div>
        </div>
    );
}

export default BlogsPage;