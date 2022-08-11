import React from "react";
import Card from "../../UI/Card/Card";
import SingleUser from "../SingleUser/SingleUser";
import Users from "../Users";

import styles from './UsersList.module.css';

const UsersList = props => {
    return (
        <Card className="">
            <ul>
                {props.users.map((user) => (
                    <SingleUser 
                        key={user.id}
                        username={user.username}
                        age={user.age}
                    />
                ))}
            </ul>
        </Card>
    )
};

export default UsersList;