import React from 'react';

import styles from './MealAdder.module.css';

const MealAdder = (props) => { 
    return (
        <form>
            <div className={styles.controls}>
                <label for='item-amount'>Amount</label>
                <input type='number' min='1' step='1' id='item-amount' />
            </div>
            <div className={styles.action}>
                <button type='submit'>+Add</button>
            </div>
        </form>
    )
}

export default MealAdder;