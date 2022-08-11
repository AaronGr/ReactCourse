import React, { useState } from 'react';
import NewUser from './NewUser/NewUser';

import styles from './Users.module.css';
import UsersList from './UsersList/UsersList';

const Users = props => {
    const [users, setUsers] = useState(props.users);

    const addNewUser = (newUser) => {
        setUsers((prevState) => {
            return [...prevState, newUser];
        });
    }

    return (
        <>
            <NewUser addNewUser={addNewUser} />
            <UsersList users={users} />
        </>
    )
};

export default Users;