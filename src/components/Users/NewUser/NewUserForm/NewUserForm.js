import React, { useState } from 'react';
import Toast from '../../../UI/Toast/Toast';

import styles from './NewUserForm.module.css';

const NewUserForm = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [submissionIsInvalid, setSubmissionIsInvalid] = useState(false);

    const usernameInputHandler = event => {
        setEnteredUsername(event.target.value);
        console.log(enteredUsername);
    }

    const ageInputHandler = event => {
        setEnteredAge(event.target.value)
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        const newUser = {
            username: enteredUsername,
            age: +enteredAge,
            id: Math.random()
        }
        
        if (!enteredUsername || !enteredAge) {
            setSubmissionIsInvalid(true);
        } else {
            props.addNewUser(newUser);
        }
        setEnteredUsername('');
        setEnteredAge('');
    }

    const toggleToast = () => {
        setSubmissionIsInvalid(!submissionIsInvalid);
    }

    return (
        <>  {submissionIsInvalid ?
            <Toast title={'Invalid Input'} content='Please enter a valid name and age (non-empty values).' toggle={toggleToast} />
            : null
        }
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
        </>
    )
};

export default NewUserForm;