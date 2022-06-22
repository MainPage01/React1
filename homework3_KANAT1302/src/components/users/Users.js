import React from 'react';
import classes from "./users.module.css";

function Users(props) {
    return (
        <ul>
            {
                props.users.length > 0
                    ?
                    props.users.map((user, key) => {
                        return <li
                            className={user.status ? classes.yes : classes.no}
                            key={user.id}
                        >

                            {user.name}
                            {user.position}
                        </li>
                    })

                    :
                    <li className={classes.no}>Пользователей нет в базе данных</li>

            }
        </ul>
    );
}

export default Users;