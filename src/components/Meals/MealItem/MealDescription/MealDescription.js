import React from 'react';

import styles from './MealDescription.module.css';

const MealDescription = (props) => { 
    return (
        <div className={styles['meal-description']}>
            <h1>{props.name}</h1>
            <p className={styles.describe}>{props.description}</p>
            <p className={styles.price}>${props.price}</p>
        </div>
    )
};

export default MealDescription;