import React, { useState } from 'react';

function NamePage(props) {


    const [message,setMessage] = useState({
        name: "",
        surName: "",
        middleName: "",

    })

    const changeInput = (e) => {
        setMessage({
            ...message,
            [e.target.name]:e.target.value
        }
        );
    };

    const deleteAll = () => {
        setMessage(prev => {
            return {
                ...prev,
                name: "",
                surName: "",
                middleName: "",
            }
        })
    }

    const submit =(e)=>{
        e.preventDefault()
        console.log(message)

        alert("Операция отправка данных прошла успешно")

        deleteAll()
    }

    return (
        <div>
            <form onSubmit={submit}>
            <input
                name="name"
                placeholder='name'
                type="text"
                onChange={changeInput}
                value={message.name}
            />
            <input
                name="surName"
                placeholder='surName'
                type="text"
                onChange={changeInput}
                value={message.surName}
            />
            <input
                name="middleName"
                placeholder='middleName'
                type="text"
                onChange={changeInput}
                value={message.middleName}
            />
            <button type='submit'>отправить</button>
            </form>
           
        </div>
    );
}

export default NamePage;