import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'

function Third(props) {
    return (
        <div className='container'>
            <Header/>
            <h1>third</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Это третий компонент
            <Footer/>
        </div>
    );
}

export default Third;