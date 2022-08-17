import React from 'react';

import styles from './MealsSummary.module.css';

const MealsSummary = (props) => { 
    return (
        <div className={styles.summary}>
            <h2>{props.title}</h2>
            <p>{props.content1}</p>
            <p>{props.content2}</p>
        </div>
    )
};

export default MealsSummary;