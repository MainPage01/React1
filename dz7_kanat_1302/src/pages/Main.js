import React, { useState } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'

function Main(props) {
    const [users, setUsers] = useState([])

    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
    })

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }



    return (
        <div className='container'>
            <Header />
            <h1>main</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.


            <p>
                Здесь информация главного компонента
            </p>
            <h5>
                Также здесь есть будет присутсвовать запрос
            </h5>
            <button onClick={ getUsers }>
                Click Here
            </button>


            <Footer />

        </div>

    );
}

export default Main;