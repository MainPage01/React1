import React from "react";
import Users from "../../components/users/Users";

function UsersPage() {
    const users = ["Dastan", "Zainab", "Islam", "Sanzhar"];
    const user = {
        name: "kana",
        position: "Front end 13-2s",
        salaries: "...",
        property: "..."
    }

    return (
        <div>
            <Users usersProps={users} userProps={user} />
        </div>
    )

    // return(
    //     <h1>

    //     </h1>
    // )

}

export default UsersPage;