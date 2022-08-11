import React from 'react';
import Card from '../../UI/Card/Card';
import NewUserForm from './NewUserForm/NewUserForm';

import styles from './NewUser.module.css';

const NewUser = props => {
    const addNewUser = (newUser) => {
        props.addNewUser(newUser);
    };

    return (
        <Card>
            <NewUserForm addNewUser={addNewUser} />
        </Card>
    )
};

export default NewUser;