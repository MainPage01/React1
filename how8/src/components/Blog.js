import React from 'react';

import { useParams } from 'react-router-dom';


function Blog(props) {

    const [post,setPost]=useState({});
    const params = useParams();

    useEffect(() => {
    

        fetch(`https://jsonplaceholder.typicode.com/posts/${params.name}`)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);


    return (
        <div>

            <h1>
                {post.title}
            </h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        </div>
    );
}

export default Blog;