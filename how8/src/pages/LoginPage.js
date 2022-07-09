import React from 'react';

function LoginPage(props) {
    return (
        <div>
            <input type="text" placeholder='login'/>
            <input type="text" placeholder='password'/>

            <button>login</button>
        </div>
    );
}

export default LoginPage;