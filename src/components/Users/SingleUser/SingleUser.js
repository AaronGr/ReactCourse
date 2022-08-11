import React from 'react';

import styles from './SingleUser.module.css';

const SingleUser = props => {
    return (
        <li>
            <div className={styles.user}>
                <p>{props.username}</p>
                <p>({props.age})</p>
            </div>
        </li>
    )
};

export default SingleUser;