import React from 'react';
import Users from "../../components/users/Users";
import Header from "../../components/header/Header";
import Comp from "../../components/newcomponent1/Comp"
import SecondComp from "../../components/secondcomponent/SecondComp";


function UsersPage(props) {
    const users = [
        {
            id: 1,
            name: "Dastan",
            position: " student",
            status: true
        },
        {
            id: 2,
            name: "Kanat",
            position: " worker",
            status: true
        },
        {
            id: 3,
            name: "Zainab",
            position: " pupil",
            status: false
        },
        {
            id: 4,
            name: "Samat",
            position: " ;сo-worker",
            status: false
        }
    ];
    return (
        <div>
            <Header/>
            <Users users={users} />
            <Comp/>
            <SecondComp/>
        </div>
    );
}


export default UsersPage;