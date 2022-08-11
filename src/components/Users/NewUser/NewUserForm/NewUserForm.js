import React, { useState } from 'react';

import styles from './NewUserForm.module.css';

const NewUserForm = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameInputHandler = event => {
        setEnteredUsername(event.target.value);
        console.log(enteredUsername);
    }

    const ageInputHandler = event => {
        setEnteredAge(event.target.value)
        console.log(enteredAge);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        const newUser = {
            username: enteredUsername,
            age: +enteredAge
        }
        
        props.addNewUser(newUser);
        setEnteredUsername('');
        setEnteredAge('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Username</label>
            <input type="text" value={enteredUsername} onChange={usernameInputHandler} />
            <label>Age(Years)</label>
            <input type="number" value={enteredAge} onChange={ageInputHandler} min="1" step="1" />
            <button type="submit">Add User</button>
        </form>
    )
};

export default NewUserForm;