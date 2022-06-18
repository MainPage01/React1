import React from 'react';

const Users = (props) => {
    return (
        <div>
            <ul>
                {props.usersProps.map(user => <li>{user}</li>)}
            </ul>

            <ul>
                <li>name: {props.userProps.name}</li>
                <li>position: {props.userProps.position}</li>
                <li>salaries: {props.userProps.salaries}</li>
                <li>property: {props.userProps.property}</li>
            </ul>

            <ul>
                <li>Salaries: {props.userProps.salaries}</li>
            </ul>

        </div>

    );
};

export default Users;