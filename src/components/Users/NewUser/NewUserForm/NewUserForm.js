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
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label><strong>Username</strong></label>
                    <input type="text" value={enteredUsername} onChange={usernameInputHandler} />
                </div>
                <div className={styles.control}>
                    <label><strong>Age(Years)</strong></label>
                    <input type="number" value={enteredAge} onChange={ageInputHandler} min="1" step="1" />
                </div>
            </div>
            <div className={styles.action}>
                <button type="submit"><strong>Add User</strong></button>
            </div>
        </form>
    )
};

export default NewUserForm;