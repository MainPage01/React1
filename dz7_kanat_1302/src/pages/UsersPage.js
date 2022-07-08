import React from 'react';

const UsersPage = ({users}) => (
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, key) => {
                        return (
                            <tr key={ key }>
                                <th>{ user.id }</th>
                                <td>{ user.name }</td>
                                <td>{ user.username }</td>
                                <td>@{ user.email }</td>
                            </tr>
                        )
                    }

                    )
                }



            </tbody>
        </table>
        ))



    </div>
);

export default UsersPage;