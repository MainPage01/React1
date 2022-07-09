import React from 'react';


import { Outlet, useNavigate } from 'react-router-dom';

function LayoutBack(props) {



    const navigate =useNavigate()
    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>

            <Outlet/>
        </div>
    );
} 

export default LayoutBack;