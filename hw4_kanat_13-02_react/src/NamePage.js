

import React, { useState } from 'react';

import classes from "./App.css"

function NamePage(props) {
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        age: "",
        address: ""
    })

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
    
        console.log(user)
    }

    return (
        

            <form className='column' onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="surname"
                    name="lastName"
                    value={user.lastName}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="age"
                    name="age"
                    value={user.age}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="address"
                    name="address"
                    value={user.address}
                    onChange={changeInput}

                />

                <button type="submit">submit</button>
            </form>
         
    
    );
}

export default NamePage;







