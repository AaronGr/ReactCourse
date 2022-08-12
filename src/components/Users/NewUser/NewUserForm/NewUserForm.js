import React, { useRef, useState } from 'react';
import ErrorModal from '../../../UI/Toast/Toast';

import styles from './NewUserForm.module.css';

const NewUserForm = props => {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const [submissionIsInvalid, setSubmissionIsInvalid] = useState(false);

    const formSubmitHandler = event => {
        event.preventDefault();
        const enteredName = usernameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        const newUser = {
            username: enteredName,
            age: +enteredUserAge,
            id: Math.random()
        }
        
        if (!enteredName || !enteredUserAge) {
            setSubmissionIsInvalid(true);
        } else {
            props.addNewUser(newUser);
        }

        usernameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const toggleToast = () => {
        setSubmissionIsInvalid(!submissionIsInvalid);
    }

    return (
        <>  {submissionIsInvalid ?
            <ErrorModal title={'Invalid Input'} content='Please enter a valid name and age (non-empty values).' toggle={toggleToast} />
            : null
        }
            <form onSubmit={formSubmitHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label><strong>Username</strong></label>
                        <input 
                            type="text" 
                            ref={usernameInputRef} />
                    </div>
                    <div className={styles.control}>
                        <label><strong>Age(Years)</strong></label>
                        <input 
                            type="number" 
                            min="1" 
                            step="1" 
                            ref={ageInputRef}
                            />
                    </div>
                </div>
                <div className={styles.action}>
                    <button 
                        type="submit">
                            <strong>Add User</strong>
                    </button>
                </div>
            </form>
        </>
    )
};

export default NewUserForm;